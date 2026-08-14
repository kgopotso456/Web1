/* ==========================================================================
   Interactive JavaScript for Woodwork Website
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Handle Enquiry Form Submission
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            
            const name = document.getElementById('fullName').value;
            const service = document.getElementById('serviceType').value;

            alert(`Thank you, ${name}! Your quote request for "${service}" has been received. Our team will contact you shortly.`);
            
            enquiryForm.reset(); // Clears form fields
        });
    }

    // 2. Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload

            const contactName = document.getElementById('contactName').value;

            alert(`Thank you, ${contactName}! Your message has been sent successfully to the Woodwork team.`);
            
            contactForm.reset(); // Clears form fields
        });
    }

    console.log("Woodwork main.js loaded successfully!");
});