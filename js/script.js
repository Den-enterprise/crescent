document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("applicationForm");

    if (form) {
        form.addEventListener("submit", function(e){
            e.preventDefault();

            alert(
                "Form submitted successfully. Google Sheets integration will be added later."
            );
        });
    }

    const specializationButtons = document.querySelectorAll(".specialization-item");
    const panelTitle = document.getElementById("specialization-title");
    const panelDescription = document.getElementById("specialization-description");
    const focusList = document.getElementById("focus-list");
    const careerList = document.getElementById("career-list");

    const specializationData = {
        
    marketing: {
        title: "Marketing",
        description: "Build strategy, brand positioning and customer growth skills for modern organisations.",
        focus: ["Brand strategy", "Consumer behaviour", "Digital growth"],
        careers: ["Brand Manager", "Growth Marketer", "Sales Strategist"]
    },
    finance: {
        title: "Finance",
        description: "Learn to evaluate markets, manage capital, and make sharper business decisions.",
        focus: ["Corporate finance", "Investment analysis", "Risk planning"],
        careers: ["Financial Analyst", "Treasury Manager", "Business Finance Lead"]
    },
    hr: {
        title: "HRM",
        description: "Develop people strategy, culture building and workforce planning confidence.",
        focus: ["Talent management", "Leadership development", "Organisational behaviour"],
        careers: ["HR Business Partner", "Talent Manager", "People Operations Lead"]
    },
    operations: {
        title: "Operations",
        description: "Create efficient systems, improve delivery and lead execution excellence.",
        focus: ["Process design", "Supply chain", "Performance improvement"],
        careers: ["Operations Manager", "Process Analyst", "Supply Chain Executive"]
    },
    analytics: {
        title: "Business Analytics",
        description: "Use data to uncover insight, guide decisions and drive measurable growth.",
        focus: ["Data storytelling", "Forecasting", "Decision science"],
        careers: ["Business Analyst", "Insights Lead", "Strategy Analyst"]
    },
    entrepreneurship: {
        title: "Entrepreneurship",
        description: "Learn to validate ideas, build ventures and create impact with resilience.",
        focus: ["Venture building", "Customer discovery", "Startup finance"],
        careers: ["Founder", "Startup Strategist", "Innovation Lead"]
    },
    logistics: {
        title: "Logistics & Supply Chain",
        description: "Manage the movement of goods, information and resources to keep businesses operating efficiently.",
        focus: ["Supply chain planning", "Inventory management", "Logistics operations"],
        careers: ["Supply Chain Analyst", "Logistics Coordinator", "Procurement Executive"]
    },
    alternativeFinance: {
        title: "Alternative Finance",
        description: "Explore innovative financial solutions, emerging technologies and modern investment opportunities.",
        focus: ["FinTech", "Digital finance", "Alternative investments"],
        careers: ["FinTech Analyst", "Investment Consultant", "Digital Finance Specialist"]
    },
    internationalBusiness: {
        title: "International Business",
        description: "Develop the skills to compete in global markets and manage business across borders.",
        focus: ["Global trade", "International marketing", "Cross-cultural management"],
        careers: ["International Business Executive", "Export Manager", "Global Market Analyst"]
    }
};

    const renderSpecialization = (key) => {
        const data = specializationData[key];

        if (!data || !panelTitle || !panelDescription || !focusList || !careerList) {
            return;
        }

        panelTitle.textContent = data.title;
        panelDescription.textContent = data.description;
        focusList.innerHTML = data.focus.map((item) => `<li>${item}</li>`).join("");
        careerList.innerHTML = data.careers.map((item) => `<span>${item}</span>`).join("");

        specializationButtons.forEach((button) => {
            const isActive = button.dataset.specialization === key;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-selected", isActive ? "true" : "false");
        });
    };

    specializationButtons.forEach((button) => {
        button.addEventListener("click", () => renderSpecialization(button.dataset.specialization));
    });

    if (specializationButtons.length) {
        renderSpecialization("marketing");
    }

});



    const scriptURL = "https://script.google.com/macros/s/AKfycby2rc4O8rpGUA1QcS0W1kaDBtLLLPKL7nTUpD5BZ4blIekRmqcwtdAXz9ID48Vo_y0zag/exec";

    const form = document.getElementById("leadForm");

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        const submitBtn = form.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitting...";

        const data = {

            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            education: form.education.value,
            programme: form.programme.value

        };

        try {

            const response = await fetch(scriptURL, {
                method: "POST",
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if(result.status === "success"){

                // Redirect after successful submission
                window.location.href = "thankyou.html";

            }else{

                alert("Something went wrong. Please try again.");

            }

        } catch(err){

            alert("Unable to submit the form. Please try again.");

        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit";

    });


    /* ==========================================================
   MBA IEV SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initIEVCounters();

    initReveal();

    initStatHover();

    initFloatingBlobs();

});


/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initReveal(){

    const elements=document.querySelectorAll(".reveal");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.18

    });

    elements.forEach(el=>observer.observe(el));

}


/* ==========================================================
   COUNT UP
========================================================== */

function initIEVCounters(){

    const counters=document.querySelectorAll(".counter");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(counter){

    const target=+counter.dataset.target;

    let current=0;

    const increment=target/80;

    function update(){

        current+=increment;

        if(current<target){

            counter.innerText=Math.floor(current);

            requestAnimationFrame(update);

        }else{

            counter.innerText=target;

        }

    }

    update();

}


/* ==========================================================
   3D CARD HOVER
========================================================== */

function initStatHover(){

    const cards=document.querySelectorAll(".iev-stat-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*14;

            const rotateX=((y/rect.height)-0.5)*-14;

            card.style.transform=

            `perspective(1000px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateY(-10px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}


/* ==========================================================
   FEATURE CARD STAGGER
========================================================== */

const graduateObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const items=entry.target.querySelectorAll(".graduate-item");

            items.forEach((item,index)=>{

                setTimeout(()=>{

                    item.animate([

                        {

                            opacity:0,

                            transform:"translateY(40px)"

                        },

                        {

                            opacity:1,

                            transform:"translateY(0)"

                        }

                    ],{

                        duration:700,

                        easing:"cubic-bezier(.22,.8,.2,1)",

                        fill:"forwards"

                    });

                },index*120);

            });

        }

    });

},{

    threshold:.3

});

const graduateBox=document.querySelector(".graduate-box");

if(graduateBox){

    graduateObserver.observe(graduateBox);

}


/* ==========================================================
   BUTTON RIPPLE
========================================================== */

document.querySelectorAll(".primary-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="btn-ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});


/* ==========================================================
   FLOATING BLOBS
========================================================== */

function initFloatingBlobs(){

    const blob1=document.querySelector(".blob-one");

    const blob2=document.querySelector(".blob-two");

    if(!blob1||!blob2) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*40;

        const y=(e.clientY/window.innerHeight-.5)*30;

        blob1.style.transform=

        `translate(${x}px,${y}px)`;

        blob2.style.transform=

        `translate(${-x}px,${-y}px)`;

    });

}




/* ==========================================================
   ICON BOUNCE
========================================================== */

document.querySelectorAll(".graduate-icon").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.15)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:450

        });

    });

});


/* ==========================================================
   GOLD GLOW
========================================================== */

document.querySelectorAll(".iev-stat-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow=

        "0 35px 80px rgba(219,163,33,.25)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});