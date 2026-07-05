

const navMenu = document.getElementById('nav-menu');
const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const navLink = document.querySelectorAll('.nav__link');
const navLinks = document.querySelectorAll('a[href^="#"]');

menuButton.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})

const removeMenu = () => {
    navMenu.classList.remove('show-menu');
}
closeButton.addEventListener('click', removeMenu)



navLink.forEach(link => {
    link.addEventListener('click', removeMenu)
})

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scroll-header", window.scrollY > 20);
});

