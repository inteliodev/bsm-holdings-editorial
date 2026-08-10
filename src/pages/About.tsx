import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import haydenImage from '@/assets/hayden-ashley.webp';
import philImage from '@/assets/phil-ashley.webp';
import hannahImage from '@/assets/hannah-fanning.webp';
import marshellaImage from '@/assets/marshella-franklin.webp';
import andrewImage from '@/assets/andrew-hoanzl.webp';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * The team, grouped by department.
 *
 * Was three hand-written cards, ~150 lines of identical markup repeated with
 * different names — which is why the roster could not grow without copying the
 * block again. Adding, moving or retitling anyone is now a data edit.
 *
 * `image` and `bio` are both optional by design. Following the Robinson Park
 * pattern, someone without a headshot is listed exactly like everyone else —
 * name, title, email — with no grey silhouette and no initials avatar, so a
 * missing photo does not read as a broken card. That lets people go live before
 * their headshot exists.
 */
type Member = {
  id: string;
  name: string;
  title: string;
  email?: string;
  image?: string;
  bio?: string[];
};

type Department = {
  name: string;
  members: Member[];
};

const TEAM: Department[] = [
  {
    name: 'Executive Team',
    members: [
      {
        id: 'hayden',
        name: 'Hayden Ashley',
        title: 'Managing Principal',
        email: 'hayden@hhpasset.com',
        image: haydenImage,
        bio: [
          "Hayden Ashley serves as Managing Principal of HHP, where he leads firm strategy, regional growth, and platform development across brokerage, property management, and advisory services.",
          "An operator by background, Hayden oversees HHP's vertically integrated execution model and the development of technology-enabled systems that strengthen underwriting discipline, operational consistency, and long-term asset performance.",
          "Hayden's experience spans institutional real estate, Big Four accounting, and enterprise operations. He has worked with two of the world's largest commercial real estate firms—Newmark and Colliers—and began his career auditing Fortune 500 companies at Ernst & Young. Across brokerage, advisory, and ownership-oriented roles, he has been involved in over $2.0 billion in real estate transactions.",
          "This foundation informs HHP's disciplined, fiduciary approach and its focus on aligned incentives across the full asset lifecycle.",
        ],
      },
      {
        id: 'phil',
        name: 'Phil Ashley',
        title: 'Director of Operations',
        email: 'phil@hhpasset.com',
        image: philImage,
        bio: [
          "Phil Ashley serves as Director of Operations, bringing two decades of investment property and facilities expertise to HHP's enterprise-level service delivery. In addition to his real estate operations background, Phil founded and operated one of the largest commercial cleaning companies in Oklahoma, giving him deep, hands-on experience in large-scale facilities management, vendor oversight, and service execution.",
          "His background spans the complete asset lifecycle—from acquisition and performance optimization to value-add execution—across all major asset classes. This dual perspective across property operations and facilities services enables disciplined execution at both the asset and building-services level.",
          "Phil combines technical expertise with rigorous operational leadership, ensuring consistent performance across portfolios and markets. His systematic approach to property operations, vendor management, and owner communication makes him a critical strategic resource for the owners HHP works with.",
        ],
      },
    ],
  },
  {
    name: 'Accounting',
    members: [
      {
        id: 'hannah',
        name: 'Hannah Fanning',
        title: 'Director, Accounting',
        email: 'hannah@hhpasset.com',
        image: hannahImage,
        // Bio intentionally omitted. The previous one opened "Hannah Fanning
        // serves as Administrative Director at HHP" and described firmwide
        // administrative functions throughout — that title now belongs to
        // Marshella, so publishing it beside "Director, Accounting" would have
        // contradicted the card it sat in. Restore once a bio for the
        // accounting role exists.
      },
    ],
  },
  {
    name: 'Property Management',
    members: [
      {
        id: 'valarie',
        name: 'Valarie Ellis',
        title: 'Property Manager',
        email: 'valarie@hhpasset.com',
        // No headshot yet.
      },
    ],
  },
  {
    name: 'Administrative Services',
    members: [
      {
        id: 'marshella',
        name: 'Marshella Franklin',
        title: 'Administrative Director',
        email: 'marshella@hhpasset.com',
        image: marshellaImage,
      },
    ],
  },
  {
    name: 'Facility Services',
    members: [
      {
        id: 'preston',
        name: 'Preston Ellis',
        title: 'Director of Facility Services',
        email: 'preston@hhpasset.com',
        // No headshot yet — renders as name, title and email, with no
        // placeholder portrait.
      },
      {
        id: 'andrew',
        name: 'Andrew Hoanzl',
        title: 'Property Engineer',
        email: 'andrew@hhpasset.com',
        image: andrewImage,
      },
    ],
  },
];

