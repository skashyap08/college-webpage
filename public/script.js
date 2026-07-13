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