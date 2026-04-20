import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Revelación suave hacia arriba con ScrollTrigger
 */
export const revealUp = (element, delay = 0) => {
    if (!element) return;
    
    gsap.fromTo(element, 
        {
            y: 50,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
};

/**
 * Revelación lateral (desde la izquierda)
 */
export const revealLeft = (element, delay = 0) => {
    if (!element) return;

    gsap.fromTo(element, 
        {
            x: -50,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
};

/**
 * Revelación lateral (desde la derecha)
 */
export const revealRight = (element, delay = 0) => {
    if (!element) return;

    gsap.fromTo(element, 
        {
            x: 50,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
};

/**
 * Stagger para listas de elementos
 */
export const staggerReveal = (elements, delay = 0) => {
    if (!elements) return;

    gsap.fromTo(elements, 
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: (typeof elements === 'string') ? elements : (elements[0] || elements),
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
};

/**
 * Animación específica para Hero (sin ScrollTrigger para que sea inmediata)
 */
export const heroReveal = (container) => {
    if (!container) return;
    
    const elements = container.querySelectorAll("h1, p, .flex, .pt-5, .flex-row");
    if (elements.length === 0) return;

    const tl = gsap.timeline();
    tl.fromTo(elements, 
        {
            y: 30,
            opacity: 0,
            filter: "blur(5px)"
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.5
        }
    );
    return tl;
};
