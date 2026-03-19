#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrich gestion.json articles with substantive encyclopedic content."""

import json
import re

INPUT = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/gestion.json"

# ---------------------------------------------------------------------------
# New content for each article (section id="contenu" inner div.course-content)
# ---------------------------------------------------------------------------

CONTENTS = {}

# ============================================================
# finances/investissement
# ============================================================
CONTENTS["finances/investissement"] = """<h3>Qu'est-ce qu'investir ?</h3>
<p class="resume-text">Investir, c'est affecter une ressource — de l'argent, du temps, de l'énergie — dans l'espoir d'en tirer un bénéfice futur. En finance personnelle, investir désigne principalement le placement d'une somme d'argent dans des actifs susceptibles de produire des revenus ou de prendre de la valeur au fil du temps. C'est l'outil fondamental de la construction de patrimoine sur le long terme.</p>
<div class="highlight-box"><p><strong>Principe clé :</strong> L'investissement se distingue de l'épargne par le fait qu'il accepte une part de risque en échange d'une espérance de rendement supérieure au taux d'intérêt sans risque. Toute décision d'investissement implique un arbitrage rendement / risque / liquidité.</p></div>

<h3>Les grandes classes d'actifs</h3>
<p>Les placements financiers se regroupent en quelques grandes familles, chacune avec ses caractéristiques propres :</p>
<ul>
  <li><strong>Actions (actions cotées en bourse)</strong> : titre de propriété partielle d'une entreprise. Le détenteur participe aux bénéfices via les dividendes et aux fluctuations de valeur de l'entreprise. Rendement historique moyen sur le long terme (20 ans+) : environ 7-10 % par an pour les marchés développés.</li>
  <li><strong>Obligations</strong> : titre de dette. L'investisseur prête de l'argent à un État ou une entreprise en échange d'intérêts réguliers (coupons) et du remboursement du capital à l'échéance. Plus stable que les actions, mais rendement généralement plus faible.</li>
  <li><strong>Immobilier</strong> : acquisition de biens physiques (appartements, maisons, locaux commerciaux) pour en tirer des loyers ou une plus-value à la revente. Accessible via l'emprunt bancaire (effet de levier). En France, les SCPI (Sociétés Civiles de Placement Immobilier) permettent d'investir collectivement dans l'immobilier locatif.</li>
  <li><strong>Monétaire / liquidités</strong> : livrets bancaires, fonds euros, comptes à terme. Sécurisés mais rendement proche du taux d'inflation ; utiles pour l'épargne de précaution.</li>
  <li><strong>Matières premières et actifs alternatifs</strong> : or, pétrole, crypto-actifs, œuvres d'art. Souvent plus volatils et moins liquides ; rôle de diversification.</li>
</ul>
<div class="highlight-box"><p><strong>Triangle rendement / risque / liquidité :</strong> Un actif ne peut pas être à la fois très rentable, totalement sans risque et immédiatement disponible. L'immobilier peut être rentable et peu risqué à long terme, mais est peu liquide. Les actions sont liquides et potentiellement rentables, mais volatiles à court terme.</p></div>

<h3>Les principaux concepts de l'investissement boursier</h3>
<p>Pour aborder les marchés financiers sereinement, plusieurs notions sont incontournables :</p>
<ul>
  <li><strong>Diversification</strong> : ne pas mettre tous ses œufs dans le même panier. En répartissant ses placements entre plusieurs actifs, secteurs ou zones géographiques, on réduit le risque sans nécessairement diminuer le rendement espéré — c'est le principe central de la théorie moderne du portefeuille de Harry Markowitz (Nobel 1990).</li>
  <li><strong>Intérêts composés</strong> : les gains générés s'ajoutent au capital et produisent eux-mêmes des gains. Albert Einstein aurait appelé cela «&nbsp;la huitième merveille du monde&nbsp;». Un capital de 10 000 € qui croît à 7 % par an double en 10 ans (règle des 72 : 72 ÷ taux = nombre d'années pour doubler).</li>
  <li><strong>Horizon de placement</strong> : la durée pendant laquelle on prévoit de laisser son capital investi. Plus l'horizon est long, plus on peut prendre de risques et lisser la volatilité de court terme. L'investissement en actions est déconseillé sur moins de 5 ans.</li>
  <li><strong>Volatilité</strong> : mesure de l'amplitude des variations d'un actif. Une volatilité élevée implique des hauts et des bas importants. Elle n'est pas synonyme de perte permanente si l'on conserve ses positions.</li>
  <li><strong>Liquidité</strong> : facilité à convertir un actif en cash rapidement et sans perte de valeur significative. Les actions cotées sont très liquides ; un bien immobilier, beaucoup moins.</li>
</ul>

<h3>Les enveloppes fiscales en France</h3>
<p>Le cadre fiscal est déterminant dans la performance nette d'un investissement. En France, plusieurs enveloppes permettent de différer ou d'exonérer l'impôt sur les gains :</p>
<ul>
  <li><strong>PEA (Plan d'Épargne en Actions)</strong> : plafond 150 000 €. Après 5 ans de détention, les gains sont exonérés d'impôt sur le revenu (seuls les prélèvements sociaux de 17,2 % s'appliquent). Idéal pour investir en actions européennes.</li>
  <li><strong>Assurance-vie</strong> : enveloppe polyvalente permettant d'investir en fonds euros (garanti) et en unités de compte (UC, risquées). Après 8 ans, abattement annuel de 4 600 € (9 200 € en couple) sur les gains lors des rachats. Avantages successoraux importants.</li>
  <li><strong>PER (Plan d'Épargne Retraite)</strong> : versements déductibles du revenu imposable. L'argent est bloqué jusqu'à la retraite (sauf cas exceptionnels). Sortie en rente ou en capital.</li>
  <li><strong>CTO (Compte-Titres Ordinaire)</strong> : pas de plafond ni d'avantage fiscal spécifique, mais flexibilité totale. Gains soumis à la flat tax de 30 %.</li>
</ul>
<div class="highlight-box"><p><strong>Ordre de priorité courant :</strong> Livret A (épargne de précaution) → PEA (actions à long terme, défiscalisé) → Assurance-vie (diversification, succession) → PER (retraite, si tranche marginale d'imposition élevée) → CTO (au-delà des plafonds).</p></div>

<h3>Les fonds indiciels (ETF) : l'investissement passif</h3>
<p>Un ETF (<em>Exchange-Traded Fund</em>, ou fonds négocié en bourse) est un fonds qui réplique la performance d'un indice boursier (CAC 40, S&P 500, MSCI World…). Ses caractéristiques :</p>
<ul>
  <li><strong>Faibles frais</strong> : les frais de gestion annuels d'un ETF indiciel se situent entre 0,05 % et 0,30 %, contre 1,5-2 % pour un fonds géré activement.</li>
  <li><strong>Diversification immédiate</strong> : un seul ETF MSCI World donne accès à plus de 1 500 entreprises dans 23 pays développés.</li>
  <li><strong>Performance</strong> : sur le long terme, la majorité des fonds actifs ne battent pas leur indice de référence. L'investissement passif en ETF est soutenu par des décennies de recherche académique.</li>
</ul>
<p>La stratégie DCA (<em>Dollar-Cost Averaging</em>, ou investissement programmé) consiste à investir une somme fixe régulièrement (mensuel par exemple), indépendamment des niveaux de marché. Cela permet de lisser le prix d'achat moyen et d'éviter d'essayer de «&nbsp;timer&nbsp;» le marché — exercice que même les professionnels échouent à faire systématiquement.</p>

<h3>Psychologie de l'investisseur et biais cognitifs</h3>
<p>La finance comportementale, développée par Daniel Kahneman et Amos Tversky, montre que les investisseurs ne sont pas rationnels. Plusieurs biais nuisent à la performance :</p>
<ul>
  <li><strong>Aversion aux pertes</strong> : une perte de 100 € est psychologiquement deux fois plus douloureuse qu'un gain de 100 € est satisfaisant. Cela pousse à vendre lors des baisses et à conserver des titres perdants.</li>
  <li><strong>Biais de récence</strong> : extrapoler les tendances récentes vers le futur. Acheter après une forte hausse et vendre après une forte baisse.</li>
  <li><strong>Excès de confiance</strong> : croire que l'on est capable de sélectionner les meilleurs titres ou de prévoir les marchés.</li>
  <li><strong>Comportement moutonnier</strong> : suivre la foule, acheter quand tout le monde achète (bulles) et vendre quand tout le monde vend (krachs).</li>
</ul>
<div class="highlight-box"><p><strong>Règle d'or :</strong> «&nbsp;Soyez avide quand les autres sont craintifs, et craintif quand les autres sont avides.&nbsp;» — Warren Buffett. L'investisseur discipliné qui maintient son plan d'investissement régulier à travers les cycles de marché surpasse statistiquement celui qui tente de réagir aux actualités.</p></div>

<h3>Construire son premier portefeuille</h3>
<p>Pour un investisseur débutant, une approche simple et éprouvée consiste à :</p>
<ol>
  <li>Constituer d'abord une épargne de précaution (3 à 6 mois de dépenses) sur un livret sécurisé.</li>
  <li>Définir son horizon de placement et sa tolérance au risque (profil prudent / équilibré / dynamique).</li>
  <li>Ouvrir un PEA et y investir progressivement (DCA mensuel) dans un ETF monde à faibles frais.</li>
  <li>Compléter éventuellement avec une assurance-vie pour la diversification et la préparation successorale.</li>
  <li>Ne pas consulter son portefeuille quotidiennement et rester investi en cas de baisse.</li>
</ol>
<p>L'investissement est un marathon, pas un sprint. La régularité, la patience et le contrôle des coûts (frais, impôts) sont les trois leviers principaux d'une stratégie patrimoniale réussie.</p>"""

