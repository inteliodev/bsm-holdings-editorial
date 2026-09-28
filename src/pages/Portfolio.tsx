import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { Map as MapboxMap, Marker as MapboxMarker, Popup as MapboxPopup } from 'mapbox-gl';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { currentTimeOfDay, useTimeOfDay } from '@/hooks/useTimeOfDay';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

// All current properties sit on one campus, so this is the one source of truth
// for the shared centre rather than repeating the literal at every call site.
const CAMPUS_CENTER: [number, number] = [-95.3078362685698, 36.29323680677572];
const CAMPUS_ADDRESS = '901 SE 9th Street, Pryor, OK 74361';

/** Above this zoom the three buildings separate; below it they read as one point. */
const FAN_ZOOM = 16.6;
const FAN_RADIUS_M = 24;

/** The three communities share one campus, one office and one website. */
const CAMPUS_WEBSITE = 'https://mayorwallis.com';

/**
 * Shared campus amenities. All three communities are served by the same office,
 * community room and grounds, so this is stated once rather than duplicated
 * into each record where it would drift.
 */
const CAMPUS_AMENITIES = [
  'Community room with game tables and piano',
  'Resident library',
  'Covered mail porch and picnic area',
  'Shaded grounds and walking lawn',
  'On-site office, Mon–Fri 8:30am–5pm',
];

type Photo = { src: string; alt: string };

/**
 * Campus photography, shared for the same reason the amenities are. Ordered so
 * the entrance sign leads — it is the only shot that names the property.
 */
const CAMPUS_PHOTOS: Photo[] = [
  { src: '/images/properties/entrance-sign.webp', alt: 'Entrance sign at Mayor Wallis Manor and Venture Villa' },
  { src: '/images/properties/grounds-oak-tree.webp', alt: 'Single-storey homes under mature oaks on the Pryor campus' },
  { src: '/images/properties/office-mail-porch.webp', alt: 'Covered porch at the leasing office with mailboxes and picnic tables' },
  { src: '/images/properties/community-room.webp', alt: 'Community room with game tables, a piano and seating' },
  { src: '/images/properties/community-library.webp', alt: 'The resident library' },
  { src: '/images/properties/library-shelves.webp', alt: 'Shelves of donated books in the resident library' },
  { src: '/images/properties/back-lawn.webp', alt: 'Shaded lawn behind the homes' },
];

type Property = {
  id: string;
  name: string;
  short: string;
  address: string;
  type: string;
  units: number;
  status: string;
  built: string;
  beds: string;
  baths: string;
  /** Approximate unit size, as published by the community. */
  sqft: string;
  phone: string;
  email: string;
  website: string;
  description: string;
};

/* Declared rather than inferred from the literal. `(typeof properties)[number]`
   widens the union the moment one record carries a field another does not, and
   every read of that field then fails to compile. */
const properties: Property[] = [
  {
    id: 'mwm',
    name: 'Mayor Wallis Manor',
    short: 'MWM',
    address: CAMPUS_ADDRESS,
    type: 'Senior Housing',
    units: 31,
    status: 'Active',
    built: '1991',
    beds: '1 BD',
    baths: '1 BA',
    sqft: '~560',
    phone: '',
    email: 'ty@bsmholdings.com',
    website: CAMPUS_WEBSITE,
    description:
      'A 31-unit HUD Section 202 senior housing community providing affordable, supportive housing for elderly residents in Pryor, Oklahoma.',
  },
  {
    id: 'vv1',
    name: 'Venture Villa I',
    short: 'VV I',
    address: CAMPUS_ADDRESS,
    type: 'Senior Housing',
    units: 24,
    status: 'Active',
    // NOTE: mayorwallis.com lists Venture Villa I as built in 1995, the same
    // year as Villa II. Left at 1985 pending confirmation of which is correct.
    built: '1985',
    beds: '1 BD',
    baths: '1 BA',
    sqft: '~560–700',
    phone: '',
    email: 'ty@bsmholdings.com',
    website: CAMPUS_WEBSITE,
    description:
      'A 24-unit HUD Section 202 senior housing community located on the Pryor campus, serving elderly residents through the PRAC program.',
  },
  {
    id: 'vv2',
    name: 'Venture Villa II',
    short: 'VV II',
    address: CAMPUS_ADDRESS,
    type: 'Senior Housing',
    units: 30,
    status: 'Active',
    built: '1995',
    beds: '1 BD',
    baths: '1 BA',
    sqft: '~560',
    phone: '',
    email: 'ty@bsmholdings.com',
    website: CAMPUS_WEBSITE,
    description:
      'A 30-unit HUD Section 202 senior housing community, the newest addition to the Pryor campus with modern amenities for senior residents.',
  },
];

