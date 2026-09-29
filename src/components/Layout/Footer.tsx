import { Link } from 'react-router-dom';
import { OFFICE_ADDRESS } from '@/data/serviceArea';
import equalHousingLogo from '@/assets/equal-housing.png';
import { Mail, MapPin } from 'lucide-react';
import { RESIDENT_PORTAL_URL } from '@/lib/site';

const COMPANY_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Available Rentals' },
  { to: '/services/property-management', label: 'Property Management' },
  { to: '/opportunities', label: 'Careers' },
  { to: '/faq', label: 'FAQ' },
] as const;

const OWNERS_RESIDENTS_LINKS: Array<
  | { label: string; to: string; external?: false }
  | { label: string; href: string; external: true }
> = [
  { to: '/contact', label: 'Owner Support' },
  { to: '/contact', label: 'Request a Proposal' },
  { href: RESIDENT_PORTAL_URL, label: 'Resident Login', external: true },
  { to: '/portfolio', label: 'Browse Rentals' },
];

const linkClass =
  'inline-flex min-h-[44px] items-center text-sm text-white/65 transition-colors hover:text-white';

const columnHeading =
  'mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45';

const Footer = () => {
  return (
    /* `relative z-30` is load-bearing: Home's hero is position:fixed z-0 */
    <footer className="relative z-30 -mt-px bg-hhp-navy text-white">
      <div className="container-premium pb-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="col-span-2 lg:col-span-3">
            <img
              src="/brand/bsm-logo.png"
              alt="BSM Holdings"
              width={140}
              height={140}
              loading="lazy"
              className="logo-flat-white h-10 w-auto object-contain sm:h-11"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Residential property management in the Oklahoma City metro.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className={columnHeading}>Company</h2>
            <ul className="space-y-1">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className={columnHeading}>Owners &amp; Residents</h2>
            <ul className="space-y-1">
              {OWNERS_RESIDENTS_LINKS.map((link) => (
                <li key={link.label}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={'to' in link ? link.to : '/'} className={linkClass}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h2 className={columnHeading}>Contact</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ty@bsmholdings.com"
                  className="flex min-h-[44px] items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-white/50" />
                  ty@bsmholdings.com
                </a>
              </li>
              <li className="flex items-start gap-3 py-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" />
                <address className="text-sm not-italic leading-relaxed text-white/65">
                  {OFFICE_ADDRESS.city} metro & surrounding communities
                  <br />
                  {OFFICE_ADDRESS.state}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={equalHousingLogo}
              alt="Equal Housing Opportunity"
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-auto opacity-80"
            />
            <span className="text-xs text-white/45">Equal Housing Opportunity</span>
          </div>
          <p className="text-center text-xs text-white/45 sm:text-right">
            © 2026 BSM Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
