const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const mobileMenu = document.querySelector('.mobile-menu');
const togleIcon = document.querySelector('#toggle-icon');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('hidden')
  mobileMenu.classList.toggle('mobile-menu-open');
  togleIcon.classList.toggle('fa-align-justify');
  togleIcon.classList.toggle('fa-xmark');
});