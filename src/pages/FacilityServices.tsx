import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield, HardHat, Building2, Wrench, Trees, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BuildingSection from '@/components/BuildingSection';

const selfPerformedTrades = [
  {
    icon: HardHat,
    title: 'Construction & General Contracting',
    items: [
      'General contracting',
      'Ground-up construction',
      'Renovations & capital improvements',
      'Tenant improvements & build-outs',
      'Carpentry & framing',
      'Drywall, paint & finish work',
      'Flooring installation & replacement',
    ],
  },
  {
    icon: Building2,
    title: 'Roofing & Building Exterior',
    items: [
      'Roof replacement & repair',
      'Gutters & downspouts',
      'Siding, windows & doors',
      'Concrete, asphalt & parking lots',
      'Striping, signage & wayfinding',
      'Fencing & gates',
      'Pressure washing',
    ],
  },
  {
    icon: Wrench,
    title: 'Mechanical, Electrical & Plumbing',
    items: [
      'HVAC install, service & preventive maintenance',
      'Plumbing & drain service',
      'Water heaters & boilers',
      'Electrical service & repair',
      'Interior & exterior lighting',
      'Appliance repair & replacement',
    ],
  },
  {
    icon: Trees,
    title: 'Grounds & Seasonal',
    items: [
      'Lawncare & landscaping',
      'Irrigation install & repair',
      'Tree & shrub care',
      'Snow & ice removal',
      'Seasonal grounds preparation',
    ],
  },
  {
    icon: Sparkles,
    title: 'Interior Services & Unit Turns',
    items: [
      'Janitorial & commercial cleaning',
      'Unit turns & make-ready',
      'Carpet & hard-floor care',
      'Trash-out & junk removal',
      'Pest control',
    ],
  },
  {
    icon: Shield,
    title: 'Safety, Security & Restoration',
    items: [
      'Fire & life-safety systems',
      'Access control & locksmith',
      'Camera & security systems',
      'Storm damage & insurance restoration',
      '24/7 emergency response',
    ],
  },
];

const FacilityServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/facilities-management-hero-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Facility Services
            </h1>
            <p className="text-xl leading-relaxed text-white/90 drop-shadow-md">
              Facility Services, in house. One call, one accountable team.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Introduction */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Introduction</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Through BSM Holdings, LLC, every facility service and maintenance item within our properties is handled internally — construction, roofing, general contracting, HVAC, plumbing, electrical, lawncare, janitorial, and everything in between. We are not a broker of subcontractors. The work is performed by our own personnel.
                </p>
                <p>
                  That means no markup stacking, no waiting on a third party's schedule, and no finger-pointing when something goes wrong. One team is accountable for the condition of the asset, and that team answers to the owner.
                </p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mb-12">
              <h2 className="section-title text-hhp-navy mb-6">Our Facility Services Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Effective facility services are not about chasing work orders. It is about systems, accountability, and proactive execution.
                </p>
                <p>
                  We focus on maintaining the physical integrity, safety, and cleanliness of each asset by anticipating issues before they disrupt operations. Building systems, exterior conditions, life-safety components, and janitorial standards are managed through structured schedules, documented inspections, and disciplined vendor or in-house coordination.
                </p>
                <p>
                  Every facilities decision is evaluated through the lens of long-term performance, operating expense efficiency, and ownership objectives.
                </p>
              </div>
            </div>

            {/* Service Approach Chart */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-center mb-8 sm:mb-12 text-hhp-navy tracking-[0.06em] uppercase">
                OUR VERTICALLY INTEGRATED APPROACH
              </h2>
              <div className="w-full">
                <img 
                  src="/images/facilities-management-chart.webp" 
                  alt="Our Vertically Integrated Approach" 
                  className="w-full h-auto object-contain" loading="lazy" decoding="async" width={1291} height={326} />
              </div>
            </div>

            {/* Self-Performed Facility Services */}
            <div id="self-performed">
              <h2 className="section-title text-hhp-navy mb-6">What We Self-Perform</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-12 max-w-3xl">
                Licensed, insured, and on staff. If it keeps a building running, we do it ourselves — and we schedule it around the property, not around a subcontractor's backlog.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selfPerformedTrades.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.title} className="bg-white border border-border rounded-xl p-8">
                      <div className="w-12 h-12 rounded-lg bg-hhp-accent/10 flex items-center justify-center mb-6">
                        <Icon className="h-6 w-6 text-hhp-navy" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg sm:text-xl text-hhp-navy mb-4">
                        {group.title}
                      </h3>
                      <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-start">
                            <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-hhp-charcoal italic">
                Don't see it listed? Ask. If it falls inside the property line, it is almost certainly something we already handle.
              </p>
            </div>

            {/* Cost Control */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">What In-House Control Does to Cost</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal mb-10 max-w-3xl">
                <p>
                  Because the work is self-performed, we see what it actually costs — labor hours, materials, and time on site — rather than a subcontractor's invoice with margin already priced in. There is no markup on self-performed work, and no incentive to inflate scope.
                </p>
                <p>
                  That visibility compounds. We know what a roof repair costs across the portfolio, what a unit turn should run, and when a number is out of line. Owners get the same line-item detail we do, which is how costs come down and stay down.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  'No subcontractor markup on self-performed work',
                  'True cost visibility — labor, materials, and time, line by line',
                  'Portfolio-wide benchmarks for every recurring scope',
                  'Scheduling we control, so small issues never become capital events',
                  'Bids measured against what the work actually costs us',
                  'Real-time cost reporting to ownership, not a 30-day lag',
                ].map((point) => (
                  <div key={point} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base leading-relaxed text-hhp-charcoal">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-House Technology */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Systems Are In-House Too</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal max-w-3xl">
                <p>
                  Vertical integration does not stop at Facility Services. The asset management and operating systems that run our properties are our own — designed, built, and maintained by BSM Holdings. We are not paying to license someone else's software or waiting on a vendor's roadmap to fix what our operators need today.
                </p>
                <p>
                  Work orders, cost tracking, compliance, and owner reporting all live in one system we own. That is why cost data reaches owners in real time rather than at month-end, and why we can change how something works the week we decide it should work differently.
                </p>
              </div>
            </div>

            {/* Core Functions Accordion */}
            <div id="core-functions" className="pt-4">
              <h2 className="section-title text-hhp-navy mb-6">Core Facility Services Functions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* Engineering & Building Systems */}
                <AccordionItem value="engineering" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Engineering & Building Systems
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Mechanical, electrical, and plumbing system oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Preventive maintenance programs</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>In-house troubleshooting and repair</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Utility monitoring and optimization</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Life-safety system inspections and testing</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Preventive Maintenance & Inspections */}
                <AccordionItem value="maintenance" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Preventive Maintenance & Inspections
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Scheduled maintenance planning and execution</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Regular building and system inspections</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Condition assessments and reporting</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Maintenance history tracking</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Capital planning support based on condition data</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Self-Performed Execution */}
                <AccordionItem value="vendor" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Self-Performed Execution
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Every Facility Services discipline staffed in house</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>No subcontractor markup on self-performed work</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Work order management and oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Quality control and performance monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Specialty vendors engaged only where licensing requires</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Safety & Regulatory Compliance */}
                <AccordionItem value="safety" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Safety & Regulatory Compliance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Building code compliance monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Fire safety and life safety system maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>ADA compliance oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Environmental compliance tracking</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Safety inspection coordination</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Landscaping & Exterior Maintenance */}
                <AccordionItem value="landscaping" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Landscaping & Exterior Maintenance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Landscaping and grounds maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Exterior building maintenance and repairs</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Roof repair and replacement, self-performed</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Parking lot and pavement maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Seasonal maintenance coordination</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Parking & Common Area Management */}
                <AccordionItem value="parking" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Parking & Common Area Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Parking lot maintenance and striping</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Common area cleaning and maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Signage and wayfinding management</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lighting system maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Access control system oversight</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Commercial Cleaning & Janitorial Services */}
                <AccordionItem value="cleaning" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Commercial Cleaning & Janitorial Services
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>In-house janitorial personnel</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Cleaning schedule management</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Quality control and inspection</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Specialty and post-construction cleaning</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Supply management and procurement</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Closing Statement */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                  Our facility services platform is designed to protect asset condition, operational standards, and tenant experience today while preserving flexibility and value for future ownership decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The vertical-integration argument, told vertically. Also breaks up what
          was a ~4-screen unbroken white section with no imagery. */}
      <BuildingSection />

      {/* Mid-Page Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px] py-12 sm:py-16 lg:py-20">
        {/* LEFT: Large property/building image */}
        <div className="relative h-[400px] md:h-auto">
          <img 
            src="/images/about-us-image.jpg" 
            alt="Facility Services"
            className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={480} height={316} />
        </div>
        
        {/* RIGHT: Dark overlay with text and CTA */}
        <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              ABOUT US
            </h2>
            <p className="text-lg text-white mb-10 leading-relaxed">
              BSM Holdings delivers the full lifecycle of commercial real estate services—from 
              acquisitions and development to management, leasing, sales, and strategic 
              advisory—through a vertically integrated platform designed to operate, not just 
              advise. Proprietary technology supports disciplined underwriting, consistent 
              execution, and long-term asset alignment across every engagement.
            </p>
            <div className="pt-8 border-t border-gray-500">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 tracking-widest text-white">
                DISCOVER<br/>WHAT WE DO
              </h3>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-gray-800 px-8 py-4 rounded font-heading font-semibold tracking-[0.06em] uppercase hover:bg-gray-100 transition"
                onClick={() => {
                  trackButtonClick('contact_us_cta', 'facility_services_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With & How We Differ */}
      <section className="bg-white section-spacing pt-12 sm:pt-16 lg:pt-20">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Who We Work With */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">Who We Work With</h2>
                </div>
                <div className="space-y-3 text-hhp-charcoal">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Private commercial property owners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Partnerships and ownership groups</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Boards and associations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Owner-users with operational complexity</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Assets requiring hands-on physical and cleanliness oversight</span>
                  </div>
                </div>
              </div>

              {/* How We Differ */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">How We Differ</h2>
                </div>
                <div className="space-y-3 text-hhp-charcoal">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Selective portfolio size to ensure accountability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Direct oversight — no call-center model</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Facility Services performed in house — no subcontractor markup</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Integrated property management and advisory insight</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Clear documentation and transparent reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative min-h-[300px] sm:min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat py-12 sm:py-16">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/consulting-image.webp)' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container-premium w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
              INTERESTED IN WORKING<br/>FOR OUR TEAM?
            </h2>
            <Link 
              to="/opportunities" 
              className="bg-white text-hhp-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 flex-shrink-0"
              onClick={() => {
                trackButtonClick('view_opportunities_cta', 'facility_services_careers');
                trackLinkClick('View Opportunities', '/opportunities');
              }}
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="border border-gray-300 rounded-lg my-4 sm:my-6 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-hhp-navy">
                HAVE MORE QUESTIONS?
              </h3>
              <Link 
                to="/faq" 
                className="bg-hhp-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition flex-shrink-0"
                onClick={() => {
                  trackButtonClick('visit_faq_cta', 'facility_services_faq');
                  trackLinkClick('Visit our FAQ page', '/faq');
                }}
              >
                Visit our FAQ page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-premium text-center">
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('discuss_facility_services_alignment', 'facility_services_cta');
              trackLinkClick('Discuss Facility Services Alignment', '/contact');
            }}
          >
            Discuss Facility Services Alignment
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FacilityServices;

