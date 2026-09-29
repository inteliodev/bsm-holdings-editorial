import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Send, ExternalLink } from 'lucide-react';
import { submitLead } from '@/lib/leads';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  trackFormSubmission,
  trackContactFormInteraction,
  trackButtonClick,
  trackConversion,
  trackLinkClick,
} from '@/utils/analytics';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { RESIDENT_PORTAL_URL } from '@/lib/site';

const CONTACT_EMAIL = 'ty@bsmholdings.com';

const INQUIRY_TYPES = [
  { value: 'Property Owner', label: 'Property Owner' },
  { value: 'Rental Inquiry', label: 'Rental Inquiry' },
  { value: 'Current Resident', label: 'Current Resident' },
] as const;

function inquiryFromParam(raw: string | null): string {
  if (!raw) return '';
  const key = raw.trim().toLowerCase();
  if (
    key === 'owner' ||
    key === 'property-owner' ||
    key === 'property-management' ||
    key === 'pm' ||
    key === 'proposal'
  ) {
    return 'Property Owner';
  }
  if (key === 'rental' || key === 'rental-inquiry' || key === 'tenant' || key === 'application') {
    return 'Rental Inquiry';
  }
  if (key === 'resident' || key === 'current-resident') {
    return 'Current Resident';
  }
  const match = INQUIRY_TYPES.find((t) => t.value.toLowerCase() === key);
  return match?.value ?? '';
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry_type: '',
    property_address: '',
    message: '',
  });
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const inquiry = inquiryFromParam(searchParams.get('inquiry'));
    const address = searchParams.get('address')?.trim() ?? '';
    const intent = searchParams.get('intent')?.trim().toLowerCase() ?? '';

    setFormData((prev) => {
      const next = { ...prev };
      if (inquiry) next.inquiry_type = inquiry;
      if (address) next.property_address = address;
      if (intent === 'application' && !prev.message) {
        next.message = address
          ? `I would like to request a rental application for ${address}.`
          : 'I would like to request a rental application.';
      } else if (intent === 'tour' && !prev.message) {
        next.message = address
          ? `I would like to schedule a tour of ${address}.`
          : 'I would like to schedule a property tour.';
      }
      return next;
    });
  }, [searchParams]);

  const showPropertyAddress =
    formData.inquiry_type === 'Property Owner' || formData.inquiry_type === 'Rental Inquiry';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (website) {
      toast({
        title: 'Message received',
        description: 'Thank you. Our team will follow up by email.',
      });
      setSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    trackContactFormInteraction('start', 'contact');

    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide your name, email, and a message.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    const { delivered, webhookError, databaseError } = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      inquiry_type: formData.inquiry_type || null,
      property_address: formData.property_address || null,
      message: formData.message,
    });

    if (delivered) {
      if (webhookError || databaseError) {
        console.error('Contact form partial delivery:', {
          webhook: webhookError ?? 'ok',
          database: databaseError ?? 'ok',
        });
      }

      trackFormSubmission('contact_form', formData.inquiry_type || 'general');
      trackContactFormInteraction('complete', 'contact');
      trackConversion('contact_form_submission');

      toast({
        title: 'Message received',
        description: 'Thank you. Our team will follow up by email.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        property_address: '',
        message: '',
      });
      setSubmitted(true);
    } else {
      trackContactFormInteraction('error', 'contact');
      console.error('Contact form error:', {
        webhook: webhookError ?? 'ok',
        database: databaseError ?? 'ok',
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

      <section className="bg-background py-10 sm:py-12 lg:py-14">
        <div className="container-premium">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow">Contact</span>
            <h1 className="section-title mt-3 text-hhp-navy">Get in touch</h1>
            <p className="mt-3 text-lg leading-relaxed text-hhp-charcoal">
              Owners: request management or ask about an existing property. Prospective
              renters: ask about a home, schedule a tour, or request an application.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
            <aside className="space-y-6 rounded-sm bg-brand-deep p-5 text-white sm:p-8 lg:col-span-4">
              <div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Contact Our Team
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-hhp-gold-soft" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="tap text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
                        onClick={() => trackButtonClick('email_link', 'contact_info')}
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Existing owners</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">
                      Questions about reporting, maintenance, or your management agreement —
                      use this form or email us directly.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Prospective inquiries</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">
                      New management proposals and rental questions are welcome here. Choose
                      the matching inquiry type so we can route your message.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Resident Login</p>
                    <a
                      href={RESIDENT_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap inline-flex items-center gap-1.5 text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
                      onClick={() => trackLinkClick('Resident Login', RESIDENT_PORTAL_URL)}
                    >
                      Open resident portal
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="border border-border bg-white p-5 sm:p-8 lg:col-span-8">
              {submitted ? (
                <div className="py-4">
                  <h2 className="font-display text-xl font-semibold text-hhp-navy">
                    Thank you — message received
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-hhp-charcoal">
                    We review inquiries in the order they arrive and follow up by email.
                    If your matter is urgent for a current residence, use the resident
                    portal or the contacts in your lease materials.
                  </p>
                  <button
                    type="button"
                    className="tap mt-6 text-sm font-semibold text-brand underline-offset-4 hover:underline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-semibold text-hhp-navy">
                    Send a message
                  </h2>
                  <p className="mt-2 text-sm text-hhp-charcoal/80">
                    Fields marked * are required.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    <div
                      aria-hidden="true"
                      className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                    >
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

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-hhp-navy"
                        >
                          Full name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="min-h-[48px] w-full text-base"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-hhp-navy"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="min-h-[48px] w-full text-base"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="inquiry_type"
                          className="mb-1.5 block text-sm font-medium text-hhp-navy"
                        >
                          Inquiry type
                        </label>
                        <Select
                          value={formData.inquiry_type}
                          onValueChange={(value) =>
                            setFormData({ ...formData, inquiry_type: value })
                          }
                        >
                          <SelectTrigger className="min-h-[48px] text-base" id="inquiry_type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {INQUIRY_TYPES.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-hhp-navy"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="min-h-[48px] w-full text-base"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    {showPropertyAddress && (
                      <div>
                        <label
                          htmlFor="property_address"
                          className="mb-1.5 block text-sm font-medium text-hhp-navy"
                        >
                          Property address
                        </label>
                        <Input
                          id="property_address"
                          type="text"
                          value={formData.property_address}
                          onChange={(e) =>
                            setFormData({ ...formData, property_address: e.target.value })
                          }
                          className="min-h-[48px] w-full text-base"
                          placeholder="Street, city"
                          autoComplete="street-address"
                        />
                      </div>
                    )}

                    {formData.inquiry_type === 'Current Resident' && (
                      <p className="rounded border border-border bg-surface px-3 py-2 text-sm text-hhp-charcoal">
                        For rent payments and maintenance requests, use{' '}
                        <a
                          href={RESIDENT_PORTAL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-brand underline-offset-2 hover:underline"
                        >
                          Resident Login
                        </a>
                        . Use this form for other questions.
                      </p>
                    )}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-hhp-navy"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[110px] w-full text-base"
                        placeholder={
                          formData.inquiry_type === 'Property Owner'
                            ? 'Tell us about your rental property…'
                            : formData.inquiry_type === 'Rental Inquiry'
                              ? 'Which home are you interested in?'
                              : 'How can we help?'
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-hero w-full sm:w-auto"
                      onClick={() => trackButtonClick('contact_form_submit', 'contact_page')}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" aria-hidden="true" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaSection
        background="gray"
        heading="Areas we serve"
        intro="Oklahoma City, Edmond, Norman, Moore, Yukon, and surrounding communities."
      />
    </Layout>
  );
};

export default Contact;
