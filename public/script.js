/* ==========================================================
   FutureTech College Website
   script.js
   PART 3A
========================================================== */

"use strict";

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.classList.remove("open");

    });

});


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.classList.add("active");

    }
    else{

        navbar.classList.remove("active");

    }

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const currentPage = window.location.pathname;

document.querySelectorAll(".nav-links a").forEach(link=>{

    if(link.getAttribute("href")===currentPage){

        link.style.color="#2563eb";
        link.style.fontWeight="600";

    }

});


/* ==========================================
   SMOOTH SCROLLING
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }
    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   PAGE LOADER
========================================== */

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML=`

<div class="spinner"></div>

`;

loader.style.position="fixed";
loader.style.left="0";
loader.style.top="0";
loader.style.width="100%";
loader.style.height="100vh";
loader.style.background="#fff";
loader.style.display="flex";
loader.style.alignItems="center";
loader.style.justifyContent="center";
loader.style.zIndex="99999";

document.body.appendChild(loader);

window.addEventListener("load",()=>{

    loader.style.opacity="0";

    loader.style.transition=".7s";

    setTimeout(()=>{

        loader.remove();

    },700);

});


/* ==========================================
   SPINNER STYLE
========================================== */

const spinner=document.createElement("style");

spinner.innerHTML=`

.spinner{

width:65px;

height:65px;

border:6px solid #ddd;

border-top:6px solid #2563eb;

border-radius:50%;

animation:spin .8s linear infinite;

}

@keyframes spin{

100%{

transform:rotate(360deg);

}

}

`;

document.head.appendChild(spinner);


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="5px";

progress.style.background="linear-gradient(90deg,#2563eb,#7c3aed)";

progress.style.zIndex="999999";

progress.style.width="0%";

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/* ==========================================
   NAVBAR SHADOW EFFECT
========================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>150){

navbar.style.boxShadow="0 12px 30px rgba(0,0,0,.15)";

}

else{

navbar.style.boxShadow="0 6px 18px rgba(0,0,0,.08)";

}

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cFutureTech College Website",
"color:#2563eb;font-size:22px;font-weight:bold");

console.log("%cDesigned using HTML CSS JS & Express",
"color:#7c3aed;font-size:14px;");
/* ==========================================================
   PART 3B-1
   ANIMATED COUNTERS + SCROLL REVEAL
========================================================== */

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        const speed = 120;

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (current < target) {

                counter.innerText = current + increment;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.4
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

`
.hero,
.features,
.card,
.counter,
.counter-box,
.courses,
.course-card,
.campus,
.campus-box,
.testimonials,
.testimonial,
.cta,
footer
`

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(item=>{

    item.classList.add("fade-up");

    revealObserver.observe(item);

});


/* ==========================================
   STAGGERED CARD ANIMATION
========================================== */

const cards=document.querySelectorAll(

".card,.course-card,.campus-box,.testimonial"

);

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index*120}ms`;

});


/* ==========================================
   HERO PARALLAX
========================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const value=window.scrollY;

    if(hero){

        hero.style.backgroundPositionY=value*0.4+"px";

    }

});


/* ==========================================
   IMAGE FLOAT EFFECT
========================================== */

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.pageX)/45;

    const y=(window.innerHeight/2-e.pageY)/45;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=button.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/* Ripple Style */

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

.btn{

overflow:hidden;

position:relative;

}

.ripple{

position:absolute;

width:15px;

height:15px;

background:rgba(255,255,255,.5);

border-radius:50%;

transform:translate(-50%,-50%);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

0%{

opacity:1;

transform:translate(-50%,-50%) scale(0);

}

100%{

opacity:0;

transform:translate(-50%,-50%) scale(15);

}

}

`;

document.head.appendChild(rippleStyle);


/* ==========================================
   SECTION TITLE ANIMATION
========================================== */

const titles=document.querySelectorAll("section h2");

