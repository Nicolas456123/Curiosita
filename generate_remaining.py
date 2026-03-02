#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Generate enriched Musique course pages for Curiosita."""

import os

BASE = os.path.dirname(os.path.abspath(__file__))

STYLE_BLOCK = """:root { --accent: #e8b07a; --accent2: #ffcc80; --accent-dim: rgba(232,176,122,0.08); }
.hero { padding: 6rem 2.5rem 2.5rem; background: radial-gradient(ellipse 50% 40% at 25% 50%, rgba(232,176,122,0.04) 0%, transparent 70%); }
.hero h1 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); }"""

SCRIPT_BLOCK = """<script>
const questions = document.querySelectorAll('.question-block');
let currentQ = 0, score = 0;
let answered = new Array(questions.length).fill(false);
const dotsContainer = document.getElementById('qDots');
questions.forEach((_, i) => { const d = document.createElement('div'); d.className = 'q-dot' + (i === 0 ? ' current' : ''); dotsContainer.appendChild(d); });
function updateDots() { document.querySelectorAll('.q-dot').forEach((d, i) => { d.className = 'q-dot'; if (answered[i]) d.classList.add('done'); if (i === currentQ) d.classList.add('current'); }); }
function answer(el, ok) { if (answered[currentQ]) return; answered[currentQ] = true; el.closest('.question-block').querySelectorAll('.option').forEach(o => o.classList.add('disabled')); el.classList.add(ok ? 'correct' : 'wrong'); if (!ok) el.closest('.question-block').querySelectorAll('.option').forEach(o => { if(o.onclick.toString().includes('true')) o.classList.add('correct'); }); else { score++; document.getElementById('scoreDisplay').textContent = score; } el.closest('.question-block').querySelector('.q-feedback').classList.add('show', ok ? 'good' : 'bad'); document.getElementById('btnNext').disabled = false; updateDots(); }
function nextQ() { if (currentQ < questions.length - 1) { questions[currentQ].classList.remove('active'); currentQ++; questions[currentQ].classList.add('active'); document.getElementById('btnPrev').disabled = false; document.getElementById('btnNext').disabled = !answered[currentQ]; if (currentQ === questions.length - 1) document.getElementById('btnNext').textContent = 'Terminer'; updateDots(); } else { showResult(); } }
function prevQ() { if (currentQ > 0) { questions[currentQ].classList.remove('active'); currentQ--; questions[currentQ].classList.add('active'); document.getElementById('btnPrev').disabled = currentQ === 0; document.getElementById('btnNext').disabled = !answered[currentQ]; document.getElementById('btnNext').textContent = 'Suivant \\u2192'; updateDots(); } }
function showResult() { document.getElementById('quizBody').style.display = 'none'; document.getElementById('quizResult').style.display = 'block'; document.getElementById('resultScore').textContent = score + '/' + questions.length; var p = Math.round(score/questions.length*100); var m = p===100?'Parfait !':p>=70?'Tr\\u00e8s bien !':p>=40?'Pas mal !':'Continue !'; document.getElementById('resultMsg').textContent = m; }
function resetQuiz() { score = 0; currentQ = 0; answered = new Array(questions.length).fill(false); document.getElementById('scoreDisplay').textContent = 0; document.getElementById('quizBody').style.display = 'block'; document.getElementById('quizResult').style.display = 'none'; questions.forEach((q,i) => { q.classList.toggle('active', i===0); q.querySelectorAll('.option').forEach(o=>o.className='option'); q.querySelectorAll('.q-feedback').forEach(f=>f.className='q-feedback'); }); document.getElementById('btnPrev').disabled = true; document.getElementById('btnNext').disabled = true; document.getElementById('btnNext').textContent = 'Suivant \\u2192'; updateDots(); }
function goTo(id,el){document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'});document.querySelectorAll('.sidebar-link').forEach(l=>l.classList.remove('active'));if(el)el.classList.add('active');}
(function(){var links=document.querySelectorAll('.sidebar-link[data-section]');if(!links.length)return;window.addEventListener('scroll',function(){var current=null;links.forEach(function(l){var s=document.getElementById(l.dataset.section);if(s&&s.getBoundingClientRect().top<=120)current=l;});if(current){links.forEach(function(l){l.classList.remove('active');});current.classList.add('active');}},{passive:true});})();
</script>"""


