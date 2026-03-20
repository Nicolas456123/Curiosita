// ══════════════════════════════════════════════════════
//  Curiosità — Metacognition Module
//  "Je sais / Pas encore" self-assessment on sections
//  Tracks confidence vs actual quiz performance
// ══════════════════════════════════════════════════════

const Metacog = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_metacog';

  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function inject(slug) {
    var content = document.getElementById('cvContent');
    if (!content) return;

    var contenu = content.querySelector('#contenu .course-content') ||
                  content.querySelector('#contenu') ||
                  content.querySelector('.course-content');
    if (!contenu) return;

    var h3s = contenu.querySelectorAll('h3');
    if (h3s.length < 1) return;

    var data = loadData();
    var pageData = data[slug] || {};

    h3s.forEach(function (h3, i) {
      var sectionId = slug + '--s' + i;
      var current = pageData[sectionId] || null;

      var bar = document.createElement('div');
      bar.className = 'mc-bar';
      bar.dataset.mcId = sectionId;

      var levels = [
        { val: 'know', label: 'Je sais', cls: 'mc-know' },
        { val: 'unsure', label: 'Pas s\u00fbr', cls: 'mc-unsure' },
        { val: 'learn', label: '\u00c0 apprendre', cls: 'mc-learn' }
      ];

      bar.innerHTML = levels.map(function (l) {
        var active = current === l.val ? ' active' : '';
        return '<button class="mc-btn ' + l.cls + active + '" data-val="' + l.val + '">' + l.label + '</button>';
      }).join('');

      bar.addEventListener('click', function (e) {
        var btn = e.target.closest('.mc-btn');
        if (!btn) return;
        var val = btn.dataset.val;

        // Toggle: if already selected, deselect
        var d = loadData();
        if (!d[slug]) d[slug] = {};
        if (d[slug][sectionId] === val) {
          delete d[slug][sectionId];
        } else {
          d[slug][sectionId] = val;
        }
        saveData(d);

        // Update UI
        bar.querySelectorAll('.mc-btn').forEach(function (b) { b.classList.remove('active'); });
        if (d[slug][sectionId]) btn.classList.add('active');
      });

      // Insert after h3
      h3.after(bar);
    });
  }

  // Get calibration stats for progress dashboard
  function getCalibration() {
    var data = loadData();
    var total = 0, overconfident = 0, underconfident = 0, calibrated = 0;

    // This would need quiz results to compare — simplified version
    Object.values(data).forEach(function (page) {
      Object.values(page).forEach(function (val) {
        total++;
      });
    });

    return { total: total, assessed: total };
  }

  return { inject: inject, getCalibration: getCalibration };
})();
