const hamburgerIcon = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerIcon.classList.remove('show');

hamburgerIcon.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('visible');
  hamburgerIcon.classList.toggle('show');
});

hamburgerMenu.addEventListener('click', () => {
  hamburgerIcon.classList.remove('show');
  hamburgerMenu.classList.remove('visible');
});