def make_page(filepath, title, breadcrumb_parent, breadcrumb_parent_link, breadcrumb_current,
              hero_emoji, hero_domain, hero_level, hero_time, hero_title, hero_desc,
              sidebar_parent_label, sidebar_parent_link, sidebar_links,
              intro_subtitle, intro_text, intro_highlight, intro_text2,
              course_subtitle, course_content,
              quiz_emoji, quiz_title, questions,
              approfondir_content,
              prev_link, prev_title, next_link, next_title):

    total_q = len(questions)

    # Build sidebar links HTML
    sidebar_html = ""
    for label, href, is_active in sidebar_links:
        if is_active:
            sidebar_html += f'    <a class="sidebar-link active" href="#">{label}</a>\n'
        else:
            sidebar_html += f'    <a class="sidebar-link" href="{href}">{label}</a>\n'

    # Build questions HTML
    questions_html = ""
    for i, q in enumerate(questions):
        active = ' active' if i == 0 else ''
        questions_html += f'''          <div class="question-block{active}" data-q="{i}">
            <p class="q-num">Question {i+1} / {total_q}</p>
            <p class="q-text">{q['text']}</p>
            <div class="options">
'''
        for opt in q['options']:
            questions_html += f'              <div class="option" onclick="answer(this,{str(opt[1]).lower()})">{opt[0]}</div>\n'
        questions_html += f'''            </div>
            <div class="q-feedback">{q['feedback']}</div>
          </div>
'''

    # Build course nav
    nav_prev = f'<a href="{prev_link}" class="prev"><span class="course-nav-label">Cours pr\u00e9c\u00e9dent</span><span class="course-nav-title">\u2190 {prev_title}</span></a>' if prev_link else '<div></div>'
    nav_next = f'<a href="{next_link}" class="next"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">{next_title} \u2192</span></a>' if next_link else '<div></div>'

    html = f'''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=Lora:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../style.css">
<style>
{STYLE_BLOCK}
</style>
</head>
<body>
<nav>
  <a href="../../curiosita.html" class="logo">Curiosita.</a>
  <div class="breadcrumb"><a href="../../musique-page.html">Musique</a> \u203a <a href="{breadcrumb_parent_link}">{breadcrumb_parent}</a> \u203a <span>{breadcrumb_current}</span></div>
</nav>
<div class="hero">
  <div class="hero-meta">
    <span class="tag-domain">{hero_emoji} {hero_domain}</span>
    <span class="tag-level">{hero_level}</span>
    <span class="tag-time">\u23f1 {hero_time}</span>
  </div>
  <h1><em>{hero_title}</em></h1>
  <p class="hero-desc">{hero_desc}</p>
</div>
<div class="layout">
  <aside class="sidebar">
    <a class="sidebar-link" href="{sidebar_parent_link}" style="color:var(--accent);margin-bottom:0.5rem;font-weight:500;">\u2190 {sidebar_parent_label}</a>
    <p class="sidebar-title">Ce cours</p>
    <a class="sidebar-link active" data-section="introduction" onclick="goTo('introduction',this)">\U0001f4d6 Introduction</a>
    <a class="sidebar-link" data-section="cours" onclick="goTo('cours',this)">\U0001f4dd Le cours</a>
    <a class="sidebar-link" data-section="quiz" onclick="goTo('quiz',this)">\U0001f3af Quiz</a>
    <a class="sidebar-link" data-section="approfondir" onclick="goTo('approfondir',this)">\U0001f52d Pour aller plus loin</a>
    <p class="sidebar-title">Autres cours</p>
{sidebar_html}  </aside>
  <main class="main">
    <section class="content-section" id="introduction">
      <div class="section-header"><div class="section-num">01</div><div class="section-info"><h2>Introduction</h2><p>{intro_subtitle}</p></div></div>
      <p class="resume-text">{intro_text}</p>
      <div class="highlight-box"><p>{intro_highlight}</p></div>
      <p class="resume-text">{intro_text2}</p>
    </section>
    <section class="content-section" id="cours">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>Le cours</h2><p>{course_subtitle}</p></div></div>
      <div class="course-content">
{course_content}
      </div>
    </section>
    <section class="content-section" id="quiz">
      <div class="section-header"><div class="section-num">03</div><div class="section-info"><h2>Quiz</h2><p>Testez votre compr\u00e9hension</p></div></div>
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-title-text">{quiz_emoji} {quiz_title} \u2014 Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">{total_q}</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
{questions_html}        </div>
        <div class="quiz-result" id="quizResult">
          <div class="result-score-big" id="resultScore">0/{total_q}</div>
          <div class="result-msg" id="resultMsg"></div>
          <button class="btn-retry" onclick="resetQuiz()">\u21ba Recommencer</button>
        </div>
        <div class="quiz-nav">
          <button class="btn-quiz btn-prev" onclick="prevQ()" id="btnPrev" disabled>\u2190 Pr\u00e9c\u00e9dent</button>
          <div class="q-dots" id="qDots"></div>
          <button class="btn-quiz btn-next" onclick="nextQ()" id="btnNext" disabled>Suivant \u2192</button>
        </div>
      </div>
    </section>
    <section class="content-section" id="approfondir">
      <div class="section-header"><div class="section-num">04</div><div class="section-info"><h2>Pour aller plus loin</h2><p>Ressources et pratique</p></div></div>
      <div class="course-content">
{approfondir_content}
      </div>
    </section>
    <div class="course-nav">
      {nav_prev}
      {nav_next}
    </div>
  </main>
</div>
{SCRIPT_BLOCK}
</body>
</html>'''

    full_path = os.path.join(BASE, 'musique', filepath)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Written: {filepath}")


