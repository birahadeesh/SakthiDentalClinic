// Sakthi Dental Clinic Website Scripts

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Collapse menu on scroll or touch outside
        document.addEventListener('scroll', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
        document.addEventListener('touchstart', (e) => {
            if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
                mobileMenu.classList.add('hidden');
            }
        });
        document.addEventListener('mousedown', (e) => {
            if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // CTA Bar fade on scroll
    const ctaBar = document.getElementById('cta-bar');
    if (ctaBar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 100) {
                ctaBar.classList.add('cta-fade', 'visible');
            } else {
                ctaBar.classList.remove('cta-fade', 'visible');
            }
            lastScroll = currentScroll;
        });
    }

    // Smooth scroll for Book Now button (if anchor present)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Testimonial carousel (on testimonials.html)
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentTestimonial = 0;
    let testimonialInterval;
    if (testimonials.length > 0 && dots.length > 0) {
        function showTestimonial(idx) {
            testimonials.forEach((item, i) => {
                item.style.display = i === idx ? 'block' : 'none';
                dots[i].classList.toggle('bg-blue-300', i === idx);
                dots[i].classList.toggle('bg-blue-100', i !== idx);
            });
            currentTestimonial = idx;
        }
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showTestimonial(i));
        });
        function startTestimonialAuto() {
            testimonialInterval = setInterval(() => {
                let next = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(next);
            }, 5000);
        }
        function stopTestimonialAuto() {
            clearInterval(testimonialInterval);
        }
        showTestimonial(0);
        startTestimonialAuto();
        // Pause on hover
        const testimonialGrid = document.querySelector('.testimonials-carousel, .grid.md\:grid-cols-3');
        if (testimonialGrid) {
            testimonialGrid.addEventListener('mouseenter', stopTestimonialAuto);
            testimonialGrid.addEventListener('mouseleave', startTestimonialAuto);
        }
    }
}); 