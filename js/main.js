// CIVIL SHIELD MAIN CONTROLLER
// Handles landing page interactions, animations, and global UI state.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Civil Shield: System Online');

    // Initialize Live Docket Watch Blink
    initDocketWatch();

    // Initialize Scroll Animations
    initScrollObserver();

    // Initialize Navigation Highlight
    highlightActiveNav();
});

// ---------------------------------------------------------
// LIVE DOCKET WATCH ANIMATION
// ---------------------------------------------------------
function initDocketWatch() {
    const dot = document.querySelector('.live-dot');
    if (dot) {
        setInterval(() => {
            dot.style.opacity = (dot.style.opacity === '0.2' ? '1' : '0.2');
        }, 800);
    }
}

// ---------------------------------------------------------
// SCROLL INTERSECTION OBSERVER
// ---------------------------------------------------------
function initScrollObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you want it to only animate once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Observe all feature cards and sections
    document.querySelectorAll('.feature-card, .section-title, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // CSS class to add via JS for the transition effect
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ---------------------------------------------------------
// NAVIGATION LOGIC
// ---------------------------------------------------------
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('text-main');
        }
    });
}
