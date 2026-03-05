// ══════════════════════════════════════════════════════
//  Curiosita — SR Engine (Spaced Repetition)
//  Moteur SM-2, CRUD cartes, localStorage persistence
// ══════════════════════════════════════════════════════

const SR = (function () {
  'use strict';

  const STORAGE_KEY = 'curiosita_sr';
  const VERSION = 1;

  // ── Default data ──
  function defaultData() {
    return {
      version: VERSION,
      cards: {},
      settings: {
        newCardsPerDay: 20,
        reviewsPerDay: 100,
        autoExtract: true
      },
      stats: {
        totalReviews: 0,
        streakDays: 0,
        lastStudyDate: null,
        reviewHistory: [] // { date: "YYYY-MM-DD", count: N, correct: N }
      }
    };
  }

  let _data = defaultData();

  // ── Persistence ──
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(_data));
    } catch (e) {
      console.warn('[SR] Save failed:', e);
    }
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version === VERSION) {
          _data = parsed;
        } else if (parsed) {
          _data = parsed;
          _data.version = VERSION;
          save();
        }
      }
    } catch (e) {
      console.warn('[SR] Load failed, starting fresh:', e);
      _data = defaultData();
    }
    migrateCoursPrefix();
  }

  // ── Migration: add /cours/ prefix to card sources ──
  function migrateCoursPrefix() {
    let changed = false;
    Object.values(_data.cards).forEach(c => {
      if (c.source && c.source.includes('/Curiosita/') && !c.source.includes('/cours/')) {
        const rest = c.source.slice(c.source.indexOf('/Curiosita/') + '/Curiosita/'.length);
        if (rest.includes('/')) {
          c.source = c.source.replace('/Curiosita/', '/Curiosita/cours/');
          changed = true;
        }
      }
    });
    if (changed) save();
  }

  // ── Hash djb2 pour IDs deterministes ──
  function djb2(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    return 'sr_' + Math.abs(hash).toString(36);
  }

  function generateId(source, type, frontText) {
    const key = (source || '') + '|' + (type || '') + '|' + (frontText || '').substring(0, 80);
    return djb2(key);
  }

  // ── SM-2 Algorithm ──
  function sm2(card, quality) {
    // quality: 0-5 (0=total fail, 3=correct with difficulty, 5=perfect)
    quality = Math.max(0, Math.min(5, quality));

    let { interval, repetition, easeFactor } = card;

    if (quality >= 3) {
      // Correct response
      if (repetition === 0) interval = 1;
      else if (repetition === 1) interval = 6;
      else interval = Math.round(interval * easeFactor);
      repetition += 1;
    } else {
      // Failed — reset
      repetition = 0;
      interval = 1;
    }

    // Update ease factor
    easeFactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    easeFactor = Math.max(1.3, easeFactor);

    const now = Date.now();
    return {
      interval,
      repetition,
      easeFactor: Math.round(easeFactor * 100) / 100,
      nextReview: now + interval * 86400000,
      lastReview: now
    };
  }

  // ── Date helpers ──
  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function updateStreak() {
    const today = todayStr();
    if (_data.stats.lastStudyDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().slice(0, 10);

    if (_data.stats.lastStudyDate === yStr) {
      _data.stats.streakDays += 1;
    } else if (_data.stats.lastStudyDate !== today) {
      _data.stats.streakDays = 1;
    }
    _data.stats.lastStudyDate = today;
  }

  function recordReview(correct) {
    const today = todayStr();
    let entry = _data.stats.reviewHistory.find(h => h.date === today);
    if (!entry) {
      entry = { date: today, count: 0, correct: 0 };
      _data.stats.reviewHistory.push(entry);
    }
    entry.count += 1;
    if (correct) entry.correct += 1;

    // Keep only last 90 days
    if (_data.stats.reviewHistory.length > 90) {
      _data.stats.reviewHistory = _data.stats.reviewHistory.slice(-90);
    }
  }

  // ══════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════

  // ── CRUD ──
  function addCard({ front, back, type, source, sourceTitle, tags }) {
    if (!front || !back) return null;

    const id = generateId(source, type, front);

    // Don't overwrite existing card (preserve review data)
    if (_data.cards[id]) return { id, existing: true };

    const now = Date.now();
    _data.cards[id] = {
      id,
      front: front.trim(),
      back: back.trim(),
      type: type || 'manual',
      source: source || '',
      sourceTitle: sourceTitle || '',
      tags: tags || [],
      created: now,
      // SM-2 initial values
      interval: 0,
      repetition: 0,
      easeFactor: 2.5,
      nextReview: now,  // Due immediately (new card)
      lastReview: null
    };

    save();
    return { id, existing: false };
  }

  function removeCard(id) {
    if (_data.cards[id]) {
      delete _data.cards[id];
      save();
      return true;
    }
    return false;
  }

  function editCard(id, updates) {
    const card = _data.cards[id];
    if (!card) return false;

    if (updates.front !== undefined) card.front = updates.front.trim();
    if (updates.back !== undefined) card.back = updates.back.trim();
    if (updates.tags !== undefined) card.tags = updates.tags;

    save();
    return true;
  }

  function getCard(id) {
    return _data.cards[id] || null;
  }

  // ── Review ──
  function getDueCards(limit, filter) {
    const now = Date.now();
    let due = Object.values(_data.cards)
      .filter(c => c.nextReview <= now);

    // Apply optional filter
    if (filter) {
      if (filter.type === 'theme') {
        const prefix = '/Curiosita/' + filter.value + '/';
        due = due.filter(c => (c.source || '').startsWith(prefix));
      } else if (filter.type === 'source') {
        due = due.filter(c => c.source === filter.value);
      }
    }

    due.sort((a, b) => {
      // New cards first (never reviewed), then by nextReview ascending
      if (!a.lastReview && b.lastReview) return -1;
      if (a.lastReview && !b.lastReview) return 1;
      return a.nextReview - b.nextReview;
    });

    const max = limit || _data.settings.reviewsPerDay;
    return due.slice(0, max);
  }

  function getDueCount() {
    const now = Date.now();
    return Object.values(_data.cards).filter(c => c.nextReview <= now).length;
  }

  function reviewCard(id, quality) {
    const card = _data.cards[id];
    if (!card) return null;

    const result = sm2(card, quality);
    Object.assign(card, result);

    _data.stats.totalReviews += 1;
    updateStreak();
    recordReview(quality >= 3);

    save();
    return card;
  }

  // ── Filters / Decks ──
  function getCardsBySource(url) {
    return Object.values(_data.cards).filter(c => c.source === url);
  }

  function getAllCards() {
    return Object.values(_data.cards);
  }

  function getCardCount() {
    return Object.keys(_data.cards).length;
  }

  // ── Stats ──
  function getStats() {
    const cards = Object.values(_data.cards);
    const now = Date.now();
    const due = cards.filter(c => c.nextReview <= now).length;
    const newCards = cards.filter(c => !c.lastReview).length;
    const learned = cards.filter(c => c.lastReview && c.repetition >= 2).length;
    const learning = cards.filter(c => c.lastReview && c.repetition < 2).length;

    // Success rate from last 7 days
    const week = _data.stats.reviewHistory.slice(-7);
    const weekTotal = week.reduce((s, h) => s + h.count, 0);
    const weekCorrect = week.reduce((s, h) => s + h.correct, 0);
    const successRate = weekTotal > 0 ? Math.round(weekCorrect / weekTotal * 100) : 0;

    return {
      total: cards.length,
      due,
      newCards,
      learned,
      learning,
      totalReviews: _data.stats.totalReviews,
      streakDays: _data.stats.streakDays,
      successRate,
      reviewHistory: _data.stats.reviewHistory.slice(-90),
      lastStudyDate: _data.stats.lastStudyDate
    };
  }

  // ── Sources listing (for deck browser) ──
  function getSources() {
    const map = {};
    Object.values(_data.cards).forEach(c => {
      const src = c.source || 'Manuel';
      if (!map[src]) {
        map[src] = { source: src, title: c.sourceTitle || src, count: 0, due: 0 };
      }
      map[src].count += 1;
      if (c.nextReview <= Date.now()) map[src].due += 1;
    });
    return Object.values(map).sort((a, b) => b.count - a.count);
  }

  // ── Import / Export ──
  function exportJSON() {
    return JSON.stringify(_data, null, 2);
  }

  function importJSON(json, merge) {
    try {
      const imported = typeof json === 'string' ? JSON.parse(json) : json;
      if (!imported || !imported.cards) throw new Error('Invalid SR data');

      if (merge) {
        // Merge: only add cards that don't exist, preserve review progress
        Object.entries(imported.cards).forEach(([id, card]) => {
          if (!_data.cards[id]) {
            _data.cards[id] = card;
          }
        });
      } else {
        // Replace entirely
        _data = imported;
        _data.version = VERSION;
      }

      save();
      return { success: true, cardCount: Object.keys(_data.cards).length };
    } catch (e) {
      console.error('[SR] Import failed:', e);
      return { success: false, error: e.message };
    }
  }

  function resetAll() {
    _data = defaultData();
    save();
  }

  // ── Settings ──
  function getSettings() {
    return { ..._data.settings };
  }

  function updateSettings(updates) {
    Object.assign(_data.settings, updates);
    save();
  }

  // ── Forecast (Progrès tab) ──
  function getForecast(days) {
    days = days || 30;
    const cards = Object.values(_data.cards);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const result = [];

    for (let i = 0; i < days; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() + i);
      const dayStart = d.getTime();
      const dayEnd = dayStart + 86400000;

      let dueCount = 0;
      let newCount = 0;
      cards.forEach(c => {
        if (c.nextReview >= dayStart && c.nextReview < dayEnd) {
          if (!c.lastReview) newCount++;
          else dueCount++;
        }
        // Day 0: include overdue cards
        if (i === 0 && c.nextReview < dayStart) {
          if (!c.lastReview) newCount++;
          else dueCount++;
        }
      });

      result.push({ date: d.toISOString().slice(0, 10), dueCount, newCount });
    }
    return result;
  }

  // ── Maturity distribution ──
  function getMaturityDistribution() {
    const cards = Object.values(_data.cards);
    const dist = { new: 0, learning: 0, young: 0, mature: 0 };
    cards.forEach(c => {
      if (!c.lastReview) dist.new++;
      else if (c.repetition < 3) dist.learning++;
      else if (c.repetition <= 6) dist.young++;
      else dist.mature++;
    });
    return dist;
  }

  // ── Retention estimate (Ebbinghaus R = e^(-t/S)) ──
  function getRetentionEstimate() {
    const cards = Object.values(_data.cards);
    const now = Date.now();
    let totalRetention = 0;
    let reviewedCount = 0;
    let atRisk = 0;
    const distribution = [];

    cards.forEach(c => {
      if (!c.lastReview) return; // new card — skip
      reviewedCount++;
      const daysSince = (now - c.lastReview) / 86400000;
      const stability = Math.max(c.interval, 1);
      const retention = Math.exp(-daysSince / stability);
      const retPct = Math.round(retention * 100);

      totalRetention += retention;
      if (retPct < 50) atRisk++;
      distribution.push({ id: c.id, front: c.front, retention: retPct });
    });

    return {
      overall: reviewedCount > 0 ? Math.round((totalRetention / reviewedCount) * 100) : 100,
      atRisk,
      reviewedCount,
      distribution: distribution.sort((a, b) => a.retention - b.retention)
    };
  }

  // ── Themes ──
  function getThemes() {
    const cards = Object.values(_data.cards);
    const now = Date.now();
    const themes = {};

    cards.forEach(c => {
      const match = (c.source || '').match(/\/Curiosita\/([^/]+)\//);
      const theme = match ? match[1] : null;
      if (!theme) return;

      if (!themes[theme]) {
        themes[theme] = { theme: theme, totalCount: 0, dueCount: 0, courses: {} };
      }
      themes[theme].totalCount++;
      if (c.nextReview <= now) themes[theme].dueCount++;

      const src = c.source;
      if (!themes[theme].courses[src]) {
        themes[theme].courses[src] = {
          source: src,
          title: c.sourceTitle || src.split('/').pop().replace('.html', ''),
          totalCount: 0,
          dueCount: 0
        };
      }
      themes[theme].courses[src].totalCount++;
      if (c.nextReview <= now) themes[theme].courses[src].dueCount++;
    });

    return Object.values(themes)
      .map(t => ({
        theme: t.theme,
        totalCount: t.totalCount,
        dueCount: t.dueCount,
        courses: Object.values(t.courses).sort((a, b) => a.title.localeCompare(b.title))
      }))
      .sort((a, b) => a.theme.localeCompare(b.theme));
  }

  // ── Init ──
  load();

  // ══════════════════════════════
  return {
    // CRUD
    addCard,
    removeCard,
    editCard,
    getCard,

    // Review
    getDueCards,
    getDueCount,
    reviewCard,

    // Filters
    getCardsBySource,
    getAllCards,
    getCardCount,
    getSources,
    getThemes,

    // Stats
    getStats,
    getForecast,
    getMaturityDistribution,
    getRetentionEstimate,

    // Settings
    getSettings,
    updateSettings,

    // Import/Export
    exportJSON,
    importJSON,
    resetAll,

    // Utilities
    generateId,
    save,
    load
  };
})();