titles.forEach(title=>{

    revealObserver.observe(title);

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%c✔ Scroll Reveal Loaded",
"color:green;font-size:14px;");

console.log("%c✔ Counter Animation Loaded",
"color:blue;font-size:14px;");
/* ==========================================================
   PART 3B-2A
   IMAGE REVEAL + LAZY LOADING + GALLERY EFFECTS
========================================================== */

/* ===========================
   IMAGE REVEAL ANIMATION
=========================== */

const images = document.querySelectorAll(
".hero-image img, .course-card img, .campus-box img, .testimonial img"
);

const imageObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("img-show");

            imageObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.25
});

images.forEach(img=>{

    img.classList.add("img-hidden");

    imageObserver.observe(img);

});

/* Add CSS dynamically */

const imageAnimation=document.createElement("style");

imageAnimation.innerHTML=`

.img-hidden{

opacity:0;

transform:translateY(40px) scale(.95);

transition:all .8s ease;

}

.img-show{

opacity:1;

transform:translateY(0) scale(1);

}

`;

document.head.appendChild(imageAnimation);

/* ===========================
      LAZY LOADING
=========================== */

const lazyImages=document.querySelectorAll("img[data-src]");

const lazyObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src;

img.onload=()=>{

img.classList.add("loaded");

};

lazyObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

lazyObserver.observe(img);

});

/* Loaded Animation */

const lazyStyle=document.createElement("style");

lazyStyle.innerHTML=`

img{

transition:opacity .5s ease;

}

img.loaded{

opacity:1;

}

`;

document.head.appendChild(lazyStyle);

/* ===========================
      GALLERY HOVER EFFECT
=========================== */

const galleryItems=document.querySelectorAll(".gallery-item");

galleryItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.05)";

item.style.transition=".4s";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});

/* ===========================
      IMAGE ZOOM EFFECT
=========================== */

const zoomImages=document.querySelectorAll(".zoom-img");

zoomImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.12)";

img.style.transition=".4s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ===========================
      CAMPUS CARD EFFECT
=========================== */

const campusCards=document.querySelectorAll(".campus-box");

campusCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.18),
transparent 65%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="";

});

});

/* ===========================
      COURSE CARD GLOW
=========================== */

const courseCards=document.querySelectorAll(".course-card");

courseCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 25px 50px rgba(37,99,235,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

/* ===========================
      PARALLAX IMAGES
=========================== */

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

images.forEach(img=>{

img.style.transform=`translateY(${scroll*0.03}px)`;

});

});

/* ===========================
      IMAGE CLICK EFFECT
=========================== */

images.forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("activeZoom");

});

});

const zoomStyle=document.createElement("style");

zoomStyle.innerHTML=`

.activeZoom{

transform:scale(1.2);

cursor:zoom-out;

transition:.4s;

z-index:100;

position:relative;

}

`;

document.head.appendChild(zoomStyle);

/* ===========================
      DEBUG
=========================== */

console.log("✔ Image Reveal Loaded");
console.log("✔ Lazy Loading Enabled");
console.log("✔ Gallery Effects Loaded");
/* ==========================================================
   PART 3B-2B
   PERFORMANCE + UTILITIES + ANIMATION HELPERS
========================================================== */

/* ==========================================
   THROTTLE FUNCTION
========================================== */

function throttle(func, delay){

    let lastCall = 0;

    return function(...args){

        const now = Date.now();

        if(now - lastCall >= delay){

            lastCall = now;

            func.apply(this,args);

        }

    };

}

/* ==========================================
   DEBOUNCE FUNCTION
========================================== */

function debounce(func, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{

            func.apply(this,args);

        },delay);

    };

}

/* ==========================================
   OPTIMIZED SCROLL EVENT
========================================== */

window.addEventListener("scroll",

throttle(()=>{

    const scroll = window.scrollY;

    document.documentElement.style.setProperty(

        "--scroll-position",

        scroll

    );

},25)

);

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener(

"resize",

debounce(()=>{

    console.log("Window resized");

},300)

);

/* ==========================================
   AUTO ADD ANIMATION CLASS
========================================== */

document.querySelectorAll(

".card,.course-card,.campus-box,.testimonial,.counter-box"

).forEach((el,index)=>{

    el.style.animationDelay = `${index*0.12}s`;

});

/* ==========================================
   BUTTON HOVER SCALE
========================================== */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";

    });

});

