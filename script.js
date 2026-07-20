// ==============================
// ANIMACIÓN AL HACER SCROLL
// ==============================

const sections = document.querySelectorAll("section");

const mostrarSeccion = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("mostrar");
        }
    });
};

window.addEventListener("scroll", mostrarSeccion);
window.addEventListener("load", mostrarSeccion);

// ==============================
// EFECTO HEADER
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#050505";
        header.style.boxShadow = "0 5px 20px rgba(25,212,25,.25)";
        header.style.transition = ".3s";
    } else {
        header.style.background = "#000";
        header.style.boxShadow = "none";
    }

});

// ==============================
// MENÚ ACTIVO
// ==============================

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        enlaces.forEach(link => link.classList.remove("activo"));

        enlace.classList.add("activo");

    });

});

// ==============================
// EFECTO HOVER EN TARJETAS
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// ==============================
// MENSAJE EN CONSOLA
// ==============================

console.log("%c🌮 Bienvenido a Tacos 420 🌮", "color:#19d419; font-size:20px; font-weight:bold;");