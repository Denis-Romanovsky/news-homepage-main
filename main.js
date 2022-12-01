const hamburger = document.querySelector('.hamburger');
const navigationList = document.querySelector('.navigation__list');
const pageMask = document.querySelector('.page-mask');
const navigationLink = document.querySelectorAll('.navigation__link');

hamburger.addEventListener('click', openMenu);

document.addEventListener('click', e => {
  if (hamburger.classList.contains('active') && e.target === pageMask
  ) return closeMenu();
});

navigationLink.forEach(link => link.addEventListener('click', closeMenu));

function openMenu() {
  hamburger.classList.toggle('active');
  navigationList.classList.toggle('active');
  pageMask.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navigationList.classList.remove('active');
  pageMask.classList.remove('active');
}

// Stop animations durin window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});