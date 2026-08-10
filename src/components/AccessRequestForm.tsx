import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitLead } from '@/lib/leads';
import { CONTACT_EMAIL } from '@/data/serviceArea';
import { trackConversion, trackFormSubmission } from '@/utils/analytics';

/**
 * Portal access request.
 *
 * Replaces the sign-in forms on ResidentLogin and InvestorPortal. Those forms
 * were `await new Promise(r => setTimeout(r, 1500))` followed by a success
 * toast: any email and any password "succeeded", nothing was stored or sent,
 * the redirect was commented out, neither destination route existed, and
 * neither page imported Supabase. They also collected real passwords into React
 * state on the way.
 *
 * There is no password field here by design — nothing is being authenticated,
 * so nothing should be asking for a credential.
 */
type Props = {
  /** Distinguishes the two sources in the shared contacts inbox. */
  inquiryType: string;
  /** Label for the free-text identifier field. */
  contextLabel: string;
  contextPlaceholder: string;
  analyticsId: string;
};

const AccessRequestForm = ({
  inquiryType,
  contextLabel,
  contextPlaceholder,
  analyticsId,
}: Props) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    context: '',
    message: '',
    company: '', // honeypot
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot: a real visitor never fills this, it is visually hidden.
    if (form.company) return;

    if (!form.name.trim() || !form.email.trim()) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide your name and email address.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      inquiry_type: inquiryType,
      property_address: form.context || null,
      message: form.message || `${inquiryType} requested.`,
    });

    setIsSubmitting(false);

    if (result.delivered) {
      if (result.webhookError || result.databaseError) {
        // Partial delivery still reaches us, but log it so it is visible in
        // monitoring rather than passing silently.
        console.error('Access request partial delivery:', result);
      }
      trackFormSubmission('access_request', analyticsId);
      trackConversion('access_request_submission');
      setSubmitted(true);
    } else {
      console.error('Access request failed:', result);
      toast({
        title: "We couldn't send your request",
        description: `Please email ${CONTACT_EMAIL} and we'll set you up directly.`,
        variant: 'destructive',
      });
    }
  };

  if (submitted) {
    return (
      <div className="border border-border bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-10 w-10 text-hhp-gold" aria-hidden="true" />
        <h2 className="mt-5 font-display text-xl font-semibold text-hhp-navy">Request received</h2>
        <p className="mt-3 leading-relaxed text-hhp-charcoal/80">
          Thanks — we have your details and will be in touch to get you set up. If it's urgent,
          email us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-hhp-navy underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border border-border bg-white p-6 shadow-card sm:p-8"
    >
      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${analyticsId}-company`}>Company</label>
        <input
          id={`${analyticsId}-company`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => set('company')(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor={`${analyticsId}-name`}
          className="mb-2 block text-sm font-medium text-hhp-charcoal"
        >
          Full name *
        </label>
        <Input
          id={`${analyticsId}-name`}
          required
          value={form.name}
          onChange={(e) => set('name')(e.target.value)}
          className="min-h-[48px] w-full text-base"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor={`${analyticsId}-email`}
          className="mb-2 block text-sm font-medium text-hhp-charcoal"
        >
          Email address *
        </label>
        <Input
          id={`${analyticsId}-email`}
          type="email"
          required
          value={form.email}
          onChange={(e) => set('email')(e.target.value)}
          className="min-h-[48px] w-full text-base"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor={`${analyticsId}-phone`}
          className="mb-2 block text-sm font-medium text-hhp-charcoal"
        >
          Phone
        </label>
        <Input
          id={`${analyticsId}-phone`}
          type="tel"
          value={form.phone}
          onChange={(e) => set('phone')(e.target.value)}
          className="min-h-[48px] w-full text-base"
          placeholder="Optional"
        />
      </div>

      <div>
        <label
          htmlFor={`${analyticsId}-context`}
          className="mb-2 block text-sm font-medium text-hhp-charcoal"
        >
          {contextLabel}
        </label>
        <Input
          id={`${analyticsId}-context`}
          value={form.context}
          onChange={(e) => set('context')(e.target.value)}
          className="min-h-[48px] w-full text-base"
          placeholder={contextPlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor={`${analyticsId}-message`}
          className="mb-2 block text-sm font-medium text-hhp-charcoal"
        >
          Anything else?
        </label>
        <Textarea
          id={`${analyticsId}-message`}
          rows={4}
          value={form.message}
          onChange={(e) => set('message')(e.target.value)}
          className="w-full text-base"
          placeholder="Optional"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="min-h-[52px] w-full text-base">
        {isSubmitting ? (
          'Sending…'
        ) : (
          <>
            Request access
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs leading-relaxed text-hhp-charcoal/55">
        We'll use these details only to set up your access.
      </p>
    </form>
  );
};

export default AccessRequestForm;
