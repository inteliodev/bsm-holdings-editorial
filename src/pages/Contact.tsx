import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { trackFormSubmission, trackContactFormInteraction, trackButtonClick, trackConversion } from '@/utils/analytics';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

// Endpoint is configurable so it can be moved off a third-party domain without a
// code change. Falls back to the current webhook so nothing breaks before the DNS
// move lands.
const CONTACT_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_WEBHOOK_URL ||
  'https://n8n.capitalaiadvisors.com/webhook/hhp-contact';

const CONTACT_EMAIL = 'info@hhpasset.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry_type: '',
    property_address: '',
    message: ''
  });
  // Honeypot. Real users never see this field, so anything in it is a bot.
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const inquiryTypes = [
    'Brokerage Services',
    'Management Services',
    'Technology Platform',
    'Investment Sales',
    'Leasing Services',
    'Capital Markets',
    'Valuations & Advisory',
    'SaaS Licensing',
    'General Inquiry'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Honeypot tripped — show the normal success state so the bot gets no signal,
    // but send nothing.
    if (website) {
      toast({
        title: 'Message Sent Successfully!',
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      return;
    }

    // Track form interaction start
    trackContactFormInteraction('start', 'contact');

    // Basic client-side validation (defensive)
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide your name, email, and a message.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare shared payload
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      inquiry_type: formData.inquiry_type || null,
      property_address: formData.property_address || null,
      message: formData.message,
      submitted_at: new Date().toISOString()
    };

    // Two independent sinks, attempted concurrently. The webhook drives notification
    // and automation; the Supabase insert is the durable record. A lead is only lost
    // if BOTH fail, so an n8n outage no longer drops inbound business on the floor.
    const sendWebhook = async () => {
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          phone: payload.phone ?? 'Not provided',
          inquiry_type: payload.inquiry_type ?? 'General Inquiry',
          property_address: payload.property_address ?? 'Not provided',
        })
      });
      if (!res.ok) throw new Error(`Webhook ${res.status} ${res.statusText}`);
    };

    // Dynamic import keeps the Supabase client out of the eager bundle — it is only
    // fetched when someone actually submits the form.
    const saveToDatabase = async () => {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error } = await supabase.from('contacts').insert([{
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        inquiry_type: payload.inquiry_type,
        property_address: payload.property_address,
        message: payload.message,
      }]);
      if (error) throw new Error(error.message);
    };

    const [webhookResult, dbResult] = await Promise.allSettled([sendWebhook(), saveToDatabase()]);
    const delivered = webhookResult.status === 'fulfilled' || dbResult.status === 'fulfilled';

    if (delivered) {
      // At least one sink accepted the lead. Log a partial failure so it is still
      // visible in monitoring rather than passing silently.
      if (webhookResult.status === 'rejected' || dbResult.status === 'rejected') {
        console.error('Contact form partial delivery:', {
          webhook: webhookResult.status === 'rejected' ? webhookResult.reason?.message : 'ok',
          database: dbResult.status === 'rejected' ? dbResult.reason?.message : 'ok',
        });
      }

      trackFormSubmission('contact_form', formData.inquiry_type || 'general');
      trackContactFormInteraction('complete', 'contact');
      trackConversion('contact_form_submission');

      toast({
        title: 'Message Sent Successfully!',
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        property_address: '',
        message: ''
      });
    } else {
      // Both sinks failed. Log the detail for us; give the prospect a way through
      // rather than a raw fetch error they can do nothing with.
      trackContactFormInteraction('error', 'contact');
      console.error('Contact form error:', {
        webhook: webhookResult.status === 'rejected' ? webhookResult.reason?.message : 'ok',
        database: dbResult.status === 'rejected' ? dbResult.reason?.message : 'ok',
      });
      toast({
        title: "We couldn't send your message",
        description: `Please email ${CONTACT_EMAIL} and we'll pick it up right away.`,
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <LocalBusinessSchema />
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/facilities-management-hero-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in px-4">
            <h1 className="hero-title text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg">
              CONTACT
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 mb-8 sm:mb-10 lg:mb-12 drop-shadow-md">
              Tell us about the property. We'll tell you what we'd do with it, and what it would cost.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Send Us a Message</h2>
                <p className="text-sm sm:text-base text-hhp-charcoal leading-relaxed mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/*
                  Honeypot. Hidden from sighted users and from assistive tech, and
                  excluded from the tab order, so only a bot filling every field will
                  populate it. Uses left:-9999px rather than display:none because some
                  bots skip fields that are display:none.
                */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[48px] text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[48px] text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[48px] text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry_type" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Inquiry Type
                    </label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => setFormData({ ...formData, inquiry_type: value })}>
                      <SelectTrigger className="min-h-[48px] text-base">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="property_address" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                    Property Address (if applicable)
                  </label>
                  <Input
                    id="property_address"
                    type="text"
                    value={formData.property_address}
                    onChange={(e) => setFormData({ ...formData, property_address: e.target.value })}
                    className="w-full min-h-[48px] text-base"
                    placeholder="123 Main St, City, State"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px] text-base"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hhp-navy hover:bg-hhp-navy/90 text-white py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base"
                  onClick={() => trackButtonClick('contact_form_submit', 'contact_page')}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-white">Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span className="text-white">Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-sm sm:text-base text-hhp-charcoal leading-relaxed mb-6 sm:mb-8">
                  Reach out to us through any of these channels for immediate assistance.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-hhp-navy/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hhp-navy mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-hhp-charcoal hover:text-hhp-navy underline-offset-4 hover:underline transition-colors"
                      onClick={() => trackButtonClick('email_link', 'contact_info')}
                    >
                      {CONTACT_EMAIL}
                    </a>
      
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceAreaSection background="gray" />
    </Layout>
  );
};

export default Contact;