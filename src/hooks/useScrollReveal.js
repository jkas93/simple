import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies scroll-reveal animations using IntersectionObserver.
 * Elements with [data-reveal] become visible when they enter the viewport.
 * 
 * Usage: const containerRef = useScrollReveal();
 * Then add data-reveal="fade-up" | "fade-left" | "fade-right" | "fade-scale" to elements.
 * Add data-delay="100" for staggered animations (ms).
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return containerRef;
}
