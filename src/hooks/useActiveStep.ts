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
 *
 * `progress` is the same measurement expressed continuously: 0 when the first
 * step is centred, 1 when the last one is. It exists so a diagram can draw a
 * rail that fills as you descend, which the discrete `active` index cannot
 * express. It stays 0 under reduced motion and before the first scroll, so
 * anything driven by it has to look deliberate at 0 — a rail that reads as
 * "not started" rather than broken.
 */
export function useActiveStep(count: number) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
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
      const steps = refs.current.slice(0, count);
      let best = 0;
      let bestDistance = Infinity;
      let firstMid = 0;
      let lastMid = 0;

      steps.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const distance = Math.abs(mid - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
        if (index === 0) firstMid = mid;
        if (index === steps.length - 1) lastMid = mid;
      });

      setActive(best);

      // Midpoints are viewport-relative and increase down the page, so the span
      // runs first -> last. Guard the single-step case, where it is zero and the
      // ratio would be NaN.
      const span = lastMid - firstMid;
      setProgress(span <= 0 ? 0 : Math.min(1, Math.max(0, (middle - firstMid) / span)));
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

  return { active, progress, setRef };
}
