// ══════════════════════════════════════════════════════
//  Curiosità — Pretest Module
//  "Que sais-tu déjà ?" before reading a page
//  Shows quiz questions before content, then post-test after
// ══════════════════════════════════════════════════════

const Pretest = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_pretest';

  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  // Extract questions from the quiz section of the page content HTML
  function extractQuestions(contentHtml) {
    var tmp = document.createElement('div');
    tmp.innerHTML = contentHtml;
    var blocks = tmp.querySelectorAll('.question-block');
    if (!blocks.length) return [];

    var questions = [];
    blocks.forEach(function (q, i) {
      if (i >= 5) return; // Max 5 questions for pretest
      var text = q.querySelector('.q-text');
      var options = q.querySelectorAll('.option');
      var feedback = q.querySelector('.q-feedback');
      if (!text || !options.length) return;

      var opts = [];
      var correctIdx = -1;
      options.forEach(function (o, j) {
        opts.push(o.textContent.trim());
        if (o.getAttribute('data-correct') === '1') correctIdx = j;
      });

      if (correctIdx >= 0) {
        questions.push({
          text: text.textContent.trim(),
          options: opts,
          correct: correctIdx,
          feedback: feedback ? feedback.textContent.trim() : ''
        });
      }
    });
    return questions;
  }

  // Show pretest screen
  function show(slug, contentHtml, onComplete) {
    var questions = extractQuestions(contentHtml);
    if (questions.length < 2) {
      onComplete(null);
      return;
    }

    // Check if already pretested this page recently (last 24h)
    var data = loadData();
    if (data[slug] && (Date.now() - data[slug].time) < 86400000) {
      onComplete(null);
      return;
    }

    var content = document.getElementById('cvContent');
    if (!content) { onComplete(null); return; }

    var currentQ = 0;
    var answers = new Array(questions.length).fill(-1);

    function renderQuestion() {
      var q = questions[currentQ];
      var optsHtml = q.options.map(function (o, i) {
        var selected = answers[currentQ] === i;
        return '<button class="pretest-opt' + (selected ? ' selected' : '') + '" data-idx="' + i + '">' + escHtml(o) + '</button>';
      }).join('');

      var dotsHtml = questions.map(function (_, i) {
        var cls = 'pretest-dot';
        if (i === currentQ) cls += ' current';
        if (answers[i] >= 0) cls += ' answered';
        return '<div class="' + cls + '"></div>';
      }).join('');

      content.innerHTML =
        '<div class="pretest-screen">' +
          '<div class="pretest-header">' +
            '<div class="pretest-badge">Pr\u00e9-test</div>' +
            '<h2 class="pretest-title">Que sais-tu d\u00e9j\u00e0 ?</h2>' +
            '<p class="pretest-subtitle">R\u00e9ponds avant de lire \u2014 m\u00eame sans savoir, c\u2019est normal.</p>' +
          '</div>' +
          '<div class="pretest-body">' +
            '<div class="pretest-qnum">Question ' + (currentQ + 1) + ' / ' + questions.length + '</div>' +
            '<div class="pretest-qtext">' + escHtml(q.text) + '</div>' +
            '<div class="pretest-options">' + optsHtml + '</div>' +
            '<div class="pretest-dots">' + dotsHtml + '</div>' +
            '<div class="pretest-nav">' +
              (currentQ > 0 ? '<button class="pretest-btn pretest-prev">\u2190 Pr\u00e9c\u00e9dent</button>' : '<span></span>') +
              '<button class="pretest-btn pretest-next' + (answers[currentQ] < 0 ? ' disabled' : '') + '">' +
                (currentQ === questions.length - 1 ? 'Voir mes r\u00e9sultats \u2192' : 'Suivant \u2192') +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';

      // Event listeners
      content.querySelectorAll('.pretest-opt').forEach(function (btn) {
        btn.addEventListener('click', function () {
          answers[currentQ] = parseInt(btn.dataset.idx);
          renderQuestion();
        });
      });

      var prevBtn = content.querySelector('.pretest-prev');
      if (prevBtn) prevBtn.addEventListener('click', function () { currentQ--; renderQuestion(); });

      var nextBtn = content.querySelector('.pretest-next');
      if (nextBtn && answers[currentQ] >= 0) {
        nextBtn.addEventListener('click', function () {
          if (currentQ < questions.length - 1) {
            currentQ++;
            renderQuestion();
          } else {
            showResults();
          }
        });
      }
    }

    function showResults() {
      var correct = 0;
      questions.forEach(function (q, i) {
        if (answers[i] === q.correct) correct++;
      });
      var pct = Math.round(correct / questions.length * 100);

      var detailHtml = questions.map(function (q, i) {
        var isCorrect = answers[i] === q.correct;
        return '<div class="pretest-result-row ' + (isCorrect ? 'correct' : 'wrong') + '">' +
          '<span class="pretest-result-icon">' + (isCorrect ? '\u2713' : '\u2717') + '</span>' +
          '<span class="pretest-result-text">' + escHtml(q.text) + '</span>' +
          (!isCorrect ? '<span class="pretest-result-answer">' + escHtml(q.options[q.correct]) + '</span>' : '') +
        '</div>';
      }).join('');

      var msg = pct === 100 ? 'Impressionnant !' :
                pct >= 60 ? 'Bonnes bases !' :
                pct >= 20 ? 'Tu vas apprendre beaucoup !' : 'Parfait pour d\u00e9couvrir !';

      content.innerHTML =
        '<div class="pretest-screen">' +
          '<div class="pretest-header">' +
            '<div class="pretest-badge">Pr\u00e9-test</div>' +
            '<h2 class="pretest-title">' + msg + '</h2>' +
          '</div>' +
          '<div class="pretest-body">' +
            '<div class="pretest-score-big">' + correct + ' / ' + questions.length + '</div>' +
            '<div class="pretest-score-pct">' + pct + '% correct</div>' +
            '<div class="pretest-results">' + detailHtml + '</div>' +
            '<button class="pretest-btn pretest-continue">Lire l\u2019article \u2192</button>' +
            '<p class="pretest-hint">Les questions reviendront apr\u00e8s la lecture pour mesurer ta progression.</p>' +
          '</div>' +
        '</div>';

      // Save pretest results
      var d = loadData();
      d[slug] = { time: Date.now(), pre: correct, total: questions.length, answers: answers.slice() };
      saveData(d);

      // Add failed questions to SR
      if (typeof SR !== 'undefined') {
        questions.forEach(function (q, i) {
          if (answers[i] !== q.correct) {
            SR.addCard({
              front: q.text,
              back: q.options[q.correct] + (q.feedback ? '\n' + q.feedback : ''),
              type: 'pretest-failed',
              source: '/Curiosita/pages/' + slug + '.html',
              tags: ['pretest']
            });
          }
        });
      }

      content.querySelector('.pretest-continue').addEventListener('click', function () {
        onComplete({ pre: correct, total: questions.length, questions: questions, answers: answers });
      });
    }

    renderQuestion();
  }

  // Show post-test comparison (called after reading)
  function showPostTestBanner(slug) {
    var data = loadData();
    var entry = data[slug];
    if (!entry || !entry.pre && entry.pre !== 0) return;

    var content = document.getElementById('cvContent');
    if (!content) return;

    // Check if quiz section exists to compare
    var quizSec = content.querySelector('#quiz');
    if (!quizSec) return;

    // Add a banner before the quiz
    var banner = document.createElement('div');
    banner.className = 'pretest-postbanner';
    banner.innerHTML =
      '<div class="pretest-postbanner-inner">' +
        '<span class="pretest-postbanner-icon">\uD83C\uDFAF</span>' +
        '<span>Pr\u00e9-test : <strong>' + entry.pre + '/' + entry.total + '</strong> \u2014 Fais le quiz maintenant pour mesurer ta progression !</span>' +
      '</div>';

    quizSec.insertBefore(banner, quizSec.firstChild);
  }

  function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  return { show: show, showPostTestBanner: showPostTestBanner };
})();
