import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  distance?: number;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -40px 0px',
    distance = 20,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, reduceMotion]);

  if (reduceMotion) {
    return {
      ref: elementRef,
      isVisible: true,
      style: {} as React.CSSProperties,
    };
  }

  return {
    ref: elementRef,
    isVisible,
    style: {
      transform: isVisible
        ? 'translateY(0)'
        : `translateY(${distance}px)`,
      opacity: isVisible ? 1 : 0,
      transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: isVisible ? undefined : 'transform, opacity',
      transformOrigin: 'center center',
    } as React.CSSProperties,
  };
};
