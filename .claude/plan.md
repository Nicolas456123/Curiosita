# Plan : Navigation par portails Wikipedia → articles

## Problème actuel
- Le menu montre 6 catégories avec sous-catégories
- Cliquer sur une sous-catégorie remplit la recherche — on ne voit pas les articles directement
- Pas de navigation arborescente jusqu'aux articles

## Objectif
Depuis le menu : **Catégorie → Sous-catégorie / Portail → Liste d'articles cliquables**

## Approche

### 1. Index portail → articles (côté serveur)
- Au démarrage, `serve.py` lit le champ `portails` de chaque article (déjà en mémoire dans le search engine)
- Construit un index inversé : `{portail: [slug1, slug2, ...]}`
- Nouvel endpoint : `/api/portail?name=cinema&limit=50&offset=0`
- Renvoie les articles de ce portail avec titre et slug

**Changement** : Modifier `serve.py` pour extraire les portails lors du scan des articles. Actuellement le search engine ne lit que le slug/titre — il faudrait aussi lire `portails` et `discipline` de chaque JSON.

**MAIS** : Lire 2.6M fichiers JSON au démarrage est trop lent (~heures). Alternative :
- Construire un **index léger** offline : `tools/build-portail-index.py`
- Produit `assets/content/_portail-index.json` : `{portail_name: [slug1, slug2, ...], ...}`
- Le serveur charge cet index au démarrage (rapide, 1 fichier)

### 2. Mettre à jour le tree dans search.js
- Quand on clique sur une sous-catégorie, au lieu de `fillSearch()`, fetch `/api/portail?name=xxx`
- Affiche la liste d'articles comme des liens cliquables vers `page.html?s=slug`
- Pagination si > 50 articles

### 3. Fichiers modifiés
1. **`tools/build-portail-index.py`** (NOUVEAU) — Scanne les articles, construit l'index portail → articles
2. **`tools/serve.py`** — Charger `_portail-index.json` + endpoint `/api/portail`
3. **`assets/search.js`** — Clic sous-catégorie → affiche articles (au lieu de fillSearch)
4. **`index.html`** — CSS pour la liste d'articles dans l'arbre

### 4. Étapes
1. Créer `build-portail-index.py` et lancer le build
2. Ajouter l'endpoint `/api/portail` dans serve.py
3. Modifier search.js pour afficher les articles dans le tree
4. Tester navigation complète
