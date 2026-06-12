// Typing Animation

const words = [
    "Infrastructure Engineer",
    "Site Reliability Engineer",
    "Automation Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// Scroll Reveal Animation

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }
        });

    },
    {
        threshold: 0.1
    }
);

document
    .querySelectorAll(".reveal")
    .forEach((element) => {
        observer.observe(element);
    });


// Navbar Background On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 8, 22, 0.85)";

        navbar.style.backdropFilter =
            "blur(20px)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.03)";

        navbar.style.backdropFilter =
            "blur(15px)";
    }
});


// Smooth Scroll For Anchor Links

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        );
    });


// Project Card Hover Effect

const cards =
    document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );
    });
});


// Dynamic Footer Year

const footerYear =
    document.getElementById("year");

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();
}


// Console Easter Egg

console.log(`
╔══════════════════════════════════════╗
║      VedaVidyadaran S Portfolio      ║
║                                      ║
║ Infrastructure Engineer              ║
║ Site Reliability Engineer            ║
║ Automation Enthusiast                ║
╚══════════════════════════════════════╝
`);