const TOTAL_UNITS = properties.reduce((sum, p) => sum + p.units, 0);

/**
 * The three buildings share one street address and therefore one coordinate, so
 * a marker per property would stack them into a single dot and "fly to
 * property" would move the camera nowhere.
 *
 * Above FAN_ZOOM they are fanned onto a small ring so each is individually
 * selectable. These are deliberate UI positions, not surveyed ones — which is
 * why the collapsed cluster is the default and the overlay says plainly that
 * all three sit at one address.
 */
function fanOffset(index: number, total: number): [number, number] {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const dLat = (FAN_RADIUS_M * Math.sin(angle)) / 111_320;
  const dLng =
    (FAN_RADIUS_M * Math.cos(angle)) /
    (111_320 * Math.cos((CAMPUS_CENTER[1] * Math.PI) / 180));
  return [CAMPUS_CENTER[0] + dLng, CAMPUS_CENTER[1] + dLat];
}

const Stat = ({
  value,
  label,
  /** For values that are ranges rather than counts — "~560–700" does not fit a
      fifth column at the display size, and reads as secondary anyway. */
  compact = false,
}: {
  value: string | number;
  label: string;
  compact?: boolean;
}) => (
  <div>
    <div
      className={`font-display font-semibold leading-none tracking-tight text-hhp-navy ${
        compact ? 'text-xl' : 'text-3xl'
      }`}
    >
      {value}
    </div>
    <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-hhp-charcoal/55">
      {label}
    </div>
  </div>
);

