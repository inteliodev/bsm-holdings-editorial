import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, FileText, TrendingUp, CheckCircle, Building, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { useToast } from '@/hooks/use-toast';
import { trackFormSubmission, trackConversion } from '@/utils/analytics';

const NEWSLETTER_WEBHOOK_URL =
  import.meta.env.VITE_NEWSLETTER_WEBHOOK_URL ||
  'https://n8n.capitalaiadvisors.com/webhook/hhp-newsletter';

const Insights = () => {
  const [email, setEmail] = useState('');
  // Honeypot — see Contact.tsx for the rationale.
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (website) {
      toast({
        title: 'Successfully Subscribed!',
        description: 'Check your email for a welcome message.',
      });
      setIsSubmitting(false);
      return;
    }

    // Same two-sink approach as the contact form: the webhook drives the welcome
    // email, the database row is the durable record. Losing a subscriber because a
    // webhook was down is avoidable.
    const sendWebhook = async () => {
      const response = await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          subscribed_at: new Date().toISOString(),
          source: 'Website - Insights Page'
        })
      });
      if (!response.ok) throw new Error(`Webhook ${response.status} ${response.statusText}`);
    };

    const saveToDatabase = async () => {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error } = await supabase.from('newsletter_subscribers').insert([{
        email,
        source_page: 'insights',
      }]);
      if (error) throw new Error(error.message);
    };

    const [webhookResult, dbResult] = await Promise.allSettled([sendWebhook(), saveToDatabase()]);

    if (webhookResult.status === 'fulfilled' || dbResult.status === 'fulfilled') {
      trackFormSubmission('newsletter_signup', 'insights');
      trackConversion('newsletter_subscription');
      toast({
        title: 'Successfully Subscribed!',
        description: 'Check your email for a welcome message.',
      });
      setEmail('');
    } else {
      console.error('Newsletter subscription error:', {
        webhook: webhookResult.status === 'rejected' ? webhookResult.reason?.message : 'ok',
        database: dbResult.status === 'rejected' ? dbResult.reason?.message : 'ok',
      });
      toast({
        title: "We couldn't complete your subscription",
        description: 'Please try again, or email info@hhpasset.com to be added.',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/insights-image.webp)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Insights & Intelligence
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-4">
              Market analysis, case studies, and perspectives from an operator-led real estate firm.
            </p>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-8">
              Stay ahead with data-driven insights and grounded market commentary across the asset classes we operate.
            </p>
            {/* Plain anchor — <Link to="#hash"> updates the URL without
                scrolling, so this button did nothing. */}
            <a href="#newsletter" className="btn-hero">
              Subscribe to Insights
            </a>
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Market Reports</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                In-depth market analysis covering fundamentals, capital markets, and asset-level performance across major property types.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Q4 2025 Market Report */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Q4 2025 Market Report</h3>
                    <p className="text-sm text-hhp-charcoal">December 2025</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Comprehensive analysis of multifamily, office, industrial, and retail markets, including year-end performance and outlook entering 2026.
                </p>
              </div>

              {/* Real Estate Operations & Strategy */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Real Estate Operations & Strategy</h3>
                    <p className="text-sm text-hhp-charcoal">November 2025</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  An examination of how modern operating systems, analytics, and workflow automation are improving execution, reporting, and decision-making across commercial real estate portfolios.
                </p>
              </div>

              {/* Capital Markets Outlook */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Capital Markets Outlook</h3>
                    <p className="text-sm text-hhp-charcoal">October 2025</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Debt and equity market conditions, interest-rate trends, lender behavior, and financing strategies heading into 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Case Studies</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Real-world examples demonstrating disciplined execution, operational expertise, and consistent outcomes across diverse portfolios.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Multifamily Portfolio Optimization */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Building className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">Multifamily Portfolio Optimization</h3>
                    <p className="text-hhp-charcoal">Operational Improvement Initiative</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-hhp-charcoal">
                    How revenue management practices, expense controls, and compliance enhancements supported improved performance across a multifamily portfolio.
                  </p>
                </div>
              </div>

              {/* Office Leasing Strategy */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">Office Leasing Strategy</h3>
                    <p className="text-hhp-charcoal">Leasing & Retention Execution</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-hhp-charcoal">
                    How proactive leasing, tenant engagement, and renewal planning helped stabilize occupancy and reduce turnover in a Class A office property.
                  </p>
                </div>
              </div>

              {/* Capital Markets Execution */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <DollarSign className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">Capital Markets Execution</h3>
                    <p className="text-hhp-charcoal">Industrial Portfolio Disposition</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-hhp-charcoal">
                    How strategic positioning, targeted buyer outreach, and efficient underwriting supported a successful disposition of an industrial portfolio.
                  </p>
                </div>
              </div>

              {/* HUD Compliance & Oversight */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">HUD Compliance & Oversight</h3>
                    <p className="text-hhp-charcoal">Affordable Housing Operations</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-hhp-charcoal">
                    How standardized compliance processes and improved reporting practices supported strong regulatory outcomes while reducing administrative burden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Thought Leadership</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Perspectives from our leadership team on market conditions, operations, compliance, and the future of commercial real estate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* A Modern Real Estate Operating Model */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">A Modern Real Estate Operating Model</h3>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  How disciplined strategy, integrated services, and data-informed decision-making are reshaping commercial real estate ownership and management.
                </p>
              </div>

              {/* Leasing Strategy in a Normalized Market */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Leasing Strategy in a Normalized Market</h3>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Understanding tenant behavior, renewal dynamics, and pricing strategy as leasing markets stabilize post-volatility.
                </p>
              </div>

              {/* Managing Risk in HUD Housing */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Managing Risk in HUD Housing</h3>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Best practices for compliance, audits, and operational controls in affordable housing portfolios.
                </p>
              </div>

              {/* The Future of Real Estate Operations */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">The Future of Real Estate Operations</h3>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Operational trends, reporting standards, and execution models defining the next phase of commercial real estate management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        id="newsletter"
        className="bg-surface section-spacing scroll-mt-[calc(var(--header-h)+1.5rem)]"
      >
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Stay Ahead with Our Insights</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              Subscribe to our monthly newsletter for market reports, case studies, and commentary on real estate operations, capital markets, and portfolio strategy.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-elegant">
              <div className="max-w-md mx-auto">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="newsletter-website">Website</label>
                    <input
                      id="newsletter-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>

                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 min-h-[48px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hhp-navy focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-hhp-navy text-white min-h-[48px] px-6 py-3 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                <p className="text-sm text-hhp-charcoal mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;