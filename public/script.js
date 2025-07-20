// Sakthi Dental Clinic Website Scripts

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
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
        // Auto-rotate every 5s
        setInterval(() => {
            let next = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(next);
        }, 5000);
    }

    // Appointment form submission with email functionality
    const appointmentForm = document.getElementById('appointment-form');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            console.log('📝 Form submitted!');

            // Disable submit button and show loading
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = '📤 Sending...';
            }

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value,
                message: document.getElementById('message').value
            };

            console.log('📊 Form data:', formData);

            try {
                console.log('🌐 Sending request to /api/appointment...');
                const response = await fetch('/api/appointment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                console.log('📡 Response status:', response.status);
                const result = await response.json();
                console.log('📡 Response data:', result);

                // Show message
                if (formMessage) {
                    formMessage.classList.remove('hidden');
                    if (result.success) {
                        formMessage.className = 'text-center p-4 rounded-lg bg-green-100 text-green-800 border border-green-200';
                        formMessage.textContent = result.message;
                        appointmentForm.reset();
                        console.log('✅ Success! Form reset and message shown.');
                    } else {
                        formMessage.className = 'text-center p-4 rounded-lg bg-red-100 text-red-800 border border-red-200';
                        formMessage.textContent = result.message;
                        console.log('❌ Error:', result.message);
                    }
                } else {
                    // Fallback to alert if form-message div doesn't exist
                    if (result.success) {
                        alert('Thank you for booking your appointment! We will contact you soon.');
                        appointmentForm.reset();
                    } else {
                        alert('Error: ' + result.message);
                    }
                }
            } catch (error) {
                console.error('💥 Network error:', error);
                if (formMessage) {
                    formMessage.classList.remove('hidden');
                    formMessage.className = 'text-center p-4 rounded-lg bg-red-100 text-red-800 border border-red-200';
                    formMessage.textContent = 'Network error. Please try again or contact us directly.';
                } else {
                    alert('Network error. Please try again or contact us directly.');
                }
            } finally {
                // Re-enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = '📅 Book Appointment';
                    console.log('🔄 Submit button re-enabled');
                }
            }
        });
    }
}); 