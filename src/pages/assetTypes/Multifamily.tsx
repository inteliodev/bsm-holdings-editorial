import AssetTypePage from '@/components/AssetTypePage';
import { Helmet } from 'react-helmet-async';

const Multifamily = () => {
  return (
    <>
      {/* SEO Meta Tags. The canonical and og:url previously pointed at
          /services/multifamily, which is not a registered route — the catch-all
          rewrite made it look like a 200 while resolving to NotFound. */}
      <Helmet>
        <title>Multifamily Property Management & Investment Services | BSM Holdings</title>
        <meta
          name="description"
          content="Operator-led multifamily property management, underwriting and advisory. Self-performed trades, line-item cost visibility, and reporting without the month-end lag."
        />
        <meta
          name="keywords"
          content="multifamily property management, apartment management, multifamily investment, unit turns, NOI optimization, self-performed maintenance"
        />
        <meta property="og:title" content="Multifamily Property Management Services | BSM Holdings" />
        <meta property="og:description" content="Operator-led multifamily management with self-performed trades and line-item cost visibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsmholdings.com/asset-types/multifamily" />
        <meta property="og:image" content="https://bsmholdings.com/images/multifamily-image-trendy.jpg" />
        <link rel="canonical" href="https://bsmholdings.com/asset-types/multifamily" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multifamily Property Management Services | BSM Holdings" />
        <meta name="twitter:description" content="Operator-led multifamily management with self-performed trades and line-item cost visibility." />
        <meta name="twitter:image" content="https://bsmholdings.com/images/multifamily-image-trendy.jpg" />
      </Helmet>

      <AssetTypePage
        heroImage="/images/multifamily-image-trendy.jpg"
        eyebrow="Asset Class"
        title="Multifamily"
        tagline="Turn time is occupancy, and occupancy is revenue"
        heroButtonText="Talk to us about a community"
        mark="multifamily"

        marketText="Multifamily is decided in the gap between one resident moving out and the next moving in. Every day a unit sits is revenue that cannot be recovered later in the year, and the length of that gap is set by whether the paint, flooring and punch work can be scheduled immediately or has to be bid. The same is true of a work order: response time is the single thing residents cite most in renewal decisions, and it is entirely an operating variable. Rate matters, but rate is a market condition. Turn time is a choice."
        valuePropositionTitle="Where BSM Holdings fits"
        valueProposition="Turns and maintenance are performed by our own personnel, so a unit turn is scheduled rather than tendered. That compresses the vacancy gap and means the cost of the turn reports as labor hours and materials rather than a contractor invoice with margin already priced in."

        metricsIntro="Multifamily performance is an operating result, not a market one. These are the figures we hold against every community."
        metrics={[
          {
            label: 'Turn time',
            detail:
              'Days from notice to rent-ready, measured per unit rather than averaged. Because turns are self-performed, this is a schedule we control rather than a vendor queue we join.',
          },
          {
            label: 'Cost per turn',
            detail:
              'Labor hours and materials per unit, separated from capital work. A turn cost that only exists as an invoice total cannot be managed.',
          },
          {
            label: 'Work order response time',
            detail:
              'Hours from submission to resolution. The number residents cite most at renewal, and one that is entirely within an operator’s control.',
          },
          {
            label: 'Renewal rate',
            detail:
              'Tracked against response time and turn quality rather than against rate alone, because renewals are usually lost on service and only blamed on rent.',
          },
          {
            label: 'Delinquency and collections',
            detail:
              'Aged by resident with the intervention history attached, so a collection problem is visible while it is still a conversation.',
          },
          {
            label: 'Controllable expense per unit',
            detail:
              'Separated from taxes, insurance and debt service, so the part of the operating line an operator can actually move is reported on its own.',
          },
        ]}

        services={{
          propertyManagement: {
            description:
              'On-site operation by BSM Holdings personnel, with maintenance and turns performed in house rather than dispatched to a rotating set of contractors.',
            services: [
              'Day-to-day property and on-site staff oversight',
              'Resident relations and service request coordination',
              'Vendor management and service quality oversight',
              'Preventive maintenance and capital planning',
              'Financial management, budgeting, and reporting',
            ],
          },
          advisorySiteSelection: {
            description:
              'Operational due diligence that reports what the community will cost to run, including the turn and maintenance load a rent roll never shows.',
            services: [
              'Market and submarket analysis',
              'Operational due diligence and asset reviews',
              'Transition planning for new ownership or management',
              'Asset strategy development for stabilized and value-add properties',
            ],
          },
          investmentSales: {
            description:
              'We underwrite from the expense side because we operate communities, so the maintenance and turn assumptions are ones we would have to deliver.',
            services: [
              'Valuation and underwriting support',
              'Buyer and stakeholder coordination',
              'Transaction execution support',
              'Post-transaction operational transition planning',
            ],
          },
          landlordRepresentation: {
            description:
              'Rent positioning set against real turn capacity, so a leasing target is one the maintenance schedule can actually support.',
            services: [
              'Leasing strategy coordination',
              'Rent positioning and renewal oversight',
              'Resident onboarding and move-in coordination',
              'Retention-focused resident engagement',
            ],
          },
          tenantRepresentation: {
            description:
              'Every call, request and follow-up logged against both the unit and the resident, so the full history of a tenancy is retrievable on request.',
            services: [
              'Resident communication and issue resolution',
              'Community standards and lease compliance oversight',
              'Coordination of resident services and programming',
            ],
          },
          acquisitionsDevelopment: {
            description:
              'Renovation and repositioning run through our own general contracting, which removes a layer of markup from every project above the maintenance threshold.',
            services: [
              'Acquisition underwriting and operational review',
              'Development and redevelopment advisory',
              'Operational setup for new or repositioned assets',
              'Lease-up and stabilization planning',
            ],
          },
        }}
        serviceTitles={{
          investmentSales: 'Transaction Advisory',
          landlordRepresentation: 'Leasing & Occupancy Management',
          tenantRepresentation: 'Resident & Community Relations',
        }}
        servicesTitle="Integrated services for multifamily"
        servicesSubtitle="Six capabilities under one firm, so no part of the community is somebody else's responsibility."

        technologyTitle="The BSM Holdings advantage for multifamily"
        technologyAdvantages={[
          {
            title: 'Turns performed, not tendered',
            description:
              'Paint, flooring, punch work and janitorial are performed by our own personnel. A turn starts when the unit is vacant rather than when a contractor has capacity, which is where vacancy days are actually won.',
          },
          {
            title: 'Same-day response as an operating standard',
            description:
              'Work orders route directly to BSM Holdings and, in most cases, are resolved the same day. Response time is the number residents remember at renewal.',
          },
          {
            title: 'Cost visible at the line item',
            description:
              'Each order records labor hours, materials and time on site rather than resolving to an invoice. There is no subcontractor markup on self-performed work, and specialty vendors are engaged only where licensing requires it.',
          },
          {
            title: 'Reporting without the month-end lag',
            description:
              'Occupancy, delinquency and expense variance reach owners as they land. The systems producing that reporting are built and maintained by BSM Holdings.',
          },
          {
            title: 'One firm accountable',
            description:
              'Property management, the trades and the accounting report into the same principal, so a maintenance failure and its cost are answered by the same people.',
          },
        ]}

        proof={{
          kind: 'seeking',
          image: '/images/property-management-picture.webp',
          imageAlt: 'Multifamily community exterior',
          title: 'The communities we take on',
          body: 'Turns and maintenance are performed by our own personnel, so a unit turn is scheduled rather than tendered — which is where vacancy days are actually won. That shapes the communities we want. Here is what we look for.',
          points: [
            'A community where turn time and response time can be improved by operating it differently',
            'Deferred maintenance we can scope before closing rather than discover in the first quarter',
            'An ownership that wants controllable expense reported separately from taxes, insurance and debt service',
            'Proximity to our Tulsa and Oklahoma City personnel, so turns and maintenance are ours rather than dispatched',
          ],
          href: '/contact',
          hrefLabel: 'Start a conversation',
        }}

        ctaTitle="Tell us about the community"
        ctaBody="Send us the rent roll, the turn log and the last twelve months of operating statements. We will tell you where we think the vacancy days are going."
      />
    </>
  );
};

export default Multifamily;
