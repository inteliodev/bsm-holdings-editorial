import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-30 bg-hhp-navy text-white -mt-px">
      <div className="container-premium pt-0 sm:pt-2 pb-4 sm:pb-6">
        {/* Top Row: Logo + Navigation */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/HHP Logo White Letters.png" 
              alt="HHP Asset Group" 
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
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
            <Link to="/technology" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Technology
            </Link>
            <Link to="/portfolio" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Portfolio
            </Link>
            <Link to="/opportunities" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
              Opportunities
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
            
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-white/80 flex-shrink-0" />
              <span className="text-sm text-white/80 min-h-[44px] flex items-center">
                Tulsa, Oklahoma
              </span>
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
          <p className="text-xs sm:text-sm text-white/70 text-center">
            © 2026 HHP Asset Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;