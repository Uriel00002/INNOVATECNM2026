const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: .10 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

const navLinks = [...document.querySelectorAll('.main-navbar .nav-link[href^="#"]')];
navLinks.forEach(link => {
  link.addEventListener('click', () => {
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


document.addEventListener("DOMContentLoaded", () => { const c = document.getElementById("carruselComite"); if (!c) return; const cards = [...c.querySelectorAll(".comite-card")], dotsBox = document.querySelector(".comite-indicador"); let pos = 0, timer; cards.forEach((_, i) => { const d = document.createElement("span"); d.className = "comite-punto" + (i === 0 ? " activo" : ""); dotsBox.appendChild(d) }); const dots = [...dotsBox.children]; const step = () => cards[0].getBoundingClientRect().width + 24; const visible = () => innerWidth <= 600 ? 1 : innerWidth <= 992 ? 2 : 3; const max = () => Math.max(0, cards.length - visible()); function go(n) { pos = n > max() ? 0 : n < 0 ? max() : n; c.scrollTo({ left: pos * step(), behavior: "smooth" }); dots.forEach((d, i) => d.classList.toggle("activo", i === pos)) } function start() { clearInterval(timer); timer = setInterval(() => go(pos + 1), 3500) } document.querySelectorAll("[data-comite-dir]").forEach(b => b.addEventListener("click", () => { go(pos + Number(b.dataset.comiteDir)); start() })); c.addEventListener("mouseenter", () => clearInterval(timer)); c.addEventListener("mouseleave", start); window.addEventListener("resize", () => go(Math.min(pos, max()))); start(); });