# ============================================================
# organisation/numerique
# ============================================================
CONTENTS["organisation/numerique"] = """<h3>Pourquoi l'organisation numérique est-elle cruciale ?</h3>
<p class="resume-text">Un adulte actif reçoit en moyenne plusieurs centaines d'emails par semaine, stocke des milliers de fichiers sur différents appareils et jongle avec de nombreuses applications. Sans système d'organisation numérique, cette surcharge informationnelle engendre stress, perte de temps et erreurs. Structurer sa vie numérique est devenu une compétence fondamentale du XXIe siècle.</p>
<div class="highlight-box"><p><strong>Principe central :</strong> Un bon système numérique doit être <em>simple à maintenir</em>, <em>fiable</em> (rien ne se perd) et <em>rapide à interroger</em> (on retrouve n'importe quelle information en moins de 30 secondes). La complexité est l'ennemie de la durabilité.</p></div>

<h3>Organisation des fichiers</h3>
<p>La structuration du système de fichiers est la fondation de l'organisation numérique. Plusieurs principes directeurs :</p>
<ul>
  <li><strong>Hiérarchie plate plutôt que profonde</strong> : éviter les arborescences de 8 niveaux que l'on ne retrouve plus. Une structure à 3-4 niveaux maximum est généralement suffisante.</li>
  <li><strong>Nommage cohérent</strong> : adopter une convention de nommage et s'y tenir. Exemple : <code>AAAA-MM-JJ_sujet_version.extension</code>. Les dates en début de nom permettent un tri chronologique naturel.</li>
  <li><strong>Un seul endroit par type de document</strong> : ne jamais avoir deux dossiers «&nbsp;Factures&nbsp;» à des emplacements différents. Le principe DRY (<em>Don't Repeat Yourself</em>) s'applique aussi à l'organisation.</li>
  <li><strong>Séparation actif / archive</strong> : distinguer les fichiers en cours de travail des archives. Le dossier de travail actif doit rester léger (moins de 50 fichiers). Archiver régulièrement par année ou par projet terminé.</li>
</ul>
<div class="highlight-box"><p><strong>Méthode PARA (Tiago Forte) :</strong> Classer tous ses fichiers en quatre catégories — <strong>P</strong>rojets (avec une échéance active), <strong>A</strong>reas (domaines de vie en cours : santé, finances, formation), <strong>R</strong>essources (référence thématique), <strong>A</strong>rchives (tout le reste). Cette méthode s'applique à la fois aux dossiers, aux notes et aux favoris.</p></div>

<h3>Gestion des emails</h3>
<p>L'email est souvent la principale source de désorganisation numérique. Deux approches opposées coexistent :</p>
<ul>
  <li><strong>Inbox Zero</strong> (Merlin Mann) : traiter chaque email à sa réception selon la règle des 4D — <em>Delete</em> (supprimer), <em>Do</em> (faire si moins de 2 min), <em>Defer</em> (reporter avec un rappel), <em>Delegate</em> (déléguer). La boîte de réception devient une liste de traitements en attente, jamais un stockage.</li>
  <li><strong>Inbox comme archive</strong> : utiliser un moteur de recherche puissant et ne jamais classer manuellement. La recherche est plus rapide que le classement dans les outils modernes.</li>
</ul>
<p>Quelle que soit la méthode, quelques règles universelles s'imposent : se désabonner des newsletters non lues depuis plus d'un mois, utiliser des filtres automatiques pour pré-trier les emails récurrents, et éviter de garder des emails «&nbsp;pour info&nbsp;» sans action associée.</p>

<h3>Le cloud et la synchronisation</h3>
<p>Les services de stockage cloud (Google Drive, OneDrive, iCloud, Dropbox) ont transformé l'organisation numérique en permettant l'accès aux fichiers depuis n'importe quel appareil. Bonnes pratiques :</p>
<ul>
  <li><strong>Stratégie 3-2-1</strong> : conserver 3 copies de ses données importantes, sur 2 supports différents, dont 1 hors site (cloud). Cette règle protège contre la panne matérielle, le vol et les sinistres.</li>
  <li><strong>Un seul cloud principal</strong> : éviter de disperser ses fichiers sur 4 services cloud différents. Choisir un service principal et s'y tenir ; utiliser les autres pour des usages spécifiques (partage collaboratif, photos, etc.).</li>
  <li><strong>Synchronisation vs sauvegarde</strong> : la synchronisation cloud n'est pas une sauvegarde — si un fichier est supprimé par erreur, il disparaît du cloud aussi. Utiliser un service dédié à la sauvegarde incrémentielle (Time Machine, Backblaze).</li>
</ul>

<h3>Prise de notes numérique</h3>
<p>Les applications de notes sont devenues des extensions de la mémoire. Les grandes catégories d'outils :</p>
<ul>
  <li><strong>Notes rapides et capture</strong> : Notion, Apple Notes, Google Keep. Idéales pour capturer rapidement une idée, un lien ou une tâche.</li>
  <li><strong>Notes structurées</strong> : Notion, Obsidian, Roam Research. Pour les notes de fond, les projets, la base de connaissances personnelle (PKM).</li>
  <li><strong>Notes liées</strong> : Obsidian, Logseq. Permettent de créer des liens entre les notes (graphe de connaissances), inspirés de la méthode Zettelkasten.</li>
</ul>
<div class="highlight-box"><p><strong>Principe de capture unique :</strong> Choisir un seul «&nbsp;inbox&nbsp;» pour toutes les captures (une seule app de notes, un seul carnet). L'information entre par un seul point d'entrée, puis est traitée et classée périodiquement. Disperser sa prise de notes sur 5 outils différents est contre-productif.</p></div>

<h3>Gestion des mots de passe et sécurité numérique</h3>
<p>Un aspect souvent négligé de l'organisation numérique est la gestion des accès. Quelques règles fondamentales :</p>
<ul>
  <li><strong>Gestionnaire de mots de passe</strong> (Bitwarden, 1Password, KeePass) : permet d'utiliser un mot de passe unique et complexe pour chaque service sans avoir à les mémoriser. C'est la mesure de sécurité individuelle la plus efficace.</li>
  <li><strong>Authentification à deux facteurs (2FA)</strong> : à activer sur tous les comptes importants (email, banque, cloud). Ajoute une couche de protection même si le mot de passe est compromis.</li>
  <li><strong>Hygiène des comptes</strong> : supprimer régulièrement les comptes inutilisés (service <em>Have I Been Pwned</em> pour vérifier les fuites de données), révoquer les accès tiers non utilisés.</li>
</ul>

<h3>Maintenance et rituels numériques</h3>
<p>Un système numérique ne se maintient pas seul. Des rituels réguliers sont nécessaires :</p>
<ul>
  <li><strong>Revue hebdomadaire</strong> : vider la boîte de réception (email et notes), traiter les téléchargements, mettre à jour les listes de tâches.</li>
  <li><strong>Revue mensuelle</strong> : archiver les projets terminés, nettoyer les fichiers temporaires, vérifier les sauvegardes.</li>
  <li><strong>Désencombrement numérique annuel</strong> : supprimer les applications inutilisées, purger les photos en double, réorganiser les archives.</li>
</ul>
<p>L'organisation numérique est un investissement en temps qui se rembourse rapidement. Selon des études sur la productivité, les travailleurs passent en moyenne 20 % de leur temps de travail à rechercher des informations. Un système numérique robuste peut réduire ce chiffre de moitié.</p>"""

