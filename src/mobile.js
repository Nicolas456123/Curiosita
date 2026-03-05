// ── Mobile sidebar toggle ──
// Automatically injects hamburger button and overlay for mobile nav
(function() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // Create hamburger button
  const btn = document.createElement('button');
  btn.className = 'sidebar-toggle';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';

  // Insert hamburger into nav (after logo)
  const nav = document.querySelector('nav');
  if (nav) {
    const logo = nav.querySelector('.logo');
    if (logo) logo.after(btn);
    else nav.prepend(btn);
  }

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // Close sidebar when clicking a sidebar link (for section navigation)
  sidebar.querySelectorAll('.sidebar-link[data-section]').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
})();
