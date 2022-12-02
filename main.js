const menuToggle = document.querySelector('.menu-toggle');
const navigationList = document.querySelector('.navigation__list');
const pageMask = document.querySelector('.page-mask');
const navigationLink = document.querySelectorAll('.navigation__link');

menuToggle.addEventListener('click', () => {
  const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpened ? closeMenu() : openMenu());
});

document.addEventListener('click', e => {
  if (menuToggle.getAttribute('aria-expanded') === 'true' && e.target === pageMask
  ) return closeMenu();
});

navigationLink.forEach(link => link.addEventListener('click', closeMenu));

function openMenu() {
  menuToggle.setAttribute('aria-expanded', 'true');
  navigationList.setAttribute('data-state', 'opened');
  pageMask.classList.toggle('active');
}

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigationList.setAttribute('data-state', 'closing');
  pageMask.classList.remove('active');

  navigationList.addEventListener('animationend', () => {
    navigationList.setAttribute('data-state', 'closed');
  }, { once: true });
}



// Stop animations during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});