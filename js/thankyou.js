/* ==========================================================
   THANK YOU PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    createConfetti();

    animateCard();

    animateGlow();

    introAnimation();

});

/* ==========================================================
   CONFETTI
========================================================== */

const colors = [

    "#dba321",
    "#f5d56a",
    "#ffffff",
    "#e8b72e"

];

function createConfetti() {

    const container = document.querySelector(".confetti-container");

    if (!container) return;

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.width = random(6, 14) + "px";

        piece.style.height = random(10, 22) + "px";

        piece.style.opacity = random(.5, 1);

        piece.style.borderRadius = random(0, 3) + "px";

        piece.style.animation = `
            confettiFall
            ${random(6,12)}s
            linear
            infinite
        `;

        piece.style.animationDelay =
            (-Math.random() * 12) + "s";

        piece.style.transform =
            `rotate(${random(0,360)}deg)`;

        container.appendChild(piece);

    }

}

/* ==========================================================
   INTRO BURST
========================================================== */

setTimeout(() => {

    burst();

}, 400);

function burst(){

    const container=document.querySelector(".confetti-container");

    for(let i=0;i<40;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left="50%";

        piece.style.top="120px";

        piece.style.width="12px";

        piece.style.height="18px";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        const x=random(-450,450);

        const y=random(-400,-50);

        piece.animate([

            {

                transform:"translate(0,0) rotate(0deg)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px)
                rotate(${random(300,900)}deg)`,

                opacity:1,

                offset:.4

            },

            {

                transform:`translate(${x*1.2}px,800px)
                rotate(${random(900,1500)}deg)`,

                opacity:0

            }

        ],{

            duration:4200,

            easing:"cubic-bezier(.2,.8,.2,1)"

        });

        container.appendChild(piece);

        setTimeout(()=>piece.remove(),4500);

    }

}

/* ==========================================================
   FLOAT CARD
========================================================== */

function animateCard(){

    const card=document.querySelector(".thankyou-card");

    if(!card) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*12;

        const y=(e.clientY/window.innerHeight-.5)*12;

        card.style.transform=
        `rotateY(${x}deg)
         rotateX(${-y}deg)
         translateZ(0px)`;

    });

    document.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

}

/* ==========================================================
   GLOW PARALLAX
========================================================== */

function animateGlow(){

    const glow=document.querySelector(".thankyou-glow");

    if(!glow) return;

    document.addEventListener("mousemove",(e)=>{

        const x=e.clientX/window.innerWidth;

        const y=e.clientY/window.innerHeight;

        glow.style.transform=
        `translate(
        ${x*40-20}px,
        ${y*30-15}px
        )`;

    });

}

/* ==========================================================
   INTRO
========================================================== */

function introAnimation(){

    const card=document.querySelector(".thankyou-card");

    if(!card) return;

    card.animate([

        {

            opacity:0,

            transform:"translateY(80px) scale(.9)"

        },

        {

            opacity:1,

            transform:"translateY(0) scale(1)"

        }

    ],{

        duration:900,

        easing:"cubic-bezier(.22,.8,.2,1)"

    });

}

/* ==========================================================
   HELPERS
========================================================== */

function random(min,max){

    return Math.random()*(max-min)+min;

}