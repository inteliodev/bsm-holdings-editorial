import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight, X, ChevronLeft, Home, Phone, Mail } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

// All current properties sit on one campus, so the map uses a single cluster marker.
// Keep this as the one source of truth for the shared centre rather than repeating
// the literal at every call site.
const CAMPUS_CENTER: [number, number] = [-95.3078362685698, 36.29323680677572];
const CAMPUS_ADDRESS = '901 SE 9th Street, Pryor, OK 74361';

const properties = [
  {
    id: 'mwm',
    name: 'Mayor Wallis Manor',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 31,
    status: 'Active',
    built: '1991',
    beds: '1 BD',
    baths: '1 BA',
    coords: CAMPUS_CENTER,
    phone: '(918) 825-1250',
    email: 'mwm@hhpasset.com',
    description: 'A 31-unit HUD Section 202 senior housing community providing affordable, supportive housing for elderly residents in Pryor, Oklahoma.',
  },
  {
    id: 'vv1',
    name: 'Venture Villa I',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 24,
    status: 'Active',
    built: '1985',
    beds: '1 BD',
    baths: '1 BA',
    coords: CAMPUS_CENTER,
    phone: '(918) 825-1250',
    email: 'mwm@hhpasset.com',
    description: 'A 24-unit HUD Section 202 senior housing community located on the Pryor campus, serving elderly residents through the PRAC program.',
  },
  {
    id: 'vv2',
    name: 'Venture Villa II',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 30,
    status: 'Active',
    built: '1995',
    beds: '1 BD',
    baths: '1 BA',
    coords: CAMPUS_CENTER,
    phone: '(918) 825-1250',
    email: 'mwm@hhpasset.com',
    description: 'A 30-unit HUD Section 202 senior housing community, the newest addition to the Pryor campus with modern amenities for senior residents.',
  },
];

const TOTAL_UNITS = properties.reduce((sum, p) => sum + p.units, 0);

