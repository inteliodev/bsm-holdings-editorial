import { Link } from 'react-router-dom';
import { OFFICE_ADDRESS } from '@/data/serviceArea';
import equalHousingLogo from '@/assets/equal-housing.png';
import { Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

const COMPANY_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Properties' },
  { to: '/insights', label: 'Insights' },
  { to: '/opportunities', label: 'Careers' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const SERVICE_LINKS = [
  { to: '/services/property-management', label: 'Property Management' },
  { to: '/services/facility-services', label: 'Facility Services' },
  { to: '/services/financial-services', label: 'Financial Services' },
  { to: '/asset-types', label: 'Asset Types' },
  { to: '/technology', label: 'Technology' },
  { to: '/brokerage', label: 'Brokerage' },
];

// 44px minimum touch target. The old global `!important` block force-fed every
// anchor a 48px min-height on mobile; removing that block meant these had to be
// sized honestly at the component instead.
const linkClass =
  'inline-flex min-h-[44px] items-center text-sm text-white/65 transition-colors hover:text-white';

const columnHeading =
  'mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold';

const Footer = () => {
  return (
    /* `relative z-30` is load-bearing: Home's hero is position:fixed z-0, and a
       fixed element paints above static content regardless of z-index, which
       previously left this footer invisible on the homepage. Do not remove. */
    <footer className="relative z-30 -mt-px bg-hhp-navy text-white">
      {/* Top padding is deliberately larger than the logo is tall. The mark was
          previously set 56px tall inside 64px of padding, so it read as jammed
          against the boundary with the white section above it. */}
      <div className="container-premium pb-10 pt-20 sm:pt-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            {/* Apparel White vector — solid #FFFFFF on transparent, tight
                artboard, sized for the navy ground. */}
            <img
              src="/brand/vector/HHP_Logo_Apparel_White.svg"
              alt="HHP Asset Management"
              width={509}
              height={177}
              loading="lazy"
              className="h-10 w-auto object-contain sm:h-11"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Vertically Integrated. Data Driven. Forward Thinking.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="https://www.linkedin.com/company/hhpasset"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-hhp-gold hover:text-hhp-gold"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-hhp-gold hover:text-hhp-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className={columnHeading}>Company</h2>
            <ul className="space-y-1">
              {COMPANY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3">
            <h2 className={columnHeading}>Capabilities</h2>
            <ul className="space-y-1">
              {SERVICE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + portals */}
          <div className="col-span-2 lg:col-span-3">
            <h2 className={columnHeading}>Contact</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@hhpasset.com"
                  className="min-h-[44px] flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-hhp-gold" />
                  info@hhpasset.com
                </a>
              </li>
              <li className="flex items-start gap-3 py-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-hhp-gold" />
                {/* Canonical NAP. Must stay identical to the Google Business
                    Profile and the LocalBusiness structured data — all three
                    read from src/data/serviceArea.ts. */}
                <address className="text-sm not-italic leading-relaxed text-white/65">
                  {OFFICE_ADDRESS.street}
                  <br />
                  {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state} {OFFICE_ADDRESS.postalCode}
                  <span className="mt-2 block text-white/40">
                    Serving the Tulsa and Oklahoma City metros
                  </span>
                </address>
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-1 border-t border-white/10 pt-5">
              <Link to="/resident-login" className={linkClass}>
                Resident Login
              </Link>
              <Link to="/investor-portal" className={linkClass}>
                Investor Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
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
            © 2026 HHP Asset Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
