// LAST CALL — progress bar, header state, reveal on scroll, active nav, hero parallax
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bar = document.querySelector('.progress');
  var header = document.querySelector('.site-header');
  var heroArt = document.querySelector('.hero-art');
  var ticking = false;

  function onScroll() {
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var y = window.scrollY || 0;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
    if (header) header.classList.toggle('scrolled', (window.scrollY || 0) > 24);
    // Parallax sutil: la figura del héroe se desplaza unos px contra el scroll.
    if (heroArt && !reduceMotion && window.innerWidth > 960) {
      var limit = heroArt.offsetTop + 420;
      var p = Math.min((window.scrollY || 0) / Math.max(limit, 1), 1);
      heroArt.style.setProperty('--py', (-16 * p).toFixed(1) + 'px');
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // Marca el enlace de navegación de la sección visible.
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var link = byId[e.target.id];
        if (!link) return;
        if (e.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-38% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  }
})();