const Portfolio = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const popupsRef = useRef<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const flyToProperty = (property: typeof properties[0]) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: property.coords,
      zoom: 17,
      duration: 1200,
    });
    // Open the popup for this property
    popupsRef.current.forEach((p) => p.remove());
    const mapboxgl = (window as any).mapboxgl;
    if (mapboxgl) {
      // Shares the .hhp-popup treatment with the campus popup below — this is the
      // one users actually reach, since selecting a property card opens it.
      const popup = new mapboxgl.Popup({
        offset: 30,
        closeButton: true,
        maxWidth: '320px',
        className: 'hhp-popup',
      })
        .setLngLat(property.coords)
        .setHTML(
          `<div class="hhp-popup-body">
            <span class="hhp-popup-eyebrow">${property.type}</span>
            <h3 class="hhp-popup-title">${property.name}</h3>
            <p class="hhp-popup-address">${property.address}</p>
            <div class="hhp-popup-stats">
              <div><span class="hhp-popup-stat">${property.units}</span><span class="hhp-popup-label">Units</span></div>
              <div><span class="hhp-popup-stat">${property.built}</span><span class="hhp-popup-label">Built</span></div>
            </div>
          </div>`
        )
        .addTo(mapRef.current);
      popupsRef.current = [popup];
    }
    setSelectedProperty(property.id);
  };

  const openDetail = (property: typeof properties[0]) => {
    setSelectedProperty(property.id);
    setDetailOpen(true);
    flyToProperty(property);
  };

  const closeDetail = () => {
    setDetailOpen(false);
    setSelectedProperty(null);
    popupsRef.current.forEach((p) => p.remove());
    if (mapRef.current) {
      mapRef.current.flyTo({ center: CAMPUS_CENTER, zoom: 15, duration: 800 });
    }
  };

  useEffect(() => {
    if (!document.getElementById('mapbox-css')) {
      const link = document.createElement('link');
      link.id = 'mapbox-css';
      link.rel = 'stylesheet';
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css';
      document.head.appendChild(link);
    }

    const loadMap = () => {
      if (!mapContainer.current || mapRef.current) return;
      const mapboxgl = (window as any).mapboxgl;
      if (!mapboxgl) return;

      mapboxgl.accessToken = MAPBOX_TOKEN;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        // Dark basemap. light-v11 rendered as near-white over a small-town street
        // grid, which read as an empty page rather than a designed one. Dark sits
        // with the navy brand and lets the gold marker carry the eye.
        style: 'mapbox://styles/mapbox/dark-v11',
        center: CAMPUS_CENTER,
        zoom: 14.2,
        pitch: 45,
        bearing: -18,
        antialias: true,
        attributionControl: true,
      });

      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
      map.scrollZoom.disable(); // Don't hijack page scroll; zoom via the controls.

      map.on('load', () => {
        // Strip POI and transit clutter — competing labels are what made the
        // original read busy and generic.
        for (const layer of map.getStyle().layers ?? []) {
          if (/poi-label|transit-label|airport-label/.test(layer.id)) {
            map.setLayoutProperty(layer.id, 'visibility', 'none');
          }
        }

        // No 3D building extrusions here. Pryor has almost no tall structures, so
        // they rendered as scattered blue patches rather than skyline — noise, not
        // depth. The camera pitch alone carries the dimensionality.
      });

      // Built-in marker — eliminates CSS drift on zoom. Gold reads as the accent
      // against the dark basemap; navy would disappear into it.
      const marker = new mapboxgl.Marker({ color: '#C8952E', scale: 1.35 })
        .setLngLat(CAMPUS_CENTER)
        .addTo(map);

      marker.getElement().style.cursor = 'pointer';
      marker.getElement().addEventListener('click', () => {
        popupsRef.current.forEach((p) => p.remove());
        const popup = new mapboxgl.Popup({
          offset: 30,
          closeButton: true,
          maxWidth: '320px',
          className: 'hhp-popup',
        })
          .setLngLat(CAMPUS_CENTER)
          .setHTML(
            '<div class="hhp-popup-body">' +
              '<span class="hhp-popup-eyebrow">Managed Portfolio</span>' +
              '<h3 class="hhp-popup-title">HHP Asset Management</h3>' +
              `<p class="hhp-popup-address">${CAMPUS_ADDRESS}</p>` +
              '<div class="hhp-popup-stats">' +
                `<div><span class="hhp-popup-stat">${properties.length}</span><span class="hhp-popup-label">Properties</span></div>` +
                `<div><span class="hhp-popup-stat">${TOTAL_UNITS}</span><span class="hhp-popup-label">Units</span></div>` +
              '</div>' +
            '</div>'
          )
          .addTo(map);
        popupsRef.current = [popup];
      });

      mapRef.current = map;
    };

    if ((window as any).mapboxgl) {
      loadMap();
    } else {
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js';
      script.onload = loadMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const selectedProp = properties.find((p) => p.id === selectedProperty);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Map */}
        <div className="w-full lg:w-3/5 relative bg-gray-100 h-[400px] lg:h-full">
          <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
          {/*
            Without a Mapbox token the container just stays an empty grey box and the
            token error surfaces from a script onload callback, so it never trips the
            ErrorBoundary. Show the address instead of nothing.
          */}
          {!MAPBOX_TOKEN && (
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div>
                <MapPin className="h-8 w-8 text-hhp-navy mx-auto mb-3" aria-hidden="true" />
                <p className="font-semibold text-hhp-navy">{CAMPUS_ADDRESS}</p>
                <p className="text-sm text-hhp-charcoal/70 mt-1">
                  {properties.length} properties · {TOTAL_UNITS} units
                </p>
              </div>
            </div>
          )}
          {/* Results count overlay */}
          {/* Reads as an overlay on the dark basemap rather than a white sticker. */}
          <div className="absolute top-5 left-5 z-10 bg-hhp-navy/85 backdrop-blur-md rounded-sm shadow-xl border border-white/15 px-5 py-3">
            <div className="text-[10px] font-heading font-bold uppercase tracking-[0.22em] mb-1.5" style={{ color: '#C8952E' }}>
              Managed Portfolio
            </div>
            <div className="flex items-baseline gap-5 text-white">
              <span className="text-sm font-semibold">
                {properties.length} Properties
              </span>
              <span className="text-sm font-semibold">{TOTAL_UNITS} Units</span>
            </div>
            <div className="text-[11px] text-white/55 mt-1">Pryor, Oklahoma</div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-2/5 bg-white overflow-y-auto h-auto lg:h-full border-l border-gray-200 border-t-[3px] border-t-[#C8952E]">

          {/* Detail View */}
          {detailOpen && selectedProp ? (
            <div className="animate-in">
              {/* Back button */}
              <button
                onClick={closeDetail}
                className="flex items-center gap-2 text-sm text-hhp-charcoal/60 hover:text-hhp-navy px-6 pt-5 pb-2 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back to all properties
              </button>

              {/* Property banner */}
              <div className="bg-hhp-navy mx-6 rounded-lg p-6 mb-6" style={{ borderBottom: '3px solid #C8952E' }}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading font-bold text-white text-2xl tracking-wide uppercase">{selectedProp.name}</h2>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                    {selectedProp.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-lg">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedProp.address}
                </div>
              </div>

              {/* Overview */}
              <div className="px-6 mb-6">
                <h3 className="text-base font-semibold text-hhp-navy uppercase tracking-wider mb-3">Overview</h3>
                <p className="text-base text-hhp-charcoal/70 leading-relaxed mb-6">{selectedProp.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-base text-hhp-charcoal/50 uppercase tracking-wider">Type</span>
                    <p className="text-lg font-bold text-hhp-navy mt-1">{selectedProp.type}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-base text-hhp-charcoal/50 uppercase tracking-wider">Units</span>
                    <p className="text-lg font-bold text-hhp-navy mt-1">{selectedProp.units}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-base text-hhp-charcoal/50 uppercase tracking-wider">Bedrooms</span>
                    <p className="text-lg font-bold text-hhp-navy mt-1">{selectedProp.beds}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-base text-hhp-charcoal/50 uppercase tracking-wider">Bathrooms</span>
                    <p className="text-lg font-bold text-hhp-navy mt-1">{selectedProp.baths}</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="px-6 mb-6">
                <h3 className="text-base font-semibold text-hhp-navy uppercase tracking-wider mb-3">Contact</h3>
                <div className="space-y-3">
                  <a href={`tel:${selectedProp.phone}`} className="flex items-center gap-3 text-lg font-medium text-hhp-charcoal hover:text-hhp-navy transition-colors">
                    <Phone className="w-5 h-5 text-hhp-accent" />
                    {selectedProp.phone}
                  </a>
                  <a href={`mailto:${selectedProp.email}`} className="flex items-center gap-3 text-lg font-medium text-hhp-charcoal hover:text-hhp-navy transition-colors">
                    <Mail className="w-5 h-5 text-hhp-accent" />
                    {selectedProp.email}
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-8">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="bg-hhp-navy text-white px-6 py-4 rounded font-semibold text-lg hover:bg-hhp-navy/90 transition-colors text-center"
                    onClick={() => { trackButtonClick('property_detail_contact', 'portfolio'); }}
                  >
                    Contact About This Property
                  </Link>
                  <Link
                    to="/services/property-management"
                    className="border border-hhp-navy text-hhp-navy px-6 py-4 rounded font-semibold text-lg hover:bg-hhp-navy hover:text-white transition-colors text-center"
                    onClick={() => { trackButtonClick('property_detail_services', 'portfolio'); }}
                  >
                    Learn About Our Management
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* List View */
            <div>
              <div className="p-6 pb-3">
                {/* Was an <h2>, leaving the page with no <h1> at all. */}
                <h1 className="font-heading text-xl font-bold text-hhp-navy tracking-wide uppercase mb-1">Managed Properties</h1>
                <p className="text-base text-hhp-charcoal/50">({properties.length}) Results Found</p>
              </div>

              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 gap-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      onClick={() => openDetail(property)}
                      className={`border-l-4 border-l-[#C8952E] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                        selectedProperty === property.id ? 'border-[#C8952E]' : 'hover:border-[#C8952E]'
                      }`}
                    >
                      {/* Navy header */}
                      <div className="bg-hhp-navy px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-white/60" />
                          <h3 className="font-heading font-bold text-white text-base tracking-wide uppercase">{property.name}</h3>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                          {property.status}
                        </span>
                      </div>

                      {/* Card body */}
                      <div className="p-4 bg-white">
                        <div className="flex items-start gap-2 mb-3">
                          <MapPin className="h-3.5 w-3.5 text-hhp-accent flex-shrink-0 mt-0.5" />
                          <span className="text-base text-hhp-charcoal">{property.address}</span>
                        </div>
                        <div className="flex gap-6 text-base">
                          <div>
                            <span className="text-hhp-charcoal/60 uppercase tracking-wider">Type</span>
                            <p className="font-bold text-hhp-navy mt-0.5">{property.type}</p>
                          </div>
                          <div>
                            <span className="text-hhp-charcoal/60 uppercase tracking-wider">Units</span>
                            <p className="font-bold text-hhp-navy mt-0.5">{property.units}</p>
                          </div>
                          <div>
                            <span className="text-hhp-charcoal/60 uppercase tracking-wider">Beds</span>
                            <p className="font-bold text-hhp-navy mt-0.5">{property.beds}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gray-200 p-6">
                <p className="font-heading text-lg text-hhp-navy mb-3 tracking-wide uppercase">Interested in adding your property?</p>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    className="bg-hhp-navy text-white px-7 py-3.5 rounded font-semibold text-sm hover:bg-hhp-navy/90 transition-colors"
                    onClick={() => { trackButtonClick('portfolio_cta_consultation', 'portfolio'); trackLinkClick('Request a Consultation', '/contact'); }}
                  >
                    Request a Consultation
                  </Link>
                  <Link
                    to="/services/property-management"
                    className="border border-hhp-navy text-hhp-navy px-7 py-3.5 rounded font-semibold text-sm hover:bg-hhp-navy hover:text-white transition-colors"
                    onClick={() => { trackButtonClick('portfolio_cta_services', 'portfolio'); trackLinkClick('Our Services', '/services/property-management'); }}
                  >
                    Our Services
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
