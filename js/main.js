/* ================================================
   GEN Z HOLIDAYS — MAIN JAVASCRIPT
   ================================================ */

// ——— DARK MODE ———
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('gzh-theme', t);
}

// Load saved preference
const saved = localStorage.getItem('gzh-theme');
if (saved) setTheme(saved);
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');

if (toggle) {
  toggle.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });
}

// ——— NAVBAR SCROLL ———
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ——— HAMBURGER MENU ———
const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (ham && navLinks) {
  ham.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? '' : 'flex';
    if (!open) {
      Object.assign(navLinks.style, {
        flexDirection: 'column', position: 'fixed',
        top: '64px', left: '0', right: '0',
        background: 'var(--nav-bg)', backdropFilter: 'blur(20px)',
        padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)',
        zIndex: '400', gap: '1.5rem'
      });
    }
    ham.textContent = open ? '☰' : '✕';
  });
}

// ——— AUTO IMAGE SLIDER ———
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
const caption = document.getElementById('slideCaption');

const slideData = [
  { label: 'Chikkamagaluru, Karnataka 🌿' },
  { label: 'Coorg, Karnataka 🌄' },
  { label: 'Mysuru, Karnataka 🏯' },
  { label: 'Munnar, Kerala 🍃' },
  { label: 'Wayanad, Kerala 🌿' },
  { label: 'Alleppey, Kerala 🚤' },
  { label: 'Varkala, Kerala 🌊' },
];

let current = 0;
let autoTimer;

function goTo(idx) {
  slides[current].classList.remove('active');
  dots[current]?.classList.remove('active');
  current = (idx + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current]?.classList.add('active');
  if (caption && slideData[current]) caption.textContent = slideData[current].label;
}

function startAuto() {
  autoTimer = setInterval(() => goTo(current + 1), 4500);
}
function stopAuto() { clearInterval(autoTimer); }

// Dot click
dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));

// Init
if (slides.length > 0) {
  slides[0].classList.add('active');
  dots[0]?.classList.add('active');
  if (caption && slideData[0]) caption.textContent = slideData[0].label;
  startAuto();
}

// Swipe support (mobile)
let touchX = 0;
document.querySelector('.hero')?.addEventListener('touchstart', e => touchX = e.touches[0].clientX);
document.querySelector('.hero')?.addEventListener('touchend', e => {
  const diff = touchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) { stopAuto(); goTo(current + (diff > 0 ? 1 : -1)); startAuto(); }
});

// ——— SCROLL REVEAL ———
const revObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.dest-card, .pkg-card, .review-card, .blog-card, .step, .iv-feat, .citem'
).forEach(el => { el.classList.add('reveal'); revObserver.observe(el); });

// ——— COUNTER ANIMATION ———
const ctrObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => {
        const raw = el.dataset.target;
        const suffix = raw.replace(/[0-9.]/g, '');
        const val = parseFloat(raw);
        let start = 0;
        const step = val / 60;
        const timer = setInterval(() => {
          start = Math.min(start + step, val);
          el.textContent = (val % 1 !== 0 ? start.toFixed(1) : Math.floor(start)) + suffix;
          if (start >= val) clearInterval(timer);
        }, 20);
      });
      ctrObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const sb = document.querySelector('.stats-bar');
if (sb) ctrObserver.observe(sb);

// ——— SEARCH ———
function doSearch() {
  const dest = document.getElementById('sDest')?.value.trim();
  const type = document.getElementById('sType')?.value;
  if (!dest && !type) { showToast('Enter a destination or select trip type', true); return; }
  showToast(`🔍 Finding ${dest || type} trips…`);
  setTimeout(() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' }), 600);
}

// ——— BOOKING MODAL ———
let bData = {};
function openBooking(name, state) {
  bData = { name, state };
  document.getElementById('mdName').textContent  = name;
  document.getElementById('mdState').textContent = state;
  document.getElementById('bookingModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('bookingModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('bookingModal')?.addEventListener('click', e => { if (e.target.id === 'bookingModal') closeModal(); });

function submitBooking() {
  const name  = document.getElementById('mbName')?.value.trim();
  const phone = document.getElementById('mbPhone')?.value.trim();
  if (!name || !phone) { showToast('Please enter your name and phone', true); return; }
  if (phone.length < 10) { showToast('Enter a valid phone number', true); return; }
  closeModal();
  showToast(`✓ Booking request for ${bData.name} sent! We'll WhatsApp you within 2 hours.`);
  ['mbName','mbPhone','mbEmail','mbCollege','mbPax','mbDate'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
}

// ——— IV ENQUIRY ———
function submitIV() {
  const inst  = document.getElementById('ivInstitute')?.value.trim();
  const name  = document.getElementById('ivContact')?.value.trim();
  const phone = document.getElementById('ivPhone')?.value.trim();
  if (!inst || !name || !phone) { showToast('Please fill all required fields', true); return; }
  showToast(`✓ IV enquiry for ${inst} received! Our expert will call within 4 hours.`);
  ['ivInstitute','ivDept','ivContact','ivPhone','ivEmail','ivDest','ivNotes'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
}

// ——— CONTACT ———
function submitContact() {
  const name  = document.getElementById('ctName')?.value.trim();
  const phone = document.getElementById('ctPhone')?.value.trim();
  if (!name || !phone) { showToast('Please enter your name and phone', true); return; }
  showToast('✓ Message sent! We\'ll reply within 2 hours.');
  ['ctName','ctPhone','ctEmail','ctMsg'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
}

// ——— TOAST ———
function showToast(msg, err = false) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast' + (err ? ' err' : '');
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 4500);
}

// ——— SMOOTH ANCHORS ———
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const tgt = document.querySelector(a.getAttribute('href'));
    if (tgt) { e.preventDefault(); tgt.scrollIntoView({ behavior: 'smooth' }); }
    if (navLinks) navLinks.style.display = '';
    if (ham) ham.textContent = '☰';
  });
});

console.log('%c Gen Z Holidays ✈️ ', 'background:#00C06B;color:#fff;font-size:14px;font-weight:bold;padding:6px 14px;border-radius:8px;');
