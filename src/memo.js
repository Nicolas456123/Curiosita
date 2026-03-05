// ══════════════════════════════════════════════════════
//  Curiosita — Memo Download
//  Reads the .memo-preview DOM to generate a printable
//  HTML memo sheet in a new window.
//  Used by hub pages + discipline pages.
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  window.downloadMemo = function () {
    var card = document.getElementById('memoCard') || document.querySelector('.memo-preview');
    if (!card) return;

    // ── Extract data from DOM ──
    var topEl = card.querySelector('.memo-top');
    var title = topEl ? (topEl.querySelector('h3') || topEl.querySelector('h2') || {}).textContent || 'Fiche memo' : 'Fiche memo';
    var subtitle = topEl && topEl.querySelector('p') ? topEl.querySelector('p').textContent : '';

    // Get accent color from CSS custom property
    var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#333';

    // Derive a light background from accent (10% opacity version)
    var accentDim = accent + '18'; // hex alpha ~10%

    var sections = [];
    card.querySelectorAll('.memo-section').forEach(function (sec) {
      var heading = '';
      var titleEl = sec.querySelector('.memo-section-title');
      if (titleEl) heading = titleEl.textContent;

      var items = [];
      sec.querySelectorAll('.memo-item').forEach(function (item) {
        items.push(item.innerHTML);
      });

      if (heading || items.length) {
        sections.push({ heading: heading, items: items });
      }
    });

    // ── Build printable HTML ──
    var css =
      'body{font-family:"Segoe UI",system-ui,sans-serif;padding:2rem;color:#1a1a1a;max-width:900px;margin:0 auto}' +
      'h1{font-size:1.8rem;color:' + accent + ';border-bottom:3px solid ' + accent + ';padding-bottom:.5rem;margin-bottom:.3rem}' +
      '.subtitle{font-size:.85rem;color:#888;margin-bottom:1.5rem}' +
      'h2{font-size:.75rem;color:' + accent + ';margin-top:1.5rem;margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.08em}' +
      'ul{padding-left:1.2rem;margin-bottom:1rem}' +
      'li{margin:.25rem 0;font-size:.88rem;line-height:1.5}' +
      '.grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem}' +
      '.box{border:1px solid ' + accent + '40;padding:1rem;border-radius:4px;background:' + accentDim + '}' +
      '.footer{margin-top:2rem;padding-top:1rem;border-top:1px solid #ddd;color:#888;font-size:.75rem}' +
      '@media print{.no-print{display:none}}' +
      '@media(max-width:600px){.grid{grid-template-columns:1fr}}';

    var boxesHTML = sections.map(function (s) {
      var lis = s.items.map(function (i) { return '<li>' + i + '</li>'; }).join('');
      return '<div class="box"><h2>' + s.heading + '</h2><ul>' + lis + '</ul></div>';
    }).join('');

    var date = new Date().toLocaleDateString('fr-FR');

    var html =
      '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">' +
      '<title>' + title + '</title>' +
      '<style>' + css + '</style></head><body>' +
      '<h1>' + title + '</h1>' +
      (subtitle ? '<p class="subtitle">' + subtitle + '</p>' : '') +
      '<div class="grid">' + boxesHTML + '</div>' +
      '<div class="footer">Curiosita — ' + title + ' — ' + date + '</div>' +
      '<button class="no-print" onclick="window.print()" style="position:fixed;bottom:1.5rem;right:1.5rem;padding:.7rem 1.5rem;background:' + accent + ';color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:.9rem">Imprimer / PDF</button>' +
      '</body></html>';

    var w = window.open('', '_blank', 'width=900,height=700');
    if (w) {
      w.document.write(html);
      w.document.close();
    }
  };
})();
