import AssetTypePage from '@/components/AssetTypePage';
import { Building, TrendingUp, Users, Zap } from 'lucide-react';

const Office = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/office-image.jpg"
      title="Office"
      tagline="Positioning workplaces for tenant experience and long-term resilience"
      
      // Market Context
      marketText="Office real estate continues to evolve as tenant expectations, workplace strategies, and occupancy patterns shift. Owners face pressure to maintain tenant retention, manage operating costs, and position assets competitively while navigating longer lease cycles and heightened scrutiny on building performance. Successful office assets require disciplined operations, reliable building systems, and clear coordination between property management, leasing strategy, and ownership objectives."
      valueProposition="HHP provides operator-led property management and advisory services for office assets, focused on operational reliability, tenant satisfaction, and institutional accountability. Our approach emphasizes: Tenant experience and retention; Building systems reliability and service quality; Expense discipline and vendor oversight; Transparent reporting and owner communication. We manage office properties with a long-term ownership mindset, aligning daily operations with asset positioning, leasing strategy, and capital objectives."
      valuePropositionTitle="HHP's Approach to Office"
      
      // Services Context
      services={{
        propertyManagement: {
          description: "Comprehensive office property management focused on operational consistency and tenant service.",
          services: [
            "Day-to-day building operations and on-site oversight",
            "Tenant relations and service request coordination",
            "Vendor management and service quality oversight",
            "Preventive maintenance and building systems monitoring",
            "Financial management, budgeting, and reporting"
          ]
        },
        advisorySiteSelection: {
          description: "Strategic advisory services supporting acquisition, repositioning, and long-term ownership decisions.",
          services: [
            "Market and submarket analysis",
            "Operational due diligence and asset reviews",
            "Transition planning for new ownership or management",
            "Asset strategy development and repositioning support"
          ]
        },
        investmentSales: {
          description: "Advisory support for ownership transitions, recapitalizations, and strategic portfolio decisions involving office assets.",
          services: [
            "Valuation and underwriting support",
            "Stakeholder coordination and transaction support",
            "Operational transition planning",
            "Post-transaction management integration"
          ]
        },
        landlordRepresentation: {
          description: "Operational coordination supporting leasing execution and tenant retention.",
          services: [
            "Coordination between leasing teams and property operations",
            "Tenant onboarding and move-in coordination",
            "Lease compliance oversight",
            "Support for renewal and retention initiatives"
          ]
        },
        tenantRepresentation: {
          description: "Structured communication and responsiveness supporting tenant satisfaction and stakeholder confidence.",
          services: [
            "Tenant communication and issue resolution",
            "Stakeholder reporting and coordination",
            "Support for tenant improvement and service workflows"
          ]
        },
        acquisitionsDevelopment: {
          description: "Support across acquisition, redevelopment, and development phases with a focus on operational readiness and continuity.",
          services: [
            "Acquisition underwriting and operational review",
            "Development and redevelopment advisory",
            "Operational setup for new or repositioned assets",
            "Stabilization planning and ongoing management integration"
          ]
        }
      }}
      serviceTitles={{
        investmentSales: "Transaction Advisory",
        landlordRepresentation: "Leasing & Occupancy Coordination",
        tenantRepresentation: "Tenant & Stakeholder Relations"
      }}
      servicesTitle="Integrated Services for Office"
      showAboutUs={true}
      
      // Technology Advantages / HHP Advantage
      technologyAdvantages={[
        {
          icon: <Building className="h-8 w-8 text-white" />,
          title: "Tenant-Focused Operations",
          description: "Operational execution designed to support tenant satisfaction, responsiveness, and long-term occupancy."
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-white" />,
          title: "Building Systems Oversight",
          description: "Active management of mechanical, electrical, and life-safety systems to support reliability and cost efficiency."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Expense & Vendor Discipline",
          description: "Structured oversight of operating expenses, service contracts, and vendor performance."
        },
        {
          icon: <Zap className="h-8 w-8 text-white" />,
          title: "Operational & Leasing Alignment",
          description: "Close coordination between operations and leasing strategy to support tenant mix, renewals, and asset positioning."
        },
        {
          icon: <Building className="h-8 w-8 text-white" />,
          title: "Owner Transparency",
          description: "Clear reporting, defined accountability, and proactive communication aligned with institutional ownership standards."
        }
      ]}
      technologyTitle="The HHP Advantage for Office"
      useModernLayout={true}
      
      // Insights
      insights={[
        {
          title: "Office Operations in an Evolving Workplace",
          description: "Perspectives on tenant expectations, building performance, and operational best practices.",
          date: "December 2024"
        },
        {
          title: "Asset Positioning and Retention Strategies",
          description: "Insights into aligning operations and leasing to support occupancy stability.",
          date: "November 2024"
        },
        {
          title: "Long-Term Office Ownership Considerations",
          description: "Guidance on managing costs, capital planning, and asset performance over time.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section - Removed
    />
  );
};

export default Office;