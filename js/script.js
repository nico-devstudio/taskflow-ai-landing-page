const navMenu = document.getElementById('nav-menu');
const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const navLink = document.querySelectorAll('.nav__link');
const toggle = document.querySelector(".toggle input");
const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");


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

toggle.addEventListener("change", () => {
    const isYearly = toggle.checked;

    prices.forEach(price => {
        price.classList.add("fade-out");

        setTimeout(() => {
            const monthly = price.getAttribute("data-monthly");
            const yearly = price.getAttribute("data-yearly");

            price.textContent = isYearly ? yearly : monthly;

            price.classList.remove("fade-out");
        }, 150);
    });

    periods.forEach(period => {
        period.textContent = isYearly ? "/yr" : "/mo";
    });
});