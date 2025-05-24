export const toggleTheme = function () {
  const toggleIcon = document.getElementById('theme__icon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    toggleIcon.classList.remove('iconoir-sun-light');

    toggleIcon.classList.add(savedTheme);
  }

  toggleIcon.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme =
      currentTheme === 'iconoir-moon-sat'
        ? 'iconoir-sun-light'
        : 'iconoir-moon-sat';
    toggleIcon.classList.remove(currentTheme);
    toggleIcon.classList.add(newTheme);
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
};

export const toggleNavbar = function () {
  const navToggler = document.querySelector('.navbar__toggler');
  const navMenu = document.querySelector('.nav__menu');
  navToggler.addEventListener('click', e => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('visible');
    console.log('test');
  });

  ///remove hidden class when screen is big and add when needed
  function handleResponsiveNav() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      navMenu.classList.remove('hidden'); // Remove class on desktop
    } else {
      navMenu.classList.add('hidden'); // Re-add class on mobile
    }
  }

  // Run on load and resize
  window.addEventListener('load', handleResponsiveNav);
  window.addEventListener('resize', handleResponsiveNav);
};