# ============================================================
# organisation/planification
# ============================================================
CONTENTS["organisation/planification"] = """<h3>Planifier : pourquoi et comment ?</h3>
<p class="resume-text">La planification est l'art d'anticiper pour mieux agir. Sans plan, on réagit aux urgences et aux sollicitations extérieures en permanence — c'est ce que David Allen appelle «&nbsp;travailler en mode firewall&nbsp;». Planifier, c'est reprendre le contrôle de son temps et de son énergie pour les allouer à ce qui compte vraiment.</p>
<div class="highlight-box"><p><strong>Paradoxe de la planification :</strong> Consacrer du temps à planifier fait gagner du temps. Une heure de planification peut économiser 4 heures d'exécution désordonnée. L'efficacité ne vient pas de travailler plus vite, mais de travailler sur les bonnes choses dans le bon ordre.</p></div>

<h3>L'agenda comme outil central</h3>
<p>L'agenda est le principal outil de planification. Son utilisation efficace repose sur plusieurs principes :</p>
<ul>
  <li><strong>Un seul agenda</strong> : regrouper vie professionnelle et personnelle dans un seul système pour avoir une vue complète de son temps disponible. Deux agendas séparés créent des conflits invisibles.</li>
  <li><strong>Bloquer du temps pour les tâches</strong> (time blocking) : ne pas seulement noter des rendez-vous, mais aussi bloquer des créneaux pour les tâches importantes. Un créneau bloqué est moins susceptible d'être envahi par des urgences.</li>
  <li><strong>Planifier les déplacements et transitions</strong> : prévoir du temps de buffer entre deux réunions ou deux activités. Un agenda sans marges est un agenda qui déraille à la première imprévue.</li>
  <li><strong>Révision de l'agenda</strong> : consulter son agenda le soir pour le lendemain et le lundi matin pour la semaine. Cette anticipation permet d'arriver préparé et de prendre des décisions proactives.</li>
</ul>

<h3>La planification hebdomadaire</h3>
<p>La semaine est l'unité de planification la plus productive — assez longue pour accomplir des projets significatifs, assez courte pour rester adaptable. La revue hebdomadaire, popularisée par David Allen dans son livre <em>Getting Things Done</em>, se déroule en plusieurs étapes :</p>
<ol>
  <li><strong>Vider les inboxes</strong> : traiter tous les emails, notes éparses, messages non lus et papiers accumulés.</li>
  <li><strong>Réviser ses listes</strong> : relire sa liste de tâches, projets en cours, objectifs à moyen terme.</li>
  <li><strong>Planifier la semaine</strong> : identifier 3 priorités pour la semaine, bloquer les créneaux dans l'agenda, anticiper les obligations fixes.</li>
  <li><strong>Bilan de la semaine écoulée</strong> : qu'est-ce qui a bien fonctionné ? Qu'est-ce qui a été bloqué ? Comment l'améliorer ?</li>
</ol>
<div class="highlight-box"><p><strong>Big Three hebdomadaires :</strong> Avant de planifier quoi que ce soit, identifier les 3 choses qui rendraient la semaine réussie si elles étaient accomplies. Ces «&nbsp;3 grandes&nbsp;» ont la priorité absolue sur tout le reste.</p></div>

<h3>Planification à long terme : objectifs et horizons</h3>
<p>La planification opérationnelle (semaine, mois) doit s'inscrire dans une vision à plus long terme. David Allen identifie 6 horizons de planification :</p>
<ul>
  <li><strong>Actions actuelles</strong> : prochaine action physique concrète</li>
  <li><strong>Projets</strong> : résultats à atteindre en moins d'un an</li>
  <li><strong>Domaines de responsabilité</strong> : rôles que l'on assure (parent, professionnel, citoyen)</li>
  <li><strong>Objectifs à 1-2 ans</strong> : cap à moyen terme</li>
  <li><strong>Vision à 3-5 ans</strong> : direction de vie</li>
  <li><strong>Vie entière / mission</strong> : valeurs fondamentales et raison d'être</li>
</ul>
<p>La planification n'a de sens que si les actions quotidiennes sont alignées avec les niveaux supérieurs. Une tâche urgente qui ne contribue à aucun objectif important mérite d'être questionnée.</p>

<h3>Routines du matin et du soir</h3>
<p>Les routines de transition (début et fin de journée) sont des moments de planification micro qui cadrent la journée :</p>
<ul>
  <li><strong>Routine du matin</strong> : consulter l'agenda, identifier la tâche la plus importante de la journée (MIT — <em>Most Important Task</em>), préparer l'espace de travail. Durée idéale : 15-30 minutes avant de commencer à traiter des emails ou messages.</li>
  <li><strong>Routine du soir</strong> : noter ce qui a été accompli, déplacer les tâches non terminées, préparer le lendemain (agenda, liste MIT), faire le «&nbsp;shutdown ritual&nbsp;» (Cal Newport) pour déconnecter mentalement du travail.</li>
</ul>
<div class="highlight-box"><p><strong>Règle du «&nbsp;tomorrow list&nbsp;» :</strong> Avant de fermer son ordinateur le soir, noter les 1-3 tâches prioritaires du lendemain. Le cerveau prépare inconsciemment la résolution de ces problèmes pendant la nuit. Le matin, on démarre directement sans perdre de temps à décider quoi faire.</p></div>

<h3>La planification flexible : résilience face aux imprévus</h3>
<p>Un bon plan n'est pas rigide — il intègre les imprévus. Quelques stratégies :</p>
<ul>
  <li><strong>Sous-planifier intentionnellement</strong> : ne remplir que 60-70 % de sa capacité journalière. Les 30-40 % restants absorbent les urgences, les débordements et permettent de traiter les opportunités.</li>
  <li><strong>Temps tampon</strong> : systématiquement prévoir 25 % de temps supplémentaire pour chaque tâche (loi de Hofstadter : les choses prennent toujours plus de temps qu'on ne le pense, même en tenant compte de ce fait).</li>
  <li><strong>Plans B et C</strong> : pour les rendez-vous et projets importants, anticiper les principales façons dont ça pourrait mal tourner et préparer une réponse.</li>
</ul>

<h3>Outils de planification</h3>
<p>Les outils ne font pas le système — c'est l'inverse. Un carnet papier utilisé avec discipline est plus efficace qu'une application complexe abandonnée après une semaine. Cela dit, quelques outils se distinguent :</p>
<ul>
  <li><strong>Papier</strong> : carnet, bullet journal, bloc A5. Favorise la réflexion et la mémorisation. Idéal pour la planification hebdomadaire.</li>
  <li><strong>Agenda numérique</strong> : Google Calendar, Outlook. Synchronisation multi-appareils, rappels automatiques, partage avec d'autres.</li>
  <li><strong>Gestionnaire de tâches</strong> : Todoist, Things, TickTick. Pour les listes de tâches avec dates d'échéance et projets.</li>
</ul>
<p>Le critère de choix principal : l'outil que l'on consultera vraiment chaque jour est le meilleur, indépendamment de ses fonctionnalités.</p>"""

# ============================================================
# organisation/projets
# ============================================================
CONTENTS["organisation/projets"] = """<h3>Qu'est-ce qu'un projet personnel ?</h3>
<p class="resume-text">Un projet est un ensemble d'actions coordonnées visant un résultat défini, dans un délai déterminé. Dans la vie personnelle, un projet peut être une déménagement, la rédaction d'un roman, l'organisation d'un voyage ou la rénovation d'un appartement. La gestion de projet, longtemps réservée au monde professionnel, est aujourd'hui appliquée à la vie personnelle pour gagner en clarté et en efficacité.</p>
<div class="highlight-box"><p><strong>Définition d'un projet (David Allen) :</strong> Tout résultat souhaité nécessitant plus d'une action physique est un projet. Cette définition large est utile : elle oblige à prendre conscience du nombre de projets ouverts (souvent plus de 20 pour un adulte actif) et à leur associer une prochaine action concrète.</p></div>

<h3>Le tableau Kanban</h3>
<p>Le Kanban est une méthode visuelle de gestion du flux de travail, originellement développée par Toyota dans les années 1950 pour optimiser la production industrielle, puis adaptée au travail intellectuel par David Anderson dans les années 2000. Le principe est simple :</p>
<ul>
  <li>Un tableau divisé en colonnes représentant les étapes du flux (typiquement : <strong>À faire</strong> | <strong>En cours</strong> | <strong>Terminé</strong>).</li>
  <li>Chaque tâche est représentée par une carte qui avance de gauche à droite.</li>
  <li>La règle fondamentale : limiter le nombre de tâches <em>En cours</em> (WIP limit — <em>Work In Progress</em>). Une limite de 3 tâches en cours simultanément est courante. Cela force à terminer avant de commencer.</li>
</ul>
<p>Pour les projets personnels, des outils comme Trello, Notion ou même un tableau physique avec des post-its permettent d'implémenter un Kanban facilement.</p>
<div class="highlight-box"><p><strong>Loi de Little :</strong> Le temps moyen pour terminer une tâche est proportionnel au nombre de tâches en cours. Moins on a de tâches en parallèle, plus on va vite. Le multitâche est l'ennemi de l'efficacité.</p></div>

<h3>Le diagramme de Gantt</h3>
<p>Le diagramme de Gantt, inventé par Henry Gantt en 1917, est une représentation graphique du calendrier d'un projet. Il montre :</p>
<ul>
  <li>Les tâches sur l'axe vertical</li>
  <li>Le temps sur l'axe horizontal</li>
  <li>La durée de chaque tâche représentée par une barre horizontale</li>
  <li>Les dépendances entre tâches (tâche B ne peut commencer qu'une fois tâche A terminée)</li>
</ul>
<p>Adapté aux projets avec des échéances fermes et des séquences de tâches complexes. Moins utile pour les projets créatifs ou exploratoires. Des outils simples comme GanttProject (gratuit) ou les templates Notion permettent de créer des Gantt personnels.</p>

<h3>Les jalons et le découpage en phases</h3>
<p>Un jalon (<em>milestone</em>) est un point de contrôle dans un projet — un résultat intermédiaire tangible qui marque la fin d'une phase. Le découpage en jalons présente plusieurs avantages :</p>
<ul>
  <li><strong>Motivation</strong> : chaque jalon atteint est une victoire. Le cerveau libère de la dopamine à l'accomplissement d'étapes intermédiaires, ce qui maintient l'élan sur un projet long.</li>
  <li><strong>Visibilité</strong> : les jalons permettent d'évaluer l'avancement objectivement, sans se perdre dans les détails.</li>
  <li><strong>Révision</strong> : chaque jalon est une occasion naturelle de réévaluer le plan et de s'adapter si nécessaire.</li>
</ul>
<div class="highlight-box"><p><strong>Technique de backward planning :</strong> Partir de la date d'échéance finale et remonter dans le temps pour identifier les jalons et les actions nécessaires. Cette approche «&nbsp;de la fin vers le début&nbsp;» révèle souvent que le projet est sous-estimé en durée.</p></div>

<h3>La méthode SMART pour définir les objectifs de projet</h3>
<p>Pour qu'un projet soit gérable, son objectif doit être clairement défini. La méthode SMART est un cadre classique :</p>
<ul>
  <li><strong>S</strong>pécifique : l'objectif est précis et sans ambiguïté</li>
  <li><strong>M</strong>esurable : on peut évaluer objectivement si l'objectif est atteint</li>
  <li><strong>A</strong>tteignable : réaliste compte tenu des ressources disponibles</li>
  <li><strong>R</strong>elevant : pertinent par rapport aux priorités globales</li>
  <li><strong>T</strong>emporel : délimité dans le temps avec une date d'échéance</li>
</ul>
<p>Exemple : «&nbsp;Apprendre l'espagnol&nbsp;» n'est pas un objectif SMART. «&nbsp;Atteindre le niveau B1 en espagnol (certification DELE) avant le 31 décembre, en étudiant 30 minutes par jour&nbsp;» l'est.</p>

<h3>Piloter et adapter son projet</h3>
<p>Un projet est rarement exécuté exactement comme planifié — et c'est normal. La gestion de projet agile, née dans le développement logiciel avec le Manifeste Agile (2001), propose une approche itérative : planifier en courtes périodes (sprints de 1-2 semaines), livrer régulièrement des résultats, et adapter le plan à chaque cycle selon les retours et les découvertes.</p>
<p>Pour les projets personnels, cela se traduit par des revues hebdomadaires du projet : où en suis-je ? Qu'est-ce qui a bloqué ? La prochaine étape est-elle encore la bonne ?</p>
<div class="highlight-box"><p><strong>Post-mortem personnel :</strong> À la fin d'un projet (réussi ou non), prendre 30 minutes pour faire le bilan : qu'est-ce qui a bien fonctionné ? Qu'est-ce que j'aurais fait différemment ? Quelles leçons retenir pour le prochain projet ? Ce rituel transforme chaque projet en apprentissage.</p></div>

<h3>Gestion des ressources et des contraintes</h3>
<p>Tout projet est contraint par le triangle <strong>temps — budget — périmètre</strong> (aussi appelé «&nbsp;triangle de la gestion de projet&nbsp;» ou «&nbsp;triple contrainte&nbsp;»). Si l'on veut aller plus vite, il faut soit réduire le périmètre, soit augmenter les ressources. On ne peut pas avoir les trois à la fois. Reconnaître cette contrainte fondamentale aide à prendre des décisions éclairées lorsqu'un projet dérape.</p>"""

