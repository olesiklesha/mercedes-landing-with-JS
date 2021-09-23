const burger = document.querySelector('.humburger-menu');
const menuEl = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-list__item')

const toggleMenu = () => {
  menuEl.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
}

burger.addEventListener('click', toggleMenu);

links.forEach(link => {
  link.addEventListener('click', toggleMenu);
});