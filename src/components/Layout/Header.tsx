import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { trackNavigationClick, trackLinkClick, trackButtonClick } from '@/utils/analytics';

const Header = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  
  // Refs for dropdown containers and click outside detection
  const servicesRef = useRef<HTMLDivElement>(null);
  const assetTypesRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // New navigation structure
  const navigation = [
    { name: 'About', href: '/about' },
    {
      // Asset management is the positioning; "Services" is the nav label because it is
      // what visitors look for. Technology moved in here rather than staying a
      // top-level tab — a "Technology" tab reads as selling software, which is the
      // opposite of how HHP positions. Brokerage sits here as a supporting capability.
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Property Management', href: '/services/property-management' },
        { name: 'Facility Services', href: '/services/facility-services' },
        { name: 'Financial Services', href: '/services/financial-services' },
        { name: 'Brokerage & Advisory', href: '/brokerage' },
        { name: 'Technology', href: '/technology' },
        { name: 'Multifamily', href: '/asset-types/multifamily' },
        { name: 'Senior Housing', href: '/asset-types/senior-housing' },
        { name: 'Affordable Housing', href: '/asset-types/hud-affordable' },
        // The index page is the only route linking office, retail and industrial,
        // so without this entry those three are unreachable.
        { name: 'All Asset Types', href: '/asset-types' }
      ]
    },
    { name: 'Properties', href: '/portfolio' }
  ];

  // Contact as primary CTA
  const contactCTA = {
    name: 'CONTACT',
    href: '/contact',
    isPrimary: true
  };

  // Check if current path matches dropdown items
  const isServicesActive = location.pathname.startsWith('/services') || location.pathname.startsWith('/asset-types');

  // Sticky header effect (throttled with rAF)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clear hover timeout helper
  const clearHoverTimeout = () => {
    if (hoverTimeout) {
      window.clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  // Handle dropdown hover enter
  const handleDropdownEnter = (dropdownName: string) => {
    clearHoverTimeout();
    setActiveDropdown(dropdownName);
  };

  // Handle dropdown hover leave
  const handleDropdownLeave = () => {
    const timeout = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  // Handle dropdown click
  const handleDropdownClick = (dropdownName: string) => {
    clearHoverTimeout();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Handle main button click (for Services and Asset Types)
  const handleMainButtonClick = (dropdownName: string, href: string) => {
    // Navigate to the main page
    navigate(href);
    trackNavigationClick(dropdownName);
    trackLinkClick(dropdownName, href);
    // Close dropdown if open
    setActiveDropdown(null);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, dropdownName: string) => {
    switch (event.key) {
                        case 'Enter':
                      case ' ':
                        event.preventDefault();
                        // Navigate to main page for Services and Asset Types
                        if (dropdownName === 'Services') {
                          handleMainButtonClick(dropdownName, '/services');
                        } else {
                          handleDropdownClick(dropdownName);
                        }
                        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (activeDropdown === dropdownName) {
          // Focus first menu item
          const firstMenuItem = document.querySelector(`[role="menu"] [role="menuitem"]`) as HTMLElement;
          firstMenuItem?.focus();
        } else {
          setActiveDropdown(dropdownName);
        }
        break;
    }
  };

  // Handle keyboard navigation within dropdown
  const handleDropdownKeyDown = (event: React.KeyboardEvent, dropdownName: string, itemIndex: number) => {
    const menuItems = document.querySelectorAll(`[role="menu"] [role="menuitem"]`);
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextItem = menuItems[itemIndex + 1] as HTMLElement;
        nextItem?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevItem = menuItems[itemIndex - 1] as HTMLElement;
        prevItem?.focus();
        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
      case 'Tab':
        if (event.shiftKey && itemIndex === 0) {
          event.preventDefault();
          setActiveDropdown(null);
          const trigger = document.querySelector(`[aria-controls="${dropdownName.toLowerCase().replace(' ', '-')}-menu"]`) as HTMLElement;
          trigger?.focus();
        }
        break;
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside any dropdown
      if (servicesRef.current && !servicesRef.current.contains(target) &&
          assetTypesRef.current && !assetTypesRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, []);

  // Mobile accordion state
  const [mobileAccordions, setMobileAccordions] = useState<{[key: string]: boolean}>({});
  const toggleMobileAccordion = (section: string) => {
    setMobileAccordions(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <header className={`bg-white shadow-subtle relative z-50 transition-all duration-300 ${
      isSticky ? 'sticky top-0 py-2' : 'py-2 sm:py-3'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between transition-all duration-300 h-12 md:h-14 pl-4 sm:pl-6 lg:pl-8 xl:pl-12 pr-4 sm:pr-6 lg:pr-8 xl:pr-12">
          {/* Logo - Clickable Home Link */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0"
            onClick={() => {
              trackLinkClick('HHP Logo', '/');
            }}
          >
            {/*
              Vector master from the brand kit. Primary Cropped is the primary mark on
              a tight artboard, so it fills the header band without built-in padding.
              4 kB and sharp at any pixel density, vs. 107 kB for the raster.
            */}
            <img
              src="/brand/vector/HHP_Logo_Primary_Cropped.svg"
              alt="HHP Asset Management"
              width={509}
              height={177}
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-none transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 sm:gap-8 ml-auto mr-0" role="menubar">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    ref={
                      item.name === 'Services' ? servicesRef :
                      assetTypesRef
                    }
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button 
                      className={`flex items-center gap-1 transition-colors duration-200 font-medium text-xs sm:text-sm leading-tight px-1 sm:px-2 py-1 ${
                        (item.name === 'Services' && isServicesActive)
                          ? 'text-hhp-navy border-b-2 border-hhp-navy' 
                          : 'text-hhp-charcoal hover:text-hhp-navy'
                      }`}
                      onClick={() => {
                        // Navigate to main page for Services and Asset Types
                        if (item.name === 'Services') {
                          handleMainButtonClick(item.name, '/services');
                        } else {
                          handleDropdownClick(item.name);
                        }
                      }}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="menu"
                      aria-controls={`${item.name.toLowerCase().replace(' ', '-')}-menu`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        id={`${item.name.toLowerCase().replace(' ', '-')}-menu`}
                        className="absolute top-full left-0 mt-2 w-auto min-w-max bg-white rounded-lg shadow-premium py-2 sm:py-3 z-50 border border-gray-200"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.submenu.map((subItem, index) => (
                          subItem.name === 'divider' ? (
                            <hr key={`divider-${index}`} className="my-0 border-gray-200" />
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50 transition-colors duration-200 group min-h-[36px] flex items-center leading-tight"
                              role="menuitem"
                              tabIndex={0}
                              onClick={() => {
                                setActiveDropdown(null);
                                trackNavigationClick(item.name, subItem.name);
                                trackLinkClick(subItem.name, subItem.href);
                              }}
                              onKeyDown={(e) => handleDropdownKeyDown(e, item.name, index)}
                            >
                              <div className="font-medium text-sm leading-tight">{subItem.name}</div>
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium text-xs sm:text-sm leading-tight px-1 sm:px-2 py-1 ${
                      location.pathname === item.href ? 'text-hhp-navy border-b-2 border-hhp-navy' : ''
                    }`}
                    onClick={() => {
                      trackNavigationClick(item.name);
                      trackLinkClick(item.name, item.href);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Contact CTA */}
            <Link
              to={contactCTA.href}
              className="bg-hhp-navy text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-medium hover:bg-hhp-navy/90 transition-colors duration-200 min-h-[40px] flex items-center justify-center text-xs sm:text-sm leading-tight"
              onClick={() => {
                trackButtonClick('contact_cta', 'header');
                trackLinkClick('CONTACT', contactCTA.href);
              }}
            >
              {contactCTA.name}
            </Link>

            {/* Utility Links */}
            <div className="flex items-center space-x-2 sm:space-x-3 ml-4 sm:ml-6 pl-4 sm:pl-6 border-l border-gray-300">
              <Link 
                to="/resident-login" 
                className="text-hhp-charcoal hover:text-hhp-navy text-xs sm:text-sm font-medium transition-colors duration-200 leading-tight px-1 sm:px-2 py-1"
                onClick={() => {
                  trackButtonClick('resident_login', 'header');
                  trackLinkClick('Resident Login', '/resident-login');
                }}
              >
                Resident Login
              </Link>
              <Link 
                to="/investor-portal" 
                className="text-hhp-charcoal hover:text-hhp-navy text-xs sm:text-sm font-medium transition-colors duration-200 leading-tight px-1 sm:px-2 py-1"
                onClick={() => {
                  trackButtonClick('investor_portal', 'header');
                  trackLinkClick('Investor Portal', '/investor-portal');
                }}
              >
                Investor Portal
              </Link>
            </div>
          </nav>

          {/* Mobile/Tablet menu button */}
          <button
            className="lg:hidden p-3 rounded-lg text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-100 transition-colors duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium border-t border-gray-200">
            <div className="container-premium py-4">
              {/* Main Navigation Items */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <button
                          className="flex-1 py-3 text-left text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium min-h-[48px] flex items-center"
                          onClick={() => {
                            // Navigate to main page for Services and Asset Types
                            if (item.name === 'Services') {
                              handleMainButtonClick(item.name, '/services');
                              setIsMobileMenuOpen(false);
                            } else {
                              toggleMobileAccordion(item.name);
                            }
                          }}
                        >
                          {item.name}
                        </button>
                        <button
                          className="p-3 hover:bg-gray-100 rounded transition-colors duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center"
                          onClick={() => toggleMobileAccordion(item.name)}
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${
                            mobileAccordions[item.name] ? 'rotate-90' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {mobileAccordions[item.name] && (
                        <div className="ml-4 space-y-0">
                          {item.submenu.map((subItem, index) => (
                            subItem.name === 'divider' ? (
                              <hr key={`mobile-divider-${index}`} className="my-0 border-gray-200" />
                            ) : (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block py-2 px-3 text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50 rounded-md transition-colors duration-200 min-h-[36px] flex items-center leading-tight"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="font-medium text-sm leading-tight">{subItem.name}</div>
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                  to={item.href}
                  className="flex-1 py-3 text-left text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium min-h-[48px] flex items-center"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackNavigationClick(item.name);
                    trackLinkClick(item.name, item.href);
                  }}
                >
                  {item.name}
                </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  to={contactCTA.href}
                  className="block w-full bg-hhp-navy text-white px-6 py-4 rounded font-medium text-center hover:bg-hhp-navy/90 transition-colors duration-200 mb-4 min-h-[48px] flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {contactCTA.name}
                </Link>
              </div>
              
              {/* Mobile Utility Links */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link 
                  to="/resident-login" 
                  className="text-hhp-charcoal hover:text-hhp-navy text-sm font-medium transition-colors duration-200 py-3 px-2 hover:bg-gray-50 rounded-md min-h-[48px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resident Login
                </Link>
                <Link 
                  to="/investor-portal" 
                  className="text-hhp-charcoal hover:text-hhp-navy text-sm font-medium transition-colors duration-200 py-3 px-2 hover:bg-gray-50 rounded-md min-h-[48px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Investor Portal
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;