import AssetTypePage from '@/components/AssetTypePage';

const HudAffordable = () => {
  return (
    <AssetTypePage
      heroImage="/images/affordable-housing-image.jpeg"
      eyebrow="Asset Class"
      title="Affordable Housing"
      tagline="Where the compliance calendar is the operation, not paperwork beside it"
      heroButtonText="Talk to us about a property"
      mark="affordable"

      marketText="In assisted housing the regulatory file and the building are the same asset. A missed recertification window, an unresolved income discrepancy or a unit that will not pass inspection does not produce an administrative note — it puts the subsidy that funds the property in question. That is a different risk profile from conventional multifamily, and it rewards operators who treat compliance as a continuous operating discipline rather than a reporting exercise performed twice a year. It also punishes deferred maintenance harder, because the inspection standard is external and it does not negotiate."
      valuePropositionTitle="Where HHP fits"
      valueProposition="We operate HUD-assisted housing directly. Compliance administration, the maintenance that keeps units inspection-ready and the accounting that reconciles the subsidy all sit inside one firm, which is what allows a discrepancy to be found in the month it occurs rather than at audit."

      metricsIntro="Assisted housing is held to an external standard on a fixed calendar. These are the figures we carry continuously."
      metrics={[
        {
          label: 'Recertification calendar',
          detail:
            'Annual and interim certifications tracked against due dates throughout the year, so the file is current as a matter of routine rather than reconstructed ahead of a review.',
        },
        {
          label: 'Income verification discrepancies',
          detail:
            'Verification exceptions worked as they surface. An unresolved discrepancy is a finding waiting to be written, and it only gets harder to reconstruct with time.',
        },
        {
          label: 'Inspection readiness',
          detail:
            'Unit and site condition held to the inspection standard year round. The standard is external and fixed, so the only variable an operator controls is whether the property is ready before the notice arrives.',
        },
        {
          label: 'Assistance payment reconciliation',
          detail:
            'Subsidy reconciled against the rent roll each period, so a variance is identified in the month it occurs rather than at year end.',
        },
        {
          label: 'Utility allowance currency',
          detail:
            'Allowances reviewed on schedule, because a stale allowance quietly misstates what residents pay and what the property collects.',
        },
        {
          label: 'Waitlist administration',
          detail:
            'Applications, preferences and placement maintained continuously, which is what keeps a vacancy short and the selection defensible.',
        },
      ]}

      services={{
        propertyManagement: {
          description:
            'On-site operation with compliance administration held in house, so the people maintaining the units and the people maintaining the file work for the same firm.',
          services: [
            'Day-to-day property and on-site staff oversight',
            'Compliance administration and documentation',
            'Tenant eligibility, certifications, and recertifications',
            'Maintenance coordination and capital planning',
            'Financial reporting aligned with program and lender requirements',
          ],
        },
        advisorySiteSelection: {
          description:
            'Regulatory feasibility assessed with the operating consequence attached — what the program actually requires of the property year to year.',
          services: [
            'Program and regulatory feasibility analysis',
            'Operational due diligence and compliance risk assessment',
            'Transition planning for new ownership or management',
            'Asset strategy development for stabilized and value-add properties',
          ],
        },
        investmentSales: {
          description:
            'Underwriting that reflects the affordability structure rather than treating restricted rents as a discount to market, and that prices the compliance load honestly.',
          services: [
            'Valuation and underwriting support reflecting affordability structures',
            'Buyer and stakeholder coordination',
            'Transaction execution support',
            'Post-transaction operational and compliance transition planning',
          ],
        },
        landlordRepresentation: {
          description:
            'Occupancy managed against the restriction set, so a leasing decision never quietly puts the property out of compliance.',
          services: [
            'Occupancy strategy development',
            'Rent and income restriction oversight',
            'Leasing performance monitoring',
            'Coordination between leasing and compliance functions',
          ],
        },
        tenantRepresentation: {
          description:
            'Qualification and placement handled with the documentation trail built as it goes, rather than assembled afterwards.',
          services: [
            'Tenant qualification and program alignment',
            'Housing placement and coordination support',
            'Lease administration and compliance review',
            'Stakeholder communication and reporting',
          ],
        },
        acquisitionsDevelopment: {
          description:
            'Rehabilitation and capital work run through our own general contracting, scheduled around occupied units and an inspection calendar that does not move.',
          services: [
            'Acquisition underwriting and regulatory review',
            'Development feasibility and advisory support',
            'Operational setup for affordability requirements',
            'Lease-up and stabilization planning',
          ],
        },
      }}
      serviceTitles={{
        investmentSales: 'Transaction Advisory',
        landlordRepresentation: 'Leasing & Occupancy Management',
        tenantRepresentation: 'Tenant & Stakeholder Representation',
      }}
      servicesTitle="Integrated services for affordable housing"
      servicesSubtitle="Six capabilities under one firm — the same structure we run our own HUD-assisted communities on."

      technologyTitle="The HHP advantage for affordable housing"
      technologyAdvantages={[
        {
          title: 'We operate HUD-assisted housing ourselves',
          description:
            'The compliance discipline described here is the one we are audited on, not a service description — including at the Section 202 campus we run in Pryor, Oklahoma.',
        },
        {
          title: 'Compliance carried continuously',
          description:
            'Certifications, recertifications and inspection readiness monitored year round rather than reconstructed ahead of a review, so the file stays current as a matter of routine.',
        },
        {
          title: 'Self-performed trades keep units inspection-ready',
          description:
            'Plumbing, electrical, HVAC, roofing and grounds are performed by our own personnel, so a unit deficiency is corrected on our schedule rather than a vendor’s. Specialty vendors are engaged only where licensing requires it.',
        },
        {
          title: 'Cost visible at the line item',
          description:
            'Work reports as labor hours, materials and time on site rather than a vendor invoice with margin already priced in — which matters more, not less, where budgets are program-constrained.',
        },
        {
          title: 'One firm accountable',
          description:
            'Property management, the trades, compliance and the accounting report into the same principal, so a discrepancy is found and answered in the same place.',
        },
      ]}

      proof={{
        kind: 'operating',
        image: '/images/properties/entrance-sign.webp',
        imageAlt:
          'Entrance sign at Mayor Wallis Manor and Venture Villa in Pryor, Oklahoma',
        title: 'The Pryor campus, operated in house',
        body: 'One of the properties we operate: Mayor Wallis Manor and Venture Villas I and II, on one campus at 901 SE 9th Street in Pryor, Oklahoma — income-restricted one-bedroom homes for elderly residents, with compliance administration, maintenance and accounting all held by HHP.',
        stats: [
          { value: '3', label: 'Communities on campus' },
          { value: '85', label: 'Units on campus' },
          { value: 'Section 202', label: 'Program' },
        ],
        href: '/portfolio',
        hrefLabel: 'See the portfolio',
      }}

      ctaTitle="Talk to us about an assisted property"
      ctaBody="We carry this compliance load ourselves. Send us the rent roll and the certification calendar, and we will tell you what we would expect to find."
    />
  );
};

export default HudAffordable;
