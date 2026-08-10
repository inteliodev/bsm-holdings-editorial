import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import DashboardShowcase from '@/components/DashboardShowcase';
import DisciplinesSection from '@/components/DisciplinesSection';
import SystemStack from '@/components/SystemStack';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

/**
 * Drawn marks for the three pillars, in the same thin-stroke language as the
 * scrollytelling diagrams. They replaced lucide's Layers / BarChart3 / Settings
 * — a stack of sheets, a bar chart and a cog say "generic software product",
 * which is the one thing this page must not say.
 */
const PillarMark = ({ shape }: { shape: 'platforms' | 'analytics' | 'custom' }) => (
  <svg
    viewBox="0 0 40 40"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {shape === 'platforms' && (
      <>
        <rect x="7" y="7" width="26" height="7" />
        <rect x="7" y="16.5" width="26" height="7" />
        <rect x="7" y="26" width="26" height="7" />
        <path d="M20 14v2.5M20 23.5V26" />
      </>
    )}
    {shape === 'analytics' && (
      <>
        <path d="M7 7v26h26" />
        <path d="M13 27v-6M20 27v-11M27 27v-17" />
        <path d="M11 15l7-6 6 5 8-8" />
      </>
    )}
    {shape === 'custom' && (
      <>
        <circle cx="20" cy="20" r="4.5" />
        <circle cx="8" cy="9" r="3" />
        <circle cx="32" cy="9" r="3" />
        <circle cx="20" cy="34" r="3" />
        <path d="M10.5 11.2L17 17M29.5 11.2L23 17M20 24.5V31" />
      </>
    )}
  </svg>
);

