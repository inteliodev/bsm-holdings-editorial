import AssetTypePage from '@/components/AssetTypePage';

const Retail = () => {
  return (
    <AssetTypePage
      heroImage="/images/retail-image.jpg"
      eyebrow="Asset Class"
      title="Retail"
      tagline="A centre is only as strong as the tenant paying the smallest rent"
      heroButtonText="Talk to us about a centre"
      mark="retail"

      marketText="Retail rewards operators who understand that the rent roll is a chain, not a list. One inline vacancy next to an anchor changes the traffic pattern for everyone around it, and a co-tenancy clause can turn a single departure into a rent reduction across half the centre. The parking lot, the lighting and the condition of the common area are not cosmetics — they are what a customer decides on before they decide what to buy, and what a tenant points to when a renewal comes up."
      valuePropositionTitle="Where HHP fits"
      valueProposition="We hold the centre's operations and its trades in one firm. Lot repairs, lighting, landscaping and janitorial are performed by our own personnel, so common-area condition is a decision we make rather than a vendor's schedule we wait on — and its cost reports as labor and materials rather than an invoice with margin priced in."

      metricsIntro="Retail performance shows up in the tenant's numbers before it shows up in yours. These are what we hold against a centre."
      metrics={[
        {
          label: 'Occupancy cost ratio',
          detail:
            'Rent plus recoveries against tenant sales. It is the earliest honest signal of whether a renewal is achievable, and it moves before the tenant tells you anything.',
        },
        {
          label: 'Co-tenancy exposure',
          detail:
            'Which leases carry co-tenancy protection and what triggers them, mapped against the actual expiration schedule rather than discovered when an anchor gives notice.',
        },
        {
          label: 'Sales per square foot',
          detail:
            'Where reporting is required by lease, tracked by tenant and by category so a soft category is not mistaken for a soft centre.',
        },
        {
          label: 'Common area cost per square foot',
          detail:
            'Lot, lighting, landscaping and janitorial, carried per square foot and reconciled through the year rather than at CAM true-up.',
        },
        {
          label: 'Expiration ladder',
          detail:
            'Anchor and inline expirations laid against each other, because two inline leases rolling in the same quarter as an anchor is a different problem than three rolling apart.',
        },
        {
          label: 'Lot and lighting condition',
          detail:
            'Surface, striping, drainage and light levels tracked on a cycle. Deferred paving is the most visible deferred maintenance a centre has.',
        },
      ]}

      services={{
        propertyManagement: {
          description:
            'Day-to-day operation of the centre by HHP personnel, with the common area treated as the asset it is rather than an expense line to be minimised.',
          services: [
            'Day-to-day centre operations and oversight',
            'Tenant relations and service request coordination',
            'Vendor management and service quality oversight',
            'Preventive maintenance and common area management',
            'Financial management, budgeting, and reporting',
          ],
        },
        advisorySiteSelection: {
          description:
            'Trade-area work grounded in what the site can actually support — access, visibility, parking ratio and the competitive set as it exists, not as a report describes it.',
          services: [
            'Market and trade-area analysis',
            'Operational due diligence and asset reviews',
            'Transition planning for new ownership or management',
            'Asset strategy development and repositioning support',
          ],
        },
        investmentSales: {
          description:
            'We underwrite from the expense side because we operate centres, so the CAM assumptions in our model are the ones we would have to deliver on.',
          services: [
            'Valuation and underwriting support',
            'Stakeholder coordination and transaction execution support',
            'Operational transition planning',
            'Post-transaction management integration',
          ],
        },
        landlordRepresentation: {
          description:
            'Store openings coordinated against the operating calendar, so a delivery date promised in a lease is one the centre can actually meet.',
          services: [
            'Coordination between leasing teams and property operations',
            'Tenant onboarding and store opening coordination',
            'Lease compliance oversight',
            'Support for renewals and tenant retention',
          ],
        },
        tenantRepresentation: {
          description:
            'Tenants in a centre talk to each other. Logging every request and its resolution against both the space and the operator is what keeps that conversation on your side.',
          services: [
            'Tenant communication and issue resolution',
            'Coordination with service providers and contractors',
            'Stakeholder reporting and operational updates',
          ],
        },
        acquisitionsDevelopment: {
          description:
            'Build-outs, façade work and lot reconstruction run through our own general contracting, which removes a layer of markup from every project above the maintenance threshold.',
          services: [
            'Acquisition underwriting and operational review',
            'Development and redevelopment advisory',
            'Operational setup for new or repositioned centres',
            'Stabilization planning and ongoing management integration',
          ],
        },
      }}
      serviceTitles={{
        investmentSales: 'Transaction Advisory',
        landlordRepresentation: 'Leasing & Occupancy Coordination',
        tenantRepresentation: 'Tenant & Stakeholder Relations',
      }}
      servicesTitle="Integrated services for retail"
      servicesSubtitle="Six capabilities under one firm, so no part of the centre is somebody else's responsibility."

      technologyTitle="The HHP advantage for retail"
      technologyAdvantages={[
        {
          title: 'Common area maintained, not just budgeted',
          description:
            'Lot, lighting, landscaping and janitorial are performed by our own personnel. Condition becomes a scheduling decision rather than a vendor availability problem, and the cost reports as labor and materials.',
        },
        {
          title: 'Operations aligned to tenant performance',
          description:
            'A tenant struggling on occupancy cost is a leasing problem twelve months early. Because operations and reporting sit in the same firm, that signal reaches the leasing conversation while it is still actionable.',
        },
        {
          title: 'CAM without the year-end surprise',
          description:
            'Recoverable and non-recoverable spend reconciled through the year rather than at true-up, so neither the owner nor the tenant is arguing about a number that is already twelve months old.',
        },
        {
          title: 'Cost visible at the line item',
          description:
            'No subcontractor markup on self-performed work, and specialty vendors engaged only where licensing requires it. An owner can see what a repair cost rather than what it was billed at.',
        },
        {
          title: 'One firm accountable',
          description:
            'Property management, the trades and the accounting report into the same principal, so a lighting failure and its cost are answered by the same people.',
        },
      ]}

      proof={{
        kind: 'seeking',
        image: '/images/advisory-site-selection-image.webp',
        imageAlt: 'Retail trade area',
        title: 'What we underwrite for in retail',
        body: 'HHP does not currently operate retail centres — the managed portfolio is senior and affordable housing in Pryor, Oklahoma. We underwrite and advise on retail, and these are the conditions under which we will take a centre on.',
        points: [
          'A centre where common-area condition is a solvable problem rather than a deferred capital event',
          'A rent roll we can read against tenant occupancy cost, not only against market rent',
          'Co-tenancy and exclusivity language we can review before closing',
          'Proximity to our Tulsa and Oklahoma City personnel, so lot, lighting and janitorial are ours rather than dispatched',
        ],
        href: '/contact',
        hrefLabel: 'Start a conversation',
      }}

      ctaTitle="Tell us about the centre"
      ctaBody="Send us the rent roll, the CAM reconciliation and a walk of the lot. We will tell you what we think it costs to run, and what we would fix first."
    />
  );
};

export default Retail;