# ============================================================
# ROMANTIQUE
# ============================================================
make_page(
    filepath='histoire/romantique.html',
    title='Le romantisme \u2014 Histoire \u2014 Curiosita',
    breadcrumb_parent='Histoire', breadcrumb_parent_link='../histoire.html', breadcrumb_current='Romantique',
    hero_emoji='\U0001f339', hero_domain='Histoire de la musique', hero_level='Interm\u00e9diaire', hero_time='~1h10',
    hero_title='Le romantisme',
    hero_desc="L'\u00e2ge de la passion et de la virtuosit\u00e9 \u2014 Chopin, Liszt, Wagner et les grandes symphonies de Brahms, Tcha\u00efkovsky et Mahler (1820-1910).",
    sidebar_parent_label='Histoire', sidebar_parent_link='../histoire.html',
    sidebar_links=[('Baroque','baroque.html',False),('Classique','classique.html',False),('Romantique','#',True),('Moderne','moderne.html',False),('Contemporain','contemporain.html',False)],
    intro_subtitle="L'expression des \u00e9motions au premier plan",
    intro_text='Le <strong>romantisme musical</strong> (1820-1910) place l\'\u00e9motion individuelle, l\'imagination et la libert\u00e9 cr\u00e9atrice au centre de l\'art. Les compositeurs romantiques s\'affranchissent des r\u00e8gles classiques pour exprimer des sentiments intimes, des paysages int\u00e9rieurs et des aspirations h\u00e9ro\u00efques.',
    intro_highlight='<strong>Rupture fondamentale :</strong> Le musicien romantique n\'est plus un artisan au service d\'un m\u00e9c\u00e8ne, mais un <em>artiste</em> libre qui exprime sa vision personnelle. Le concert public remplace le salon aristocratique. Le virtuose devient une star (Liszt, Paganini).',
    intro_text2='Le romantisme enrichit consid\u00e9rablement le langage harmonique, agrandit l\'orchestre, invente de nouvelles formes (po\u00e8me symphonique, Lied, nocturne) et pousse la tonalit\u00e9 \u00e0 ses limites. Wagner, avec le chromatisme de <em>Tristan et Isolde</em>, annonce la dissolution du syst\u00e8me tonal.',
    course_subtitle='Le romantisme musical (1820-1910)',
    course_content="""        <h3>Le premier romantisme (1820-1850)</h3>
        <p><strong>Fr\u00e9d\u00e9ric Chopin</strong> (1810-1849), Polonais exil\u00e9 \u00e0 Paris, est le po\u00e8te du piano. Ses nocturnes, \u00e9tudes, pr\u00e9ludes et ballades explorent toute la palette expressive de l'instrument. Son \u00e9criture pianistique, d'une d\u00e9licatesse inou\u00efe, influence encore les pianistes d'aujourd'hui.</p>
        <p><strong>Robert Schumann</strong> (1810-1856) incarne l'artiste romantique par excellence \u2014 passionn\u00e9, tourment\u00e9, divis\u00e9 entre r\u00eave et r\u00e9alit\u00e9. Ses cycles de Lieder (<em>Dichterliebe</em>) et ses oeuvres pour piano sont des mod\u00e8les d'expression intime.</p>
        <p><strong>Franz Liszt</strong> (1811-1886) r\u00e9volutionne le r\u00e9cital de piano et invente le <strong>po\u00e8me symphonique</strong>, une oeuvre orchestrale en un mouvement inspir\u00e9e par un programme extra-musical. Premier virtuose \u00e0 jouer de m\u00e9moire face au public.</p>

        <h3>L'op\u00e9ra romantique</h3>
        <div class="highlight-box">
          <p><strong>Richard Wagner</strong> (1813-1883) transforme l'op\u00e9ra en oeuvre d'art totale (<em>Gesamtkunstwerk</em>), fusionnant musique, po\u00e9sie, th\u00e9\u00e2tre et arts visuels. Son utilisation du <em>leitmotiv</em> et son chromatisme extr\u00eame dans <em>Tristan et Isolde</em> (1865) repoussent les limites de la tonalit\u00e9.</p>
        </div>
        <p><strong>Giuseppe Verdi</strong> (1813-1901), son contemporain italien, reste fid\u00e8le \u00e0 la tradition du bel canto tout en l'enrichissant d'une profondeur dramatique sans pr\u00e9c\u00e9dent. Ses op\u00e9ras (<em>La Traviata</em>, <em>A\u00efda</em>, <em>Otello</em>) sont les piliers du r\u00e9pertoire lyrique mondial.</p>

        <h3>Le romantisme tardif (1850-1910)</h3>
        <p><strong>Johannes Brahms</strong> (1833-1897) repr\u00e9sente l'aile \u00ab conservatrice \u00bb du romantisme, fid\u00e8le aux formes classiques tout en les enrichissant d'une harmonie somptueuse. Ses quatre symphonies et son <em>Requiem allemand</em> sont des monuments.</p>
        <p><strong>Piotr Ilitch Tcha\u00efkovsky</strong> (1840-1893) est le ma\u00eetre de la m\u00e9lodie passionn\u00e9e. Ses ballets (<em>Le Lac des cygnes</em>, <em>Casse-noisette</em>), ses symphonies et ses concertos sont parmi les oeuvres les plus populaires du r\u00e9pertoire.</p>
        <p><strong>Gustav Mahler</strong> (1860-1911) porte la symphonie \u00e0 des dimensions colossales. Ses dix symphonies, v\u00e9ritables \u00ab mondes \u00bb sonores, m\u00ealent le sublime et le trivial, le grandiose et l'intime, annon\u00e7ant le XXe si\u00e8cle.</p>

        <h3>Formes et genres romantiques</h3>
        <ul>
          <li><strong>Le Lied</strong> \u2014 m\u00e9lodie pour voix et piano sur un po\u00e8me (Schubert, Schumann)</li>
          <li><strong>Le po\u00e8me symphonique</strong> \u2014 oeuvre orchestrale \u00e0 programme (Liszt, Strauss)</li>
          <li><strong>Le nocturne</strong> \u2014 pi\u00e8ce pour piano \u00e9voquant la nuit (Chopin, Field)</li>
          <li><strong>La ballade</strong> \u2014 r\u00e9cit musical libre et narratif (Chopin)</li>
          <li><strong>Le drame musical</strong> \u2014 l'op\u00e9ra wagn\u00e9rien continu, sans airs s\u00e9par\u00e9s</li>
        </ul>

        <h3>Les \u00e9coles nationales</h3>
        <p>Le romantisme voit l'\u00e9mergence d'<strong>\u00e9coles nationales</strong> qui puisent dans le folklore et l'histoire de leurs pays :</p>
        <ul>
          <li><strong>Russie</strong> \u2014 le \u00ab Groupe des Cinq \u00bb (Moussorgski, Rimski-Korsakov, Borodine, Cui, Balakirev) cr\u00e9e une musique russe authentique, loin des mod\u00e8les allemands</li>
          <li><strong>Tch\u00e9quie</strong> \u2014 Smetana (<em>Ma Patrie</em>) et Dvo\u0159\u00e1k (<em>Symphonie du Nouveau Monde</em>) fondent la musique tch\u00e8que</li>
          <li><strong>Scandinavie</strong> \u2014 Grieg en Norv\u00e8ge (<em>Peer Gynt</em>), Sibelius en Finlande (<em>Finlandia</em>)</li>
          <li><strong>Espagne</strong> \u2014 Alb\u00e9niz, Granados et de Falla int\u00e8grent les rythmes et m\u00e9lodies du flamenco</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Franz Schubert</strong> (1797-1828), souvent class\u00e9 entre classicisme et romantisme, est le p\u00e8re du Lied. Ses plus de 600 Lieder transforment des po\u00e8mes de Goethe, Schiller et Heine en joyaux musicaux. Sa <em>Symphonie \u00ab Inachev\u00e9e \u00bb</em> et son dernier quatuor sont des chefs-d'oeuvre d'intensit\u00e9 \u00e9motionnelle.</p>
        </div>

        <h3>La virtuosit\u00e9 romantique</h3>
        <p>L'\u00e9poque romantique est l'\u00e2ge d'or de la <strong>virtuosit\u00e9</strong>. <strong>Niccol\u00f2 Paganini</strong> (1782-1840) est le premier super-virtuose : ses Caprices pour violon solo repoussent les limites techniques de l'instrument. Son jeu d\u00e9moniaque fascine le public et inspire Liszt, Schumann et Brahms.</p>
        <p>Liszt transpose cette virtuosit\u00e9 au piano, inventant le <strong>r\u00e9cital solo</strong> (un seul artiste sur sc\u00e8ne pendant tout le concert). Ses \u00c9tudes d'ex\u00e9cution transcendante et sa Sonate en si mineur restent parmi les oeuvres les plus exigeantes du r\u00e9pertoire pianistique.</p>

        <h3>\u00c9coute recommand\u00e9e</h3>
        <ul>
          <li><strong>Schubert \u2014 Winterreise D. 911</strong> : cycle de 24 Lieder sur des po\u00e8mes de M\u00fcller, voyage int\u00e9rieur d'un amant rejet\u00e9 \u00e0 travers un paysage hivernal</li>
          <li><strong>Chopin \u2014 Ballade n\u00b01 en sol mineur op. 23</strong> : r\u00e9cit musical libre d'une intensit\u00e9 dramatique croissante, sommet du piano romantique</li>
          <li><strong>Wagner \u2014 Pr\u00e9lude de Tristan et Isolde</strong> : l'accord de Tristan ouvre une oeuvre qui repousse la tonalit\u00e9 \u00e0 ses limites extr\u00eames</li>
          <li><strong>Mahler \u2014 Symphonie n\u00b02 \u00ab R\u00e9surrection \u00bb</strong> : fresque symphonique monumentale passant du fun\u00e8bre au triomphal, avec choeur et solistes</li>
        </ul>

        <h3>Techniques et pratique</h3>
        <p>Pour comprendre le romantisme, \u00e9coutez des <strong>Lieder</strong> avec le texte sous les yeux : observez comment la musique illustre chaque mot du po\u00e8me. Le <em>Erlk\u00f6nig</em> de Schubert est un excellent point de d\u00e9part. Comparez les approches de Brahms (formes classiques, harmonie enrichie) et de Wagner (formes continues, leitmotiv, chromatisme) pour saisir les deux p\u00f4les du romantisme tardif.</p>""",
    quiz_emoji='\U0001f339', quiz_title='Romantisme',
    questions=[
        {'text':'Qui a invent\u00e9 le po\u00e8me symphonique ?','options':[('Chopin',False),('Wagner',False),('Liszt',True),('Brahms',False)],'feedback':'Franz Liszt a invent\u00e9 le po\u00e8me symphonique, une oeuvre orchestrale en un mouvement inspir\u00e9e par un programme extra-musical.'},
        {'text':'Quel concept wagn\u00e9rien d\u00e9signe un motif musical associ\u00e9 \u00e0 un personnage ?','options':[('Le leitmotiv',True),('Le bel canto',False),('Le r\u00e9citatif',False),("L'aria",False)],'feedback':'Le leitmotiv est un motif musical r\u00e9current associ\u00e9 \u00e0 un personnage, un objet ou une id\u00e9e dans l\'op\u00e9ra wagn\u00e9rien.'},
        {'text':'Quel compositeur est particuli\u00e8rement associ\u00e9 aux nocturnes pour piano ?','options':[('Liszt',False),('Schumann',False),('Chopin',True),('Brahms',False)],'feedback':'Chopin a compos\u00e9 21 nocturnes pour piano, portant ce genre \u00e0 son apog\u00e9e. Ses nocturnes sont des mod\u00e8les de lyrisme pianistique.'},
        {'text':'Quel violoniste virtuose a inspir\u00e9 Liszt par son jeu d\u00e9moniaque ?','options':[('Joachim',False),('Paganini',True),('Sarasate',False),('Kreisler',False)],'feedback':'Niccol\u00f2 Paganini (1782-1840) est le premier super-virtuose. Ses Caprices pour violon solo repoussent les limites techniques et son jeu fascine le public europ\u00e9en.'},
        {'text':'Quel compositeur tch\u00e8que a compos\u00e9 la Symphonie du Nouveau Monde ?','options':[('Smetana',False),('Jan\u00e1\u010dek',False),('Dvo\u0159\u00e1k',True),('Bart\u00f3k',False)],'feedback':'Anton\u00edn Dvo\u0159\u00e1k a compos\u00e9 sa Symphonie n\u00b09 \u00ab Du Nouveau Monde \u00bb lors de son s\u00e9jour aux \u00c9tats-Unis (1893), int\u00e9grant des \u00e9l\u00e9ments de musique am\u00e9ricaine et tch\u00e8que.'},
        {'text':'Qui est consid\u00e9r\u00e9 comme le p\u00e8re du Lied ?','options':[('Schumann',False),('Brahms',False),('Schubert',True),('Wolf',False)],'feedback':'Franz Schubert a compos\u00e9 plus de 600 Lieder, transformant des po\u00e8mes en joyaux musicaux. L\'Erlk\u00f6nig et Winterreise sont ses chefs-d\'oeuvre dans ce genre.'},
    ],
    approfondir_content="""        <h3>Exercices pratiques</h3>
        <ul>
          <li><strong>Lecture de Lieder</strong> \u2014 \u00c9coutez le <em>Erlk\u00f6nig</em> de Schubert avec le texte allemand et sa traduction. Identifiez comment la musique illustre chaque personnage (p\u00e8re, enfant, roi des aulnes).</li>
          <li><strong>Comparaison stylistique</strong> \u2014 \u00c9coutez une symphonie de Brahms puis un po\u00e8me symphonique de Liszt. Comparez les approches formelles : structure classique vs forme libre \u00e0 programme.</li>
          <li><strong>Chronologie romantique</strong> \u2014 Placez sur une frise les compositeurs cl\u00e9s et leurs oeuvres majeures pour visualiser l'\u00e9volution du romantisme sur un si\u00e8cle.</li>
        </ul>
        <h3>\u00c9coutes essentielles</h3>
        <ul>
          <li><strong>Brahms \u2014 Symphonie n\u00b04 en mi mineur</strong> : le finale est une passacaille (variations sur une basse obstin\u00e9e), pont entre l'art baroque et le romantisme tardif.</li>
          <li><strong>Tcha\u00efkovsky \u2014 Concerto pour piano n\u00b01</strong> : ouverture monumentale aux accords ma\u00e9stueux, l'un des concertos les plus populaires et les plus exaltants du r\u00e9pertoire.</li>
          <li><strong>Verdi \u2014 La Traviata, \u00ab Libiamo ne' lieti calici \u00bb</strong> : c\u00e9l\u00e8bre brindisi qui incarne la joie de vivre et le lyrisme italien dans toute sa splendeur.</li>
          <li><strong>Richard Strauss \u2014 Ainsi parlait Zarathoustra</strong> : po\u00e8me symphonique dont la fanfare d'ouverture est devenue embl\u00e9matique gr\u00e2ce au cin\u00e9ma.</li>
        </ul>""",
    prev_link='classique.html', prev_title='La p\u00e9riode classique',
    next_link='moderne.html', next_title='La musique moderne'
)