const Technology = () => {
  const technologyPillars = [
    {
      shape: 'platforms' as const,
      title: "Proprietary Platforms",
      snippet: "Purpose-built systems power transaction and operations intelligence across acquisitions, leasing, and property management. Real-time comps, absorption forecasts, delinquency/turnover risk scores, and KPI dashboards turn data into action.",
      highlights: [
        "Live comps, cap-rate curves, and sales velocity",
        "Rent/absorption forecasting and tenant churn risk",
        "Owner dashboards: NOI, delinquency, expense variance"
      ],
      href: "/technology/platforms"
    },
    {
      shape: 'analytics' as const,
      title: "Advisory & Analytics",
      snippet: "Dashboards, comps, underwriting models, and portfolio intelligence that make strategy measurable. From market screening and site scoring to feasibility and sensitivity analysis, we deliver boardroom-ready insights.",
      highlights: [
        "Trade area/drive-time heatmaps, workforce analytics",
        "Feasibility + sensitivity models (IRR, payback, downside cases)",
        "Portfolio KPIs, variance tracking, and benchmarking"
      ],
      href: "/technology/advisory-analytics"
    },
    {
      shape: 'custom' as const,
      title: "Custom Solutions",
      snippet: "Bespoke databases, workflow automations, and client-tailored websites/microsites that integrate with your stack (Yardi, RealPage, Google Workspace, n8n, etc.).",
      highlights: [
        "HUD compliance automation (50059/EIV logs)",
        "Deal rooms, listing microsites, and marketing automation",
        "Data pipelines + executive dashboards (owner/lender views)"
      ],
      href: "/technology/custom-solutions"
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Discovery & Goals",
      description: "KPIs, systems, constraints"
    },
    {
      step: "02", 
      title: "Data Intake",
      description: "Connect PMS/ERP/CRM + market feeds"
    },
    {
      step: "03",
      title: "Modeling & Dashboards", 
      description: "Forecasts, comps, risk scoring"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Automations, training, change mgmt"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Quarterly reviews, roadmap, new features"
    }
  ];

  // Mechanism, not outcome metrics. The figures that used to sit here ("2×",
  // "10–15%", "6–10% NOI improvement potential") were not sourced to any portfolio,
  // period, or client, so they could not survive a prospect asking "compared to what?"
  // What is stated below is verifiable by any owner we work with.
  const kpiCards = [
    {
      title: "Same Numbers, Same Time",
      description: "Owners see the operating data we see, as it lands — not in a month-end summary assembled after the fact."
    },
    {
      title: "Cost at the Line-Item Level",
      description: "Because the work is self-performed, reporting reflects labor hours, materials, and time on site rather than a subcontractor invoice with margin already priced in."
    },
    {
      title: "Built and Maintained In House",
      description: "We build our asset management and operating systems rather than licensing them, so the software changes when the way we operate changes."
    }
  ];


  const faqItems = [
    {
      question: "How do your platforms integrate with our existing systems?",
      answer: "Our technology is designed to integrate with common accounting, property management, CRM, and reporting platforms through APIs and structured data workflows. We prioritize minimizing disruption by working within your existing stack wherever possible, rather than forcing full system replacement."
    },
    {
      question: "What platforms do you support integration with?",
      answer: "We support integrations with leading property management, accounting, CRM, document management, and analytics platforms. Specific integrations depend on your current systems and scope, and we assess compatibility during onboarding to ensure a clean and secure connection."
    },
    {
      question: "What's the typical implementation timeline?",
      answer: "Implementation timelines vary by scope, but most engagements range from 2–6 weeks. Simpler integrations can move faster, while larger portfolios or custom workflows may require phased rollouts."
    },
    {
      question: "How does the data migration process work?",
      answer: "We follow a structured migration process that includes data mapping, validation, testing, and reconciliation before go-live. Our goal is to ensure accuracy, continuity, and minimal operational downtime throughout the transition."
    },
    {
      question: "What training and support do you provide?",
      answer: "We provide role-based training for leadership, operators, and on-site teams, along with documentation and live support during rollout. Post-implementation support is available to ensure adoption, performance, and long-term success."
    },
    {
      question: "Can the platforms be customized to our specific workflows?",
      answer: "Yes. Our technology is designed to be configurable and adaptable to your operational workflows, reporting needs, and approval structures. Customization is guided by best practices to avoid unnecessary complexity while preserving flexibility."
    },
    {
      question: "What security and compliance standards do you meet?",
      answer: "We follow industry-standard security practices including access controls, role-based permissions, encrypted data handling, and auditability. Compliance considerations are addressed based on your asset type, jurisdiction, and operational requirements."
    },
    {
      question: "How does pricing work?",
      answer: "Pricing is based on scope, portfolio size, and level of customization or support required. We offer transparent, engagement-based pricing so clients understand costs upfront without hidden usage fees."
    },
    {
      question: "What happens to our data?",
      answer: "Your data remains your property. We maintain clear data ownership, access controls, and export capabilities to ensure transparency, portability, and long-term security."
    },
    {
      question: "How do you handle ongoing support and updates?",
      answer: "We provide ongoing support, performance monitoring, and system updates as part of our technology engagements. Enhancements and improvements are rolled out intentionally to maintain stability while evolving with your operational needs."
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>HHP Asset Management | Technology</title>
        <meta 
          name="description" 
          content="The asset management and operating systems HHP builds and maintains in house — so owners see line-item cost as it happens, not a month-end summary." 
        />
        <meta 
          name="keywords" 
          content="real estate technology, proprietary platforms, property management software, real estate analytics, owner dashboards, custom solutions"
        />
        <meta property="og:title" content="HHP Asset Management | Technology" />
        <meta property="og:description" content="The asset management and operating systems HHP builds and maintains in house — so owners see line-item cost as it happens, not a month-end summary." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hhpasset.com/technology" />
        <meta property="og:image" content="https://hhpasset.com/images/hhp-social-share.png" />
        <link rel="canonical" href="https://hhpasset.com/technology" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HHP Asset Management | Technology" />
        <meta name="twitter:description" content="Explore HHP's Technology: Proprietary Platforms, Advisory & Analytics, and Custom Solutions." />
        <meta name="twitter:image" content="https://hhpasset.com/images/hhp-social-share.png" />
      </Helmet>

      <Layout>
        {/*
          Hero. Was a 6.87 MB stock video with no `poster`, so the page opened
          as a black rectangle until it downloaded — and a stock clip is a weak
          argument for a page whose whole claim is that the systems are built
          here. Drawn instead: the same navy ground and gold grid the dashboard
          mockup below uses, so the page opens in the language of the product.
        */}
        <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-hhp-navy-deep py-20">
          {/* A ground plane in perspective rather than the flat grid used here
              before, which was the same mark the dashboard mockup uses two
              sections down — the page opened by repeating itself. Laid into the
              floor, it reads as the substrate the rest of the page stands on. */}
          {/* Wash first, grid second. The other way round, the bottom-anchored
              navy vignette painted straight over the ground plane — which is
              anchored at the same edge — and the grid never appeared. */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(120% 90% at 50% 25%, hsl(var(--hhp-gold) / 0.13), transparent 58%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-[-30%] bottom-0 h-[62%] origin-bottom"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(hsl(var(--hhp-gold) / 0.28) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hhp-gold) / 0.28) 1px, transparent 1px)',
              backgroundSize: '46px 46px',
              transform: 'perspective(560px) rotateX(60deg)',
              maskImage: 'linear-gradient(to top, #000 0%, transparent 88%)',
              WebkitMaskImage: 'linear-gradient(to top, #000 0%, transparent 88%)',
            }}
          />
          <div className="container-premium relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6 justify-center text-hhp-gold">
                Proprietary Platforms
              </span>
              <h1 className="hero-title mb-6 text-white">Technology, built in house</h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
                The operating and reporting systems behind every property we manage — built and
                maintained by HHP, not licensed.
              </p>
              {/* Three facts, stated as a spec strip. The hero was a single word
                  and a paragraph, with nothing to hold the eye. */}
              <ul className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                <li>Six layers</li>
                <li className="text-hhp-gold/70" aria-hidden="true">
                  ·
                </li>
                <li>One system of record</li>
                <li className="text-hhp-gold/70" aria-hidden="true">
                  ·
                </li>
                <li>Owned, not licensed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Positioning statement. Was a bare centred paragraph with no heading,
            no eyebrow and no rule, floating between a dark hero and a dark
            mockup — the weakest band on the page. */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-premium">
            <div className="mx-auto max-w-4xl border-l-2 border-hhp-gold pl-6 sm:pl-10">
              <span className="eyebrow eyebrow-bare mb-5">Why It Matters</span>
              <p className="font-display text-xl font-medium leading-snug text-hhp-navy sm:text-2xl">
                We build and maintain our own asset management and operating systems rather than
                licensing someone else's.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
                Because both Facility Services and the software are ours, we see what work actually
                costs, line by line — and owners see the same numbers we do.
              </p>
            </div>
          </div>
        </section>

        <DashboardShowcase />
        <DisciplinesSection />

        {/* The six platform layers, moved here from Home. They describe the
            software, so they belong on the software page — and as the third of
            the scrollytelling models they cut through the system the way the
            others cut through the firm and the asset. */}
        <SystemStack />

        {/* Technology Pillars Grid. Was the only section on the page with no
            heading block, and sat white-on-white between two other white
            sections so the three merged into one long field. */}
        <section id="technology-pillars" className="bg-surface section-spacing">
          <div className="container-premium">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="eyebrow mb-5 justify-center">What We Run</span>
              <h2 className="section-title text-hhp-navy">The systems behind the operation</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {technologyPillars.map((pillar, index) => {
                return (
                  <div
                    key={index}
                    /* One hover treatment. `premium-card` already lifts by 4px
                       and swaps the shadow; the extra `hover:-translate-y-2
                       hover:shadow-elegant` here stacked a second, conflicting
                       one on top of it. */
                    className="platform-card-hover premium-card group w-full p-6 focus-within:ring-2 focus-within:ring-hhp-accent focus-within:ring-offset-2 sm:p-8"
                    tabIndex={0}
                    onMouseEnter={() => {
                      trackButtonClick(`tech_pillar_hover_${pillar.title.toLowerCase().replace(/\s+/g, '_')}`, 'technology_pillars');
                    }}
                  >
                    {/* Pillar mark. `icon-accent` is only a colour — the p-3
                        rounded-lg implied a chip background that did not exist,
                        so the icons floated. This draws the chip. */}
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-hhp-navy/12 bg-hhp-navy/[0.04] text-hhp-navy transition-colors duration-300 group-hover:border-hhp-gold/40 group-hover:bg-hhp-gold/10 group-hover:text-hhp-gold">
                        <PillarMark shape={pillar.shape} />
                      </div>
                      {/* h3, not h2: these are cards inside a section that now
                          has its own h2, so the outline no longer runs flat. */}
                      <h3 className="mt-1 font-display text-xl font-semibold text-hhp-navy">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Pillar Description */}
                    <p className="text-hhp-charcoal leading-relaxed mb-6">
                      {pillar.snippet}
                    </p>
                    
                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {pillar.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-hhp-charcoal">
                          <CheckCircle className="h-4 w-4 text-hhp-navy mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Link 
                      to={pillar.href}
                      className="tap inline-flex items-center text-hhp-navy font-heading font-semibold tracking-[0.06em] uppercase hover:text-hhp-navy/80 transition-colors duration-300 group-hover:translate-x-2 group focus:outline-none focus:ring-2 focus:ring-hhp-navy focus:ring-offset-2 rounded"
                      onClick={() => {
                        trackButtonClick(`learn_more_${pillar.title.toLowerCase().replace(/\s+/g, '_')}`, 'technology_pillars');
                        trackLinkClick(`Learn More ${pillar.title}`, pillar.href);
                      }}
                      aria-label={`Learn more about ${pillar.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works.

            Was five detached navy circles with nothing between them, so a
            sequence read as a set — and `md:grid-cols-2` left the fifth step
            orphaned on its own row. Now a connected rail: horizontal on desktop,
            vertical on mobile, with the rail inset to run between the first and
            last node rather than off both ends.

            Dark on purpose. Everything below SystemStack was five light bands in
            a row, and the page went flat exactly here. */}
        <section className="section-spacing bg-hhp-navy-deep text-white">
          <div className="container-premium">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="eyebrow mb-5 justify-center text-hhp-gold">Onboarding</span>
              <h2 className="section-title text-white">How a property comes onto the system</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                From first walk-through to owners reading live numbers.
              </p>
            </div>

            <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
              <span
                aria-hidden="true"
                className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-white/15 lg:left-[10%] lg:top-6 lg:h-px lg:w-[80%]"
              />
              {howItWorksSteps.map((step, index) => (
                <li key={index} className="relative pl-16 lg:pl-0 lg:text-center">
                  <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-hhp-gold/40 bg-hhp-navy-deep font-display text-sm font-semibold text-hhp-gold lg:relative lg:mx-auto lg:mb-6">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What This Changes.

            Three identical white boxes with generic icons became a numeral-led
            editorial row, matching the grammar of the capability stack and the
            operating principles on About. The old `gap-0 -mx-4` butted the cards
            edge to edge on mobile with only their 1px borders between them. */}
        <section className="bg-surface section-spacing">
          <div className="container-premium">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="eyebrow mb-5 justify-center">The Difference</span>
              <h2 className="section-title text-hhp-navy">What this changes for an owner</h2>
              <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">
                What owning both Facility Services and the software changes, in practice.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
              {kpiCards.map((card, index) => (
                <div key={index} className="border-t border-hhp-navy/15 pt-7">
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-semibold leading-none text-hhp-gold"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-hhp-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-hhp-charcoal">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white section-spacing">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Frequently Asked Questions</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                Common questions about our technology solutions and implementation process.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="overflow-hidden rounded border border-border bg-white transition-shadow duration-200 hover:shadow-subtle"
                  >
                    <AccordionTrigger className="text-left text-lg font-bold text-hhp-navy hover:text-hhp-navy/80 hover:no-underline px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-navy focus-visible:ring-offset-2 rounded-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-hhp-charcoal px-6 pb-5 pt-0">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Band. Carries the hero's perspective ground plane so the
            page closes in the language it opened with, instead of on a flat
            navy field. */}
        <section className="section-spacing relative overflow-hidden bg-hhp-navy-deep text-white">
          <div
            className="pointer-events-none absolute inset-x-[-30%] bottom-0 h-[66%] origin-bottom"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(hsl(var(--hhp-gold) / 0.20) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hhp-gold) / 0.20) 1px, transparent 1px)',
              backgroundSize: '46px 46px',
              transform: 'perspective(560px) rotateX(62deg)',
              maskImage: 'linear-gradient(to top, #000 0%, transparent 85%)',
              WebkitMaskImage: 'linear-gradient(to top, #000 0%, transparent 85%)',
            }}
          />
          <div className="container-premium relative z-10 text-center">
            <h2 className="section-title mx-auto max-w-3xl text-white">
              See what your reporting would look like
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              We'll walk you through the systems using real numbers.
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy-deep sm:w-auto"
                onClick={() => {
                  trackButtonClick('see_the_systems_cta', 'final_cta');
                  trackLinkClick('See the Systems', '/contact');
                }}
              >
                See the Systems
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/technology/platforms"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 border border-white/70 px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-hhp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy-deep sm:w-auto"
                onClick={() => {
                  trackButtonClick('explore_platforms_cta', 'final_cta');
                  trackLinkClick('Explore the Platforms', '/technology/platforms');
                }}
              >
                Explore the Platforms
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Technology;