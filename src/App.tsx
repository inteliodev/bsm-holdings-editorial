import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { usePageTracking, useScrollTracking, useTimeOnPageTracking } from "./hooks/useAnalytics";

// Lazy-loaded page components
const Home = lazy(() => import("./pages/Home"));
const Brokerage = lazy(() => import("./pages/Brokerage"));
const BrokerageTenantRep = lazy(() => import("./pages/BrokerageTenantRep"));
const BrokerageLandlordRep = lazy(() => import("./pages/BrokerageLandlordRep"));
const BrokerageInvestmentSales = lazy(() => import("./pages/BrokerageInvestmentSales"));
const BrokerageSiteSelection = lazy(() => import("./pages/BrokerageSiteSelection"));
const Services = lazy(() => import("./pages/Services"));
const ManagementMultifamily = lazy(() => import("./pages/ManagementMultifamily"));
const ManagementHUD = lazy(() => import("./pages/ManagementHUD"));
const ManagementCommercial = lazy(() => import("./pages/ManagementCommercial"));
const ManagementRetail = lazy(() => import("./pages/ManagementRetail"));
const ManagementIndustrial = lazy(() => import("./pages/ManagementIndustrial"));
const ManagementSenior = lazy(() => import("./pages/ManagementSenior"));
const Technology = lazy(() => import("./pages/Technology"));
const About = lazy(() => import("./pages/About"));
const Insights = lazy(() => import("./pages/Insights"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Opportunities = lazy(() => import("./pages/Opportunities"));
const ResidentLogin = lazy(() => import("./pages/ResidentLogin"));
const InvestorPortal = lazy(() => import("./pages/InvestorPortal"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const NotFound = lazy(() => import("./pages/NotFound"));

// New Service Pages
const PropertyManagement = lazy(() => import("./pages/services/PropertyManagement"));
const LeasingRepresentation = lazy(() => import("./pages/services/LeasingRepresentation"));
const InvestmentCapitalMarkets = lazy(() => import("./pages/services/InvestmentCapitalMarkets"));
const AdvisorySiteSelection = lazy(() => import("./pages/services/AdvisorySiteSelection"));
const DevelopmentAdvisory = lazy(() => import("./pages/services/DevelopmentAdvisory"));
const BrokerConsulting = lazy(() => import("./pages/services/BrokerConsulting"));
const FinancialServices = lazy(() => import("./pages/services/FinancialServices"));
const FacilityServices = lazy(() => import("./pages/FacilityServices"));
// Legacy service pages (for backward compatibility)
const InvestmentSales = lazy(() => import("./pages/services/InvestmentSales"));
const LandlordRepresentation = lazy(() => import("./pages/services/LandlordRepresentation"));
const TenantRepresentation = lazy(() => import("./pages/services/TenantRepresentation"));
const Acquisitions = lazy(() => import("./pages/services/Acquisitions"));
const Development = lazy(() => import("./pages/services/Development"));
const Consulting = lazy(() => import("./pages/services/Consulting"));

// Asset Types Overview Page
const AssetTypes = lazy(() => import("./pages/AssetTypes"));

// New Asset Type Pages
const MultifamilyAssetType = lazy(() => import("./pages/assetTypes/Multifamily"));
const HudAffordable = lazy(() => import("./pages/assetTypes/HudAffordable"));
const OfficeAssetType = lazy(() => import("./pages/assetTypes/Office"));
const RetailAssetType = lazy(() => import("./pages/assetTypes/Retail"));
const IndustrialAssetType = lazy(() => import("./pages/assetTypes/Industrial"));
const SeniorHousingAssetType = lazy(() => import("./pages/assetTypes/SeniorHousing"));

// New Technology Pages
const Platforms = lazy(() => import("./pages/technology/Platforms"));
const AdvisoryAnalytics = lazy(() => import("./pages/technology/AdvisoryAnalytics"));
const CustomSolutions = lazy(() => import("./pages/technology/CustomSolutions"));

const queryClient = new QueryClient();

// Component to handle analytics tracking
const AnalyticsTracker = () => {
  usePageTracking();
  useScrollTracking();
  useTimeOnPageTracking();
  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-hhp-navy border-t-transparent rounded-full animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Services Routes */}
              <Route path="/services/property-management" element={<PropertyManagement />} />
              <Route path="/services/leasing-representation" element={<LeasingRepresentation />} />
              <Route path="/services/investment-capital-markets" element={<InvestmentCapitalMarkets />} />
              <Route path="/services/advisory-site-selection" element={<AdvisorySiteSelection />} />
              <Route path="/services/development-advisory" element={<DevelopmentAdvisory />} />
              <Route path="/services/broker-consulting" element={<BrokerConsulting />} />
              <Route path="/services/financial-services" element={<FinancialServices />} />
              <Route path="/services/facility-services" element={<FacilityServices />} />
              {/* Legacy: previous Facilities Management path */}
              <Route path="/services/facilities-management" element={<FacilityServices />} />

              {/* Legacy service routes (for backward compatibility) */}
              <Route path="/services/investment-sales" element={<InvestmentSales />} />
              <Route path="/services/landlord-representation" element={<LandlordRepresentation />} />
              <Route path="/services/tenant-representation" element={<TenantRepresentation />} />
              <Route path="/services/acquisitions" element={<Acquisitions />} />
              <Route path="/services/development" element={<Development />} />
              <Route path="/services/consulting" element={<Consulting />} />

              {/* Asset Types Routes */}
              <Route path="/asset-types" element={<AssetTypes />} />
              <Route path="/asset-types/multifamily" element={<MultifamilyAssetType />} />
              <Route path="/asset-types/hud-affordable" element={<HudAffordable />} />
              <Route path="/asset-types/office" element={<OfficeAssetType />} />
              <Route path="/asset-types/retail" element={<RetailAssetType />} />
              <Route path="/asset-types/industrial" element={<IndustrialAssetType />} />
              <Route path="/asset-types/senior-housing" element={<SeniorHousingAssetType />} />

              {/* Technology Routes */}
              <Route path="/technology/platforms" element={<Platforms />} />
              {/* Legacy: old AI-branded path */}
              <Route path="/technology/ai-platforms" element={<Platforms />} />
              <Route path="/technology/advisory-analytics" element={<AdvisoryAnalytics />} />
              <Route path="/technology/custom-solutions" element={<CustomSolutions />} />

              {/* Asset Management Routes */}
              <Route path="/asset-management" element={<Services />} />
              <Route path="/asset-management/multifamily" element={<ManagementMultifamily />} />
              <Route path="/asset-management/hud" element={<ManagementHUD />} />
              <Route path="/asset-management/senior" element={<ManagementSenior />} />
              <Route path="/asset-management/office" element={<ManagementCommercial />} />
              <Route path="/asset-management/retail" element={<ManagementRetail />} />
              <Route path="/asset-management/industrial" element={<ManagementIndustrial />} />

              {/* Brokerage Routes */}
              <Route path="/brokerage" element={<Brokerage />} />
              <Route path="/brokerage/tenant-rep" element={<BrokerageTenantRep />} />
              <Route path="/brokerage/landlord-rep" element={<BrokerageLandlordRep />} />
              <Route path="/brokerage/investment-sales" element={<BrokerageInvestmentSales />} />
              <Route path="/brokerage/site-selection" element={<BrokerageSiteSelection />} />

              {/* Other Routes */}
              <Route path="/technology" element={<Technology />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/resident-login" element={<ResidentLogin />} />
              <Route path="/investor-portal" element={<InvestorPortal />} />
              <Route path="/portfolio" element={<Portfolio />} />

              {/* Legacy routes for backward compatibility */}
              <Route path="/management" element={<Services />} />
              <Route path="/management/multifamily" element={<ManagementMultifamily />} />
              <Route path="/management/hud" element={<ManagementHUD />} />
              <Route path="/management/office" element={<ManagementCommercial />} />
              <Route path="/management/retail" element={<ManagementRetail />} />
              <Route path="/management/industrial" element={<ManagementIndustrial />} />
              <Route path="/management/senior" element={<ManagementSenior />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/multifamily" element={<Services />} />
              <Route path="/services/hud-housing" element={<Services />} />
              <Route path="/services/residential" element={<Services />} />
              <Route path="/services/commercial" element={<Services />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