const Portfolio = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markersRef = useRef<Record<string, MapboxMarker>>({});
  const clusterRef = useRef<MapboxMarker | null>(null);
  const popupRef = useRef<MapboxPopup | null>(null);
  const orbitRef = useRef({ raf: 0, active: false });

  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const timeOfDay = useTimeOfDay();

  const stopOrbit = useCallback(() => {
    orbitRef.current.active = false;
    cancelAnimationFrame(orbitRef.current.raf);
  }, []);

  const flyToProperty = useCallback(
    (property: Property) => {
      const map = mapRef.current;
      if (!map) return;
      stopOrbit();

      const index = properties.findIndex((p) => p.id === property.id);
      const target = fanOffset(index, properties.length);

      map.flyTo({
        center: target,
        zoom: 18.2,
        pitch: 62,
        bearing: -24 + index * 18,
        duration: 1600,
      });
    },
    [stopOrbit],
  );

  const openDetail = useCallback(
    (property: Property) => {
      setSelectedProperty(property.id);
      setDetailOpen(true);
      // Start each property back at the entrance sign rather than wherever the
      // previous one was left.
      setPhotoIndex(0);
      flyToProperty(property);
      trackButtonClick(`portfolio_property_${property.id}`, 'portfolio');
    },
    [flyToProperty],
  );

  const closeDetail = useCallback(() => {
    setDetailOpen(false);
    setSelectedProperty(null);
    popupRef.current?.remove();
    mapRef.current?.flyTo({
      center: CAMPUS_CENTER,
      zoom: 17.1,
      pitch: 58,
      bearing: -24,
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    // Without a token there is nothing to initialise. Guarding here also keeps
    // the build-time prerender from constructing a WebGL map in headless Chrome.
    if (!MAPBOX_TOKEN || !mapContainer.current) return;

    let cancelled = false;

    (async () => {
      const mapboxgl = (await import('mapbox-gl')).default;
      if (cancelled || !mapContainer.current) return;

      mapboxgl.accessToken = MAPBOX_TOKEN;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        // Standard gives real-time sun position, lit 3D buildings and cast
        // shadows. dark-v11 was a flat basemap that could only ever look stock.
        style: 'mapbox://styles/mapbox/standard',
        center: CAMPUS_CENTER,
        // Reduced motion skips the approach and opens at the final camera.
        zoom: reduceMotion ? 17.1 : 13.2,
        pitch: reduceMotion ? 58 : 10,
        bearing: reduceMotion ? -24 : 0,
        antialias: true,
        attributionControl: true,
        // Prevents the map from swallowing page scroll without disabling zoom
        // outright — ctrl/⌘+scroll and two-finger drag still work.
        cooperativeGestures: true,
      });
      mapRef.current = map;
      map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');

      map.on('style.load', () => {
        // Standard exposes lighting and label groups as style config, so the
        // old regex walk over getStyle().layers is no longer needed.
        try {
          // Lit to the real hour in Oklahoma. The Home hero carries a matching
          // tint from the same hook, so the site and the campus are lit the same
          // way at the same moment.
          //
          // (`dusk` alone washed this location out to a flat mauve — Pryor has
          // almost no tall massing to catch low sun — which is why the gold
          // building highlight below does the heavy lifting rather than the
          // basemap colour.)
          map.setConfigProperty('basemap', 'lightPreset', currentTimeOfDay());
          map.setConfigProperty('basemap', 'colorBuildingHighlight', '#C8952E');
          // Label clutter: house numbers and place names competed with the
          // markers at campus zoom.
          map.setConfigProperty('basemap', 'showPointOfInterestLabels', false);
          map.setConfigProperty('basemap', 'showTransitLabels', false);
          map.setConfigProperty('basemap', 'showRoadLabels', false);
          map.setConfigProperty('basemap', 'showPlaceLabels', false);
        } catch {
          /* Style spec without config support — cosmetic only, keep going. */
        }

        if (!map.getSource('mapbox-dem')) {
          map.addSource('mapbox-dem', {
            type: 'raster-dem',
            url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
            tileSize: 512,
            maxzoom: 14,
          });
          map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.2 });
        }
      });

      // ── Markers ────────────────────────────────────────────────────────
      properties.forEach((property, index) => {
        const el = document.createElement('div');
        el.className = 'hhp-marker';
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-label', `${property.name}, ${property.units} units`);
        el.innerHTML =
          '<span class="hhp-marker__ring"></span>' +
          '<span class="hhp-marker__ring"></span>' +
          '<span class="hhp-marker__core"></span>' +
          `<span class="hhp-marker__label">${property.short}</span>`;

        const activate = () => openDetail(property);
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          activate();
        });
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activate();
          }
        });
        el.addEventListener('mouseenter', () => setHoveredProperty(property.id));
        el.addEventListener('mouseleave', () => setHoveredProperty(null));

        markersRef.current[property.id] = new mapboxgl.Marker({ element: el })
          .setLngLat(fanOffset(index, properties.length))
          .addTo(map);
      });

      const clusterEl = document.createElement('div');
      clusterEl.className = 'hhp-cluster';
      clusterEl.textContent = String(properties.length);
      clusterEl.setAttribute('role', 'button');
      clusterEl.setAttribute('tabindex', '0');
      clusterEl.setAttribute(
        'aria-label',
        `${properties.length} properties at ${CAMPUS_ADDRESS}. Zoom in to view each.`,
      );
      const expand = () => {
        stopOrbit();
        map.flyTo({ center: CAMPUS_CENTER, zoom: 17.6, pitch: 60, duration: 1400 });
      };
      clusterEl.addEventListener('click', expand);
      clusterEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          expand();
        }
      });
      clusterRef.current = new mapboxgl.Marker({ element: clusterEl })
        .setLngLat(CAMPUS_CENTER)
        .addTo(map);

      /** Collapse to one badge when zoomed out, fan apart when zoomed in. */
      const syncMarkers = () => {
        const fanned = map.getZoom() >= FAN_ZOOM;
        Object.values(markersRef.current).forEach((m) => {
          const el = m.getElement();
          el.style.display = fanned ? '' : 'none';
          el.classList.toggle('is-fanned', fanned);
        });
        const clusterEl2 = clusterRef.current?.getElement();
        if (clusterEl2) clusterEl2.style.display = fanned ? 'none' : '';
      };

      map.on('zoom', syncMarkers);

      /**
       * Paint the campus footprint gold.
       *
       * Queried at CAMPUS_CENTER — the real surveyed coordinate — rather than
       * at the fanned marker positions, which are a UI affordance and would
       * highlight whatever arbitrary building happened to sit beneath them.
       */
      let highlighted = false;
      const highlightCampus = () => {
        if (highlighted) return;
        try {
          const p = map.project(CAMPUS_CENTER);
          const box: [[number, number], [number, number]] = [
            [p.x - 45, p.y - 45],
            [p.x + 45, p.y + 45],
          ];
          const feats = map.queryRenderedFeatures(box, {
            target: { featuresetId: 'buildings', importId: 'basemap' },
          } as any);
          feats.forEach((f: any) => map.setFeatureState(f, { highlight: true }));
          if (feats.length) highlighted = true;
        } catch {
          /* Featureset querying unavailable on this style build — decorative. */
        }
      };
      map.on('idle', highlightCampus);

      map.on('load', () => {
        if (cancelled) return;
        setMapReady(true);
        syncMarkers();

        if (reduceMotion) return;

        // Cinematic approach, then a slow idle orbit.
        map.flyTo({
          center: CAMPUS_CENTER,
          zoom: 17.1,
          pitch: 58,
          bearing: -24,
          duration: 4200,
          essential: false,
        });

        map.once('moveend', () => {
          if (cancelled) return;
          orbitRef.current.active = true;
          const step = () => {
            if (!orbitRef.current.active || !mapRef.current) return;
            mapRef.current.setBearing(mapRef.current.getBearing() + 0.016);
            orbitRef.current.raf = requestAnimationFrame(step);
          };
          orbitRef.current.raf = requestAnimationFrame(step);
        });
      });

      // Any genuine user gesture ends the orbit. Checking originalEvent is what
      // separates a real gesture from our own programmatic flyTo.
      const endOrbitOnGesture = (e: { originalEvent?: unknown }) => {
        if (e?.originalEvent) stopOrbit();
      };
      map.on('dragstart', endOrbitOnGesture);
      map.on('rotatestart', endOrbitOnGesture);

      // zoomstart/pitchstart also fire for programmatic camera moves and carry
      // no originalEvent, so genuine input is detected at the DOM level instead.
      const container = map.getContainer();
      (['wheel', 'pointerdown', 'touchstart'] as const).forEach((evt) =>
        container.addEventListener(evt, stopOrbit, { passive: true }),
      );
    })();

    // Copied out so the cleanup closure does not read a ref that may have been
    // reassigned by the time it runs.
    const orbit = orbitRef.current;

    return () => {
      cancelled = true;
      cancelAnimationFrame(orbit.raf);
      orbit.active = false;
      popupRef.current?.remove();
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = {};
      clusterRef.current = null;
    };
  }, [openDetail, stopOrbit]);

  // Re-light the map if a long-open tab crosses into a new part of the day.
  useEffect(() => {
    if (!mapReady) return;
    try {
      mapRef.current?.setConfigProperty('basemap', 'lightPreset', timeOfDay);
    } catch {
      /* Style not ready or config unsupported — cosmetic only. */
    }
  }, [timeOfDay, mapReady]);

  // Keep marker state in sync with whichever row is selected or hovered.
  useEffect(() => {
    const active = selectedProperty ?? hoveredProperty;
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      marker.getElement().classList.toggle('is-active', id === active);
    });
  }, [selectedProperty, hoveredProperty]);

  const selectedProp = properties.find((p) => p.id === selectedProperty);

  return (
    <Layout>
      <div
        className="flex flex-col lg:flex-row"
        style={{ height: 'calc(100dvh - var(--header-h))' }}
      >
        {/* ── Map ───────────────────────────────────────────────────────── */}
        <div className="relative h-[46vh] w-full bg-hhp-navy-deep lg:h-full lg:w-3/5">
          <div ref={mapContainer} className="absolute inset-0 h-full w-full" />

          {/* Vignette. Adds depth to a basemap that is otherwise a flat field,
              and keeps the overlay panel legible wherever the camera lands. */}
          <div
            className="pointer-events-none absolute inset-0 z-[5]"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(125% 95% at 50% 42%, transparent 42%, hsl(var(--hhp-navy-deep) / 0.62) 100%)',
            }}
          />

          {/* Designed loading state — the container used to sit as a grey box
              until Mapbox finished initialising. */}
          {MAPBOX_TOKEN && !mapReady && (
            <div className="absolute inset-0 grid place-items-center bg-hhp-navy-deep">
              <div className="text-center">
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-hhp-gold/25 border-t-hhp-gold" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Loading portfolio map
                </p>
              </div>
            </div>
          )}

          {/* Without a token the container stays empty and Mapbox reports the
              failure from a script callback, so it never trips the
              ErrorBoundary. Show the address rather than nothing. */}
          {!MAPBOX_TOKEN && (
            <div className="absolute inset-0 grid place-items-center p-6">
              <div className="max-w-sm border border-hhp-gold/25 bg-hhp-navy/70 p-8 text-center">
                <MapPin className="mx-auto mb-4 h-7 w-7 text-hhp-gold" aria-hidden="true" />
                <p className="font-display text-lg font-semibold text-white">{CAMPUS_ADDRESS}</p>
                <p className="mt-2 text-sm text-white/55">
                  {properties.length} properties · {TOTAL_UNITS} units
                </p>
              </div>
            </div>
          )}

          {/* Overlay. States the shared address plainly so the fanned markers
              are never mistaken for surveyed positions. */}
          {/* /15, not /12: 12 is not on Tailwind's opacity scale, so no rule was
              emitted and this hairline fell through to the global border-border
              — a near-white grey on a navy card. */}
          <div className="pointer-events-none absolute left-5 top-5 z-10 border border-white/15 bg-hhp-navy/85 px-5 py-4 backdrop-blur-md">
            <div className="eyebrow">Managed Portfolio</div>
            <div className="mt-3 flex items-baseline gap-6 text-white">
              <span className="font-display text-2xl font-semibold leading-none">
                {properties.length}
                <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  Properties
                </span>
              </span>
              <span className="font-display text-2xl font-semibold leading-none">
                {TOTAL_UNITS}
                <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  Units
                </span>
              </span>
            </div>
            <p className="mt-2.5 max-w-[15rem] text-[11px] leading-relaxed text-white/50">
              Three buildings at one address in Pryor, Oklahoma. Zoom in to select each.
            </p>
          </div>
        </div>

        {/* ── Panel ─────────────────────────────────────────────────────── */}
        <div className="w-full overflow-y-auto border-t-2 border-t-hhp-gold bg-white lg:h-full lg:w-2/5 lg:border-l lg:border-l-border">
          {detailOpen && selectedProp ? (
            <div className="animate-fade-up">
              <button
                onClick={closeDetail}
                className="flex items-center gap-2 px-6 pb-3 pt-6 text-sm text-hhp-charcoal/60 transition-colors hover:text-hhp-navy"
              >
                <ArrowLeft className="h-4 w-4" /> All properties
              </button>

              {/* Campus photography. The page was map-only, so a selected
                  property showed a paragraph and two phone numbers and nothing
                  of the asset itself. */}
              <div className="px-6">
                <img
                  key={CAMPUS_PHOTOS[photoIndex].src}
                  src={CAMPUS_PHOTOS[photoIndex].src}
                  alt={CAMPUS_PHOTOS[photoIndex].alt}
                  className="aspect-[16/10] w-full animate-fade-up bg-surface object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                  {CAMPUS_PHOTOS.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setPhotoIndex(index)}
                      aria-label={photo.alt}
                      aria-current={index === photoIndex}
                      className={`h-12 w-16 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                        index === photoIndex
                          ? 'border-hhp-gold'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-b border-border px-6 pb-7 pt-6">
                <div className="eyebrow">{selectedProp.type}</div>
                <h1 className="mt-4 font-display text-display-md text-hhp-navy">
                  {selectedProp.name}
                </h1>
                <p className="mt-2 flex items-center gap-2 text-sm text-hhp-charcoal/60">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-hhp-gold" />
                  {selectedProp.address}
                </p>

                {/* Five stats wrap to two rows below ~420px rather than being
                    crushed into five columns on a phone. */}
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:grid-cols-5">
                  <Stat value={selectedProp.units} label="Units" />
                  <Stat value={selectedProp.built} label="Built" />
                  <Stat value={selectedProp.beds.replace(' BD', '')} label="Beds" />
                  <Stat value={selectedProp.baths.replace(' BA', '')} label="Baths" />
                  <Stat value={selectedProp.sqft} label="Sq Ft" compact />
                </div>
              </div>

              <div className="border-b border-border px-6 py-7">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-hhp-charcoal/50">
                  Overview
                </h2>
                <p className="mt-3 leading-relaxed text-hhp-charcoal/80">
                  {selectedProp.description}
                </p>
              </div>

              <div className="border-b border-border px-6 py-7">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-hhp-charcoal/50">
                  Campus Amenities
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {CAMPUS_AMENITIES.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex items-start gap-3 text-sm leading-relaxed text-hhp-charcoal/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1 w-1 flex-shrink-0 rounded-full bg-hhp-gold"
                      />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-b border-border px-6 py-7">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-hhp-charcoal/50">
                  Contact
                </h2>
                <div className="mt-4 space-y-3">
                  {selectedProp.phone ? (
                  <a
                    href={`tel:${selectedProp.phone}`}
                    className="flex items-center gap-3 font-medium text-hhp-charcoal transition-colors hover:text-hhp-navy"
                  >
                    <Phone className="h-4 w-4 text-hhp-gold" />
                    {selectedProp.phone}
                  </a>
                ) : null}
                  <a
                    href={`mailto:${selectedProp.email}`}
                    className="flex items-center gap-3 font-medium text-hhp-charcoal transition-colors hover:text-hhp-navy"
                  >
                    <Mail className="h-4 w-4 text-hhp-gold" />
                    {selectedProp.email}
                  </a>
                  <a
                    href={selectedProp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 font-medium text-hhp-charcoal transition-colors hover:text-hhp-navy"
                    onClick={() =>
                      trackButtonClick(`property_website_${selectedProp.id}`, 'portfolio')
                    }
                  >
                    <Globe className="h-4 w-4 flex-shrink-0 text-hhp-gold" />
                    {selectedProp.website.replace(/^https?:\/\//, '')}
                    <ExternalLink className="h-3.5 w-3.5 text-hhp-charcoal/40 transition-colors group-hover:text-hhp-gold" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-6 py-7">
                <Link
                  to="/contact"
                  className="btn-hero"
                  onClick={() => trackButtonClick('property_detail_contact', 'portfolio')}
                >
                  Contact about this property
                </Link>
                <Link
                  to="/services/property-management"
                  className="btn-secondary"
                  onClick={() => trackButtonClick('property_detail_services', 'portfolio')}
                >
                  Our management approach
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b border-border px-6 pb-7 pt-7">
                <div className="eyebrow">Managed Portfolio</div>
                <h1 className="mt-4 font-display text-display-md text-hhp-navy">
                  Managed properties
                </h1>
                <div className="mt-7 flex gap-10 border-t border-border pt-6">
                  <Stat value={properties.length} label="Properties" />
                  <Stat value={TOTAL_UNITS} label="Units" />
                  <Stat value="Pryor, OK" label="Market" />
                </div>
              </div>

              <ul>
                {properties.map((property) => {
                  const isActive = selectedProperty === property.id;
                  return (
                    <li key={property.id}>
                      <button
                        onClick={() => openDetail(property)}
                        onMouseEnter={() => setHoveredProperty(property.id)}
                        onMouseLeave={() => setHoveredProperty(null)}
                        onFocus={() => setHoveredProperty(property.id)}
                        onBlur={() => setHoveredProperty(null)}
                        className={`group w-full border-b border-border border-l-2 px-6 py-6 text-left transition-colors ${
                          isActive
                            ? 'border-l-hhp-gold bg-surface'
                            : 'border-l-transparent hover:border-l-hhp-gold hover:bg-surface'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-display text-lg font-semibold text-hhp-navy">
                            {property.name}
                          </h3>
                          <span className="mt-1 flex flex-shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {property.status}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-hhp-charcoal/45">
                          {property.type} · Built {property.built}
                        </p>
                        <div className="mt-4 flex items-baseline gap-6">
                          <span className="font-display text-xl font-semibold text-hhp-navy">
                            {property.units}
                            <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-hhp-charcoal/45">
                              Units
                            </span>
                          </span>
                          <span className="text-sm text-hhp-charcoal/60">
                            {property.beds} · {property.baths}
                          </span>
                          <ArrowRight className="ml-auto h-4 w-4 text-hhp-gold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="px-6 py-8">
                <h2 className="font-display text-lg font-semibold text-hhp-navy">
                  Interested in adding your property?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-hhp-charcoal/70">
                  We manage, maintain and account for the assets we operate — under one firm.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="btn-hero"
                    onClick={() => {
                      trackButtonClick('portfolio_cta_consultation', 'portfolio');
                      trackLinkClick('Request a Consultation', '/contact');
                    }}
                  >
                    Request a consultation
                  </Link>
                  <Link
                    to="/services/property-management"
                    className="btn-secondary"
                    onClick={() => {
                      trackButtonClick('portfolio_cta_services', 'portfolio');
                      trackLinkClick('Our Services', '/services/property-management');
                    }}
                  >
                    Our services
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
