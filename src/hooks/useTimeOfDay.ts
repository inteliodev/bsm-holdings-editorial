import { useEffect, useState } from 'react';

export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';

/**
 * Time of day in BSM Holdings' actual market, not the visitor's.
 *
 * The Portfolio map is lit by Mapbox's `lightPreset`, and the Home hero carries
 * a gradient scrim. Driving both from the real clock in Oklahoma means the site
 * is lit the same way the buildings are at that moment — someone opening it at
 * 9pm sees the campus at night, and the hero darkens to match.
 *
 * Deliberately anchored to America/Chicago rather than the visitor's locale: the
 * subject is the asset, not the viewer.
 */
const TZ = 'America/Chicago';

export function marketHour(now: Date = new Date()): number {
  const hour = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    hour: 'numeric',
    hour12: false,
  }).format(now);
  // Intl returns "24" for midnight in some ICU versions.
  return Number(hour) % 24;
}

export function timeOfDayFor(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 8) return 'dawn';
  if (hour >= 8 && hour < 17) return 'day';
  if (hour >= 17 && hour < 20) return 'dusk';
  return 'night';
}

export function currentTimeOfDay(): TimeOfDay {
  return timeOfDayFor(marketHour());
}

export function useTimeOfDay(): TimeOfDay {
  // Server/prerender has no meaningful "now" for the viewer, but the value is
  // cheap and correct at build time too; the client re-renders on load anyway
  // because the app mounts with createRoot rather than hydrateRoot.
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(() => currentTimeOfDay());

  useEffect(() => {
    const tick = () => setTimeOfDay(currentTimeOfDay());
    // Ten minutes is far more often than the value can change, and costs
    // nothing; it means a long-open tab still crosses dusk correctly.
    const id = window.setInterval(tick, 10 * 60 * 1000);
    tick();
    return () => window.clearInterval(id);
  }, []);

  return timeOfDay;
}
