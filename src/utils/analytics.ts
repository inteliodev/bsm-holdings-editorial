// Google Analytics 4 Utility Functions
// GA4 Measurement ID: G-XXXXXXXXXX

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize GA4 if not already loaded
export const initializeGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      send_to: 'G-XXXXXXXXXX',
      ...parameters,
    });
  }
};

// Track button clicks (CTAs)
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
    event_category: 'engagement',
  });
};

// Track link clicks
export const trackLinkClick = (linkText: string, linkUrl: string, isExternal: boolean = false) => {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    is_external: isExternal,
    event_category: 'navigation',
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, formType?: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType || 'contact',
    event_category: 'conversion',
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    event_category: 'engagement',
  });
};

// Track file downloads
export const trackFileDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_category: 'engagement',
  });
};

// Track video plays
export const trackVideoPlay = (videoTitle: string, videoDuration?: number) => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_duration: videoDuration,
    event_category: 'engagement',
  });
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number, currency?: string) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: currency || 'USD',
    event_category: 'conversion',
  });
};

// Track service page views
export const trackServicePageView = (serviceName: string, serviceType: 'brokerage' | 'management') => {
  trackEvent('service_page_view', {
    service_name: serviceName,
    service_type: serviceType,
    event_category: 'service_interest',
  });
};

// Track contact form interactions
export const trackContactFormInteraction = (action: 'start' | 'complete' | 'error', formType?: string) => {
  trackEvent('contact_form_interaction', {
    action: action,
    form_type: formType || 'general',
    event_category: 'conversion',
  });
};

// Track navigation menu usage
export const trackNavigationClick = (menuItem: string, submenu?: string) => {
  trackEvent('navigation_click', {
    menu_item: menuItem,
    submenu: submenu,
    event_category: 'navigation',
  });
};

// Track search queries (if applicable)
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'engagement',
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number, pagePath: string) => {
  trackEvent('time_on_page', {
    time_in_seconds: timeInSeconds,
    page_path: pagePath,
    event_category: 'engagement',
  });
};

// Track errors
export const trackError = (errorMessage: string, errorType: string, pagePath?: string) => {
  trackEvent('error', {
    error_message: errorMessage,
    error_type: errorType,
    page_path: pagePath || window.location.pathname,
    event_category: 'error',
  });
};
