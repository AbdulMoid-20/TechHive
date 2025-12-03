
const testimonials = [
    {
        quote: "TechHive delivered a highly secure and performant cloud platform ahead of schedule. Their engineering quality is unmatched.",
        name: "Alex Jonson",
        title: "CTO, Global Innovations",
        initials: "AJ"
    },
    {
        quote: "Working with TechHive transformed our digital infrastructure. Their team is fast, reliable, and truly world-class.",
        name: "Sarah William",
        title: "VP Technology, NovaTech",
        initials: "SW"
    },
    {
        quote: "The best development partner we've ever worked with. Exceptional communication and outstanding delivery.",
        name: "Michael Chen",
        title: "Founder, DataFlow",
        initials: "MC"
    }
];

let index = 0;

const box = document.getElementById("testimonial-box");
const dotsContainer = document.getElementById("test-dots");

function loadTestimonial() {
    const t = testimonials[index];

    box.style.opacity = "0";

    setTimeout(() => {
        box.innerHTML = `
            <div class="text-center testimonial-quote mb-4">
                “${t.quote}”
            </div>

            <div class="d-flex justify-content-center align-items-center gap-3">
                <div class="testimonial-avatar">${t.initials}</div>
                <div class="text-start">
                    <div class="fw-bold fs-5 text-white">${t.name}</div>
                    <div class="text-primary">${t.title}</div>
                </div>
            </div>
        `;

        box.style.opacity = "1";
        updateDots();
    }, 200);
}

function updateDots() {
    dotsContainer.innerHTML = "";

    testimonials.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("test-dot");
        if (i === index) dot.classList.add("active");
        dot.onclick = () => { index = i; loadTestimonial(); };
        dotsContainer.appendChild(dot);
    });
}

document.getElementById("test-prev").onclick = () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    loadTestimonial();
};

document.getElementById("test-next").onclick = () => {
    index = (index + 1) % testimonials.length;
    loadTestimonial();
};

loadTestimonial();


// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from submitting

    let isValid = true;

    function validateField(id, errorId, condition) {
        if (condition) {
            document.getElementById(errorId).classList.add("d-none");
        } else {
            document.getElementById(errorId).classList.remove("d-none");
            isValid = false;
        }
    }

    // Fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation rules
    validateField("name", "nameError", name !== "");
    validateField("email", "emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    validateField("phone", "phoneError", phone !== "");
    validateField("subject", "subjectError", subject !== "");
    validateField("message", "messageError", message !== "");

    // Success
    if (isValid) {
        alert("Form Submitted Successfully!");
        this.reset();
    }
});

if (condition) {
    field.classList.remove("error");
} else {
    field.classList.add("error");
}


