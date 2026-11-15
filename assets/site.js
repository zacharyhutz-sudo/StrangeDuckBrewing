'use strict';
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  const closeMenu = () => { toggle?.setAttribute('aria-expanded','false'); nav?.classList.remove('is-open'); };
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded',String(!expanded)); nav.classList.toggle('is-open',!expanded);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', e => { if (!header?.contains(e.target)) closeMenu(); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
  const wide = window.matchMedia('(min-width:761px)');
  wide.addEventListener?.('change', e => {if(e.matches) closeMenu();});
  const onScroll = () => header?.classList.toggle('scrolled',window.scrollY > 40);
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const targets = [...document.querySelectorAll('[data-reveal]')];
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }),{threshold:0.07,rootMargin:'0px 0px -15px 0px'});
    targets.forEach(el => observer.observe(el));
    // Keyboard navigation always reveals its destination, even before the scroll observer fires.
    document.addEventListener('focusin',e=> e.target.closest('[data-reveal]')?.classList.add('is-visible'));
    reduced.addEventListener?.('change',e=> {if(e.matches){document.documentElement.classList.remove('motion-ready');observer.disconnect();}});
  }
  const search = document.getElementById('beer-search');
  if (search) {
    const cards = [...document.querySelectorAll('.beer-card')];
    const filters = [...document.querySelectorAll('[data-filter]')];
    const count = document.getElementById('results-count');
    const empty = document.querySelector('.empty-state');
    let category = 'All beers';
    const apply = () => {
      const query = search.value.trim().toLowerCase(); let visible = 0;
      cards.forEach(card => { const show = (category === 'All beers' || card.dataset.category === category) && card.dataset.search.includes(query); card.hidden = !show; if(show)visible++; });
      count.textContent = `${visible} ${visible === 1 ? 'beer' : 'beers'} to explore`; empty.hidden = visible !== 0;
    };
    filters.forEach(button => button.addEventListener('click',()=> {
      category = button.dataset.filter; filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button))); apply();
    }));
    search.addEventListener('input',apply);
    document.getElementById('reset-search')?.addEventListener('click',()=> {search.value='';category='All beers';filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));apply();search.focus();});
  }
})();