# ============================================================
# organisation/rangement
# ============================================================
CONTENTS["organisation/rangement"] = """<h3>Le désencombrement comme point de départ</h3>
<p class="resume-text">Avant d'organiser, il faut désencombrer. C'est le principe fondateur de toutes les grandes méthodes de rangement modernes. Ranger des choses dont on n'a pas besoin, c'est alourdir son système et perdre du temps à entretenir ce que l'on possède. Le désencombrement est une démarche à la fois pratique et psychologique.</p>
<div class="highlight-box"><p><strong>Insight clé :</strong> L'encombrement n'est pas seulement un problème physique — il occupe aussi de l'espace mental. Chaque objet inutile dans notre environnement consomme une micro-dose d'attention. Un espace épuré favorise la clarté mentale, la concentration et la créativité.</p></div>

<h3>La méthode KonMari</h3>
<p>Marie Kondo, auteure japonaise de <em>La Magie du rangement</em> (2011, traduit en plus de 40 langues), a popularisé une méthode de désencombrement radicale qui a transformé des millions de foyers dans le monde :</p>
<ul>
  <li><strong>Trier par catégorie, pas par pièce</strong> : regrouper tous les objets d'une même catégorie en un seul endroit avant de décider. Commencer par les vêtements, puis les livres, les papiers, les objets divers (komono), enfin les souvenirs.</li>
  <li><strong>Critère unique de décision</strong> : «&nbsp;Est-ce que cet objet suscite de la joie ?&nbsp;» (<em>Does it spark joy?</em>). Si non, le remercier et s'en séparer. Ce critère, bien que subjectif, est plus décisif que des règles arbitraires («&nbsp;je ne l'ai pas utilisé depuis 6 mois&nbsp;»).</li>
  <li><strong>Ranger verticalement</strong> : plier les vêtements pour les ranger debout dans les tiroirs, de façon à voir tout d'un coup d'œil. Cette technique réduit le froissement et révèle l'excédent.</li>
  <li><strong>Faire une fois, maintenir naturellement</strong> : le tri KonMari est censé être fait une seule fois de façon approfondie. Une fois que l'on n'a que des objets qui «&nbsp;suscitent de la joie&nbsp;», le rangement devient naturel car on sait exactement où chaque chose doit retourner.</li>
</ul>

<h3>Le minimalisme</h3>
<p>Le minimalisme est une philosophie de vie qui consiste à posséder moins pour vivre plus. Il ne s'agit pas de posséder le moins possible, mais de ne posséder que ce qui est intentionnel — ce qui apporte de la valeur, de la fonctionnalité ou de la joie. Quelques principes :</p>
<ul>
  <li><strong>Règle du un pour un</strong> : chaque fois qu'un nouvel objet entre dans la maison, un autre en sort. Cela maintient un équilibre et force à évaluer chaque achat.</li>
  <li><strong>Délai de réflexion</strong> : avant tout achat non essentiel, attendre 48h-30 jours (selon la valeur). La majorité des envies disparaissent d'elles-mêmes.</li>
  <li><strong>Test de la boîte</strong> : emballer les objets dont on n'est pas sûr et les stocker inaccessibles pendant 30 jours. Tout ce qu'on n'a pas réclamé est superflu.</li>
</ul>
<div class="highlight-box"><p><strong>Coût total de possession :</strong> Chaque objet a un coût au-delà de son prix d'achat — espace de stockage, temps d'entretien, attention mentale. Un canapé «&nbsp;gratuit&nbsp;» récupéré sur un trottoir peut coûter des mois de gêne s'il ne correspond pas à son espace.</p></div>

<h3>Organiser l'espace de vie</h3>
<p>Une fois le désencombrement effectué, l'organisation peut commencer. Quelques principes d'organisation spatiale :</p>
<ul>
  <li><strong>Zones fonctionnelles</strong> : chaque zone de l'espace a une fonction principale. La table du salon est pour manger et travailler, pas pour stocker du courrier. Respecter cette séparation maintient l'ordre naturellement.</li>
  <li><strong>Accessibilité proportionnelle à la fréquence d'utilisation</strong> : les objets utilisés quotidiennement sont à portée de main (zone 1 : comptoir, tiroir du haut). Les objets hebdomadaires à hauteur des yeux (zone 2). Les objets rares en hauteur ou en profondeur (zone 3).</li>
  <li><strong>Un foyer pour chaque chose</strong> : chaque objet a un emplacement fixe et y retourne après utilisation. Sans ce principe, le rangement ne se maintient pas.</li>
  <li><strong>Visibilité</strong> : préférer les rangements ouverts et visibles aux rangements fermés et empilés. Ce qu'on ne voit pas, on l'oublie — et on rachète en double.</li>
</ul>

<h3>Le rangement du bureau et de l'espace de travail</h3>
<p>L'espace de travail mérite une attention particulière, car le désordre visible réduit mesurement la concentration. Études à l'appui : un bureau encombré augmente le niveau de cortisol (hormone du stress) et réduit la capacité à se concentrer sur une tâche unique.</p>
<ul>
  <li><strong>Bureau zéro</strong> : ne rien poser sur le bureau sauf ce qui est utilisé pour la tâche en cours. Tout le reste va dans des tiroirs, des étagères ou des boîtes étiquetées.</li>
  <li><strong>Système de classement papier</strong> : trier le courrier et les documents papier dès leur arrivée. Trois bacs : À traiter, À classer, À recycler. Ne jamais laisser un document sur le bureau sans décision associée.</li>
  <li><strong>Câbles et électronique</strong> : utiliser des range-câbles, des étiquettes, des multiprises avec interrupteurs. Le désordre de câbles est une source fréquente de friction et de perte de temps.</li>
</ul>

<h3>Maintenir le rangement dans la durée</h3>
<p>Le rangement n'est pas un état que l'on atteint une fois pour toutes — c'est un système que l'on maintient. Deux habitudes cruciales :</p>
<ul>
  <li><strong>La règle des deux minutes</strong> : si ranger quelque chose prend moins de deux minutes, le faire immédiatement. Ne pas poser un objet «&nbsp;temporairement&nbsp;» quelque part — le chaos naît de ces dépôts provisoires qui deviennent permanents.</li>
  <li><strong>Réinitialisation quotidienne</strong> : prendre 10-15 minutes chaque soir pour remettre l'espace dans son état de base. Cela évite l'accumulation et permet de commencer chaque journée dans un environnement propice.</li>
</ul>
<div class="highlight-box"><p><strong>Environnement par défaut :</strong> Définir à quoi ressemble votre espace «&nbsp;au repos&nbsp;» (bureau dégagé, vaisselle rangée, sacs préparés). Cet état par défaut est celui vers lequel on ramène l'espace régulièrement. Il doit être atteignable en 15 minutes maximum.</p></div>"""