# ============================================================
# MODERNE
# ============================================================
make_page(
    filepath='histoire/moderne.html',
    title='La musique moderne \u2014 Histoire \u2014 Curiosita',
    breadcrumb_parent='Histoire', breadcrumb_parent_link='../histoire.html', breadcrumb_current='Moderne',
    hero_emoji='\U0001f52e', hero_domain='Histoire de la musique', hero_level='Interm\u00e9diaire \u2192 Avanc\u00e9', hero_time='~1h',
    hero_title='La musique moderne',
    hero_desc='La rupture avec la tonalit\u00e9 \u2014 Debussy, Stravinsky et Schoenberg r\u00e9inventent le langage musical au tournant du XXe si\u00e8cle (1890-1950).',
    sidebar_parent_label='Histoire', sidebar_parent_link='../histoire.html',
    sidebar_links=[('Baroque','baroque.html',False),('Classique','classique.html',False),('Romantique','romantique.html',False),('Moderne','#',True),('Contemporain','contemporain.html',False)],
    intro_subtitle='La fin de la tonalit\u00e9 et la naissance de nouveaux langages',
    intro_text='La <strong>musique moderne</strong> (1890-1950) est une p\u00e9riode de bouleversements radicaux. Le syst\u00e8me tonal, socle de la musique occidentale depuis trois si\u00e8cles, est remis en question puis abandonn\u00e9 par certains compositeurs.',
    intro_highlight='<strong>Trois r\u00e9volutions parall\u00e8les :</strong> L\'<em>impressionnisme</em> de Debussy dissout la tonalit\u00e9 dans des couleurs harmoniques fluides. L\'<em>expressionnisme</em> de Schoenberg abolit la hi\u00e9rarchie tonale avec le dod\u00e9caphonisme. Le <em>primitivisme</em> de Stravinsky lib\u00e8re le rythme de la m\u00e9trique r\u00e9guli\u00e8re.',
    intro_text2='Cette p\u00e9riode voit aussi na\u00eetre les \u00e9coles nationales (Bart\u00f3k en Hongrie, Jan\u00e1\u010dek en Tch\u00e9quie, Sibelius en Finlande), le n\u00e9oclassicisme et les premi\u00e8res exp\u00e9riences de musique \u00e9lectronique.',
    course_subtitle='La musique moderne (1890-1950)',
    course_content="""        <h3>L'impressionnisme musical</h3>
        <p><strong>Claude Debussy</strong> (1862-1918) est le fondateur de l'impressionnisme musical. Influenc\u00e9 par les peintres impressionnistes et la po\u00e9sie symboliste, il cr\u00e9e une musique de couleurs, de timbres et d'atmosph\u00e8res. Son <em>Pr\u00e9lude \u00e0 l'apr\u00e8s-midi d'un faune</em> (1894) est souvent cit\u00e9 comme le point de d\u00e9part de la musique moderne.</p>
        <div class="highlight-box">
          <p><strong>Le langage debussyste :</strong> Utilisation de gammes par tons entiers, de gammes pentatoniques, d'accords parall\u00e8les et de p\u00e9dales harmoniques qui dissolvent le sentiment de tonalit\u00e9 sans l'abolir compl\u00e8tement.</p>
        </div>
        <p><strong>Maurice Ravel</strong> (1875-1937), souvent associ\u00e9 \u00e0 Debussy, d\u00e9veloppe un style plus pr\u00e9cis et cisel\u00e9. Son <em>Bol\u00e9ro</em>, son <em>Concerto pour la main gauche</em> et son orchestration du <em>Tableaux d'une exposition</em> de Moussorgski t\u00e9moignent d'un art orchestral \u00e9blouissant.</p>

        <h3>Le dod\u00e9caphonisme</h3>
        <p><strong>Arnold Schoenberg</strong> (1874-1951) franchit le pas de l'<strong>atonalit\u00e9</strong> d\u00e8s 1908. En 1921, il codifie la <strong>m\u00e9thode de composition avec douze sons</strong> (dod\u00e9caphonisme) : les 12 notes de la gamme chromatique sont organis\u00e9es en une s\u00e9rie ordonn\u00e9e, trait\u00e9es de mani\u00e8re \u00e0 \u00e9viter toute hi\u00e9rarchie tonale.</p>
        <p>Ses \u00e9l\u00e8ves <strong>Alban Berg</strong> et <strong>Anton Webern</strong> forment avec lui la <strong>Seconde \u00c9cole de Vienne</strong>. Berg humanise le dod\u00e9caphonisme dans ses op\u00e9ras (<em>Wozzeck</em>, <em>Lulu</em>), tandis que Webern le pousse vers une concision aphoristique extr\u00eame.</p>

        <h3>Le Sacre du printemps et le rythme lib\u00e9r\u00e9</h3>
        <p><strong>Igor Stravinsky</strong> (1882-1971) provoque un scandale historique avec la cr\u00e9ation du <em>Sacre du printemps</em> (1913), dont les rythmes sauvages, les accords dissonants et les m\u00e8tres changeants choquent le public parisien. Cette oeuvre r\u00e9volutionne l'usage du rythme.</p>
        <p>Stravinsky traverse ensuite une p\u00e9riode <strong>n\u00e9oclassique</strong> (1920-1950), revisitant les formes de Bach et Pergol\u00e8se avec un langage harmonique moderne, avant d'adopter le s\u00e9rialisme dans ses derni\u00e8res oeuvres.</p>

        <h3>B\u00e9la Bart\u00f3k et les sources populaires</h3>
        <p><strong>B\u00e9la Bart\u00f3k</strong> (1881-1945) parcourt la Hongrie, la Roumanie et la Turquie pour collecter des milliers de chants populaires au phonographe. Il int\u00e8gre ces m\u00e9lodies modales et ces rythmes asym\u00e9triques dans un langage savant d'une puissance expressive remarquable. Ses six <em>Quatuors \u00e0 cordes</em> sont consid\u00e9r\u00e9s comme les plus importants du XXe si\u00e8cle.</p>

        <h3>Le n\u00e9oclassicisme et la musique en France</h3>
        <p>Le <strong>n\u00e9oclassicisme</strong> r\u00e9agit contre l'expressionnisme et le gigantisme romantique en revenant \u00e0 la clart\u00e9 des formes anciennes. En France, le <strong>Groupe des Six</strong> (Poulenc, Milhaud, Honegger, Auric, Durey, Tailleferre), inspir\u00e9 par Erik Satie et Jean Cocteau, pr\u00f4ne une musique l\u00e9g\u00e8re, spirituelle et anti-wagn\u00e9rienne.</p>
        <div class="highlight-box">
          <p><strong>Erik Satie</strong> (1866-1925), pr\u00e9curseur inclassable, compose des pi\u00e8ces d'une simplicit\u00e9 d\u00e9routante (<em>Gymnop\u00e9dies</em>, <em>Gnossiennes</em>) et invente la \u00ab musique d'ameublement \u00bb, ancêtre de la musique d'ambiance. Son refus de tout acad\u00e9misme influence profond\u00e9ment la musique du XXe si\u00e8cle.</p>
        </div>

        <h3>Le jazz et ses liens avec la musique savante</h3>
        <p>N\u00e9 \u00e0 La Nouvelle-Orl\u00e9ans au d\u00e9but du XXe si\u00e8cle, le <strong>jazz</strong> influence consid\u00e9rablement la musique savante. Debussy int\u00e8gre des rythmes de ragtime dans <em>Golliwog's Cake-Walk</em>. Ravel \u00e9crit ses concertos pour piano avec des harmonies jazz. <strong>George Gershwin</strong> (1898-1937) fusionne jazz et musique symphonique dans <em>Rhapsody in Blue</em> et l'op\u00e9ra <em>Porgy and Bess</em>.</p>

        <h3>\u00c9coute recommand\u00e9e</h3>
        <ul>
          <li><strong>Debussy \u2014 Pr\u00e9ludes pour piano (Livre I)</strong> : douze pi\u00e8ces \u00e9vocatrices aux titres po\u00e9tiques, sommet de l'impressionnisme pianistique</li>
          <li><strong>Stravinsky \u2014 Petrouchka</strong> : ballet color\u00e9 et virtuose, charnière entre romantisme russe et modernit\u00e9 rythmique</li>
          <li><strong>Berg \u2014 Concerto pour violon \u00ab \u00c0 la m\u00e9moire d'un ange \u00bb</strong> : le dod\u00e9caphonisme au service de l'\u00e9motion, oeuvre d'une beaut\u00e9 poignante</li>
          <li><strong>Gershwin \u2014 Rhapsody in Blue</strong> : fusion emblématique du jazz et de la musique symphonique</li>
        </ul>

        <h3>Techniques et pratique</h3>
        <p>Pour appr\u00e9hender la musique moderne, l'\u00e9coute active est essentielle. Commencez par Debussy (plus accessible) avant d'aborder Schoenberg. \u00c9coutez le <em>Sacre du printemps</em> avec la partition si possible pour observer les changements de m\u00e8tre. Comparez les approches : impressionnisme (fluidit\u00e9, couleur) vs expressionnisme (tension, dissonance) vs primitivisme (rythme, \u00e9nergie brute).</p>""",
    quiz_emoji='\U0001f52e', quiz_title='Moderne',
    questions=[
        {'text':'Quel compositeur est consid\u00e9r\u00e9 comme le fondateur de l\'impressionnisme musical ?','options':[('Ravel',False),('Debussy',True),('Stravinsky',False),('Schoenberg',False)],'feedback':'Claude Debussy est le fondateur de l\'impressionnisme musical. Son Pr\u00e9lude \u00e0 l\'apr\u00e8s-midi d\'un faune (1894) est souvent consid\u00e9r\u00e9 comme le point de d\u00e9part de la musique moderne.'},
        {'text':'Qu\'est-ce que le dod\u00e9caphonisme ?','options':[('Une musique \u00e0 12 instruments',False),('Une m\u00e9thode de composition utilisant les 12 notes chromatiques en s\u00e9rie ordonn\u00e9e',True),('Un style de musique populaire hongroise',False),('Une forme de notation musicale ancienne',False)],'feedback':'Le dod\u00e9caphonisme, invent\u00e9 par Schoenberg en 1921, organise les 12 notes de la gamme chromatique en une s\u00e9rie ordonn\u00e9e, trait\u00e9e de mani\u00e8re \u00e0 \u00e9viter toute hi\u00e9rarchie tonale.'},
        {'text':'Quelle oeuvre de Stravinsky a provoqu\u00e9 un scandale \u00e0 sa cr\u00e9ation en 1913 ?','options':[("L'Oiseau de feu",False),('Petrouchka',False),('Le Sacre du printemps',True),('Les Noces',False)],'feedback':'Le Sacre du printemps a provoqu\u00e9 une \u00e9meute lors de sa premi\u00e8re \u00e0 Paris en 1913.'},
        {'text':'Quel compositeur a collect\u00e9 des milliers de chants populaires au phonographe ?','options':[('Stravinsky',False),('Debussy',False),('Bart\u00f3k',True),('Satie',False)],'feedback':'B\u00e9la Bart\u00f3k a parcouru l\'Europe de l\'Est pour collecter des chants populaires, qu\'il a int\u00e9gr\u00e9s dans un langage savant personnel.'},
        {'text':'Quel compositeur fran\u00e7ais inclassable a compos\u00e9 les Gymnop\u00e9dies ?','options':[('Debussy',False),('Ravel',False),('Poulenc',False),('Satie',True)],'feedback':'Erik Satie a compos\u00e9 les trois Gymnop\u00e9dies en 1888, pi\u00e8ces d\'une simplicit\u00e9 d\u00e9routante qui anticipent le minimalisme et la musique d\'ambiance.'},
        {'text':'Qui a fusionn\u00e9 jazz et musique symphonique dans Rhapsody in Blue ?','options':[('Ravel',False),('Copland',False),('Gershwin',True),('Bernstein',False)],'feedback':'George Gershwin a cr\u00e9\u00e9 Rhapsody in Blue en 1924, oeuvre embl\u00e9matique de la fusion entre jazz et musique symphonique.'},
    ],
    approfondir_content="""        <h3>Exercices pratiques</h3>
        <ul>
          <li><strong>\u00c9coute chronologique</strong> \u2014 \u00c9coutez dans l'ordre : un Nocturne de Chopin, un Pr\u00e9lude de Debussy, une pi\u00e8ce pour piano de Schoenberg. Observez la dissolution progressive de la tonalit\u00e9.</li>
          <li><strong>Gamme par tons entiers</strong> \u2014 Jouez la gamme par tons entiers au piano (Do-R\u00e9-Mi-Fa#-Sol#-La#) et improvisez quelques mesures pour ressentir son caract\u00e8re flottant.</li>
          <li><strong>Analyse rythmique</strong> \u2014 \u00c9coutez la Danse sacrale du Sacre du printemps et essayez de battre la mesure : les changements constants de m\u00e8tre rendent l'exercice d\u00e9lib\u00e9r\u00e9ment difficile.</li>
        </ul>
        <h3>\u00c9coutes essentielles</h3>
        <ul>
          <li><strong>Debussy \u2014 La Mer</strong> : trois esquisses symphoniques d'une orchestration \u00e9blouissante, peignant les couleurs et mouvements de l'oc\u00e9an.</li>
          <li><strong>Bart\u00f3k \u2014 Musique pour cordes, percussion et c\u00e9lesta</strong> : architecture formelle rigoureuse et sonorités saisissantes, chef-d'oeuvre du XXe si\u00e8cle.</li>
          <li><strong>Ravel \u2014 Concerto pour piano en Sol majeur</strong> : fusion magistrale d'harmonies jazz, de m\u00e9lodies basques et de virtuosit\u00e9 pianistique.</li>
          <li><strong>Prokofiev \u2014 Pierre et le Loup</strong> : conte musical o\u00f9 chaque personnage est repr\u00e9sent\u00e9 par un instrument, introduction id\u00e9ale \u00e0 l'orchestre moderne.</li>
        </ul>""",
    prev_link='romantique.html', prev_title='Le romantisme',
    next_link='contemporain.html', next_title='La musique contemporaine'
)

print("Done generating romantique.html and moderne.html")
