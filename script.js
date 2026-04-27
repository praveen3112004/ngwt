// ============================================
//  NEWGEN WINGS TECHNOLOGY - MAIN SCRIPT
// ============================================

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- ACTIVE NAV LINK ----
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

// Close nav on link click
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// ---- COURSES SLIDER ----
const slider = document.getElementById('coursesSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const CARD_WIDTH = 300 + 24; // card min-width + gap
let currentIndex = 0;

function getVisibleCards() {
  const w = window.innerWidth;
  if (w < 768) return 1;
  if (w < 1024) return 2;
  return 3;
}

function getTotalCards() {
  return slider.querySelectorAll('.course-card').length;
}

function updateSlider() {
  const visible = getVisibleCards();
  const total = getTotalCards();
  const maxIndex = Math.max(0, total - visible);
  currentIndex = Math.min(currentIndex, maxIndex);
  slider.style.transform = `translateX(-${currentIndex * CARD_WIDTH}px)`;
}

nextBtn.addEventListener('click', () => {
  const visible = getVisibleCards();
  const total = getTotalCards();
  const maxIndex = Math.max(0, total - visible);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);

// ---- SCROLL REVEAL ANIMATION ----
const revealEls = document.querySelectorAll(
  '.service-card, .course-card, .testi-card, .placement-stat, .hero-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.style.transform.replace('translateY(30px)', 'translateY(0)');
      entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = (el.style.transform || '') + ' translateY(30px)';
  revealObserver.observe(el);
});

// ---- CONTACT FORM SUBMIT ----
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = '';
    this.reset();
  }, 3000);
});

// ---- COUNTER ANIMATION ----
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 25);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text.replace(/\D/g, ''));
      const suffix = text.replace(/\d/g, '');
      animateCounter(el, num, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.placement-num, .stat-num').forEach(el => {
  counterObserver.observe(el);
});
