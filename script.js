document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and times
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });

    // Intersection Observer for scroll animations (fade in)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial state for animation
    document.querySelectorAll('.card, .project-card, .skill-category, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Dynamic background glow mouse tracker
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        const glow1 = document.querySelector('.hero-glow-1');
        const glow2 = document.querySelector('.hero-glow-2');
        
        if(glow1) {
            glow1.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
        }
        if(glow2) {
            glow2.style.transform = `translate(${x * -0.02}px, ${y * -0.02}px)`;
        }
    });
});
