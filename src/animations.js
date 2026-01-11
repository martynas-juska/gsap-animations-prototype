import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ========================================
// HERO PARALLAX LAYERS
// ========================================

gsap.to('.layer-2', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-parallax',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.layer-3', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-parallax',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// Hero text reveal animation
gsap.utils.toArray('.hero-title .line').forEach((line, index) => {
    gsap.from(line, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: index * 0.2,
        ease: 'power4.out'
    });
});

// Hero subtitle and buttons
gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.from('.hero-cta-group', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
});

// ========================================
// PHOTO REVEAL SECTION - CLIP PATH
// ========================================

gsap.fromTo('.photo-reveal-image',
    {
        clipPath: 'inset(100% 0 0 0)' // Start: hidden
    },
    {
        clipPath: 'inset(0% 0 0 0)', // End: visible
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
            trigger: '.photo-reveal-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    }
);

// Reveal text elements
gsap.utils.toArray('.reveal-text').forEach((element) => {
    gsap.from(element, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// ========================================
// SPLIT SCROLL SECTION
// ========================================

gsap.utils.toArray('.split-content-item').forEach((item, index) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => item.classList.add('active'),
        onLeave: () => item.classList.remove('active'),
        onEnterBack: () => item.classList.add('active'),
        onLeaveBack: () => item.classList.remove('active')
    });
});

// Parallax effect on sticky image
gsap.to('.split-image-wrapper', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.split-scroll-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// ========================================
// HORIZONTAL SCROLL SECTION
// ========================================

// ========================================
// HORIZONTAL SCROLL SECTION - EXTENDED SCROLL
// ========================================

window.addEventListener('load', () => {
    const container = document.querySelector('.horizontal-scroll-container');
    const wrapper = document.querySelector('.horizontal-scroll-wrapper');
    const cards = document.querySelectorAll('.process-card');

    if (container && wrapper && cards.length > 0) {
        
        // Calculate actual scroll distance needed
        function getScrollAmount() {
            return container.scrollWidth - wrapper.offsetWidth;
        }

        const scrollAmount = getScrollAmount();
        
        // INCREASE PIN DURATION - Make it 3-4x longer for extended scroll
        const pinDuration = scrollAmount * 3; // ← Changed from 2 to 4

        const scrollTween = gsap.to(container, {
            x: () => -scrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: () => `+=${pinDuration}`, // Much longer now
                scrub: 0.7,
                pin: true,
                invalidateOnRefresh: true,
                markers: false // Set to true to debug
            }
        });

        // Card fade-in animations
        gsap.utils.toArray('.process-card').forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 100,
                duration: 0.8,
                scrollTrigger: {
                    trigger: card,
                    containerAnimation: scrollTween,
                    start: 'left 80%',
                    end: 'left 50%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Optional: Image parallax inside cards
        gsap.utils.toArray('.process-image div').forEach((img) => {
            gsap.to(img, {
                scale: 1.1,
                scrollTrigger: {
                    trigger: img.closest('.process-card'),
                    containerAnimation: scrollTween,
                    start: "left center",
                    end: "right center",
                    scrub: true
                }
            });
        });

        console.log('✅ Horizontal scroll initialized with extended duration');
    }
});

// ========================================
// STAGGER GRID SECTION
// ========================================

gsap.utils.toArray('.stagger-item').forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.stagger-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
});

// ========================================
// MORPH SECTION - IMAGE ANIMATION
// ========================================

gsap.to('.morph-image', {
    rotation: 360,
    ease: 'none',
    scrollTrigger: {
        trigger: '.morph-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
    }
});

gsap.fromTo('.morph-image',
    {
        scale: 0.8,
        opacity: 0
    },
    {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.morph-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    }
);

gsap.from('.morph-text-wrapper > *', {
    x: -80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.morph-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

// ========================================
// TESTIMONIALS SCROLL ANIMATION
// ========================================

gsap.utils.toArray('.testimonial-scroll-card').forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.testimonials-scroll-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// CURSOR HOVER EFFECTS
// ========================================

const hoverElements = document.querySelectorAll('.btn-primary, .btn-secondary, .process-card, .stagger-item');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    element.addEventListener('mouseleave', (e) => {
        gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

console.log('🎨 GSAP Animations Loaded Successfully!');