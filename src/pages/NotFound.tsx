import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';

/**
 * Routes offered as a way out. A 404 previously rendered outside <Layout>
 * entirely — no header, no footer, and a single default-blue link — so a visitor
 * who mistyped a URL had no navigation at all.
 */
const SUGGESTED = [
  { to: '/services/property-management', label: 'Property Management' },
  { to: '/portfolio', label: 'Available Rentals' },
  { to: '/about', label: 'About BSM Holdings' },
  { to: '/contact', label: 'Contact' },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-spacing bg-white">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl">
            <span className="eyebrow">Error 404</span>

            <h1 className="mt-6 font-display text-display-xl text-hhp-navy">
              That page isn't here.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal/80">
              The address may have changed, or the link that brought you here may be out of
              date. Everything below is a good place to pick up.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/" className="btn-hero">
                Back to home
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact us
              </Link>
            </div>

            <ul className="mt-14 border-t border-border">
              {SUGGESTED.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center justify-between border-b border-border border-l-2 border-l-transparent py-4 pl-4 pr-2 transition-colors hover:border-l-hhp-gold hover:bg-surface"
                  >
                    <span className="font-display text-lg font-semibold text-hhp-navy">
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-hhp-gold transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
