

/* ---- fragment-link capture handler ---- */
// Run as early as possible, in the capturing phase, so this fires before
  // any outer preview wrapper's own click interception on anchor tags.
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', '#' + id); } catch (err) {}
    }
  }, true); // true = capturing phase, runs before bubbling-phase listeners

/* ---- main site behavior ---- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });
  mobilePanel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobilePanel.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .section-head');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Scroll progress bar
  const progressBar = document.getElementById('scrollProgress');
  function updateProgress(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Subtle nav shrink on scroll
  const navHeader = document.querySelector('.site-nav');
  function updateNavShadow(){
    if (window.scrollY > 12) {
      navHeader.style.boxShadow = '0 8px 24px -18px rgba(11,31,58,0.35)';
    } else {
      navHeader.style.boxShadow = 'none';
    }
  }
  window.addEventListener('scroll', updateNavShadow, { passive: true });
  updateNavShadow();

  // Gentle tilt on project cards following the cursor
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
