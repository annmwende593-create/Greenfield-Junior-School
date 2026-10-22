// Admission form interaction
const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
    admissionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const Mary Ann =
            document.getElementById("Mary Ann").value.trim();

        const grade =
            document.getElementById("grade 6").value;

        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "Thank you, " + studentName +
            "! Your application for " + grade +
            " has been completed for this demonstration. " +
            "Please contact the school to submit your application.";

        admissionForm.reset();
    });
}


// Contact form interaction
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name =
            document.getElementById("Mary Ann").value.trim();

        const contactMessage =
            document.getElementById("contactMessage");

        contactMessage.textContent =
            "Thank you, " + name +
            "! Your message has been prepared successfully. " +
            "This demonstration does not send emails.";

        contactForm.reset();
    });
}


// Welcome message on the home page
if (window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("/")) {

    console.log("Welcome to Greenfield Junior School!");
}
