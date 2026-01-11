// Smooth scroll functionality
document.getElementById('openInvitation').addEventListener('click', function() {
    document.getElementById('story').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in-scroll class to elements
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.story-section, .details-section, .rsvp-section');
    sections.forEach(section => {
        section.classList.add('fade-in-scroll');
        observer.observe(section);
    });

    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach((card, index) => {
        card.classList.add('fade-in-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Form submission
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to a server
    console.log('RSVP Submitted:', {
        name,
        email,
        attendance,
        guests,
        message
    });

    // Show success message
    alert(`Thank you, ${name}! Your RSVP has been received. We'll send a confirmation to ${email}.`);
    
    // Reset form
    this.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add interactive hover effect to detail cards
const detailCards = document.querySelectorAll('.detail-card');
detailCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 60px rgba(139, 115, 85, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Number of guests validation
const guestsInput = document.getElementById('guests');
const attendanceSelect = document.getElementById('attendance');

attendanceSelect.addEventListener('change', function() {
    if (this.value === 'yes') {
        guestsInput.required = true;
        guestsInput.disabled = false;
    } else {
        guestsInput.required = false;
        guestsInput.disabled = true;
        guestsInput.value = '';
    }
});

// Initialize guests input state
guestsInput.disabled = true;