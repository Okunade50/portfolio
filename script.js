const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            `#${current}`
        ) {

            item.classList.add("active");

        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});


/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .blog-card, .service-card, .design-card, .about-grid, .analytics-content, .contact-box"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= CURSOR EFFECT ================= */

document.addEventListener(
    "mousemove",
    (event) => {

        document.body.style.setProperty(
            "--mouse-x",
            `${event.clientX}px`
        );

        document.body.style.setProperty(
            "--mouse-y",
            `${event.clientY}px`
        );

    }
);