import AssetTypePage from '@/components/AssetTypePage';
import { Shield, FileCheck, BarChart3, Users } from 'lucide-react';

const HudAffordable = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/affordable-housing-image.jpeg"
      title="Affordable Housing"
      tagline="Specialized compliance and operations expertise for regulated assets"
      
      // Market Context
      marketText="Affordable housing faces unprecedented demand as housing costs outpace wage growth across markets. HUD programs provide critical housing solutions while requiring specialized compliance expertise. Success in this sector demands institutional knowledge, robust systems, and resident-centered operations."
      valueProposition="HHP delivers rigorous compliance management with resident-first service. Our specialized expertise in HUD programs, MOR preparation, and affordable housing regulations ensures seamless operations while optimizing subsidy utilization and resident outcomes."
      
      // Services Context
      services={{
        propertyManagement: {
          description: "Specialized management services designed for regulated and income-restricted housing environments.",
          services: [
            "Day-to-day property and on-site staff oversight",
            "Compliance administration and documentation",
            "Tenant eligibility, certifications, and recertifications",
            "Maintenance coordination and capital planning",
            "Financial reporting aligned with program and lender requirements"
          ]
        },
        advisorySiteSelection: {
          description: "Strategic advisory services supporting acquisition, redevelopment, and long-term ownership decisions for affordable housing assets.",
          services: [
            "Program and regulatory feasibility analysis",
            "Operational due diligence and compliance risk assessment",
            "Transition planning for new ownership or management",
            "Asset strategy development for stabilized and value-add properties"
          ]
        },
        investmentSales: {
          description: "Advisory support for ownership transfers, recapitalizations, and long-term capital decisions within regulated housing environments.",
          services: [
            "Valuation and underwriting support reflecting affordability structures",
            "Buyer and stakeholder coordination",
            "Transaction execution support",
            "Post-transaction operational and compliance transition planning"
          ]
        },
        landlordRepresentation: {
          description: "Occupancy coordination and leasing oversight aligned with affordability requirements and eligibility guidelines.",
          services: [
            "Occupancy strategy development",
            "Rent and income restriction oversight",
            "Leasing performance monitoring",
            "Coordination between leasing and compliance functions"
          ]
        },
        tenantRepresentation: {
          description: "Representation and coordination for residents, nonprofit partners, agencies, and stakeholders involved in affordable housing communities.",
          services: [
            "Tenant qualification and program alignment",
            "Housing placement and coordination support",
            "Lease administration and compliance review",
            "Stakeholder communication and reporting"
          ]
        },
        acquisitionsDevelopment: {
          description: "Support across acquisition, rehabilitation, and development phases with a focus on compliance readiness and operational execution.",
          services: [
            "Acquisition underwriting and regulatory review",
            "Development feasibility and advisory support",
            "Operational setup for affordability requirements",
            "Lease-up and stabilization planning"
          ]
        }
      }}
      serviceTitles={{
        investmentSales: "Transaction Advisory",
        landlordRepresentation: "Leasing & Occupancy Management",
        tenantRepresentation: "Tenant & Stakeholder Representation"
      }}
      servicesTitle={"Our Integrated Services for Affordable Housing"}
      showAboutUs={true}
      
      // Technology Advantages / HHP Advantage
      technologyAdvantages={[
        {
          icon: <Shield className="h-8 w-8 text-white" />,
          title: "Compliance-Driven Operations",
          description: "Structured compliance workflows embedded into daily operations to support accuracy, consistency, and regulatory adherence across income-restricted housing programs."
        },
        {
          icon: <FileCheck className="h-8 w-8 text-white" />,
          title: "Audit & Review Readiness",
          description: "Disciplined documentation standards and internal review processes designed to support regulatory reviews, lender audits, and ownership reporting requirements."
        },
        {
          icon: <BarChart3 className="h-8 w-8 text-white" />,
          title: "Financial & Affordability Controls",
          description: "Oversight of rent structures, affordability limits, and reporting designed to maintain financial accuracy while supporting long-term asset sustainability."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Resident-Centered Execution",
          description: "Resident communication and service coordination aligned with program requirements while supporting stable occupancy, responsiveness, and community outcomes."
        },
        {
          icon: <Shield className="h-8 w-8 text-white" />,
          title: "Owner Accountability & Transparency",
          description: "Clear reporting, defined responsibilities, and proactive communication providing owners and stakeholders with confidence in day-to-day operations and long-term performance."
        }
      ]}
      technologyTitle="The HHP Advantage for Affordable Housing"
      useModernLayout={true}
      
      // Insights
      insights={[
        {
          title: "Navigating HUD Program Changes: Compliance Updates",
          description: "Essential guide to recent HUD program modifications and their impact on property operations and compliance strategies.",
          date: "December 2024"
        },
        {
          title: "Affordable Housing Investment Strategies",
          description: "Current market analysis and investment strategies for acquiring and managing affordable housing portfolios.",
          date: "November 2024"
        },
        {
          title: "Resident Services Innovation in Affordable Housing",
          description: "Case studies of technology-enabled resident services improving outcomes in affordable housing communities.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section - Removed
    />
  );
};

export default HudAffordable;