/**
 * Operating principles.
 *
 * Previously four copy-pasted grey boxes. Lifted into data so the layout is
 * defined once, and so a fourth entry with only a lead line does not need its
 * own markup shape.
 *
 * The first principle was headed "Brokerage-First Strategy" and opened "Our
 * brokerage foundation ensures...". CLAUDE.md is explicit that asset management
 * is the umbrella and that brokerage is a supporting capability, never a
 * headline, so the framing is corrected here. No claim was added or removed —
 * the underwriting and market-work substance is unchanged.
 */
const OPERATING_PRINCIPLES = [
  {
    title: 'Underwriting Discipline',
    lead: 'Every transaction begins with careful market work and disciplined underwriting.',
    body: 'Acquisitions, dispositions and leasing decisions are grounded in rigorous analysis — not momentum or market noise.',
  },
  {
    title: 'Operator-Led Execution',
    lead: 'Decisions are made by operators who have managed real assets — not spreadsheets.',
    body: 'Long-term performance always outweighs short-term optics.',
  },
  {
    title: 'Data-Driven Decision Making',
    lead: 'Proprietary platforms augment human expertise with real-time insight, automated compliance, and performance monitoring.',
    body: 'Improving speed and accuracy without sacrificing judgment.',
  },
  {
    title: 'Long-Term Asset Alignment',
    lead: 'We succeed only when properties perform, tenants thrive, and owners achieve outcomes measured in years — not quarters.',
    body: null,
  },
];

