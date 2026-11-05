// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

// Check saved or system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('portfolio-theme') || (prefersDark ? 'dark' : 'dark');

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    document.documentElement.removeAttribute('data-theme');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
  localStorage.setItem('portfolio-theme', theme);
}

applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  applyTheme(isLight ? 'dark' : 'light');
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

// Close mobile menu on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
  });
});

// Active Navigation Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });
});
