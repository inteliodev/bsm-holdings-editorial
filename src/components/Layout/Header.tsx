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
  
  /* One ref per dropdown container, keyed by nav label. This used to be two
     standalone refs, only one of which was ever attached — which silently broke
     click-outside, because the handler required *both* to be non-null. */
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Asset management is the positioning; "Services" is the nav label because it
   * is what visitors look for. Technology sits inside it rather than being a
   * top-level tab — a "Technology" tab reads as selling software, which is the
   * opposite of how HHP positions. Brokerage sits there too, as a supporting
   * capability rather than a headline.
   *
   * Asset types have their own tab. They were four rows of a flat nine-item
   * Services menu that mixed capabilities with sectors, and only three of the
   * six were listed — office, retail and industrial had no path from the header
   * at all. The footer already treated Asset Types as a top-level destination.
   */
  const navigation = [
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Property Management', href: '/services/property-management' },
        { name: 'Facility Services', href: '/services/facility-services' },
        { name: 'Financial Services', href: '/services/financial-services' },
        { name: 'Brokerage & Advisory', href: '/brokerage' },
        { name: 'Technology', href: '/technology' }
      ]
    },
    {
      name: 'Asset Types',
      href: '/asset-types',
      submenu: [
        { name: 'Multifamily', href: '/asset-types/multifamily' },
        { name: 'Affordable Housing', href: '/asset-types/hud-affordable' },
        { name: 'Senior Housing', href: '/asset-types/senior-housing' },
        { name: 'Office', href: '/asset-types/office' },
        { name: 'Retail', href: '/asset-types/retail' },
        { name: 'Industrial & Logistics', href: '/asset-types/industrial' },
        { name: 'divider', href: '' },
        { name: 'All Asset Types', href: '/asset-types' }
      ]
    },
    { name: 'Properties', href: '/portfolio' }
  ];

  // Contact as primary CTA. Set in sentence case now that the base layer no
  // longer force-uppercases every element — the label carries its own casing.
  const contactCTA = {
    name: 'Contact',
    href: '/contact',
    isPrimary: true
  };

  /**
   * Which dropdown tab the current route belongs to. `/asset-types` used to
   * light up Services; now each tab owns its own prefixes. Services keeps the
   * routes that live outside `/services` but are Services entries.
   */
  const isDropdownActive = (name: string) => {
    const path = location.pathname;
    if (name === 'Asset Types') return path.startsWith('/asset-types');
    if (name === 'Services') {
      return (
        path.startsWith('/services') ||
        path.startsWith('/technology') ||
        path.startsWith('/brokerage')
      );
    }
    return false;
  };

  /**
   * Home's hero is `position: fixed; inset: 0`, so it already covers the area
   * behind the header. Letting the header go transparent there lets the video
   * run full-bleed to the top of the viewport; it solidifies on scroll.
   *
   * This works without any layout change precisely because the hero is fixed —
   * the header keeps its place in normal flow either way.
   */
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isSticky && !isMobileMenuOpen;

  const navLinkClass = isTransparent
    ? 'text-white/85 hover:text-white'
    : 'text-hhp-charcoal hover:text-hhp-navy';

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
  const handleKeyDown = (event: React.KeyboardEvent, dropdownName: string, href?: string) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        // A tab that has its own landing page navigates; one that is only a
        // container just opens.
        if (href) {
          handleMainButtonClick(dropdownName, href);
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
      case 'ArrowDown': {
        event.preventDefault();
        const nextItem = menuItems[itemIndex + 1] as HTMLElement;
        nextItem?.focus();
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        const prevItem = menuItems[itemIndex - 1] as HTMLElement;
        prevItem?.focus();
        break;
      }
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
      
      // Close when the click landed outside *every* dropdown container. The
      // previous version required each ref to be non-null, and one of them
      // never was, so this branch could not be reached and only the hover
      // timer or Escape ever closed the menu.
      const insideADropdown = Object.values(dropdownRefs.current).some(
        (el) => el && el.contains(target),
      );
      if (!insideADropdown) {
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

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

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
    /*
      Sticky at all times. It previously switched from `relative` to `sticky`
      past 20px of scroll, which made the header visibly jump as it detached.
      Only the surface changes now, not the positioning.
    */
    <header
      className={`sticky top-0 z-50 py-2 sm:py-3 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isTransparent
          ? 'bg-transparent border-transparent'
          : isMobileMenuOpen
            ? // No backdrop-filter while the sheet is open: a non-none
              // backdrop-filter makes this element a containing block for
              // fixed-position descendants, which would anchor the sheet and
              // its overlay to the header box instead of the viewport.
              'bg-white border-border'
            : 'bg-white/85 backdrop-blur-md border-border shadow-subtle'
      }`}
    >
      <div className="w-full">
        {/* relative z-50 so the bar keeps painting above the z-40 mobile sheet,
            which is a later sibling inside this same header. */}
        <div className="relative z-50 flex h-12 items-center justify-between pl-4 pr-4 transition-all duration-300 sm:pl-6 sm:pr-6 md:h-14 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12">
          {/* Logo - Clickable Home Link */}
          <Link 
            to="/" 
            className="flex min-h-[44px] flex-shrink-0 items-center"
            onClick={() => {
              trackLinkClick('HHP Logo', '/');
            }}
          >
            {/*
              Vector master from the brand kit. Primary Cropped is the primary mark on
              a tight artboard, so it fills the header band without built-in padding.
              4 kB and sharp at any pixel density, vs. 107 kB for the raster.
            */}
            {/* Apparel White is a genuinely solid #FFFFFF mark, so it holds up
                over the hero video; Primary Cropped is the navy mark for the
                solid header. */}
            <img
              src={
                isTransparent
                  ? '/brand/vector/HHP_Logo_Apparel_White.svg'
                  : '/brand/vector/HHP_Logo_Primary_Cropped.svg'
              }
              alt="HHP Asset Management"
              width={509}
              height={177}
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-none transition-all duration-300"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 sm:gap-8 ml-auto mr-0" role="menubar">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[item.name] = el;
                    }}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`group relative flex items-center gap-1 px-1 py-1 text-sm font-medium leading-tight transition-colors duration-200 sm:px-2 ${
                        isDropdownActive(item.name)
                          ? isTransparent
                            ? 'text-white'
                            : 'text-hhp-navy'
                          : navLinkClass
                      }`}
                      onClick={() => {
                        // Both dropdown tabs have their own landing page, so
                        // clicking the label navigates rather than only opening.
                        if (item.href) {
                          handleMainButtonClick(item.name, item.href);
                        } else {
                          handleDropdownClick(item.name);
                        }
                      }}
                      onKeyDown={(e) => handleKeyDown(e, item.name, item.href)}
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
                      {/* Gold underline that wipes in, replacing a hard 2px
                          border that snapped on and off. */}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-1 right-1 h-0.5 origin-left bg-hhp-gold transition-transform duration-300 ease-out-expo sm:left-2 sm:right-2 ${
                          isDropdownActive(item.name)
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        id={`${item.name.toLowerCase().replace(' ', '-')}-menu`}
                        className="absolute left-0 top-full z-50 mt-3 w-auto min-w-max rounded border border-border bg-white/95 py-2 shadow-premium backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-200 sm:py-3"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.submenu.map((subItem, index) => (
                          subItem.name === 'divider' ? (
                            <hr key={`divider-${index}`} className="my-0 border-border" />
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="group flex min-h-[38px] items-center border-l-2 border-transparent px-4 py-2 leading-tight text-hhp-charcoal transition-colors duration-200 hover:border-hhp-gold hover:bg-surface hover:text-hhp-navy"
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
                    className={`group relative inline-flex px-1 py-1 text-sm font-medium leading-tight transition-colors duration-200 sm:px-2 ${
                      location.pathname === item.href
                        ? isTransparent
                          ? 'text-white'
                          : 'text-hhp-navy'
                        : navLinkClass
                    }`}
                    onClick={() => {
                      trackNavigationClick(item.name);
                      trackLinkClick(item.name, item.href);
                    }}
                  >
                    {item.name}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-1 right-1 h-0.5 origin-left bg-hhp-gold transition-transform duration-300 ease-out-expo sm:left-2 sm:right-2 ${
                        location.pathname === item.href
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
            
            {/* Contact CTA */}
            <Link
              to={contactCTA.href}
              className={`flex min-h-[40px] items-center justify-center rounded px-4 py-2 text-sm font-semibold leading-tight transition-colors duration-200 sm:px-5 ${
                isTransparent
                  ? 'bg-white text-hhp-navy hover:bg-hhp-gold hover:text-hhp-navy-deep'
                  : 'bg-hhp-navy text-white hover:bg-hhp-navy-deep'
              }`}
              onClick={() => {
                trackButtonClick('contact_cta', 'header');
                trackLinkClick('CONTACT', contactCTA.href);
              }}
            >
              {contactCTA.name}
            </Link>

            {/* Utility Links */}
            <div
              className={`ml-4 flex items-center space-x-2 border-l pl-4 sm:ml-6 sm:space-x-3 sm:pl-6 ${
                isTransparent ? 'border-white/25' : 'border-border'
              }`}
            >
              <Link 
                to="/resident-login" 
                className={`px-1 py-1 text-xs font-medium leading-tight transition-colors duration-200 sm:px-2 sm:text-sm ${navLinkClass}`}
                onClick={() => {
                  trackButtonClick('resident_login', 'header');
                  trackLinkClick('Resident Login', '/resident-login');
                }}
              >
                Resident Login
              </Link>
              <Link 
                to="/investor-portal" 
                className={`px-1 py-1 text-xs font-medium leading-tight transition-colors duration-200 sm:px-2 sm:text-sm ${navLinkClass}`}
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
            className={`flex min-h-[48px] min-w-[48px] items-center justify-center rounded p-3 transition-colors duration-200 lg:hidden ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-hhp-charcoal hover:bg-surface hover:text-hhp-navy'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation — an overlay sheet rather than a push-down panel,
            so the page behind is dimmed and the menu owns the viewport. Sits at
            z-40 beneath the sticky z-50 header, which keeps the close button
            visible. */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-hhp-navy-deep/60 backdrop-blur-sm animate-in fade-in duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-x-0 top-0 z-40 max-h-[100dvh] overflow-y-auto bg-white pb-10 shadow-premium animate-in slide-in-from-top-4 fade-in duration-300 lg:hidden">
              <div
                className="container-premium"
                style={{ paddingTop: 'calc(var(--header-h) + 0.5rem)' }}
              >
              {/* Main Navigation Items */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <button
                          className="flex min-h-[52px] flex-1 items-center py-3 text-left font-display text-lg font-semibold text-hhp-navy transition-colors duration-200 hover:text-hhp-gold"
                          onClick={() => {
                            // The label navigates to the tab's landing page; the
                            // chevron beside it expands the accordion.
                            if (item.href) {
                              handleMainButtonClick(item.name, item.href);
                              setIsMobileMenuOpen(false);
                            } else {
                              toggleMobileAccordion(item.name);
                            }
                          }}
                        >
                          {item.name}
                        </button>
                        {/* Ghost, not a filled square — the grey background read
                            as a stuck hover state. */}
                        <button
                          className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded text-hhp-charcoal/60 transition-colors duration-200 hover:text-hhp-navy"
                          onClick={() => toggleMobileAccordion(item.name)}
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${
                            mobileAccordions[item.name] ? 'rotate-90' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {mobileAccordions[item.name] && (
                        <div className="ml-1 space-y-0 border-l border-border pl-4">
                          {item.submenu.map((subItem, index) => (
                            subItem.name === 'divider' ? (
                              <hr key={`mobile-divider-${index}`} className="my-0 border-border" />
                            ) : (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block py-2 px-3 text-hhp-charcoal hover:text-hhp-navy hover:bg-surface rounded-md transition-colors duration-200 min-h-[36px] flex items-center leading-tight"
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
                  className="flex min-h-[52px] flex-1 items-center py-3 text-left font-display text-lg font-semibold text-hhp-navy transition-colors duration-200 hover:text-hhp-gold"
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
              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  to={contactCTA.href}
                  className="block w-full bg-hhp-navy text-white px-6 py-4 rounded font-medium text-center hover:bg-hhp-navy/90 transition-colors duration-200 mb-4 min-h-[48px] flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {contactCTA.name}
                </Link>
              </div>
              
              {/* Mobile Utility Links */}
              {/* Utility links previously carried px-2, putting them at a third
                  indent that aligned with neither the top-level items nor the
                  submenu. They now share the top-level left edge. */}
              <div className="flex flex-col space-y-1 border-t border-border pt-5">
                <Link 
                  to="/resident-login" 
                  className="flex min-h-[48px] items-center rounded-md py-3 text-sm font-medium text-hhp-charcoal/75 transition-colors duration-200 hover:text-hhp-navy"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resident Login
                </Link>
                <Link 
                  to="/investor-portal" 
                  className="flex min-h-[48px] items-center rounded-md py-3 text-sm font-medium text-hhp-charcoal/75 transition-colors duration-200 hover:text-hhp-navy"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Investor Portal
                </Link>
              </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;