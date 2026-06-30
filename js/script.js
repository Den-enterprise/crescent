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