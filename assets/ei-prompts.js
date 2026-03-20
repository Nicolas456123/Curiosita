// ══════════════════════════════════════════════════════
//  Curiosità — Elaborative Interrogation Prompts
//  Injects reflective prompts into CV content pages
//  Persists reflections in localStorage
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_ei';

  var QUESTIONS = [
    'Pourquoi est-ce important ?',
    'Quel lien avec ce que tu sais déjà ?',
    'Comment l\u2019expliquerais-tu simplement ?',
    'Quelle est l\u2019idée clé ici ?',
    'Peux-tu trouver un exemple concret ?',
    'Quelle serait une conséquence concrète ?',
    'En quoi est-ce différent de ce que tu pensais ?'
  ];

  function loadSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (e) { return {}; }
  }

  function saveReflection(id, text) {
    var data = loadSaved();
    if (text) {
      data[id] = { text: text, date: Date.now() };
    } else {
      delete data[id];
    }
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function extractKeyPoints(h3) {
    var points = [];
    var el = h3.nextElementSibling;
    while (el && el.tagName !== 'H3') {
      if (el.tagName === 'P') {
        var strongs = el.querySelectorAll('strong');
        for (var i = 0; i < strongs.length; i++) {
          var text = strongs[i].textContent.trim();
          if (text.length > 2) points.push(text);
        }
      }
      if (el.classList && el.classList.contains('highlight-box')) {
        var p = el.querySelector('p');
        if (p) points.push(p.textContent.trim().substring(0, 120));
      }
      el = el.nextElementSibling;
    }
    return points.slice(0, 4);
  }

  function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function inject(slug) {
    var content = document.getElementById('cvContent');
    if (!content) return;

    // Find the main content zone
    var contenu = content.querySelector('#contenu .course-content') ||
                  content.querySelector('#contenu') ||
                  content.querySelector('.course-content');
    if (!contenu) return;

    var h3s = contenu.querySelectorAll('h3');
    if (h3s.length < 2) return;

    var saved = loadSaved();

    // Insert a prompt every 2 h3 sections
    for (var i = 1; i < h3s.length; i += 2) {
      var h3 = h3s[i];
      var promptId = slug + '--h3-' + i;
      var question = QUESTIONS[(i >> 1) % QUESTIONS.length];
      var keyPoints = extractKeyPoints(h3);
      var savedEntry = saved[promptId];
      var savedText = savedEntry ? savedEntry.text : '';

      // Find insertion point
      var insertBefore = h3s[i + 1] || null;

      var div = document.createElement('div');
      div.className = 'ei-prompt';
      div.dataset.eiId = promptId;

      var hintsHtml = '';
      if (keyPoints.length > 0) {
        hintsHtml = '<div class="ei-hints" style="display:none">' +
          '<p>Points clés :</p><ul>' +
          keyPoints.map(function (p) { return '<li>' + escHtml(p) + '</li>'; }).join('') +
          '</ul></div>';
      }

      div.innerHTML =
        '<button class="ei-trigger" aria-expanded="false">' +
          '<span class="ei-icon">?</span>' +
          '<span class="ei-question">' + escHtml(question) + '</span>' +
          '<span class="ei-chevron">\u203A</span>' +
        '</button>' +
        '<div class="ei-panel" style="display:none">' +
          '<textarea class="ei-textarea" placeholder="\u00c9cris ta r\u00e9flexion\u2026" rows="3">' +
            escHtml(savedText) +
          '</textarea>' +
          '<div class="ei-actions">' +
            (keyPoints.length > 0 ? '<button class="ei-hint-btn">Voir les points cl\u00e9s</button>' : '') +
            '<button class="ei-save-btn' + (savedText ? ' saved' : '') + '">' +
              (savedText ? '\u2713 Sauvegard\u00e9' : 'Sauvegarder') +
            '</button>' +
          '</div>' +
          hintsHtml +
        '</div>';

      contenu.insertBefore(div, insertBefore);
    }

    // Event delegation
    contenu.addEventListener('click', function (e) {
      var trigger = e.target.closest('.ei-trigger');
      if (trigger) {
        var prompt = trigger.closest('.ei-prompt');
        var panel = prompt.querySelector('.ei-panel');
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!expanded));
        prompt.classList.toggle('open', !expanded);
        panel.style.display = expanded ? 'none' : 'block';
        if (!expanded) {
          var ta = panel.querySelector('.ei-textarea');
          if (ta) setTimeout(function () { ta.focus(); }, 80);
        }
        return;
      }

      var hintBtn = e.target.closest('.ei-hint-btn');
      if (hintBtn) {
        var hints = hintBtn.closest('.ei-panel').querySelector('.ei-hints');
        if (hints) {
          var hidden = hints.style.display === 'none';
          hints.style.display = hidden ? 'block' : 'none';
          hintBtn.textContent = hidden ? 'Masquer les points cl\u00e9s' : 'Voir les points cl\u00e9s';
        }
        return;
      }

      var saveBtn = e.target.closest('.ei-save-btn');
      if (saveBtn) {
        var prompt2 = saveBtn.closest('.ei-prompt');
        var id = prompt2.dataset.eiId;
        var text = prompt2.querySelector('.ei-textarea').value.trim();
        if (text) {
          saveReflection(id, text);
          saveBtn.classList.add('saved');
          saveBtn.textContent = '\u2713 Sauvegard\u00e9';
          prompt2.querySelector('.ei-textarea').addEventListener('input', function () {
            saveBtn.classList.remove('saved');
            saveBtn.textContent = 'Sauvegarder';
          }, { once: true });
        }
        return;
      }
    });
  }

  window.EI = { inject: inject };
})();
