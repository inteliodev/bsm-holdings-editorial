import AssetTypePage from '@/components/AssetTypePage';

const Industrial = () => {
  return (
    <AssetTypePage
      heroImage="/images/industrial-image.webp"
      eyebrow="Asset Class"
      title="Industrial"
      tagline="The building is a machine, and downtime is the only number that matters"
      heroButtonText="Talk to us about a facility"
      mark="industrial"

      marketText="Industrial tenants do not experience a building the way an office tenant does. They experience it as throughput. A dock leveller out of service, a sprinkler system that will not certify, a truck court that floods in a spring storm — each of those is not a maintenance ticket, it is a day of their operation. Which is why industrial leases are renewed or lost on response time and infrastructure reliability far more often than on rate, and why the physical specification of the building sets a ceiling on who can ever occupy it."
      valuePropositionTitle="Where HHP fits"
      valueProposition="We self-perform the trades that keep a facility running — electrical, plumbing, roofing, general contracting and grounds — so a failure is dispatched from inside the firm rather than bid out after the tenant has already lost the morning. Specialty vendors are engaged only where licensing requires it."

      metricsIntro="Industrial assets are underwritten on specification and held on reliability. These are what we check and what we track."
      metrics={[
        {
          label: 'Clear height',
          detail:
            'The single specification that most limits the tenant pool. It determines racking configuration, and no amount of rate concession compensates for a ceiling that is too low.',
        },
        {
          label: 'Dock door ratio',
          detail:
            'Doors per thousand square feet, with leveller and seal condition tracked per position. A door out of service is a percentage of the tenant’s throughput gone.',
        },
        {
          label: 'Truck court depth and trailer parking',
          detail:
            'Turning radius and stored trailer count, checked against how the tenant actually stages. Drainage too — a court that ponds is a court that fails in freeze-thaw.',
        },
        {
          label: 'Power capacity and service',
          detail:
            'Available amperage and service configuration against current draw, because the tenant who wants to add a line will ask before they ask about rent.',
        },
        {
          label: 'Sprinkler classification',
          detail:
            'System type and commodity classification against what is actually being stored. This is where a lease can quietly put a building out of compliance.',
        },
        {
          label: 'Response time to failure',
          detail:
            'Hours from report to resolution, recorded against the work order. Because the trades are ours, this is a number we control rather than one we relay.',
        },
      ]}

      services={{
        propertyManagement: {
          description:
            'Facility operation with uptime as the objective — preventive schedules on the systems that stop a tenant working, not a generic building calendar.',
          services: [
            'Day-to-day property operations and oversight',
            'Tenant communication and service coordination',
            'Vendor management and service quality oversight',
            'Preventive maintenance and infrastructure monitoring',
            'Financial management, budgeting, and reporting',
          ],
        },
        advisorySiteSelection: {
          description:
            'Specification-first diligence: clear height, dock configuration, power, slab condition and sprinkler class, assessed before a number is committed.',
          services: [
            'Market and location analysis',
            'Operational due diligence and asset reviews',
            'Transition planning for new ownership or management',
            'Asset strategy and long-term planning support',
          ],
        },
        investmentSales: {
          description:
            'We underwrite from the expense side because we operate buildings, so the maintenance reserve in our model reflects what the systems will actually demand.',
          services: [
            'Valuation and underwriting support',
            'Stakeholder coordination and transaction execution support',
            'Operational transition planning',
            'Post-transaction management integration',
          ],
        },
        landlordRepresentation: {
          description:
            'Lease terms checked against what the building can physically deliver, so a use clause does not commit the asset to a condition it cannot meet.',
          services: [
            'Coordination with leasing teams',
            'Tenant onboarding and move-in coordination',
            'Lease compliance oversight',
            'Support for renewals and tenant retention',
          ],
        },
        tenantRepresentation: {
          description:
            'A single point of contact who can actually dispatch, because the personnel who fix the problem work for the same firm taking the call.',
          services: [
            'Tenant communication and issue resolution',
            'Coordination with service providers and contractors',
            'Stakeholder reporting and operational updates',
          ],
        },
        acquisitionsDevelopment: {
          description:
            'Dock reconfiguration, office build-out and site work run through our own general contracting, which removes a layer of markup from every project above the maintenance threshold.',
          services: [
            'Acquisition underwriting and operational review',
            'Development and redevelopment advisory',
            'Operational setup for new or repositioned facilities',
            'Stabilization planning and ongoing management integration',
          ],
        },
      }}
      serviceTitles={{
        investmentSales: 'Transaction Advisory',
        landlordRepresentation: 'Leasing & Occupancy Coordination',
        tenantRepresentation: 'Tenant & Stakeholder Relations',
      }}
      servicesTitle="Integrated services for industrial"
      servicesSubtitle="Six capabilities under one firm, so no part of the facility is somebody else's responsibility."

      technologyTitle="The HHP advantage for industrial"
      technologyAdvantages={[
        {
          title: 'Self-performed trades, so uptime is ours to control',
          description:
            'Electrical, plumbing, roofing, general contracting and grounds are performed by our own personnel. A failure is dispatched from inside the firm rather than bid out, and specialty vendors are engaged only where licensing requires it.',
        },
        {
          title: 'Infrastructure tracked by runtime, not by calendar',
          description:
            'Dock equipment, roof, slab, fire systems and site drainage carried with fault history against each position, so the preventive schedule reflects what is actually wearing.',
        },
        {
          title: 'Cost visible at the line item',
          description:
            'Every work order records labor hours, materials and time on site rather than resolving to a vendor invoice with margin already priced in. An owner sees the cost, not the billing.',
        },
        {
          title: 'Reporting without the month-end lag',
          description:
            'Operating data reaches owners as it lands. The systems producing it are built and maintained by HHP, so what is reported changes when the way we operate changes.',
        },
        {
          title: 'One firm accountable',
          description:
            'Property management, the trades and the accounting report into the same principal. A tenant losing a shift does not wait while responsibility is established.',
        },
      ]}

      proof={{
        kind: 'seeking',
        image: '/images/development-advisory-image.webp',
        imageAlt: 'Industrial facility and site',
        title: 'The facilities we take on',
        body: 'Electrical, plumbing, roofing and grounds are performed by our own personnel, so response time is a number we control rather than one we relay. In a class where downtime is the whole service, that shapes the facilities we want. Here is what we look for.',
        points: [
          'Specification we can verify on site — clear height, dock ratio, power and sprinkler class — before a number is committed',
          'A roof, slab and site drainage we can assess rather than inherit',
          'A tenant whose operation we understand well enough to set the preventive schedule around it',
          'Proximity to our Tulsa and Oklahoma City personnel, so response time is ours rather than a vendor’s',
        ],
        href: '/contact',
        hrefLabel: 'Start a conversation',
      }}

      ctaTitle="Tell us about the facility"
      ctaBody="Send us the specification and the last twelve months of maintenance history. We will tell you what we think it costs to keep running, and what we would expect to replace first."
    />
  );
};

export default Industrial;