/* ==========================================
   RANDOM FLOATING EFFECT
========================================== */

const floatItems=document.querySelectorAll(

".card,.course-card"

);

setInterval(()=>{

    floatItems.forEach(item=>{

        item.style.transform=

        `translateY(${Math.random()*4}px)`;

    });

},2500);

/* ==========================================
   KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

/* ==========================================
   COPY EMAIL
========================================== */

const copyBtn=document.querySelector(".copy-email");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

const email=copyBtn.dataset.email;

navigator.clipboard.writeText(email);

copyBtn.innerText="Copied!";

setTimeout(()=>{

copyBtn.innerText="Copy Email";

},2000);

});

}

/* ==========================================
   SIMPLE PAGE FADE
========================================== */

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .6s";

document.body.style.opacity="1";

});

/* ==========================================
   MEMORY CLEANUP
========================================== */

window.addEventListener("beforeunload",()=>{

window.removeEventListener("scroll",()=>{});

window.removeEventListener("resize",()=>{});

});

/* ==========================================
   PERFORMANCE LOG
========================================== */

console.log("✔ Performance utilities loaded");
console.log("✔ Debounce & Throttle enabled");
console.log("✔ Animation helpers loaded");
/* ==========================================================
   PART 3C-1
   DARK MODE + TYPING EFFECT + HERO ANIMATIONS
========================================================== */

/* ==========================================
   DARK MODE TOGGLE
========================================== */

const darkToggle = document.querySelector(".dark-mode");

if(darkToggle){

    // Restore saved theme
    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        darkToggle.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    darkToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            darkToggle.innerHTML='<i class="fa-solid fa-sun"></i>';

        }else{

            localStorage.setItem("theme","light");

            darkToggle.innerHTML='<i class="fa-solid fa-moon"></i>';

        }

    });

}

/* ==========================================
   DARK MODE STYLES
========================================== */

const darkCSS=document.createElement("style");

darkCSS.innerHTML=`

body.dark{

background:#0f172a;

color:#f8fafc;

transition:.4s;

}

body.dark header,
body.dark .navbar{

background:#111827;

}

body.dark .card,
body.dark .course-card,
body.dark .testimonial,
body.dark .campus-box{

background:#1e293b;

color:#fff;

}

body.dark footer{

background:#020617;

}

body.dark h1,
body.dark h2,
body.dark h3,
body.dark h4{

color:#ffffff;

}

body.dark p{

color:#cbd5e1;

}

`;

document.head.appendChild(darkCSS);

/* ==========================================
   TYPING EFFECT
========================================== */

const typing=document.querySelector(".typing");

if(typing){

const words=[

"Future Starts Here",

"Learn From Experts",

"Innovate & Create",

"Shape Your Career",

"Welcome To Our College"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1400);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?45:90);

}

typeEffect();

}

/* ==========================================
   HERO TEXT FADE ANIMATION
========================================== */

const heroTitle=document.querySelector(".hero-content h1");

if(heroTitle){

heroTitle.style.opacity="0";
heroTitle.style.transform="translateY(50px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

heroTitle.style.transition="all 1s ease";

heroTitle.style.opacity="1";
heroTitle.style.transform="translateY(0)";

},300);

});

}

/* ==========================================
   HERO BUTTON ANIMATION
========================================== */

const heroButtons=document.querySelectorAll(".hero-buttons .btn");

heroButtons.forEach((btn,index)=>{

btn.style.opacity="0";
btn.style.transform="translateY(30px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

btn.style.transition=".8s";

btn.style.opacity="1";
btn.style.transform="translateY(0)";

},700+(index*250));

});

});

/* ==========================================
   HERO IMAGE FLOAT
========================================== */

const heroImg=document.querySelector(".hero-image img");

if(heroImg){

let angle=0;

setInterval(()=>{

angle+=0.03;

heroImg.style.transform=`
translateY(${Math.sin(angle)*8}px)
rotate(${Math.sin(angle)*1.5}deg)
`;

},25);

}

/* ==========================================
   CURSOR BLINK
========================================== */