# ============================================================
# organisation/routines
# ============================================================
CONTENTS["organisation/routines"] = """<h3>Pourquoi les routines sont-elles si puissantes ?</h3>
<p class="resume-text">Une routine est une séquence d'actions répétées régulièrement jusqu'à ce qu'elles deviennent automatiques. Le cerveau humain est câblé pour former des habitudes : une fois une routine établie, son exécution consomme peu d'énergie cognitive, libérant de la bande passante mentale pour des tâches plus complexes. C'est le fondement neurologique de l'efficacité personnelle.</p>
<div class="highlight-box"><p><strong>La boucle de l'habitude (Charles Duhigg) :</strong> Toute habitude repose sur trois éléments — le <strong>déclencheur</strong> (signal qui active la routine), la <strong>routine</strong> (comportement automatique) et la <strong>récompense</strong> (satisfaction qui renforce la boucle). Pour créer ou modifier une habitude, il faut agir sur ces trois composantes.</p></div>

<h3>La neurologie des habitudes</h3>
<p>Les recherches en neurosciences ont montré que les habitudes sont stockées dans les ganglions de la base — une région cérébrale ancienne, distincte du cortex préfrontal qui gère la réflexion consciente. Ce «&nbsp;pilote automatique&nbsp;» explique pourquoi :</p>
<ul>
  <li>Les habitudes persistent même lors de stress intense ou de surcharge cognitive.</li>
  <li>Il est très difficile de supprimer une habitude — on peut seulement la remplacer par une autre.</li>
  <li>Une habitude nouvellement établie nécessite en moyenne 66 jours pour s'automatiser (étude de Phillippa Lally, University College London, 2010), et non 21 jours comme la croyance populaire le suggère.</li>
</ul>

<h3>Créer de nouvelles habitudes : la méthode des petits pas</h3>
<p>BJ Fogg, chercheur à Stanford et auteur de <em>Tiny Habits</em> (2019), a montré que les nouvelles habitudes s'établissent mieux lorsqu'elles sont <em>minuscules</em> et <em>ancrées</em> sur des comportements existants :</p>
<ul>
  <li><strong>Minuscules</strong> : commencer par une version si petite que l'échec est quasi impossible. Vouloir méditer 30 minutes dès le premier jour garantit l'abandon. Commencer par une respiration consciente suffit pour établir le déclencheur.</li>
  <li><strong>Ancrage (habit stacking)</strong> : lier la nouvelle habitude à un comportement déjà automatique. «&nbsp;Après avoir versé mon café du matin, je lirai 5 pages.&nbsp;» Le comportement existant sert de déclencheur fiable.</li>
  <li><strong>Célébration immédiate</strong> : s'auto-féliciter <em>immédiatement</em> après la réalisation, même pour quelque chose de minuscule. Cette récompense instantanée accélère l'automatisation neurale.</li>
</ul>
<div class="highlight-box"><p><strong>Formule de Fogg :</strong> Motivation + Capacité + Déclencheur = Comportement. Si un comportement n'est pas déclenché, il n'a aucune chance de se produire, quelle que soit la motivation. Concevoir les déclencheurs est la clé.</p></div>

<h3>Les routines du matin</h3>
<p>La routine matinale est celle qui a le plus d'impact sur le reste de la journée. Elle «&nbsp;donne le ton&nbsp;» et conditionne l'état mental pour les heures qui suivent. Les éléments courants dans les routines matinales des personnes hautement efficaces :</p>
<ul>
  <li><strong>Mouvement physique</strong> : marche, sport, étirements. L'exercice matinal augmente les neurotransmetteurs (dopamine, sérotonine, noradrénaline) qui favorisent la concentration et la bonne humeur.</li>
  <li><strong>Silence et réflexion</strong> : méditation, journaling, lecture calme. Ce temps de transition entre le sommeil et l'action permet d'entrer dans la journée intentionnellement plutôt que réactivement.</li>
  <li><strong>Planification</strong> : identifier les 1-3 priorités de la journée avant de consulter emails ou réseaux sociaux.</li>
  <li><strong>Pas d'écran les 30 premières minutes</strong> : l'exposition aux notifications dès le réveil active le mode réactif et perturbe la concentration pour des heures.</li>
</ul>

<h3>Les routines du soir</h3>
<p>La routine du soir conditionne la qualité du sommeil, qui conditionne elle-même l'efficacité du lendemain. Elle est souvent négligée au profit de la routine matinale :</p>
<ul>
  <li><strong>Fermeture du travail</strong> (shutdown ritual, Cal Newport) : noter les tâches non terminées, préparer la liste du lendemain, puis prononcer une formule rituelle («&nbsp;Shutdown complet&nbsp;») signalant au cerveau que le travail est fini. Ce rituel réduit la rumination nocturne.</li>
  <li><strong>Déconnexion numérique</strong> : éteindre les écrans 1h avant le coucher. La lumière bleue des écrans inhibe la mélatonine et retarde l'endormissement.</li>
  <li><strong>Activités apaisantes</strong> : lecture papier, bain chaud, étirements légers. Le corps a besoin d'une descente progressive vers le sommeil.</li>
  <li><strong>Heure de coucher fixe</strong> : le sommeil est le levier de performance le plus sous-estimé. Matthew Walker (<em>Why We Sleep</em>) montre qu'une nuit courte réduit les performances cognitives de façon similaire à plusieurs jours sans sommeil.</li>
</ul>

<h3>Automatiser ses systèmes</h3>
<p>Au-delà des habitudes comportementales, l'automatisation technologique peut éliminer des tâches répétitives :</p>
<ul>
  <li><strong>Virements automatiques</strong> : programmer l'épargne et les investissements en virement automatique le jour de paie. On n'épargne pas ce qui reste — on dépense ce qui reste après avoir épargné.</li>
  <li><strong>Templates et modèles</strong> : créer des templates pour les emails récurrents, les documents types, les réponses fréquentes. Chaque tâche récurrente doit être standardisée.</li>
  <li><strong>Automatisation IFTTT/Zapier</strong> : des outils no-code permettent de connecter des applications entre elles pour automatiser des flux d'information (sauvegarder automatiquement les pièces jointes importantes dans Drive, archiver certains emails, etc.).</li>
</ul>
<div class="highlight-box"><p><strong>Principe de l'automatisation :</strong> Si une tâche est répétitive, prévisible et ne nécessite pas de jugement, elle peut être automatisée ou standardisée. L'objectif est de réserver son énergie mentale aux décisions qui en valent vraiment la peine.</p></div>

<h3>Maintenir ses systèmes dans la durée</h3>
<p>Les routines et systèmes se dégradent avec le temps. Des rituels de maintenance sont nécessaires :</p>
<ul>
  <li><strong>Revue hebdomadaire</strong> : évaluer ce qui a bien fonctionné et ce qui a été déraillé. Ajuster, pas abandonner.</li>
  <li><strong>Revue mensuelle</strong> : vérifier si les routines sont encore alignées avec les objectifs actuels. Les habitudes utiles en période de projet intensif ne sont pas forcément les mêmes qu'en période calme.</li>
  <li><strong>Tolérance aux ruptures</strong> : manquer un jour ne brise pas une habitude. Ce qui la brise, c'est de manquer deux jours consécutifs. Après une rupture, reprendre immédiatement sans culpabilité.</li>
</ul>"""

# ============================================================
# productivite/concentration
# ============================================================
CONTENTS["productivite/concentration"] = """<h3>La concentration, ressource rare du XXIe siècle</h3>
<p class="resume-text">La capacité à se concentrer profondément et longuement sur une tâche est devenue l'une des compétences les plus précieuses et les plus rares dans notre économie de l'attention. La prolifération des notifications, des réseaux sociaux et des open spaces a fragmenté l'attention de façon sans précédent. Pourtant, c'est précisément dans la concentration soutenue que se produisent les apprentissages, les créations et les décisions de qualité.</p>
<div class="highlight-box"><p><strong>Deep Work (Cal Newport) :</strong> Le «&nbsp;travail profond&nbsp;» désigne l'activité professionnelle dans un état de concentration sans distraction, qui pousse les capacités cognitives à leur limite. Ce type de travail crée de la valeur, améliore les compétences et est difficile à répliquer. Le <em>shallow work</em> (travail superficiel), à l'inverse, est logistique, fragmenté et peu exigeant intellectuellement.</p></div>

<h3>Neuroscience de l'attention</h3>
<p>L'attention est une ressource cognitive limitée et restaurable, pas infinie. Quelques faits issus des neurosciences :</p>
<ul>
  <li><strong>Durée d'attention soutenue</strong> : le cerveau humain peut maintenir une concentration intense pendant environ 90 minutes avant d'avoir besoin d'une pause (rythme ultradien). Au-delà, les performances déclinent et les erreurs augmentent.</li>
  <li><strong>Coût du changement de tâche</strong> (<em>task switching cost</em>) : passer d'une tâche à une autre prend du temps de «&nbsp;rechargement&nbsp;». Des études estiment ce coût à 15-23 minutes pour retrouver une concentration profonde après une interruption. Un email ouvert «&nbsp;juste pour voir&nbsp;» peut coûter 20 minutes de concentration.</li>
  <li><strong>Charge cognitive</strong> : les distractions (notifications visibles, conversations de fond) consomment de la bande passante mentale même si on ne les traite pas consciemment. La simple présence d'un téléphone sur un bureau réduit les performances cognitives (Ward et al., 2017).</li>
</ul>

<h3>Le flow state</h3>
<p>Mihaly Csikszentmihalyi, psychologue hongrois, a défini le concept de <em>flow</em> dans les années 1990 après avoir étudié des milliers d'individus dans leurs activités. Le flow est un état de concentration totale dans lequel :</p>
<ul>
  <li>On perd la notion du temps</li>
  <li>La tâche semble «&nbsp;se faire toute seule&nbsp;»</li>
  <li>On ressent une satisfaction intrinsèque profonde</li>
  <li>La performance atteint son niveau maximal</li>
</ul>
<p>Le flow survient lorsque le niveau de défi de la tâche correspond exactement au niveau de compétence. Si la tâche est trop facile : ennui. Trop difficile : anxiété. Au point d'équilibre : flow. Pour entrer en flow, trois conditions sont nécessaires : des objectifs clairs, un retour d'information immédiat, et l'absence de distractions.</p>
<div class="highlight-box"><p><strong>Provoquer le flow :</strong> Décomposer les grandes tâches en sous-objectifs clairs, travailler dans un environnement sans interruption pendant au moins 90 minutes, et commencer par une tâche légèrement en dehors de sa zone de confort. L'environnement et les conditions physiques (bruit, lumière, température) ont un impact mesurable.</p></div>

<h3>La technique Pomodoro améliorée</h3>
<p>La technique Pomodoro (Francesco Cirillo, fin des années 1980) consiste à travailler en blocs de 25 minutes suivis d'une pause de 5 minutes. Après 4 blocs, une pause longue de 15-30 minutes. Ses avantages :</p>
<ul>
  <li>Rend les longues tâches moins intimidantes (démarrer 25 minutes, c'est accessible)</li>
  <li>Crée une contrainte artificielle qui augmente la concentration (deadline effect)</li>
  <li>Permet de mesurer objectivement le temps passé sur chaque activité</li>
</ul>
<p>Pour aller plus loin, certains experts de la productivité recommandent des blocs plus longs (90 minutes) une fois la concentration profonde développée, en phase avec les rythmes ultradiens du cerveau.</p>

<h3>Éliminer les distractions</h3>
<p>La gestion des distractions est une compétence active, pas passive. Stratégies efficaces :</p>
<ul>
  <li><strong>Bloquer les sites distrayants</strong> : applications comme Cold Turkey ou Freedom bloquent les réseaux sociaux et sites de divertissement pendant les sessions de travail.</li>
  <li><strong>Téléphone en mode avion ou dans une autre pièce</strong> : la distance physique est plus efficace que la simple volonté.</li>
  <li><strong>Casque ou bruit blanc</strong> : le bruit de fond de bureau perturbe la concentration. Un casque anti-bruit (signal «&nbsp;ne pas déranger&nbsp;») ou du bruit blanc (masque les sons irréguliers) améliorent la concentration.</li>
  <li><strong>Vérifier emails et messages à des heures fixes</strong> (ex. 9h, 12h, 17h) plutôt qu'en continu. Communiquer ces plages à son entourage professionnel.</li>
  <li><strong>Bureau épuré</strong> : un environnement visuel chargé sollicite l'attention de façon involontaire. Travailler face à un mur ou dans un espace dégagé.</li>
</ul>

<h3>Construire sa capacité de concentration</h3>
<p>Comme un muscle, la concentration se renforce par l'entraînement. Pratiques qui augmentent l'attention soutenue :</p>
<ul>
  <li><strong>Méditation de pleine conscience</strong> : même 10 minutes par jour de méditation de pleine conscience (focalisation sur la respiration avec retour de l'attention à chaque distraction) développe le contrôle attentionnel. Des méta-analyses montrent des effets mesurables après 8 semaines de pratique.</li>
  <li><strong>Lecture de longs textes</strong> : lire un livre papier de façon soutenue entraîne l'attention linéaire, mise à mal par la navigation en ligne fragmentée.</li>
  <li><strong>Éviter le contenu addictif</strong> : les réseaux sociaux et les vidéos courtes conditionnent le cerveau à s'ennuyer avec des stimulations de plus de 15 secondes. Réduire leur consommation restaure progressivement la tolérance à l'ennui — précondition du deep work.</li>
</ul>
<div class="highlight-box"><p><strong>Tolérance à l'ennui :</strong> Cal Newport souligne que la capacité au deep work se développe en dehors des sessions de travail. Si l'on remplit chaque moment creux (file d'attente, transport) avec le téléphone, on entraîne son cerveau à l'impatience. Laisser son esprit vagabonder dans l'ennui quotidien reconstruit la capacité d'attention soutenue.</p></div>

<h3>L'environnement de travail optimal</h3>
<p>L'environnement physique et temporel a un impact documenté sur la qualité de la concentration :</p>
<ul>
  <li><strong>Température</strong> : 20-22°C est la plage optimale pour la performance cognitive. Le froid léger augmente la vigilance ; la chaleur l'inhibe.</li>
  <li><strong>Lumière naturelle</strong> : travailler face à une fenêtre améliore l'humeur et la vigilance, et synchronise les rythmes circadiens.</li>
  <li><strong>Plantes</strong> : la présence de plantes dans l'espace de travail réduit le stress et augmente légèrement la productivité (études de Roger Ulrich).</li>
  <li><strong>Rituel de démarrage</strong> : associer un comportement systématique (cafè, musique précise, allumer une bougie) au début d'une session de deep work crée un déclencheur conditionné qui facilite l'entrée en concentration.</li>
</ul>"""

