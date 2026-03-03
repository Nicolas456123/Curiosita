// ══════════════════════════════════════════════════════
//  Curiosita — SR UI Controller
//  Gère la page apprendre.html : review, decks, add, settings
//  Depends: sr-engine.js (SR), sr-extract.js (SRExtract)
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── State ──
  let reviewQueue = [];
  let reviewIndex = 0;
  let sessionCorrect = 0;
  let sessionTotal = 0;
  let isFlipped = false;
  let currentDeckSource = null; // for deck detail view

  // ── DOM refs ──
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // ══════════════════════════════
  //  TABS
  // ══════════════════════════════

  function initTabs() {
    const tabs = $$('.sr-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        $$('.sr-panel').forEach(p => p.classList.remove('active'));
        const panel = $('#panel-' + target);
        if (panel) panel.classList.add('active');
        window.location.hash = target;

        // Refresh panel content
        if (target === 'review') initReview();
        if (target === 'decks') renderDecks();
      });
    });

    // Deep linking
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const tab = $(`.sr-tab[data-tab="${hash}"]`);
      if (tab) tab.click();
    }
  }

  // ══════════════════════════════
  //  DASHBOARD STATS
  // ══════════════════════════════

  function updateDashboard() {
    const stats = SR.getStats();

    const elDue = $('#stat-due');
    const elStreak = $('#stat-streak');
    const elTotal = $('#stat-total');
    const elRate = $('#stat-rate');
    const badge = $('#tab-due-badge');

    if (elDue) elDue.textContent = stats.due;
    if (elStreak) elStreak.textContent = stats.streakDays;
    if (elTotal) elTotal.textContent = stats.total;
    if (elRate) elRate.textContent = stats.total > 0 ? stats.successRate + '%' : '—';

    if (badge) {
      if (stats.due > 0) {
        badge.textContent = stats.due;
        badge.style.display = '';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  // ══════════════════════════════
  //  REVIEW
  // ══════════════════════════════

  function initReview() {
    reviewQueue = SR.getDueCards();
    reviewIndex = 0;
    sessionCorrect = 0;
    sessionTotal = 0;
    isFlipped = false;

    if (reviewQueue.length === 0) {
      renderEmptyReview();
    } else {
      renderReviewCard();
    }
  }

  function renderEmptyReview() {
    const el = $('#review-content');
    if (!el) return;

    const stats = SR.getStats();
    const total = stats.total;

    if (total === 0) {
      el.innerHTML = `
        <div class="sr-empty">
          <div class="sr-empty-icon">📚</div>
          <h3>Aucune carte pour l'instant</h3>
          <p>Commence par extraire des cartes depuis un cours ou en créer manuellement dans l'onglet "Ajouter".</p>
        </div>`;
    } else {
      el.innerHTML = `
        <div class="sr-session-done">
          <div class="sr-done-icon">🎉</div>
          <h2>Tout est révisé !</h2>
          <p style="color:var(--muted);">Aucune carte à revoir pour le moment. Reviens plus tard !</p>
          ${renderChart(stats)}
        </div>`;
    }
  }

  function renderChart(stats) {
    const history = stats.reviewHistory || [];
    const days = [];
    const labels = ['L','M','M','J','V','S','D'];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const entry = history.find(h => h.date === dateStr);
      days.push(entry ? entry.count : 0);
    }

    const max = Math.max(...days, 1);
    const dayOfWeek = today.getDay(); // 0=Sun

    let barsHtml = '';
    let labelsHtml = '';
    days.forEach((count, i) => {
      const height = Math.max(2, (count / max) * 100);
      const dayIdx = (dayOfWeek - 6 + i + 7) % 7;
      const isToday = i === 6;
      barsHtml += `<div class="sr-chart-bar${isToday ? ' today' : ''}" style="height:${height}%" title="${count} révisions"></div>`;
      labelsHtml += `<div class="sr-chart-label">${labels[dayIdx === 0 ? 6 : dayIdx - 1]}</div>`;
    });

    return `<div class="sr-chart">${barsHtml}</div><div class="sr-chart-labels">${labelsHtml}</div>`;
  }

  function renderReviewCard() {
    const el = $('#review-content');
    if (!el) return;

    const card = reviewQueue[reviewIndex];
    if (!card) {
      renderSessionDone();
      return;
    }

    isFlipped = false;
    const progress = reviewIndex / reviewQueue.length * 100;

    el.innerHTML = `
      <div class="sr-review-area">
        <div class="sr-progress">
          <span>${reviewIndex + 1} / ${reviewQueue.length}</span>
          <div class="sr-progress-bar"><div class="sr-progress-fill" style="width:${progress}%"></div></div>
        </div>

        <div class="sr-card-wrapper" id="card-wrapper">
          <div class="sr-card" id="review-card">
            <div class="sr-card-face sr-card-front">
              <div class="sr-card-type">${escHtml(card.type)}</div>
              <div class="sr-card-text">${escHtml(card.front)}</div>
              <div class="sr-card-hint">Clic ou Espace pour retourner</div>
              <div class="sr-card-source">${escHtml(card.sourceTitle || '')}</div>
            </div>
            <div class="sr-card-face sr-card-back">
              <div class="sr-card-type">${escHtml(card.type)}</div>
              <div class="sr-card-text">${escHtml(card.back)}</div>
              <div class="sr-card-source">${escHtml(card.sourceTitle || '')}</div>
            </div>
          </div>
        </div>

        <div class="sr-rating" id="rating-btns">
          <button class="sr-rate-btn fail" data-quality="1">
            À revoir
            <span class="sr-rate-key">1</span>
          </button>
          <button class="sr-rate-btn hard" data-quality="3">
            Difficile
            <span class="sr-rate-key">2</span>
          </button>
          <button class="sr-rate-btn good" data-quality="4">
            Bien
            <span class="sr-rate-key">3</span>
          </button>
          <button class="sr-rate-btn easy" data-quality="5">
            Facile
            <span class="sr-rate-key">4</span>
          </button>
        </div>
      </div>`;

    // Events
    $('#card-wrapper').addEventListener('click', flipCard);
    $$('.sr-rate-btn').forEach(btn => {
      btn.addEventListener('click', () => rateCard(parseInt(btn.dataset.quality)));
    });
  }

  function flipCard() {
    if (isFlipped) return;
    isFlipped = true;
    const card = $('#review-card');
    const rating = $('#rating-btns');
    if (card) card.classList.add('flipped');
    if (rating) rating.classList.add('visible');
  }

  function rateCard(quality) {
    if (!isFlipped) return;
    const card = reviewQueue[reviewIndex];
    if (!card) return;

    SR.reviewCard(card.id, quality);
    sessionTotal++;
    if (quality >= 3) sessionCorrect++;

    reviewIndex++;
    updateDashboard();

    if (reviewIndex >= reviewQueue.length) {
      renderSessionDone();
    } else {
      renderReviewCard();
    }
  }

  function renderSessionDone() {
    const el = $('#review-content');
    if (!el) return;

    const rate = sessionTotal > 0 ? Math.round(sessionCorrect / sessionTotal * 100) : 0;
    const stats = SR.getStats();

    el.innerHTML = `
      <div class="sr-session-done">
        <div class="sr-done-icon">✅</div>
        <h2>Session terminée !</h2>
        <div class="sr-session-stats">
          <div class="sr-session-stat">
            <div class="val">${sessionTotal}</div>
            <div class="lbl">Cartes révisées</div>
          </div>
          <div class="sr-session-stat">
            <div class="val" style="color:var(--sr-success)">${rate}%</div>
            <div class="lbl">Taux de réussite</div>
          </div>
          <div class="sr-session-stat">
            <div class="val" style="color:var(--sr-new)">${stats.streakDays}</div>
            <div class="lbl">Jours de série</div>
          </div>
        </div>
        ${renderChart(stats)}
        <div style="margin-top:1.5rem;">
          <button class="sr-btn sr-btn-secondary" onclick="location.reload()">Nouvelle session</button>
        </div>
      </div>`;
  }

  // ══════════════════════════════
  //  DECKS
  // ══════════════════════════════

  function renderDecks() {
    const el = $('#decks-content');
    if (!el) return;

    // If viewing a specific deck
    if (currentDeckSource !== null) {
      renderDeckDetail(currentDeckSource);
      return;
    }

    const sources = SR.getSources();

    if (sources.length === 0) {
      el.innerHTML = `
        <div class="sr-empty">
          <div class="sr-empty-icon">📂</div>
          <h3>Aucun deck</h3>
          <p>Les decks sont créés automatiquement quand tu extrais des cartes depuis un cours.</p>
        </div>`;
      return;
    }

    let html = '<div class="sr-deck-list">';
    sources.forEach(src => {
      const dueClass = src.due > 0 ? '' : ' none';
      html += `
        <div class="sr-deck-item" data-source="${escAttr(src.source)}">
          <div class="sr-deck-title">${escHtml(src.title || src.source)}</div>
          <div class="sr-deck-count">${src.count} cartes</div>
          ${src.due > 0 ? `<div class="sr-deck-due${dueClass}">${src.due} à revoir</div>` : `<div class="sr-deck-due none">✓</div>`}
        </div>`;
    });
    html += '</div>';
    el.innerHTML = html;

    // Events
    el.querySelectorAll('.sr-deck-item').forEach(item => {
      item.addEventListener('click', () => {
        currentDeckSource = item.dataset.source;
        renderDeckDetail(currentDeckSource);
      });
    });
  }

  function renderDeckDetail(source) {
    const el = $('#decks-content');
    if (!el) return;

    const cards = SR.getCardsBySource(source);
    const srcInfo = SR.getSources().find(s => s.source === source);
    const title = srcInfo ? srcInfo.title : source;

    let html = `
      <a class="sr-back-link" id="back-to-decks">← Retour aux decks</a>
      <h3 style="font-size:1rem;margin-bottom:0.8rem;">${escHtml(title)} <span style="color:var(--muted);font-weight:300;">(${cards.length} cartes)</span></h3>
      <div class="sr-card-list">`;

    cards.forEach(card => {
      html += `
        <div class="sr-card-row" data-id="${card.id}">
          <div class="sr-card-row-type">${escHtml(card.type)}</div>
          <div class="sr-card-row-front">${escHtml(card.front)}</div>
          <div class="sr-card-row-actions">
            <button class="sr-card-row-btn edit" title="Modifier">✏️</button>
            <button class="sr-card-row-btn delete" title="Supprimer">🗑️</button>
          </div>
        </div>`;
    });
    html += '</div>';
    el.innerHTML = html;

    // Back button
    $('#back-to-decks').addEventListener('click', () => {
      currentDeckSource = null;
      renderDecks();
    });

    // Card actions
    el.querySelectorAll('.sr-card-row-btn.delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const row = btn.closest('.sr-card-row');
        const id = row.dataset.id;
        SR.removeCard(id);
        row.remove();
        updateDashboard();
      });
    });

    el.querySelectorAll('.sr-card-row-btn.edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const row = btn.closest('.sr-card-row');
        const id = row.dataset.id;
        openEditModal(id);
      });
    });
  }

  // ══════════════════════════════
  //  MODAL (edit card)
  // ══════════════════════════════

  function openEditModal(cardId) {
    const card = SR.getCard(cardId);
    if (!card) return;

    const overlay = $('#sr-modal');
    const content = $('#sr-modal-content');

    content.innerHTML = `
      <h3>Modifier la carte</h3>
      <form class="sr-form" id="edit-form">
        <div class="sr-form-group">
          <label class="sr-form-label">Recto</label>
          <textarea class="sr-form-textarea" id="edit-front" rows="3">${escHtml(card.front)}</textarea>
        </div>
        <div class="sr-form-group">
          <label class="sr-form-label">Verso</label>
          <textarea class="sr-form-textarea" id="edit-back" rows="4">${escHtml(card.back)}</textarea>
        </div>
        <div class="sr-btn-row">
          <button type="submit" class="sr-btn sr-btn-primary">Enregistrer</button>
          <button type="button" class="sr-btn sr-btn-secondary" id="edit-cancel">Annuler</button>
        </div>
      </form>`;

    overlay.classList.add('open');

    $('#edit-form').addEventListener('submit', (e) => {
      e.preventDefault();
      SR.editCard(cardId, {
        front: $('#edit-front').value,
        back: $('#edit-back').value
      });
      overlay.classList.remove('open');
      if (currentDeckSource !== null) renderDeckDetail(currentDeckSource);
    });

    $('#edit-cancel').addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }

  // ══════════════════════════════
  //  ADD CARD (manual + extract)
  // ══════════════════════════════

  function initAddPanel() {
    // Manual form
    const form = $('#manual-card-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const front = $('#manual-front').value.trim();
        const back = $('#manual-back').value.trim();
        const tagsStr = $('#manual-tags').value.trim();
        const tags = tagsStr ? tagsStr.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) : [];

        if (!front || !back) {
          showResult('#manual-result', 'Remplis le recto et le verso.', 'info');
          return;
        }

        const result = SR.addCard({ front, back, type: 'manual', tags, source: '', sourceTitle: 'Manuel' });
        if (result && !result.existing) {
          showResult('#manual-result', '✅ Carte créée avec succès !', 'success');
          form.reset();
          updateDashboard();
        } else if (result && result.existing) {
          showResult('#manual-result', 'Cette carte existe déjà.', 'info');
        }
      });
    }

    // Extract (single URL)
    const extractBtn = $('#extract-btn');
    if (extractBtn) {
      extractBtn.addEventListener('click', async () => {
        const url = $('#extract-url').value.trim();
        if (!url) return;

        extractBtn.textContent = 'Extraction...';
        extractBtn.disabled = true;

        const result = await SRExtract.extractFromUrl(url);

        extractBtn.textContent = 'Extraire';
        extractBtn.disabled = false;

        if (result.error) {
          showResult('#extract-result', '❌ Erreur : ' + result.error, 'info');
        } else {
          showResult('#extract-result',
            `✅ ${result.newCount} nouvelles cartes ajoutées` +
            (result.existingCount > 0 ? `, ${result.existingCount} existantes ignorées` : ''),
            'success');
          updateDashboard();
        }
      });
    }

    // Bulk extract (all courses)
    initBulkExtract();
  }

  function initBulkExtract() {
    const btn = $('#bulk-extract-btn');
    const stopBtn = $('#bulk-extract-stop');
    const progressWrap = $('#bulk-extract-progress');
    const progressBar = $('#bulk-progress-bar');
    const progressText = $('#bulk-progress-text');
    const resultEl = $('#bulk-extract-result');
    const countEl = $('#bulk-count');

    if (!btn) return;

    const urls = (typeof SR_COURSE_URLS !== 'undefined') ? SR_COURSE_URLS : [];
    if (countEl) countEl.textContent = urls.length;

    let running = false;

    btn.addEventListener('click', async () => {
      if (running) return;
      running = true;
      btn.style.display = 'none';
      stopBtn.style.display = '';
      progressWrap.style.display = '';
      resultEl.innerHTML = '';

      let totalNew = 0;
      let totalExisting = 0;
      let errors = 0;

      for (let i = 0; i < urls.length; i++) {
        if (!running) break;

        const url = urls[i];
        const pct = Math.round((i / urls.length) * 100);
        progressBar.style.width = pct + '%';
        progressText.textContent = `${i + 1} / ${urls.length} — ${url.split('/').pop()}`;

        try {
          const result = await SRExtract.extractFromUrl(url);
          totalNew += result.newCount || 0;
          totalExisting += result.existingCount || 0;
          if (result.error) errors++;
        } catch (e) {
          errors++;
        }

        // Yield to UI thread to avoid freezing
        await new Promise(r => setTimeout(r, 8));
      }

      running = false;
      btn.style.display = '';
      stopBtn.style.display = 'none';
      progressBar.style.width = '100%';

      if ($('#bulk-progress-text')) {
        progressText.textContent = running === false && totalNew + totalExisting === 0
          ? 'Arrêté.'
          : 'Terminé !';
      }

      resultEl.innerHTML = `
        <div class="sr-extract-result success">
          ✅ <strong>${totalNew}</strong> nouvelles cartes ajoutées
          ${totalExisting > 0 ? `· ${totalExisting} existantes ignorées` : ''}
          ${errors > 0 ? `· ${errors} erreurs` : ''}
        </div>`;

      updateDashboard();
    });

    stopBtn.addEventListener('click', () => {
      running = false;
      stopBtn.style.display = 'none';
      btn.style.display = '';
      if (progressText) progressText.textContent = 'Arrêté.';
    });
  }

  function showResult(selector, message, type) {
    const el = $(selector);
    if (!el) return;
    el.innerHTML = `<div class="sr-extract-result ${type}">${message}</div>`;
    setTimeout(() => { el.innerHTML = ''; }, 5000);
  }

  // ══════════════════════════════
  //  SETTINGS
  // ══════════════════════════════

  function initSettings() {
    const settings = SR.getSettings();

    const elNew = $('#set-new-per-day');
    const elReviews = $('#set-reviews-per-day');

    if (elNew) elNew.value = settings.newCardsPerDay;
    if (elReviews) elReviews.value = settings.reviewsPerDay;

    // Save on change
    [elNew, elReviews].forEach(el => {
      if (el) el.addEventListener('change', () => {
        SR.updateSettings({
          newCardsPerDay: parseInt(elNew.value) || 20,
          reviewsPerDay: parseInt(elReviews.value) || 100
        });
      });
    });

    // Export
    const btnExport = $('#btn-export');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const json = SR.exportJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'curiosita-sr-' + new Date().toISOString().slice(0, 10) + '.json';
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Import
    const btnImport = $('#btn-import');
    if (btnImport) {
      btnImport.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          const result = SR.importJSON(reader.result, true); // merge mode
          if (result.success) {
            showResult('#import-result', `✅ Import réussi ! ${result.cardCount} cartes au total.`, 'success');
            updateDashboard();
          } else {
            showResult('#import-result', '❌ Erreur : ' + result.error, 'info');
          }
        };
        reader.readAsText(file);
      });
    }

    // Reset
    const btnReset = $('#btn-reset');
    const resetConfirm = $('#reset-confirm');
    if (btnReset && resetConfirm) {
      btnReset.addEventListener('click', () => {
        resetConfirm.style.display = '';
      });
      $('#btn-reset-cancel').addEventListener('click', () => {
        resetConfirm.style.display = 'none';
      });
      $('#btn-reset-confirm').addEventListener('click', () => {
        SR.resetAll();
        resetConfirm.style.display = 'none';
        updateDashboard();
        showResult('#import-result', '🗑️ Toutes les cartes ont été supprimées.', 'info');
      });
    }
  }

  // ══════════════════════════════
  //  KEYBOARD SHORTCUTS
  // ══════════════════════════════

  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      // Only in review tab
      const reviewPanel = $('#panel-review');
      if (!reviewPanel || !reviewPanel.classList.contains('active')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        if (!isFlipped) {
          flipCard();
        }
      }

      if (isFlipped) {
        const keyMap = { 'Digit1': 1, 'Digit2': 3, 'Digit3': 4, 'Digit4': 5 };
        if (keyMap[e.code] !== undefined) {
          e.preventDefault();
          rateCard(keyMap[e.code]);
        }
      }
    });
  }

  // ══════════════════════════════
  //  HELPERS
  // ══════════════════════════════

  function escHtml(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escAttr(s) {
    if (!s) return '';
    return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ══════════════════════════════
  //  INIT
  // ══════════════════════════════

  function init() {
    initTabs();
    updateDashboard();
    initReview();
    initAddPanel();
    initSettings();
    initKeyboard();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
