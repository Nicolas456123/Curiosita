// ══════════════════════════════════════════════════════
//  Curiosita — SR Progress Dashboard
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
      buildForgettingCurve(),
      buildForecast(),
      buildMaturity(),
      buildHeatmap(),
      buildAtRisk()
    ].join('');
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

  // ── E. Activity Heatmap (90 days) ──
  function buildHeatmap() {
    const stats = SR.getStats();
    const history = stats.reviewHistory || [];

    // Build date → count map
    const countMap = {};
    history.forEach(h => { countMap[h.date] = h.count; });

    // Generate 91 days (13 weeks)
    const today = new Date();
    const cells = [];
    for (let i = 90; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      cells.push({ date: dateStr, count: countMap[dateStr] || 0, dow: d.getDay() });
    }

    const maxCount = Math.max(...cells.map(c => c.count), 1);
    const CELL = 13, GAP = 2, STEP = CELL + GAP;
    const startDow = cells[0].dow;

    let svgCells = '';
    cells.forEach((cell, idx) => {
      const weekOffset = Math.floor((idx + startDow) / 7);
      const row = (idx + startDow) % 7;
      const x = 28 + weekOffset * STEP;
      const y = row * STEP;

      const intensity = cell.count > 0 ? 0.2 + 0.8 * (cell.count / maxCount) : 0;
      const fill = cell.count === 0 ? 'rgba(240,237,232,0.04)' :
                   `rgba(232,201,122,${intensity.toFixed(2)})`;

      svgCells += `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="2" fill="${fill}">
                     <title>${cell.date} : ${cell.count} révisions</title>
                   </rect>`;
    });

    // Day-of-week labels
    const dayLabels = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    let dowLabels = '';
    [1, 3, 5].forEach(d => {
      dowLabels += `<text x="18" y="${d * STEP + 10}" text-anchor="end" fill="var(--muted)" font-size="9" font-family="DM Sans,sans-serif">${dayLabels[d]}</text>`;
    });

    const svgW = 28 + 14 * STEP;
    const svgH = 7 * STEP;

    const totalReviews = cells.reduce((s, c) => s + c.count, 0);
    const activeDays = cells.filter(c => c.count > 0).length;

    return `
      <div class="sr-p-section">
        <h3 class="sr-p-title">Activité (90 jours)</h3>
        <p class="sr-p-desc">${totalReviews} révisions en ${activeDays} jours actifs.</p>
        <div class="sr-p-heatmap-wrap">
          <svg viewBox="0 0 ${svgW} ${svgH}" class="sr-p-heatmap">
            ${dowLabels}
            ${svgCells}
          </svg>
        </div>
      </div>`;
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