if(typing){

const cursor=document.createElement("span");

cursor.textContent="|";

cursor.style.marginLeft="4px";

typing.after(cursor);

setInterval(()=>{

cursor.style.visibility=

cursor.style.visibility==="hidden"

?"visible":"hidden";

},500);

}

/* ==========================================
   HERO PARTICLE EFFECT
========================================== */

const hero=document.querySelector(".hero");

if(hero){

for(let i=0;i<15;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"%";
particle.style.top=Math.random()*100+"%";
particle.style.animationDelay=Math.random()*5+"s";

hero.appendChild(particle);

}

}

const particleStyle=document.createElement("style");

particleStyle.innerHTML=`

.hero{

position:relative;

overflow:hidden;

}

.particle{

position:absolute;

width:8px;

height:8px;

background:rgba(255,255,255,.4);

border-radius:50%;

animation:floatParticle 6s linear infinite;

pointer-events:none;

}

@keyframes floatParticle{

0%{

transform:translateY(40px);

opacity:0;

}

50%{

opacity:1;

}

100%{

transform:translateY(-250px);

opacity:0;

}

}

`;

document.head.appendChild(particleStyle);

/* ==========================================
   DEBUG
========================================== */

console.log("✔ Dark Mode Loaded");
console.log("✔ Typing Effect Loaded");
console.log("✔ Hero Animation Loaded");
/* ==========================================================
   PART 3C-2
   TESTIMONIAL SLIDER + SCROLL SPY + INTERACTIVE EFFECTS
========================================================== */

"use strict";

/* ==========================================
   AUTO TESTIMONIAL SLIDER
========================================== */

const testimonialContainer = document.querySelector(".testimonial-slider");

if (testimonialContainer) {

    let currentSlide = 0;
    const cards = testimonialContainer.querySelectorAll(".testimonial");

    function showSlide(index) {

        cards.forEach((card, i) => {

            if (window.innerWidth <= 768) {

                card.style.display = (i === index) ? "block" : "none";

            }

        });

    }

    if (window.innerWidth <= 768 && cards.length > 0) {

        showSlide(0);

        setInterval(() => {

            currentSlide++;

            if (currentSlide >= cards.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }, 4000);

    }

}

/* ==========================================
   SCROLL SPY NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

/* Active Link Style */

const activeStyle = document.createElement("style");

activeStyle.innerHTML = `

.active-link{

color:#2563eb !important;

font-weight:700;

position:relative;

}

.active-link::after{

content:"";

position:absolute;

left:0;

bottom:-6px;

width:100%;

height:3px;

background:#2563eb;

border-radius:10px;

}

`;

document.head.appendChild(activeStyle);

/* ==========================================
   PROGRESS BAR ANIMATION
========================================== */

const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            const value = bar.dataset.width || "100";

            bar.style.width = value + "%";

        }

    });

}, {

    threshold: 0.4

});

progressBars.forEach(bar => {

    bar.style.width = "0";

    progressObserver.observe(bar);

});

/* ==========================================
   NUMBER COUNT-UP
========================================== */

const stats = document.querySelectorAll(".stat-number");

stats.forEach(stat => {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const target = Number(stat.dataset.target);

                let value = 0;

                const timer = setInterval(() => {

                    value += Math.ceil(target / 80);

                    if (value >= target) {

                        value = target;

                        clearInterval(timer);

                    }

                    stat.textContent = value;

                }, 20);

                observer.unobserve(stat);

            }

        });

    });

    observer.observe(stat);

});

/* ==========================================
   CARD HOVER ROTATION
========================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * 8;

        const rotateY = ((x / rect.width) - 0.5) * -8;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ==========================================
   RANDOM QUOTE CHANGER
========================================== */

const quote = document.querySelector(".hero-quote");

if (quote) {

    const quotes = [

        "Empowering Future Leaders",
        "Knowledge Changes Everything",
        "Innovation Starts Here",
        "Dream • Learn • Achieve",
        "Education Beyond Books"

    ];

    let q = 0;

    setInterval(() => {

        q++;

        if (q >= quotes.length) q = 0;

        quote.style.opacity = "0";

        setTimeout(() => {

            quote.textContent = quotes[q];

            quote.style.opacity = "1";

        }, 400);

    }, 5000);

}