# ============================================================
# productivite/methodes
# ============================================================
CONTENTS["productivite/methodes"] = """<h3>Pourquoi les méthodes d'organisation existent-elles ?</h3>
<p class="resume-text">Sans système d'organisation explicite, le cerveau tente de tout retenir en mémoire de travail, créant une charge mentale permanente. Les méthodes d'organisation sont des systèmes externalisés qui captent, trient et structurent l'information et les tâches pour libérer l'esprit de ce fardeau. Elles transforment l'implicite (tout ce qui «&nbsp;traîne dans la tête&nbsp;») en explicite (listes, notes, structures visibles).</p>
<div class="highlight-box"><p><strong>L'esprit comme une eau claire :</strong> David Allen décrit l'idéal d'un système d'organisation comme un esprit «&nbsp;comme une eau claire&nbsp;» — un état où rien ne stagne dans la tête parce que tout est capturé et géré par un système de confiance externe.</p></div>

<h3>Getting Things Done (GTD)</h3>
<p>GTD, créé par David Allen et décrit dans <em>Getting Things Done: The Art of Stress-Free Productivity</em> (2001), est la méthode d'organisation la plus influente des 25 dernières années. Ses cinq étapes :</p>
<ol>
  <li><strong>Capturer</strong> : tout collecter dans des «&nbsp;inboxes&nbsp;» de confiance (carnet, application, boîte email). Rien ne doit rester «&nbsp;dans la tête&nbsp;».</li>
  <li><strong>Clarifier</strong> : traiter chaque item. Est-ce actionnable ? Si non : poubelle, référence ou incubateur. Si oui : quelle est la prochaine action physique concrète ?</li>
  <li><strong>Organiser</strong> : classer les actions par contexte (@ bureau, @ téléphone, @ maison), par projet, par date d'échéance.</li>
  <li><strong>Réviser</strong> : revue hebdomadaire pour maintenir la confiance dans le système.</li>
  <li><strong>Engager</strong> : choisir la bonne action au bon moment selon le contexte, l'énergie disponible et la priorité.</li>
</ol>
<p>La clé du GTD est la règle des 2 minutes : si une action prend moins de 2 minutes, la faire immédiatement plutôt que de la noter.</p>

<h3>Zettelkasten : la boîte à fiches numérique</h3>
<p>Le Zettelkasten (de l'allemand «&nbsp;boîte à fiches&nbsp;») est une méthode de prise de notes développée par le sociologue Niklas Luhmann, qui l'utilisa pour produire plus de 70 livres et 400 articles académiques. Ses principes :</p>
<ul>
  <li><strong>Notes atomiques</strong> : chaque note contient une seule idée, formulée dans ses propres mots (pas de copier-coller).</li>
  <li><strong>Notes liées</strong> : chaque note est connectée à d'autres par des liens explicites. Le réseau de liens crée des «&nbsp;trains de pensée&nbsp;» qui font émerger des idées nouvelles par association.</li>
  <li><strong>Identifiant unique</strong> : chaque note a un identifiant (numéro ou date) permettant de s'y référer depuis d'autres notes.</li>
  <li><strong>Permanence</strong> : les notes ne sont pas effacées mais continuellement enrichies et reliées.</li>
</ul>
<div class="highlight-box"><p><strong>Thinking tool :</strong> Le Zettelkasten n'est pas un archivage passif — c'est un partenaire de réflexion. Luhmann écrivait : «&nbsp;Je ne pense pas seul, je pense avec ma boîte à fiches.&nbsp;» Des outils modernes comme Obsidian, Roam Research ou Logseq implémentent cette approche numériquement.</p></div>

<h3>Le Bullet Journal</h3>
<p>Le Bullet Journal (<em>BuJo</em>) est un système de prise de notes analogique créé par Ryder Carroll en 2013, devenu un phénomène mondial avec plus de 10 millions de praticiens. Sa structure :</p>
<ul>
  <li><strong>Index</strong> : table des matières mise à jour en temps réel.</li>
  <li><strong>Log futur</strong> : calendrier à 6 mois pour les événements et tâches à venir.</li>
  <li><strong>Log mensuel</strong> : vue mensuelle avec tâches et événements.</li>
  <li><strong>Log quotidien (Daily log)</strong> : journée courante avec tâches (•), événements (○), notes (—) et statuts (x = fait, > = migré, < = planifié).</li>
  <li><strong>Collections</strong> : listes thématiques (livres à lire, projets, recettes) créées à la demande.</li>
</ul>
<p>La migration mensuelle force à réévaluer chaque tâche non faite : la migrer (elle est toujours pertinente), la planifier dans le futur ou l'abandonner. Ce processus d'élagage régulier évite l'accumulation de tâches zombies.</p>

<h3>La méthode Personal Knowledge Management (PKM)</h3>
<p>Le PKM (gestion des connaissances personnelles) désigne l'ensemble des pratiques pour capturer, organiser, distiller et exprimer les connaissances acquises. Tiago Forte a popularisé une approche en 4 étapes (CODE) :</p>
<ul>
  <li><strong>Capture</strong> : sauvegarder ce qui résonne — passages de livres, idées, citations, liens.</li>
  <li><strong>Organise</strong> : classer selon la méthode PARA (Projets, Areas, Ressources, Archives).</li>
  <li><strong>Distill</strong> : condenser progressivement les notes (highlighting, résumés, «&nbsp;baby Zettelkasten&nbsp;»).</li>
  <li><strong>Express</strong> : transformer les notes en production — articles, présentations, projets. Pas de PKM sans output.</li>
</ul>

<h3>Choisir et adapter sa méthode</h3>
<p>Il n'existe pas de méthode universelle — la meilleure est celle que l'on maintient vraiment. Quelques principes pour choisir :</p>
<ul>
  <li><strong>Commencer simple</strong> : une liste de tâches dans un carnet vaut mieux qu'un système Notion hyper-élaboré abandonné après une semaine.</li>
  <li><strong>Adapter à son profil</strong> : les personnes visuelles bénéficient des systèmes avec des tableaux Kanban ; les personnes analytiques apprécient le GTD ; les personnes créatives aiment le Zettelkasten.</li>
  <li><strong>Un seul système central</strong> : hybrider trop de méthodes crée de la confusion. Choisir une méthode principale et lui emprunter des éléments d'autres.</li>
  <li><strong>Réviser son système</strong> : un système efficace il y a 2 ans peut ne plus l'être aujourd'hui. Réévaluer régulièrement ce qui fonctionne.</li>
</ul>
<div class="highlight-box"><p><strong>Éviter le «&nbsp;productivity porn&nbsp;» :</strong> Il est tentant de passer des heures à optimiser son système d'organisation (regarder des tutoriels Notion, tester de nouvelles apps) sans jamais produire. Le système est un moyen, pas une fin. Limiter le temps consacré à l'organisation à 10-15 % du temps de travail.</p></div>"""

