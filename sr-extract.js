// ══════════════════════════════════════════════════════
//  Curiosita — SR Extract
//  Auto-extraction de flashcards depuis le contenu HTML
//  Depends: sr-engine.js (SR global)
// ══════════════════════════════════════════════════════

const SRExtract = (function () {
  'use strict';

  const MAX_BACK = 220; // Max length for card back

  // ── Helpers ──
  function cleanText(el) {
    if (!el) return '';
    return el.textContent.replace(/\s+/g, ' ').trim();
  }

  function truncate(text, max) {
    if (!text) return '';
    max = max || MAX_BACK;
    if (text.length <= max) return text;
    // Cut at last space before max
    const cut = text.lastIndexOf(' ', max);
    return text.substring(0, cut > max * 0.6 ? cut : max) + '…';
  }

  function getPageTitle(doc) {
    const h1 = doc.querySelector('.hero h1, h1');
    return h1 ? cleanText(h1) : (doc.title || '').split('—')[0].trim();
  }

  function getPageTags(doc) {
    const tags = [];
    doc.querySelectorAll('.breadcrumb a, .breadcrumb span').forEach(c => {
      const t = cleanText(c);
      if (t && t !== '›') tags.push(t.toLowerCase());
    });
    return tags;
  }

  /** Check if text is mostly math/numbers */
  function isMathExpr(text) {
    if (!text) return true;
    const letters = (text.match(/[a-zA-ZÀ-ÿ]/g) || []).length;
    const total = text.replace(/\s/g, '').length;
    return total > 0 && (letters / total) < 0.3;
  }

  /** Check if front makes a bad flashcard */
  function isBadFront(text) {
    if (!text || text.length < 4) return true;
    if (/^exemples?\s*:?$/i.test(text)) return true;
    if (isMathExpr(text)) return true;
    if (/^\d[\d\s]*[÷×=+\-]/.test(text)) return true;
    // Digit + short generic noun (e.g. "4 composantes", "3 étapes")
    if (/^\d+\s+(composantes?|éléments?|points?|étapes?|parties?|types?|cas|axes?)$/i.test(text)) return true;
    // Starts with question words or rhetorical headings — generic as front
    if (/^(pourquoi|comment|qu['e]est[- ]ce|quel(le)?s?|faut[- ]il|doit[- ]on|peut[- ]on|est[- ]ce\s+que|comment\s+)\s*/i.test(text)) return true;
    // Too generic — single noun/phrase with no specific identity
    if (/^(règle|note|remarque|attention|astuce|conseil|résultat|principe\s*clé|frontière\s*actuelle|en\s*résumé|important|définition|rappel|à\s*retenir|vocabulaire|objectif|chiffre\s*clé|chiffres?\s*clés?|propriétés?\s*(essentielles?|importantes?|fondamentales?)?|mauvaise\s*utilisation|erreurs?\s*d['']implémentation|perdants?|gagnants?|conclusion|introduction|contexte|bilan|synthèse|héritage\s*durable)$/i.test(text)) return true;
    return false;
  }

  /** Element is inside exercises or applications section (low-quality for cards) */
  function isInExercises(el) {
    const section = el.closest('[id]');
    if (section && /exercice|exo/i.test(section.id)) return true;
    let node = el.closest('.content-section');
    if (node) {
      const h = node.querySelector('.section-info h2, .section-info p');
      if (h && /exercice|^application|^exemple/i.test(h.textContent)) return true;
    }
    // Also check nearest heading (h3/h4) for "Applications" context
    let sibling = el.parentElement;
    while (sibling && sibling !== document.body) {
      const heading = sibling.previousElementSibling;
      if (heading && /^h[34]$/.test(heading.tagName) && /^(applications?|exemples?\s*d['']|cas\s+pratiques?)$/i.test(heading.textContent.trim())) {
        return true;
      }
      sibling = sibling.parentElement;
    }
    return false;
  }

  /** Clean trailing colon/dash */
  function cleanLabel(text) {
    return text.replace(/[\s:—–\-]+$/, '').trim();
  }

  /** Extract the text AFTER the <strong> inside a parent element */
  function getTextAfterStrong(el) {
    const strong = el.querySelector('strong');
    if (!strong) return cleanText(el);
    // Get text content, then strip the strong text from the beginning
    const full = cleanText(el);
    const term = cleanText(strong);
    const idx = full.indexOf(term);
    if (idx < 0) return full;
    return full.substring(idx + term.length).replace(/^[\s:—–\-·]+/, '').trim();
  }

  // ══════════════════════════════
  //  EXTRACTORS
  // ══════════════════════════════

  // 1. Highlight boxes — key concepts
  function extractHighlights(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.highlight-box').forEach(box => {
      if (isInExercises(box)) return;

      const strong = box.querySelector('strong');
      if (!strong) return;

      const label = cleanLabel(cleanText(strong));
      if (isBadFront(label)) return;

      // Get the explanation (text after the strong tag)
      const explanation = getTextAfterStrong(box);
      if (explanation.length < 15) return;

      cards.push({
        front: label,
        back: truncate(explanation),
        type: 'highlight', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 2. Formula cards — nom / formule + description
  function extractFormulas(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.formula-card').forEach(card => {
      const name = cleanText(card.querySelector('.formula-name'));
      const math = cleanText(card.querySelector('.formula-math, .formula-expr'));
      const desc = cleanText(card.querySelector('.formula-desc'));
      if (!name || (!math && !desc)) return;

      let back = '';
      if (math) back += math;
      if (desc) back += (back ? '\n' : '') + desc;

      cards.push({
        front: name,
        back: truncate(back, 250),
        type: 'formula', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 3. Timeline items
  function extractTimeline(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.tl-item').forEach(item => {
      const date = cleanText(item.querySelector('.tl-date'));
      const tlTitle = cleanText(item.querySelector('.tl-title'));
      const desc = cleanText(item.querySelector('.tl-desc'));
      if (!tlTitle) return;

      const front = date
        ? (date.match(/^\d/) ? date + ' — ' : '') + 'que s\'est-il passé ?'
        : tlTitle + ' — quand ?';

      cards.push({
        front: date ? date : tlTitle,
        back: truncate((tlTitle ? tlTitle + '. ' : '') + (desc || '')),
        type: 'timeline', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 4. Biais cards
  function extractBiais(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.biais-card').forEach(card => {
      const name = cleanText(card.querySelector('.biais-name'));
      const desc = cleanText(card.querySelector('.biais-desc'));
      const example = cleanText(card.querySelector('.biais-example'));
      if (!name || !desc) return;

      let back = desc;
      if (example) back += '\nEx : ' + example;

      cards.push({
        front: name,
        back: truncate(back),
        type: 'biais', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 5. Theory items
  function extractTheories(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.theory-item').forEach(item => {
      const theoryTitle = cleanText(item.querySelector('.theory-title'));
      const year = cleanText(item.querySelector('.theory-year'));
      const author = cleanText(item.querySelector('.theory-author'));
      const desc = cleanText(item.querySelector('.theory-desc'));
      if (!theoryTitle || !desc) return;

      const meta = [author, year].filter(Boolean).join(', ');
      cards.push({
        front: theoryTitle + (meta ? ' (' + meta + ')' : ''),
        back: truncate(desc),
        type: 'theory', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 6. Concept cards
  function extractConcepts(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.concept-card').forEach(card => {
      const name = cleanText(card.querySelector('.concept-title'));
      const desc = cleanText(card.querySelector('.concept-desc'));
      if (!name || !desc) return;

      cards.push({
        front: name,
        back: truncate(desc),
        type: 'concept', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 7. Memo items
  function extractMemo(doc, source, title, tags) {
    const cards = [];
    doc.querySelectorAll('.memo-item').forEach(item => {
      const text = cleanText(item);
      if (text.length < 8) return;

      let front, back;
      const separators = [' — ', ' : ', ' = ', ' → '];
      let found = false;
      for (const sep of separators) {
        const idx = text.indexOf(sep);
        if (idx > 2 && idx < text.length - 3) {
          front = text.substring(0, idx).trim();
          back = text.substring(idx + sep.length).trim();
          found = true;
          break;
        }
      }

      if (!found) {
        const section = item.closest('.memo-section');
        const sTitle = section ? cleanText(section.querySelector('.memo-section-title')) : '';
        front = sTitle || 'Mémo';
        back = text;
      }

      cards.push({
        front, back: truncate(back),
        type: 'memo', source, sourceTitle: title, tags
      });
    });
    return cards;
  }

  // 8. Quiz questions — TWO formats
  function extractQuiz(doc, source, title, tags) {
    const cards = [];

    // Format A: answer(this,true/false) in DOM
    doc.querySelectorAll('.question-block').forEach(block => {
      const qText = cleanText(block.querySelector('.q-text'));
      if (!qText) return;

      const correctOption = block.querySelector('.option[onclick*="true"]');
      if (!correctOption) return;
      const answer = cleanText(correctOption);

      const feedback = block.querySelector('.q-feedback');
      const feedbackText = feedback ? cleanText(feedback) : '';

      cards.push({
        front: qText,
        back: truncate(answer + (feedbackText ? '\n' + feedbackText : ''), 280),
        type: 'quiz', source, sourceTitle: title, tags
      });
    });

    // Format B: {q:"...",opts:[...],ans:N,expl:"..."} in script
    const scripts = doc.querySelectorAll('script');
    for (const script of scripts) {
      const code = script.textContent;
      if (!code) continue;

      const regex = /\{q:\s*["'](.+?)["']\s*,\s*opts:\s*\[([^\]]+)\]\s*,\s*ans:\s*(\d+)\s*,\s*expl:\s*["'](.+?)["']\s*\}/g;
      let match;
      while ((match = regex.exec(code)) !== null) {
        const question = match[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
        const optsStr = match[2];
        const ansIdx = parseInt(match[3]);
        const expl = match[4].replace(/\\'/g, "'").replace(/\\"/g, '"');

        const optRegex = /["'](.+?)["']/g;
        const opts = [];
        let optMatch;
        while ((optMatch = optRegex.exec(optsStr)) !== null) {
          opts.push(optMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"'));
        }

        const answer = opts[ansIdx] || '';
        if (!question || !answer) continue;

        // Skip if same question already added by Format A
        if (cards.some(c => c.front === question)) continue;

        cards.push({
          front: question,
          back: truncate(answer + (expl ? '\n' + expl : ''), 280),
          type: 'quiz', source, sourceTitle: title, tags
        });
      }
    }

    return cards;
  }

  // 9. Definitions — <strong>Term</strong> — explanation (only from <li>)
  function extractDefinitions(doc, source, title, tags) {
    const cards = [];
    const seenTerms = new Set();

    doc.querySelectorAll('li').forEach(el => {
      const strong = el.querySelector('strong');
      if (!strong) return;

      const term = cleanLabel(cleanText(strong));
      if (!term || term.length < 4 || term.length > 60) return;
      if (isBadFront(term)) return;
      if (isInExercises(el)) return;
      if (el.closest('.highlight-box, .formula-card, .biais-card, .theory-item, .concept-card, .memo-item, .question-block, .quiz-container, .options')) return;

      // Get back text: everything after the strong term
      const back = getTextAfterStrong(el);
      if (back.length < 15) return;
      if (isMathExpr(back)) return;

      // Must have at least 3 letters in term
      if ((term.match(/[a-zA-ZÀ-ÿ]/g) || []).length < 3) return;

      // Avoid duplicates
      const key = term.toLowerCase();
      if (seenTerms.has(key)) return;
      seenTerms.add(key);

      cards.push({
        front: term,
        back: truncate(back),
        type: 'definition', source, sourceTitle: title, tags
      });
    });

    return cards;
  }

  // ══════════════════════════════
  //  MAIN
  // ══════════════════════════════

  function extractFromDocument(doc, courseUrl, courseTitle) {
    const title = courseTitle || getPageTitle(doc);
    const tags = getPageTags(doc);
    const source = courseUrl || window.location.pathname;

    const extractors = [
      extractHighlights, extractFormulas, extractTimeline,
      extractBiais, extractTheories, extractConcepts,
      extractMemo, extractQuiz, extractDefinitions
    ];

    let newCount = 0, existingCount = 0;
    const newCards = [];

    extractors.forEach(fn => {
      fn(doc, source, title, tags).forEach(cardData => {
        const result = SR.addCard(cardData);
        if (result) {
          if (result.existing) existingCount++;
          else { newCount++; newCards.push(result.id); }
        }
      });
    });

    return { newCount, existingCount, newCards, total: newCount + existingCount };
  }

  async function extractFromUrl(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const html = await resp.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return extractFromDocument(doc, url, null);
    } catch (e) {
      console.error('[SRExtract] Failed:', url, e);
      return { newCount: 0, existingCount: 0, newCards: [], total: 0, error: e.message };
    }
  }

  return { extractFromUrl, extractFromDocument };
})();
