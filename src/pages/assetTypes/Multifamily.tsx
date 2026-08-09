import AssetTypePage from '@/components/AssetTypePage';
import { BarChart3, Users, Zap, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Multifamily = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Multifamily Property Management & Investment Services | HHP Asset Management</title>
        <meta 
          name="description" 
          content="Expert multifamily property management, investment sales, and advisory services. Enhance value across stabilized, lease-up, and mixed-use communities." 
        />
        <meta 
          name="keywords" 
          content="multifamily property management, apartment management, multifamily investment, lease-up services, NOI optimization, mixed-use development"
        />
        <meta property="og:title" content="Multifamily Property Management Services | HHP Asset Management" />
        <meta property="og:description" content="Enhancing value across stabilized, lease-up, and mixed-use communities with data-driven property management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hhpasset.com/services/multifamily" />
        <meta property="og:image" content="https://hhpasset.com/images/multifamily-image-trendy.jpg" />
        <link rel="canonical" href="https://hhpasset.com/services/multifamily" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multifamily Property Management Services | HHP Asset Management" />
        <meta name="twitter:description" content="Enhancing value across stabilized, lease-up, and mixed-use communities." />
        <meta name="twitter:image" content="https://hhpasset.com/images/multifamily-image-trendy.jpg" />
      </Helmet>

      <AssetTypePage
        // Hero Section
        heroImage="/images/multifamily-image-trendy.jpg"
        title="Multifamily"
        tagline="Hands-on management and advisory across stabilized, lease-up, and mixed-use communities"
        heroButtonText="Schedule a Consultation"
        
        // Market Context
        marketText="Multifamily assets operate in a competitive environment shaped by local market dynamics, operating costs, and resident expectations. Owners must balance occupancy, revenue stability, expense control, and long-term capital preservation while adapting to shifting market conditions. Sustained performance in multifamily requires disciplined operations, consistent resident engagement, and financial oversight aligned with ownership objectives."
        valueProposition="HHP provides operator-led property management and advisory services for multifamily assets, grounded in accountability, execution, and institutional operating standards. Our approach emphasizes: Occupancy stability and resident retention; Revenue and expense discipline; Preventive maintenance and asset stewardship; Transparent reporting and owner communication. We manage multifamily properties with a long-term ownership mindset, aligning daily operations with asset strategy, market positioning, and capital objectives."
        valuePropositionTitle="HHP's Approach to Multifamily"
        
        // Services Context
        services={{
          propertyManagement: {
            description: "Comprehensive multifamily property management focused on operational consistency and resident service.",
            services: [
              "Day-to-day property and on-site staff oversight",
              "Resident relations and service request coordination",
              "Vendor management and service quality oversight",
              "Preventive maintenance and capital planning",
              "Financial management, budgeting, and reporting"
            ]
          },
          advisorySiteSelection: {
            description: "Strategic advisory services supporting acquisition, repositioning, and long-term ownership decisions.",
            services: [
              "Market and submarket analysis",
              "Operational due diligence and asset reviews",
              "Transition planning for new ownership or management",
              "Asset strategy development for stabilized and value-add properties"
            ]
          },
          investmentSales: {
            description: "Advisory support for ownership transitions, recapitalizations, and strategic portfolio decisions involving multifamily assets.",
            services: [
              "Valuation and underwriting support",
              "Buyer and stakeholder coordination",
              "Transaction execution support",
              "Post-transaction operational transition planning"
            ]
          },
          landlordRepresentation: {
            description: "Occupancy and leasing oversight aligned with market conditions and asset positioning.",
            services: [
              "Leasing strategy coordination",
              "Rent positioning and renewal oversight",
              "Resident onboarding and move-in coordination",
              "Retention-focused resident engagement"
            ]
          },
          tenantRepresentation: {
            description: "Structured communication and engagement supporting resident satisfaction and community stability.",
            services: [
              "Resident communication and issue resolution",
              "Community standards and lease compliance oversight",
              "Coordination of resident services and programming"
            ]
          },
          acquisitionsDevelopment: {
            description: "Support across acquisition, redevelopment, and development phases with a focus on operational readiness and continuity.",
            services: [
              "Acquisition underwriting and operational review",
              "Development and redevelopment advisory",
              "Operational setup for new or repositioned assets",
              "Lease-up and stabilization planning"
            ]
          }
        }}
        serviceTitles={{
          investmentSales: "Transaction Advisory",
          landlordRepresentation: "Leasing & Occupancy Management",
          tenantRepresentation: "Resident & Community Relations"
        }}
        servicesTitle="Integrated Services for Multifamily"
        showAboutUs={true}
        
        // Technology Advantages / HHP Advantage
        technologyAdvantages={[
          {
            icon: <BarChart3 className="h-8 w-8 text-white" />,
            title: "Operator-Led Performance",
            description: "Hands-on operational oversight focused on occupancy stability, expense control, and long-term asset performance."
          },
          {
            icon: <Users className="h-8 w-8 text-white" />,
            title: "Revenue & Expense Discipline",
            description: "Market-informed rent strategy, renewal oversight, and cost controls aligned with ownership objectives."
          },
          {
            icon: <Zap className="h-8 w-8 text-white" />,
            title: "Maintenance & Asset Stewardship",
            description: "Preventive maintenance programs and capital planning designed to protect asset condition and reduce operational risk."
          },
          {
            icon: <DollarSign className="h-8 w-8 text-white" />,
            title: "Resident Experience Execution",
            description: "Consistent resident communication and service delivery supporting retention and community stability."
          },
          {
            icon: <BarChart3 className="h-8 w-8 text-white" />,
            title: "Owner Transparency",
            description: "Clear financial reporting, performance monitoring, and proactive communication aligned with institutional ownership standards."
          }
        ]}
        technologyTitle="The HHP Advantage for Multifamily"
        useModernLayout={true}
        
        // Insights
        insights={[
          {
            title: "Operating Multifamily in Changing Markets",
            description: "Perspectives on occupancy trends, operating costs, and resident expectations.",
            date: "December 2024"
          },
          {
            title: "Revenue and Retention Strategies",
            description: "Insights into rent positioning, renewals, and resident engagement.",
            date: "November 2024"
          },
          {
            title: "Long-Term Multifamily Ownership",
            description: "Guidance on capital planning, expense management, and asset performance.",
            date: "October 2024"
          }
        ]}
        insightsTitle="Insights & Research"
        
        // CTA Section - Removed
      />
    </>
  );
};

export default Multifamily;