# ============================================================
# productivite/outils
# ============================================================
CONTENTS["productivite/outils"] = """<h3>Les outils numériques au service de la productivité</h3>
<p class="resume-text">Les applications de productivité ont proliféré de façon spectaculaire dans les années 2010. En 2024, il existe des centaines d'outils pour gérer les tâches, prendre des notes, collaborer et automatiser. Cette abondance est paradoxale : trop d'outils fragmentent l'attention et créent de la friction. Choisir judicieusement ses outils est en soi une compétence de productivité.</p>
<div class="highlight-box"><p><strong>Règle de l'outil minimal :</strong> Utiliser l'outil le plus simple qui permette d'accomplir la tâche. La complexité d'un outil est un coût caché — temps d'apprentissage, maintenance, mises à jour, risque de panne. Un outil simple mal maîtrisé est plus efficace qu'un outil puissant sous-utilisé.</p></div>

<h3>Applications de gestion de tâches</h3>
<p>Les gestionnaires de tâches numériques remplacent ou complètent les listes papier. Grandes catégories :</p>
<ul>
  <li><strong>Todoist</strong> : l'un des plus populaires, multi-plateformes. Permet la création de projets, sous-tâches, étiquettes, priorités et dates d'échéance. Intégration avec de nombreux autres outils. Version gratuite généreuse.</li>
  <li><strong>Things 3</strong> (Apple uniquement) : interface épurée et fluide, pensée pour l'écosystème Apple. Implémentation GTD robuste avec sections Aujourd'hui / Ce soir / À venir.</li>
  <li><strong>TickTick</strong> : combine gestionnaire de tâches et pomodoro intégré. Multi-plateformes, bon rapport fonctionnalités / simplicité.</li>
  <li><strong>Notion</strong> : outil tout-en-un (notes, tâches, bases de données, wikis). Très flexible mais nécessite une configuration initiale. Peut devenir un système d'organisation complet.</li>
  <li><strong>Microsoft To Do / Apple Rappels</strong> : solutions intégrées aux écosystèmes respectifs, suffisantes pour des besoins simples.</li>
</ul>
<p>Le critère de choix le plus important : l'outil que l'on consultera vraiment chaque matin est le meilleur, indépendamment de ses fonctionnalités.</p>

<h3>Applications de prise de notes</h3>
<p>La prise de notes numérique a connu une révolution avec l'apparition d'outils permettant le lien entre notes :</p>
<ul>
  <li><strong>Obsidian</strong> : application de notes basée sur des fichiers Markdown locaux. Moteur de liens bidirectionnels et graphe de connaissances. Données stockées localement (aucune dépendance cloud). Idéal pour le Zettelkasten et le PKM.</li>
  <li><strong>Notion</strong> : espace de travail tout-en-un. Notes, bases de données, tableaux Kanban, wikis collaboratifs. Très flexible, courbe d'apprentissage modérée. Cloud uniquement.</li>
  <li><strong>Logseq</strong> : similaire à Obsidian avec une approche outliner (listes hiérarchiques). Open source et stockage local.</li>
  <li><strong>Apple Notes / Google Keep</strong> : solutions simples, intégrées, parfaites pour la capture rapide d'idées.</li>
  <li><strong>Readwise / Reader</strong> : aggrège les surlignages de livres (Kindle), articles et PDFs en un seul endroit, avec révision espacée des notes.</li>
</ul>

<h3>Outils de gestion de projets</h3>
<p>Pour les projets plus complexes impliquant plusieurs tâches ou plusieurs personnes :</p>
<ul>
  <li><strong>Trello</strong> : interface Kanban (colonnes glisser-déposer). Simple, visuel, gratuit pour l'usage basique. Idéal pour visualiser l'avancement d'un projet.</li>
  <li><strong>Asana / Linear</strong> : gestion de projet avec assignation de tâches, dépendances, jalons. Plutôt orientés équipes professionnelles.</li>
  <li><strong>Notion</strong> (encore) : sa flexibilité permet de créer des bases de données de projets sur mesure, avec des vues tableau, calendrier, Kanban.</li>
</ul>

<h3>Automatisation : IFTTT et Zapier</h3>
<p>L'automatisation no-code permet d'éliminer les tâches répétitives en connectant des applications entre elles :</p>
<ul>
  <li><strong>IFTTT (If This Then That)</strong> : crée des automatisations simples entre applications grand public. Exemple : «&nbsp;Si un email avec la pièce jointe contenant "facture" arrive, sauvegarder dans Google Drive.&nbsp;»</li>
  <li><strong>Zapier</strong> : plus puissant et pro. Permet des flux multi-étapes entre des centaines d'applications. Exemple : «&nbsp;Lorsqu'un formulaire Typeform est soumis → créer une tâche Todoist → envoyer un email de confirmation.&nbsp;»</li>
  <li><strong>Make (ex-Integromat)</strong> : alternatif à Zapier, avec une interface visuelle de flux de données. Très puissant pour des automatisations complexes.</li>
</ul>
<div class="highlight-box"><p><strong>ROI de l'automatisation :</strong> Avant d'automatiser, estimer : combien de temps cette tâche prend-elle par semaine ? Combien de temps faudra-t-il pour créer l'automatisation ? Si l'automatisation s'amortit en moins d'un mois, elle vaut généralement l'investissement.</p></div>

<h3>Outils de focus et de concentration</h3>
<p>Des applications sont spécifiquement conçues pour favoriser la concentration :</p>
<ul>
  <li><strong>Forest / Focus Plant</strong> : app Pomodoro gamifiée. Un arbre virtuel pousse pendant la session de concentration et meurt si l'on quitte l'application. Utilise la gamification pour réduire l'envie de consulter son téléphone.</li>
  <li><strong>Freedom / Cold Turkey</strong> : bloqueurs de sites et applications distracteurs. Permettent de programmer des sessions de blocage à l'avance, même avec un mode «&nbsp;locked&nbsp;» qui empêche de désactiver le blocage.</li>
  <li><strong>Brain.fm / Endel</strong> : musique générée par IA optimisée pour la concentration. Basé sur des principes de neuroscience (battements binauraux, rythmes spécifiques).</li>
</ul>

<h3>Intégrer ses outils en un système cohérent</h3>
<p>Le risque d'utiliser de nombreux outils est la fragmentation : des informations éparpillées partout, sans lieu unique de référence. Pour éviter cela :</p>
<ul>
  <li><strong>Désigner un «&nbsp;hub central&nbsp;» :</strong> un outil principal où tout converge (souvent Notion ou Obsidian). Les autres outils alimentent ce hub ou en dépendent.</li>
  <li><strong>Capturer partout, traiter en un endroit</strong> : utiliser des apps rapides (Drafts, Bear) pour capturer, puis traiter et organiser dans le hub central.</li>
  <li><strong>Réduire régulièrement</strong> : une fois par trimestre, évaluer quels outils sont réellement utilisés. Supprimer ce qui est abandonné. Moins d'outils, mais mieux maîtrisés.</li>
</ul>"""

# ============================================================
# productivite/priorisation
# ============================================================
CONTENTS["productivite/priorisation"] = """<h3>L'art de distinguer l'important de l'urgent</h3>
<p class="resume-text">La priorisation est la compétence qui consiste à décider, parmi toutes les choses qu'on pourrait faire, ce qu'on va faire <em>maintenant</em>. Sans priorisation, on réagit aux sollicitations extérieures — ce qui est criant et urgent — au détriment de ce qui est réellement important. C'est la distinction fondamentale que Dwight Eisenhower avait clairement exprimée : «&nbsp;Ce qui est important est rarement urgent, et ce qui est urgent est rarement important.&nbsp;»</p>
<div class="highlight-box"><p><strong>Le coût de l'absence de priorités :</strong> Une liste de tâches sans hiérarchie est une liste de conflits potentiels. Toutes les tâches ne se valent pas. Traiter 10 tâches de faible valeur n'équivaut pas à traiter 1 tâche à fort impact. Prioriser, c'est maximiser son impact avec un temps et une énergie limités.</p></div>

<h3>La matrice d'Eisenhower</h3>
<p>La matrice d'Eisenhower (ou matrice urgence / importance) est un outil classique de priorisation, popularisée par Stephen Covey dans <em>Les 7 habitudes de ceux qui réalisent tout ce qu'ils entreprennent</em>. Elle classe les tâches en 4 quadrants :</p>
<ul>
  <li><strong>Quadrant 1 — Urgent ET Important</strong> : crises, urgences, deadlines immédiates. À traiter <em>immédiatement</em>. Exemples : panne informatique avant une présentation, soins médicaux urgents.</li>
  <li><strong>Quadrant 2 — Important, PAS urgent</strong> : planification, développement de compétences, relations, santé préventive, projets stratégiques. À <em>planifier</em>. C'est le quadrant de l'efficacité à long terme — les personnes très efficaces y consacrent la majorité de leur temps.</li>
  <li><strong>Quadrant 3 — Urgent, PAS important</strong> : interruptions, certains emails, certaines réunions. À <em>déléguer</em> si possible, ou traiter rapidement. Ce quadrant est le piège : l'urgence donne l'illusion de l'importance.</li>
  <li><strong>Quadrant 4 — NI urgent NI important</strong> : distractions, activités consummatrices de temps sans valeur. À <em>éliminer</em>. Réseaux sociaux chronophages, TV de fond, tâches administratives inutiles.</li>
</ul>
<div class="highlight-box"><p><strong>Le piège du Q1 :</strong> Les personnes qui passent leur temps dans le Q1 (crises permanentes) s'y retrouvent souvent parce qu'elles ont négligé le Q2. Prévenir est toujours moins coûteux que guérir. Investir du temps dans le Q2 réduit mécaniquement le Q1.</p></div>

<h3>La méthode ABCDE</h3>
<p>Brian Tracy, dans <em>Avalez le crapaud</em>, propose une méthode simple de priorisation quotidienne :</p>
<ul>
  <li><strong>A</strong> — Doit être fait aujourd'hui. Conséquences sérieuses si non fait. Maximum 2-3 tâches A par jour.</li>
  <li><strong>B</strong> — Devrait être fait. Conséquences mineures si repoussé. À ne faire qu'après les A.</li>
  <li><strong>C</strong> — Agréable à faire. Aucune conséquence si non fait. Activités plaisantes sans valeur ajoutée majeure.</li>
  <li><strong>D</strong> — Déléguer. Quelqu'un d'autre peut le faire mieux, plus vite ou pour moins cher.</li>
  <li><strong>E</strong> — Éliminer. Cette tâche ne mérite pas d'exister. La supprimer.</li>
</ul>
<p>Le «&nbsp;crapaud&nbsp;» chez Tracy, c'est la tâche A la plus difficile et la plus importante de la journée. La règle : commencer chaque journée par le crapaud. Une fois accomplie, tout le reste semble facile.</p>

<h3>La règle 80/20 (loi de Pareto)</h3>
<p>Vilfredo Pareto, économiste italien, observa en 1906 que 80 % des richesses italiennes appartenaient à 20 % de la population. Ce principe 80/20 se retrouve partout :</p>
<ul>
  <li>20 % des clients génèrent 80 % du chiffre d'affaires</li>
  <li>20 % des fonctionnalités d'un logiciel sont utilisées 80 % du temps</li>
  <li>20 % des tâches produisent 80 % des résultats</li>
</ul>
<p>Appliqué à la productivité personnelle : identifier les 20 % de ses activités qui produisent 80 % de sa valeur ajoutée, et concentrer son énergie sur celles-ci. Pour le reste : déléguer, automatiser, simplifier ou éliminer.</p>

<h3>Priorisation par valeur et effort</h3>
<p>La matrice valeur / effort (ou impact / effort) permet de choisir par où commencer un backlog de tâches ou de projets :</p>
<ul>
  <li><strong>Forte valeur + faible effort</strong> (Quick wins) : à faire en premier. Résultats rapides, énergie économisée.</li>
  <li><strong>Forte valeur + fort effort</strong> (Gros chantiers) : à planifier et bloquer du temps. Incontournables mais exigeants.</li>
  <li><strong>Faible valeur + faible effort</strong> (Remplissage) : à faire en dernier, si temps disponible.</li>
  <li><strong>Faible valeur + fort effort</strong> (Pièges) : à éviter ou abandonner. Consomment beaucoup pour peu de résultat.</li>
</ul>

<h3>Dire non : la priorisation ultime</h3>
<p>Prioriser implique inévitablement de ne pas faire certaines choses — et donc de refuser des demandes. Le «&nbsp;non&nbsp;» est un outil de productivité puissant. Quelques stratégies :</p>
<ul>
  <li><strong>Non par défaut pour les nouvelles sollicitations</strong> : avant d'accepter une nouvelle responsabilité, se demander si l'on serait enthousiaste de la faire demain. Si la réponse n'est pas «&nbsp;Oui !&nbsp;» enthousiaste, c'est non.</li>
  <li><strong>Greg McKeown (<em>Essentialism</em>)</strong> : «&nbsp;Si ce n'est pas un oui clair, c'est un non.&nbsp;» Accepter trop de choses médiocrement est pire que refuser et faire quelques choses excellemment.</li>
  <li><strong>Formulation constructive</strong> : «&nbsp;Je ne peux pas prendre ça en charge en ce moment&nbsp;» est plus honnête et respectueux que d'accepter sans tenir ses engagements.</li>
</ul>
<div class="highlight-box"><p><strong>Coût d'opportunité :</strong> Chaque «&nbsp;oui&nbsp;» est implicitement un «&nbsp;non&nbsp;» à autre chose. En acceptant une réunion de 2h, on refuse 2h de travail profond sur son projet prioritaire. Rendre ce coût d'opportunité explicite aide à prendre des décisions de priorisation plus conscientes.</p></div>"""

