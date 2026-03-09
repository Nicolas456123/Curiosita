#!/usr/bin/env python3
"""
build-portail-map.py — Auto-generate _portail-map.json from _all-portails.json.

Classifies all 1785 Wikipedia portails into the 6 Curiosità categories
using pattern-based rules. Outputs to assets/content/_portail-map.json.

Usage:
    python tools/build-portail-map.py
    python tools/build-portail-map.py --dry-run    # preview without writing
"""

import json
import os
import re
import sys
import io
import unicodedata

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
ALL_PORTAILS_PATH = os.path.join(SCRIPT_DIR, '_all-portails.json')
OUTPUT_PATH = os.path.join(PROJECT_DIR, 'assets', 'content', '_portail-map.json')


# ── Classification rules ──────────────────────────────────────────────────
# Each category has a list of regex patterns. The FIRST match wins.
# Patterns are tested case-insensitive against the portail name.
# Order matters: more specific patterns should come before generic ones.

RULES = {
    # ── TECHNOLOGIES ──
    'technologies': [
        r'informatique', r'programmation', r'logiciel', r'logiciels',
        r'bases?\s+de\s+donn', r'r[eé]seaux?\s+informatique',
        r'intelligence\s+artificielle', r'cryptographie', r'cryptologie',
        r'cryptomonnaie', r's[eé]curit[eé]\s+.*(?:information|syst[eè]me)',
        r'Web\s+s[eé]mantique', r'TICE', r'[eé]dition\s+num[eé]rique',
        r'imagerie\s+num[eé]rique',
        r'Internet', r'\bweb\b',
        r'a[eé]ronautique', r'aviation', r'spatial', r'a[eé]rospatiale',
        r'astronautique', r'h[eé]licopt[eè]re',
        r'automobile', r'moto\b', r'sport\s+automobile', r'Formule\s+1',
        r'endurance\s+automobile', r'rallye\s+automobile',
        r'sport\s+automobile\s+[eé]lectrique',
        r'NASCAR', r'camions',
        r'g[eé]nie\s+m[eé]canique', r'g[eé]nie\s+civil', r'robotique',
        r'[eé]nergie', r'[eé]nergies?\s+(?:renouvelable|fossile)',
        r'industrie', r't[eé]l[eé]communication', r'transports?\b',
        r'[eé]lectronique', r'[eé]lectricit[eé]',
        r'nucl[eé]aire', r'photonique', r'laser',
        r'ferroviaire', r'chemin\s+de\s+fer', r'm[eé]tro\b',
        r'grande\s+vitesse\s+ferroviaire',
        r'jeu\s+vid[eé]o', r'Xbox', r'Nintendo', r'Sega', r'Sony',
        r'PlayStation',
        r'biotechnologie', r'nanotechnologie',
        r'micro\s+et\s+nano',
        r'mat[eé]riaux', r'm[eé]tallurgie',
        r'armement', r'armes\b', r'chars?\s+de\s+combat',
        r'sous-marin', r'marine\b(?!.*fran[cç]aise)',
        r'marines?\s+de\s+guerre',
        r'construction', r'b[aâ]timent.*travaux\s+publics',
        r'routes\b', r'ponts\b', r'tunnels\b', r'barrages\b',
        r'gratte-ciel', r'phares\b',
        r'froid\s+et\s+.*climatisation',
        r'transports?\s+en\s+(?:commun|[IÎ]le)',
        r'autobus', r'transport\s+par\s+c[aâ]ble',
        r'paquebots', r'navires\b', r'ports\b',
        r'\bLinux\b', r'\bMicrosoft\b', r'\bApple\b', r'\bGoogle\b',
        r'\bSamsung\b',
        r'Ubisoft',
        r'horlogerie',
        r'assainissement',
        r'a[eé]romod[eé]lisme',
        r'bicyclette',
        r'\btechnologies\b',
        r'donn[eé]es\b',
        r'mine\b',
        r'\bor\b',
    ],

    # ── ARTS ──
    'arts': [
        r'cin[eé]ma', r'r[eé]alisation\s+audiovisuelle',
        r'musique\b', r'musiques\s+du\s+monde', r'musique\s+(?:classique|[eé]lectronique|impressionniste|bretonne|country)',
        r'rock\b', r'rock\s+progressif', r'jazz\b', r'hip-hop', r'blues\b',
        r'punk\b', r'metal\b', r'soul.*funk', r'reggae', r'gabber',
        r'y[eé]y[eé]s', r'K-pop', r'salsa',
        r'th[eé][aâ]tre', r'litt[eé]rature', r'po[eé]sie', r'polar\b',
        r'peinture', r'sculpture', r'photographie',
        r'danse\b', r'op[eé]ra\b', r'clavecin', r'orgue\b', r'guitare',
        r'percussions',
        r'bande\s+dessin[eé]e', r'manga\b', r'animation\b', r'comics\b',
        r'com[eé]dies?\s+musicale',
        r'arts?\b(?!\s+martiaux)', r'arts\s+du\s+spectacle',
        r'arts?\s+d[eé]coratifs', r'art\s+contemporain', r'art\s+nouveau',
        r'art\s+d[eé]co',
        r'histoire\s+de\s+l.art', r'baroque\b', r'classicisme\b',
        r'n[eé]o-classicisme', r'romantisme\b',
        r'dadaïsme.*surr[eé]alisme',
        r'impressionnisme.*postimpressionnisme',
        r'gravure.*estampe', r'enluminure',
        r'humour\b', r'horreur\b',
        r'science-fiction', r'fantasy.*fantastique',
        r'contes?\s+et\s+.*fables', r'l[eé]gende\s+arthurienne',
        r'cr[eé]atures?\s+et\s+animaux\s+l[eé]gendaires',
        r'mythologie\b',
        r's[eé]ries?\s+t[eé]l[eé]vis[eé]', r'Disney\b', r'Marvel\b',
        r'DC\s+Comics', r'Warner\s+Bros',
        r'Cartoon\s+Network', r'Nickelodeon', r'Netflix\b',
        r'architecture\b(?!.*chr[eé]tienne)', r'urbanisme',
        r'architecture\s+chr[eé]tienne',
        r'design\b', r'mode\b(?!.*Juillet)', r'mannequinat', r'lingerie',
        r'marionnettes', r'western\b',
        r'Eurovision\b',
        r'[eé]criture\b', r'[eé]dition\b(?!.*num[eé]rique)',
        r'typographie',
        r'mus[eé]e(?:s|\b)', r'mus[eé]e\s+du\s+(?:Louvre|Prado)',
        r"mus[eé]e\s+d.(?:Orsay|Histoire|Ermitage)",
        r'galeries?\s+des\s+Offices',
        r'Museum\s+of\s+Modern\s+Art',
        r'National\s+Gallery',
        r'Art\s+Institute',
        r'centre\s+Pompidou',
        r'mus[eé]e.*Beaux-Arts',
        r'J\.\s*Paul\s+Getty',
        r'patrimoine\s+(?:mondial|culturel)',
        r'monuments?\s+historiques?\s+fran[cç]ais',
        r'ch[aâ]teaux\b', r'ch[aâ]teau\s+de\s+Versailles',
        r'Biens\s+d.int[eé]r[eê]t\s+culturel',
        r'Registre\s+national\s+des\s+lieux',
        r'lieux\s+patrimoniaux',
        r'monuments?\s+(?:class[eé]s|nationaux)',
        r'protection\s+du\s+patrimoine',
        r'couleurs\b',
        r'James\s+Bond', r'J\.\s*R\.\s*R\.\s*Tolkien',
        r'Jules\s+Verne', r'Jane\s+Austen', r'Charles\s+Dickens',
        r'studio\s+Ghibli',
        r'jeux\s+de\s+r[oô]le', r'livres-jeux',
        r'mod[eé]lisme.*maquettisme',
        r'collections\b',
        r'Lego\b',
        r'odeurs.*senteurs.*parfum',
        r'vampires\b',
    ],

    # ── SOCIETE ──
    'societe': [
        r'politique\b', r'droit\b(?!\s+suisse)',
        r'droit\s+fran[cç]ais', r'droit\s+suisse',
        r'droit\s+du\s+travail',
        r'religion', r'religions?\s+et\s+.*croyances',
        r'catholicisme', r'christianisme\b', r'protestantisme',
        r'christianisme\s+(?:orthodoxe|[eé]vang[eé]lique)',
        r'juda[ïi]sme', r'islam\b', r'bouddhisme', r'hindouisme',
        r'ja[ïi]nisme', r'sikhisme', r'shinto[ïi]?',
        r'taoïsme', r'mormonisme', r'chiisme',
        r'anglicanisme', r'monachisme',
        r'Bible\b', r'Talmud', r'Vatican\b',
        r'spiritualit[eé]', r'mystique\b', r'ath[eé]isme',
        r'chr[eé]tiens?\s+d.Orient',
        r'Compagnie\s+de\s+J[eé]sus',
        r'ordre\s+(?:des\s+Pr[eê]cheurs|cistercien)',
        r'th[eé]ologie',
        r'paranormal\b', r'astrologie\b',
        r'football\b(?!\s+(?:am[eé]ricain|australien|canadien))',
        r'football\s+am[eé]ricain', r'football\s+australien',
        r'football\s+canadien',
        r'sport\b(?!\s+auto)', r'sports?\s+d.hiver',
        r'sports?\s+(?:nautiques|motocyclistes|gaéliques)',
        r'sports?\s+de\s+(?:combat|raquette)',
        r'Jeux\s+(?:olympiques|africains)',
        r'rugby', r'tennis\b(?!\s+de\s+table)', r'tennis\s+de\s+table',
        r'basket-ball', r'cyclisme', r'athl[eé]tisme',
        r'natation\b(?!\s+synchronis)', r'natation\s+synchronis[eé]e',
        r'handball\b', r'hockey', r'baseball\b', r'cricket\b',
        r'volley-ball\b', r'beach-volley', r'boxe\b',
        r'catch\b', r'judo\b', r'karat[eé]', r'taekwondo',
        r'escrime', r'gymnastique', r'musculation',
        r'arts?\s+martiaux', r'Tour\s+de\s+France',
        r'biathlon', r'ski\b', r'ski\s+(?:alpin|de\s+fond|acrobatique)',
        r'saut\s+[aà]\s+ski', r'snowboard', r'bobsleigh',
        r'skeleton', r'combin[eé]\s+nordique', r'curling',
        r'patinage', r'luge\b',
        r'voile\b', r'plongée', r'r[eé]gate',
        r'surf\b', r'canoë-kayak', r'water-polo',
        r'alpinisme.*escalade', r'randonn[eé]e', r'sp[eé]l[eé]ologie',
        r'parachutisme', r'golf\b', r'p[eé]tanque',
        r'haltérophilie', r'lutte\b',
        r'sport\s+universitaire', r'handisport',
        r'arbitrage\s+sportif',
        r'plongeon', r'pentathlon', r'squash', r'snooker',
        r'rink\s+hockey', r'crosse\b', r'aviron\b', r'badminton',
        r'roller.*skateboard', r'tir\b(?!\s+[aà]\s+l.arc)',
        r'tir\s+[aà]\s+l.arc',
        r'[eé]checs\b', r'poker\b', r'jeux\b(?!\s+(?:vid[eé]o|de\s+r[oô]le|t[eé]l[eé]vis))',
        r'jeux\s+t[eé]l[eé]vis[eé]s', r'jeu\s+de\s+go',
        r'quiz\b',
        r'monarchie', r'soci[eé]t[eé]', r'[eé]conomie',
        r'finance\b', r'management\b', r'commerce\b',
        r'entreprises\b', r'capitalisme', r'lib[eé]ralisme',
        r'keynésianisme', r'socialisme', r'communisme',
        r'marxisme', r'conservatisme', r'anarchisme',
        r'nationalisme', r'fascisme', r'nazisme',
        r'gaullisme', r'altermondialisme',
        r'f[eé]minisme', r'syndicalisme',
        r'droits?\s+de\s+l.homme', r'libert[eé]\s+d.expression',
        r'LGBT', r'transidentit[eé]',
        r'Alimentation\b', r'gastronomie', r'cuisine\b',
        r'boissons?\b', r'bi[eè]re\b', r'vin\b', r'vigne',
        r'caf[eé]\b', r'th[eé]\b', r'chocolat\b', r'whisky',
        r'fromage\b', r'desserts?\b', r'[eé]pices.*aromates',
        r'pomme\s+de\s+terre', r'sel\s+(?:alimentaire|comtois)',
        r'v[eé]g[eé]tarisme', r'permaculture',
        r'[eé]ducation\b', r'universit[eé]s?\b', r'[eé]coles?\b',
        r'grandes?\s+[eé]coles',
        r'sant[eé]\b', r'm[eé]decine\b(?!\s+v[eé]t[eé]rinaire)',
        r'm[eé]decine\s+v[eé]t[eé]rinaire',
        r'pharmacie', r'soins\s+infirmiers',
        r'maladies?\s+infectieuses', r'h[eé]matologie',
        r'psychotropes', r'alcool\b', r'tabac\b',
        r'handicap\b', r'autisme\b', r'folie\b',
        r'culture\s+sourde',
        r'pornographie', r'sexualit[eé]',
        r't[eé]l[eé]vision\b', r'presse\s+[eé]crite', r'm[eé]dias?\b',
        r'radio\b', r'BBC\b', r'journalisme',
        r'publicit[eé]', r'Miss\s+France',
        r'environnement\b', r'[eé]cologie\s+politique',
        r'[eé]cologisme', r'changement\s+climatique',
        r'd[eé]veloppement\s+durable',
        r'monde\s+maritime', r'tourisme\b',
        r'h[ôo]tellerie', r'parcs?\s+de\s+loisirs',
        r'loisirs?\s+et\s+.*divertissements',
        r'scoutisme\b', r'scouting',
        r'franc-ma[cç]onnerie',
        r'travail\s+et\s+.*m[eé]tiers',
        r'terrorisme', r'renseignement\b',
        r'police\b', r'prison\b', r'criminologie',
        r'S[eé]curit[eé]\s+civile.*pompiers',
        r'premiers?\s+secours.*secourisme',
        r'aide\s+humanitaire',
        r'Organisation\s+des\s+Nations\s+unies',
        r'OTAN\b', r'Conseil\s+de\s+l.Europe',
        r'relations?\s+internationales',
        r'paix\b', r'mort\b',
        r'enfance\b', r'enfants?\b',
        r'r[eé]compenses?\s+et\s+.*distinctions',
        r'monde\s+[eé]questre', r'animaux\s+de\s+compagnie',
        r'chasse\b', r'p[eê]che\b',
        r'tauromachie',
        r'genre\b',
        r'records\b',
        r'Wikimedia|Wikimédia',
        r'carnaval\b',
        r'f[eê]tes?\s+et\s+.*traditions',
        r'minorit[eé]s\b',
        r'coop[eé]ratives',
        r'associations?\b',
        r'politiques?\s+sociales',
        r'monde\s+colonial',
        r'insurrection',
        r'esclavage',
        r'noblesse\b',
        r'r[eé]publique\b(?!\s+(?:d[eé]mocratique|centrafricaine|du\s+Congo|dominicaine|des\s+Deux))',
        r'g[eé]n[eé]alogie',
        r'numismatique', r'vexillologie', r'h[eé]raldique',
        r'philat[eé]lie', r'papyrologie',
        r'uniformologie',
        r'piraterie',
        r'droits?\s+des\s+animaux',
        r'jardinage.*horticulture',
        r'espaces?\s+verts',
        r'bois\s+et\s+.*for[eê]t',
        r'[eé]levage\b', r'agriculture.*agronomie',
        r'protection\s+des\s+cultures',
        r'ameublement',
        r'textile\b',
        r'nettoyage.*hygi[eè]ne',
        r'c[eé]ramique',
        r'intercommunalit[eé]s',
        r'forces?\s+arm[eé]es?\b',
        r'Arm[eé]e\s+fran[cç]aise',
        r'L[eé]gion\s+[eé]trang[eè]re',
        r'Royal\s+Navy', r'Royal\s+Air\s+Force',
        r'Marine\s+fran[cç]aise', r'Grande\s+Arm[eé]e',
        r'militaire\b',
        r'langues?\b(?!\s+(?:cr[eé]oles|germaniques))',
        r'langues?\s+cr[eé]oles', r'langues?\s+germaniques',
        r'langue\s+(?:fran[cç]aise|arabe|latine|catalane|wallonne)',
        r'francophonie', r'lusophonie',
        r'esp[eé]ranto',
        r'patronages?\s+sportifs',
        r'sommeil.*r[eê]ve',
        r'oeil.*vue',
        r'l.actualit[eé]',
        r'Pr[eé]noms.*anthroponymie',
        r'litt[eé]rature\s+(?:d.enfance|espérantophone|haïtienne)',
        r'sant[eé]\b',
        r'culture\b(?!\s+(?:nord|russe|suisse|ivoir))',
        r'Commonwealth\b',
        r'yoga\b',
        r'sanskrit\b',
        r'ordre\s+(?:du\s+Temple|souverain\s+de\s+Malte)',
        r'artillerie\b',
        r'l[eé]gendes?\s+et\s+.*folklore',
        r'f[oô]i\s+bah',
        r'micronations?\b',
        r'zen\b',
        r'course\s+au\s+large',
        r'triathlon\b',
    ],

    # ── ESPACE-TEMPS ──
    'espace-temps': [
        # Time periods
        r'ann[eé]es?\s+\d', r'si[eè]cle', r'temps\b',
        r'Antiquit[eé]', r'Moyen\s+[AÂ]ge', r'Renaissance\b',
        r'[eé]poque\s+(?:moderne|contemporaine|hellénistique)',
        r'Pr[eé]histoire\b', r'C[eé]nozoïque',
        r'Lumières\b', r'Grand\s+Siècle',
        r'haut\s+Moyen', r'Moyen\s+[AÂ]ge\s+(?:central|tardif)',
        r'Premier\s+Empire', r'Second\s+Empire',
        r'R[eé]volution\s+fran[cç]aise',
        r'R[eé]volution\s+am[eé]ricaine',
        r'r[eé]publique\s+de\s+Weimar',
        r'Restauration\s+fran[cç]aise',
        r'monarchie\s+de\s+Juillet',
        r'Cinqui[eè]me\s+R[eé]publique',
        r'Risorgimento', r'Printemps\s+des\s+peuples',
        r'Ancien\s+R[eé]gime',
        r'entre-deux-guerres',

        # Wars and conflicts
        r'(?:Premi[eè]re|Seconde)\s+Guerre\s+mondiale',
        r'guerre\s+(?:froide|de\s+S[eé]cession|du\s+Vietnam|d.Alg[eé]rie|russo-ukrainienne)',
        r'conflit\s+isra[eé]lo',
        r'Shoah\b',
        r'R[eé]sistance\s+fran[cç]aise',
        r'croisade', r'Reconquista',

        # History keywords
        r'histoire\b(?!\s+(?:de\s+l.art|naturelle|des\s+sciences|de\s+la\s+zoologie))',
        r'histoire\s+militaire\b',
        r'historiographie',
        r'exploration\b',

        # Countries
        r'\bFrance\b(?!\s+d.outre-mer)', r'France\s+d.outre-mer',
        r'[EÉ]tats-Unis\b', r'Allemagne\b', r'Italie\b', r'Espagne\b',
        r'Angleterre\b', r'Royaume-Uni\b', r'Russie\b', r'Chine\b',
        r'Japon\b', r'Inde\b', r'Br[eé]sil\b', r'Canada\b',
        r'Australie\b(?!-)', r'Mexique\b',
        r'Portugal\b', r'Belgique\b', r'Suisse\b(?!\s+(?:du|central|oriental))',
        r'Pays-Bas\b', r'Autriche\b(?!-Hongrie)',
        r'Su[eè]de\b', r'Norv[eè]ge\b', r'Danemark\b', r'Finlande\b',
        r'Pologne\b', r'Gr[eè]ce\b(?!\s+antique)', r'Turquie\b',
        r'[EÉ]gypte\b(?!\s+antique)', r'Maroc\b', r'Alg[eé]rie\b',
        r'Tunisie\b', r'Iran\b', r'Irak\b', r'Isra[eë]l\b',
        r'Argentine\b', r'Colombie\b', r'P[eé]rou\b',
        r'Afrique\b(?!\s+du\s+Sud)', r'Asie\b', r'Europe\b',
        r'Am[eé]rique\b(?!\s+pr[eé]colombienne)',
        r'Oc[eé]anie\b',
        r'Afrique\s+du\s+Sud', r'Nigeria\b', r'[EÉ]thiopie\b', r'Kenya\b',
        r'Cor[eé]e\b(?!\s+du)', r'Cor[eé]e\s+du\s+(?:Sud|Nord)',
        r'Tha[ïi]lande\b', r'Vi[eê]t\s*Nam\b|Vietnam\b',
        r'Indon[eé]sie\b', r'Malaisie\b', r'Philippines\b',
        r'Pakistan\b', r'Bangladesh\b', r'Sri\s+Lanka',
        r'N[eé]pal\b', r'Birmanie\b', r'Cambodge\b', r'Laos\b',
        r'Singapour\b', r'Brunei\b', r'Bhoutan\b',
        r'Papouasie', r'Timor\b',
        r'Roumanie\b', r'Hongrie\b', r'Tch[eé]quie\b',
        r'Tch[eé]coslovaquie\b',
        r'Bulgarie\b', r'Serbie\b', r'Croatie\b',
        r'Slovaquie\b', r'Slov[eé]nie\b', r'Bosnie',
        r'Albanie\b', r'Mac[eé]doine\b', r'Mont[eé]n[eé]gro\b',
        r'Kosovo\b', r'Yougoslavie\b',
        r'Ukraine\b', r'Bi[eé]lorussie\b', r'Moldavie\b',
        r'G[eé]orgie\b(?!\s+\([EÉ]tats)', r'Arm[eé]nie\b',
        r'Azerba[ïi]djan\b',
        r'Lituanie\b', r'Lettonie\b', r'Estonie\b',
        r'Islande\b', r'Luxembourg\b', r'Malte\b',
        r'Liechtenstein\b', r'Monaco\b', r'Andorre\b',
        r'Saint-Marin\b', r'Chypre\b', r'Gibraltar\b',
        r'Cuba\b', r'Chili\b', r'Venezuela\b', r'Paraguay\b',
        r'Uruguay\b', r'Bolivie\b', r'[EÉ]quateur\b',
        r'Guyana\b', r'Suriname\b', r'Panama\b',
        r'Nicaragua\b', r'Honduras\b', r'Guatemala\b',
        r'Salvador\b', r'Costa\s+Rica', r'Belize\b',
        r'R[eé]publique\s+dominicaine',
        r'Ha[ïi]ti\b', r'Jama[ïi]que\b',
        r'Trinit[eé]-et-Tobago', r'Bahamas\b', r'Barbade\b',
        r'Grenade\b', r'Saint-(?:Christophe|Vincent|Lucie|Barth[eé]lemy|Martin|Pierre)',
        r'Antigua', r'Dominique\b', r'Anguilla\b',
        r'Bermudes\b', r'Cara[ïi]bes\b', r'Porto\s+Rico',
        r'C[oô]te\s+d.Ivoire', r'S[eé]n[eé]gal\b', r'Cameroun\b',
        r'Mali\b', r'Burkina\s+Faso', r'B[eé]nin\b', r'Togo\b',
        r'Niger\b(?!\s*ia)', r'Guin[eé]e\b(?!\s+[eé]quatoriale)',
        r'Guin[eé]e\s+[eé]quatoriale', r'Guin[eé]e-Bissau',
        r'Ghana\b', r'Lib[eé]ria\b', r'Sierra\s+Leone',
        r'Gambie\b', r'Cap-Vert\b',
        r'R[eé]publique\s+(?:d[eé]mocratique\s+du\s+Congo|centrafricaine|du\s+Congo)',
        r'Gabon\b', r'Tchad\b', r'Soudan\b(?!\s+du\s+Sud)',
        r'Soudan\s+du\s+Sud',
        r'Rwanda\b', r'Burundi\b', r'Ouganda\b',
        r'Tanzanie\b', r'Mozambique\b', r'Zimbabwe\b',
        r'Zambie\b', r'Namibie\b', r'Botswana\b',
        r'Lesotho\b', r'Eswatini\b', r'Madagascar\b',
        r'Maurice\b(?!\s+de)', r'Comores\b', r'Seychelles\b',
        r'Djibouti\b', r'Somalie\b', r'Somaliland\b',
        r'[EÉ]rytr[eé]e\b', r'Libye\b',
        r'Mauritanie\b', r'Mayotte\b', r'R[eé]union\b',
        r'Arabie\s+saoudite', r'[EÉ]mirats',
        r'Qatar\b', r'Bahre[ïi]n\b', r'Kowe[ïi]t\b',
        r'Oman\b', r'Jordanie\b', r'Liban\b', r'Syrie\b',
        r'Y[eé]men\b', r'Palestine\b',
        r'Kazakhstan\b', r'Ouzb[eé]kistan\b', r'Tadjikistan\b',
        r'Kirghizistan\b', r'Turkm[eé]nistan\b',
        r'Mongolie\b', r'Tibet\b',
        r'Maldives\b', r'Samoa\b', r'Fidji\b',
        r'Tonga\b', r'Tuvalu\b', r'Vanuatu\b',
        r'Kiribati\b', r'Palaos\b', r'Nauru\b', r'Niue\b',
        r'[ÎI]les\s+(?:Salomon|Marshall|Cook|Mariannes|F[eé]ro[eé]|Gal[aá]pagos)',
        r'[EÉ]tats\s+f[eé]d[eé]r[eé]s\s+de\s+Micron[eé]sie',
        r'Ta[ïi]wan\b',

        # Empires and historical states
        r'Rome\s+antique', r'Gr[eè]ce\s+antique', r'[EÉ]gypte\s+antique',
        r'Empire\s+(?:ottoman|romain|byzantin|russe|britannique|espagnol|allemand|colonial|moghol)',
        r'Autriche-Hongrie', r'empire\s+d.Autriche',
        r'Union\s+(?:europ[eé]enne|sovi[eé]tique)',
        r'empire\s+du\s+Japon',
        r'Proche-Orient\s+ancien', r'M[eé]sopotamie',
        r'Isra[eë]l\s+antique',
        r'Am[eé]rique\s+pr[eé]colombienne',
        r'civilisation\s+(?:maya|inca|carthaginoise)',
        r'Azt[eè]ques\b', r'Ph[eé]niciens',
        r'[EÉ]trusques\b', r'Hittites\b',
        r'royaume\s+de\s+(?:France|Prusse|Bavière|Saxe|Hanovre|Wurtemberg)',
        r'grand-duch[eé]\s+de\s+(?:Bade|Hesse|Saxe|Oldenbourg|Mecklembourg)',
        r'duch[eé]\s+de\s+(?:Bretagne|Lorraine|Brunswick|Anhalt)',
        r'comt[eé]\s+de\s+Champagne',
        r'R[eé]publique\s+des\s+Deux\s+Nations',
        r'Saint-Empire\b',

        # French regions and departments
        r'Normandie\b', r'Bretagne\b', r'Provence\b',
        r'Alsace\b', r'Aquitaine\b', r'Occitanie\b',
        r'Bourgogne\b', r'Corse\b', r'Picardie\b',
        r'Lorraine\b', r'Franche-Comt[eé]',
        r'Champagne-Ardenne',
        r'Auvergne\b', r'Limousin\b',
        r'Languedoc-Roussillon',
        r'Pays\s+de\s+la\s+Loire',
        r'Centre-Val\s+de\s+Loire',
        r'Hauts-de-France',
        r'[ÎI]le-de-France\b',
        r'Provence-Alpes-C[oô]te\s+d.Azur',
        r'Nouvelle-Aquitaine',
        r'r[eé]gion\s+Occitanie',
        r'Poitou-Charentes',
        r'Nord-Pas-de-Calais',
        r'(?:Gard|Var|Lot|Cher|Ain|Tarn|Gers|Doubs|Aude|Jura|Rhône|Vaucluse|Gironde|Morbihan|Vosges|Vienne|Finistère|Calvados|Landes|Loiret|Meuse|Marne|Somme|Drôme|Isère|Ardèche|Yonne|Hérault|Ardennes|Aisne|Orne|Eure|Essonne|Nièvre|Indre|Sarthe|Mayenne|Vendée|Charente|Dordogne|Corrèze|Creuse|Lozère|Allier|Aveyron)\b',
        r'(?:Hauts-de-Seine|Seine-et-Marne|Seine-Saint-Denis|Val-de-Marne|Val-d.Oise|Yvelines)\b',
        r'(?:Bouches-du-Rhône|Alpes-Maritimes|Alpes-de-Haute-Provence|Hautes-Alpes|Hautes-Pyrénées|Pyrénées-Atlantiques|Pyrénées-Orientales|Haute-Garonne|Haute-Loire|Haute-Marne|Haute-Saône|Haute-Vienne|Haut-Rhin|Bas-Rhin)\b',
        r'(?:Seine-Maritime|Loire-Atlantique|Côtes-d.Armor|Charente-Maritime|Côte-d.Or|Loir-et-Cher|Indre-et-Loire|Meurthe-et-Moselle|Saône-et-Loire|Tarn-et-Garonne|Lot-et-Garonne|Puy-de-Dôme|Deux-Sèvres)\b',
        r'Moselle\b', r'Cantal\b',
        r'Territoire\s+de\s+Belfort',
        r'(?:Anjou|Touraine|Rouergue|Bourbonnais|Gascogne|Savoie|Dauphiné|Béarn|Morvan|Bugey|Bresse|Camargue|Dombes|Côte\s+d.Opale|Côtière)\b',
        r'r[eé]gions?\s+et\s+.*territoires\s+de\s+France',
        r'communes?\s+(?:de\s+France|d.Alg[eé]rie)',
        r'Massif\s+central', r'Alpes\b', r'Pyr[eé]n[eé]es\b',
        r'massif\s+du\s+Jura', r'Alpilles\b',
        r'Vexin\b', r'Septentrion\b',

        # World regions
        r'Balkans\b', r'Caucase\b', r'Moyen-Orient\b',
        r'Maghreb\b', r'Kabylie\b',
        r'Kurdistan\b', r'Laponie\b',
        r'Amazonie\b', r'Arctique\b', r'Antarctique\b',
        r'Groenland\b', r'Carpates\b',
        r'Pays\s+basque', r'Pays\s+(?:catalans|valencien|de\s+Galles)',
        r'Flandre', r'Hainaut\b',
        r'Brabant\b', r'Limbourg\b', r'Wallonie\b',

        # Cities
        r'Paris\b', r'New\s+York\b', r'Londres\b',
        r'Rome\b(?!\s+antique)', r'Berlin\b', r'Tokyo\b',
        r'Los\s+Angeles\b', r'Chicago\b', r'San\s+Francisco\b',
        r'Boston\b', r'Washington\b', r'Philadelphie\b',
        r'D[eé]troit\b', r'Seattle\b', r'Dallas\b',
        r'Houston\b', r'Miami\b', r'Atlanta\b',
        r'Las\s+Vegas\b', r'San\s+Diego\b', r'Phoenix\b',
        r'Portland\b', r'Nashville\b', r'Memphis\b',
        r'Minneapolis\b', r'Cleveland\b', r'Charlotte\b',
        r'Pittsburgh\b', r'Baltimore\b', r'Columbus\b',
        r'Indianapolis\b', r'Jacksonville\b', r'Cincinnati\b',
        r'San\s+Antonio', r'Salt\s+Lake\b', r'Louisville\b',
        r'Sacramento\b', r'Denver\b', r'Saint-Louis\b',
        r'Nouvelle-Orl[eé]ans',
        r'Montréal\b', r'Qu[eé]bec\b(?!\s+\(\d)',
        r'Vancouver\b', r'Toronto\b', r'Calgary\b',
        r'Ottawa\b', r'Edmonton\b', r'Winnipeg\b', r'Hamilton\b',
        r'Marseille\b', r'Toulouse\b', r'Bordeaux\b',
        r'Nice\b', r'Nantes\b', r'Strasbourg\b',
        r'Montpellier\b', r'Grenoble\b', r'Rouen\b',
        r'Rennes\b', r'Reims\b', r'Dijon\b', r'Caen\b',
        r'Nancy\b', r'Metz\b', r'Saint-[EÉ]tienne\b',
        r'Clermont-Ferrand', r'Limoges\b', r'Tours\b',
        r'Dunkerque\b', r'Perpignan\b', r'Brest\b',
        r'Nîmes\b', r'Avignon\b', r'Toulon\b',
        r'Fontainebleau\b', r'Versailles\b',
        r'Le\s+Mans\b', r'Havre\b', r'Le\s+Havre',
        r'Rochelle\b', r'Troyes\b', r'Besancon\b|Besançon\b',
        r'Vesoul\b', r'Colmar\b', r'Mulhouse\b',
        r'Cambrai\b', r'Cannes\b', r'Chamonix\b',
        r'Carpentras\b', r'Chambéry\b', r'Valence\b',
        r'Poitiers\b', r'Chartres\b',
        r'Boulogne-sur-Mer', r'Brive', r'Saint-Nazaire',
        r'Saint-Malo\b', r'Saint-Brieuc', r'Vannes\b',
        r'Annecy\b', r'Angers\b', r'Amiens\b',
        r'Arles\b', r'Arras\b', r'Orléans\b',
        r'P[eé]rigueux\b', r'Quimper\b', r'Riom\b',
        r'Tarbes\b', r'Laval\b(?!\s+\(Qu[eé]bec)',
        r'Saint-Denis\b', r'Saint-Pierre\b',
        r'Thiers\b', r'Touquet\b',
        r'[EÉ]vian\b', r'Aix-(?:en|les)',
        r'London\b', r'Manchester\b', r'Birmingham\b',
        r'Liverpool\b', r'Glasgow\b', r'Dublin\b',
        r'[EÉ]cosse\b', r'Irlande\b', r'Yorkshire\b',
        r'Nottinghamshire\b', r'Anglo-Saxons\b',
        r'Milan\b', r'Florence\b', r'Venise\b',
        r'Naples\b', r'Turin\b', r'Bologne\b', r'G[eê]nes\b',
        r'Pi[eé]mont\b', r'Lombardie\b', r'Toscane\b',
        r'Campanie\b', r'Sardaigne\b', r'Sicile\b',
        r'Calabre\b', r'V[eé]n[eé]tie\b', r'Pouilles\b',
        r'Ligurie\b', r'Abruzzes\b', r'Ombrie\b',
        r'Basilicate\b', r'Molise\b',
        r'[EÉ]milie-Romagne', r'Frioul', r'Trentin',
        r'Latium\b', r'Sienne\b',
        r'Vallée\s+d.Aoste',
        r'Barcelone\b', r'Madrid\b', r'S[eé]ville\b',
        r'Catalogne\b', r'Andalousie\b', r'Galice\b',
        r'Navarre\b', r'Castille\b', r'Asturies\b',
        r'Aragon\b', r'Estr[eé]madure\b', r'Cantabrie\b',
        r'Murcie\b', r'Bal[eé]aires\b', r'Canaries\b',
        r'Munich\b', r'Francfort\b', r'Cologne\b',
        r'Hambourg\b', r'Stuttgart\b', r'Nuremberg\b',
        r'Br[eê]me\b', r'Mayence\b',
        r'Basse-Saxe', r'Rh[eé]nanie\b', r'Bavière\b',
        r'Hesse\b', r'Thuringe\b', r'Brandebourg\b',
        r'Saxe\b(?!-Anhalt)', r'Saxe-Anhalt',
        r'Bade-Wurtemberg', r'Sarre\b',
        r'Schleswig-Holstein', r'Mecklembourg-Pom[eé]ranie',
        r'Allemagne\s+de\s+l.Est',
        r'Bruxelles\b', r'Li[eè]ge\b', r'Charleroi\b',
        r'Anvers\b',
        r'Amsterdam\b', r'Rotterdam\b', r'Maastricht\b',
        r'Gen[eè]ve\b', r'Lausanne\b', r'B[eâ]le\b',
        r'canton\s+(?:de|du|des)\b',
        r'Suisse\s+(?:du\s+Nord|central|oriental)',
        r'Espace\s+Mittelland',
        r'Varsovie\b', r'Cracovie\b',
        r'Bucarest\b', r'Budapest\b', r'Prague\b',
        r'Bratislava\b', r'Vienne\b(?!\s+\(Is[eè]re)',
        r'Belgrade\b', r'Lisbonne\b',
        r'Copenhague\b', r'Stockholm\b', r'Helsinki\b',
        r'Oslo\b', r'Tallinn\b', r'Moscou\b',
        r'Saint-P[eé]tersbourg',
        r'Jérusalem\b', r'Istanbul\b',
        r'P[eé]kin\b', r'Shanghai\b', r'Hong\s+Kong\b',
        r'Canton\b', r'S[eé]oul\b', r'Osaka\b',
        r'Kyoto\b', r'Hokkaido\b|Hokkaidō\b',
        r'pr[eé]fecture\s+(?:de|d.)\b',
        r'Bangkok\b', r'Jakarta\b', r'Kuala\s+Lumpur\b',
        r'Manille\b', r'Delhi\b', r'Bombay\b',
        r'Rio\s+de\s+Janeiro\b', r'S[aã]o\s+Paulo\b',
        r'Buenos\s+Aires\b', r'Santiago\b', r'Lima\b',
        r'Bogota\b', r'Montevideo\b', r'Caracas\b',
        r'Mexico\b', r'Casablanca\b', r'Marrakech\b',
        r'Alger\b', r'Tunis\b', r'Caire\b',
        r'Dakar\b', r'Kinshasa\b', r'Conakry\b',
        r'Rabat\b', r'Tlemcen\b', r'Oran\b', r'Meknès\b',
        r'Doha\b', r'Duba[ïi]\b', r'Téhéran\b', r'Bakou\b',
        r'Auckland\b', r'Sydney\b', r'Melbourne\b',
        r'Perth\b', r'Brisbane\b', r'Ad[eé]laide\b',
        r'Cayenne\b', r'Kourou\b',
        r'Montr[eé]al\b', r'Johannesbourg\b',
        r'Sotchi\b', r'Nijni\s+Novgorod',

        # US states
        r'Californie\b', r'Floride\b', r'Virginie\b',
        r'Virginie-Occidentale', r'Pennsylvanie\b',
        r'[EÉ]tat\s+de\s+(?:New\s+York|Washington)',
        r'Illinois\b', r'Ohio\b', r'Michigan\b',
        r'G[eé]orgie\s+\([EÉ]tats',
        r'Texas\b', r'Massachusetts\b',
        r'New\s+Jersey\b', r'Caroline\s+du\s+(?:Nord|Sud)',
        r'Louisiane\b', r'Oklahoma\b', r'Alabama\b',
        r'Indiana\b', r'Oregon\b', r'Alaska\b',
        r'Arizona\b', r'Arkansas\b', r'Colorado\b',
        r'Connecticut\b', r'Tennessee\b', r'Kentucky\b',
        r'Minnesota\b', r'Wisconsin\b', r'Missouri\b',
        r'Iowa\b', r'Idaho\b', r'Kansas\b', r'Montana\b',
        r'Nebraska\b', r'Nevada\b', r'Utah\b', r'Maine\b',
        r'Maryland\b', r'Mississippi\b', r'Wyoming\b',
        r'Rhode\s+Island', r'New\s+Hampshire',
        r'New\s+Mexico|Nouveau-Mexique', r'Vermont\b',
        r'Dakota\s+du\s+(?:Nord|Sud)', r'Delaware\b',
        r'Hawa[ïi]i?\b',

        # Canadian provinces
        r'Ontario\b', r'Alberta\b', r'Saskatchewan\b',
        r'Colombie-Britannique', r'Nouvelle-[EÉ]cosse',
        r'Nouveau-Brunswick', r'Manitoba\b',
        r'Terre-Neuve', r'Nunavut\b', r'Yukon\b',
        r'Territoires\s+du\s+Nord-Ouest',
        r'[ÎI]le-du-Prince-[EÉ]douard',
        r'Acadie\b',

        # Quebec regions
        r'Mont[eé]r[eé]gie', r'Laurentides\b',
        r'Mauricie\b', r'Gasp[eé]sie',
        r'Lanaudière\b', r'Estrie\b',
        r'Chaudi[eè]re-Appalaches', r'C[oô]te-Nord',
        r'Abitibi', r'Outaouais\b',
        r'Saguenay', r'Bas-Saint-Laurent',
        r'Centre-du-Qu[eé]bec',
        r'Nord-du-Qu[eé]bec',
        r'Bas-Canada\b',
        r'Qu[eé]bec\s+\(1763',
        r'Nouvelle-France',

        # Brazilian states
        r'Minas\s+Gerais', r'Paran[aá]\b', r'Bahia\b',
        r'Cear[aá]\b', r'Pernambou[ck]\b', r'Goi[aá]s\b',
        r'Santa\s+Catarina', r'Rio\s+Grande',
        r'Maranh[aã]o\b', r'Piau[ií]\b', r'Mato\s+Grosso',
        r'Esp[ií]rito\s+Santo', r'Rond[oô]nia\b',
        r'Roraima\b', r'Sergipe\b', r'Alagoas\b',
        r'Amazonas\b', r'Par[aá]\b(?!\s+\d)', r'Florian[oó]polis',
        r'Brasilia\b', r'District\s+f[eé]d[eé]ral',
        r'[EÉ]tat\s+de\s+(?:São\s+Paulo|Rio)',

        # Other geographical
        r'oc[eé]an\b', r'mer\s+(?:M[eé]diterran[eé]e|Baltique|Adriatique|du\s+Nord)',
        r'lacs?\s+et\s+cours\s+d.eau',
        r'[iî]les\b(?!\s+(?:Salomon|Marshall|Cook|Mariannes|F[eé]ro|Gal[aá]p|Canaries|Bal[eé]aires|Anglo|Caïman|Vierges|Turques|Ryūkyū))',
        r'littoraux', r'fronti[eè]res\b', r'd[eé]serts?\b',
        r'montagne\b',
        r'lieux\s+historiques',

        # Ethnic/cultural groups
        r'Afro-Am[eé]ricains', r'Am[eé]rindiens',
        r'Nord-Am[eé]rindiens', r'Autochtones\s+du\s+Canada',
        r'Berb[eè]res\b', r'S[eé]r[eè]res\b',
        r'Bamilék[eé]s\b', r'M[eé]tis\b',
        r'Franco-(?:Am[eé]ricains|Ontariens)',
        r'Micmacs\b', r'Tatars\b',
        r'Bassa\b', r'Sawa\b', r'Bagratides',

        # French overseas
        r'Guadeloupe\b', r'Martinique\b', r'Guyane\b',
        r'Polyn[eé]sie\b', r'Nouvelle-Cal[eé]donie',
        r'Wallis-et-Futuna', r'Saint-Pierre-et-Miquelon',
        r'Terres\s+australes',
        r'Montserrat\b', r'Bougainville\b',

        # Various places/regions
        r'monde\s+(?:indien|chinois|celtique|arabo|arabe|slave|malais|mongol)',
        r'civilisations?\s+asiatiques',
        r'culture\s+(?:nord-am[eé]ricaine|russe|suisse|ivoirienne)',
        r'bassin\s+minier',
        r'pays\s+(?:de\s+(?:Lorient|Gu[eé]rande|Gex|Hanau|Bitche))',
        r'Côte\s+des\s+Isles',
        r'm[eé]tropole\s+(?:de\s+Lyon|europ[eé]enne\s+de\s+Lille|de\s+sa\s+r[eé]gion)',

        # Misc place-related
        r'oblast\b', r'kra[ïi]\b',
        r'Sib[eé]rie\b', r'Tch[eé]tch[eé]nie',
        r'Transnistrie\b', r'Oss[eé]tie\b',
        r'Haut-Karabagh', r'Abkhazie\b',
        r'espace\s+post-sovi[eé]tique',
        r'r[eé]publique\s+de\s+(?:Car[eé]lie|Deux\s+Nations)',
        r'pays\s+baltes',
        r'Ile\s+de\s+Man|[iî]le\s+de\s+(?:Man|P[aâ]ques)',
        r'territoires?\s+(?:britanniques|du\s+Nord)',
        r'Australie-(?:M[eé]ridionale|Occidentale)',
        r'Nouvelle-Galles\s+du\s+Sud',
        r'Queensland\b', r'Victoria\b', r'Cap-Breton\b',
        r'Bruges\b', r'Macao\b',
        r'Nubie\b',
        r'Portail\s+d.[AÅ]land',
        r'[ÎI]les?\s+(?:Anglo-Normandes|Vierges|Turques|Ca[ïi]mans|Malouines)',
        r'Samoa\s+am[eé]ricaines',
        r'Guam\b',
        r'parc\s+national\s+de\s+(?:Yellowstone|Yosemite)',
        r'[eé]coatlas',
        r'climat\b',
        r'risques?\s+majeurs',
        r'information\s+g[eé]ographique',
        r'cartographie',
        r'd[eé]mographie',
        r'plantes?\s+(?:utiles|du\s+Cameroun)',
        # Additional missing places
        r'Nouvelle-Z[eé]lande',
        r'Afghanistan\b',
        r'R[eé]gion\s+flamande',
        r'Oise\b', r'Loire\b', r'Aube\b',
        r'd[eé]partement\s+(?:de\s+la\s+(?:Manche|Loire)|du)',
        r'Ari[eè]ge\b',
        r'Cr[eè]te\b',
        r'Ath[eè]nes\b', r'Attique\b',
        r'al-Andalus',
        r'[aâ]ge\s+des\s+Vikings',
        r'Cinqui[eè]me\s+R[eé]publique',
        r'La\s+Rioja\b',
        r'Ille-et-Vilaine',
        r'Antilles\b',
        r'Angola\b',
        r'Namur\b',
        r'Bengale', r'Mans\b',
        r'Marches\b', r'Mascareignes\b',
        r'G[oö]teborg\b', r'Orlando\b', r'Oakland\b',
        r'Cap\b', r'Alta[ïi]\b', r'Mad[eè]re\b',
        r'H[oô]\s+Chi\s+Minh', r'Cherbourg\b',
        r'Tasmanie\b', r'Algarve\b',
        r'Berry\b', r'Laval\s+\(Qu[eé]bec',
        r'la\s+France\s+(?:au|d)',
        # Remaining unclassified places
        r'Manche\b', r'Aur[eè]s\b',
        r'[EÉ]rytr[eé]e\b',
        r'Oldenbourg\b', r'Anhalt\b',
        r'Sainte-H[eé]l[eè]ne\b', r'Moravie\b',
        r'Milwaukee\b', r'Toul\b',
        r'Albuquerque\b', r'A[cç]ores\b',
        r'Sainte-Lucie\b', r'Ceuta\b', r'Melilla\b',
        r'Hy[eè]res\b', r'Innsbruck\b',
        r'Ry[uū]ky[uū]\b',
        r'Ko[sš]ice\b', r'Malawi\b', r'L[uü]beck\b',
        r'Sao\s+Tom[eé]', r'Abbeville\b',
        r'Charleville\b', r'Adélaïde\b',
        r'mer\b', r'oc[eé]ans?\b',
        r'Saint-Laurent-du-Maroni',
        r'bassins?\s+et\s+.*fontaines',
        r'Saint-Paul\b',
        r'Territoire\s+de\s+la\s+capitale',
        r'rythr.e\b', r'Bessin\b',
        r'Ch[aâ]lons-en-Champagne',
        r'Skopje\b', r'[ÉE]vreux\b',
    ],

    # ── SCIENCES ──
    'sciences': [
        r'physique\b', r'chimie\b', r'biologie\b',
        r'biologie\s+(?:cellulaire|marine)',
        r'math[eé]matiques\b', r'astronomie\b',
        r'botanique\b', r'zoologie\b',
        r'psychologie\b', r'psychanalyse\b',
        r'philosophie\b', r'philosophie\s+(?:antique|indienne|analytique)',
        r'g[eé]ographie\b(?!\s+suisse)',
        r'arch[eé]ologie\b', r'anthropologie\b',
        r'linguistique\b', r'sociologie\b',
        r'g[eé]ologie\b', r'pal[eé]ontologie\b',
        r'cosmologie\b', r'optique\b',
        r'sciences?\s+quantiques', r'sciences?\s+de\s+la\s+Terre',
        r'sciences?\s+(?:humaines|sociales|des\s+mat[eé]riaux)',
        r'sciences?\s+humaines\s+et\s+sociales',
        r'Sciences?\s+de\s+l.information\s+et\s+bibliothèques',
        r'[eé]cologie\b(?!\s+politique)',
        r'virologie\b', r'microbiologie\b',
        r'biochimie\b', r'g[eé]n[eé]tique\b',
        r'neurosciences\b',
        r'probabilit[eé]s.*statistique',
        r'logique\b',
        r'min[eé]raux.*roches', r'min[eé]ralogie',
        r'entomologie\b', r'ornithologie\b',
        r'ichtyologie\b', r'mycologie\b', r'h[eé]rp[eé]tologie\b',
        r'phycologie\b',
        r'arachnologie\b', r'carcinologie',
        r'mammif[eè]res\b', r'conservation\s+de\s+la\s+nature',
        r'c[eé]tac[eé]s\b', r'f[eé]lins\b', r'canid[eé]s\b',
        r'bovid[eé]s\b', r'ursid[eé]s\b', r'primates\b',
        r'chondrichty[eé]ns\b', r'[eé]chinodermes\b',
        r'mollusques.*malacologie',
        r'ann[eé]lides\b', r'pt[eé]rosaures\b',
        r'pl[eé]siosaures\b', r'dinosaures\b',
        r'cnidaires\b',
        r'm[eé]t[eé]orologie\b', r'volcanisme\b',
        r'sismologie\b',
        r'histoire\s+naturelle', r'pal[eé]obotanique',
        r'histoire\s+des\s+sciences',
        r'histoire\s+de\s+la\s+zoologie',
        r'anatomie\b', r'physiologie\b',
        r'parasitologie\b',
        r'origine.*[eé]volution\s+du\s+vivant',
        r'plan[eè]tes?\s+(?:mineures|Mars|Jupiter|Saturne)',
        r'exoplan[eè]tes', r'Syst[eè]me\s+solaire',
        r'[eé]toiles\b', r'Lune\b',
        r'g[eé]om[eé]trie\b', r'alg[eè]bre\b', r'analyse\b',
        r'Arithm[eé]tique.*th[eé]orie\s+des\s+nombres',
        r'g[eé]od[eé]sie.*g[eé]ophysique',
        r'recherche\s+scientifique',
        r'scepticisme\s+scientifique',
        r'bio[eé]thique',
        r'[eé]cotoxicologie',
        r'sciences\b',
        r'vie\s+extraterrestre.*ufologie',
        r'roses?\s+et\s+.*rosiers',
        r'bonsaïs\b',
        r'eau\b(?!\s+de)',
        r'm[eé]galithisme',
        r'g[eé]ographie\s+suisse',
        r'abysses\b',
        r'aquariophilie',
        r'ontologie\b',
        r'oeil\b|[œ]il\b',
    ],

    # ── PERSONNE ──
    'personne': [
        r'biographie\b', r'prix\s+Nobel',
        r'Beatles\b', r'Queen\b', r'Pink\s+Floyd',
        r'Deep\s+Purple', r'Michael\s+Jackson',
        r'Bob\s+Dylan', r'Dalida\b', r'Madonna\b',
        r'Johnny\s+Hallyday', r'David\s+Bowie',
        r'Beyonc[eé]\b', r'Whitney\s+Houston',
        r'Eminem\b', r'Rihanna\b', r'Taylor\s+Swift',
        r'Elvis\s+Presley',
        r'Ludwig\s+van\s+Beethoven', r'Franz\s+Liszt',
        r'Friedrich\s+Nietzsche',
        r'Thomas\s+d.Aquin',
        r'Martin\s+Heidegger',
        r'Henri\s+Matisse',
        r'Ankama\b',
        r'Acad[eé]mie\s+fran[cç]aise',
    ],
}


