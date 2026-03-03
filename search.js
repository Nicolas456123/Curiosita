// ══════════════════════════════════════════════════════
//  Curiosita — Search + Tree Navigation
//  Index de recherche avec fallback dynamique
//  Extrait de index.html pour meilleure mise en cache
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  let searchData = [];
  let searchReady = false;

  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  if (!input || !results) return;

  // Normalize accented characters for fuzzy matching
  function normalize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  // Extract the subject name from a *-page.html title
  function extractTitle(doc) {
    const t = doc.querySelector('title')?.textContent || '';
    return t.split('—')[0].trim();
  }

  // Resolve a relative href against a base path
  function resolveUrl(href, basePath) {
    if (href.startsWith('/') || href.startsWith('http')) return href;
    const dir = basePath.includes('/') ? basePath.substring(0, basePath.lastIndexOf('/') + 1) : '';
    return dir + href;
  }

  // Parse .course-card links from a page document
  function extractCourseCards(doc, basePath) {
    const cards = [];
    doc.querySelectorAll('.course-card[href]').forEach(card => {
      const href = card.getAttribute('href');
      const name = card.querySelector('h3')?.textContent?.trim();
      const desc = card.querySelector('p')?.textContent?.trim() || '';
      if (name && href) {
        const url = resolveUrl(href, basePath);
        cards.push({ name, desc, url });
      }
    });
    return cards;
  }

  // Fetch and parse an HTML page
  async function fetchDoc(url) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.status);
    const html = await resp.text();
    return new DOMParser().parseFromString(html, 'text/html');
  }

  // ── Primary: load pre-built search-index.json ──
  async function loadStaticIndex() {
    try {
      const resp = await fetch('search-index.json');
      if (!resp.ok) throw new Error(resp.status);
      const data = await resp.json();
      if (Array.isArray(data) && data.length > 0) {
        searchData = data;
        searchReady = true;
        // Cache in sessionStorage
        try {
          sessionStorage.setItem('curiosita_search', JSON.stringify({ data: data, ts: Date.now() }));
        } catch(e) {}
        return true;
      }
    } catch(e) {}
    return false;
  }

  // ── Fallback: build index dynamically by scanning pages ──
  async function buildSearchIndexDynamic() {
    const index = [];

    // 1. Discover grand theme pages from theme-card links
    const themeLinks = [];
    document.querySelectorAll('.theme-card[href]').forEach(card => {
      const href = card.getAttribute('href');
      if (href && href.endsWith('.html')) {
        const icon = card.querySelector('.theme-icon')?.textContent || '📖';
        const themeName = card.querySelector('.theme-name')?.textContent?.trim() || '';
        themeLinks.push({ href, icon, themeName });
      }
    });

    // 2. Fetch grand theme pages and discover subject pages
    const subjectLinks = [];
    await Promise.allSettled(themeLinks.map(async (t) => {
      index.push({ name: t.themeName, cat: 'Curiosita', url: t.href, type: 'thème', icon: t.icon, keywords: t.themeName });
      try {
        const doc = await fetchDoc(t.href);
        const cards = extractCourseCards(doc, t.href);
        for (const card of cards) {
          if (card.url.endsWith('-page.html')) {
            subjectLinks.push({ href: card.url, icon: t.icon, themeName: t.themeName, subjectHint: card.name });
          }
        }
      } catch(e) {}
    }));

    // 3. Fetch all subject pages in parallel
    const subjectResults = await Promise.allSettled(
      subjectLinks.map(async (s) => {
        const doc = await fetchDoc(s.href);
        const subjectName = s.subjectHint || extractTitle(doc);
        index.push({ name: subjectName, cat: s.themeName, url: s.href, type: 'matière', icon: s.icon, keywords: `${s.themeName} ${subjectName}` });
        const hubs = extractCourseCards(doc, s.href);
        return { subjectName, icon: s.icon, hubs, themeName: s.themeName };
      })
    );

    // 4. Collect all hubs and fetch them in parallel
    const hubFetches = [];
    for (const result of subjectResults) {
      if (result.status !== 'fulfilled') continue;
      const { subjectName, icon, hubs, themeName } = result.value;
      for (const hub of hubs) {
        index.push({ name: hub.name, cat: subjectName, url: hub.url, type: 'domaine', icon, keywords: `${subjectName} ${hub.name} ${hub.desc}` });
        hubFetches.push(
          fetchDoc(hub.url).then(hubDoc => {
            const courses = extractCourseCards(hubDoc, hub.url);
            for (const course of courses) {
              index.push({ name: course.name, cat: `${subjectName} › ${hub.name}`, url: course.url, type: 'cours', icon, keywords: `${subjectName} ${hub.name} ${course.name} ${course.desc}` });
            }
          }).catch(() => {})
        );
      }
    }

    await Promise.allSettled(hubFetches);

    searchData = index;
    searchReady = true;
    try {
      sessionStorage.setItem('curiosita_search', JSON.stringify({ data: index, ts: Date.now() }));
    } catch(e) {}
  }

  // ── Main init: try static JSON first, then fallback to dynamic ──
  async function buildSearchIndex() {
    // Check sessionStorage cache (valid 10 minutes)
    const cached = sessionStorage.getItem('curiosita_search');
    if (cached) {
      try {
        const { data, ts } = JSON.parse(cached);
        if (Date.now() - ts < 10 * 60 * 1000) {
          searchData = data;
          searchReady = true;
          return;
        }
      } catch(e) {}
    }

    // Try pre-built JSON index
    const loaded = await loadStaticIndex();
    if (loaded) return;

    // Fallback: scan pages dynamically
    await buildSearchIndexDynamic();
  }

  // Start building index immediately
  buildSearchIndex();

  function fillSearch(text) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
    input.focus();
  }
  // Expose for tag buttons
  window.fillSearch = fillSearch;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) { results.classList.remove('visible'); return; }

    if (!searchReady) {
      results.innerHTML = '<div class="search-loading">Chargement de l\'index…</div>';
      results.classList.add('visible');
      return;
    }

    const qn = normalize(q);
    const words = qn.split(/\s+/).filter(Boolean);

    const scored = searchData.map(d => {
      const nameN = normalize(d.name);
      const kwN = normalize(d.keywords || '');
      let score = 0;
      for (const w of words) {
        if (nameN.includes(w)) score += 10;
        else if (kwN.includes(w)) score += 3;
      }
      if (nameN === qn) score += 50;
      if (nameN.startsWith(qn)) score += 20;
      return { ...d, score };
    }).filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    if (!scored.length) {
      results.innerHTML = '<div class="search-loading">Aucun résultat pour « ' + q + ' »</div>';
      results.classList.add('visible');
      return;
    }

    results.innerHTML = scored.map(d => `
      <a href="${d.url}" class="result-item">
        <span class="result-icon">${d.icon}</span>
        <span class="result-name">${d.name}</span>
        <span class="result-meta">
          <span class="result-cat">${d.cat}</span>
          <span class="result-type">${d.type}</span>
        </span>
      </a>
    `).join('');
    results.classList.add('visible');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) results.classList.remove('visible');
  });

  // ── Card entrance animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 0.05) + 's';
        entry.target.style.animation = 'fadeUp 0.5s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.theme-card').forEach(card => observer.observe(card));

  // ── Expandable tree on theme cards ──

  function buildTreeForTheme(themeName) {
    const subjects = searchData.filter(d => d.type === 'matière' && d.cat === themeName);
    return subjects.map(subject => {
      const domains = searchData.filter(d => d.type === 'domaine' && d.cat === subject.name);
      const domainTree = domains.map(domain => {
        const courses = searchData.filter(d => d.type === 'cours' && d.cat === `${subject.name} › ${domain.name}`);
        return { ...domain, children: courses };
      });
      return { ...subject, children: domainTree };
    });
  }

  function renderCourse(c) {
    return `<div class="tree-leaf"><a href="${c.url}" class="tree-link tree-course-link"><span class="tree-leaf-bullet">•</span>${c.name}</a></div>`;
  }

  function renderDomain(d) {
    const n = d.children.length;
    return `<div class="tree-node tree-domain">
      <div class="tree-node-header" data-toggle>
        <span class="tree-chevron">&#9654;</span>
        <a href="${d.url}" class="tree-link tree-node-name">${d.name}</a>
        <span class="tree-node-count">${n} cours</span>
      </div>
      <div class="tree-children" style="display:none">${d.children.map(renderCourse).join('')}</div>
    </div>`;
  }

  function renderSubject(s) {
    const n = s.children.length;
    return `<div class="tree-node tree-subject">
      <div class="tree-node-header" data-toggle>
        <span class="tree-chevron">&#9654;</span>
        <span class="tree-node-icon">${s.icon}</span>
        <a href="${s.url}" class="tree-link tree-node-name">${s.name}</a>
        <span class="tree-node-count">${n} domaine${n > 1 ? 's' : ''}</span>
      </div>
      <div class="tree-children" style="display:none">${s.children.map(renderDomain).join('')}</div>
    </div>`;
  }

  function expandCard(card) {
    const themeName = card.querySelector('.theme-name').textContent.trim();
    const themeUrl = card.getAttribute('href');

    card.classList.add('expanded');

    const container = document.createElement('div');
    container.className = 'tree-container';

    if (!searchReady) {
      container.innerHTML = `<div class="tree-header"><a href="${themeUrl}" class="tree-link tree-theme-link">Voir le thème complet →</a><button class="tree-close" aria-label="Fermer">✕</button></div><div class="tree-body"><div class="tree-empty">Chargement de l'arborescence…</div></div>`;
      card.appendChild(container);
      requestAnimationFrame(() => { container.classList.add('open'); container.style.maxHeight = container.scrollHeight + 'px'; container.style.opacity = '1'; });
      const iv = setInterval(() => {
        if (searchReady) { clearInterval(iv); fillTree(container, themeName, themeUrl); }
      }, 300);
    } else {
      fillTree(container, themeName, themeUrl);
      card.appendChild(container);
      requestAnimationFrame(() => { container.classList.add('open'); container.style.maxHeight = container.scrollHeight + 'px'; container.style.opacity = '1'; });
    }

    setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  }

  function fillTree(container, themeName, themeUrl) {
    const tree = buildTreeForTheme(themeName);
    container.innerHTML = `<div class="tree-header"><a href="${themeUrl}" class="tree-link tree-theme-link">Voir le thème complet →</a><button class="tree-close" aria-label="Fermer">✕</button></div><div class="tree-body">${tree.length ? tree.map(renderSubject).join('') : '<div class="tree-empty">Aucune discipline disponible pour le moment.</div>'}</div>`;
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

  const themesGrid = document.querySelector('.themes-grid');
  if (themesGrid) {
    themesGrid.addEventListener('click', function(e) {
      if (e.target.closest('.tree-close')) {
        e.preventDefault();
        e.stopPropagation();
        collapseCard(e.target.closest('.theme-card'));
        return;
      }

      if (e.target.closest('.tree-link')) return;

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
