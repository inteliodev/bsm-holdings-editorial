import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, FileText, CheckCircle, Building } from 'lucide-react';
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
        description: 'Please try again, or email ty@bsmholdings.com to be added.',
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
        <div className="absolute inset-0 bg-brand/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Insights
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-4">
              Practical notes for rental property owners in the Oklahoma City metro — leasing, maintenance, and owner reporting.
            </p>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-8">
              Subscribe for occasional updates. We will not invent market reports or case studies we have not published.
            </p>
            {/* Plain anchor — <Link to="#hash"> updates the URL without
                scrolling, so this button did nothing. */}
            <a href="#newsletter" className="btn-hero">
              Subscribe to Insights
            </a>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-hhp-navy mb-6">Topics we cover</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                Owner-focused residential property management — not capital markets commentary or commercial brokerage research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="h-8 w-8 icon-accent" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Leasing & renewals</h3>
                </div>
                <p className="text-hhp-charcoal">
                  How we price, market, and renew residential leases so owners are not surprised by vacant months.
                </p>
              </div>
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 icon-accent" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Maintenance & turns</h3>
                </div>
                <p className="text-hhp-charcoal">
                  Coordinating repairs, make-ready, and resident requests under clear owner approval rules.
                </p>
              </div>
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-8 w-8 icon-accent" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Owner reporting</h3>
                </div>
                <p className="text-hhp-charcoal">
                  Occupancy, collections, expenses, and open items — explained in plain language.
                </p>
              </div>
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 icon-accent" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Resident experience</h3>
                </div>
                <p className="text-hhp-charcoal">
                  Portal access, communication, and fair treatment that keeps good residents longer.
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
            <h2 className="section-title text-hhp-navy mb-6">Stay informed</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              Subscribe for occasional updates on residential property management in the Oklahoma City metro.
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
                    className="bg-brand text-white min-h-[48px] px-6 py-3 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-brand/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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