import { Link } from 'react-router-dom';
import { CONTACT_PHONE, CONTACT_PHONE_E164, OFFICE_ADDRESS } from '@/data/serviceArea';
import equalHousingLogo from '@/assets/equal-housing.png';
import { Mail, MapPin, Phone, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-30 bg-hhp-navy text-white -mt-px">
      <div className="container-premium pt-0 sm:pt-2 pb-4 sm:pb-6">
        {/* Top Row: Logo + Navigation */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Apparel White vector — solid #FFFFFF on transparent, for the navy footer. */}
            <img
              src="/brand/vector/HHP_Logo_Apparel_White.svg"
              alt="HHP Asset Management"
              width={509}
              height={177}
              loading="lazy"
              /* Smaller than the raster it replaces: that PNG padded the mark inside a
                 1024² canvas, so h-24 rendered ~30px of actual letterform. The vector
                 has a tight artboard, so the same class would have tripled its visual
                 size and wrapped the footer nav. */
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            />
          </div>

          {/* Spacer - Pushes nav to right */}
          <div className="flex-1"></div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              About
            </Link>
            <Link to="/services/property-management" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Services
            </Link>
            <Link to="/portfolio" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Properties
            </Link>
            <Link to="/opportunities" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Opportunities
            </Link>
            <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Contact
            </Link>
            <Link to="/resident-login" className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Resident Login →
            </Link>
            <Link to="/investor-portal" className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Investor Portal →
            </Link>
          </nav>
        </div>

        {/* Bottom Row: Contact Info + Follow Us */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-white/80 flex-shrink-0" />
              <a 
                href="mailto:info@hhpasset.com" 
                className="text-sm text-white/80 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                info@hhpasset.com
              </a>
            </div>
            
            {/* The footer previously had no phone number and no link to /contact —
                the primary conversion target was missing site-wide. */}
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-white/80 flex-shrink-0" />
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="text-sm text-white/80 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                {CONTACT_PHONE}
              </a>
            </div>

            {/* Canonical NAP. Must stay identical to the Google Business Profile and
                to the LocalBusiness structured data — all three read from
                src/data/serviceArea.ts. */}
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-white/80 flex-shrink-0 mt-1" />
              <address className="text-sm text-white/80 not-italic leading-relaxed">
                {OFFICE_ADDRESS.street}
                <br />
                {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state} {OFFICE_ADDRESS.postalCode}
                <span className="block text-white/55 mt-1">
                  Serving the Tulsa and Oklahoma City metros
                </span>
              </address>
            </div>
          </div>

          {/* Follow Us - Bottom Right */}
          <div className="flex-shrink-0 ml-auto lg:ml-0">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/hhpasset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 pb-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <img
              src={equalHousingLogo}
              alt="Equal Housing Opportunity"
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-auto opacity-90"
            />
            <p className="text-xs sm:text-sm text-white/80 text-center">
              © 2026 HHP Asset Management. All rights reserved. Equal Housing Opportunity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;