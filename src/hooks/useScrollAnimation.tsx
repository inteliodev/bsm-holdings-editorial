import { useEffect, useRef, useState, type CSSProperties } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  distance?: number;
  delay?: number;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scroll reveal that stays visible when reduced-motion is preferred, when the
 * observer never fires, or if animation setup fails — never leave blank sections.
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -40px 0px',
    distance = 20,
    delay = 0,
  } = options;

  const [reduceMotion] = useState(prefersReducedMotion);
  const [isVisible, setIsVisible] = useState(reduceMotion);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) {
      setIsVisible(true);
      return;
    }

    let settled = false;
    const reveal = () => {
      if (settled) return;
      settled = true;
      setIsVisible(true);
    };

    // Failsafe: if IntersectionObserver never intersects (or is unavailable),
    // content must still appear.
    const failsafe = window.setTimeout(reveal, 1800);

    if (typeof IntersectionObserver === 'undefined') {
      reveal();
      window.clearTimeout(failsafe);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
          window.clearTimeout(failsafe);
        }
      },
      { threshold, rootMargin },
    );

    try {
      observer.observe(element);
    } catch {
      reveal();
      window.clearTimeout(failsafe);
    }

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, rootMargin, reduceMotion]);

  if (reduceMotion) {
    return {
      ref: elementRef,
      isVisible: true,
      style: {} as CSSProperties,
    };
  }

  return {
    ref: elementRef,
    isVisible,
    style: {
      transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
      opacity: isVisible ? 1 : 0,
      transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: isVisible ? undefined : 'transform, opacity',
      transformOrigin: 'center center',
    } as CSSProperties,
  };
};
