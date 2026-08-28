// =====================================
// MOBILE MENU
// =====================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// Menutup menu setelah link diklik
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });

});


// =====================================
// NAVBAR EFFECT
// =====================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 80, 110, 0.15)";

    } else {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0, 80, 110, 0.08)";

    }

});


// =====================================
// SIMPLE SCROLL REVEAL
// =====================================

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card, .timeline-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.7s ease";

    observer.observe(element);

});


// =====================================
// CONSOLE MESSAGE
// =====================================

console.log(
    "🌊 Welcome to Shinta's Portfolio!"
);
