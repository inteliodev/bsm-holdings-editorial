import AssetTypePage from '@/components/AssetTypePage';

const SeniorHousing = () => {
  return (
    <AssetTypePage
      heroImage="/images/senior-housing-image.jpg"
      eyebrow="Asset Class"
      title="Senior Housing"
      tagline="The class we operate ourselves, every day"
      heroButtonText="Talk to us about a community"
      mark="senior"

      marketText="Senior housing is the least forgiving class to operate and the easiest to under-resource. Residents are long-tenured, so a community's reputation is built over years and spent in weeks. Response time is not a service metric here — a failed water heater or a lift that will not run is a safety matter for someone who cannot easily work around it. And where the community is federally assisted, the compliance calendar is not administrative overhead sitting beside operations; it is the operation. Miss a recertification window and the subsidy that funds the building is in question."
      valuePropositionTitle="Where HHP fits"
      valueProposition="This is a class we operate directly, with the property management, the trades and the accounting all in house. What we describe on this page is not a capability statement — it is how we run senior communities we are accountable for today."

      metricsIntro="These are the figures we hold against the communities we operate, not a generic list."
      metrics={[
        {
          label: 'Occupancy and waitlist depth',
          detail:
            'Occupancy on its own says nothing about resilience. Waitlist depth is what determines whether a move-out is a two-week gap or a two-month one.',
        },
        {
          label: 'Recertification timeliness',
          detail:
            'Annual and interim certifications tracked against their due dates rather than reconstructed at audit. The calendar is monitored continuously, not assembled ahead of a review.',
        },
        {
          label: 'Inspection readiness',
          detail:
            'Unit and site condition held to inspection standard year round, so a scheduled inspection is a confirmation rather than a scramble.',
        },
        {
          label: 'Work order response time',
          detail:
            'Hours from report to resolution. In a senior community this is a safety measure first and a satisfaction measure second, which is why the trades are ours.',
        },
        {
          label: 'Resident tenure',
          detail:
            'Long tenure is the point of this class. It is also the clearest signal that the building is being run well, and it moves slowly enough to be trusted.',
        },
        {
          label: 'Subsidy reconciliation',
          detail:
            'Assistance payments reconciled against the rent roll each period, so a discrepancy is found in the month it occurs.',
        },
      ]}

      services={{
        propertyManagement: {
          description:
            'On-site operation by HHP personnel who know the residents by name — which in a community with this tenure profile is an operating advantage, not a courtesy.',
          services: [
            'Day-to-day community operations and on-site oversight',
            'Facilities management and preventive maintenance',
            'Vendor coordination and service quality oversight',
            'Financial management, budgeting, and reporting',
            'Resident relations and community standards enforcement',
          ],
        },
        advisorySiteSelection: {
          description:
            'Feasibility and diligence informed by operating three of these communities ourselves, including what the compliance load actually costs to carry.',
          services: [
            'Market and demographic analysis',
            'Feasibility studies and operational due diligence',
            'Transition planning for new ownership or operators',
            'Long-term asset and operational strategy development',
          ],
        },
        investmentSales: {
          description:
            'We underwrite from the expense side because we operate this class, so the staffing and compliance assumptions in our model are ones we live with.',
          services: [
            'Valuation and underwriting support',
            'Buyer and stakeholder coordination',
            'Transaction execution support',
            'Post-transaction operational and management transitions',
          ],
        },
        landlordRepresentation: {
          description:
            'Occupancy managed through the waitlist rather than reacted to at notice, so the gap between one resident and the next stays short.',
          services: [
            'Occupancy strategy development',
            'Move-in coordination and resident onboarding',
            'Coordination between leasing, care, and operations teams',
            'Retention-focused resident engagement support',
          ],
        },
        tenantRepresentation: {
          description:
            'Communication that includes families, because in this class the person raising a concern is often not the person living in the unit.',
          services: [
            'Resident communication and issue resolution',
            'Family engagement and reporting coordination',
            'Support for care-related operational workflows',
            'Alignment between management, staff, and families',
          ],
        },
        acquisitionsDevelopment: {
          description:
            'Capital work and unit renovation run through our own general contracting, scheduled around residents who are at home during the working day.',
          services: [
            'Acquisition underwriting and operational review',
            'Development and redevelopment advisory',
            'Operational setup for staffing, systems, and services',
            'Lease-up and stabilization planning',
          ],
        },
      }}
      serviceTitles={{
        investmentSales: 'Transaction Advisory',
        landlordRepresentation: 'Leasing & Occupancy Management',
        tenantRepresentation: 'Resident & Family Engagement',
      }}
      servicesTitle="Integrated services for senior housing"
      servicesSubtitle="Six capabilities under one firm — the same structure we run our own communities on."

      technologyTitle="The HHP advantage for senior housing"
      technologyAdvantages={[
        {
          title: 'We operate this class ourselves',
          description:
            'Everything described here is drawn from senior communities we are accountable for, not from a capability deck — including the HUD Section 202 campus at Pryor, Oklahoma.',
        },
        {
          title: 'Self-performed trades, so response is immediate',
          description:
            'Plumbing, electrical, HVAC, roofing and grounds are performed by our own personnel. For residents who cannot easily work around a failure, the difference between same-day and next-week is the whole service.',
        },
        {
          title: 'Compliance carried continuously',
          description:
            'Certifications, recertifications and inspection readiness are monitored year round rather than reconstructed ahead of a review, so files stay audit-ready as a matter of course.',
        },
        {
          title: 'Cost visible at the line item',
          description:
            'Work reports as labor hours, materials and time on site rather than a vendor invoice with margin already priced in. There is no subcontractor markup on self-performed work, and specialty vendors are engaged only where licensing requires it.',
        },
        {
          title: 'One firm accountable',
          description:
            'Property management, the trades and the accounting report into the same principal. Owners review the same figures we do, as they land.',
        },
      ]}

      proof={{
        kind: 'operating',
        image: '/images/properties/grounds-oak-tree.webp',
        imageAlt:
          'Single-storey senior homes under mature oaks at the Pryor campus',
        title: 'Mayor Wallis Manor and Venture Villas',
        body: 'One of the campuses we operate: three HUD Section 202 communities at 901 SE 9th Street in Pryor, Oklahoma. Single-storey one-bedroom homes with a community room, a resident library and shaded grounds, run with the property management, the trades and the accounting all in house.',
        stats: [
          { value: '3', label: 'Communities on campus' },
          { value: '85', label: 'Units on campus' },
          { value: 'Section 202', label: 'Program' },
        ],
        href: '/portfolio',
        hrefLabel: 'See the portfolio',
      }}

      ctaTitle="Talk to us about a senior community"
      ctaBody="We operate this class every day. Send us the rent roll and the compliance calendar, and we will tell you what we would expect to find."
    />
  );
};

export default SeniorHousing;