const About = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'people' | 'story' | 'approach'>('people');
  const [expandedBios, setExpandedBios] = useState<{[key: string]: boolean}>({});

  // Handle URL hash on mount and when location changes
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'people' || hash === 'story' || hash === 'approach') {
      setActiveTab(hash as 'people' | 'story' | 'approach');
    }
  }, [location]);

  // Update URL hash when tab changes
  const handleTabChange = (tab: 'people' | 'story' | 'approach') => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
  };

  const toggleBio = (memberId: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  return (
    <Layout>
      {/* Split Hero Section - Robinson Park Style */}
      <section className="flex flex-col md:h-[600px] md:flex-row">
        {/* LEFT SIDE - Text & Navy Background */}
        <div className="flex w-full items-center justify-start bg-hhp-navy px-6 py-14 sm:px-8 md:w-[45%] md:py-0 lg:w-[40%] lg:px-12">
          <div className="max-w-md">
            <span className="eyebrow eyebrow-bare text-hhp-gold-soft">About</span>
            <h1 className="hero-title mb-5 mt-4 text-white">About Us</h1>
            {/*
              Previously "delivering disciplined brokerage, property management,
              and advisory services" — a brokerage-first enumeration in which
              asset management did not appear at all. Reworded to match the
              language already used in the meta description and the
              LocalBusiness structured data.
            */}
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              A vertically integrated asset management firm. Property management, Facility
              Services and accounting under one accountable roof, supported by in-house
              brokerage and advisory.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Background Image.
            Was `hidden md:block`, so on a phone this hero was a flat navy
            rectangle with no imagery at all. */}
        <div
          className="relative min-h-[260px] w-full flex-1 bg-cover bg-center bg-no-repeat sm:min-h-[320px] md:min-h-0 md:w-[55%] lg:w-[60%]"
          style={{ backgroundImage: 'url(/images/cool-real-estate-about-us-image.jpg)' }}
          role="img"
          aria-label="HHP-managed commercial property"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-hhp-navy/30 to-transparent" />
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-premium">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 border-b border-gray-200 pb-4" role="tablist" aria-label="About HHP sections">
            <button
              onClick={() => handleTabChange('people')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabChange('people');
                }
              }}
              id="tab-people"
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeTab === 'people'
                  ? 'text-hhp-navy'
                  : 'text-hhp-charcoal hover:text-hhp-navy'
              }`}
              aria-selected={activeTab === 'people'}
              aria-controls="panel-people"
              role="tab"
            >
              Our People
              {activeTab === 'people' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hhp-navy transform transition-all duration-300" />
              )}
            </button>
            <button
              onClick={() => handleTabChange('story')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabChange('story');
                }
              }}
              id="tab-story"
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeTab === 'story'
                  ? 'text-hhp-navy'
                  : 'text-hhp-charcoal hover:text-hhp-navy'
              }`}
              aria-selected={activeTab === 'story'}
              aria-controls="panel-story"
              role="tab"
            >
              Why HHP Was Built
              {activeTab === 'story' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hhp-navy transform transition-all duration-300" />
              )}
            </button>
            <button
              onClick={() => handleTabChange('approach')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabChange('approach');
                }
              }}
              id="tab-approach"
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeTab === 'approach'
                  ? 'text-hhp-navy'
                  : 'text-hhp-charcoal hover:text-hhp-navy'
              }`}
              aria-selected={activeTab === 'approach'}
              aria-controls="panel-approach"
              role="tab"
            >
              Our Approach
              {activeTab === 'approach' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hhp-navy transform transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div 
            className="transition-opacity duration-300 pt-6" 
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            {/* Tab 1: Our People */}
            {activeTab === 'people' && (
              <div className="fade-in animate-in fade-in duration-300">
                <div className="space-y-16">
                  {TEAM.map((department) => (
                    <div key={department.name}>
                      <div className="mb-8 border-b border-border pb-5">
                        <span className="eyebrow">{department.name}</span>
                      </div>

                      {/* items-start so a card without a headshot sizes to its
                          own content instead of stretching to match a card that
                          has one, which left a large empty panel beneath it. */}
                      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                        {department.members.map((member) => (
                          <div
                            key={member.id}
                            /* The portrait runs edge to edge; every other direct
                               child is inset, which avoids restructuring the
                               card's internals. */
                            className="platform-card-hover flex flex-col overflow-hidden border border-border bg-white pb-6 [&>*:not(img)]:px-6 [&>h3]:mt-6"
                          >
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={`${member.name}, ${member.title}`}
                                className="aspect-[4/5] w-full bg-surface object-cover object-top"
                                loading="lazy"
                                decoding="async"
                              />
                            ) : (
                              /* No placeholder portrait by design — an empty
                                 frame or an initials circle reads as a broken
                                 card. The entry simply starts at the name. */
                              <div className="pt-8" />
                            )}

                            <h3 className="mb-1 text-center font-display text-xl font-semibold text-hhp-navy">
                              {member.name}
                            </h3>
                            <h4 className="mb-4 text-center text-base font-medium italic text-hhp-navy">
                              {member.title}
                            </h4>

                            {member.email && (
                              <div className="mb-5 flex items-center justify-center space-x-2">
                                <Mail className="h-4 w-4 text-hhp-navy" />
                                <a
                                  href={`mailto:${member.email}`}
                                  className="tap text-sm font-medium text-hhp-navy transition-colors duration-200 hover:text-hhp-navy/80"
                                >
                                  {member.email}
                                </a>
                              </div>
                            )}

                            {member.bio && (
                              <>
                                <button
                                  onClick={() => toggleBio(member.id)}
                                  className="flex items-center justify-center space-x-2 text-sm text-hhp-navy transition-colors duration-200 hover:text-hhp-navy/80"
                                  aria-expanded={Boolean(expandedBios[member.id])}
                                >
                                  <span>{expandedBios[member.id] ? 'Hide Bio' : 'View Bio'}</span>
                                  {expandedBios[member.id] ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </button>

                                {expandedBios[member.id] && (
                                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-hhp-charcoal">
                                    {member.bio.map((paragraph, i) => (
                                      <p key={i}>{paragraph}</p>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Tab 2: Our Story */}
            {activeTab === 'story' && (
              <div className="fade-in animate-in fade-in duration-300">
                <h2 className="section-title text-hhp-navy mb-6 text-center">Why HHP Was Built</h2>
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-hhp-charcoal">
                  <p>
                    HHP was founded in response to a fundamental flaw in the traditional real estate services model. Management, maintenance, accounting, and advisory are typically divided across separate firms, creating fragmented accountability, misaligned incentives, and execution gaps that directly erode asset performance. The owner is left holding the coordination risk.
                  </p>
                  <p>
                    We began as an operator-first firm—managing our own portfolio long before serving institutional clients. That experience reinforced a simple truth: durable real estate value is created through long-term ownership thinking, not transaction-driven decision-making.
                  </p>
                  <p>
                    Our evolution into a vertically integrated platform was deliberate. By aligning brokerage, asset management, and advisory services under one operating framework, we remove friction from the ownership lifecycle. Decisions are made faster, execution is tighter, and accountability is clear. Every service we provide—from acquisitions through ongoing management—operates under a single fiduciary standard: treat every asset as if we own it.
                  </p>
                  <p>
                    Today, HHP combines boutique-level attention with the discipline of a much larger shop. Our growth has been disciplined, grounded in operator credibility, and supported by proprietary technology that strengthens decision-making without replacing human judgment. Clients engage HHP not as a collection of service lines, but as a long-term operating partner.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Our Approach */}
            {activeTab === 'approach' && (
              <div className="fade-in animate-in fade-in duration-300">
                <div className="mx-auto max-w-3xl text-center">
                  <span className="eyebrow eyebrow-bare">Operating Principles</span>
                  <h2 className="section-title mt-5 text-hhp-navy">How We Operate</h2>
                </div>

                {/* Numbered editorial rows rather than four identical grey
                    boxes. Same language as the scrollytelling models: oversized gold
                    numeral, hairline rules, no card chrome. */}
                <ol className="mx-auto mt-12 max-w-5xl border-t border-border md:mt-16">
                  {OPERATING_PRINCIPLES.map((principle, index) => (
                    <li
                      key={principle.title}
                      className="group grid grid-cols-1 gap-x-10 gap-y-3 border-b border-border py-9 transition-colors duration-300 hover:bg-surface/70 md:grid-cols-12 md:py-11"
                    >
                      <div className="flex items-start gap-5 md:col-span-4">
                        <span
                          aria-hidden="true"
                          className="font-display text-4xl font-semibold leading-none tracking-tight text-hhp-gold/30 transition-colors duration-300 group-hover:text-hhp-gold"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="pt-1 font-display text-xl font-semibold text-hhp-navy">
                          {principle.title}
                        </h3>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-lg font-medium leading-relaxed text-hhp-navy">
                          {principle.lead}
                        </p>
                        {principle.body && (
                          <p className="mt-3 leading-relaxed text-hhp-charcoal/80">
                            {principle.body}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="mx-auto mt-12 max-w-3xl border-l-2 border-hhp-gold pl-6 text-lg leading-relaxed text-hhp-navy">
                  This approach governs every engagement, regardless of asset size, market, or
                  service line.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Join Our Team */}
      <section className="bg-hhp-navy text-white py-20">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-4">Join Our Team</h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-10">
            We're building the next-generation real estate services firm — one that combines institutional standards with entrepreneurial ambition. If you're driven to transform real estate with analytics, compliance expertise, and hands-on execution, we want to hear from you.
          </p>
          <Link
            to="/opportunities"
            className="inline-block bg-white text-hhp-navy px-6 py-3 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            aria-label="View Opportunities"
            onClick={() => {
              trackButtonClick('view_opportunities', 'about_join_team');
              trackLinkClick('View Opportunities', '/opportunities');
            }}
          >
            View Opportunities
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;