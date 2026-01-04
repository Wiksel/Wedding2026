import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                element.classList.add('reveal-visible');
                observer.unobserve(element); // Trigger only once
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px', // Trigger a bit before fully in view
            ...options,
        });

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return ref;
};
