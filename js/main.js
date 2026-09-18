const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible'); io.unobserve(entry.target);}
    });
  },{threshold:.10});
  reveals.forEach(el=>io.observe(el));
} else {
  reveals.forEach(el=>el.classList.add('visible'));
}

const navLinks = [...document.querySelectorAll('.main-navbar .nav-link[href^="#"]')];
navLinks.forEach(link=>{
  link.addEventListener('click',()=>{
    document.querySelector('.main-navbar .nav-link.active')?.classList.remove('active');
    link.classList.add('active');
  });
});

// Menús desplegables de las secciones 07 y 08
const memoryDropdowns = document.querySelectorAll('.memory-dropdown-toggle');
memoryDropdowns.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.getAttribute('aria-controls');
    const submenu = document.getElementById(targetId);
    if (!submenu) return;
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    submenu.classList.toggle('is-open', !open);
  });
});

document.querySelectorAll('.memory-submenu-item').forEach(item => {
  item.addEventListener('click', (event) => event.preventDefault());
});
