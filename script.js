const buttons = document.querySelectorAll('[data-lang]');
const elements = document.querySelectorAll('[data-pt][data-en]');
const html = document.documentElement;
buttons.forEach(btn => btn.addEventListener('click', () => {
  const lang = btn.dataset.lang;
  buttons.forEach(b => b.classList.toggle('active', b === btn));
  elements.forEach(el => { el.textContent = el.dataset[lang]; });
  html.lang = lang === 'pt' ? 'pt-BR' : 'en';
}));
const mobile = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
mobile?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  mobile.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
