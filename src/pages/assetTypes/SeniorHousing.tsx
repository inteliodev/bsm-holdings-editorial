import AssetTypePage from '@/components/AssetTypePage';
import { Heart, Shield, Users, Calendar } from 'lucide-react';

const SeniorHousing = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/senior-housing-image.jpg"
      title="Senior Housing"
      tagline="Delivering operational stability and resident-focused care solutions"
      
      // Market Context
      marketText="Senior housing operates at the intersection of real estate, healthcare, and hospitality. Operators must balance resident well-being, regulatory oversight, staffing complexity, and financial sustainability while maintaining a high standard of care and service. As demographics continue to shift and operating costs rise, long-term success in senior housing depends on disciplined operations, strong leadership, and consistent execution across care delivery, facilities management, and financial oversight."
      valueProposition="HHP provides operator-led property management and advisory services for senior housing communities, grounded in accountability, resident-focused execution, and institutional operating standards. Our approach emphasizes: Resident safety, dignity, and quality of life; Regulatory compliance and operational readiness; Staffing stability and service consistency; Financial discipline and transparent reporting. We work closely with owners, operators, and care partners to support communities across independent living, assisted living, and memory care environments, with a focus on long-term sustainability and trust."
      valuePropositionTitle="HHP's Approach to Senior Housing"
      
      // Services Context
      services={{
        propertyManagement: {
          description: "Comprehensive senior housing management focused on operational reliability, resident experience, and regulatory alignment.",
          services: [
            "Day-to-day community operations and on-site oversight",
            "Facilities management and preventive maintenance",
            "Vendor coordination and service quality oversight",
            "Financial management, budgeting, and reporting",
            "Resident relations and community standards enforcement"
          ]
        },
        advisorySiteSelection: {
          description: "Strategic advisory services supporting acquisition, development, and long-term ownership decisions in senior housing.",
          services: [
            "Market and demographic analysis",
            "Feasibility studies and operational due diligence",
            "Transition planning for new ownership or operators",
            "Long-term asset and operational strategy development"
          ]
        },
        investmentSales: {
          description: "Advisory support for ownership transitions, recapitalizations, and strategic portfolio decisions within senior housing environments.",
          services: [
            "Valuation and underwriting support",
            "Buyer and stakeholder coordination",
            "Transaction execution support",
            "Post-transaction operational and management transitions"
          ]
        },
        landlordRepresentation: {
          description: "Occupancy strategy and leasing oversight aligned with community positioning, care levels, and resident needs.",
          services: [
            "Occupancy strategy development",
            "Move-in coordination and resident onboarding",
            "Coordination between leasing, care, and operations teams",
            "Retention-focused resident engagement support"
          ]
        },
        tenantRepresentation: {
          description: "Structured communication and coordination supporting resident satisfaction and family confidence.",
          services: [
            "Resident communication and issue resolution",
            "Family engagement and reporting coordination",
            "Support for care-related operational workflows",
            "Alignment between management, staff, and families"
          ]
        },
        acquisitionsDevelopment: {
          description: "Support across acquisition, redevelopment, and development phases with a focus on operational readiness and service continuity.",
          services: [
            "Acquisition underwriting and operational review",
            "Development and redevelopment advisory",
            "Operational setup for staffing, systems, and services",
            "Lease-up and stabilization planning"
          ]
        }
      }}
      serviceTitles={{
        investmentSales: "Transaction Advisory",
        landlordRepresentation: "Leasing & Occupancy Management",
        tenantRepresentation: "Resident & Family Engagement"
      }}
      servicesTitle="Integrated Services for Senior Housing"
      showAboutUs={true}
      
      // Technology Advantages / HHP Advantage
      technologyAdvantages={[
        {
          icon: <Heart className="h-8 w-8 text-white" />,
          title: "Resident-Centered Operations",
          description: "Operational execution designed to prioritize resident well-being, safety, and quality of life across all care levels."
        },
        {
          icon: <Shield className="h-8 w-8 text-white" />,
          title: "Regulatory & Operational Readiness",
          description: "Structured oversight aligned with applicable regulations, inspections, and operational requirements to support compliance and continuity."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Staffing & Service Oversight",
          description: "Management practices supporting staffing stability, training consistency, and accountability across service teams."
        },
        {
          icon: <Calendar className="h-8 w-8 text-white" />,
          title: "Facilities & Asset Stewardship",
          description: "Preventive maintenance and capital planning designed to preserve building systems, safety standards, and long-term asset condition."
        },
        {
          icon: <Heart className="h-8 w-8 text-white" />,
          title: "Owner & Family Confidence",
          description: "Clear reporting, communication, and governance supporting trust among owners, families, and stakeholders."
        }
      ]}
      technologyTitle="The HHP Advantage for Senior Housing"
      useModernLayout={true}
      
      // Insights
      insights={[
        {
          title: "Operating Senior Housing in a Changing Regulatory Environment",
          description: "Perspectives on regulatory oversight, inspections, and operational best practices in senior housing communities.",
          date: "December 2024"
        },
        {
          title: "Staffing Stability and Service Quality in Senior Living",
          description: "Insights into workforce management, service consistency, and resident outcomes.",
          date: "November 2024"
        },
        {
          title: "Long-Term Value Creation in Senior Housing",
          description: "Strategies for balancing care delivery, occupancy, and financial sustainability.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section - Removed
    />
  );
};

export default SeniorHousing;