def normalize_name(name):
    """Normalize a portail name for matching: NFC + replace typographic quotes."""
    n = unicodedata.normalize('NFC', name)
    # Replace typographic apostrophes/quotes with ASCII
    n = n.replace('\u2019', "'").replace('\u2018', "'")
    n = n.replace('\u201c', '"').replace('\u201d', '"')
    # Remove zero-width chars and other invisible chars
    n = re.sub(r'[\u200e\u200f\u200b\u200c\u200d\ufeff]', '', n)
    return n.strip()


def classify_portail(portail_name):
    """Classify a single portail into a category. Returns category key or None."""
    name = normalize_name(portail_name)
    for cat_key, patterns in RULES.items():
        for pattern in patterns:
            try:
                if re.search(pattern, name, re.IGNORECASE):
                    return cat_key
            except re.error:
                continue
    return None


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Build comprehensive _portail-map.json')
    parser.add_argument('--dry-run', action='store_true', help='Preview without writing')
    args = parser.parse_args()

    # Load all portails
    if not os.path.exists(ALL_PORTAILS_PATH):
        print('ERROR: %s not found' % ALL_PORTAILS_PATH)
        print('Run scan-portails.py first.')
        sys.exit(1)

    with open(ALL_PORTAILS_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)

    portails = data.get('portails', {})
    print('Loaded %d portails from _all-portails.json' % len(portails))

    # Classify each portail
    result = {
        '_meta': {
            'description': 'Mapping des portails Wikipedia FR vers les 6 categories Curiosità',
            'usage': 'Pour chaque portail extrait d\'un article, chercher un mot-cle correspondant. La categorie avec le plus de correspondances gagne.',
            'updated': '2026-03-07',
            'total_portails': len(portails),
        },
        'arts': [],
        'sciences': [],
        'societe': [],
        'espace-temps': [],
        'technologies': [],
        'personne': [],
    }

    unclassified = []
    classified_count = 0
    cat_counts = {k: 0 for k in result if k != '_meta'}

    # Skip known junk portails (malformed extractions)
    skip_portails = set()
    for name in portails:
        n = name.strip()
        if n in ('section', 'la') or re.match(r'^Portail\s+(du|de|des|d.)$', n):
            skip_portails.add(name)

    for portail_name, freq in portails.items():
        if portail_name in skip_portails:
            continue

        cat = classify_portail(portail_name)
        if cat:
            # Add the portail name as a keyword for matching
            # We store the original portail name for exact matching
            result[cat].append(portail_name)
            classified_count += 1
            cat_counts[cat] += 1
        else:
            unclassified.append((portail_name, freq))

    # Sort each category's keywords
    for key in result:
        if key != '_meta' and isinstance(result[key], list):
            result[key].sort()

    # Stats
    total = len(portails) - len(skip_portails)
    print()
    print('=' * 60)
    print('  CLASSIFICATION RESULTS')
    print('=' * 60)
    for cat, count in sorted(cat_counts.items(), key=lambda x: -x[1]):
        print('  %-15s: %4d portails' % (cat, count))
    print('  %-15s: %4d portails' % ('UNCLASSIFIED', len(unclassified)))
    print('  %-15s: %4d / %4d  (%.1f%%)' % ('TOTAL CLASSIFIED', classified_count, total, classified_count / total * 100 if total else 0))
    print('=' * 60)

    if unclassified:
        print()
        print('  Unclassified portails (top 30):')
        for name, freq in sorted(unclassified, key=lambda x: -x[1])[:30]:
            print('    [%4d] %s' % (freq, name))

    # Update meta with counts
    result['_meta']['classified'] = classified_count
    result['_meta']['unclassified'] = len(unclassified)
    result['_meta']['categories'] = cat_counts

    if not args.dry_run:
        with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print()
        print('  Written to: %s' % OUTPUT_PATH)
    else:
        print()
        print('  [DRY RUN] Would write to: %s' % OUTPUT_PATH)


if __name__ == '__main__':
    main()
