// ===============================
// Typing Effect
// ===============================

const text = [
    "Mahasiswa Informatika",
    "Web Developer",
    "UI/UX Designer",
    "Database Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = text[textIndex];

    if (!isDeleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : speed);
}

typeEffect();


// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,8,22,.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";

    }

});


// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".about-card,.skill-card,.project-card,.certificate-card,.contact-box"
);

function reveal() {

    revealElements.forEach((el)=>{

        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if(top < visible){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((el)=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll",reveal);
reveal();


// ===============================
// Smooth Active Menu
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "30px";
button.style.right = "30px";
button.style.width = "50px";
button.style.height = "50px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.background = "#00d4ff";
button.style.color = "#050816";
button.style.fontSize = "22px";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        button.style.display = "block";

    }else{

        button.style.display = "none";

    }

});

button.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===============================
// Console Message
// ===============================

console.log("Portfolio Website - Yosua Fernando Sinaga");