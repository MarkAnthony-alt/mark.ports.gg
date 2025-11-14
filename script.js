/* -------------------------------
   Smooth Scroll to Section
-------------------------------- */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* -------------------------------
   Scroll Fade & Slide Effects
-------------------------------- */
const elements = document.querySelectorAll('.fade-in');
const leftElements = document.querySelectorAll('.fade-in-left');
const rightElements = document.querySelectorAll('.fade-in-right');

function revealElements() {
    elements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('visible');
    });
    leftElements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('visible-left');
    });
    rightElements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('visible-right');
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

/* -------------------------------
   Typing Animation
-------------------------------- */
const typedText = document.querySelector(".typing");
const words = ["Mark Anthony Esquivel", "a Developer", "a Designer", "a Creator"];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    typedText.textContent = currentWord.substring(0, charIndex);

    let delay = isDeleting ? 60 : 120 + Math.random()*50;

    if(!isDeleting) {
        if(charIndex < currentWord.length) charIndex++;
        else { delay = 1500; isDeleting = true; }
    } else {
        if(charIndex > 0) charIndex--;
        else { isDeleting = false; wordIndex = (wordIndex+1) % words.length; delay = 300; }
    }

    setTimeout(typeEffect, delay);
}
if(typedText) typeEffect();

/* -------------------------------
   Parallax Floating Shapes
-------------------------------- */
const shapes = document.querySelectorAll(".shape");

document.addEventListener("mousemove", e => {
    shapes.forEach(shape => {
        const speed = shape.dataset.speed || 0.02;
        const x = (window.innerWidth/2 - e.pageX) * speed;
        const y = (window.innerHeight/2 - e.pageY) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    shapes.forEach((shape, i) => {
        const offset = (i+1) * 20;
        shape.style.transform += ` translateY(${scrollY*0.05 + offset}px)`;
    });
});

/* -------------------------------
   Animate Skill & Hobby Bars
-------------------------------- */
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            bar.style.width = bar.dataset.width;
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
animateSkills();

/* -------------------------------
   Hamburger Toggle
-------------------------------- */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links'); // renamed to avoid conflict

if(hamburger && navMenu){
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

/* -------------------------------
   Scroll Spy - Active Section
-------------------------------- */
const navLinkItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

function setActiveSection() {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        if(scrollPos >= top && scrollPos < bottom){
            navLinkItems.forEach(link => {
                link.classList.remove("active");
                if(link.getAttribute("href") === `#${id}`){
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", setActiveSection);
window.addEventListener("load", setActiveSection);

/* -------------------------------
   Fake Contact Form Submission
-------------------------------- */
// Select form and toast
const contactForm = document.querySelector('.contact-form');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    // Show toast
    toast.classList.add('show');

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

    // Optional: clear the form
    contactForm.reset();
});

