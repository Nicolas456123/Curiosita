// ══════════════════════════════════════════════════════
//  Curiosità — SR Progress Dashboard
//  Onglet Progrès : courbe de l'oubli, prévisions,
//  maturité, heatmap, cartes en danger
//  Depends: sr-engine.js (SR)
// ══════════════════════════════════════════════════════

const SRProgress = (function () {
  'use strict';

  function render() {
    const el = document.querySelector('#progress-content');
    if (!el) return;

    const stats = SR.getStats();
    if (stats.total === 0) {
      el.innerHTML = buildEmpty();
      return;
    }

    el.innerHTML = [
      buildRetentionOverview(),
      buildMasteryTree(),
      buildForgettingCurve(),
      buildForecast(),
      buildMaturity(),
      buildHeatmap365(),
      buildBadges(),
      buildAtRisk(),
      '<div id="mt-center-slot"></div>'
    ].join('');

    initHeatmapTooltips();

    // Memory training center
    if (typeof MemoryTraining !== 'undefined') {
      MemoryTraining.renderCenter(document.getElementById('mt-center-slot'));
    }
  }

  // ── Theme → Disciplines mapping ──
  const THEME_DISCIPLINES = {
    'sciences-exactes': { label: 'Sciences exactes & Informatique', icon: '\uD83D\uDD2C',
      disciplines: ['maths','informatique','physique','chimie','statistiques','logique','python'] },
    'sciences-nature': { label: 'Sciences de la nature', icon: '\uD83C\uDF31',
      disciplines: ['biologie','botanique-zoologie','astronomie','terre','ecologie','agriculture','sante','environnement'] },
    'sciences-humaines': { label: 'Sciences humaines & sociales', icon: '\uD83C\uDF0D',
      disciplines: ['histoire','psychologie','economie','sociologie','geographie','anthropologie','neurosciences'] },
    'lettres-langues': { label: 'Lettres, Langues & Philosophie', icon: '\uD83D\uDCDA',
      disciplines: ['philosophie','litterature-fr','litterature-monde','linguistique','langues','rhetorique'] },
    'arts-culture': { label: 'Arts & Culture', icon: '\uD83C\uDFA8',
      disciplines: ['arts','musique','cinema','spectacle','design','histoire-art'] },
    'droit-politique': { label: 'Droit, Politique & Soci\u00e9t\u00e9', icon: '\u2696\uFE0F',
      disciplines: ['droit','sciences-po','relations-internationales','civique','communication'] },
    'savoir-faire': { label: 'Savoir-faire & Vie pratique', icon: '\uD83D\uDD27',
      disciplines: ['artisanat','cuisine','ingenierie','gestion'] }
  };

  function extractDisc(source) {
    if (!source) return null;
    const m = source.match(/\/(?:pages\/)?([^/]+)\//);
    return m ? m[1] : null;
  }

  function computeMastery() {
    const cards = SR.getAllCards();
    const byDisc = {};
    cards.forEach(c => {
      const disc = (c.tags && c.tags[0]) || extractDisc(c.source);
      if (!disc) return;
      if (!byDisc[disc]) byDisc[disc] = { total: 0, mastered: 0 };
      byDisc[disc].total++;
      if (c.repetition >= 6) byDisc[disc].mastered++;
    });
    return byDisc;
  }

  function masteryColor(pct) {
    if (pct >= 75) return '#66bb6a';
    if (pct >= 50) return '#fdd835';
    if (pct >= 25) return '#ffa726';
    return '#ef5350';
  }

  // ── Empty state ──
  function buildEmpty() {
    return `
      <div class="sr-p-empty">
        <div class="sr-p-empty-icon">📊</div>
        <h3>Pas encore de données</h3>
        <p>Ajoute des cartes depuis l'onglet "Ajouter" puis révise-les pour voir tes statistiques de progression ici.</p>
      </div>`;
  }

  // ── A. Retention Overview ──
  function buildRetentionOverview() {
    const ret = SR.getRetentionEstimate();
    const stats = SR.getStats();
    const retColor = ret.overall >= 80 ? 'var(--sr-success)' :
                     ret.overall >= 60 ? 'var(--sr-hard)' : 'var(--sr-fail)';

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Rétention estimée</h3>
        <p class="sr-p-desc">Estimation basée sur la courbe de l'oubli d'Ebbinghaus et tes intervalles de révision.</p>
        <div class="sr-p-stats-row">
          <div class="sr-p-stat">
            <div class="sr-p-stat-val" style="color:${retColor}">${ret.overall}%</div>
            <div class="sr-p-stat-lbl">Rétention globale</div>
          </div>
          <div class="sr-p-stat">
            <div class="sr-p-stat-val" style="color:var(--sr-fail)">${ret.atRisk}</div>
            <div class="sr-p-stat-lbl">Cartes en danger</div>
          </div>
          <div class="sr-p-stat">
            <div class="sr-p-stat-val">${stats.total}</div>
            <div class="sr-p-stat-lbl">Cartes totales</div>
          </div>
        </div>
      </div>`;
  }

  // ── B. Forgetting Curve SVG ──
  function buildForgettingCurve() {
    const W = 600, H = 280, PAD = 45;
    const PW = W - 2 * PAD, PH = H - 2 * PAD;

    // Theoretical decay (no review) — S = 1 day
    let noReviewPath = '';
    for (let t = 0; t <= 90; t++) {
      const R = Math.exp(-t / 1);
      const x = PAD + (t / 90) * PW;
      const y = PAD + (1 - R) * PH;
      noReviewPath += (t === 0 ? 'M ' : ' L ') + x.toFixed(1) + ' ' + y.toFixed(1);
    }

    // Spaced repetition curve — reviews reset retention
    const reviewDays = [0, 1, 7, 22, 57];
    const stabilities = [1, 6, 15, 35, 60];
    let srPath = '';
    for (let t = 0; t <= 90; t += 0.5) {
      let activeReview = 0;
      for (let r = reviewDays.length - 1; r >= 0; r--) {
        if (t >= reviewDays[r]) { activeReview = r; break; }
      }
      const daysSinceReview = t - reviewDays[activeReview];
      const S = stabilities[activeReview];
      const R = Math.exp(-daysSinceReview / S);
      const x = PAD + (t / 90) * PW;
      const y = PAD + (1 - R) * PH;
      srPath += (t === 0 ? 'M ' : ' L ') + x.toFixed(1) + ' ' + y.toFixed(1);
    }

    // Grid
    let grid = '';
    [0, 25, 50, 75, 100].forEach(pct => {
      const y = PAD + (1 - pct / 100) * PH;
      grid += `<line x1="${PAD}" y1="${y}" x2="${W - PAD}" y2="${y}" stroke="var(--sr-border)" stroke-dasharray="4"/>`;
      grid += `<text x="${PAD - 8}" y="${y + 4}" text-anchor="end" fill="var(--muted)" font-size="10" font-family="DM Sans,sans-serif">${pct}%</text>`;
    });

    // Day labels
    [0, 15, 30, 45, 60, 75, 90].forEach(d => {
      const x = PAD + (d / 90) * PW;
      grid += `<text x="${x}" y="${H - 8}" text-anchor="middle" fill="var(--muted)" font-size="10" font-family="DM Sans,sans-serif">J${d}</text>`;
    });

    // Review markers
    let markers = '';
    reviewDays.forEach((d, i) => {
      if (d === 0) return;
      const x = PAD + (d / 90) * PW;
      markers += `<line x1="${x}" y1="${PAD}" x2="${x}" y2="${PAD + PH}" stroke="var(--sr-success)" stroke-dasharray="3" opacity="0.3"/>`;
      markers += `<circle cx="${x}" cy="${PAD}" r="3.5" fill="var(--sr-success)"/>`;
    });

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Courbe de l'oubli</h3>
        <p class="sr-p-desc">La courbe rouge montre l'oubli naturel (Ebbinghaus). La courbe dorée montre comment la répétition espacée maintient la rétention en réactivant la mémoire à chaque révision.</p>
        <div class="sr-p-chart-wrap">
          <svg viewBox="0 0 ${W} ${H}" class="sr-p-svg" role="img" aria-label="Courbe de l'oubli">
            ${grid}
            <path d="${noReviewPath}" fill="none" stroke="var(--sr-fail)" stroke-width="2" opacity="0.6"/>
            <path d="${srPath}" fill="none" stroke="var(--sr-new)" stroke-width="2.5"/>
            ${markers}
            <line x1="${W - 185}" y1="18" x2="${W - 165}" y2="18" stroke="var(--sr-fail)" stroke-width="2" opacity="0.6"/>
            <text x="${W - 160}" y="22" fill="var(--muted)" font-size="10" font-family="DM Sans,sans-serif">Sans révision</text>
            <line x1="${W - 185}" y1="34" x2="${W - 165}" y2="34" stroke="var(--sr-new)" stroke-width="2.5"/>
            <text x="${W - 160}" y="38" fill="var(--muted)" font-size="10" font-family="DM Sans,sans-serif">Avec répétition espacée</text>
            <circle cx="${W - 175}" cy="50" r="3" fill="var(--sr-success)"/>
            <text x="${W - 160}" y="54" fill="var(--muted)" font-size="10" font-family="DM Sans,sans-serif">Moments de révision</text>
          </svg>
        </div>
      </div>`;
  }

  // ── C. 30-Day Forecast ──
  function buildForecast() {
    const forecast = SR.getForecast(30);
    const maxCount = Math.max(...forecast.map(d => d.dueCount + d.newCount), 1);
    const today = new Date().toISOString().slice(0, 10);

    let bars = '';
    forecast.forEach((day, i) => {
      const total = day.dueCount + day.newCount;
      const h = Math.max(2, (total / maxCount) * 100);
      const dateObj = new Date(day.date);
      const label = dateObj.getDate().toString();
      const isToday = day.date === today;
      const cls = isToday ? ' today' : '';

      bars += `
        <div class="sr-p-forecast-col" title="${day.date} : ${total} cartes (${day.dueCount} révisions, ${day.newCount} nouvelles)">
          <div class="sr-p-forecast-bar${cls}" style="height:${h}%">
            ${day.newCount > 0 && total > 0 ? `<div class="sr-p-forecast-new" style="height:${(day.newCount / total) * 100}%"></div>` : ''}
          </div>
          ${i % 5 === 0 || isToday ? `<div class="sr-p-forecast-label">${isToday ? 'Auj.' : label}</div>` : ''}
        </div>`;
    });

    const totalDue = forecast.reduce((s, d) => s + d.dueCount + d.newCount, 0);

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Prévisions sur 30 jours</h3>
        <p class="sr-p-desc">${totalDue} cartes à réviser au total dans les 30 prochains jours.</p>
        <div class="sr-p-forecast">${bars}</div>
        <div class="sr-p-forecast-legend">
          <span><span class="sr-p-dot" style="background:var(--sr-new)"></span> Révisions</span>
          <span><span class="sr-p-dot" style="background:var(--sr-success)"></span> Nouvelles</span>
        </div>
      </div>`;
  }

  // ── D. Maturity Distribution (Donut SVG) ──
  function buildMaturity() {
    const dist = SR.getMaturityDistribution();
    const total = dist.new + dist.learning + dist.young + dist.mature;
    if (total === 0) return '';

    const R = 55, CX = 75, CY = 75, CIRC = 2 * Math.PI * R;
    const segments = [
      { label: 'Nouvelles', count: dist.new, color: 'var(--sr-new)' },
      { label: 'Apprentissage', count: dist.learning, color: 'var(--sr-hard)' },
      { label: 'Jeunes', count: dist.young, color: 'var(--sr-easy)' },
      { label: 'Matures', count: dist.mature, color: 'var(--sr-success)' },
    ];

    let offset = 0;
    let arcs = '';
    segments.forEach(seg => {
      if (seg.count === 0) return;
      const pct = seg.count / total;
      const dash = pct * CIRC;
      arcs += `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none"
                stroke="${seg.color}" stroke-width="14"
                stroke-dasharray="${dash.toFixed(1)} ${(CIRC - dash).toFixed(1)}"
                stroke-dashoffset="${(-offset).toFixed(1)}"
                transform="rotate(-90 ${CX} ${CY})"/>`;
      offset += dash;
    });

    let legend = '';
    segments.forEach(seg => {
      const pct = Math.round(seg.count / total * 100);
      legend += `
        <div class="sr-p-maturity-item">
          <span class="sr-p-dot" style="background:${seg.color}"></span>
          <span>${seg.label}</span>
          <strong>${seg.count}</strong>
          <span class="sr-p-maturity-pct">${pct}%</span>
        </div>`;
    });

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Maturité des cartes</h3>
        <div class="sr-p-maturity">
          <svg viewBox="0 0 150 150" width="130" height="130" class="sr-p-donut">
            ${arcs}
            <text x="${CX}" y="${CY - 6}" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700" font-family="DM Sans,sans-serif">${total}</text>
            <text x="${CX}" y="${CY + 12}" text-anchor="middle" fill="var(--muted)" font-size="10" font-family="DM Sans,sans-serif">cartes</text>
          </svg>
          <div class="sr-p-maturity-legend">${legend}</div>
        </div>
      </div>`;
  }

  // ── NEW: Mastery Tree ──
  function buildMasteryTree() {
    const byDisc = computeMastery();
    let html = '<div class="sr-p-section"><h3 class="sr-p-title">Arbre de ma\u00eetrise</h3>';
    html += '<p class="sr-p-desc">Progression par th\u00e8me et discipline. Ma\u00eetrise = cartes r\u00e9vis\u00e9es 6+ fois avec succ\u00e8s.</p>';
    html += '<div class="sr-p-mastery-grid">';

    Object.entries(THEME_DISCIPLINES).forEach(([key, theme]) => {
      let themeTotal = 0, themeMastered = 0;
      theme.disciplines.forEach(d => {
        if (byDisc[d]) { themeTotal += byDisc[d].total; themeMastered += byDisc[d].mastered; }
      });
      const themePct = themeTotal > 0 ? Math.round(themeMastered / themeTotal * 100) : 0;
      const color = masteryColor(themePct);

      html += '<div class="sr-mastery-theme" data-theme="' + key + '">';
      html += '<div class="sr-mastery-theme-header" onclick="this.parentElement.classList.toggle(\'expanded\')">';
      html += '<span class="sr-mastery-icon">' + theme.icon + '</span>';
      html += '<span class="sr-mastery-name">' + theme.label + '</span>';
      html += '<div class="sr-mastery-bar-wrap"><div class="sr-mastery-bar" style="width:' + themePct + '%;background:' + color + '"></div></div>';
      html += '<span class="sr-mastery-pct" style="color:' + color + '">' + themePct + '%</span>';
      html += '<span class="sr-mastery-chevron">\u25B8</span>';
      html += '</div><div class="sr-mastery-disciplines">';

      theme.disciplines.forEach(d => {
        const data = byDisc[d] || { total: 0, mastered: 0 };
        const pct = data.total > 0 ? Math.round(data.mastered / data.total * 100) : 0;
        const c = masteryColor(pct);
        const label = d.replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
        html += '<div class="sr-mastery-disc">';
        html += '<span class="sr-mastery-disc-name">' + label + '</span>';
        html += '<div class="sr-mastery-bar-wrap"><div class="sr-mastery-bar" style="width:' + pct + '%;background:' + c + '"></div></div>';
        html += '<span class="sr-mastery-disc-count">' + data.mastered + '/' + data.total + '</span>';
        html += '<span class="sr-mastery-pct" style="color:' + c + '">' + pct + '%</span>';
        html += '</div>';
      });

      html += '</div></div>';
    });

    html += '</div></div>';
    return html;
  }

  // ── E. Activity Heatmap (365 days) ──
  function buildHeatmap365() {
    const stats = SR.getStats();
    const history = stats.reviewHistory || [];
    const countMap = {};
    history.forEach(h => { countMap[h.date] = h.count; });

    const today = new Date();
    const cells = [];
    for (let i = 370; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      cells.push({ date: dateStr, count: countMap[dateStr] || 0, dow: d.getDay(), month: d.getMonth() });
    }

    const maxCount = Math.max(...cells.map(c => c.count), 1);
    const CELL = 11, GAP = 2, STEP = CELL + GAP;
    const startDow = cells[0].dow;
    const monthNames = ['Jan','F\u00e9v','Mar','Avr','Mai','Jun','Jul','Ao\u00fb','Sep','Oct','Nov','D\u00e9c'];
    let monthLabels = '', lastMonth = -1;

    let svgCells = '';
    cells.forEach((cell, idx) => {
      const weekOffset = Math.floor((idx + startDow) / 7);
      const row = (idx + startDow) % 7;
      const x = 28 + weekOffset * STEP;
      const y = 18 + row * STEP;

      if (cell.month !== lastMonth && row <= 1) {
        monthLabels += `<text x="${x}" y="12" fill="var(--muted)" font-size="8" font-family="DM Sans,sans-serif">${monthNames[cell.month]}</text>`;
        lastMonth = cell.month;
      }

      const intensity = cell.count > 0 ? 0.15 + 0.85 * (cell.count / maxCount) : 0;
      const fill = cell.count === 0 ? 'rgba(240,237,232,0.04)' : `rgba(232,201,122,${intensity.toFixed(2)})`;
      svgCells += `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="2" fill="${fill}" class="sr-hm-cell" data-date="${cell.date}" data-count="${cell.count}"/>`;
    });

    const dayLabels = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    let dowLabels = '';
    [1, 3, 5].forEach(d => {
      dowLabels += `<text x="18" y="${18 + d * STEP + 9}" text-anchor="end" fill="var(--muted)" font-size="8" font-family="DM Sans,sans-serif">${dayLabels[d]}</text>`;
    });

    const numWeeks = Math.ceil((cells.length + startDow) / 7);
    const svgW = 28 + numWeeks * STEP + 4;
    const svgH = 18 + 7 * STEP + 4;
    const totalReviews = cells.reduce((s, c) => s + c.count, 0);
    const activeDays = cells.filter(c => c.count > 0).length;

    const legendSteps = [0, 0.25, 0.5, 0.75, 1].map((i, idx) => {
      const a = i === 0 ? 0 : (0.15 + 0.85 * i);
      const f = i === 0 ? 'rgba(240,237,232,0.04)' : `rgba(232,201,122,${a.toFixed(2)})`;
      return `<rect x="${idx * 14}" y="0" width="${CELL}" height="${CELL}" rx="2" fill="${f}"/>`;
    });

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Activit\u00e9 (12 mois)</h3>
        <p class="sr-p-desc">${totalReviews} r\u00e9visions en ${activeDays} jours actifs sur les 12 derniers mois.</p>
        <div class="sr-p-heatmap-wrap sr-p-heatmap-365">
          <svg viewBox="0 0 ${svgW} ${svgH}" class="sr-p-heatmap">
            ${monthLabels}${dowLabels}${svgCells}
          </svg>
        </div>
        <div class="sr-p-heatmap-legend">
          <span class="sr-p-heatmap-lbl">Moins</span>
          <svg viewBox="0 0 ${5 * 14} ${CELL}" width="${5 * 14}" height="${CELL}">${legendSteps.join('')}</svg>
          <span class="sr-p-heatmap-lbl">Plus</span>
        </div>
        <div class="sr-hm-tooltip" id="sr-hm-tooltip"></div>
      </div>`;
  }

  function initHeatmapTooltips() {
    const wrap = document.querySelector('.sr-p-heatmap-365');
    const tooltip = document.getElementById('sr-hm-tooltip');
    if (!wrap || !tooltip) return;
    const dayNames = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    const mNames = ['janvier','f\u00e9vrier','mars','avril','mai','juin','juillet','ao\u00fbt','septembre','octobre','novembre','d\u00e9cembre'];

    wrap.addEventListener('mouseover', function (e) {
      const cell = e.target.closest('.sr-hm-cell');
      if (!cell) { tooltip.style.display = 'none'; return; }
      const date = cell.dataset.date;
      const count = parseInt(cell.dataset.count);
      const d = new Date(date);
      tooltip.textContent = (count === 0 ? 'Aucune r\u00e9vision' : count + ' r\u00e9vision' + (count > 1 ? 's' : '')) +
        ' \u2014 ' + dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + mNames[d.getMonth()] + ' ' + d.getFullYear();
      const rect = cell.getBoundingClientRect();
      const wrapRect = wrap.getBoundingClientRect();
      tooltip.style.display = 'block';
      tooltip.style.left = (rect.left - wrapRect.left + rect.width / 2) + 'px';
      tooltip.style.top = (rect.top - wrapRect.top - 28) + 'px';
    });

    wrap.addEventListener('mouseout', function (e) {
      if (e.target.closest('.sr-hm-cell')) tooltip.style.display = 'none';
    });
  }

  // ── NEW: Badges ──
  const BADGE_DEFS = {
    'streak-3':     { name: 'R\u00e9gulier',      icon: '\uD83D\uDD25', desc: '3 jours de s\u00e9rie' },
    'streak-7':     { name: 'Assidu',            icon: '\uD83D\uDD25', desc: '7 jours de s\u00e9rie' },
    'streak-30':    { name: 'Ind\u00e9fectible',  icon: '\uD83D\uDC8E', desc: '30 jours de s\u00e9rie' },
    'streak-100':   { name: 'L\u00e9gendaire',    icon: '\uD83D\uDC51', desc: '100 jours de s\u00e9rie' },
    'cards-50':     { name: 'Curieux',           icon: '\uD83D\uDCDD', desc: '50 cartes ajout\u00e9es' },
    'cards-100':    { name: 'Studieux',          icon: '\uD83D\uDCDA', desc: '100 cartes ajout\u00e9es' },
    'cards-500':    { name: '\u00c9rudit',        icon: '\uD83C\uDF93', desc: '500 cartes ajout\u00e9es' },
    'cards-1000':   { name: 'Encyclop\u00e9diste', icon: '\uD83C\uDFDB\uFE0F', desc: '1000 cartes ajout\u00e9es' },
    'reviews-100':  { name: 'Pratiquant',        icon: '\u26A1', desc: '100 r\u00e9visions' },
    'reviews-1000': { name: 'Expert',            icon: '\u26A1', desc: '1000 r\u00e9visions' },
    'reviews-5000': { name: 'Ma\u00eetre',        icon: '\u26A1', desc: '5000 r\u00e9visions' },
    'retention-80': { name: 'Bonne m\u00e9moire', icon: '\uD83E\uDDE0', desc: 'R\u00e9tention \u2265 80%' },
    'retention-95': { name: 'M\u00e9moire d\'or', icon: '\uD83E\uDDE0', desc: 'R\u00e9tention \u2265 95%' },
  };

  const BADGE_CHECKS = {
    'streak-3':     s => s.streak >= 3,
    'streak-7':     s => s.streak >= 7,
    'streak-30':    s => s.streak >= 30,
    'streak-100':   s => s.streak >= 100,
    'cards-50':     s => s.total >= 50,
    'cards-100':    s => s.total >= 100,
    'cards-500':    s => s.total >= 500,
    'cards-1000':   s => s.total >= 1000,
    'reviews-100':  s => s.reviews >= 100,
    'reviews-1000': s => s.reviews >= 1000,
    'reviews-5000': s => s.reviews >= 5000,
    'retention-80': s => s.retention >= 80,
    'retention-95': s => s.retention >= 95,
  };

  function checkBadges() {
    const stats = SR.getStats();
    const ret = SR.getRetentionEstimate();
    const ctx = { streak: stats.streakDays, total: stats.total, reviews: stats.totalReviews, retention: ret.overall };

    let bd;
    try { bd = JSON.parse(localStorage.getItem('curiosita_badges')); } catch (e) {}
    if (!bd) bd = { earned: {}, newBadges: [] };

    const newlyEarned = [];
    Object.entries(BADGE_CHECKS).forEach(([id, check]) => {
      if (!bd.earned[id] && check(ctx)) {
        bd.earned[id] = new Date().toISOString().slice(0, 10);
        newlyEarned.push(id);
      }
    });

    // Discipline badges
    const mastery = computeMastery();
    const TIERS = [
      { suffix: 'debutant', name: 'D\u00e9butant', icon: '\uD83C\uDF31', min: 10, pct: 0 },
      { suffix: 'intermediaire', name: 'Interm\u00e9diaire', icon: '\uD83D\uDCD7', min: 20, pct: 50 },
      { suffix: 'avance', name: 'Avanc\u00e9', icon: '\uD83D\uDCD8', min: 30, pct: 75 },
      { suffix: 'maitre', name: 'Ma\u00eetre', icon: '\uD83C\uDFC6', min: 40, pct: 90 },
    ];
    Object.entries(mastery).forEach(([disc, data]) => {
      TIERS.forEach(tier => {
        const id = 'disc-' + disc + '-' + tier.suffix;
        if (bd.earned[id]) return;
        const p = data.total > 0 ? Math.round(data.mastered / data.total * 100) : 0;
        if (data.total >= tier.min && p >= tier.pct) {
          bd.earned[id] = new Date().toISOString().slice(0, 10);
          newlyEarned.push(id);
        }
      });
    });

    if (newlyEarned.length > 0) {
      bd.newBadges = (bd.newBadges || []).concat(newlyEarned);
      localStorage.setItem('curiosita_badges', JSON.stringify(bd));
    }
    return { bd, newlyEarned };
  }

  function buildBadges() {
    const { bd } = checkBadges();
    const earned = bd.earned || {};

    let globalHtml = '';
    Object.entries(BADGE_DEFS).forEach(([id, def]) => {
      const has = !!earned[id];
      globalHtml += `<div class="sr-badge ${has ? 'earned' : 'locked'}" title="${def.desc}${has ? ' \u2014 obtenu le ' + earned[id] : ''}">` +
        `<span class="sr-badge-icon">${has ? def.icon : '\uD83D\uDD12'}</span>` +
        `<span class="sr-badge-name">${def.name}</span></div>`;
    });

    // Discipline badges for disciplines with enough cards
    const mastery = computeMastery();
    const TIERS = [
      { suffix: 'debutant', icon: '\uD83C\uDF31' },
      { suffix: 'intermediaire', icon: '\uD83D\uDCD7' },
      { suffix: 'avance', icon: '\uD83D\uDCD8' },
      { suffix: 'maitre', icon: '\uD83C\uDFC6' },
    ];
    let discHtml = '';
    Object.entries(mastery).filter(([, d]) => d.total >= 5).sort((a, b) => b[1].total - a[1].total).forEach(([disc]) => {
      const label = disc.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      let tierHtml = '';
      TIERS.forEach(t => {
        const id = 'disc-' + disc + '-' + t.suffix;
        const has = !!earned[id];
        tierHtml += `<span class="sr-badge-mini ${has ? 'earned' : 'locked'}" title="${label}">${has ? t.icon : '\uD83D\uDD12'}</span>`;
      });
      discHtml += `<div class="sr-badge-disc-row"><span class="sr-badge-disc-name">${label}</span><div class="sr-badge-disc-tiers">${tierHtml}</div></div>`;
    });

    return `<div class="sr-p-section"><h3 class="sr-p-title">Badges</h3>` +
      `<p class="sr-p-desc">Tes accomplissements. Continue \u00e0 r\u00e9viser pour d\u00e9bloquer de nouveaux badges.</p>` +
      `<div class="sr-badges-global">${globalHtml}</div>` +
      (discHtml ? '<h4 class="sr-p-subtitle">Par discipline</h4><div class="sr-badges-disc">' + discHtml + '</div>' : '') +
      '</div>';
  }

  // ── F. At-Risk Cards ──
  function buildAtRisk() {
    const ret = SR.getRetentionEstimate();
    const risky = ret.distribution.filter(c => c.retention < 70).slice(0, 10);
    if (risky.length === 0) return '';

    let rows = '';
    risky.forEach(c => {
      const barColor = c.retention < 30 ? 'var(--sr-fail)' :
                       c.retention < 50 ? 'var(--sr-hard)' : 'var(--sr-new)';
      rows += `
        <div class="sr-p-risk-row">
          <div class="sr-p-risk-front">${esc(c.front)}</div>
          <div class="sr-p-risk-bar-wrap">
            <div class="sr-p-risk-bar" style="width:${c.retention}%;background:${barColor}"></div>
          </div>
          <div class="sr-p-risk-pct" style="color:${barColor}">${c.retention}%</div>
        </div>`;
    });

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Cartes en danger</h3>
        <p class="sr-p-desc">Rétention estimée la plus basse — à réviser en priorité.</p>
        <div class="sr-p-risk-list">${rows}</div>
      </div>`;
  }

  function esc(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return { render };
})();
