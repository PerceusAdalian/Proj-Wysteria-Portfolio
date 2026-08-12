// Checks
console.log("App Status -- OK");

// Variables
const contactTriggers = document.querySelectorAll('.contact-trigger');
const contactModal = document.getElementById('contact');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contact-form');
const toggleButton = document.querySelector('.mode-toggle-button');

// Functions
function openModal() {
    contactModal.classList.add('active');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    contactModal.classList.remove('active');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

contactTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

modalClose.addEventListener('click', closeModal);

contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) closeModal();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const firstName = document.getElementById('contact-first-name').value.trim();
    const lastName = document.getElementById('contact-last-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const fullName = `${firstName} ${lastName}`;

    let body = `Hi there! My name is ${fullName}. I recently came across your portfolio, and would like to connect.\n`;
    body += `- My email is: ${email}\n`;
    if (phone) body += `- My phone number is: ${phone}\n`;
    if (message) body += `\n${message}\n`;
    body += `\nI appreciate your time, and look forward to hearing from you.\n\nBest,\n${fullName}`;

    const subject = `Portfolio Contact - ${fullName}`;
    const mailtoLink = `mailto:mailto:khyonie@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});