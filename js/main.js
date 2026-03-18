/* ══════════════════════════════════════════
   RonyaSane — Main JavaScript
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── LANGUAGE TOGGLE ─── */
  const savedLang = localStorage.getItem('rs_lang') || 'fi';
  applyLang(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLang(lang);
      localStorage.setItem('rs_lang', lang);
    });
  });

  function applyLang(lang) {
    document.body.classList.remove('lang-fi', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
  }

  /* ─── STICKY HEADER ─── */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ─── MOBILE NAV ─── */
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      drawer.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on drawer link click
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && !drawer.contains(e.target)) {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ─── ACTIVE NAV LINK ─── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });

  /* ─── SCROLL REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger for siblings
          const siblings = [...entry.target.parentElement.children]
            .filter(c => c.classList.contains('reveal') ||
                         c.classList.contains('reveal-left') ||
                         c.classList.contains('reveal-right'));
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 70);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ─── HERO PARALLAX ─── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.35}px)`;
    }, { passive: true });
  }

  /* ─── IMAGE FALLBACK ─── */
  // If an image fails to load, show placeholder emoji
  document.querySelectorAll('.horse-img, .portrait-img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });

  /* ─── SMOOTH SCROLL for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── PAGE TRANSITION ─── */
  const overlay = document.getElementById('page-transition');
  if (overlay) {
    // Fade in on load (fade-out effect)
    overlay.classList.add('fade-in');
    setTimeout(() => {
      overlay.classList.remove('fade-in');
    }, 50);

    // Fade out on link click (to another page)
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto') ||
          href.startsWith('tel') || href.startsWith('http')) return;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('fade-in');
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      });
    });
  }

  /* ─── COUNTER ANIMATION ─── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const duration = 1600;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target + (el.dataset.suffix || '');
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current) + (el.dataset.suffix || '');
            }
          }, 16);
          countIO.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countIO.observe(c));
  }

});