# ============================================================
# productivite/temps
# ============================================================
CONTENTS["productivite/temps"] = """<h3>Le temps comme ressource non renouvelable</h3>
<p class="resume-text">Contrairement à l'argent, au talent ou à l'énergie, le temps ne peut pas être regagné, stocké ou délégué. Chaque heure perdue l'est définitivement. La gestion du temps n'est pas une question d'efficacité bureaucratique — c'est une question de choix de vie. Décider comment on passe son temps, c'est décider quelle vie on mène.</p>
<div class="highlight-box"><p><strong>Illusion du temps :</strong> Peter Drucker, père du management moderne, observait que la plupart des gens ne savent pas comment ils passent vraiment leur temps. Ils croient travailler sur ce qui est important, mais en réalité, les interruptions, les réunions non essentielles et le travail administratif occupent la majorité de leur journée. Tenir un journal de temps pendant une semaine est souvent révélateur.</p></div>

<h3>La technique Pomodoro</h3>
<p>Développée par Francesco Cirillo à la fin des années 1980 (le minuteur en forme de tomate — <em>pomodoro</em> en italien), cette technique structure le travail en intervalles chronométrés :</p>
<ol>
  <li>Choisir une tâche unique sur laquelle se concentrer.</li>
  <li>Régler le minuteur sur 25 minutes.</li>
  <li>Travailler sans interruption jusqu'à la sonnerie.</li>
  <li>Faire une pause de 5 minutes (marcher, s'étirer, se déconnecter).</li>
  <li>Après 4 pomodori, prendre une pause longue de 15-30 minutes.</li>
</ol>
<p>Ses avantages : rend les tâches intimidantes accessibles («&nbsp;je travaille juste 25 minutes&nbsp;»), crée une pression douce qui augmente la concentration, permet de mesurer concrètement le temps passé («&nbsp;ce projet m'a coûté 12 pomodori&nbsp;»), et force des pauses régénératrices.</p>

<h3>Le Time Blocking</h3>
<p>Le time blocking (Cal Newport, Elon Musk, Bill Gates) consiste à planifier chaque heure de sa journée dans son agenda, en attribuant des blocs de temps à des types d'activités spécifiques :</p>
<ul>
  <li><strong>Blocs de travail profond</strong> : 2-4h de concentration sans interruption sur la tâche la plus importante. Le matin est souvent le meilleur moment (énergie maximale, peu de sollicitations).</li>
  <li><strong>Blocs de communication</strong> : plages dédiées aux emails, messages, appels. Évite que ces activités ne contaminent les blocs de travail profond.</li>
  <li><strong>Blocs administratifs</strong> : tâches courtes, mécaniques, faible valeur ajoutée. Réunions, suivi de dossiers, logistique.</li>
  <li><strong>Blocs de régénération</strong> : déjeuner, sport, pauses. Non négociables pour maintenir l'énergie sur le long terme.</li>
</ul>
<div class="highlight-box"><p><strong>Time blocking vs liste de tâches :</strong> Une liste de tâches dit <em>quoi</em> faire. Le time blocking dit <em>quand</em>. Sans ce deuxième niveau de planification, les tâches importantes restent dans la liste indéfiniment, toujours déplacées par l'urgent.</p></div>

<h3>La loi de Parkinson</h3>
<p>Cyril Northcote Parkinson formulait en 1955 : «&nbsp;Le travail se dilate pour remplir le temps disponible pour son achèvement.&nbsp;» Cette loi explique pourquoi les projets prennent toujours tout le temps alloué, et pourquoi travailler sous contrainte de temps peut augmenter la productivité. Applications pratiques :</p>
<ul>
  <li>Se fixer des échéances artificiellement courtes pour éviter la procrastination et le perfectionnisme excessif.</li>
  <li>Estimer le temps d'une tâche, puis tenter de l'accomplir en la moitié du temps (time boxing).</li>
  <li>Limiter les réunions à 25 ou 50 minutes plutôt qu'à 30 ou 60, pour forcer une conclusion et laisser un tampon entre les réunions.</li>
</ul>

<h3>La loi de Pareto appliquée au temps</h3>
<p>Comme vu dans le chapitre sur la priorisation, 20 % des activités produisent 80 % des résultats. Appliqué à la gestion du temps :</p>
<ul>
  <li>Identifier ses «&nbsp;activités à haut levier&nbsp;» — celles qui ont le plus d'impact sur ses objectifs — et leur réserver ses meilleures heures.</li>
  <li>Évaluer régulièrement ses activités récurrentes (réunions, rapports, habitudes) et éliminer celles dont la valeur est faible.</li>
  <li>Automatiser ou déléguer les 80 % d'activités qui ne produisent que 20 % des résultats.</li>
</ul>

<h3>Énergie vs temps : le calendrier d'énergie</h3>
<p>La gestion du temps est incomplète sans la gestion de l'énergie. Daniel Pink (<em>When: The Scientific Secrets of Perfect Timing</em>, 2018) montre que les performances cognitives suivent un rythme circadien prévisible :</p>
<ul>
  <li><strong>Pic du matin</strong> (pour la majorité des gens) : capacité analytique maximale. Idéal pour le travail profond, les décisions importantes, les tâches créatives exigeantes.</li>
  <li><strong>Creux de l'après-midi</strong> (13h-15h) : vigilance et humeur au minimum. Idéal pour les tâches administratives, les réunions de routine, le travail mécanique. Le risque d'erreur y est le plus élevé de la journée.</li>
  <li><strong>Rebond en fin d'après-midi</strong> : retour partiel de l'énergie, avec moins d'inhibitions. Propice aux brainstorming créatifs, aux échanges collaboratifs.</li>
</ul>
<div class="highlight-box"><p><strong>Chronotype :</strong> Les «&nbsp;du matin&nbsp;» (<em>larks</em>) et les «&nbsp;du soir&nbsp;» (<em>owls</em>) ne partagent pas le même rythme. Connaître son chronotype et organiser ses journées en conséquence (autant que le contexte le permet) peut augmenter significativement la productivité et le bien-être.</p></div>

<h3>Lutter contre la procrastination</h3>
<p>La procrastination n'est pas un problème de gestion du temps — c'est un problème de régulation émotionnelle. On procrastine pour éviter les émotions négatives associées à une tâche (ennui, anxiété, doute de soi). Stratégies efficaces :</p>
<ul>
  <li><strong>Réduire l'activation requise</strong> : préparer son environnement de travail la veille, ouvrir le document avant de se coucher. Diminuer le coût d'entrée de la tâche.</li>
  <li><strong>Dissocier l'identité du résultat</strong> : «&nbsp;Je vais passer 20 minutes sur ce rapport&nbsp;» plutôt que «&nbsp;Je dois finir ce rapport&nbsp;». L'engagement sur le processus réduit l'anxiété.</li>
  <li><strong>Démarrer par n'importe quoi</strong> : la loi de Newton («&nbsp;un corps en mouvement reste en mouvement&nbsp;») s'applique aussi au travail. Commencer, même imparfaitement, enclenche souvent l'élan.</li>
  <li><strong>Technique des 5 minutes</strong> : s'engager à travailler 5 minutes. La plupart du temps, on continue bien au-delà.</li>
</ul>

<h3>Auditer son temps : le journal de temps</h3>
<p>Tenir un journal de temps pendant une semaine — noter précisément comment on a passé chaque heure — est un exercice révélateur. La plupart des gens découvrent :</p>
<ul>
  <li>Des heures perdues invisibles (20 minutes ici, 15 minutes là, qui totalisent 2h de distractions)</li>
  <li>Un décalage entre le temps perçu (croyance) et le temps réel (réalité) sur chaque activité</li>
  <li>Des activités chronophages sans valeur proportionnelle</li>
</ul>
<p>Des outils comme Toggl Track ou RescueTime automatisent ce suivi. Une fois la réalité visible, les ajustements deviennent évidents.</p>"""

# ============================================================
# Write all new contents to the JSON file
# ============================================================

with open(INPUT, "r", encoding="utf-8") as f:
    data = json.load(f)

for key, new_content_inner in CONTENTS.items():
    page = data["pages"][key]
    # Replace only the div.course-content inner HTML in section id="contenu"
    old_content = page["content"]

    # Find the course-content div and replace its inner content
    pattern = r'(<div class="course-content">)(.*?)(</div>\s*</section>\s*\n\s*<section class="content-section" id="quiz")'
    replacement = r'\1\n' + new_content_inner + r'\n      \3'
    new_content = re.sub(pattern, replacement, old_content, flags=re.DOTALL)

    if new_content == old_content:
        print(f"WARNING: Pattern not matched for {key}")
    else:
        data["pages"][key]["content"] = new_content
        print(f"OK: {key} (new len: {len(new_content)})")

with open(INPUT, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("\nDone. File written.")
