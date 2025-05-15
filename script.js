// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar visibility on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Work item hover effect
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-content') && navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar visibility on scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Work item hover effect
    document.querySelectorAll('.work-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Lottie animation in hero image (responsive, with error logging)
    if (window.lottie) {
        try {
            lottie.loadAnimation({
                container: document.getElementById('lottie-hero'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/animation.json' // Updated to new filename
            });
        } catch (e) {
            console.error('Lottie animation failed to load:', e);
        }
    } else {
        console.error('Lottie library not loaded');
    }
}); 