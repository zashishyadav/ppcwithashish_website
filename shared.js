// shared nav + footer HTML used across all pages
const NAV = `
<nav>
  <a href="index.html" class="nav-logo">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="6" fill="#E85D26"/>
      <path d="M8 26 L14 10 L18 20 L22 10 L28 26" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M22 14 L28 14" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <span>PPC<em>with</em>Ashish</span>
  </a>
  <button class="nav-burger" id="navBurger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="resources.html">Resources</a></li>
    <li><a href="case-studies.html">Case Studies</a></li>
    <li><a href="contact.html">Contact Us</a></li>
    <li><a href="contact.html" class="nav-cta">Book a Free Strategy Session</a></li>
  </ul>
</nav>`;

const FOOTER = `
<footer>
  <div class="footer-brand">
    <a href="index.html" class="footer-logo-text">PPC<span>with</span>Ashish</a>
    <p class="footer-tagline">Amazon advertising and e-commerce account management for brands that want to scale profitably. 2000+ sellers. 65+ verticals.</p>
    <div class="social-links">
      <a href="https://www.instagram.com/ppcwithprachi" target="_blank" class="social-link" title="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <a href="https://www.youtube.com/@ppcwithprachi" target="_blank" class="social-link" title="YouTube">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/ppcwithprachi/" target="_blank" class="social-link" title="LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
    <p class="footer-gst">GST: 27DSDPS7844L1ZX</p>
  </div>
  <div class="footer-col">
    <h4>Quick Links</h4>
    <ul>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact Us</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Legal</h4>
    <ul>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms of Service</a></li>
      <li><a href="#">Refund Policy</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Contact</h4>
    <ul>
      <li><a href="mailto:contact@ppcwithashish.in">contact@ppcwithashish.in</a></li>
      <li><a href="tel:+918447248596">+91-84472 48596</a></li>
      <li style="color:rgba(255,255,255,0.4);font-size:13px;line-height:1.5">1814 Sector 45<br>Gurgaon, Haryana 122001</li>
    </ul>
  </div>
</footer>
<div class="footer-bottom">
  <span>© 2026 PPCwithAshish. All Rights Reserved.</span>
  <span>Developed &amp; Designed by <a href="http://www.growbizon.com/" target="_blank">GrowBizon</a></span>
</div>`;

// highlight active nav link
function initNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      links.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }
}

// scroll reveal
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity='0'; el.style.transform='translateY(20px)';
    el.style.transition='opacity 0.55s ease, transform 0.55s ease';
    obs.observe(el);
  });
}

// FAQ accordion
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav(); initReveal(); initFAQ();
});
