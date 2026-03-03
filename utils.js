// ══════════════════════════════════════════════════════
//  Curiosita — Shared Utilities
//  Base path resolution + script/style loader
//  Must be loaded BEFORE mobile.js, sr-highlight.js
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Resolve base path from style.css link ──
  // Converts "../../style.css?v=2" → "../../"
  // Converts "style.css?v=2" → ""
  var styleLink = document.querySelector('link[href*="style.css"]');
  var basePath = '';
  if (styleLink) {
    var href = styleLink.getAttribute('href');
    var idx = href.indexOf('style.css');
    if (idx > 0) {
      basePath = href.substring(0, idx);
    }
  }

  // ── Dynamic script loader (deduplicates) ──
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var fullSrc = basePath + src;
      if (document.querySelector('script[src*="' + src + '"]')) {
        resolve();
        return;
      }
      var s = document.createElement('script');
      s.src = fullSrc;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // ── Dynamic stylesheet loader (deduplicates) ──
  function loadStyle(href) {
    if (document.querySelector('link[href*="' + href + '"]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = basePath + href;
    document.head.appendChild(l);
  }

  // ── Expose globally ──
  window.CurUtils = {
    basePath: basePath,
    loadScript: loadScript,
    loadStyle: loadStyle
  };
})();
