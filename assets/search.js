// ══════════════════════════════════════════════════════
//  Curiosità — Search + Category Tree Navigation
//  Uses _categories.json for hierarchical browsing
//  Uses /api/search for text search (server-side)
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  let categoriesData = null;
  let iconMap = {};
  let apiStats = null;

  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  if (!input || !results) return;

  // Normalize accented characters for fuzzy matching
  function normalize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  // ── Load _categories.json (category tree) ──
  async function loadCategories() {
    if (categoriesData) return categoriesData;
    try {
      const resp = await fetch('assets/content/_categories.json?v=2');
      if (!resp.ok) throw new Error(resp.status);
      const raw = await resp.json();
      categoriesData = raw.tree || raw;
      for (const [key, cat] of Object.entries(categoriesData)) {
        iconMap[key] = cat.icon || '\ud83d\udcd6';
      }
      return categoriesData;
    } catch (e) {
      console.warn('Failed to load _categories.json:', e);
      return {};
    }
  }

  // ── Load stats from server API ──
  async function loadStats() {
    try {
      const resp = await fetch('/api/stats');
      if (!resp.ok) throw new Error(resp.status);
      apiStats = await resp.json();
    } catch (e) {
      console.warn('Failed to load /api/stats:', e);
    }
  }

  // ── Main init ──
  async function init() {
    await loadCategories();
    generateThemeCards();
    await loadStats();
  }

  init();

  function fillSearch(text) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
    input.focus();
  }
  window.fillSearch = fillSearch;

  // ── Search input handler (debounced API call) ──
  let searchTimer = null;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) {
      results.classList.remove('visible');
      clearTimeout(searchTimer);
      return;
    }

    clearTimeout(searchTimer);
    results.innerHTML = '<div class="search-loading">Recherche\u2026</div>';
    results.classList.add('visible');

    searchTimer = setTimeout(() => {
      const currentQ = q;
      fetch('/api/search?q=' + encodeURIComponent(q) + '&limit=12')
        .then(r => r.json())
        .then(data => {
          // Ignore stale results
          if (input.value.trim() !== currentQ) return;
          renderResults(data, currentQ);
        })
        .catch(() => {
          results.innerHTML = '<div class="search-loading">Erreur de recherche</div>';
        });
    }, 200);
  });

  function renderResults(data, q) {
    if (!data.length) {
      results.innerHTML = '<div class="search-loading">Aucun r\u00e9sultat pour \u00ab ' + q + ' \u00bb</div>';
      results.classList.add('visible');
      return;
    }

    results.innerHTML = data.map(d => {
      const icon = d.icon || iconMap[d.disc] || '\ud83d\udcd6';
      return `<a href="page.html?s=${encodeURIComponent(d.id)}" class="result-item">
        <span class="result-icon">${icon}</span>
        <span class="result-name">${d.t}</span>
        <span class="result-meta">
          <span class="result-cat">${d.cat || ''}</span>
          <span class="result-type">page</span>
        </span>
      </a>`;
    }).join('');
    results.classList.add('visible');
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) results.classList.remove('visible');
  });

  // ══════════════════════════════════════════════════════
  //  CATEGORY TREE — built from _categories.json
  // ══════════════════════════════════════════════════════

  // Format a slug into a readable group title
  function formatGroupName(slug) {
    return slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  // Build tree structure for a category from _categories.json
  function buildTreeForCategory(catKey) {
    if (!categoriesData || !categoriesData[catKey]) return [];
    const cat = categoriesData[catKey];
    const subs = cat.subs || {};

    // Group subcategories by parent (if any)
    const groups = {};
    const ungrouped = [];
    const groupOrder = [];

    for (const [key, sub] of Object.entries(subs)) {
      if (sub.parent) {
        if (!groups[sub.parent]) {
          groups[sub.parent] = [];
          groupOrder.push(sub.parent);
        }
        groups[sub.parent].push({ key, label: sub.label });
      } else {
        ungrouped.push({ key, label: sub.label });
      }
    }

    // Build result: grouped items first, then ungrouped
    const nodes = [];

    for (const groupKey of groupOrder) {
      nodes.push({
        label: formatGroupName(groupKey),
        isGroup: true,
        children: groups[groupKey]
      });
    }

    // Ungrouped items as flat list
    for (const item of ungrouped) {
      nodes.push(item);
    }

    return nodes;
  }

  // Count articles per category from API stats
  function countArticlesForCategory(catKey) {
    if (!apiStats || !apiStats.categories) return 0;
    const cat = apiStats.categories[catKey];
    return cat ? cat.count : 0;
  }

  // Render a subcategory leaf (e.g. "Mathématiques")
  function renderSubLeaf(sub) {
    return `<div class="tree-leaf">
      <a href="#" class="tree-link tree-course-link" onclick="fillSearch('${sub.label.replace(/'/g, "\\'")}'); return false;">
        <span class="tree-leaf-bullet">\u2022</span>${sub.label}
      </a>
    </div>`;
  }

  // Render a group node (e.g. "Sciences formelles" with children)
  function renderGroupNode(group) {
    const cnt = group.children.length;
    return `<div class="tree-node tree-subject">
      <div class="tree-node-header" data-toggle>
        <span class="tree-chevron">&#9654;</span>
        <span class="tree-node-name tree-link">${group.label}</span>
        <span class="tree-node-count">${cnt} sous-cat.</span>
      </div>
      <div class="tree-children" style="display:none">
        ${group.children.map(renderSubLeaf).join('')}
      </div>
    </div>`;
  }

  // ── Theme cards generation from _categories.json ──

  const categoryDescriptions = {
    'arts': 'Architecture, cin\u00e9ma, litt\u00e9rature, musique, peinture, photographie, sculpture et arts du spectacle',
    'sciences': 'Math\u00e9matiques, physique, chimie, biologie, histoire, philosophie, psychologie et toutes les sciences',
    'societe': 'Droit, politique, religion, sport, sant\u00e9, \u00e9ducation, m\u00e9dias et vie en soci\u00e9t\u00e9',
    'espace-temps': 'Chronologie, lieux, pays, villes, continents et rep\u00e8res spatio-temporels',
    'technologies': 'Informatique, ing\u00e9nierie, \u00e9nergie, transports, robotique et innovations techniques',
    'personne': 'Biographies par m\u00e9tier, nationalit\u00e9, p\u00e9riode historique et secteur d\'activit\u00e9'
  };

  function generateThemeCards() {
    const grid = document.getElementById('themesGrid');
    if (!grid || !categoriesData) return;

    // Build cards HTML
    let html = '';
    for (const [key, cat] of Object.entries(categoriesData)) {
      const subsKeys = Object.keys(cat.subs || {});
      const topSubs = subsKeys.slice(0, 6).map(k => cat.subs[k].label);
      const desc = categoryDescriptions[key] || topSubs.join(', ');

      html += `<a href="#" class="theme-card" data-cat="${key}" style="--card-accent: ${cat.accent}">
        <div class="theme-arrow">\u2192</div>
        <span class="theme-icon">${cat.icon || '\ud83d\udcd6'}</span>
        <div class="theme-name">${cat.label}</div>
        <p class="theme-desc">${desc}</p>
        <div class="theme-topics">
          ${topSubs.map(s => `<span class="topic-chip">${s}</span>`).join('')}
        </div>
      </a>`;
    }

    grid.innerHTML = html;

    // Observe cards for entrance animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = (i * 0.05) + 's';
          entry.target.style.animation = 'fadeUp 0.5s ease both';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    grid.querySelectorAll('.theme-card').forEach(card => observer.observe(card));
  }

  // ── Expand / collapse cards ──

  function expandCard(card) {
    const catKey = card.getAttribute('data-cat');
    if (!catKey) return;

    card.classList.add('expanded');

    const container = document.createElement('div');
    container.className = 'tree-container';

    fillTree(container, catKey);
    card.appendChild(container);
    requestAnimationFrame(() => {
      container.classList.add('open');
      container.style.maxHeight = container.scrollHeight + 'px';
      container.style.opacity = '1';
    });

    setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  }

  function fillTree(container, catKey) {
    const tree = buildTreeForCategory(catKey);
    const catMeta = categoriesData[catKey] || {};
    const count = countArticlesForCategory(catKey);
    const countLabel = count > 0 ? ` <span class="tree-article-count">${count.toLocaleString('fr-FR')} article${count > 1 ? 's' : ''}</span>` : '';

    let bodyHtml = '';
    if (tree.length === 0) {
      bodyHtml = '<div class="tree-empty">Aucune sous-cat\u00e9gorie disponible.</div>';
    } else {
      bodyHtml = tree.map(node => {
        if (node.isGroup) {
          return renderGroupNode(node);
        }
        return renderSubLeaf(node);
      }).join('');
    }

    container.innerHTML = `
      <div class="tree-header">
        <span class="tree-header-title">${catMeta.label || catKey}${countLabel}</span>
        <button class="tree-close" aria-label="Fermer">\u2715</button>
      </div>
      <div class="tree-body">${bodyHtml}</div>`;

    container.style.maxHeight = container.scrollHeight + 'px';
  }

  function collapseCard(card) {
    const container = card.querySelector('.tree-container');
    if (container) {
      container.style.maxHeight = '0';
      container.style.opacity = '0';
      container.classList.remove('open');
      container.addEventListener('transitionend', () => container.remove(), { once: true });
    }
    card.classList.remove('expanded');
  }

  function updateTreeHeight(el) {
    const container = el.closest('.tree-container');
    if (container) container.style.maxHeight = container.scrollHeight + 'px';
  }

  // ── Event delegation for theme grid ──
  const themesGrid = document.querySelector('.themes-grid');
  if (themesGrid) {
    themesGrid.addEventListener('click', function (e) {
      // Close button
      if (e.target.closest('.tree-close')) {
        e.preventDefault();
        e.stopPropagation();
        collapseCard(e.target.closest('.theme-card'));
        return;
      }

      // Tree links (search fill)
      if (e.target.closest('.tree-link')) return;

      // Tree node toggle (expand/collapse group)
      const toggleHeader = e.target.closest('[data-toggle]');
      if (toggleHeader) {
        e.preventDefault();
        e.stopPropagation();
        const node = toggleHeader.closest('.tree-node');
        const children = node.querySelector('.tree-children');
        const chevron = toggleHeader.querySelector('.tree-chevron');
        if (children.style.display === 'none') {
          children.style.display = 'block';
          chevron.classList.add('open');
        } else {
          children.style.display = 'none';
          chevron.classList.remove('open');
        }
        updateTreeHeight(node);
        return;
      }

      // Theme card toggle (expand/collapse entire tree)
      const card = e.target.closest('.theme-card');
      if (!card) return;
      e.preventDefault();

      if (card.classList.contains('expanded')) {
        collapseCard(card);
        return;
      }

      const prev = themesGrid.querySelector('.theme-card.expanded');
      if (prev) collapseCard(prev);

      expandCard(card);
    });
  }
})();
