// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling and Cross-Page Navigation
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const [path, hash] = href.split('#');
        const currentPath = window.location.pathname;

        // If the link points to a different page
        if (path && path !== currentPath && path !== '/') {
            // Store the hash to scroll after redirect
            sessionStorage.setItem('scrollTo', hash);
            window.location.href = path; // Navigate to the page
        } else {
            // Same-page scrolling
            const target = document.querySelector(`#${hash}`);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Contact Form Submission with WhatsApp
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        const whatsappNumber = document.getElementById('whatsapp-number').value;

        // Construct WhatsApp message
        const whatsappMessage = `New Contact Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Clear form
        contactForm.reset();
    });
}

// Gallery Image Zoom
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoomed');
        if (img.classList.contains('zoomed')) {
            img.style.transform = 'scale(1.5)';
            img.style.zIndex = '1000';
        } else {
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
        }
    });
});

// Donation Form Submission with WhatsApp
const donationForm = document.getElementById('donation-form');
if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('donation-name').value;
        const email = document.getElementById('donation-email').value;
        const amount = document.getElementById('donation-amount').value;
        const purpose = document.getElementById('donation-purpose').value;
        const whatsappNumber = document.getElementById('whatsapp-number').value;

        // Construct WhatsApp message
        const message = `New Donation Request:\nName: ${name}\nEmail: ${email}\nAmount: $${amount}\nPurpose: ${purpose}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Clear form
        donationForm.reset();
    });
}