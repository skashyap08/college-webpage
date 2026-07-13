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