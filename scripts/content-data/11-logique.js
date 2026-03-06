// Discipline definition: Logique formelle
// 5 hubs, 25 lessons — all content in French

module.exports = {
  slug: 'logique',
  title: 'Logique formelle',
  description: 'Découvrez la logique propositionnelle, les prédicats, les preuves formelles et les grands théorèmes de Gödel.',
  icon: '🧩',
  cat: 'Logique formelle',
  themeSlug: 'sciences-exactes',
  accent: '#7a9ee0',
  accent2: '#9eb8ed',
  accentDim: 'rgba(122,158,224,0.1)',
  accentHero: 'rgba(122,158,224,0.08)',
  introTitle: 'Qu\'est-ce que la logique formelle ?',
  introText: 'La logique formelle est la science du raisonnement valide. Elle étudie les règles qui permettent de passer de prémisses à des conclusions de manière rigoureuse, indépendamment du contenu des propositions. Née dans l\'Antiquité avec Aristote, elle a connu une révolution au XIXe siècle grâce à Frege, Boole et Russell, avant d\'être profondément transformée par les théorèmes de Gödel au XXe siècle. Aujourd\'hui, la logique est au cœur des mathématiques, de l\'informatique et de la philosophie analytique.',
  introHighlight: 'La logique formelle ne dit pas ce qui est vrai dans le monde : elle dit ce qui découle nécessairement de ce que l\'on admet comme vrai. C\'est la grammaire universelle du raisonnement.',
  articleLow: 'la',
  hubs: [
    {
      slug: 'logique-propositionnelle',
      title: 'Logique propositionnelle',
      description: 'Les propositions, les connecteurs logiques, les tables de vérité, les tautologies et les formes normales.',
      introText: 'La logique propositionnelle est le socle de tout raisonnement formel. Elle étudie les énoncés déclaratifs (propositions) que l\'on peut combiner à l\'aide de connecteurs comme « et », « ou », « non » et « implique ». Chaque proposition est soit vraie, soit fausse, et la valeur de vérité d\'une formule composée dépend uniquement de la valeur de ses composantes.',
      introHighlight: 'La logique propositionnelle est le premier étage de l\'édifice logique : simple mais puissante, elle permet déjà d\'analyser la validité de la plupart des raisonnements courants.',
      lessons: [
        {
          slug: 'propositions',
          title: 'Propositions et valeurs de vérité',
          description: 'La notion de proposition, le principe de bivalence et les fondements du calcul propositionnel.',
          intro: 'Une proposition est un énoncé déclaratif susceptible d\'être vrai ou faux. Le principe de bivalence, fondamental en logique classique, affirme que toute proposition possède exactement l\'une de ces deux valeurs de vérité. Ce principe simple donne naissance à un calcul d\'une puissance remarquable.',
          introHighlight: 'La logique commence par une décision radicale : tout énoncé est soit vrai, soit faux. Il n\'y a pas de troisième possibilité en logique classique.',
          sections: [
            {
              title: 'Qu\'est-ce qu\'une proposition ?',
              paragraphs: ['En logique formelle, une proposition est un énoncé déclaratif qui possède une valeur de vérité déterminée : vrai (V ou 1) ou faux (F ou 0). L\'énoncé « Paris est la capitale de la France » est une proposition (vraie). L\'énoncé « 2 + 3 = 7 » est aussi une proposition (fausse). En revanche, une question (« Quelle heure est-il ? ») ou un ordre (« Fermez la porte ! ») ne sont pas des propositions car on ne peut leur attribuer de valeur de vérité.', 'Les propositions atomiques (ou élémentaires) sont celles qui ne peuvent pas être décomposées en sous-propositions. On les note généralement par des lettres minuscules : p, q, r, s. Les propositions composées sont formées en combinant des propositions atomiques à l\'aide de connecteurs logiques.'],
              highlight: 'Seuls les énoncés déclaratifs sont des propositions : ils affirment quelque chose du monde et peuvent être jugés vrais ou faux.'
            },
            {
              title: 'Le principe de bivalence',
              paragraphs: ['Le principe de bivalence stipule que toute proposition est soit vraie, soit fausse, sans troisième possibilité. Ce principe est le fondement de la logique classique et remonte à Aristote. Il est distinct du principe du tiers exclu (p ∨ ¬p est toujours vrai) bien que les deux soient étroitement liés.', 'Ce principe a été contesté par certains courants. Les logiques intuitionnistes (Brouwer, Heyting) rejettent le tiers exclu pour les objets mathématiques dont l\'existence n\'a pas été construite. Les logiques multivaluées (Łukasiewicz) admettent une troisième valeur « indéterminé ». La logique floue (Zadeh) autorise des degrés de vérité entre 0 et 1. Malgré ces alternatives, la logique classique bivalente reste le cadre standard en mathématiques et en informatique.'],
              highlight: 'Le principe de bivalence est un choix fondateur : l\'accepter, c\'est entrer dans la logique classique ; le refuser ouvre la voie aux logiques non classiques.'
            },
            {
              title: 'Variables propositionnelles et langage formel',
              paragraphs: ['Le langage de la logique propositionnelle se compose de trois types d\'éléments : les variables propositionnelles (p, q, r...) qui représentent des propositions atomiques, les connecteurs logiques (¬, ∧, ∨, →, ↔) qui permettent de former des propositions composées, et les parenthèses qui fixent la priorité des opérations.', 'Une formule bien formée (fbf) respecte les règles de syntaxe du calcul propositionnel. Par exemple, (p ∧ q) → r est une fbf, tandis que ∧p→ ne l\'est pas. La distinction entre syntaxe (les règles de formation) et sémantique (l\'attribution de valeurs de vérité) est fondamentale : une formule peut être syntaxiquement correcte tout en étant fausse.'],
              highlight: 'Le passage du langage naturel au langage formel est le premier geste de la logique : il élimine les ambiguïtés et rend le raisonnement vérifiable mécaniquement.'
            }
          ],
          quiz: [
            {
              q: 'Lequel de ces énoncés est une proposition au sens logique ?',
              opts: ['Quelle heure est-il ?', 'Fermez la porte !', 'La Terre tourne autour du Soleil.', 'Vive la France !'],
              correct: 2,
              explanation: '« La Terre tourne autour du Soleil » est un énoncé déclaratif auquel on peut attribuer une valeur de vérité (vrai). Les questions, ordres et exclamations ne sont pas des propositions.'
            },
            {
              q: 'Que stipule le principe de bivalence ?',
              opts: ['Toute proposition a deux variables.', 'Toute proposition est soit vraie, soit fausse.', 'Toute proposition peut être démontrée.', 'Il existe une infinité de propositions.'],
              correct: 1,
              explanation: 'Le principe de bivalence affirme que chaque proposition possède exactement une valeur de vérité parmi deux : vrai ou faux.'
            },
            {
              q: 'Quel logicien est associé aux logiques multivaluées ?',
              opts: ['Aristote', 'Boole', 'Łukasiewicz', 'Frege'],
              correct: 2,
              explanation: 'Jan Łukasiewicz (1878-1956) a développé les premières logiques à trois valeurs, ajoutant « indéterminé » aux valeurs classiques vrai et faux.'
            }
          ],
          definitions: [
            {
              term: 'Proposition',
              def: 'Énoncé déclaratif susceptible d\'être vrai ou faux. Unité fondamentale du calcul propositionnel.'
            },
            {
              term: 'Principe de bivalence',
              def: 'Principe selon lequel toute proposition possède exactement l\'une des deux valeurs de vérité : vrai ou faux.'
            },
            {
              term: 'Proposition atomique',
              def: 'Proposition élémentaire qui ne peut pas être décomposée en sous-propositions plus simples. Notée p, q, r, etc.'
            },
            {
              term: 'Formule bien formée',
              def: 'Expression du calcul propositionnel qui respecte les règles syntaxiques de formation, par opposition à une suite arbitraire de symboles.'
            },
            {
              term: 'Logique classique',
              def: 'Système logique fondé sur le principe de bivalence et le tiers exclu, par opposition aux logiques intuitionnistes, multivaluées ou floues.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Aristote',
              back: 'Aristote (384-322 av. J.-C.) est le fondateur de la logique formelle. Son Organon codifie le syllogisme et pose le principe de non-contradiction.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot « logique » vient du grec « logos » (λόγος) qui signifie à la fois « parole », « raison » et « calcul ». La logique est littéralement la science du logos.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Pour retenir la bivalence : « En logique classique, c\'est tout ou rien — V ou F, 1 ou 0, blanc ou noir. Pas de gris. »'
            }
          ]
        },
        {
          slug: 'connecteurs-logiques',
          title: 'Connecteurs logiques',
          description: 'La négation, la conjonction, la disjonction, l\'implication et l\'équivalence.',
          intro: 'Les connecteurs logiques sont les opérations fondamentales qui permettent de construire des propositions composées à partir de propositions atomiques. Les cinq connecteurs classiques — négation, conjonction, disjonction, implication et équivalence — suffisent à exprimer toute fonction de vérité.',
          introHighlight: 'Les connecteurs logiques sont à la logique ce que les opérations arithmétiques sont au calcul : les briques élémentaires de toute construction formelle.',
          sections: [
            {
              title: 'Négation et conjonction',
              paragraphs: ['La négation (¬p, lue « non p ») inverse la valeur de vérité d\'une proposition : si p est vrai, ¬p est faux, et inversement. C\'est le seul connecteur unaire (il s\'applique à une seule proposition). La négation correspond au « ne…pas » du langage courant.', 'La conjonction (p ∧ q, lue « p et q ») est vraie uniquement lorsque les deux propositions p et q sont vraies simultanément. Si l\'une des deux est fausse, la conjonction est fausse. En informatique, la conjonction correspond à l\'opérateur AND des portes logiques et du calcul booléen.'],
              highlight: 'La conjonction est exigeante : il suffit qu\'un seul conjoint soit faux pour que l\'ensemble soit faux. C\'est la logique du « tout doit être réuni ».'
            },
            {
              title: 'Disjonction et disjonction exclusive',
              paragraphs: ['La disjonction inclusive (p ∨ q, lue « p ou q ») est vraie dès que l\'une au moins des deux propositions est vraie. Elle n\'est fausse que si p et q sont toutes les deux fausses. Attention : le « ou » logique est inclusif, contrairement au « ou » du langage courant qui est souvent exclusif (« fromage ou dessert »).', 'La disjonction exclusive (p ⊕ q, ou XOR) est vraie lorsque exactement l\'une des deux propositions est vraie, mais pas les deux. Elle correspond au « ou bien…ou bien » du français. On peut la définir à partir des autres connecteurs : p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q). Le XOR est fondamental en cryptographie et en arithmétique binaire.'],
              highlight: 'Le « ou » logique (∨) est inclusif par défaut : « p ou q » est vrai même si les deux sont vrais. Le « ou exclusif » (⊕) interdit ce cas.'
            },
            {
              title: 'Implication et équivalence',
              paragraphs: ['L\'implication matérielle (p → q, lue « si p alors q ») est l\'un des connecteurs les plus importants et les plus subtils. Elle est fausse uniquement lorsque p est vrai et q est faux. En particulier, si p est faux, alors p → q est toujours vrai, quelle que soit la valeur de q. Ce phénomène, appelé « implication matérielle vacuement vraie », surprend souvent les débutants.', 'L\'équivalence (p ↔ q, lue « p si et seulement si q ») est vraie lorsque p et q ont la même valeur de vérité. Elle correspond à une double implication : (p → q) ∧ (q → p). En mathématiques, le « si et seulement si » (abrégé « ssi ») établit une condition nécessaire et suffisante.'],
              highlight: 'L\'implication p → q est fausse dans un seul cas : quand la prémisse est vraie et la conclusion fausse. Une prémisse fausse rend l\'implication automatiquement vraie.'
            }
          ],
          quiz: [
            {
              q: 'Quelle est la valeur de vérité de p → q lorsque p est faux et q est faux ?',
              opts: ['Vrai', 'Faux', 'Indéterminé', 'Cela dépend du contexte'],
              correct: 0,
              explanation: 'L\'implication matérielle p → q est fausse uniquement quand p est vrai et q est faux. Si p est faux, p → q est vrai quelle que soit la valeur de q.'
            },
            {
              q: 'Comment se définit la disjonction exclusive p ⊕ q ?',
              opts: ['p ∧ q', '(p ∨ q) ∧ ¬(p ∧ q)', 'p → q', '¬p ∧ ¬q'],
              correct: 1,
              explanation: 'Le XOR est vrai quand exactement une des deux propositions est vraie : c\'est la disjonction inclusive moins le cas où les deux sont vraies.'
            },
            {
              q: 'Quel connecteur est le seul connecteur unaire parmi les cinq classiques ?',
              opts: ['La conjonction ∧', 'La disjonction ∨', 'La négation ¬', 'L\'implication →'],
              correct: 2,
              explanation: 'La négation est le seul connecteur qui s\'applique à une seule proposition (unaire). Tous les autres sont binaires, opérant sur deux propositions.'
            }
          ],
          definitions: [
            {
              term: 'Négation (¬)',
              def: 'Connecteur unaire qui inverse la valeur de vérité d\'une proposition. Si p est vrai, ¬p est faux.'
            },
            {
              term: 'Conjonction (∧)',
              def: 'Connecteur binaire « et » : p ∧ q est vrai uniquement quand p et q sont tous deux vrais.'
            },
            {
              term: 'Disjonction (∨)',
              def: 'Connecteur binaire « ou inclusif » : p ∨ q est vrai dès qu\'au moins l\'une des deux propositions est vraie.'
            },
            {
              term: 'Implication matérielle (→)',
              def: 'Connecteur « si…alors » : p → q est faux uniquement quand p est vrai et q est faux.'
            },
            {
              term: 'Équivalence (↔)',
              def: 'Connecteur « si et seulement si » : p ↔ q est vrai quand p et q ont la même valeur de vérité.'
            }
          ],
          memos: [
            {
              front: 'Moyen mnémotechnique : l\'implication',
              back: 'Pensez à une promesse : « Si tu ranges ta chambre (p), je t\'offre une glace (q). » La promesse n\'est trahie que si la chambre est rangée (p vrai) mais qu\'il n\'y a pas de glace (q faux). Si tu ne ranges pas, la promesse n\'est pas violée.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'George Boole (1815-1864) a montré que la logique pouvait se réduire à un calcul algébrique sur {0, 1}. Son algèbre booléenne est le fondement de tous les circuits numériques modernes.'
            },
            {
              front: 'Priorité des connecteurs',
              back: 'De la plus forte à la plus faible : ¬ (négation) > ∧ (conjonction) > ∨ (disjonction) > → (implication) > ↔ (équivalence). Mnémo : « Non Et Ou Implique Équivaut ».'
            }
          ]
        },
        {
          slug: 'tables-verite',
          title: 'Tables de vérité',
          description: 'Construction et lecture des tables de vérité, méthode d\'évaluation systématique des formules.',
          intro: 'La table de vérité est l\'outil fondamental de la logique propositionnelle. Elle permet d\'évaluer systématiquement la valeur de vérité d\'une formule pour toutes les combinaisons possibles de valeurs de ses variables. C\'est un procédé mécanique, exhaustif et infaillible pour déterminer si une formule est une tautologie, une contradiction ou une contingence.',
          introHighlight: 'La table de vérité est la méthode brute-force de la logique : elle explore tous les cas possibles. C\'est simple, sûr, mais le nombre de lignes double à chaque nouvelle variable.',
          sections: [
            {
              title: 'Construction d\'une table de vérité',
              paragraphs: ['Pour construire la table de vérité d\'une formule contenant n variables propositionnelles, on crée 2ⁿ lignes correspondant à toutes les combinaisons possibles de vrai (V) et faux (F). Pour deux variables p et q, il y a 4 lignes ; pour trois variables, 8 lignes ; pour quatre, 16 lignes.', 'On place les variables dans les colonnes de gauche, puis on ajoute une colonne pour chaque sous-formule, en commençant par les plus internes. La dernière colonne donne la valeur de vérité de la formule complète. Par exemple, pour évaluer (p ∧ q) → r, on calcule d\'abord p ∧ q, puis le résultat de l\'implication avec r.'],
              highlight: 'Pour n variables, la table de vérité comporte 2ⁿ lignes. Avec 10 variables, il faut déjà 1 024 lignes : la méthode devient vite impraticable.'
            },
            {
              title: 'Tautologies et contradictions',
              paragraphs: ['Une tautologie est une formule qui est vraie pour toutes les combinaisons de valeurs de ses variables. La colonne finale de sa table de vérité ne contient que des V. Exemple : p ∨ ¬p (tiers exclu) est une tautologie. Une tautologie est une vérité logique, indépendante du contenu des propositions.', 'Une contradiction est une formule qui est fausse pour toutes les combinaisons. Exemple : p ∧ ¬p est une contradiction. Une contingence est une formule qui est vraie dans certains cas et fausse dans d\'autres (ni tautologie, ni contradiction). La plupart des formules intéressantes en pratique sont des contingences.'],
              highlight: 'Les tautologies sont les théorèmes de la logique propositionnelle : elles sont vraies par leur seule forme, sans aucune information sur le monde.'
            },
            {
              title: 'Équivalences logiques fondamentales',
              paragraphs: ['Deux formules sont logiquement équivalentes (notées ≡) lorsqu\'elles ont la même table de vérité. Les lois de De Morgan sont parmi les équivalences les plus importantes : ¬(p ∧ q) ≡ ¬p ∨ ¬q et ¬(p ∨ q) ≡ ¬p ∧ ¬q. Elles permettent de « distribuer » la négation sur une conjonction ou une disjonction.', 'Autres équivalences fondamentales : la commutativité (p ∧ q ≡ q ∧ p), l\'associativité ((p ∧ q) ∧ r ≡ p ∧ (q ∧ r)), la distributivité (p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)), l\'absorption (p ∧ (p ∨ q) ≡ p), et la contraposition (p → q ≡ ¬q → ¬p). Ces lois permettent de simplifier les formules et de prouver des équivalences sans construire de table.'],
              highlight: 'Les lois de De Morgan sont l\'outil de simplification le plus utilisé : elles transforment « non(A et B) » en « (non A) ou (non B) » et inversement.'
            }
          ],
          quiz: [
            {
              q: 'Combien de lignes comporte la table de vérité d\'une formule à 4 variables ?',
              opts: ['4', '8', '16', '32'],
              correct: 2,
              explanation: 'Pour n variables, la table comporte 2ⁿ lignes. Avec 4 variables : 2⁴ = 16 lignes.'
            },
            {
              q: 'Comment appelle-t-on une formule vraie dans tous les cas ?',
              opts: ['Une contradiction', 'Une contingence', 'Une tautologie', 'Une implication'],
              correct: 2,
              explanation: 'Une tautologie est une formule dont la table de vérité ne contient que des V (vrai) dans la colonne finale.'
            },
            {
              q: 'Que donne ¬(p ∧ q) selon les lois de De Morgan ?',
              opts: ['¬p ∧ ¬q', '¬p ∨ ¬q', 'p ∨ q', 'p → q'],
              correct: 1,
              explanation: 'La première loi de De Morgan affirme que ¬(p ∧ q) ≡ ¬p ∨ ¬q : la négation d\'une conjonction devient une disjonction de négations.'
            }
          ],
          definitions: [
            {
              term: 'Table de vérité',
              def: 'Tableau exhaustif donnant la valeur de vérité d\'une formule pour toutes les combinaisons possibles de valeurs de ses variables propositionnelles.'
            },
            {
              term: 'Tautologie',
              def: 'Formule qui est vraie pour toute interprétation de ses variables. Exemple : p ∨ ¬p (loi du tiers exclu).'
            },
            {
              term: 'Contradiction',
              def: 'Formule qui est fausse pour toute interprétation de ses variables. Exemple : p ∧ ¬p.'
            },
            {
              term: 'Lois de De Morgan',
              def: 'Équivalences fondamentales : ¬(p ∧ q) ≡ ¬p ∨ ¬q et ¬(p ∨ q) ≡ ¬p ∧ ¬q. Elles distribuent la négation sur les connecteurs.'
            },
            {
              term: 'Contraposition',
              def: 'Équivalence logique : p → q ≡ ¬q → ¬p. Nier la conclusion force à nier la prémisse.'
            }
          ],
          memos: [
            {
              front: 'Astuce : lois de De Morgan',
              back: '¬(p ∧ q) ≡ ¬p ∨ ¬q — ¬(p ∨ q) ≡ ¬p ∧ ¬q. Mnémo : « La négation casse le connecteur et retourne les termes. Le ET devient OU, le OU devient ET. »'
            },
            {
              front: 'Nombre clé : 2ⁿ',
              back: 'Une formule à n variables a 2ⁿ lignes dans sa table de vérité. Avec 20 variables, c\'est plus d\'un million de lignes — d\'où l\'intérêt des méthodes algébriques.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Augustus De Morgan (1806-1871) était un mathématicien britannique. Ses lois, formulées en 1847, sont aujourd\'hui utilisées quotidiennement dans la conception de circuits électroniques.'
            }
          ]
        },
        {
          slug: 'tautologies',
          title: 'Tautologies et lois logiques',
          description: 'Les grandes tautologies, le modus ponens, le modus tollens et les schémas de raisonnement valides.',
          intro: 'Les tautologies sont les vérités universelles de la logique propositionnelle : elles sont vraies quelle que soit la valeur de vérité de leurs composantes. Parmi elles, certaines correspondent à des schémas de raisonnement si importants qu\'on leur a donné des noms : modus ponens, modus tollens, syllogisme hypothétique. Ce sont les règles d\'inférence qui structurent toute démonstration.',
          introHighlight: 'Les tautologies sont les théorèmes gratuits de la logique : on n\'a besoin d\'aucune hypothèse pour les affirmer. Elles sont vraies par leur seule structure formelle.',
          sections: [
            {
              title: 'Modus ponens et modus tollens',
              paragraphs: ['Le modus ponens (« mode qui affirme ») est la règle d\'inférence la plus fondamentale : si p → q est vrai et p est vrai, alors q est vrai. Formellement : ((p → q) ∧ p) → q est une tautologie. Exemple : « Si il pleut, la route est mouillée. Il pleut. Donc la route est mouillée. » Cette règle est le moteur de la déduction.', 'Le modus tollens (« mode qui nie ») est le raisonnement par contraposition : si p → q est vrai et q est faux, alors p est faux. Formellement : ((p → q) ∧ ¬q) → ¬p est une tautologie. Exemple : « Si il pleut, la route est mouillée. La route n\'est pas mouillée. Donc il ne pleut pas. » Le modus tollens est la base du raisonnement par l\'absurde.'],
              highlight: 'Le modus ponens avance (de la cause à l\'effet), le modus tollens recule (de l\'absence d\'effet à l\'absence de cause). Ce sont les deux faces de l\'implication.'
            },
            {
              title: 'Syllogisme hypothétique et dilemme',
              paragraphs: ['Le syllogisme hypothétique (ou transitivité de l\'implication) enchaîne deux implications : si p → q et q → r, alors p → r. Formellement : ((p → q) ∧ (q → r)) → (p → r) est une tautologie. C\'est la règle qui permet de construire des chaînes de raisonnement.', 'Le dilemme constructif combine deux implications et une disjonction : si p → q et r → s et p ∨ r, alors q ∨ s. Le dilemme destructif est sa contrepartie : si p → q et r → s et ¬q ∨ ¬s, alors ¬p ∨ ¬r. Ces schémas sont fréquents dans l\'argumentation juridique et philosophique.'],
              highlight: 'Le syllogisme hypothétique est la chaîne logique : si A implique B et B implique C, alors A implique C. C\'est le raisonnement en cascade.'
            },
            {
              title: 'Erreurs de raisonnement courantes',
              paragraphs: ['L\'affirmation du conséquent est un sophisme fréquent : conclure p à partir de p → q et q. Exemple fallacieux : « Si il pleut, la route est mouillée. La route est mouillée. Donc il pleut. » Ceci est invalide car la route peut être mouillée pour d\'autres raisons (arrosage, fonte de neige).', 'La négation de l\'antécédent est un autre sophisme : conclure ¬q à partir de p → q et ¬p. Exemple fallacieux : « Si il pleut, la route est mouillée. Il ne pleut pas. Donc la route n\'est pas mouillée. » Ces erreurs sont très répandues dans le raisonnement quotidien et dans les médias. La logique formelle permet de les identifier avec certitude.'],
              highlight: 'Affirmer le conséquent et nier l\'antécédent sont les deux erreurs logiques les plus courantes. La table de vérité de l\'implication suffit à les démasquer.'
            }
          ],
          quiz: [
            {
              q: 'Quel schéma de raisonnement correspond au modus ponens ?',
              opts: ['p → q, q ⊢ p', 'p → q, ¬q ⊢ ¬p', 'p → q, p ⊢ q', 'p → q, ¬p ⊢ ¬q'],
              correct: 2,
              explanation: 'Le modus ponens : si p implique q, et p est vrai, alors q est vrai. C\'est la règle d\'inférence la plus fondamentale de la logique.'
            },
            {
              q: 'L\'affirmation du conséquent (p → q, q, donc p) est :',
              opts: ['Une tautologie', 'Un raisonnement valide', 'Un sophisme (erreur logique)', 'Le modus tollens'],
              correct: 2,
              explanation: 'L\'affirmation du conséquent est un sophisme : ce n\'est pas parce que q est vrai et que p implique q que p est nécessairement vrai.'
            },
            {
              q: 'Le syllogisme hypothétique permet de déduire :',
              opts: ['p ∧ q à partir de p et q', 'p → r à partir de p → q et q → r', '¬p à partir de p → q et ¬q', 'q à partir de p ∨ q et ¬p'],
              correct: 1,
              explanation: 'Le syllogisme hypothétique est la transitivité de l\'implication : (p → q) ∧ (q → r) entraîne p → r.'
            }
          ],
          definitions: [
            {
              term: 'Modus ponens',
              def: 'Règle d\'inférence : de p → q et p, on déduit q. Littéralement « mode qui affirme (l\'antécédent) ».'
            },
            {
              term: 'Modus tollens',
              def: 'Règle d\'inférence : de p → q et ¬q, on déduit ¬p. Littéralement « mode qui nie (le conséquent) ».'
            },
            {
              term: 'Syllogisme hypothétique',
              def: 'Règle de transitivité de l\'implication : de p → q et q → r, on déduit p → r.'
            },
            {
              term: 'Affirmation du conséquent',
              def: 'Sophisme consistant à conclure p à partir de p → q et q. Raisonnement invalide malgré son apparence de validité.'
            },
            {
              term: 'Règle d\'inférence',
              def: 'Schéma de raisonnement formel permettant de déduire une conclusion à partir de prémisses. Une règle valide préserve la vérité.'
            }
          ],
          memos: [
            {
              front: 'Astuce mnémotechnique',
              back: 'Modus Ponens = « Poser » (on affirme l\'antécédent, on avance). Modus Tollens = « Tailler » (on coupe le conséquent, on recule vers la négation de l\'antécédent).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les termes « modus ponens » et « modus tollens » sont du latin médiéval. Les logiciens scolastiques du Moyen Âge les utilisaient couramment dans leurs disputationes, ancêtres des débats académiques.'
            },
            {
              front: 'Piège classique',
              back: '« Si tu es un chat, tu as quatre pattes. Tu as quatre pattes. Donc tu es un chat. » C\'est l\'affirmation du conséquent : un chien aussi a quatre pattes ! L\'implication n\'est pas réversible.'
            }
          ]
        },
        {
          slug: 'formes-normales',
          title: 'Formes normales',
          description: 'Les formes normales conjonctive (FNC) et disjonctive (FND), la complétude fonctionnelle et les connecteurs de Sheffer.',
          intro: 'Toute formule de la logique propositionnelle peut être réécrite sous une forme canonique appelée forme normale. Les deux principales sont la forme normale conjonctive (FNC) et la forme normale disjonctive (FND). Ces formes standardisées sont essentielles en informatique pour la résolution automatique (algorithme DPLL) et la conception de circuits.',
          introHighlight: 'Les formes normales sont les « écritures canoniques » de la logique : toute formule, aussi complexe soit-elle, peut être réduite à une conjonction de disjonctions (FNC) ou à une disjonction de conjonctions (FND).',
          sections: [
            {
              title: 'Forme normale conjonctive et disjonctive',
              paragraphs: ['Un littéral est une variable propositionnelle (p) ou sa négation (¬p). Une clause est une disjonction de littéraux (p ∨ ¬q ∨ r). La forme normale conjonctive (FNC) est une conjonction de clauses : (p ∨ q) ∧ (¬p ∨ r) ∧ (q ∨ ¬r). Toute formule peut être mise en FNC par application des lois de De Morgan et de la distributivité.', 'La forme normale disjonctive (FND) est l\'inverse : une disjonction de conjonctions de littéraux. Par exemple : (p ∧ q) ∨ (¬p ∧ r) ∨ (q ∧ ¬r). La FND se lit directement sur la table de vérité : chaque ligne où la formule est vraie correspond à un terme de la disjonction (minterme).'],
              highlight: 'La FNC est le format standard pour les solveurs SAT : résoudre un problème NP-complet comme la satisfaisabilité revient à chercher une affectation qui rend vraie chaque clause de la FNC.'
            },
            {
              title: 'Algorithme de mise en forme normale',
              paragraphs: ['Pour mettre une formule en FNC, on applique successivement : (1) élimination des équivalences (p ↔ q → (p → q) ∧ (q → p)), (2) élimination des implications (p → q → ¬p ∨ q), (3) propagation des négations vers l\'intérieur (lois de De Morgan), (4) distribution du ∨ sur le ∧.', 'Exemple : mettons ¬(p → q) en FNC. D\'abord, p → q devient ¬p ∨ q. Puis ¬(¬p ∨ q) devient p ∧ ¬q par De Morgan. C\'est déjà une FNC (conjonction de deux clauses à un seul littéral). La mise en FND suit un procédé analogue, en distribuant le ∧ sur le ∨.'],
              highlight: 'L\'algorithme de mise en FNC est purement mécanique : il suffit d\'appliquer les règles de réécriture dans le bon ordre. C\'est l\'un des premiers algorithmes que l\'on enseigne en logique.'
            },
            {
              title: 'Complétude fonctionnelle et connecteur de Sheffer',
              paragraphs: ['Un ensemble de connecteurs est fonctionnellement complet s\'il permet d\'exprimer toute fonction de vérité. L\'ensemble {¬, ∧, ∨} est fonctionnellement complet, mais on peut faire mieux : {¬, ∧} suffit (car p ∨ q ≡ ¬(¬p ∧ ¬q)), tout comme {¬, ∨} (car p ∧ q ≡ ¬(¬p ∨ ¬q)).', 'Le résultat le plus frappant est qu\'un seul connecteur suffit. Le connecteur de Sheffer (NAND, noté p | q ou p ↑ q) est défini par ¬(p ∧ q). Il est à lui seul fonctionnellement complet : ¬p ≡ p | p, et p ∧ q ≡ (p | q) | (p | q). De même, le NOR (¬(p ∨ q), noté p ↓ q) est seul fonctionnellement complet. En électronique, les portes NAND suffisent à construire n\'importe quel circuit logique.'],
              highlight: 'Un seul connecteur — le NAND (Sheffer) ou le NOR — suffit à exprimer toute la logique propositionnelle. C\'est sur ce principe que sont construits tous les processeurs.'
            }
          ],
          quiz: [
            {
              q: 'Qu\'est-ce qu\'une clause en logique propositionnelle ?',
              opts: ['Une conjonction de variables', 'Une disjonction de littéraux', 'Un ensemble de formules', 'Une table de vérité'],
              correct: 1,
              explanation: 'Une clause est une disjonction (∨) de littéraux. Un littéral est une variable ou sa négation. Exemple de clause : p ∨ ¬q ∨ r.'
            },
            {
              q: 'Quel connecteur unique est fonctionnellement complet ?',
              opts: ['Le ET (∧)', 'Le OU (∨)', 'Le NAND (↑)', 'L\'implication (→)'],
              correct: 2,
              explanation: 'Le NAND (connecteur de Sheffer) est à lui seul fonctionnellement complet : on peut exprimer ¬, ∧, ∨ et tous les autres connecteurs uniquement avec le NAND.'
            },
            {
              q: 'Que signifie FNC en logique ?',
              opts: ['Formule Non Contradictoire', 'Forme Normale Conjonctive', 'Fonction Naturelle Composée', 'Forme Négative Complète'],
              correct: 1,
              explanation: 'FNC signifie Forme Normale Conjonctive : une conjonction (∧) de clauses, chaque clause étant une disjonction (∨) de littéraux.'
            }
          ],
          definitions: [
            {
              term: 'Littéral',
              def: 'Variable propositionnelle (p) ou sa négation (¬p). Brique élémentaire des formes normales.'
            },
            {
              term: 'Clause',
              def: 'Disjonction de littéraux. Exemple : p ∨ ¬q ∨ r. Unité de base de la forme normale conjonctive.'
            },
            {
              term: 'Forme normale conjonctive (FNC)',
              def: 'Conjonction de clauses. Toute formule propositionnelle peut être mise sous cette forme canonique.'
            },
            {
              term: 'Forme normale disjonctive (FND)',
              def: 'Disjonction de conjonctions de littéraux. Se lit directement sur la table de vérité.'
            },
            {
              term: 'Complétude fonctionnelle',
              def: 'Propriété d\'un ensemble de connecteurs suffisant à exprimer toute fonction de vérité. {NAND} seul est fonctionnellement complet.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Henry Sheffer a publié son résultat sur le connecteur NAND en 1913. Tous les processeurs modernes sont construits à partir de portes NAND, confirmant l\'importance pratique de ce résultat théorique.'
            },
            {
              front: 'Astuce : FNC vs FND',
              back: 'FNC = Conjonction de Disjonctions = « ET de OU ». FND = Disjonction de Conjonctions = « OU de ET ». FNC pour les solveurs SAT, FND pour lire la table de vérité.'
            },
            {
              front: 'Nombre clé : NP-complet',
              back: 'Le problème SAT (satisfaisabilité d\'une formule en FNC) est le premier problème démontré NP-complet par Stephen Cook en 1971 (théorème de Cook-Levin).'
            }
          ]
        }
      ]
    },
    {
      slug: 'logique-predicats',
      title: 'Logique des prédicats',
      description: 'Les quantificateurs, les variables, les structures, la complétude de la logique du premier ordre et le théorème de Herbrand.',
      introText: 'La logique des prédicats (ou logique du premier ordre) étend la logique propositionnelle en permettant de parler d\'objets, de propriétés et de relations. Grâce aux quantificateurs « pour tout » (∀) et « il existe » (∃), elle exprime des affirmations sur des domaines entiers d\'objets. C\'est le langage standard des mathématiques modernes.',
      introHighlight: 'La logique des prédicats est le saut qualitatif décisif : là où la logique propositionnelle ne parle que de phrases entières, la logique des prédicats entre dans la structure interne des phrases.',
      lessons: [
        {
          slug: 'quantificateurs',
          title: 'Quantificateurs universels et existentiels',
          description: 'Les quantificateurs ∀ et ∃, leur signification, leur portée et leur interaction.',
          intro: 'Les quantificateurs sont les outils qui permettent à la logique de parler de la totalité ou de l\'existence des objets d\'un domaine. Le quantificateur universel (∀) signifie « pour tout » et le quantificateur existentiel (∃) signifie « il existe au moins un ». Leur interaction donne lieu à des subtilités qui sont au cœur de l\'analyse mathématique.',
          introHighlight: 'Les quantificateurs transforment la logique en un langage capable de parler du monde : « tout nombre pair est divisible par 2 » ou « il existe un nombre premier pair ».',
          sections: [
            {
              title: 'Le quantificateur universel ∀',
              paragraphs: ['Le quantificateur universel ∀ (« pour tout ») affirme qu\'une propriété est vraie pour tous les éléments d\'un domaine. L\'expression ∀x P(x) se lit « pour tout x, P(x) est vrai ». Par exemple, ∀x (x > 0 → x² > 0) signifie « tout nombre strictement positif a un carré strictement positif ».', 'Pour réfuter une affirmation universelle, il suffit d\'un seul contre-exemple. Si l\'on prétend que ∀x P(x), il suffit de trouver un a tel que ¬P(a) pour prouver que l\'affirmation est fausse. La négation de ∀x P(x) est ∃x ¬P(x) : « il n\'est pas vrai que tous les x vérifient P » équivaut à « il existe un x qui ne vérifie pas P ».'],
              highlight: 'La négation d\'un « pour tout » est un « il existe…ne…pas » : ¬∀x P(x) ≡ ∃x ¬P(x). C\'est la règle fondamentale d\'interaction entre quantificateurs.'
            },
            {
              title: 'Le quantificateur existentiel ∃',
              paragraphs: ['Le quantificateur existentiel ∃ (« il existe ») affirme qu\'au moins un élément du domaine satisfait une propriété. L\'expression ∃x P(x) se lit « il existe un x tel que P(x) est vrai ». Par exemple, ∃x (x² = 2) affirme qu\'il existe un nombre dont le carré vaut 2 (c\'est √2).', 'Pour prouver une affirmation existentielle, il suffit d\'exhiber un témoin : un objet concret qui satisfait la propriété. Sa négation, ¬∃x P(x) ≡ ∀x ¬P(x), signifie qu\'aucun objet ne possède la propriété. Le quantificateur d\'unicité ∃! (« il existe un unique ») affirme qu\'exactement un objet satisfait la propriété : ∃!x P(x) ≡ ∃x (P(x) ∧ ∀y (P(y) → y = x)).'],
              highlight: 'Le quantificateur existentiel garantit l\'existence mais ne dit pas comment trouver l\'objet. En mathématiques constructives, on exige de fournir explicitement le témoin.'
            },
            {
              title: 'Ordre des quantificateurs',
              paragraphs: ['L\'ordre des quantificateurs est crucial et change radicalement le sens d\'une formule. ∀x ∃y (x + y = 0) signifie « pour tout nombre x, il existe un y tel que x + y = 0 » (vrai dans ℤ : y = −x). En revanche, ∃y ∀x (x + y = 0) signifie « il existe un y qui annule tous les x » (faux dans ℤ, car aucun y ne convient pour tous les x simultanément).', 'Règle générale : ∀x ∃y P(x,y) est plus faible que ∃y ∀x P(x,y). La seconde affirme l\'existence d\'un y universel (le même pour tous les x), tandis que la première autorise un y différent pour chaque x. En analyse, la distinction entre continuité uniforme et continuité simple repose exactement sur cet ordre des quantificateurs.'],
              highlight: 'Intervertir ∀ et ∃ change le sens : « pour chaque personne, il existe quelqu\'un qui l\'aime » n\'est pas « il existe quelqu\'un qui aime tout le monde ».'
            }
          ],
          quiz: [
            {
              q: 'Quelle est la négation de ∀x P(x) ?',
              opts: ['∀x ¬P(x)', '∃x ¬P(x)', '¬∃x P(x)', '∃x P(x)'],
              correct: 1,
              explanation: '¬∀x P(x) ≡ ∃x ¬P(x). Nier « tous vérifient P » revient à dire « il en existe au moins un qui ne vérifie pas P ».'
            },
            {
              q: '∃y ∀x (x + y = 0) est-il vrai dans les entiers ?',
              opts: ['Vrai', 'Faux', 'Indéterminé', 'Cela dépend de x'],
              correct: 1,
              explanation: 'Cette formule affirme qu\'il existe un y unique qui annule tous les x. C\'est faux : aucun entier y ne satisfait x + y = 0 pour tout x simultanément.'
            },
            {
              q: 'Que signifie ∃!x P(x) ?',
              opts: ['Il n\'existe pas de x vérifiant P', 'Il existe exactement un x vérifiant P', 'Il existe au moins deux x vérifiant P', 'Pour tout x, P(x) est faux'],
              correct: 1,
              explanation: '∃! est le quantificateur d\'unicité : il affirme qu\'il existe exactement un objet satisfaisant la propriété P.'
            }
          ],
          definitions: [
            {
              term: 'Quantificateur universel (∀)',
              def: 'Symbole logique signifiant « pour tout ». ∀x P(x) affirme que tous les éléments du domaine satisfont la propriété P.'
            },
            {
              term: 'Quantificateur existentiel (∃)',
              def: 'Symbole logique signifiant « il existe ». ∃x P(x) affirme qu\'au moins un élément du domaine satisfait la propriété P.'
            },
            {
              term: 'Témoin',
              def: 'Élément concret du domaine qui satisfait une propriété existentielle. Exhiber un témoin prouve l\'assertion ∃x P(x).'
            },
            {
              term: 'Contre-exemple',
              def: 'Élément du domaine qui falsifie une propriété universelle. Un seul contre-exemple suffit à réfuter ∀x P(x).'
            },
            {
              term: 'Quantificateur d\'unicité (∃!)',
              def: 'Abréviation de « il existe un unique ». ∃!x P(x) signifie qu\'exactement un objet satisfait P.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Frege 1879',
              back: 'Gottlob Frege publie la Begriffsschrift (« Idéographie ») en 1879, inventant la logique des prédicats avec quantificateurs. C\'est l\'acte fondateur de la logique moderne.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: '∀ ressemble à un A retourné (All = pour tout). ∃ ressemble à un E retourné (Exists = il existe). Ces symboles ont été introduits par Charles Sanders Peirce et Gerhard Gentzen.'
            },
            {
              front: 'Piège classique',
              back: '∀x ∃y R(x,y) ≠ ∃y ∀x R(x,y). Le premier autorise un y différent par x ; le second exige un même y pour tous les x. L\'ordre des quantificateurs n\'est JAMAIS interchangeable.'
            }
          ]
        },
        {
          slug: 'variables-termes',
          title: 'Variables, termes et prédicats',
          description: 'Le langage du premier ordre : constantes, fonctions, prédicats et formation des formules.',
          intro: 'Le langage de la logique du premier ordre est plus riche que celui de la logique propositionnelle. Il comprend des constantes (noms d\'objets), des variables (parcourant un domaine), des symboles de fonctions (opérations sur les objets) et des symboles de prédicats (propriétés et relations). La syntaxe du premier ordre permet d\'exprimer avec précision les énoncés mathématiques.',
          introHighlight: 'Le langage du premier ordre est le langage officiel des mathématiques : presque toute théorie mathématique peut être formulée dans ce cadre.',
          sections: [
            {
              title: 'Constantes, variables et fonctions',
              paragraphs: ['Les constantes désignent des objets spécifiques du domaine : 0, 1, π, e. Les variables (x, y, z) parcourent les éléments du domaine et sont liées par les quantificateurs. Les symboles de fonctions prennent des termes en argument et renvoient un terme : +(x, y) ou s(x) (successeur). L\'arité d\'une fonction est le nombre de ses arguments.', 'Un terme est défini récursivement : toute constante est un terme, toute variable est un terme, et si f est un symbole de fonction d\'arité n et t₁,...,tₙ sont des termes, alors f(t₁,...,tₙ) est un terme. Par exemple, dans l\'arithmétique, s(s(0)) est un terme qui désigne le nombre 2 (le successeur du successeur de 0).'],
              highlight: 'Les termes sont les « noms » du premier ordre : ils désignent des objets. Les formules, construites avec des prédicats, expriment des propriétés de ces objets.'
            },
            {
              title: 'Prédicats et formules atomiques',
              paragraphs: ['Un prédicat (ou symbole de relation) exprime une propriété ou une relation entre objets. P(x) signifie « x possède la propriété P ». R(x, y) signifie « x est en relation R avec y ». L\'arité d\'un prédicat est le nombre d\'arguments qu\'il prend. L\'égalité (=) est un prédicat binaire spécial, souvent inclus dans le langage de base.', 'Une formule atomique est formée d\'un prédicat appliqué à des termes : P(t₁,...,tₙ). Par exemple, Premier(s(s(s(s(s(0)))))) affirme que 5 est premier. Les formules composées sont construites à partir de formules atomiques grâce aux connecteurs (¬, ∧, ∨, →, ↔) et aux quantificateurs (∀, ∃).'],
              highlight: 'La distinction terme/formule est capitale : un terme désigne un objet, une formule exprime une propriété. On ne peut pas quantifier sur des prédicats en logique du premier ordre.'
            },
            {
              title: 'Variables libres et variables liées',
              paragraphs: ['Une variable est liée lorsqu\'elle se trouve dans la portée d\'un quantificateur : dans ∀x P(x), la variable x est liée. Une variable est libre si elle n\'est pas liée : dans P(x) ∧ ∀y Q(y), x est libre et y est liée. Une phrase (ou formule close) est une formule sans variable libre : sa valeur de vérité est déterminée dans toute interprétation.', 'La substitution consiste à remplacer les occurrences libres d\'une variable par un terme. Si φ(x) est la formule x > 0, alors φ(3) est 3 > 0. Attention : la substitution doit être admissible, c\'est-à-dire ne pas capturer de variable libre. Par exemple, substituer x par y dans ∃y (x < y) donnerait ∃y (y < y), ce qui change le sens : il faut d\'abord renommer la variable liée.'],
              highlight: 'Une formule avec des variables libres n\'est ni vraie ni fausse en soi : c\'est un « patron » dont la valeur de vérité dépend de ce qu\'on met à la place des variables libres.'
            }
          ],
          quiz: [
            {
              q: 'Dans la formule ∀x (P(x) → ∃y R(x,y)), quelle variable est libre ?',
              opts: ['x', 'y', 'x et y', 'Aucune (c\'est une phrase close)'],
              correct: 3,
              explanation: 'x est liée par ∀x et y est liée par ∃y. La formule n\'a pas de variable libre : c\'est une phrase close, dont la valeur de vérité est déterminée dans toute interprétation.'
            },
            {
              q: 'Qu\'est-ce qu\'un terme en logique du premier ordre ?',
              opts: ['Une proposition vraie', 'Une expression désignant un objet du domaine', 'Un connecteur logique', 'Un quantificateur'],
              correct: 1,
              explanation: 'Un terme est une expression qui désigne un objet : constante (0, π), variable (x, y) ou application d\'une fonction à des termes (f(x), s(0)).'
            },
            {
              q: 'Quelle est l\'arité du prédicat « Entre(x, y, z) » ?',
              opts: ['1', '2', '3', '4'],
              correct: 2,
              explanation: 'L\'arité d\'un prédicat est le nombre d\'arguments qu\'il prend. Entre(x, y, z) prend trois arguments, donc son arité est 3.'
            }
          ],
          definitions: [
            {
              term: 'Terme',
              def: 'Expression désignant un objet du domaine : constante, variable, ou application d\'un symbole de fonction à des termes.'
            },
            {
              term: 'Prédicat',
              def: 'Symbole exprimant une propriété (unaire) ou une relation (n-aire) entre objets. Appliqué à des termes, il forme une formule atomique.'
            },
            {
              term: 'Arité',
              def: 'Nombre d\'arguments d\'un symbole de fonction ou de prédicat. Un prédicat unaire a l\'arité 1, un prédicat binaire l\'arité 2.'
            },
            {
              term: 'Variable liée',
              def: 'Variable se trouvant dans la portée d\'un quantificateur. Sa valeur n\'est pas fixée par l\'extérieur mais parcourt le domaine.'
            },
            {
              term: 'Phrase (formule close)',
              def: 'Formule sans variable libre. Sa valeur de vérité est entièrement déterminée par l\'interprétation choisie.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Le langage du premier ordre est dit « du premier ordre » car on ne quantifie que sur des objets, jamais sur des prédicats ou des fonctions. Quantifier sur des prédicats relève de la logique du second ordre.'
            },
            {
              front: 'Astuce pratique',
              back: 'Pour vérifier si une formule est close : soulignez chaque quantificateur et sa portée, puis vérifiez que chaque variable apparaît dans la portée d\'un quantificateur qui la lie.'
            },
            {
              front: 'Piège de la substitution',
              back: 'Substituer x par y dans ∃y(x<y) donne ∃y(y<y) — la variable y est « capturée ». Il faut d\'abord renommer : ∃z(x<z), puis substituer : ∃z(y<z).'
            }
          ]
        },
        {
          slug: 'completude',
          title: 'Complétude de la logique du premier ordre',
          description: 'Le théorème de complétude de Gödel, la compacité et le théorème de Löwenheim-Skolem.',
          intro: 'Le théorème de complétude de Gödel (1930) est l\'un des résultats les plus importants de la logique mathématique. Il établit que la logique du premier ordre est complète : toute formule vraie dans toutes les interprétations (logiquement valide) est démontrable. Ce résultat assure que le système de preuve capture exactement les vérités logiques.',
          introHighlight: 'La complétude signifie que la vérité logique et la démontrabilité coïncident en logique du premier ordre. C\'est une harmonie remarquable entre syntaxe et sémantique.',
          sections: [
            {
              title: 'Interprétations et modèles',
              paragraphs: ['Une interprétation (ou structure) pour un langage du premier ordre spécifie un domaine D (ensemble non vide d\'objets), une attribution d\'un élément de D à chaque constante, d\'une fonction sur D à chaque symbole de fonction, et d\'une relation sur D à chaque symbole de prédicat. Par exemple, pour le langage de l\'arithmétique, une interprétation standard prend D = ℕ, 0 ↦ le nombre zéro, s ↦ la fonction successeur, + ↦ l\'addition.', 'Un modèle d\'une formule φ est une interprétation dans laquelle φ est vraie. Une formule est satisfaisable si elle possède au moins un modèle, valide si elle est vraie dans toute interprétation, et insatisfaisable si elle n\'a aucun modèle. La théorie des modèles étudie les relations entre formules et leurs modèles.'],
              highlight: 'La sémantique donne un sens aux formules : une formule n\'est qu\'une suite de symboles tant qu\'on n\'a pas fixé une interprétation qui lui donne une valeur de vérité.'
            },
            {
              title: 'Le théorème de complétude de Gödel (1930)',
              paragraphs: ['Le théorème de complétude de Gödel affirme : une formule du premier ordre est logiquement valide (vraie dans toute interprétation) si et seulement si elle est démontrable dans le calcul des prédicats. Autrement dit, les axiomes et règles d\'inférence du calcul des prédicats suffisent à prouver toutes les vérités logiques. C\'est la thèse de complétude.', 'Ce résultat a un corollaire fondamental : si un ensemble de formules Γ est cohérent (on ne peut pas en dériver de contradiction), alors Γ possède un modèle. C\'est la forme duale du théorème de complétude. Attention : ce théorème concerne la logique du premier ordre, pas l\'arithmétique. Le théorème d\'incomplétude de Gödel (1931), résultat bien différent, montre que l\'arithmétique ne peut pas être à la fois complète et cohérente.'],
              highlight: 'La complétude de la logique du premier ordre et l\'incomplétude de l\'arithmétique sont deux résultats distincts de Gödel, publiés à un an d\'intervalle (1930 et 1931).'
            },
            {
              title: 'Compacité et Löwenheim-Skolem',
              paragraphs: ['Le théorème de compacité affirme qu\'un ensemble de formules du premier ordre est satisfaisable si et seulement si chacun de ses sous-ensembles finis est satisfaisable. Ce résultat, conséquence de la complétude, a des applications profondes : il permet de construire des modèles non standard (par exemple des entiers non standard contenant des « nombres infinis »).', 'Le théorème de Löwenheim-Skolem (descendant) affirme que si une théorie du premier ordre a un modèle infini, alors elle a un modèle de toute cardinalité infinie. Conséquence paradoxale : la théorie des ensembles de Zermelo-Fraenkel, qui parle d\'ensembles non dénombrables, possède un modèle dénombrable. C\'est le « paradoxe de Skolem », qui montre les limites expressives du premier ordre.'],
              highlight: 'Le paradoxe de Skolem : une théorie qui « parle » d\'ensembles non dénombrables peut avoir un modèle dénombrable. Le premier ordre ne peut pas distinguer le dénombrable de l\'indénombrable.'
            }
          ],
          quiz: [
            {
              q: 'Que garantit le théorème de complétude de Gödel (1930) ?',
              opts: ['L\'arithmétique est complète.', 'Toute formule valide du premier ordre est démontrable.', 'Toute formule vraie est décidable.', 'La logique du second ordre est complète.'],
              correct: 1,
              explanation: 'Le théorème de complétude (1930) affirme que toute formule logiquement valide (vraie dans toute interprétation) du premier ordre est démontrable dans le calcul des prédicats.'
            },
            {
              q: 'Que dit le théorème de compacité ?',
              opts: ['Tout modèle est fini.', 'Un ensemble de formules est satisfaisable ssi tous ses sous-ensembles finis le sont.', 'La logique propositionnelle est décidable.', 'Tout ensemble de formules a un modèle.'],
              correct: 1,
              explanation: 'La compacité affirme qu\'un ensemble (possiblement infini) de formules est satisfaisable si et seulement si chaque sous-ensemble fini l\'est.'
            },
            {
              q: 'Que montre le paradoxe de Skolem ?',
              opts: ['Que la logique est contradictoire.', 'Que ZFC a un modèle dénombrable bien qu\'elle parle d\'ensembles non dénombrables.', 'Que les quantificateurs sont inutiles.', 'Que tout modèle est fini.'],
              correct: 1,
              explanation: 'Par le théorème de Löwenheim-Skolem, ZFC (si cohérente) possède un modèle dénombrable, bien que ses théorèmes affirment l\'existence d\'ensembles non dénombrables.'
            }
          ],
          definitions: [
            {
              term: 'Interprétation (structure)',
              def: 'Attribution d\'un domaine, de valeurs aux constantes, de fonctions aux symboles de fonctions et de relations aux prédicats. Donne un sens aux formules.'
            },
            {
              term: 'Modèle',
              def: 'Interprétation dans laquelle une formule (ou un ensemble de formules) est vraie. Si φ est vraie dans M, on écrit M ⊨ φ.'
            },
            {
              term: 'Complétude',
              def: 'Propriété d\'un système formel où toute formule logiquement valide est démontrable. La logique du premier ordre est complète (Gödel, 1930).'
            },
            {
              term: 'Compacité',
              def: 'Propriété de la logique du premier ordre : un ensemble de formules est satisfaisable ssi tous ses sous-ensembles finis le sont.'
            },
            {
              term: 'Théorème de Löwenheim-Skolem',
              def: 'Théorème affirmant que toute théorie du premier ordre ayant un modèle infini a des modèles de toute cardinalité infinie.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1930',
              back: 'Kurt Gödel, à 24 ans, démontre la complétude de la logique du premier ordre dans sa thèse de doctorat. Un an plus tard, il publie le théorème d\'incomplétude, résultat opposé concernant l\'arithmétique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le « paradoxe de Skolem » n\'est pas un vrai paradoxe : la « dénombrabilité » est relative au modèle. Le modèle dénombrable ne contient pas de bijection entre ℕ et ℝ — elle « manque » au modèle.'
            },
            {
              front: 'Distinction fondamentale',
              back: 'Complétude (1930) : vérité logique ⇔ démontrabilité, pour la logique pure. Incomplétude (1931) : l\'arithmétique contient des vérités indémontrables. Deux résultats sur deux objets différents !'
            }
          ]
        },
        {
          slug: 'modeles',
          title: 'Modèles et satisfaisabilité',
          description: 'La théorie des modèles, les structures, l\'isomorphisme et les modèles non standard.',
          intro: 'La théorie des modèles étudie les relations entre les formules d\'un langage formel et les structures mathématiques qui les satisfont. Fondée par Tarski dans les années 1930, elle est devenue l\'un des quatre piliers de la logique mathématique, aux côtés de la théorie de la démonstration, de la théorie des ensembles et de la calculabilité.',
          introHighlight: 'La théorie des modèles pose la question fondamentale : que peut-on dire d\'une structure à partir de ses propriétés exprimables au premier ordre ?',
          sections: [
            {
              title: 'Structures et satisfaction',
              paragraphs: ['Une structure M pour un langage L du premier ordre comprend un domaine |M| (ensemble non vide), une interprétation de chaque symbole de constante comme un élément de |M|, de chaque symbole de fonction comme une fonction sur |M|, et de chaque symbole de relation comme une relation sur |M|. La relation de satisfaction M ⊨ φ (« M satisfait φ ») est définie par récurrence sur la complexité de φ.', 'Deux structures sont élémentairement équivalentes si elles satisfont les mêmes formules du premier ordre. Elles sont isomorphes s\'il existe une bijection entre leurs domaines qui préserve toutes les relations et fonctions. Deux structures isomorphes sont toujours élémentairement équivalentes, mais la réciproque est fausse : (ℚ, <) et (ℝ, <) satisfont les mêmes formules du premier ordre (ordres denses sans extrémités) mais ne sont pas isomorphes.'],
              highlight: 'L\'équivalence élémentaire montre que le premier ordre ne distingue pas toujours des structures très différentes : les rationnels et les réels satisfont les mêmes phrases pour l\'ordre.'
            },
            {
              title: 'Théorie d\'une structure et catégoricité',
              paragraphs: ['La théorie d\'une structure M, notée Th(M), est l\'ensemble de toutes les phrases du premier ordre vraies dans M. Une théorie T est κ-catégorique si tous ses modèles de cardinalité κ sont isomorphes. Par exemple, la théorie des ordres denses sans extrémités est ℵ₀-catégorique : tout ordre dénombrable dense sans bornes est isomorphe à (ℚ, <), comme l\'a montré Cantor.', 'Le théorème de Vaught affirme qu\'une théorie complète dénombrable ne peut pas avoir exactement deux modèles dénombrables non isomorphes. Elle en a 1, 3, ou un nombre infini. Ce résultat illustre la richesse combinatoire de la théorie des modèles et ses liens avec la théorie des ensembles.'],
              highlight: 'La κ-catégoricité est une propriété remarquable : la théorie contraint la structure à un point tel qu\'il n\'y a qu\'un seul modèle (à isomorphisme près) dans une cardinalité donnée.'
            },
            {
              title: 'Modèles non standard',
              paragraphs: ['Le théorème de compacité permet de construire des modèles non standard de l\'arithmétique : des structures qui satisfont les mêmes formules du premier ordre que (ℕ, 0, s, +, ×) mais contiennent des « nombres » plus grands que tout nombre naturel standard. Ces entiers non standard n\'ont pas de prédécesseur standard et forment des copies de ℤ « empilées » au-dessus de ℕ.', 'Abraham Robinson a exploité les modèles non standard pour fonder l\'analyse non standard (1960), redonnant une base rigoureuse aux infinitésimaux de Leibniz. Dans cette théorie, on travaille dans une extension *ℝ des réels qui contient des nombres infiniment petits (infinitésimaux) et infiniment grands. Les résultats démontrés dans *ℝ se transfèrent à ℝ par le principe de transfert.'],
              highlight: 'Les modèles non standard montrent que le premier ordre ne peut pas caractériser les nombres naturels : il existe des « faux entiers » qui satisfont toutes les mêmes propriétés du premier ordre que les vrais.'
            }
          ],
          quiz: [
            {
              q: 'Deux structures élémentairement équivalentes sont-elles nécessairement isomorphes ?',
              opts: ['Oui, toujours', 'Non, pas nécessairement', 'Seulement si elles sont finies', 'Seulement en logique propositionnelle'],
              correct: 1,
              explanation: 'L\'équivalence élémentaire n\'implique pas l\'isomorphisme. (ℚ, <) et (ℝ, <) satisfont les mêmes formules du premier ordre mais ne sont pas isomorphes.'
            },
            {
              q: 'Qui a fondé l\'analyse non standard à l\'aide de modèles non standard ?',
              opts: ['Kurt Gödel', 'Alfred Tarski', 'Abraham Robinson', 'Thoralf Skolem'],
              correct: 2,
              explanation: 'Abraham Robinson a publié « Non-standard Analysis » en 1960, fondant l\'analyse non standard sur les extensions non standard des réels.'
            },
            {
              q: 'La théorie des ordres denses sans extrémités est :',
              opts: ['Contradictoire', 'ℵ₀-catégorique', 'Indécidable', 'Incomplète'],
              correct: 1,
              explanation: 'Par le théorème de Cantor, tout ordre dénombrable dense sans bornes est isomorphe à (ℚ, <). La théorie est donc ℵ₀-catégorique.'
            }
          ],
          definitions: [
            {
              term: 'Relation de satisfaction (⊨)',
              def: 'Relation entre une structure M et une formule φ : M ⊨ φ signifie que φ est vraie dans M.'
            },
            {
              term: 'Équivalence élémentaire',
              def: 'Deux structures sont élémentairement équivalentes si elles satisfont exactement les mêmes phrases du premier ordre.'
            },
            {
              term: 'Catégoricité',
              def: 'Une théorie est κ-catégorique si tous ses modèles de cardinalité κ sont isomorphes entre eux.'
            },
            {
              term: 'Modèle non standard',
              def: 'Modèle d\'une théorie du premier ordre qui n\'est pas isomorphe au modèle « intentionnel ». Exemple : modèles non standard de l\'arithmétique.'
            },
            {
              term: 'Analyse non standard',
              def: 'Branche des mathématiques fondée par Robinson utilisant des extensions non standard de ℝ avec infinitésimaux rigoureux.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1960',
              back: 'Abraham Robinson publie « Non-standard Analysis », réhabilitant les infinitésimaux de Leibniz et Newton grâce à la théorie des modèles. Les infinitésimaux deviennent des objets mathématiques rigoureux.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Alfred Tarski, fondateur de la théorie des modèles, a aussi donné la définition rigoureuse de la vérité dans les langages formalisés (1933). Son travail a révolutionné la philosophie du langage.'
            },
            {
              front: 'Résultat surprenant',
              back: 'Par compacité, il existe des modèles de l\'arithmétique de Peano contenant des « entiers infinis ». Ces entiers satisfont toutes les propriétés du premier ordre des vrais entiers, mais aucune construction finie ne les atteint.'
            }
          ]
        },
        {
          slug: 'herbrand',
          title: 'Herbrand et la résolution',
          description: 'Le théorème de Herbrand, l\'unification, la résolution et les bases de Prolog.',
          intro: 'Le théorème de Herbrand (1930) est un pont entre la logique des prédicats et le calcul automatique. Il montre que la satisfaisabilité d\'une formule du premier ordre se ramène à un problème propositionnel. Ce résultat est à la base de la procédure de résolution de Robinson (1965) et du langage de programmation Prolog.',
          introHighlight: 'Herbrand a montré comment « aplatir » la logique des prédicats en logique propositionnelle : c\'est le premier pas vers la démonstration automatique.',
          sections: [
            {
              title: 'L\'univers de Herbrand',
              paragraphs: ['L\'univers de Herbrand d\'un langage du premier ordre est l\'ensemble de tous les termes clos (sans variables) constructibles à partir des constantes et des symboles de fonctions du langage. Si le langage contient la constante a et le symbole de fonction unaire f, l\'univers de Herbrand est {a, f(a), f(f(a)), f(f(f(a))), ...}. Il est dénombrable (fini si le langage n\'a pas de symbole de fonction).', 'La base de Herbrand est l\'ensemble de toutes les formules atomiques closes formées avec les prédicats du langage et les termes de l\'univers de Herbrand. Le théorème de Herbrand affirme qu\'une formule universelle est insatisfaisable si et seulement si une conjonction finie d\'instances de sa matrice (prises dans l\'univers de Herbrand) est insatisfaisable au sens propositionnel.'],
              highlight: 'L\'univers de Herbrand remplace le domaine abstrait par un domaine syntaxique concret : les termes eux-mêmes. C\'est une idée géniale qui rend la logique mécanisable.'
            },
            {
              title: 'Unification',
              paragraphs: ['L\'unification est l\'opération qui consiste à trouver une substitution rendant deux termes ou deux formules atomiques identiques. Par exemple, P(x, f(a)) et P(g(y), f(a)) s\'unifient avec la substitution {x ↦ g(y)}. L\'algorithme d\'unification de Robinson (1965) trouve le « plus général unificateur » (mgu) s\'il existe, ou conclut à l\'impossibilité.', 'L\'unification est fondamentale en démonstration automatique et en programmation logique. En Prolog, chaque étape de résolution repose sur l\'unification d\'un but avec la tête d\'une clause. L\'algorithme d\'unification est aussi utilisé dans l\'inférence de types des langages fonctionnels comme Haskell et OCaml.'],
              highlight: 'L\'unification est le moteur de la démonstration automatique : elle permet de « brancher » les formules les unes sur les autres en trouvant les substitutions adéquates.'
            },
            {
              title: 'Résolution et Prolog',
              paragraphs: ['La résolution est une règle d\'inférence introduite par John Alan Robinson en 1965. À partir de deux clauses contenant des littéraux complémentaires unifiables, elle produit une nouvelle clause (le résolvant). Par exemple, à partir de P(x) ∨ Q(x) et ¬P(a) ∨ R(a), avec l\'unificateur {x ↦ a}, on obtient Q(a) ∨ R(a). La résolution est réfutationnellement complète : si un ensemble de clauses est insatisfaisable, la résolution finira par dériver la clause vide (contradiction).', 'Le langage Prolog (1972, Colmerauer et Roussel) est fondé sur la résolution SLD (sélection linéaire de clauses définies). Un programme Prolog est un ensemble de clauses de Horn (clauses avec au plus un littéral positif). L\'interpréteur résout les requêtes par retour arrière (backtracking) et unification, transformant la logique en un langage de programmation.'],
              highlight: 'Prolog réalise le rêve de Leibniz : « Calculons ! » La programmation logique transforme les théorèmes en programmes et les preuves en calculs.'
            }
          ],
          quiz: [
            {
              q: 'Qu\'est-ce que l\'univers de Herbrand ?',
              opts: ['L\'ensemble des modèles d\'une théorie', 'L\'ensemble des termes clos constructibles dans un langage', 'L\'ensemble des formules valides', 'L\'ensemble des quantificateurs'],
              correct: 1,
              explanation: 'L\'univers de Herbrand est l\'ensemble de tous les termes clos (sans variables) que l\'on peut construire avec les constantes et fonctions du langage.'
            },
            {
              q: 'Qu\'est-ce que l\'unification ?',
              opts: ['La simplification d\'une formule', 'La recherche d\'une substitution rendant deux termes identiques', 'L\'évaluation d\'une table de vérité', 'La négation d\'un prédicat'],
              correct: 1,
              explanation: 'L\'unification cherche une substitution de variables qui rend deux expressions syntaxiquement identiques. Le « plus général unificateur » (mgu) est la substitution la plus générale possible.'
            },
            {
              q: 'Sur quel principe logique est fondé le langage Prolog ?',
              opts: ['Les tables de vérité', 'La résolution et les clauses de Horn', 'Le calcul lambda', 'Les automates finis'],
              correct: 1,
              explanation: 'Prolog est fondé sur la résolution SLD appliquée aux clauses de Horn. L\'exécution d\'un programme Prolog est une recherche de preuve par réfutation.'
            }
          ],
          definitions: [
            {
              term: 'Univers de Herbrand',
              def: 'Ensemble de tous les termes clos constructibles à partir des constantes et symboles de fonctions d\'un langage du premier ordre.'
            },
            {
              term: 'Unification',
              def: 'Procédure algorithmique cherchant une substitution de variables rendant deux termes ou formules atomiques syntaxiquement identiques.'
            },
            {
              term: 'Résolution',
              def: 'Règle d\'inférence qui, à partir de deux clauses contenant des littéraux complémentaires unifiables, produit un résolvant. Réfutationnellement complète.'
            },
            {
              term: 'Clause de Horn',
              def: 'Clause comportant au plus un littéral positif. Base de la programmation logique (Prolog).'
            },
            {
              term: 'Prolog',
              def: 'Langage de programmation logique (1972) fondé sur la résolution SLD et l\'unification. Un programme est un ensemble de clauses de Horn.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1930',
              back: 'Jacques Herbrand (1908-1931) publie son théorème fondamental à 22 ans, dans sa thèse de doctorat. Il meurt tragiquement un an plus tard dans un accident d\'alpinisme à 23 ans.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Prolog (PROgrammation en LOGique) a été créé à Marseille en 1972 par Alain Colmerauer et Philippe Roussel. Le Japon l\'a choisi comme base de son projet « ordinateurs de 5e génération » dans les années 1980.'
            },
            {
              front: 'Lien avec l\'informatique',
              back: 'L\'algorithme d\'unification de Robinson est utilisé dans l\'inférence de types de Haskell, OCaml et Rust. Quand le compilateur « devine » les types, il résout un problème d\'unification.'
            }
          ]
        }
      ]
    },
    {
      slug: 'preuves-formelles',
      title: 'Preuves et démonstrations',
      description: 'La déduction naturelle, le raisonnement par récurrence, la preuve par l\'absurde, les systèmes axiomatiques et le programme de Hilbert.',
      introText: 'Démontrer, c\'est dériver une conclusion à partir de prémisses en appliquant des règles d\'inférence reconnues comme valides. La théorie de la démonstration étudie la structure des preuves elles-mêmes : quelles sont les méthodes légitimes ? Peut-on prouver tout ce qui est vrai ? Existe-t-il des preuves plus « élégantes » que d\'autres ?',
      introHighlight: 'La preuve formelle est le critère ultime de la certitude mathématique : un énoncé n\'est considéré comme établi que lorsqu\'une démonstration rigoureuse a été produite.',
      lessons: [
        {
          slug: 'deduction-naturelle',
          title: 'Déduction naturelle',
          description: 'Le système de Gentzen, les règles d\'introduction et d\'élimination, et la correspondance preuves-programmes.',
          intro: 'La déduction naturelle, inventée par Gerhard Gentzen en 1934, est un système de preuve qui formalise le raisonnement humain. Plutôt que de partir d\'axiomes, elle utilise des règles d\'introduction et d\'élimination pour chaque connecteur, reflétant la manière naturelle dont nous construisons et utilisons les propositions composées.',
          introHighlight: 'La déduction naturelle est le système formel le plus proche du raisonnement humain : chaque connecteur a ses règles propres, symétriquement organisées.',
          sections: [
            {
              title: 'Règles d\'introduction et d\'élimination',
              paragraphs: ['Chaque connecteur logique possède une règle d\'introduction (comment le prouver) et une règle d\'élimination (comment l\'utiliser). Pour la conjonction : l\'introduction de ∧ combine deux preuves de A et B en une preuve de A ∧ B ; l\'élimination de ∧ extrait A ou B d\'une preuve de A ∧ B. Pour l\'implication : l\'introduction de → consiste à supposer A et à en dériver B, obtenant A → B ; l\'élimination de → est le modus ponens.', 'La disjonction se traite par cas : pour éliminer A ∨ B, on montre séparément que C découle de A et que C découle de B, concluant C dans les deux cas. La négation est traitée comme ¬A ≡ A → ⊥ (A implique l\'absurde). L\'introduction de ¬A consiste à supposer A et à dériver une contradiction ; l\'élimination applique ¬A à une preuve de A pour obtenir ⊥.'],
              highlight: 'La symétrie introduction/élimination est le principe organisateur de la déduction naturelle : chaque règle d\'introduction a son miroir en élimination.'
            },
            {
              title: 'Preuves sous hypothèses et décharge',
              paragraphs: ['En déduction naturelle, on peut introduire des hypothèses temporaires et les « décharger » une fois le raisonnement terminé. Pour prouver A → B, on suppose A (hypothèse ouverte), on dérive B, puis on décharge l\'hypothèse A en concluant A → B. L\'hypothèse n\'est plus disponible après la décharge.', 'Les preuves se représentent sous forme d\'arbres, où chaque feuille est une hypothèse (ouverte ou déchargée) et chaque nœud est l\'application d\'une règle. La conclusion est la racine de l\'arbre. Une preuve est complète lorsque toutes les hypothèses nécessaires ont été déchargées ou sont des prémisses explicites.'],
              highlight: 'La décharge d\'hypothèses est le mécanisme clé de la déduction naturelle : elle permet de raisonner sous supposition sans s\'engager sur la vérité de la supposition.'
            },
            {
              title: 'Correspondance de Curry-Howard',
              paragraphs: ['La correspondance de Curry-Howard (isomorphisme preuves-programmes) établit un lien profond entre la logique et l\'informatique. Les propositions correspondent à des types, les preuves à des programmes, et l\'élimination de coupures (simplification des preuves) correspond à l\'exécution des programmes. Par exemple, A → B correspond au type d\'une fonction de A vers B, et une preuve de A → B est un programme qui prend une preuve de A et produit une preuve de B.', 'Cette correspondance a des conséquences pratiques considérables. Les assistants de preuve comme Coq et Lean sont fondés sur ce principe : écrire une preuve formelle revient à écrire un programme dans un langage typé. La vérification de la preuve est automatique — c\'est la vérification de types. L\'extraction de programmes certifiés à partir de preuves est un outil puissant de l\'informatique vérifiée.'],
              highlight: 'Curry-Howard : prouver un théorème, c\'est écrire un programme. Exécuter un programme, c\'est simplifier une preuve. La logique et l\'informatique sont les deux faces d\'une même médaille.'
            }
          ],
          quiz: [
            {
              q: 'Qui a inventé la déduction naturelle ?',
              opts: ['Kurt Gödel', 'Gerhard Gentzen', 'Bertrand Russell', 'David Hilbert'],
              correct: 1,
              explanation: 'Gerhard Gentzen a introduit la déduction naturelle (et le calcul des séquents) en 1934 dans sa thèse de doctorat « Untersuchungen über das logische Schließen ».'
            },
            {
              q: 'Dans la correspondance de Curry-Howard, à quoi correspond une preuve ?',
              opts: ['À un axiome', 'À un type', 'À un programme', 'À un modèle'],
              correct: 2,
              explanation: 'Dans l\'isomorphisme de Curry-Howard, les preuves correspondent à des programmes et les propositions à des types. Prouver A → B, c\'est écrire une fonction de type A vers B.'
            },
            {
              q: 'Quelle est la règle d\'élimination de l\'implication ?',
              opts: ['La décharge d\'hypothèses', 'Le modus ponens', 'La loi de De Morgan', 'La résolution'],
              correct: 1,
              explanation: 'L\'élimination de → est le modus ponens : si l\'on dispose d\'une preuve de A → B et d\'une preuve de A, on obtient une preuve de B.'
            }
          ],
          definitions: [
            {
              term: 'Déduction naturelle',
              def: 'Système de preuve introduit par Gentzen (1934) utilisant des règles d\'introduction et d\'élimination pour chaque connecteur logique.'
            },
            {
              term: 'Règle d\'introduction',
              def: 'Règle expliquant comment prouver une proposition composée. Exemple : pour prouver A ∧ B, il faut prouver A et prouver B.'
            },
            {
              term: 'Règle d\'élimination',
              def: 'Règle expliquant comment utiliser une proposition composée déjà prouvée. Exemple : de A ∧ B, on peut extraire A (ou B).'
            },
            {
              term: 'Décharge d\'hypothèse',
              def: 'Mécanisme permettant de refermer une supposition temporaire. Après décharge, l\'hypothèse n\'est plus disponible mais a permis de prouver une implication.'
            },
            {
              term: 'Correspondance de Curry-Howard',
              def: 'Isomorphisme entre preuves et programmes : les propositions sont des types, les preuves sont des programmes, l\'exécution est la simplification de preuves.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1934',
              back: 'Gerhard Gentzen publie sa thèse introduisant simultanément la déduction naturelle et le calcul des séquents. Il meurt en captivité en 1945 à l\'âge de 35 ans.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'L\'assistant de preuve Coq (renommé Rocq en 2024), développé en France par l\'INRIA, a permis de vérifier formellement le théorème des quatre couleurs (2005) et le théorème de Feit-Thompson (2012).'
            },
            {
              front: 'Lien avec l\'informatique',
              back: 'Le système de types de Haskell est directement inspiré de Curry-Howard. Chaque signature de type est une proposition, et chaque fonction qui la respecte est une preuve de cette proposition.'
            }
          ]
        },
        {
          slug: 'recurrence',
          title: 'Raisonnement par récurrence',
          description: 'L\'induction mathématique, la récurrence forte, la récurrence structurelle et le principe de bonne fondation.',
          intro: 'Le raisonnement par récurrence est la méthode de preuve fondamentale pour les propriétés des nombres naturels. Son principe est simple mais puissant : si une propriété est vraie pour 0 et si elle se transmet de n à n+1, alors elle est vraie pour tous les entiers. Ce principe s\'étend aux structures récursives de l\'informatique.',
          introHighlight: 'La récurrence est l\'outil indispensable du mathématicien et de l\'informaticien : elle prouve une infinité de cas en seulement deux étapes.',
          sections: [
            {
              title: 'Le principe de récurrence simple',
              paragraphs: ['Le principe de récurrence affirme : si P(0) est vrai (cas de base) et si pour tout n, P(n) implique P(n+1) (pas de récurrence), alors P(n) est vrai pour tout entier naturel n. Formellement : [P(0) ∧ ∀n (P(n) → P(n+1))] → ∀n P(n). Ce principe correspond au cinquième axiome de Peano.', 'Exemple classique : montrons que 1 + 2 + ... + n = n(n+1)/2. Base : pour n = 0, les deux côtés valent 0. Pas : supposons la formule vraie pour n. Alors 1 + 2 + ... + n + (n+1) = n(n+1)/2 + (n+1) = (n+1)(n+2)/2. La propriété passe de n à n+1. Conclusion : la formule est vraie pour tout n ≥ 0.'],
              highlight: 'La récurrence exploite la structure inductive des entiers naturels : chaque entier est soit 0, soit le successeur d\'un entier. Il suffit de couvrir ces deux cas.'
            },
            {
              title: 'Récurrence forte et variantes',
              paragraphs: ['La récurrence forte (ou complète) suppose que P(k) est vrai pour tous les k < n (et pas seulement pour n−1) pour en déduire P(n). Elle est équivalente à la récurrence simple mais souvent plus naturelle. Exemple : tout entier ≥ 2 admet une décomposition en facteurs premiers. Pour le prouver, on suppose que tous les entiers de 2 à n−1 se décomposent, puis on traite n (s\'il est premier, c\'est fait ; sinon, on utilise l\'hypothèse sur ses facteurs).', 'Le principe de descente infinie (Fermat) est la contraposée de la récurrence : s\'il n\'existe pas de plus petit contre-exemple, alors il n\'y a pas de contre-exemple du tout. Ce principe est équivalent au bon ordre de ℕ : tout sous-ensemble non vide de ℕ a un plus petit élément.'],
              highlight: 'La récurrence forte et la descente infinie sont deux faces de la même pièce : l\'absence de suite décroissante infinie dans les entiers naturels.'
            },
            {
              title: 'Récurrence structurelle et bonne fondation',
              paragraphs: ['La récurrence structurelle généralise la récurrence aux structures inductives : arbres, listes, formules logiques. Pour prouver P(t) pour tout arbre t, on montre P pour les feuilles (cas de base) et on montre que si P est vrai pour les sous-arbres, alors P est vrai pour l\'arbre complet (pas de récurrence).', 'Le cadre le plus général est celui des ordres bien fondés : un ordre < est bien fondé s\'il n\'admet pas de suite infinie strictement décroissante. Le principe d\'induction sur un ordre bien fondé stipule que si P(x) est vrai dès que P(y) est vrai pour tout y < x, alors P est vrai partout. La récurrence sur ℕ, la récurrence structurelle et la récurrence transfinie sont toutes des cas particuliers de ce principe.'],
              highlight: 'La bonne fondation est le concept unificateur : toute récurrence est un raisonnement sur un ordre bien fondé. Pas de chaîne descendante infinie = la récurrence marche.'
            }
          ],
          quiz: [
            {
              q: 'Quelles sont les deux étapes d\'une preuve par récurrence simple ?',
              opts: ['Hypothèse et conclusion', 'Analyse et synthèse', 'Cas de base et pas de récurrence', 'Prémisse et conséquence'],
              correct: 2,
              explanation: 'La récurrence simple exige : (1) le cas de base (vérifier P(0)) et (2) le pas de récurrence (montrer que P(n) implique P(n+1)).'
            },
            {
              q: 'Quel mathématicien a utilisé le principe de descente infinie ?',
              opts: ['Euclide', 'Fermat', 'Gauss', 'Cantor'],
              correct: 1,
              explanation: 'Pierre de Fermat a utilisé la descente infinie pour prouver que x⁴ + y⁴ = z² n\'a pas de solution entière non triviale, un cas particulier de son « grand théorème ».'
            },
            {
              q: 'Qu\'est-ce qu\'un ordre bien fondé ?',
              opts: ['Un ordre total', 'Un ordre sans suite décroissante infinie', 'Un ordre sur les réels', 'Un ordre partiel'],
              correct: 1,
              explanation: 'Un ordre est bien fondé s\'il n\'admet pas de suite infinie strictement décroissante. C\'est la condition nécessaire et suffisante pour que le principe de récurrence fonctionne.'
            }
          ],
          definitions: [
            {
              term: 'Récurrence simple',
              def: 'Principe de preuve : si P(0) et ∀n (P(n) → P(n+1)), alors ∀n P(n). Cinquième axiome de Peano.'
            },
            {
              term: 'Récurrence forte',
              def: 'Variante de la récurrence où l\'hypothèse suppose P(k) pour tous les k < n (et pas seulement k = n−1) pour en déduire P(n).'
            },
            {
              term: 'Descente infinie',
              def: 'Méthode de preuve (Fermat) montrant qu\'une propriété est toujours vraie en prouvant qu\'il ne peut exister de plus petit contre-exemple.'
            },
            {
              term: 'Récurrence structurelle',
              def: 'Généralisation de la récurrence aux structures inductives (arbres, listes, formules). Le cas de base traite les constructeurs de base, le pas traite les constructeurs récursifs.'
            },
            {
              term: 'Ordre bien fondé',
              def: 'Relation d\'ordre n\'admettant aucune suite infinie strictement décroissante. Condition nécessaire et suffisante pour le principe d\'induction.'
            }
          ],
          memos: [
            {
              front: 'Astuce pédagogique',
              back: 'La récurrence est comme une rangée de dominos : si le premier tombe (cas de base) et si chaque domino fait tomber le suivant (pas), alors tous tombent. La descente infinie inverse l\'image : aucun domino ne peut être le premier à rester debout.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le premier usage explicite de la récurrence mathématique est attribué à Blaise Pascal (1654) pour prouver des propriétés du triangle arithmétique. Le terme « induction mathématique » date de De Morgan (1838).'
            },
            {
              front: 'Application en informatique',
              back: 'En informatique, la récurrence structurelle prouve la correction des algorithmes récursifs. Par exemple, on prouve que le tri fusion est correct par récurrence sur la taille de la liste.'
            }
          ]
        },
        {
          slug: 'absurde',
          title: 'Preuve par l\'absurde',
          description: 'Le raisonnement par l\'absurde, le reductio ad absurdum, le tiers exclu et la controverse intuitionniste.',
          intro: 'La preuve par l\'absurde (reductio ad absurdum) est l\'une des méthodes de démonstration les plus puissantes et les plus controversées. Elle consiste à supposer le contraire de ce que l\'on veut prouver et à montrer que cette supposition mène à une contradiction. Bien qu\'universellement acceptée en mathématiques classiques, elle est rejetée par le courant intuitionniste.',
          introHighlight: 'La preuve par l\'absurde est un détour paradoxal : on établit la vérité d\'un énoncé en montrant que son contraire est impossible. C\'est le « vous ne pouvez pas me contredire » de la logique.',
          sections: [
            {
              title: 'Principe du raisonnement par l\'absurde',
              paragraphs: ['Le raisonnement par l\'absurde suit cette structure : pour prouver P, on suppose ¬P, on en déduit une contradiction (Q ∧ ¬Q pour un certain Q), et l\'on conclut que ¬P est impossible, donc P est vrai. Formellement, le principe s\'écrit : (¬P → ⊥) → P, où ⊥ désigne l\'absurde (la contradiction).', 'Exemple classique : l\'irrationalité de √2. Supposons que √2 = p/q avec p, q entiers et la fraction irréductible. Alors 2q² = p², donc p² est pair, donc p est pair (p = 2k). Alors 2q² = 4k², donc q² = 2k², donc q est pair. Contradiction : p et q sont tous deux pairs, la fraction n\'est pas irréductible. Donc √2 est irrationnel.'],
              highlight: 'La preuve de l\'irrationalité de √2 est l\'une des plus anciennes preuves par l\'absurde connue, attribuée à l\'école pythagoricienne (Ve siècle av. J.-C.).'
            },
            {
              title: 'Tiers exclu et double négation',
              paragraphs: ['Le raisonnement par l\'absurde repose sur la loi du tiers exclu (p ∨ ¬p) et la loi de double négation (¬¬p → p). En logique classique, ces lois sont des tautologies. Si ¬P mène à une contradiction, alors ¬P est faux, donc ¬¬P est vrai, et par double négation, P est vrai.', 'Il existe une distinction subtile entre preuve par l\'absurde (supposer ¬P et dériver ⊥ pour conclure P) et preuve par contradiction (supposer ¬P et dériver ⊥ pour conclure ¬¬P). En logique classique, les deux sont équivalentes grâce à la double négation. En logique intuitionniste, seule la seconde est valide : on peut conclure ¬¬P mais pas toujours P.'],
              highlight: 'En logique intuitionniste, montrer que ¬P est contradictoire prouve ¬¬P mais pas P. L\'absence de preuve de l\'absence de preuve n\'est pas une preuve !'
            },
            {
              title: 'La controverse intuitionniste',
              paragraphs: ['L\'intuitionnisme, fondé par L.E.J. Brouwer dans les années 1910, rejette le tiers exclu et la preuve par l\'absurde non constructive. Pour un intuitionniste, prouver l\'existence d\'un objet exige de le construire explicitement ; montrer que son inexistence est contradictoire ne suffit pas. Par exemple, prouver « il existe un nombre premier p > 10¹⁰⁰⁰ » exige de produire un tel p, pas seulement de montrer que ¬∃p est absurde.', 'Le débat entre classiques et intuitionnistes a marqué les années 1920-1930. Hilbert déclarait : « Retirer le tiers exclu au mathématicien serait comme interdire au boxeur d\'utiliser ses poings. » Brouwer répondait que les preuves non constructives ne donnent aucune information sur l\'objet dont elles affirment l\'existence. Aujourd\'hui, la logique intuitionniste connaît un regain d\'intérêt grâce à la correspondance de Curry-Howard et à la théorie des types.'],
              highlight: 'Le débat classique/intuitionniste n\'est pas tranché : les deux approches coexistent, chacune avec ses forces. Le classique est plus puissant, l\'intuitionniste est plus informatif.'
            }
          ],
          quiz: [
            {
              q: 'Quel nombre la preuve par l\'absurde classique montre-t-elle irrationnel ?',
              opts: ['π', 'e', '√2', 'φ (nombre d\'or)'],
              correct: 2,
              explanation: 'La preuve par l\'absurde de l\'irrationalité de √2 est attribuée aux Pythagoriciens et constitue l\'un des plus anciens exemples de cette méthode de démonstration.'
            },
            {
              q: 'Quelle loi logique l\'intuitionnisme rejette-t-il ?',
              opts: ['Le modus ponens', 'La loi du tiers exclu', 'La loi de non-contradiction', 'La commutativité du ∧'],
              correct: 1,
              explanation: 'L\'intuitionnisme de Brouwer rejette la loi du tiers exclu (p ∨ ¬p) comme principe général. Une proposition n\'est vraie que si l\'on peut la démontrer constructivement.'
            },
            {
              q: 'Qui est le fondateur de l\'intuitionnisme ?',
              opts: ['David Hilbert', 'L.E.J. Brouwer', 'Bertrand Russell', 'Georg Cantor'],
              correct: 1,
              explanation: 'Luitzen Egbertus Jan Brouwer (1881-1966) a fondé l\'intuitionnisme mathématique, contestant les fondements classiques des mathématiques.'
            }
          ],
          definitions: [
            {
              term: 'Preuve par l\'absurde',
              def: 'Méthode de démonstration consistant à supposer ¬P, à en dériver une contradiction, et à conclure P. Aussi appelée reductio ad absurdum.'
            },
            {
              term: 'Tiers exclu',
              def: 'Loi logique affirmant que pour toute proposition P, P ∨ ¬P est vrai. Acceptée en logique classique, rejetée par l\'intuitionnisme.'
            },
            {
              term: 'Double négation',
              def: 'Loi classique : ¬¬P → P. Valide en logique classique mais pas en logique intuitionniste où ¬¬P est plus faible que P.'
            },
            {
              term: 'Intuitionnisme',
              def: 'Courant philosophique et mathématique (Brouwer) exigeant des preuves constructives : l\'existence d\'un objet doit être établie par sa construction explicite.'
            },
            {
              term: 'Preuve constructive',
              def: 'Preuve qui fournit explicitement l\'objet dont elle affirme l\'existence, par opposition aux preuves d\'existence non constructives.'
            }
          ],
          memos: [
            {
              front: 'Citation célèbre',
              back: 'Hilbert (1927) : « Retirer le tiers exclu au mathématicien serait comme interdire au boxeur d\'utiliser ses poings. » Cela illustre l\'importance de la preuve par l\'absurde en mathématiques classiques.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La preuve de l\'irrationalité de √2 aurait provoqué une crise chez les Pythagoriciens, dont la philosophie reposait sur l\'idée que tout est nombre (rationnel). La légende dit qu\'Hippase de Métaponte, qui l\'aurait découverte, fut noyé.'
            },
            {
              front: 'Lien moderne',
              back: 'La logique intuitionniste est le fondement de l\'assistant de preuve Coq/Rocq. Pour utiliser le tiers exclu, il faut l\'importer explicitement comme axiome (Classical). Le constructivisme est le mode par défaut.'
            }
          ]
        },
        {
          slug: 'axiomatique',
          title: 'Systèmes axiomatiques',
          description: 'L\'axiomatique euclidienne, les axiomes de Peano, ZFC et la notion de cohérence.',
          intro: 'Un système axiomatique est un ensemble d\'axiomes (énoncés admis sans preuve) et de règles d\'inférence à partir desquels on dérive des théorèmes. Depuis Euclide, l\'axiomatisation est la méthode par excellence pour organiser les mathématiques. Au XXe siècle, les travaux de Hilbert, Zermelo et Fraenkel ont conduit à l\'axiomatisation de l\'ensemble des mathématiques.',
          introHighlight: 'L\'axiomatique est le squelette des mathématiques : quelques principes premiers, admis sans preuve, à partir desquels tout le reste est déduit avec une rigueur absolue.',
          sections: [
            {
              title: 'L\'axiomatique euclidienne',
              paragraphs: ['Les Éléments d\'Euclide (vers 300 av. J.-C.) sont le premier grand exemple de système axiomatique. Euclide part de cinq postulats (dont le célèbre postulat des parallèles) et de notions communes (axiomes) pour dériver 465 propositions de géométrie. Ce modèle de rigueur déductive a dominé les mathématiques pendant plus de deux millénaires.', 'Le cinquième postulat d\'Euclide (par un point extérieur à une droite, il passe une et une seule parallèle) a résisté pendant deux mille ans aux tentatives de démonstration. Au XIXe siècle, Lobatchevski, Bolyai et Riemann ont montré qu\'on pouvait le nier sans contradiction, créant les géométries non euclidiennes. Cet épisode a révélé que les axiomes sont des choix, non des vérités évidentes.'],
              highlight: 'Les géométries non euclidiennes ont montré que les axiomes ne sont pas des vérités absolues mais des hypothèses de travail. Changer les axiomes, c\'est changer de monde mathématique.'
            },
            {
              title: 'Les axiomes de Peano et l\'arithmétique',
              paragraphs: ['Giuseppe Peano (1889) a axiomatisé l\'arithmétique en cinq axiomes : (1) 0 est un nombre naturel, (2) tout nombre a un successeur, (3) 0 n\'est le successeur d\'aucun nombre, (4) deux nombres distincts ont des successeurs distincts, (5) le principe de récurrence. Ces axiomes caractérisent les nombres naturels à isomorphisme près (catégoricité au second ordre).', 'Au premier ordre, les axiomes de Peano ne sont pas catégoriques : ils admettent des modèles non standard (contenant des « entiers infinis »). L\'arithmétique de Peano (PA) est la version du premier ordre de ces axiomes, avec le schéma d\'induction remplaçant le principe de récurrence. PA est la théorie de base pour l\'étude des limites de la formalisation.'],
              highlight: 'Les axiomes de Peano capturent l\'essence des nombres naturels : tout commence à 0, chaque nombre a un successeur, et la récurrence permet de prouver des propriétés de tous les nombres.'
            },
            {
              title: 'ZFC et les fondements des mathématiques',
              paragraphs: ['La théorie des ensembles de Zermelo-Fraenkel avec l\'axiome du choix (ZFC) est le système axiomatique standard des mathématiques modernes. Ses axiomes régissent l\'existence et la construction des ensembles : extensionnalité, paire, union, ensemble des parties, infini, remplacement, fondation, et le controversé axiome du choix. Presque toutes les mathématiques se formalisent dans ZFC.', 'L\'axiome du choix (AC) affirme que pour toute famille d\'ensembles non vides, il existe une fonction de choix qui sélectionne un élément dans chaque ensemble. Équivalent au lemme de Zorn et au théorème du bon ordre, AC a des conséquences contre-intuitives (paradoxe de Banach-Tarski) mais est indispensable dans de nombreuses branches des mathématiques (analyse fonctionnelle, algèbre, topologie).'],
              highlight: 'ZFC est le « système d\'exploitation » des mathématiques : la plupart des mathématiciens travaillent à l\'intérieur de ZFC sans même y penser, comme on utilise un OS sans voir le code source.'
            }
          ],
          quiz: [
            {
              q: 'Quel postulat d\'Euclide a conduit aux géométries non euclidiennes ?',
              opts: ['Le premier (deux points déterminent une droite)', 'Le troisième (on peut tracer un cercle)', 'Le cinquième (postulat des parallèles)', 'Le deuxième (prolongement d\'un segment)'],
              correct: 2,
              explanation: 'La négation du cinquième postulat d\'Euclide (postulat des parallèles) a donné naissance aux géométries hyperbolique (Lobatchevski) et elliptique (Riemann).'
            },
            {
              q: 'Combien d\'axiomes comporte le système de Peano ?',
              opts: ['3', '5', '9', '12'],
              correct: 1,
              explanation: 'Peano a formulé 5 axiomes pour l\'arithmétique : l\'existence de 0, la fonction successeur, l\'injectivité du successeur, 0 n\'est pas un successeur, et le principe de récurrence.'
            },
            {
              q: 'Que signifie l\'acronyme ZFC ?',
              opts: ['Zermelo-Fraenkel avec Complétude', 'Zermelo-Fraenkel avec Choix', 'Zero-Fondation-Compacité', 'Zorn-Fraenkel-Cantor'],
              correct: 1,
              explanation: 'ZFC signifie Zermelo-Fraenkel avec l\'axiome du Choix (Choice en anglais). C\'est le système axiomatique standard des mathématiques modernes.'
            }
          ],
          definitions: [
            {
              term: 'Axiome',
              def: 'Énoncé admis sans preuve comme point de départ d\'un système formel. Les axiomes ne sont ni vrais ni faux en soi : ce sont des hypothèses fondatrices.'
            },
            {
              term: 'Théorème',
              def: 'Énoncé déduit des axiomes par application des règles d\'inférence. Un théorème est une conséquence logique des axiomes.'
            },
            {
              term: 'Cohérence',
              def: 'Propriété d\'un système axiomatique qui ne permet pas de dériver une contradiction. Si T est cohérent, on ne peut pas prouver P et ¬P dans T.'
            },
            {
              term: 'Axiome du choix',
              def: 'Axiome de ZFC affirmant l\'existence d\'une fonction de choix pour toute famille d\'ensembles non vides. Équivalent au lemme de Zorn et au bon ordre.'
            },
            {
              term: 'Catégoricité',
              def: 'Propriété d\'un système d\'axiomes dont tous les modèles sont isomorphes. Les axiomes de Peano sont catégoriques au second ordre mais pas au premier.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 300 av. J.-C.',
              back: 'Euclide rédige les Éléments, premier grand traité axiomatique de l\'histoire. Ses 465 propositions sont déduites de 5 postulats et 5 notions communes. Le modèle euclidien a inspiré toute la rigueur mathématique ultérieure.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le paradoxe de Banach-Tarski (1924) montre qu\'avec l\'axiome du choix, on peut découper une boule en 5 morceaux et les réassembler en deux boules identiques à l\'originale. Ce résultat a alimenté les doutes sur l\'axiome du choix.'
            },
            {
              front: 'Résumé historique',
              back: 'Euclide (300 av. J.-C.) → axiomatique géométrique. Peano (1889) → axiomatique arithmétique. Zermelo (1908) + Fraenkel (1922) → axiomatique ensembliste. Chaque époque a axiomatisé le niveau supérieur.'
            }
          ]
        },
        {
          slug: 'hilbert',
          title: 'Le programme de Hilbert',
          description: 'Le formalisme de Hilbert, les 23 problèmes, le programme de fondation et son échec partiel.',
          intro: 'David Hilbert (1862-1943) est l\'un des plus grands mathématiciens de l\'histoire. Son programme formaliste, lancé dans les années 1920, visait à fonder l\'ensemble des mathématiques sur une base axiomatique dont la cohérence serait prouvée par des méthodes finitaires. Ce projet grandiose a été partiellement brisé par les théorèmes d\'incomplétude de Gödel.',
          introHighlight: 'Le programme de Hilbert est la tentative la plus ambitieuse de l\'histoire pour garantir la certitude absolue des mathématiques. Son échec partiel a redéfini notre compréhension des limites du raisonnement formel.',
          sections: [
            {
              title: 'Le formalisme hilbertien',
              paragraphs: ['Pour Hilbert, les mathématiques sont un jeu formel de symboles gouverné par des règles précises. Les axiomes ne sont pas des vérités évidentes mais des règles du jeu. Un système formel est cohérent si le jeu ne produit jamais de contradiction. La question fondamentale est : peut-on prouver, par des moyens finis, que les règles du jeu sont cohérentes ?', 'Le programme de Hilbert (Hilbertprogramm) avait trois objectifs : (1) formaliser toutes les mathématiques dans un système axiomatique, (2) prouver la complétude de ce système (tout énoncé vrai est démontrable), (3) prouver la cohérence du système par des méthodes finitaires (qui n\'utilisent que des raisonnements sur des objets finis). Ce programme reflétait la conviction que les mathématiques sont à la fois complètes et certaines.'],
              highlight: 'Le programme de Hilbert repose sur une idée audacieuse : traiter les mathématiques comme un pur jeu de symboles et prouver, de l\'extérieur, que ce jeu ne peut jamais produire de contradiction.'
            },
            {
              title: 'Les 23 problèmes de Hilbert',
              paragraphs: ['En 1900, au Congrès international des mathématiciens à Paris, Hilbert présente une liste de 23 problèmes ouverts qui, selon lui, guideront les mathématiques du XXe siècle. Cette liste prophétique a effectivement orienté la recherche pendant des décennies. Certains ont été résolus (le 10ᵉ, sur les équations diophantiennes, résolu négativement par Matiyasevich en 1970), d\'autres restent ouverts (le 8ᵉ, l\'hypothèse de Riemann).', 'Le deuxième problème de Hilbert demandait de prouver la cohérence de l\'arithmétique. C\'est précisément ce problème que les théorèmes d\'incomplétude de Gödel (1931) ont montré impossible à résoudre par des méthodes finitaires : l\'arithmétique ne peut pas prouver sa propre cohérence (si elle est cohérente). Ce résultat a brisé le cœur du programme de Hilbert.'],
              highlight: 'Le deuxième problème de Hilbert (prouver la cohérence de l\'arithmétique) a été résolu... mais pas comme Hilbert l\'espérait : Gödel a montré que c\'est impossible dans le cadre même de l\'arithmétique.'
            },
            {
              title: 'L\'héritage du programme de Hilbert',
              paragraphs: ['Bien que les théorèmes de Gödel aient brisé l\'espoir d\'une fondation finitaire complète, le programme de Hilbert a eu des retombées considérables. La théorie de la démonstration, née de ce programme, est devenue une branche majeure de la logique. Gentzen a prouvé la cohérence de l\'arithmétique en 1936, mais en utilisant la récurrence transfinie jusqu\'à l\'ordinal ε₀, dépassant les méthodes finitaires strictes.', 'Aujourd\'hui, le programme de Hilbert « révisé » se poursuit sous des formes nouvelles. La preuve formelle assistée par ordinateur (Coq/Rocq, Lean, Isabelle) réalise partiellement le rêve hilbertien de vérification mécanique des preuves. Le programme de mathématiques inversées (reverse mathematics) étudie quels axiomes sont nécessaires pour prouver chaque théorème, clarifiant la structure logique des mathématiques.'],
              highlight: 'Le programme de Hilbert a échoué dans sa forme originale mais a engendré la théorie de la démonstration, la calculabilité, et les assistants de preuve modernes. L\'échec a été plus fécond que bien des succès.'
            }
          ],
          quiz: [
            {
              q: 'En quelle année Hilbert a-t-il présenté ses 23 problèmes ?',
              opts: ['1879', '1900', '1931', '1950'],
              correct: 1,
              explanation: 'David Hilbert a présenté sa célèbre liste de 23 problèmes au Congrès international des mathématiciens de Paris en 1900.'
            },
            {
              q: 'Quel est le deuxième problème de Hilbert ?',
              opts: ['L\'hypothèse de Riemann', 'La cohérence de l\'arithmétique', 'La résolution des équations diophantiennes', 'La complétude de la géométrie'],
              correct: 1,
              explanation: 'Le deuxième problème de Hilbert demande de prouver la cohérence de l\'arithmétique. Gödel a montré en 1931 que cette preuve est impossible à l\'intérieur de l\'arithmétique elle-même.'
            },
            {
              q: 'Qui a prouvé la cohérence de l\'arithmétique en utilisant la récurrence transfinie ?',
              opts: ['Gödel', 'Hilbert', 'Gentzen', 'Russell'],
              correct: 2,
              explanation: 'Gerhard Gentzen a prouvé la cohérence de l\'arithmétique de Peano en 1936, en utilisant la récurrence transfinie jusqu\'à l\'ordinal ε₀.'
            }
          ],
          definitions: [
            {
              term: 'Programme de Hilbert',
              def: 'Projet (années 1920) visant à fonder toutes les mathématiques sur un système axiomatique dont la cohérence serait prouvée par des méthodes finitaires.'
            },
            {
              term: 'Formalisme',
              def: 'Philosophie des mathématiques selon laquelle les mathématiques sont un jeu formel de symboles. La question de la « vérité » est remplacée par celle de la cohérence.'
            },
            {
              term: 'Méthodes finitaires',
              def: 'Raisonnements n\'utilisant que des objets finis et des opérations concrètes. Hilbert voulait prouver la cohérence des mathématiques par de telles méthodes.'
            },
            {
              term: 'Récurrence transfinie',
              def: 'Extension de la récurrence au-delà des entiers naturels, utilisant des ordinaux transfinis. Gentzen l\'a utilisée jusqu\'à ε₀ pour prouver la cohérence de PA.'
            },
            {
              term: 'Mathématiques inversées',
              def: 'Programme de recherche étudiant quels axiomes sont nécessaires et suffisants pour prouver chaque théorème, clarifiant la « force logique » des résultats mathématiques.'
            }
          ],
          memos: [
            {
              front: 'Citation célèbre',
              back: 'Hilbert (1930, discours de retraite) : « Wir müssen wissen, wir werden wissen » — « Nous devons savoir, nous saurons. » Ironiquement, Gödel venait de présenter, la veille, son théorème d\'incomplétude.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Des 23 problèmes de Hilbert, seuls 3 ou 4 restent pleinement ouverts en 2025, dont l\'hypothèse de Riemann (8ᵉ problème), considérée comme le problème ouvert le plus important des mathématiques.'
            },
            {
              front: 'Ordinal clé : ε₀',
              back: 'ε₀ (epsilon zéro) est le plus petit ordinal α tel que ω^α = α. C\'est la « force de preuve » de l\'arithmétique de Peano : PA prouve la récurrence jusqu\'à tout ordinal < ε₀ mais pas jusqu\'à ε₀ lui-même.'
            }
          ]
        }
      ]
    },
    {
      slug: 'paradoxes',
      title: 'Paradoxes logiques',
      description: 'Le paradoxe du menteur, le paradoxe de Russell, les paradoxes de Zénon, le paradoxe de Newcomb et les paradoxes sémantiques.',
      introText: 'Les paradoxes logiques sont des raisonnements apparemment corrects qui aboutissent à des conclusions contradictoires ou absurdes. Loin d\'être de simples curiosités, ils ont provoqué des crises profondes dans les fondements des mathématiques et de la philosophie, et ont conduit à des avancées majeures en logique, en théorie des ensembles et en sémantique.',
      introHighlight: 'Les paradoxes sont les sentinelles de la logique : ils signalent les limites d\'un système et forcent à repenser ses fondements. Chaque grand paradoxe a engendré une théorie nouvelle.',
      lessons: [
        {
          slug: 'menteur',
          title: 'Le paradoxe du menteur',
          description: 'Le menteur d\'Épiménide, l\'autoréférence, le théorème de Tarski et les hiérarchies de langages.',
          intro: 'Le paradoxe du menteur est le plus ancien et le plus célèbre des paradoxes logiques. « Cette phrase est fausse » : si elle est vraie, elle est fausse, et si elle est fausse, elle est vraie. Cette contradiction apparemment insoluble a conduit Tarski à distinguer le langage-objet du métalangage et à montrer qu\'un langage suffisamment expressif ne peut pas définir sa propre notion de vérité.',
          introHighlight: 'Le paradoxe du menteur montre qu\'un langage ne peut pas parler de sa propre vérité sans tomber dans la contradiction. C\'est la limite fondamentale de l\'autoréférence.',
          sections: [
            {
              title: 'Formulations historiques',
              paragraphs: ['La plus ancienne version connue est attribuée à Épiménide le Crétois (VIe siècle av. J.-C.) : « Tous les Crétois sont menteurs. » Si Épiménide, lui-même crétois, dit vrai, alors il ment. Mais sous cette forme, le paradoxe n\'est pas complet (il se peut que certains Crétois disent parfois la vérité). La version pure est : « Cette phrase est fausse » (ou « Je mens »). Si elle est vraie, alors ce qu\'elle affirme est le cas, donc elle est fausse. Si elle est fausse, alors ce qu\'elle affirme n\'est pas le cas, donc elle n\'est pas fausse, donc elle est vraie.', 'Le paradoxe du menteur a été étudié par les Mégariques (Eubulide de Milet, IVe siècle av. J.-C.), les Stoïciens (Chrysippe, qui aurait écrit six traités sur le sujet) et les logiciens médiévaux (insolubilia). Chaque époque y a vu un problème différent : contradiction dans le langage, limite de la bivalence, ou révélation d\'une structure hiérarchique du sens.'],
              highlight: 'Le paradoxe du menteur est vieux de 2 500 ans mais reste pertinent : il est au cœur du théorème de Tarski et des théorèmes d\'incomplétude de Gödel.'
            },
            {
              title: 'L\'autoréférence et ses pièges',
              paragraphs: ['Le moteur du paradoxe du menteur est l\'autoréférence : la phrase parle d\'elle-même. L\'autoréférence n\'est pas toujours paradoxale : « Cette phrase contient cinq mots » est autoréférentielle et vraie. Le paradoxe surgit quand l\'autoréférence porte sur la valeur de vérité elle-même, créant un circuit vicieux.', 'On peut durcir le paradoxe avec deux phrases : « La phrase suivante est vraie. La phrase précédente est fausse. » Ce paradoxe de Yablo (version en chaîne infinie) élimine même l\'autoréférence directe. Cela montre que le problème n\'est pas l\'autoréférence en soi mais la circularité dans l\'attribution de valeurs de vérité.'],
              highlight: 'Le paradoxe de Yablo montre que l\'autoréférence directe n\'est pas nécessaire : une chaîne infinie de phrases référant à la suivante suffit à produire le paradoxe.'
            },
            {
              title: 'Le théorème d\'indéfinissabilité de Tarski',
              paragraphs: ['Alfred Tarski (1933) a résolu le paradoxe du menteur en montrant qu\'un langage formel suffisamment expressif ne peut pas contenir son propre prédicat de vérité. Plus précisément, il n\'existe pas de formule Vrai(x) dans le langage de l\'arithmétique telle que Vrai(⌜φ⌝) ↔ φ pour toute phrase φ (où ⌜φ⌝ est le code de Gödel de φ). Si un tel prédicat existait, on pourrait construire une phrase disant « je ne suis pas vraie », reproduisant le paradoxe du menteur.', 'La solution de Tarski est la hiérarchie des langages : le langage-objet L₀ parle des nombres, le métalangage L₁ contient un prédicat de vérité pour L₀, le méta-métalangage L₂ contient un prédicat de vérité pour L₁, et ainsi de suite. Chaque niveau peut définir la vérité du niveau inférieur, mais jamais sa propre vérité. Cette hiérarchie est à la base de la sémantique formelle moderne.'],
              highlight: 'Tarski : un langage ne peut pas définir sa propre vérité. Pour parler de la vérité des phrases d\'un langage L, il faut un métalangage plus riche que L.'
            }
          ],
          quiz: [
            {
              q: 'À qui attribue-t-on la plus ancienne version du paradoxe du menteur ?',
              opts: ['Aristote', 'Épiménide le Crétois', 'Platon', 'Socrate'],
              correct: 1,
              explanation: 'Épiménide le Crétois (VIe siècle av. J.-C.) aurait déclaré « Tous les Crétois sont menteurs », créant la forme primitive du paradoxe.'
            },
            {
              q: 'Que montre le théorème d\'indéfinissabilité de Tarski ?',
              opts: ['Que toute phrase est décidable', 'Qu\'un langage ne peut pas définir son propre prédicat de vérité', 'Que le tiers exclu est faux', 'Que l\'arithmétique est incomplète'],
              correct: 1,
              explanation: 'Tarski a prouvé qu\'un langage formel suffisamment expressif ne peut pas contenir de formule définissant la vérité des phrases de ce même langage.'
            },
            {
              q: 'Quelle est la solution de Tarski au paradoxe du menteur ?',
              opts: ['Rejeter la bivalence', 'Distinguer langage-objet et métalangage', 'Interdire l\'autoréférence', 'Ajouter une troisième valeur de vérité'],
              correct: 1,
              explanation: 'Tarski résout le paradoxe par une hiérarchie de langages : chaque niveau peut définir la vérité du niveau inférieur, mais jamais sa propre vérité.'
            }
          ],
          definitions: [
            {
              term: 'Paradoxe du menteur',
              def: 'Paradoxe autoréférentiel : « Cette phrase est fausse. » Si elle est vraie, elle est fausse ; si elle est fausse, elle est vraie.'
            },
            {
              term: 'Autoréférence',
              def: 'Propriété d\'un énoncé qui parle de lui-même. L\'autoréférence est le moteur de nombreux paradoxes et des théorèmes de Gödel.'
            },
            {
              term: 'Théorème de Tarski',
              def: 'Théorème d\'indéfinissabilité (1933) : un langage formel suffisamment expressif ne peut pas contenir son propre prédicat de vérité.'
            },
            {
              term: 'Métalangage',
              def: 'Langage utilisé pour parler d\'un autre langage (le langage-objet). La distinction métalangage/langage-objet est fondamentale en logique et en linguistique.'
            },
            {
              term: 'Paradoxe de Yablo',
              def: 'Version non autoréférentielle du paradoxe du menteur utilisant une chaîne infinie de phrases : « Toutes les phrases suivantes sont fausses. »'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1933',
              back: 'Alfred Tarski publie « Le concept de vérité dans les langages formalisés », démontrant qu\'aucun langage suffisamment expressif ne peut définir sa propre notion de vérité. C\'est le fondement de la sémantique formelle.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Saint Paul cite le paradoxe d\'Épiménide dans son Épître à Tite (1:12) : « Un prophète crétois a dit : Les Crétois sont toujours menteurs. » C\'est l\'une des plus anciennes références écrites au paradoxe.'
            },
            {
              front: 'Lien avec Gödel',
              back: 'Gödel s\'est inspiré du paradoxe du menteur pour construire sa phrase indécidable G : « Cette phrase n\'est pas démontrable dans PA. » Si G est vraie, elle est indémontrable ; si elle est fausse, PA est incohérent.'
            }
          ]
        },
        {
          slug: 'russell',
          title: 'Le paradoxe de Russell',
          description: 'L\'ensemble de tous les ensembles, la crise des fondements, la théorie des types et les axiomatisations.',
          intro: 'En 1901, Bertrand Russell découvre une contradiction au cœur de la théorie naïve des ensembles de Cantor : l\'ensemble de tous les ensembles qui ne se contiennent pas eux-mêmes conduit à une contradiction. Ce paradoxe a provoqué la plus grande crise des fondements des mathématiques et a conduit aux axiomatisations de Zermelo-Fraenkel et à la théorie des types de Russell.',
          introHighlight: 'Le paradoxe de Russell a montré que la notion intuitive d\'ensemble est contradictoire : on ne peut pas former librement n\'importe quelle collection en un ensemble.',
          sections: [
            {
              title: 'Le paradoxe',
              paragraphs: ['Considérons l\'ensemble R = {x | x ∉ x}, l\'ensemble de tous les ensembles qui ne sont pas membres d\'eux-mêmes. Question : R ∈ R ? Si R ∈ R, alors par définition de R, R ∉ R. Si R ∉ R, alors R satisfait la condition de membership, donc R ∈ R. Dans les deux cas, on obtient une contradiction : R ∈ R si et seulement si R ∉ R.', 'Russell a communiqué ce paradoxe à Frege en 1902, alors que celui-ci achevait le deuxième volume de ses Grundgesetze der Arithmetik. Frege a reconnu avec une honnêteté admirable que son système était fondamentalement miné. Il écrivit : « Un scientifique ne peut guère rencontrer rien de plus fâcheux que de voir le fondement de son édifice ébranlé au moment où l\'ouvrage est achevé. »'],
              highlight: 'Le paradoxe de Russell détruit la théorie naïve des ensembles : le principe de compréhension illimitée (former un ensemble à partir de n\'importe quelle propriété) est contradictoire.'
            },
            {
              title: 'La crise des fondements',
              paragraphs: ['Le paradoxe de Russell, combiné à d\'autres paradoxes (Burali-Forti, Cantor), a provoqué la « crise des fondements » des mathématiques au début du XXe siècle. Trois écoles de pensée ont émergé pour résoudre la crise : le logicisme (Russell et Whitehead, Principia Mathematica), le formalisme (Hilbert) et l\'intuitionnisme (Brouwer).', 'Russell et Whitehead ont tenté de fonder les mathématiques sur la logique dans les Principia Mathematica (1910-1913). Leur théorie des types hiérarchise les ensembles en niveaux : un ensemble de niveau n ne peut contenir que des éléments de niveau n−1. L\'ensemble R ne peut pas exister car il mélange les niveaux. La théorie des types est lourde mais évite le paradoxe.'],
              highlight: 'La crise des fondements a forcé les mathématiciens à choisir : restreindre la formation des ensembles (ZFC), hiérarchiser les types (Russell), ou abandonner le tiers exclu (Brouwer).'
            },
            {
              title: 'Les solutions axiomatiques',
              paragraphs: ['La solution standard est la théorie axiomatique des ensembles de Zermelo-Fraenkel (ZF, 1908-1922). L\'axiome de séparation (Aussonderung) remplace le principe de compréhension illimitée : on ne peut former {x ∈ A | P(x)} qu\'à partir d\'un ensemble A déjà existant. L\'ensemble R ne peut plus être construit car il n\'existe pas d\'ensemble universel U tel que R = {x ∈ U | x ∉ x}.', 'La théorie des classes de von Neumann-Bernays-Gödel (NBG) distingue les ensembles (petites collections) des classes propres (grandes collections). La classe de tous les ensembles qui ne se contiennent pas eux-mêmes existe comme classe propre, mais elle n\'est pas un ensemble et ne peut pas être membre d\'elle-même. L\'approche alternative de Quine (New Foundations, 1937) autorise un ensemble universel mais restreint la compréhension aux formules « stratifiées ».'],
              highlight: 'Le paradoxe de Russell a été le catalyseur de la théorie axiomatique des ensembles : ZFC, NBG, et NF sont toutes des réponses à cette unique contradiction.'
            }
          ],
          quiz: [
            {
              q: 'En quelle année Russell a-t-il découvert son paradoxe ?',
              opts: ['1879', '1901', '1931', '1963'],
              correct: 1,
              explanation: 'Bertrand Russell a découvert le paradoxe en 1901 et l\'a communiqué à Frege en 1902, mettant en crise la théorie naïve des ensembles.'
            },
            {
              q: 'Quel est l\'ensemble paradoxal de Russell ?',
              opts: ['L\'ensemble vide', 'L\'ensemble des entiers', 'L\'ensemble des ensembles qui ne se contiennent pas eux-mêmes', 'L\'ensemble de tous les ensembles'],
              correct: 2,
              explanation: 'R = {x | x ∉ x} est l\'ensemble de Russell. La question « R ∈ R ? » conduit à une contradiction dans les deux cas.'
            },
            {
              q: 'Comment ZFC évite-t-elle le paradoxe de Russell ?',
              opts: ['En interdisant les quantificateurs', 'Par l\'axiome de séparation (pas de compréhension illimitée)', 'En rejetant le tiers exclu', 'En utilisant la logique floue'],
              correct: 1,
              explanation: 'L\'axiome de séparation de ZFC ne permet de former des ensembles qu\'en sélectionnant des éléments d\'un ensemble préexistant, empêchant la construction de l\'ensemble de Russell.'
            }
          ],
          definitions: [
            {
              term: 'Paradoxe de Russell',
              def: 'Contradiction dans la théorie naïve des ensembles : l\'ensemble R = {x | x ∉ x} ne peut ni se contenir ni ne pas se contenir.'
            },
            {
              term: 'Principe de compréhension',
              def: 'Principe (naïf) selon lequel pour toute propriété P, l\'ensemble {x | P(x)} existe. Le paradoxe de Russell montre qu\'il est contradictoire.'
            },
            {
              term: 'Théorie des types',
              def: 'Système hiérarchique (Russell) où les objets sont classés par niveaux : un ensemble de niveau n ne peut contenir que des objets de niveau n−1.'
            },
            {
              term: 'Axiome de séparation',
              def: 'Axiome de ZFC : à partir d\'un ensemble A et d\'une propriété P, on peut former l\'ensemble {x ∈ A | P(x)}. Remplace la compréhension illimitée.'
            },
            {
              term: 'Classe propre',
              def: 'Collection trop grande pour être un ensemble (NBG). La classe de tous les ordinaux est une classe propre : elle ne peut pas être membre d\'une autre classe.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1902',
              back: 'Russell écrit à Frege pour lui signaler le paradoxe. Frege reconnaît que « le fondement de son édifice est ébranlé ». Les Grundgesetze sont publiés avec un appendice reconnaissant le problème.'
            },
            {
              front: 'Version populaire',
              back: 'Le barbier de Séville : « Le barbier rase tous ceux qui ne se rasent pas eux-mêmes. Qui rase le barbier ? » S\'il se rase, il ne devrait pas ; s\'il ne se rase pas, il devrait. C\'est l\'analogue populaire du paradoxe de Russell.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les Principia Mathematica de Russell et Whitehead (1910-1913) comptent 3 volumes et plus de 2 000 pages. Il faut 362 pages pour arriver à la preuve que 1 + 1 = 2, commentée : « La proposition est parfois utile. »'
            }
          ]
        },
        {
          slug: 'zenon',
          title: 'Les paradoxes de Zénon',
          description: 'Achille et la tortue, la dichotomie, la flèche, le stade et les solutions modernes.',
          intro: 'Zénon d\'Élée (Ve siècle av. J.-C.) a formulé une série de paradoxes visant à défendre la philosophie de Parménide selon laquelle le mouvement et la pluralité sont des illusions. Ses arguments, qui semblent prouver l\'impossibilité du mouvement, ont résisté à toute réfutation satisfaisante pendant plus de deux millénaires, jusqu\'au développement de l\'analyse mathématique rigoureuse au XIXe siècle.',
          introHighlight: 'Les paradoxes de Zénon sont les plus anciens défis philosophiques à notre compréhension de l\'infini, du continu et du mouvement. Leur résolution a exigé l\'invention de l\'analyse mathématique.',
          sections: [
            {
              title: 'Achille et la tortue',
              paragraphs: ['Achille, le plus rapide des coureurs, fait la course contre une tortue qui a une longueur d\'avance. Quand Achille atteint le point de départ de la tortue, celle-ci a avancé d\'une certaine distance. Quand Achille atteint ce nouveau point, la tortue a encore avancé. Et ainsi de suite à l\'infini : Achille doit parcourir une infinité d\'intervalles successifs. Zénon conclut qu\'Achille ne rattrape jamais la tortue.', 'La solution moderne repose sur le concept de série convergente. Si Achille court à 10 m/s et la tortue à 1 m/s avec 10 m d\'avance, Achille parcourt les distances 10 + 1 + 0,1 + 0,01 + ... = 10/(1 − 1/10) = 100/9 ≈ 11,11 m en un temps fini de 100/90 ≈ 1,11 secondes. La somme infinie converge vers une valeur finie : l\'infini des étapes ne requiert pas un temps infini.'],
              highlight: 'La clé d\'Achille et la tortue : une somme infinie de termes de plus en plus petits peut converger vers une valeur finie. L\'infini n\'est pas synonyme d\'interminable.'
            },
            {
              title: 'La dichotomie et la flèche',
              paragraphs: ['Le paradoxe de la dichotomie affirme que pour aller d\'un point A à un point B, il faut d\'abord parcourir la moitié, puis la moitié de la moitié restante, et ainsi de suite. On doit donc accomplir une infinité de tâches, ce qui semble impossible. C\'est la version « régressante » : avant d\'arriver, il faut être à mi-chemin, et avant d\'être à mi-chemin, il faut être au quart, etc. Le mouvement ne peut même pas commencer.', 'Le paradoxe de la flèche est différent : à chaque instant, une flèche en vol occupe un espace égal à sa taille. À cet instant, elle est donc immobile. Mais le vol n\'est qu\'une succession d\'instants. Comment le mouvement naît-il d\'une succession d\'immobilités ? Ce paradoxe interroge la nature du temps : est-il composé d\'instants discrets ou est-il continu ?'],
              highlight: 'Le paradoxe de la flèche attaque la nature du temps : si chaque instant est un état d\'immobilité, comment le mouvement est-il possible ? C\'est un défi pour toute théorie physique du mouvement.'
            },
            {
              title: 'Solutions et leçons philosophiques',
              paragraphs: ['La solution mathématique standard des paradoxes de Zénon repose sur la théorie des séries convergentes (Cauchy, Weierstrass, XIXe siècle) et sur la définition rigoureuse des nombres réels comme continuum. La somme 1/2 + 1/4 + 1/8 + ... = 1 montre qu\'une infinité d\'étapes peut être accomplie en un temps fini. Le mouvement est modélisé par une fonction continue du temps vers l\'espace.', 'Cependant, certains philosophes et physiciens estiment que la solution mathématique ne résout pas le problème métaphysique : comment une infinité réelle de tâches peut-elle être accomplie ? Le philosophe James Thomson a proposé le paradoxe de la lampe (1954) : une lampe est allumée puis éteinte à des intervalles de plus en plus courts. Après un temps fini, est-elle allumée ou éteinte ? Ce paradoxe montre que les « supertâches » (infinité d\'actions en temps fini) restent philosophiquement problématiques.'],
              highlight: 'Les paradoxes de Zénon ont été « résolus » mathématiquement mais restent philosophiquement vivants : la question de la nature de l\'infini et du continu est toujours ouverte.'
            }
          ],
          quiz: [
            {
              q: 'Quel concept mathématique résout le paradoxe d\'Achille et la tortue ?',
              opts: ['Les nombres premiers', 'Les séries convergentes', 'La théorie des graphes', 'Le calcul matriciel'],
              correct: 1,
              explanation: 'La solution repose sur le fait qu\'une somme infinie de termes décroissants peut converger vers une valeur finie, concept formalisé au XIXe siècle.'
            },
            {
              q: 'Quel philosophe grec a formulé ces paradoxes du mouvement ?',
              opts: ['Platon', 'Aristote', 'Zénon d\'Élée', 'Démocrite'],
              correct: 2,
              explanation: 'Zénon d\'Élée (vers 490-430 av. J.-C.) a formulé ces paradoxes pour défendre la philosophie de son maître Parménide, selon qui le mouvement est une illusion.'
            },
            {
              q: 'Que questionne le paradoxe de la flèche ?',
              opts: ['La nature de l\'espace', 'La nature du temps et du mouvement instantané', 'L\'existence des nombres', 'La validité de la logique'],
              correct: 1,
              explanation: 'Le paradoxe de la flèche interroge comment le mouvement peut émerger d\'une succession d\'instants où la flèche est immobile à chaque instant.'
            }
          ],
          definitions: [
            {
              term: 'Paradoxe d\'Achille et la tortue',
              def: 'Argument de Zénon : un coureur rapide ne rattrape jamais un concurrent lent ayant une avance, car il doit parcourir une infinité d\'intervalles successifs.'
            },
            {
              term: 'Paradoxe de la dichotomie',
              def: 'Argument de Zénon : pour parcourir une distance, il faut d\'abord en parcourir la moitié, puis la moitié de la moitié, à l\'infini. Le mouvement ne peut même pas commencer.'
            },
            {
              term: 'Série convergente',
              def: 'Somme infinie dont les termes deviennent suffisamment petits pour que la somme totale soit finie. Exemple : 1/2 + 1/4 + 1/8 + ... = 1.'
            },
            {
              term: 'Supertâche',
              def: 'Accomplissement d\'une infinité d\'actions en un temps fini. Concept utilisé en philosophie pour analyser les paradoxes de Zénon.'
            },
            {
              term: 'Paradoxe de la flèche',
              def: 'Argument de Zénon : à chaque instant, une flèche en vol occupe un espace fixe (est immobile). Le mouvement est donc impossible.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Ve siècle av. J.-C.',
              back: 'Zénon d\'Élée formule ses paradoxes vers 460 av. J.-C. Aristote les rapporte dans sa Physique. Ils ne seront « résolus » mathématiquement qu\'au XIXe siècle avec la théorie des limites.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Diogène le Cynique aurait « réfuté » Zénon en se levant et en marchant. Mais cette réfutation pratique ne touche pas l\'argument logique : Zénon ne niait pas l\'apparence du mouvement mais sa possibilité logique.'
            },
            {
              front: 'Formule clé',
              back: 'Série géométrique convergente : a + ar + ar² + ar³ + ... = a/(1−r) pour |r| < 1. C\'est cette formule qui « résout » Achille et la tortue en montrant que la somme est finie.'
            }
          ]
        },
        {
          slug: 'newcomb',
          title: 'Le paradoxe de Newcomb',
          description: 'Théorie de la décision, causalité, dominance et prédiction parfaite.',
          intro: 'Le paradoxe de Newcomb (1960) est l\'un des problèmes les plus débattus de la théorie de la décision. Un prédicteur quasi infaillible a prédit votre choix. Devant vous, deux boîtes : l\'une transparente contient 1 000 €, l\'autre est opaque. Si le prédicteur a prédit que vous ne prenez que la boîte opaque, il y a placé 1 000 000 €. Si vous prenez les deux boîtes, elle est vide. Que faites-vous ?',
          introHighlight: 'Le paradoxe de Newcomb oppose deux principes de rationalité : maximiser l\'utilité espérée (prendre une seule boîte) ou choisir l\'action dominante (prendre les deux). Les philosophes sont divisés depuis plus de 60 ans.',
          sections: [
            {
              title: 'Les deux raisonnements',
              paragraphs: ['L\'argument pour une seule boîte (one-boxer) : le prédicteur a un taux de réussite de 99,9 %. Si vous ne prenez que la boîte opaque, elle contient presque certainement 1 000 000 €. Si vous prenez les deux, la boîte opaque est presque certainement vide et vous ne gagnez que 1 000 €. La théorie de la décision par l\'utilité espérée recommande de ne prendre que la boîte opaque.', 'L\'argument pour les deux boîtes (two-boxer) : le prédicteur a déjà fait sa prédiction et placé (ou non) l\'argent. Votre choix ne change pas le contenu de la boîte opaque. Quoi qu\'il y ait dedans, prendre les deux boîtes vous donne 1 000 € de plus que n\'en prendre qu\'une. Le principe de dominance recommande de prendre les deux boîtes.'],
              highlight: 'Le cœur du paradoxe : votre choix est-il la cause du contenu de la boîte (un seul choix est rationnel) ou le contenu est-il déjà fixé (les deux boîtes dominent) ?'
            },
            {
              title: 'Théories de la décision rivales',
              paragraphs: ['La théorie de la décision évidencielle (evidential decision theory, EDT) recommande de ne prendre qu\'une boîte : votre choix est un indicateur (evidence) du contenu de la boîte, et maximiser l\'utilité espérée conditionnellement à votre action donne un seul choix. La théorie de la décision causale (causal decision theory, CDT) recommande les deux boîtes : votre action n\'a pas de pouvoir causal sur le passé, et la dominance s\'applique.', 'Le débat EDT vs CDT a engendré une littérature immense en philosophie de l\'action. Nozick, qui a popularisé le problème en 1969, notait que les gens intelligents se divisent à peu près également entre les deux options. Des variantes comme le dilemme du prisonnier à un coup contre un simulateur de soi rendent le problème encore plus aigu.'],
              highlight: 'EDT et CDT donnent des réponses opposées au paradoxe de Newcomb. Le choix entre ces théories est l\'un des problèmes ouverts les plus importants de la philosophie de l\'action.'
            },
            {
              title: 'Libre arbitre et prédiction',
              paragraphs: ['Le paradoxe de Newcomb soulève des questions fondamentales sur le libre arbitre et le déterminisme. Si un prédicteur peut anticiper vos choix avec une précision quasi parfaite, vos décisions sont-elles vraiment libres ? Le paradoxe illustre la tension entre deux intuitions : celle de la liberté de choix (je peux prendre les deux boîtes quoi que le prédicteur ait prédit) et celle de la prédictibilité (mes choix sont déterminés par des causes antérieures que le prédicteur peut analyser).', 'Des variantes du paradoxe de Newcomb apparaissent en informatique et en intelligence artificielle. La théorie des jeux contre des agents qui modélisent votre stratégie pose des problèmes similaires. L\'alignement des systèmes d\'IA soulève la question de la « prédiction de l\'agent » : comment concevoir un système qui se comporte bien face à des prédicteurs sophistiqués de son propre comportement ?'],
              highlight: 'Le paradoxe de Newcomb n\'est pas qu\'un casse-tête académique : il touche au cœur de la rationalité, du libre arbitre et de la conception des agents artificiels.'
            }
          ],
          quiz: [
            {
              q: 'En quelle décennie le paradoxe de Newcomb a-t-il été formulé ?',
              opts: ['Années 1920', 'Années 1940', 'Années 1960', 'Années 1980'],
              correct: 2,
              explanation: 'Le physicien William Newcomb a formulé ce paradoxe vers 1960. Robert Nozick l\'a popularisé en 1969 dans un article influent.'
            },
            {
              q: 'Que recommande la théorie de la décision causale (CDT) ?',
              opts: ['Ne prendre que la boîte opaque', 'Prendre les deux boîtes', 'Ne prendre aucune boîte', 'Choisir au hasard'],
              correct: 1,
              explanation: 'La CDT applique le principe de dominance : votre choix n\'a pas de pouvoir causal rétroactif, donc prendre les deux boîtes vous donne toujours 1 000 € de plus.'
            },
            {
              q: 'Quel philosophe a popularisé le paradoxe de Newcomb ?',
              opts: ['John Rawls', 'Robert Nozick', 'Daniel Dennett', 'Saul Kripke'],
              correct: 1,
              explanation: 'Robert Nozick a présenté et analysé le paradoxe de Newcomb en 1969, le rendant célèbre dans la communauté philosophique.'
            }
          ],
          definitions: [
            {
              term: 'Paradoxe de Newcomb',
              def: 'Problème de théorie de la décision où un prédicteur quasi infaillible a anticipé votre choix entre une ou deux boîtes, créant un conflit entre utilité espérée et dominance.'
            },
            {
              term: 'Principe de dominance',
              def: 'Principe de rationalité : si une action A donne un meilleur résultat que B dans tous les scénarios possibles, on doit choisir A.'
            },
            {
              term: 'Théorie de la décision évidencielle (EDT)',
              def: 'Théorie recommandant l\'action dont la réalisation est le meilleur indicateur d\'un bon résultat, même sans lien causal direct.'
            },
            {
              term: 'Théorie de la décision causale (CDT)',
              def: 'Théorie recommandant l\'action qui cause le meilleur résultat, en ne considérant que l\'influence causale directe de l\'action sur les conséquences.'
            },
            {
              term: 'Prédicteur',
              def: 'Entité hypothétique capable d\'anticiper les choix d\'un agent avec une très haute fiabilité. Dispositif central du paradoxe de Newcomb.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Dans les sondages informels parmi les philosophes, environ 60 % sont « one-boxers » et 40 % « two-boxers ». Il n\'y a pas de consensus académique même après 60 ans de débat.'
            },
            {
              front: 'Lien avec l\'IA',
              back: 'Le paradoxe de Newcomb est étudié en alignement de l\'IA : si une IA peut prédire le comportement d\'un agent, les principes de rationalité classiques (CDT) peuvent échouer. Des théories alternatives comme la « decision theory fonctionnelle » tentent de résoudre ces cas.'
            },
            {
              front: 'Astuce de réflexion',
              back: 'Posez-vous la question : « Si j\'étais le prédicteur, qu\'aurais-je prédit pour moi-même ? » La réponse révèle votre intuition profonde sur le lien entre choix et prédiction.'
            }
          ]
        },
        {
          slug: 'semantiques',
          title: 'Paradoxes sémantiques',
          description: 'Les paradoxes de Berry, de Grelling-Nelson, de Richard et leur rôle en théorie de la calculabilité.',
          intro: 'Les paradoxes sémantiques exploitent l\'ambiguïté entre le langage et ce dont il parle. Le paradoxe de Berry (« le plus petit entier non définissable en moins de vingt mots ») et le paradoxe de Grelling-Nelson (« hétérologique est-il hétérologique ? ») mettent en lumière les dangers de l\'autoréférence linguistique. Ces paradoxes ont joué un rôle crucial dans le développement de la théorie de la calculabilité.',
          introHighlight: 'Les paradoxes sémantiques révèlent que le langage naturel mélange dangereusement les niveaux : parler du langage dans le langage crée des courts-circuits logiques.',
          sections: [
            {
              title: 'Le paradoxe de Berry',
              paragraphs: ['Le paradoxe de Berry (1906) considère « le plus petit entier naturel qui ne peut pas être défini par une expression de moins de vingt mots français ». Cette expression elle-même utilise moins de vingt mots pour définir un nombre supposé indéfinissable en moins de vingt mots. Contradiction : le nombre est à la fois définissable (par cette expression) et indéfinissable (par hypothèse).', 'Le paradoxe de Berry exploite l\'ambiguïté de la notion de « définissabilité ». La solution consiste à remarquer que « être définissable en moins de vingt mots » n\'est pas une propriété bien définie au sens mathématique : elle dépend du langage utilisé, de la grammaire admise, et de ce que l\'on entend par « définir ». Gödel s\'est inspiré de ce paradoxe pour sa construction de la phrase indécidable.'],
              highlight: 'Le paradoxe de Berry montre que « définissable » n\'est pas une notion mathématique claire : le langage naturel est trop ambigu pour fonder des raisonnements rigoureux sur la définissabilité.'
            },
            {
              title: 'Le paradoxe de Grelling-Nelson',
              paragraphs: ['Le paradoxe de Grelling-Nelson (1908) définit un adjectif comme « autologique » s\'il se décrit lui-même (« court » est court, « français » est français) et « hétérologique » s\'il ne se décrit pas lui-même (« long » n\'est pas long, « allemand » n\'est pas allemand). Question : « hétérologique » est-il hétérologique ?', 'Si « hétérologique » est hétérologique, alors il ne se décrit pas lui-même, donc il n\'est pas hétérologique. Si « hétérologique » n\'est pas hétérologique, alors il se décrit lui-même, donc il est hétérologique. C\'est un paradoxe de Russell transposé dans le domaine linguistique. La solution passe par la distinction entre le mot (niveau du langage-objet) et la propriété qu\'il exprime (niveau du métalangage).'],
              highlight: 'Le paradoxe de Grelling-Nelson est le frère jumeau du paradoxe de Russell, appliqué aux mots plutôt qu\'aux ensembles : l\'autoréférence produit la même contradiction.'
            },
            {
              title: 'Rôle en théorie de la calculabilité',
              paragraphs: ['Les paradoxes sémantiques ont directement inspiré les résultats fondamentaux de la théorie de la calculabilité. Le paradoxe de Berry est à l\'origine de la preuve de l\'incompressibilité de Kolmogorov : la plupart des nombres ne peuvent pas être décrits par un programme plus court qu\'eux-mêmes. La diagonalisation de Cantor, qui prouve l\'indénombrabilité de ℝ, est structurellement identique au paradoxe de Russell.', 'L\'argument diagonal est le fil conducteur qui relie tous ces résultats : le paradoxe de Russell (pas d\'ensemble universel), le théorème de Cantor (pas de surjection de A vers P(A)), le théorème de Tarski (pas de prédicat de vérité), les théorèmes de Gödel (pas de formule d\'auto-prouvabilité), et le problème de l\'arrêt de Turing (pas de décideur universel). Le même schéma autoréférentiel engendre toutes ces impossibilités.'],
              highlight: 'L\'argument diagonal est le méta-paradoxe : un seul schéma de raisonnement autoréférentiel produit les résultats de Cantor, Russell, Gödel, Tarski et Turing. C\'est le motif le plus profond de la logique.'
            }
          ],
          quiz: [
            {
              q: 'Que définit le paradoxe de Berry ?',
              opts: ['L\'ensemble de tous les ensembles', 'Le plus petit entier indéfinissable en peu de mots', 'La phrase la plus longue', 'Le nombre de Gödel'],
              correct: 1,
              explanation: 'Le paradoxe de Berry considère « le plus petit entier non définissable en moins de vingt mots », expression qui elle-même le définit en moins de vingt mots.'
            },
            {
              q: 'Le mot « hétérologique » est-il hétérologique ?',
              opts: ['Oui', 'Non', 'C\'est un paradoxe : les deux réponses mènent à une contradiction', 'La question n\'a pas de sens'],
              correct: 2,
              explanation: 'Si oui, il ne se décrit pas, donc non. Si non, il se décrit, donc oui. C\'est le paradoxe de Grelling-Nelson, structurellement identique au paradoxe de Russell.'
            },
            {
              q: 'Quel schéma de raisonnement est commun aux résultats de Cantor, Gödel, Tarski et Turing ?',
              opts: ['Le modus ponens', 'L\'argument diagonal', 'La récurrence', 'Le principe de compacité'],
              correct: 1,
              explanation: 'L\'argument diagonal (diagonalisation) est le schéma commun : il utilise l\'autoréférence et la négation pour produire un objet qui ne peut pas appartenir à une liste supposée exhaustive.'
            }
          ],
          definitions: [
            {
              term: 'Paradoxe de Berry',
              def: 'Paradoxe sémantique : « le plus petit entier non définissable en moins de vingt mots » est défini par cette expression de moins de vingt mots.'
            },
            {
              term: 'Paradoxe de Grelling-Nelson',
              def: 'Paradoxe linguistique : le mot « hétérologique » (qui ne se décrit pas lui-même) ne peut être ni hétérologique ni autologique sans contradiction.'
            },
            {
              term: 'Autologique',
              def: 'Se dit d\'un adjectif qui possède la propriété qu\'il décrit. Exemple : « court » est court, « polysyllabique » est polysyllabique.'
            },
            {
              term: 'Argument diagonal',
              def: 'Technique de preuve par autoréférence et négation, inventée par Cantor (1891). Elle montre qu\'une liste supposée exhaustive omet nécessairement un élément.'
            },
            {
              term: 'Complexité de Kolmogorov',
              def: 'Longueur du plus court programme qui produit une chaîne donnée. La plupart des chaînes sont incompressibles (paradoxe de Berry formalisé).'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Le paradoxe de Berry a été formulé par G.G. Berry, bibliothécaire à la Bodleian Library d\'Oxford, dans une lettre à Bertrand Russell en 1906. Russell l\'a publié dans les Principia Mathematica.'
            },
            {
              front: 'L\'argument diagonal en 4 lignes',
              back: 'Supposez une liste complète L. Construisez un objet D qui diffère de L[n] en position n. Alors D n\'est pas dans L (il diffère de chaque élément). Contradiction : L n\'était pas complète. C\'est Cantor, Russell, Gödel et Turing en un schéma.'
            },
            {
              front: 'Mots autologiques en français',
              back: '« Court » est court. « Polysyllabique » est polysyllabique. « Français » est français. « Lisible » est lisible. Trouver des mots autologiques est un exercice amusant !'
            }
          ]
        }
      ]
    },
    {
      slug: 'godel',
      title: 'Gödel et les limites',
      description: 'Les théorèmes d\'incomplétude, l\'indécidabilité, la machine de Turing, la thèse de Church et les conséquences philosophiques.',
      introText: 'En 1931, Kurt Gödel publie les deux théorèmes qui redéfinissent les limites des mathématiques : tout système formel suffisamment puissant contient des vérités indémontrables, et ne peut pas prouver sa propre cohérence. Complétés par les travaux de Turing et Church sur l\'indécidabilité, ces résultats dessinent les frontières infranchissables du raisonnement formel.',
      introHighlight: 'Les théorèmes d\'incomplétude de Gödel sont les résultats les plus profonds de la logique du XXe siècle : ils montrent que la vérité mathématique dépasse toujours la capacité de preuve de tout système formel.',
      lessons: [
        {
          slug: 'incompletude',
          title: 'Les théorèmes d\'incomplétude',
          description: 'Le premier et le second théorème d\'incomplétude de Gödel, la numérotation de Gödel et la phrase G.',
          intro: 'Les théorèmes d\'incomplétude de Kurt Gödel (1931) sont parmi les résultats les plus célèbres et les plus profonds de toute l\'histoire des mathématiques. Le premier théorème affirme que tout système formel cohérent contenant l\'arithmétique est incomplet : il existe des énoncés vrais mais indémontrables. Le second théorème montre que le système ne peut pas prouver sa propre cohérence.',
          introHighlight: 'Gödel a montré que les mathématiques ne peuvent jamais être complètes : il existera toujours des vérités hors de portée de tout système formel donné.',
          sections: [
            {
              title: 'La numérotation de Gödel',
              paragraphs: ['L\'idée géniale de Gödel est de coder les formules et les preuves par des nombres entiers. Chaque symbole du langage formel reçoit un numéro. Une formule, suite de symboles, est codée par un unique nombre (son nombre de Gödel) via le théorème fondamental de l\'arithmétique. Les preuves, suites de formules, sont aussi codées. Ainsi, les énoncés « sur » les formules deviennent des énoncés « sur » les nombres, et l\'arithmétique peut parler d\'elle-même.', 'La numérotation de Gödel transforme la métamathématique (l\'étude des systèmes formels) en mathématique (l\'étude des nombres). Grâce à ce codage, on peut écrire dans l\'arithmétique une formule Dem(x, y) signifiant « x est le code d\'une preuve de la formule de code y ». La formule ∃x Dem(x, ⌜φ⌝) signifie « φ est démontrable ». C\'est la clé de voûte de la construction de Gödel.'],
              highlight: 'La numérotation de Gödel est l\'idée la plus ingénieuse de la preuve : elle permet à l\'arithmétique de parler d\'elle-même, comme un programme qui inspecte son propre code source.'
            },
            {
              title: 'Le premier théorème d\'incomplétude',
              paragraphs: ['Gödel construit une phrase G (la « phrase de Gödel ») qui affirme, via le codage, « je ne suis pas démontrable dans le système T ». Formellement, G ↔ ¬∃x Dem(x, ⌜G⌝). Si T est cohérent, G n\'est pas démontrable dans T (car si elle l\'était, elle serait fausse, et T prouverait un énoncé faux). Et G n\'est pas réfutable dans T non plus (si ¬G était démontrable, T serait ω-incohérent). Donc G est un énoncé vrai mais indémontrable.', 'Le premier théorème d\'incomplétude (dans sa version renforcée par Rosser, 1936) affirme : pour tout système formel T cohérent, récursivement axiomatisable et contenant l\'arithmétique de Robinson (Q), il existe une phrase G de T telle que ni G ni ¬G ne sont démontrables dans T. Le système est incomplet : il ne peut pas trancher tous les énoncés de son langage. Ajouter G comme axiome ne résout pas le problème : le nouveau système engendre une nouvelle phrase de Gödel.'],
              highlight: 'La phrase G dit « je suis indémontrable ». Si elle est démontrable, le système est incohérent. Si elle est indémontrable, elle est vraie. L\'incomplétude est inévitable.'
            },
            {
              title: 'Le second théorème d\'incomplétude',
              paragraphs: ['Le second théorème d\'incomplétude affirme : si T est un système formel cohérent contenant l\'arithmétique de Peano, alors T ne peut pas démontrer sa propre cohérence. Formellement, si Con(T) désigne la formule arithmétique « T est cohérent » (il n\'existe pas de preuve de 0 = 1 dans T), alors Con(T) n\'est pas démontrable dans T.', 'Ce résultat brise définitivement le programme de Hilbert : l\'arithmétique ne peut pas prouver qu\'elle est exempte de contradiction par ses propres moyens. Pour prouver la cohérence de PA, il faut un système plus fort (comme PA + la récurrence jusqu\'à ε₀, résultat de Gentzen, 1936). Mais la cohérence de ce système plus fort nécessite un système encore plus fort, et ainsi de suite. C\'est une régression sans fin.'],
              highlight: 'Le second théorème d\'incomplétude ferme la porte au rêve de Hilbert : aucun système mathématique assez puissant ne peut garantir sa propre cohérence.'
            }
          ],
          quiz: [
            {
              q: 'En quelle année Gödel a-t-il publié ses théorèmes d\'incomplétude ?',
              opts: ['1920', '1931', '1945', '1960'],
              correct: 1,
              explanation: 'Kurt Gödel a publié « Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme » en 1931, à l\'âge de 25 ans.'
            },
            {
              q: 'Que dit la phrase G de Gödel ?',
              opts: ['Le système est cohérent.', 'Toute formule est décidable.', 'Je ne suis pas démontrable dans ce système.', '0 = 1.'],
              correct: 2,
              explanation: 'La phrase G affirme, via la numérotation de Gödel, « il n\'existe pas de preuve de cette phrase dans le système T ». Si T est cohérent, G est vraie mais indémontrable.'
            },
            {
              q: 'Que dit le second théorème d\'incomplétude ?',
              opts: ['Toute formule est soit vraie soit fausse.', 'Le système ne peut pas prouver sa propre cohérence.', 'Le tiers exclu est un théorème.', 'L\'arithmétique est contradictoire.'],
              correct: 1,
              explanation: 'Le second théorème affirme qu\'un système cohérent contenant PA ne peut pas démontrer l\'énoncé exprimant sa propre cohérence.'
            }
          ],
          definitions: [
            {
              term: 'Numérotation de Gödel',
              def: 'Procédé de codage des formules et des preuves par des nombres entiers, permettant à l\'arithmétique de parler de sa propre syntaxe.'
            },
            {
              term: 'Phrase de Gödel (G)',
              def: 'Phrase arithmétique qui affirme, via le codage, sa propre indémontrabilité dans le système. Si le système est cohérent, G est vraie mais indémontrable.'
            },
            {
              term: 'Premier théorème d\'incomplétude',
              def: 'Tout système formel cohérent, récursivement axiomatisable et contenant l\'arithmétique élémentaire est incomplet : il existe des phrases indécidables.'
            },
            {
              term: 'Second théorème d\'incomplétude',
              def: 'Si un système T contenant PA est cohérent, alors T ne peut pas démontrer l\'énoncé Con(T) exprimant sa propre cohérence.'
            },
            {
              term: 'ω-cohérence',
              def: 'Propriété plus forte que la cohérence : T est ω-cohérent si, pour tout prédicat P, le fait que T prouve P(0), P(1), P(2),... empêche T de prouver ∃x ¬P(x).'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1931',
              back: 'Kurt Gödel, à 25 ans, publie ses théorèmes d\'incomplétude. Ironiquement, Hilbert avait déclaré la veille de la conférence de Gödel : « Wir müssen wissen, wir werden wissen » (Nous devons savoir, nous saurons).'
            },
            {
              front: 'Analogie informatique',
              back: 'La numérotation de Gödel est l\'ancêtre du code source : les formules sont des « programmes » codés par des nombres. La phrase G est un programme qui dit « aucun programme de vérification ne peut me valider ». C\'est un précurseur du problème de l\'arrêt.'
            },
            {
              front: 'Idée reçue à corriger',
              back: 'Gödel n\'a PAS montré que « les mathématiques sont incertaines » ou que « rien n\'est prouvable ». Il a montré que tout système formel a des limites : certaines vérités lui échappent. La plupart des mathématiques restent parfaitement démontrables.'
            }
          ]
        },
        {
          slug: 'indecidabilite',
          title: 'L\'indécidabilité',
          description: 'Le problème de l\'arrêt, l\'indécidabilité de la logique du premier ordre et les problèmes indécidables en mathématiques.',
          intro: 'Un problème est décidable s\'il existe un algorithme qui donne toujours la bonne réponse (oui ou non) en temps fini. L\'indécidabilité est l\'impossibilité d\'un tel algorithme. Le problème de l\'arrêt de Turing (1936) — « ce programme s\'arrête-t-il ? » — est le premier et le plus célèbre problème indécidable. L\'indécidabilité trace les limites absolues de ce que les ordinateurs peuvent calculer.',
          introHighlight: 'L\'indécidabilité signifie qu\'il existe des questions précises, bien formulées, auxquelles aucun algorithme ne pourra jamais répondre. C\'est la limite ultime du calcul.',
          sections: [
            {
              title: 'Le problème de l\'arrêt',
              paragraphs: ['Le problème de l\'arrêt (Halting Problem) demande : étant donné un programme P et une entrée x, le programme P s\'arrête-t-il lorsqu\'on l\'exécute sur x ? Turing a prouvé en 1936 qu\'il n\'existe aucun algorithme qui résout ce problème pour tous les couples (P, x). La preuve utilise l\'argument diagonal : si un tel algorithme H existait, on pourrait construire un programme D qui, sur l\'entrée P, s\'arrête si et seulement si P ne s\'arrête pas sur P. Que fait D sur l\'entrée D ? Contradiction.', 'Le problème de l\'arrêt est le paradigme de l\'indécidabilité. Des milliers de problèmes informatiques et mathématiques sont indécidables, et leur indécidabilité se prouve généralement par réduction au problème de l\'arrêt : on montre que si le nouveau problème était décidable, on pourrait résoudre le problème de l\'arrêt, ce qui est impossible.'],
              highlight: 'Le problème de l\'arrêt est indécidable : aucun programme ne peut déterminer de manière générale si un programme donné s\'arrête ou boucle indéfiniment. C\'est le mur de la calculabilité.'
            },
            {
              title: 'Indécidabilité de la logique du premier ordre',
              paragraphs: ['Church et Turing ont montré indépendamment en 1936 que le problème de la validité de la logique du premier ordre est indécidable : il n\'existe pas d\'algorithme qui, étant donné une formule du premier ordre, détermine si elle est valide (vraie dans toute interprétation). Ce résultat négatif est connu sous le nom de théorème de Church-Turing.', 'Attention : la logique propositionnelle est décidable (les tables de vérité suffisent). La logique du premier ordre est semi-décidable : si une formule est valide, une procédure de preuve finira par le trouver, mais si elle ne l\'est pas, la procédure peut tourner indéfiniment. Le théorème de complétude de Gödel garantit la semi-décidabilité, et le théorème de Church-Turing montre qu\'on ne peut pas faire mieux.'],
              highlight: 'La logique propositionnelle est décidable, la logique du premier ordre est semi-décidable (mais pas décidable). C\'est la frontière exacte de l\'algorithmique en logique.'
            },
            {
              title: 'Problèmes indécidables célèbres',
              paragraphs: ['Le dixième problème de Hilbert demande un algorithme pour déterminer si une équation diophantienne (polynomiale à coefficients entiers) a une solution entière. En 1970, Youri Matiyasevich, s\'appuyant sur les travaux de Davis, Putnam et Robinson, a montré que ce problème est indécidable. Ce résultat, connu sous le nom de théorème MRDP, clôt le dixième problème de Hilbert par la négative.', 'Autres problèmes indécidables majeurs : le problème du mot pour les groupes (Post, Markov, 1947), le problème de Post correspondance (1946), la question de savoir si deux variétés topologiques de dimension 4 sont homéomorphes, et le problème de la tuile (Wang, 1961). L\'indécidabilité n\'est pas un accident : elle est omniprésente dès que les structures sont suffisamment riches.'],
              highlight: 'L\'indécidabilité est la norme, pas l\'exception : dès que les objets mathématiques sont assez complexes, les questions algorithmiques deviennent impossibles.'
            }
          ],
          quiz: [
            {
              q: 'Qui a prouvé l\'indécidabilité du problème de l\'arrêt ?',
              opts: ['Gödel', 'Turing', 'Church', 'Hilbert'],
              correct: 1,
              explanation: 'Alan Turing a prouvé en 1936 que le problème de l\'arrêt est indécidable, utilisant l\'argument diagonal appliqué aux machines de Turing.'
            },
            {
              q: 'La logique du premier ordre est :',
              opts: ['Décidable', 'Indécidable mais semi-décidable', 'Totalement indécidable', 'Décidable si le domaine est fini'],
              correct: 1,
              explanation: 'La logique du premier ordre est semi-décidable (complétude de Gödel) mais pas décidable (théorème de Church-Turing, 1936).'
            },
            {
              q: 'Quel problème de Hilbert a été résolu négativement par Matiyasevich en 1970 ?',
              opts: ['Le 2ᵉ (cohérence de l\'arithmétique)', 'Le 8ᵉ (hypothèse de Riemann)', 'Le 10ᵉ (équations diophantiennes)', 'Le 23ᵉ (calcul des variations)'],
              correct: 2,
              explanation: 'Le dixième problème de Hilbert (décidabilité des équations diophantiennes) a été résolu négativement par Matiyasevich en 1970 : il n\'existe pas d\'algorithme général.'
            }
          ],
          definitions: [
            {
              term: 'Décidabilité',
              def: 'Propriété d\'un problème pour lequel il existe un algorithme donnant toujours la bonne réponse (oui ou non) en temps fini.'
            },
            {
              term: 'Problème de l\'arrêt',
              def: 'Problème indécidable (Turing, 1936) : étant donné un programme P et une entrée x, déterminer si P s\'arrête sur x.'
            },
            {
              term: 'Semi-décidabilité',
              def: 'Propriété d\'un ensemble pour lequel il existe un algorithme qui dit « oui » quand la réponse est oui, mais peut ne jamais s\'arrêter quand la réponse est non.'
            },
            {
              term: 'Réduction',
              def: 'Technique de preuve d\'indécidabilité : montrer que résoudre le problème A permettrait de résoudre un problème B déjà connu comme indécidable.'
            },
            {
              term: 'Théorème MRDP',
              def: 'Résultat de Matiyasevich-Robinson-Davis-Putnam (1970) montrant que le dixième problème de Hilbert (équations diophantiennes) est indécidable.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1936',
              back: 'Année miraculeuse : Turing publie « On Computable Numbers » (machines de Turing, problème de l\'arrêt) et Church publie « An Unsolvable Problem of Elementary Number Theory » (λ-calcul, indécidabilité).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le problème de l\'arrêt est la raison pour laquelle aucun antivirus ne peut être parfait : détecter tout programme malveillant revient à résoudre le problème de l\'arrêt, qui est indécidable.'
            },
            {
              front: 'Hiérarchie de la décidabilité',
              back: 'Logique propositionnelle : décidable (tables de vérité). Logique du premier ordre : semi-décidable. Arithmétique de Peano : indécidable. Logique du second ordre : pas même semi-décidable.'
            }
          ]
        },
        {
          slug: 'turing',
          title: 'La machine de Turing',
          description: 'La formalisation du calcul, la machine universelle, la thèse de Church-Turing et les classes de complexité.',
          intro: 'La machine de Turing, conçue par Alan Turing en 1936, est le modèle mathématique le plus influent de ce qu\'est un calcul. Malgré sa simplicité — un ruban infini, une tête de lecture/écriture, un nombre fini d\'états — elle peut simuler tout processus algorithmique. La machine universelle de Turing préfigure l\'ordinateur programmable moderne.',
          introHighlight: 'La machine de Turing définit ce qu\'est un algorithme : tout ce qui est calculable au sens intuitif est calculable par une machine de Turing. C\'est la thèse de Church-Turing.',
          sections: [
            {
              title: 'Définition et fonctionnement',
              paragraphs: ['Une machine de Turing se compose d\'un ruban infini divisé en cases (chaque case contient un symbole d\'un alphabet fini), d\'une tête de lecture/écriture positionnée sur une case, d\'un registre d\'état (un nombre fini d\'états possibles), et d\'une table de transition qui, pour chaque couple (état courant, symbole lu), spécifie le symbole à écrire, le déplacement de la tête (gauche ou droite) et le nouvel état.', 'Le calcul commence dans un état initial avec une entrée inscrite sur le ruban. La machine applique sa table de transition pas à pas. Si elle atteint un état d\'arrêt, le calcul est terminé et le contenu du ruban est le résultat. Si elle n\'atteint jamais d\'état d\'arrêt, le calcul ne termine pas. Malgré cette simplicité extrême, les machines de Turing peuvent calculer tout ce que calculent nos ordinateurs modernes.'],
              highlight: 'La machine de Turing est le modèle abstrait de tout ordinateur : un ruban (la mémoire), une tête (le processeur), une table de transition (le programme). Rien de plus n\'est nécessaire.'
            },
            {
              title: 'La machine universelle',
              paragraphs: ['Turing a montré qu\'il existe une machine de Turing universelle U capable de simuler n\'importe quelle autre machine de Turing. La machine U prend en entrée la description (le code) d\'une machine M et une entrée x, et simule le calcul de M sur x. C\'est le concept même d\'ordinateur programmable : une seule machine qui exécute n\'importe quel programme.', 'La machine universelle est l\'ancêtre conceptuel de l\'ordinateur à programme enregistré (architecture de von Neumann, 1945). L\'idée que le programme et les données sont de même nature (des suites de symboles sur le ruban) est révolutionnaire : elle permet la compilation, l\'interprétation, et même les programmes qui s\'analysent eux-mêmes (réflexivité computationnelle).'],
              highlight: 'La machine universelle de Turing est le concept d\'ordinateur : une seule machine qui, recevant la description de n\'importe quel algorithme, l\'exécute. C\'est le fondement théorique de l\'informatique.'
            },
            {
              title: 'La thèse de Church-Turing',
              paragraphs: ['La thèse de Church-Turing affirme que toute fonction « effectivement calculable » (au sens intuitif) est calculable par une machine de Turing. Ce n\'est pas un théorème mais une thèse philosophique, car la notion de « calcul intuitif » n\'a pas de définition formelle. Cependant, tous les modèles de calcul proposés (λ-calcul de Church, fonctions récursives de Kleene, systèmes de Post, automates cellulaires) se sont révélés équivalents aux machines de Turing.', 'La thèse de Church-Turing a une version forte (« physique ») : tout processus physique peut être simulé par une machine de Turing. Cette version est contestée par certains, en particulier par ceux qui étudient l\'informatique quantique, bien que les ordinateurs quantiques ne violent probablement pas la thèse (ils accélèrent certains calculs mais ne calculent rien de nouveau au sens de la calculabilité).'],
              highlight: 'La thèse de Church-Turing est le consensus fondamental de l\'informatique : la machine de Turing est le modèle universel du calcul. Tout ce qui peut être calculé, elle peut le calculer.'
            }
          ],
          quiz: [
            {
              q: 'De quels composants se compose une machine de Turing ?',
              opts: ['Un processeur et de la RAM', 'Un ruban, une tête, des états et une table de transition', 'Un écran et un clavier', 'Des portes logiques et des registres'],
              correct: 1,
              explanation: 'Une machine de Turing possède quatre composants : un ruban infini, une tête de lecture/écriture, un ensemble fini d\'états et une table de transition.'
            },
            {
              q: 'Qu\'est-ce que la machine universelle de Turing ?',
              opts: ['La machine la plus rapide', 'Une machine capable de simuler toute autre machine de Turing', 'Une machine qui résout le problème de l\'arrêt', 'Une machine quantique'],
              correct: 1,
              explanation: 'La machine universelle U prend la description d\'une machine M et une entrée x, et simule M sur x. C\'est le concept théorique de l\'ordinateur programmable.'
            },
            {
              q: 'La thèse de Church-Turing est :',
              opts: ['Un théorème formellement prouvé', 'Une thèse philosophique sur la notion de calcul', 'Un algorithme', 'Une loi physique'],
              correct: 1,
              explanation: 'La thèse de Church-Turing est une affirmation philosophique : toute fonction « intuitivement calculable » est calculable par une machine de Turing. Elle n\'est pas démontrable car « intuitivement calculable » n\'a pas de définition formelle.'
            }
          ],
          definitions: [
            {
              term: 'Machine de Turing',
              def: 'Modèle abstrait de calcul (Turing, 1936) composé d\'un ruban infini, d\'une tête de lecture/écriture, d\'états et d\'une table de transition.'
            },
            {
              term: 'Machine universelle',
              def: 'Machine de Turing capable de simuler toute autre machine de Turing. Fondement théorique de l\'ordinateur programmable.'
            },
            {
              term: 'Thèse de Church-Turing',
              def: 'Affirmation que toute fonction effectivement calculable est calculable par une machine de Turing. Consensus fondamental de l\'informatique théorique.'
            },
            {
              term: 'Turing-complet',
              def: 'Se dit d\'un système de calcul capable de simuler une machine de Turing. Les langages de programmation modernes sont Turing-complets.'
            },
            {
              term: 'Table de transition',
              def: 'Fonction qui, pour chaque couple (état, symbole lu), détermine le symbole à écrire, le mouvement de la tête et le nouvel état. C\'est le « programme » de la machine.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1936',
              back: 'Alan Turing publie « On Computable Numbers, with an Application to the Entscheidungsproblem ». Il invente la machine de Turing et prouve l\'indécidabilité du problème de l\'arrêt. Il a 24 ans.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Alan Turing est aussi le père de l\'intelligence artificielle (test de Turing, 1950), le décrypteur d\'Enigma pendant la Seconde Guerre mondiale, et un pionnier de la morphogenèse mathématique.'
            },
            {
              front: 'Équivalences de modèles',
              back: 'Machine de Turing = λ-calcul (Church) = fonctions μ-récursives (Kleene) = systèmes de Post = automates cellulaires (rule 110). Tous ces modèles calculent exactement les mêmes fonctions.'
            }
          ]
        },
        {
          slug: 'church',
          title: 'Le λ-calcul de Church',
          description: 'Le lambda-calcul, les fonctions récursives, l\'Entscheidungsproblem et l\'équivalence des modèles de calcul.',
          intro: 'Le λ-calcul (lambda-calcul), inventé par Alonzo Church en 1936, est un formalisme alternatif aux machines de Turing pour définir la notion de calcul. Fondé sur la notion de fonction et d\'application, il est le fondement théorique de la programmation fonctionnelle. Church et Turing ont montré indépendamment que l\'Entscheidungsproblem de Hilbert est insoluble.',
          introHighlight: 'Le λ-calcul réduit tout calcul à trois opérations : définir une fonction, nommer une variable, et appliquer une fonction à un argument. Trois gestes qui suffisent à tout calculer.',
          sections: [
            {
              title: 'Syntaxe et réduction',
              paragraphs: ['Le λ-calcul ne comporte que trois types d\'expressions : les variables (x, y, z), les abstractions (λx.M, qui définissent une fonction prenant x et renvoyant M) et les applications (M N, qui appliquent la fonction M à l\'argument N). Malgré cette extrême simplicité, le λ-calcul est aussi expressif qu\'une machine de Turing.', 'La β-réduction est la règle de calcul fondamentale : (λx.M) N → M[x := N], c\'est-à-dire qu\'on remplace les occurrences de x dans M par N. Par exemple, (λx.x+1) 3 → 3+1 → 4. L\'α-conversion permet de renommer les variables liées, et l\'η-conversion exprime l\'extensionnalité : λx.(f x) = f si x n\'est pas libre dans f.'],
              highlight: 'Le λ-calcul montre que la notion de fonction est suffisante pour fonder le calcul : pas besoin de mémoire, d\'états ou de ruban. Tout est fonction.'
            },
            {
              title: 'L\'Entscheidungsproblem',
              paragraphs: ['L\'Entscheidungsproblem (problème de la décision) est la question posée par Hilbert en 1928 : existe-t-il un algorithme qui, étant donné un énoncé de la logique du premier ordre, détermine en temps fini s\'il est valide ou non ? Church (1936a) et Turing (1936) ont montré indépendamment que la réponse est non.', 'Church a montré que la validité de certaines formules de la logique du premier ordre se réduit à la question de l\'équivalence de termes du λ-calcul, qui est elle-même indécidable. Turing a montré que le problème de l\'arrêt est indécidable, ce qui implique l\'indécidabilité de l\'Entscheidungsproblem. Les deux approches sont équivalentes et définissent la même frontière de la calculabilité.'],
              highlight: 'L\'Entscheidungsproblem de Hilbert — « peut-on décider mécaniquement toute question logique ? » — a reçu une réponse négative : il existe des questions logiques qu\'aucun algorithme ne peut trancher.'
            },
            {
              title: 'Du λ-calcul à la programmation fonctionnelle',
              paragraphs: ['Le λ-calcul est le fondement théorique des langages de programmation fonctionnels. Lisp (McCarthy, 1958) est le premier langage directement inspiré du λ-calcul. Haskell, OCaml, F#, Erlang, Scala et Clojure sont ses descendants modernes. Dans ces langages, les fonctions sont des valeurs de première classe, la récursion remplace les boucles, et les effets de bord sont contrôlés.', 'Le λ-calcul typé est la base de la correspondance de Curry-Howard (types = propositions, programmes = preuves). Le Système F de Girard (1971) et le calcul des constructions de Coquand et Huet (1988) sont des extensions du λ-calcul typé qui fondent les assistants de preuve Coq/Rocq et Lean. Ainsi, le λ-calcul de Church est à l\'origine de deux branches fondamentales de l\'informatique : la programmation fonctionnelle et la vérification formelle.'],
              highlight: 'Le λ-calcul de 1936 est le grand-père de Haskell, OCaml et Lean. Une théorie pure de la calculabilité est devenue la base de langages de programmation puissants et d\'outils de vérification formelle.'
            }
          ],
          quiz: [
            {
              q: 'Quels sont les trois types d\'expressions du λ-calcul ?',
              opts: ['Nombres, opérateurs, fonctions', 'Variables, abstractions, applications', 'Types, termes, preuves', 'Constantes, prédicats, quantificateurs'],
              correct: 1,
              explanation: 'Le λ-calcul se compose de trois types d\'expressions : les variables (x), les abstractions (λx.M, définition de fonction) et les applications (M N, appel de fonction).'
            },
            {
              q: 'Qu\'est-ce que la β-réduction ?',
              opts: ['Un type de preuve', 'L\'application d\'une fonction à un argument : (λx.M) N → M[x:=N]', 'Une simplification de formule logique', 'Un algorithme de tri'],
              correct: 1,
              explanation: 'La β-réduction remplace les occurrences du paramètre x par l\'argument N dans le corps M de la fonction. C\'est le mécanisme de calcul du λ-calcul.'
            },
            {
              q: 'Quel langage de programmation est le premier directement inspiré du λ-calcul ?',
              opts: ['Fortran', 'C', 'Lisp', 'Java'],
              correct: 2,
              explanation: 'Lisp (LISt Processing), créé par John McCarthy en 1958, est le premier langage de programmation directement fondé sur les idées du λ-calcul de Church.'
            }
          ],
          definitions: [
            {
              term: 'λ-calcul',
              def: 'Formalisme de calcul (Church, 1936) fondé sur la notion de fonction. Trois constructions : variable, abstraction (λx.M), application (M N).'
            },
            {
              term: 'β-réduction',
              def: 'Règle de calcul du λ-calcul : (λx.M) N se réduit en M[x := N]. C\'est l\'application d\'une fonction à un argument.'
            },
            {
              term: 'Entscheidungsproblem',
              def: 'Problème de la décision de Hilbert (1928) : existe-t-il un algorithme décidant la validité de toute formule du premier ordre ? Réponse : non (Church, Turing, 1936).'
            },
            {
              term: 'Programmation fonctionnelle',
              def: 'Paradigme de programmation fondé sur le λ-calcul, où les fonctions sont des valeurs et la récursion remplace les boucles. Exemples : Haskell, OCaml, Lisp.'
            },
            {
              term: 'Système F',
              def: 'Extension polymorphe du λ-calcul typé (Girard, 1971 ; Reynolds, 1974). Fondement des systèmes de types des langages fonctionnels modernes.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1936',
              back: 'Alonzo Church publie deux articles décisifs : « An Unsolvable Problem of Elementary Number Theory » (λ-calcul indécidable) et, avec Turing, résout négativement l\'Entscheidungsproblem.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Alonzo Church a été le directeur de thèse d\'Alan Turing à Princeton. Les deux ont résolu le même problème (l\'Entscheidungsproblem) indépendamment, avec des outils très différents (λ-calcul vs machines de Turing).'
            },
            {
              front: 'Encodage de Church',
              back: 'Dans le λ-calcul pur, les entiers n\'existent pas. Church les encode comme fonctions : 0 = λf.λx.x, 1 = λf.λx.f x, 2 = λf.λx.f(f x), n = λf.λx.fⁿ x. Toute l\'arithmétique se reconstruit à partir de fonctions pures.'
            }
          ]
        },
        {
          slug: 'consequences',
          title: 'Conséquences philosophiques',
          description: 'L\'impact de Gödel sur la philosophie des mathématiques, l\'intelligence artificielle et la pensée contemporaine.',
          intro: 'Les théorèmes de Gödel et les résultats d\'indécidabilité de Turing et Church ont eu un impact considérable bien au-delà des mathématiques. Ils ont transformé la philosophie des mathématiques, alimenté le débat sur les limites de l\'intelligence artificielle, et modifié notre compréhension de la nature du raisonnement humain et de la vérité mathématique.',
          introHighlight: 'Les résultats de Gödel, Turing et Church ont dessiné une carte des limites du possible : ce qui est calculable, ce qui est démontrable, et ce qui restera à jamais hors de portée.',
          sections: [
            {
              title: 'Philosophie des mathématiques après Gödel',
              paragraphs: ['Les théorèmes d\'incomplétude ont profondément affecté les trois courants principaux de la philosophie des mathématiques. Le formalisme de Hilbert a été brisé : les mathématiques ne peuvent pas être réduites à un jeu de symboles dont on prouverait la cohérence de l\'intérieur. Le logicisme de Russell a été affaibli : la logique seule ne suffit pas à fonder toutes les mathématiques. L\'intuitionnisme de Brouwer a été renforcé : les limites de la formalisation donnent raison à l\'idée que les mathématiques ne se réduisent pas à la manipulation de symboles.', 'Le réalisme mathématique (platonisme) a gagné en crédibilité grâce à Gödel lui-même, qui était un platoniste convaincu. Si des vérités mathématiques échappent à tout système formel, peut-être existent-elles indépendamment de nos preuves, dans un « monde » mathématique objectif. Le réalisme gödelien affirme que les objets mathématiques existent et que notre intuition mathématique nous donne accès à des vérités que les systèmes formels ne peuvent pas capturer.'],
              highlight: 'Gödel était un platoniste : il croyait que les objets mathématiques existent objectivement et que l\'incomplétude montre que la réalité mathématique dépasse tout formalisme.'
            },
            {
              title: 'Gödel et l\'intelligence artificielle',
              paragraphs: ['Le philosophe John Lucas (1961) et le physicien Roger Penrose (1989, 1994) ont utilisé les théorèmes de Gödel pour argumenter que l\'esprit humain ne peut pas être une machine de Turing. Leur argument : un esprit humain peut « voir » la vérité de la phrase de Gödel G, tandis qu\'aucun système formel ne peut la prouver. Donc l\'esprit dépasse les capacités d\'un système formel, et a fortiori d\'un ordinateur.', 'Cet argument est très controversé. Les critiques (Putnam, Penrose lui-même reconnaît des limites) objectent que l\'esprit humain n\'a pas accès à la vérité de G de manière non ambiguë : nous supposons la cohérence du système, ce qui est précisément ce que le second théorème interdit de prouver. Un système formel aussi pourrait « voir » G si on lui ajoutait l\'axiome de cohérence — mais alors un nouveau G apparaîtrait. Le débat reste ouvert et touche aux limites de ce que nous savons sur la conscience.'],
              highlight: 'L\'argument de Lucas-Penrose — « Gödel prouve que l\'esprit n\'est pas un ordinateur » — est l\'un des arguments les plus débattus de la philosophie de l\'esprit. Il n\'a pas de réponse consensuelle.'
            },
            {
              title: 'Les limites et l\'avenir',
              paragraphs: ['Les résultats de Gödel, Turing et Church délimitent trois frontières fondamentales : la frontière de la démontrabilité (incomplétude : certaines vérités ne sont pas démontrables), la frontière de la calculabilité (indécidabilité : certains problèmes n\'ont pas d\'algorithme), et la frontière de la définissabilité (Tarski : certains concepts ne sont pas formalisables). Ces trois frontières sont les piliers de la logique mathématique du XXe siècle.', 'Ces limites ne signifient pas la fin du progrès. Les théorèmes de Gödel n\'empêchent pas de faire des mathématiques : ils montrent que tout système formel peut être étendu. L\'exploration des axiomes de grands cardinaux, la théorie des types homotopiques (HoTT), et les assistants de preuve comme Lean 4 repoussent les limites dans de nouvelles directions. La logique est plus vivante que jamais, guidée par la conscience lucide de ses propres frontières.'],
              highlight: 'Gödel ne dit pas que les mathématiques sont impossibles. Il dit qu\'elles sont inépuisables : il y aura toujours de nouvelles vérités à découvrir au-delà de tout système formel donné.'
            }
          ],
          quiz: [
            {
              q: 'Quelle philosophie des mathématiques a été renforcée par les théorèmes de Gödel selon lui-même ?',
              opts: ['Le formalisme', 'Le logicisme', 'Le réalisme mathématique (platonisme)', 'Le constructivisme'],
              correct: 2,
              explanation: 'Gödel était un platoniste convaincu. Il estimait que l\'incomplétude montre que les vérités mathématiques existent indépendamment de nos systèmes formels.'
            },
            {
              q: 'Qui a argumenté que les théorèmes de Gödel prouvent que l\'esprit n\'est pas un ordinateur ?',
              opts: ['Alan Turing', 'John Lucas et Roger Penrose', 'Alonzo Church', 'David Hilbert'],
              correct: 1,
              explanation: 'Lucas (1961) et Penrose (1989) ont soutenu que la capacité de l\'esprit à « voir » la vérité de la phrase de Gödel montre qu\'il dépasse les machines de Turing.'
            },
            {
              q: 'Quelles sont les trois frontières fondamentales tracées par Gödel, Turing et Tarski ?',
              opts: ['Espace, temps, matière', 'Démontrabilité, calculabilité, définissabilité', 'Logique, arithmétique, géométrie', 'Syntaxe, sémantique, pragmatique'],
              correct: 1,
              explanation: 'Les trois frontières : incomplétude (démontrabilité), indécidabilité (calculabilité), et indéfinissabilité de la vérité (définissabilité). Ce sont les limites fondamentales du raisonnement formel.'
            }
          ],
          definitions: [
            {
              term: 'Platonisme mathématique',
              def: 'Philosophie selon laquelle les objets mathématiques existent objectivement, indépendamment de l\'esprit humain et des systèmes formels. Position de Gödel.'
            },
            {
              term: 'Argument de Lucas-Penrose',
              def: 'Argument controversé utilisant les théorèmes de Gödel pour soutenir que l\'esprit humain ne peut pas être réduit à une machine de Turing.'
            },
            {
              term: 'Grands cardinaux',
              def: 'Axiomes d\'existence d\'ensembles « très grands » ajoutés à ZFC pour renforcer le système et prouver plus de théorèmes. Hiérarchie croissante de force logique.'
            },
            {
              term: 'Théorie des types homotopiques (HoTT)',
              def: 'Fondation alternative des mathématiques combinant théorie des types et théorie de l\'homotopie. Développée par Voevodsky et collaborateurs à partir de 2006.'
            },
            {
              term: 'Indéfinissabilité de la vérité (Tarski)',
              def: 'Résultat montrant qu\'un langage suffisamment expressif ne peut pas contenir son propre prédicat de vérité. Troisième frontière, avec l\'incomplétude et l\'indécidabilité.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Gödel est devenu citoyen américain en 1948. Lors de l\'entretien, il voulait expliquer au juge qu\'il avait trouvé une faille logique dans la Constitution permettant l\'instauration d\'une dictature. Einstein, qui l\'accompagnait, l\'en a dissuadé.'
            },
            {
              front: 'Les trois limites',
              back: 'Gödel : il existe des vérités indémontrables. Turing : il existe des problèmes incalculables. Tarski : il existe des concepts indéfinissables. Trois facettes de la même réalité : le formel ne capture pas tout.'
            },
            {
              front: 'Citation finale',
              back: 'Freeman Dyson : « Gödel a prouvé que les mathématiques sont inépuisables. Quelle que soit la longueur de la chaîne de nos raisonnements, il y aura toujours de nouvelles vérités au-delà. »'
            }
          ]
        }
      ]
    },
  ]
};
