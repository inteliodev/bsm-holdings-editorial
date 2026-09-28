import { useCallback, useEffect, useRef, useState } from 'react';
import { ListingCard } from './ListingCard';
import type { Listing } from '@/data/listings';

type Props = {
  listings: Listing[];
  autoplayMs?: number;
};

export function PropertyCarousel({ listings, autoplayMs = 5500 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = listings.length;

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = ((i % count) + count) % count;
      const child = el.children[clamped] as HTMLElement | undefined;
      if (!child) return;
      el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: 'smooth' });
      setIndex(clamped);
    },
    [count],
  );

  const syncIndexFromScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || count === 0) return;
    const children = Array.from(el.children) as HTMLElement[];
    let best = 0;
    let bestDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - el.scrollLeft - el.offsetLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best);
  }, [count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => syncIndexFromScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [syncIndexFromScroll]);

  useEffect(() => {
    if (paused || count < 2 || autoplayMs <= 0) return;
    const id = window.setInterval(() => {
      scrollToIndex(index + 1);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [paused, count, autoplayMs, index, scrollToIndex]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex(index + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(index - 1);
      }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [index, scrollToIndex]);

  if (count === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured rental properties"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 outline-none focus-visible:ring-2 focus-visible:ring-brand-bright focus-visible:ring-offset-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {listings.map((listing, i) => (
          <div
            key={listing.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className="w-[min(100%,340px)] shrink-0 snap-start sm:w-[min(100%,380px)]"
          >
            <ListingCard listing={listing} className="h-full max-w-none" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Carousel slides">
          {listings.map((l, i) => (
            <button
              key={l.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to listing ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-[1px] transition-all focus-ring ${
                i === index
                  ? 'w-8 bg-gradient-to-r from-brand to-silver'
                  : 'w-3 bg-silver-deep/60 hover:bg-brand/50'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous listing"
            onClick={() => scrollToIndex(index - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-silver/50 bg-white text-brand-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:border-brand focus-ring"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next listing"
            onClick={() => scrollToIndex(index + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-silver/50 bg-white text-brand-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:border-brand focus-ring"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing listing {index + 1} of {count}
      </p>
    </div>
  );
}