/* ==========================================
   CLICK RIPPLE FOR CARDS
========================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", e => {

        const ripple = document.createElement("span");

        ripple.className = "card-ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        card.appendChild(ripple);

        setTimeout(() => ripple.remove(), 700);

    });

});

const rippleCSS = document.createElement("style");

rippleCSS.innerHTML = `

.card{

position:relative;

overflow:hidden;

}

.card-ripple{

position:absolute;

width:20px;

height:20px;

background:rgba(255,255,255,.4);

border-radius:50%;

transform:translate(-50%,-50%) scale(0);

animation:cardRipple .7s linear;

pointer-events:none;

}

@keyframes cardRipple{

to{

transform:translate(-50%,-50%) scale(18);

opacity:0;

}

}

`;

document.head.appendChild(rippleCSS);

/* ==========================================
   DEBUG
========================================== */

console.log("✔ Testimonial Slider Loaded");
console.log("✔ Scroll Spy Enabled");
console.log("✔ Interactive Effects Loaded");
/* ==========================================================
   PART 3D-1
   CONTACT FORM + COURSE SEARCH + COURSE FILTER
========================================================== */

"use strict";

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.querySelector("#contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.querySelector("#name");
const email=document.querySelector("#email");
const subject=document.querySelector("#subject");
const message=document.querySelector("#message");

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.value.trim()===""){

alert("Please enter your name.");

name.focus();
return;

}

if(!emailPattern.test(email.value)){

alert("Enter a valid email address.");

email.focus();
return;

}

if(subject.value.trim().length<3){

alert("Subject should contain at least 3 characters.");

subject.focus();
return;

}

if(message.value.trim().length<10){

alert("Message should contain at least 10 characters.");

message.focus();
return;

}

alert("Message Sent Successfully!");

contactForm.reset();

});

}

/* ==========================================
   LIVE COURSE SEARCH
========================================== */

const searchInput=document.querySelector("#courseSearch");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".course-card");

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

const desc=card.querySelector("p").textContent.toLowerCase();

if(title.includes(value)||desc.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/* ==========================================
   COURSE FILTER BUTTONS
========================================== */

const filterButtons=document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelectorAll(".filter-btn").forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter=button.dataset.filter;

const courses=document.querySelectorAll(".course-card");

courses.forEach(course=>{

if(filter==="all"){

course.style.display="block";

return;

}

if(course.classList.contains(filter)){

course.style.display="block";

}else{

course.style.display="none";

}

});

});

});

/* ==========================================
   FILTER BUTTON STYLE
========================================== */

const filterStyle=document.createElement("style");

filterStyle.innerHTML=`

.filter-btn{

padding:12px 24px;

margin:6px;

border:none;

border-radius:40px;

cursor:pointer;

background:#e2e8f0;

transition:.35s;

font-weight:600;

}

.filter-btn:hover{

background:#2563eb;

color:#fff;

}

.filter-btn.active{

background:#2563eb;

color:#fff;

}

`;

document.head.appendChild(filterStyle);

/* ==========================================
   INPUT FOCUS EFFECT
========================================== */

document.querySelectorAll("input,textarea").forEach(input=>{

input.addEventListener("focus",()=>{

input.style.borderColor="#2563eb";

input.style.boxShadow="0 0 10px rgba(37,99,235,.2)";

});

input.addEventListener("blur",()=>{

input.style.borderColor="";

input.style.boxShadow="";

});

});

/* ==========================================
   CHARACTER COUNTER
========================================== */

const messageBox=document.querySelector("#message");

if(messageBox){

const counter=document.createElement("small");

counter.style.display="block";
counter.style.marginTop="8px";
counter.style.color="#64748b";

messageBox.after(counter);

messageBox.addEventListener("input",()=>{

counter.textContent=

messageBox.value.length+" characters";

});

}

/* ==========================================
   DEBUG
========================================== */

console.log("✔ Contact Form Validation Loaded");
console.log("✔ Live Course Search Loaded");
console.log("✔ Course Filter Loaded");