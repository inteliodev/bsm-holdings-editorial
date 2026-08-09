// Global error handler and debugging utilities
import { trackError } from '@/utils/analytics';

const isDev = process.env.NODE_ENV === 'development';

// Global error logging.
//
// This previously wrote to Supabase tables `error_logs` and `route_logs`, neither of
// which exists in the schema — every insert failed silently. It also pulled the whole
// Supabase client (including the realtime websocket layer) into the eager bundle on
// every page view. Errors now go to GA4, which is already loaded, so reporting costs
// nothing extra at load time.
export const logError = (error: unknown, context?: string) => {
  // `window.onerror` delivers `event.error === null` for cross-origin script failures,
  // so this must tolerate a non-Error argument. Dereferencing `.message` blindly threw
  // inside the error handler itself, which could re-fire the error event.
  const err = error instanceof Error ? error : new Error(String(error ?? 'Unknown error'));

  console.error(`[${context || 'App'}] Error:`, err);

  if (!isDev) {
    try {
      trackError(err.message, context || 'Unknown');
    } catch {
      // Never let error reporting generate another error.
    }
  }
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`[Performance] ${name}: ${end - start}ms`);
};

// API call wrapper with error handling
export const safeApiCall = async <T>(
  apiCall: () => Promise<T>,
  context: string = 'API Call'
): Promise<T | null> => {
  try {
    const result = await apiCall();
    return result;
  } catch (error) {
    logError(error as Error, context);
    return null;
  }
};

// Route change monitoring. Route tracking for analytics is handled by
// usePageTracking in src/hooks/useAnalytics.ts; this is a dev-only console aid.
export const logRouteChange = (from: string, to: string) => {
  if (isDev) console.log(`[Navigation] ${from} → ${to}`);
};

// Component mount/unmount tracking
export const trackComponent = (componentName: string) => {
  if (isDev) console.log(`[Component] ${componentName} mounted`);

  return () => {
    if (isDev) console.log(`[Component] ${componentName} unmounted`);
  };
};

// Memory usage monitoring (dev only)
export const logMemoryUsage = () => {
  if (isDev && 'memory' in performance) {
    const memory = (performance as any).memory;
    console.log('[Memory]', {
      used: `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`
    });
  }
};

// Network status monitoring
export const monitorNetworkStatus = () => {
  const updateNetworkStatus = () => {
    if (isDev) console.log(`[Network] Status: ${navigator.onLine ? 'Online' : 'Offline'}`);
  };
  
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  
  return () => {
    window.removeEventListener('online', updateNetworkStatus);
    window.removeEventListener('offline', updateNetworkStatus);
  };
};

// Initialize global error handling
export const initializeErrorHandling = () => {
  // Global unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    logError(new Error(event.reason), 'Unhandled Promise Rejection');
  });
  
  // Global error handler. `event.error` is null for cross-origin script errors, so
  // fall back to the message rather than handing logError an empty value.
  window.addEventListener('error', (event) => {
    logError(event.error ?? event.message, 'Global Error');
  });

  // Memory monitoring — dev only. This previously ran forever in production,
  // logging heap stats to the console every 30 seconds for every visitor.
  if (isDev) {
    setInterval(logMemoryUsage, 30000);
  }

  // Network monitoring
  monitorNetworkStatus();

  if (isDev) console.log('[Debug] Error handling initialized');
};
