const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const message = `Olá! Quero pedir ${product}.`;
    const url = `https://wa.me/553499152341?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
});
