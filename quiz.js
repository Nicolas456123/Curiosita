// ══════════════════════════════════════════════════════
//  Curiosita — Quiz + Navigation
//  Logique quiz (answer, nextQ, prevQ, showResult, resetQuiz)
//  + goTo() scroll navigation + scroll spy
//  Chargé par toutes les pages cours et hub
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Quiz logic (only if quiz is present on page) ──
  const questions = document.querySelectorAll('.question-block');

  if (questions.length > 0) {
    var currentQ = 0, score = 0;
    var answered = new Array(questions.length).fill(false);
    var dotsContainer = document.getElementById('qDots');

    if (dotsContainer) {
      questions.forEach(function (_, i) {
        var d = document.createElement('div');
        d.className = 'q-dot' + (i === 0 ? ' current' : '');
        dotsContainer.appendChild(d);
      });
    }

    function updateDots() {
      document.querySelectorAll('.q-dot').forEach(function (d, i) {
        d.className = 'q-dot';
        if (answered[i]) d.classList.add('done');
        if (i === currentQ) d.classList.add('current');
      });
    }

    window.answer = function (el, ok) {
      if (answered[currentQ]) return;
      answered[currentQ] = true;
      el.closest('.question-block').querySelectorAll('.option').forEach(function (o) { o.classList.add('disabled'); });
      el.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) {
        el.closest('.question-block').querySelectorAll('.option').forEach(function (o) {
          if (o.onclick && o.onclick.toString().includes('true')) o.classList.add('correct');
        });
      } else {
        score++;
        var sd = document.getElementById('scoreDisplay');
        if (sd) sd.textContent = score;
      }
      var fb = el.closest('.question-block').querySelector('.q-feedback');
      if (fb) fb.classList.add('show', ok ? 'good' : 'bad');
      var btnNext = document.getElementById('btnNext');
      if (btnNext) btnNext.disabled = false;
      updateDots();
    };

    window.nextQ = function () {
      var btnNext = document.getElementById('btnNext');
      var btnPrev = document.getElementById('btnPrev');
      if (currentQ < questions.length - 1) {
        questions[currentQ].classList.remove('active');
        currentQ++;
        questions[currentQ].classList.add('active');
        if (btnPrev) btnPrev.disabled = false;
        if (btnNext) btnNext.disabled = !answered[currentQ];
        if (currentQ === questions.length - 1 && btnNext) btnNext.textContent = 'Terminer';
        updateDots();
      } else {
        showResult();
      }
    };

    window.prevQ = function () {
      var btnNext = document.getElementById('btnNext');
      var btnPrev = document.getElementById('btnPrev');
      if (currentQ > 0) {
        questions[currentQ].classList.remove('active');
        currentQ--;
        questions[currentQ].classList.add('active');
        if (btnPrev) btnPrev.disabled = currentQ === 0;
        if (btnNext) {
          btnNext.disabled = !answered[currentQ];
          btnNext.textContent = 'Suivant \u2192';
        }
        updateDots();
      }
    };

    function showResult() {
      var quizBody = document.getElementById('quizBody');
      var quizResult = document.getElementById('quizResult');
      var resultScore = document.getElementById('resultScore');
      var resultMsg = document.getElementById('resultMsg');
      if (quizBody) quizBody.style.display = 'none';
      if (quizResult) quizResult.style.display = 'block';
      if (resultScore) resultScore.textContent = score + '/' + questions.length;
      if (resultMsg) {
        var pct = score / questions.length;
        var msg = pct < 0.4 ? 'Continue !' : pct < 0.6 ? 'Pas mal !' : pct < 0.8 ? 'Bien !' : pct < 1 ? 'Très bien !' : 'Parfait !';
        resultMsg.textContent = msg;
      }
    }

    window.resetQuiz = function () {
      score = 0;
      currentQ = 0;
      answered = new Array(questions.length).fill(false);
      var sd = document.getElementById('scoreDisplay');
      if (sd) sd.textContent = 0;
      var quizBody = document.getElementById('quizBody');
      var quizResult = document.getElementById('quizResult');
      if (quizBody) quizBody.style.display = 'block';
      if (quizResult) quizResult.style.display = 'none';
      questions.forEach(function (q, i) {
        q.classList.toggle('active', i === 0);
        q.querySelectorAll('.option').forEach(function (o) { o.className = 'option'; });
        q.querySelectorAll('.q-feedback').forEach(function (f) { f.className = 'q-feedback'; });
      });
      var btnPrev = document.getElementById('btnPrev');
      var btnNext = document.getElementById('btnNext');
      if (btnPrev) btnPrev.disabled = true;
      if (btnNext) { btnNext.disabled = true; btnNext.textContent = 'Suivant \u2192'; }
      updateDots();
    };
  }

  // ── goTo() scroll navigation ──
  window.goTo = function (id, el) {
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.sidebar-link').forEach(function (l) { l.classList.remove('active'); });
    if (el) el.classList.add('active');
  };

  // ── Scroll spy: highlight current section in sidebar ──
  var links = document.querySelectorAll('.sidebar-link[data-section]');
  if (links.length) {
    window.addEventListener('scroll', function () {
      var current = null;
      links.forEach(function (l) {
        var s = document.getElementById(l.dataset.section);
        if (s && s.getBoundingClientRect().top <= 120) current = l;
      });
      if (current) {
        links.forEach(function (l) { l.classList.remove('active'); });
        current.classList.add('active');
      }
    }, { passive: true });
  }
})();
