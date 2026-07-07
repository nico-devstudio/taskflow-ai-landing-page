const navMenu = document.getElementById('nav-menu');
const menuButton = document.querySelector('.nav__toggle');
const closeButton = document.querySelector('.nav__close');
const navLink = document.querySelectorAll('.nav__link');
const toggle = document.querySelector(".toggle input");
const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");



menuButton.addEventListener('click', () => {
    navMenu.classList.add('show-menu');

    setTimeout(() => {
        const firstLink = navMenu.querySelector("a, button");
        if (firstLink) firstLink.focus();
    }, 100);
});

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


let isAnimating = false;

toggle.addEventListener("change", () => {
    if (isAnimating) return;
    isAnimating = true;

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

    setTimeout(() => {
        isAnimating = false;
    }, 300);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navMenu.classList.remove("show-menu");
    }
});

const focusableElements = 'a, button, input, [tabindex]:not([tabindex="-1"])';

let firstFocusableElement;
let lastFocusableElement;

function setFocusTrap() {
    const focusableContent = navMenu.querySelectorAll(focusableElements);

    firstFocusableElement = focusableContent[0];
    lastFocusableElement = focusableContent[focusableContent.length - 1];
}

document.addEventListener("keydown", (e) => {

    // ESC key close
    if (e.key === "Escape") {
        navMenu.classList.remove("show-menu");
    }

    // TAB focus trap
    if (e.key === "Tab" && navMenu.classList.contains("show-menu")) {

        setFocusTrap();

        if (e.shiftKey) {
            // SHIFT + TAB (backwards)
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            // TAB (forwards)
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
});