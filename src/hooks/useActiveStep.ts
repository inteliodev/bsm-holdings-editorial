import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Tracks which step in a scrollytelling list is "current".
 *
 * An IntersectionObserver with a narrow rootMargin band was the obvious
 * approach and is subtly wrong at the edges: once the last step leaves the band
 * — scrolling past the end of the section, or jumping with a fast scroll — no
 * entry intersects, nothing fires, and the diagram is left showing whichever
 * step it happened to be on. In practice that meant the section could end with
 * layer 01 highlighted while layer 05 was on screen.
 *
 * Measuring instead: whichever step's midpoint is nearest the middle of the
 * viewport wins. That always resolves to exactly one answer, including at both
 * ends of the list, and costs a single rAF-throttled pass over a handful of
 * elements.
 */
export function useActiveStep(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  const setRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      refs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Infinity;

      refs.current.slice(0, count).forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });

      setActive(best);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [count]);

  return { active, setRef };
}
