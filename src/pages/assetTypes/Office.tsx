import AssetTypePage from '@/components/AssetTypePage';

const Office = () => {
  return (
    <AssetTypePage
      heroImage="/images/office-image.jpg"
      eyebrow="Asset Class"
      title="Office"
      tagline="Where the operating line, not the rent roll, decides the outcome"
      heroButtonText="Talk to us about an office asset"
      mark="office"

      marketText="Office is the class where a good rent roll can hide a bad building. Tenants renew on how the space runs — whether the air handler holds temperature through an August afternoon, whether a service request is closed the same day, whether the CAM reconciliation arrives without surprises. Those are operating questions, and they are settled long before a renewal is negotiated. Owners are carrying longer decision cycles, closer scrutiny of building performance and tenants who compare buildings on experience rather than asking rent."
      valuePropositionTitle="Where BSM Holdings fits"
      valueProposition="We operate office assets rather than advise on them from a distance. Property management, the facility trades and the accounting sit in one firm, so the people closing a work order and the people reporting its cost answer to the same principal. That is what makes an operating number defensible when an owner asks what changed and why."

      metricsIntro="Office assets fail slowly and in the expense line. These are the figures we hold against every building we operate."
      metrics={[
        {
          label: 'Cost per occupied square foot',
          detail:
            'Operating cost carried against occupied area rather than gross. A half-empty floor still runs its air handler, and a blended number hides that.',
        },
        {
          label: 'Tenant improvement and leasing cost',
          detail:
            'Tracked per suite rather than averaged across the building, so the true cost of a renewal can be compared against the true cost of a new deal.',
        },
        {
          label: 'Load factor',
          detail:
            'The gap between rentable and usable area is what a tenant believes they are paying for. We check it before it is quoted, not after it is disputed.',
        },
        {
          label: 'Expense recovery',
          detail:
            'Recoverable against non-recoverable spend, reconciled through the year rather than discovered at CAM reconciliation.',
        },
        {
          label: 'Building systems runtime',
          detail:
            'Mechanical, electrical and life-safety equipment tracked by runtime and fault history. Deferred maintenance on a chiller becomes a capital event.',
        },
        {
          label: 'Renewal exposure',
          detail:
            'A rolling expiration schedule weighted by suite size, so a single departure is planned for rather than absorbed.',
        },
      ]}

      services={{
        propertyManagement: {
          description:
            'On-site operation of the building by BSM Holdings personnel — the same people every week, who know which unit runs hot and which tenant calls at 4pm on a Friday.',
          services: [
            'Day-to-day building operations and on-site oversight',
            'Tenant relations and service request coordination',
            'Vendor management and service quality oversight',
            'Preventive maintenance and building systems monitoring',
            'Financial management, budgeting, and reporting',
          ],
        },
        advisorySiteSelection: {
          description:
            'Operational due diligence before a decision is committed — what the building will actually cost to run, not what the offering memorandum projects.',
          services: [
            'Market and submarket analysis',
            'Operational due diligence and asset reviews',
            'Transition planning for new ownership or management',
            'Asset strategy development and repositioning support',
          ],
        },
        investmentSales: {
          description:
            'We underwrite from the expense side because we operate the buildings, which tends to produce a different number than a purely market-derived one.',
          services: [
            'Valuation and underwriting support',
            'Stakeholder coordination and transaction support',
            'Operational transition planning',
            'Post-transaction management integration',
          ],
        },
        landlordRepresentation: {
          description:
            'Leasing decisions coordinated with the people who will have to deliver on them, so a promise made at signature is one operations can keep.',
          services: [
            'Coordination between leasing teams and property operations',
            'Tenant onboarding and move-in coordination',
            'Lease compliance oversight',
            'Support for renewal and retention initiatives',
          ],
        },
        tenantRepresentation: {
          description:
            'Every call, request and follow-up logged against both the suite and the tenant, so the full history of a relationship is retrievable rather than remembered.',
          services: [
            'Tenant communication and issue resolution',
            'Stakeholder reporting and coordination',
            'Support for tenant improvement and service workflows',
          ],
        },
        acquisitionsDevelopment: {
          description:
            'Build-outs and capital projects run by our own general contracting, which removes a layer of markup from every project above the maintenance threshold.',
          services: [
            'Acquisition underwriting and operational review',
            'Development and redevelopment advisory',
            'Operational setup for new or repositioned assets',
            'Stabilization planning and ongoing management integration',
          ],
        },
      }}
      serviceTitles={{
        investmentSales: 'Transaction Advisory',
        landlordRepresentation: 'Leasing & Occupancy Coordination',
        tenantRepresentation: 'Tenant & Stakeholder Relations',
      }}
      servicesTitle="Integrated services for office"
      servicesSubtitle="Six capabilities under one firm, so no part of the building is somebody else's responsibility."

      technologyTitle="The BSM Holdings advantage for office"
      technologyAdvantages={[
        {
          title: 'Self-performed building services',
          description:
            'Mechanical, electrical, plumbing, janitorial and general contracting are performed by our own personnel. There is no subcontractor markup on self-performed work, and specialty vendors are engaged only where licensing requires it.',
        },
        {
          title: 'Cost visible at the line item',
          description:
            'Because the work is ours, a repair reports as labor hours, materials and time on site rather than a vendor invoice with margin already priced in. An owner can see what a thing cost, not what it was billed at.',
        },
        {
          title: 'Reporting without the month-end lag',
          description:
            'Operating data reaches owners as it lands rather than in a summary assembled weeks later. The systems that produce it are built and maintained by BSM Holdings, so the reporting changes when the way we operate changes.',
        },
        {
          title: 'Operations and leasing in one conversation',
          description:
            'Tenant mix, renewal strategy and asset positioning are decided with the operating numbers in the room, not reconciled against them afterwards.',
        },
        {
          title: 'One firm accountable',
          description:
            'Property management, the trades and the accounting report into the same principal. When something goes wrong there is no interval spent establishing whose problem it is.',
        },
      ]}

      proof={{
        kind: 'seeking',
        image: '/images/leasing-representation-image.jpg',
        imageAlt: 'Commercial office interior',
        title: 'The office assets we take on',
        body: 'We underwrite from the expense side because we self-perform the trades and hold the accounting, which tends to produce a more defensible number than a purely market-derived one. That shapes the buildings we want. Here is what we look for.',
        points: [
          'A building where the operating line can be improved by operating it better, not only by re-leasing it',
          'Mechanical and life-safety systems we can assess before closing, not inherit',
          'An ownership that wants line-item cost reporting rather than a management fee and a quarterly summary',
          'Proximity to our Oklahoma City personnel, so the trades are ours rather than dispatched',
        ],
        href: '/contact',
        hrefLabel: 'Start a conversation',
      }}

      ctaTitle="Tell us about the building"
      ctaBody="Send us the rent roll and the last twelve months of operating statements. We will tell you what we think it costs to run, and what we would change first."
    />
  );
};

export default Office;
