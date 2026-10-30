(() => {
  'use strict';
  document.documentElement.classList.add('has-js');
  const supported = ['zh', 'hant', 'en'];
  const htmlLang = { zh: 'zh-CN', hant: 'zh-HK', en: 'en' };
  const titles = { zh: 'Max Ma · 个人主页', hant: 'Max Ma · 個人主頁', en: 'Max Ma · Personal website' };
  const descriptions = {
    zh: 'Max 的个人主页，记录自己的项目、游戏、美食和学习笔记。',
    hant: 'Max 的個人主頁，記錄自己的專案、遊戲、美食和學習筆記。',
    en: 'Max’s personal website: projects, games, food notes, and study notes.'
  };
  let saved;
  try { saved = localStorage.getItem('site-lang'); } catch (_) { /* Reading remains available without storage. */ }
  const preferred = (navigator.language || 'zh').toLowerCase();
  let current = supported.includes(saved) ? saved : /hant|hk|tw/.test(preferred) ? 'hant' : preferred.startsWith('en') ? 'en' : 'zh';
  function applyLanguage(lang) {
    if (!supported.includes(lang)) return;
    current = lang;
    document.documentElement.lang = htmlLang[lang];
    document.title = titles[lang];
    document.querySelector('meta[name="description"]').content = descriptions[lang];
    document.querySelector('meta[property="og:title"]').content = titles[lang];
    document.querySelector('meta[property="og:description"]').content = descriptions[lang];
    document.querySelectorAll(`[data-${lang}]`).forEach(element => { element.textContent = element.dataset[lang]; });
    document.querySelectorAll(`[data-href-${lang}]`).forEach(element => { element.href = element.getAttribute(`data-href-${lang}`); });
    document.querySelectorAll(`[data-alt-${lang}]`).forEach(element => { element.alt = element.dataset[`alt${lang === 'hant' ? 'Hant' : lang === 'zh' ? 'Zh' : 'En'}`]; });
    document.querySelectorAll('.lang-btn').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.lang === lang)); });
    try { localStorage.setItem('site-lang', lang); } catch (_) { /* Language switching does not require storage. */ }
  }
  document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  function revealLegacyTarget() {
    if (location.hash === '#experience') document.getElementById('experience').open = true;
  }
  window.addEventListener('hashchange', revealLegacyTarget);
  revealLegacyTarget();
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLanguage(current);
})();
