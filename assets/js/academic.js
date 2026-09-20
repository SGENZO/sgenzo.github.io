(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;

  try {
    preference = localStorage.getItem('theme');
  } catch {
    // Theme switching remains available when browser storage is restricted.
  }

  const applyTheme = () => {
    const dark = preference === 'dark' ||
      (preference !== 'light' && systemTheme.matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };

  applyTheme();
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try {
      localStorage.setItem('theme', preference);
    } catch {
      // Keep the selected theme for this page when storage is unavailable.
    }
  });
  systemTheme.addEventListener('change', applyTheme);
})();
