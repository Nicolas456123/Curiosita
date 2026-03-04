// ══════════════════════════════════════════════════════
//  Curiosita — Shared Utilities
//  Base path resolution + script/style loader
//  Must be loaded BEFORE mobile.js, sr-highlight.js
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Resolve base path from style.css / style.min.css link ──
  // Converts "../../style.min.css?v=3" → "../../"
  // Converts "style.min.css?v=3" → ""
  var styleLink = document.querySelector('link[href*="style.min.css"]') || document.querySelector('link[href*="style.css"]');
  var basePath = '';
  if (styleLink) {
    var href = styleLink.getAttribute('href');
    var m = href.match(/^(.*?)style(?:\.min)?\.css/);
    if (m) basePath = m[1];
  }

  // ── Dedup helper: check both plain and .min variants ──
  // e.g. "sr-engine.js" → checks for "sr-engine.js" AND "sr-engine.min.js"
  function fileCore(name) {
    return name.replace(/\.min\.(js|css)$/, '.$1').replace(/\.(js|css)$/, '');
  }

  // ── Dynamic script loader (deduplicates) ──
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var fullSrc = basePath + src;
      var core = fileCore(src);
      if (document.querySelector('script[src*="' + core + '.js"]') ||
          document.querySelector('script[src*="' + core + '.min.js"]')) {
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
    var core = fileCore(href);
    if (document.querySelector('link[href*="' + core + '.css"]') ||
        document.querySelector('link[href*="' + core + '.min.css"]')) return;
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
