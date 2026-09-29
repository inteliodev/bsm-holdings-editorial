import { useState } from 'react';
import { submitLead } from '@/lib/leads';
import { useToast } from '@/hooks/use-toast';
import { trackFormSubmission, trackContactFormInteraction, trackConversion } from '@/utils/analytics';

const CONTACT_EMAIL = 'ty@bsmholdings.com';

/**
 * Compact owner inquiry — name, email, property address.
 * Wires into the same submitLead path as the full contact form.
 */
export function OwnerInquiryForm({ source = 'home_prefooter' }: { source?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property_address: '',
  });
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (website) {
      toast({
        title: 'Message Sent Successfully!',
        description: 'We will follow up shortly.',
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide your name and email.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    trackContactFormInteraction('start', source);

    const message = formData.property_address.trim()
      ? `Owner proposal request for ${formData.property_address.trim()}.`
      : `Owner proposal request (${source}).`;

    const { delivered, webhookError, databaseError } = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: null,
      inquiry_type: 'Property Management for Owners',
      property_address: formData.property_address || null,
      message,
    });

    if (delivered) {
      if (webhookError || databaseError) {
        console.error('Owner inquiry partial delivery:', {
          webhook: webhookError ?? 'ok',
          database: databaseError ?? 'ok',
        });
      }
      trackFormSubmission('owner_inquiry_form', source);
      trackContactFormInteraction('complete', source);
      trackConversion('contact_form_submission');
      toast({
        title: 'Request received',
        description: 'We will follow up about your property management proposal.',
      });
      setFormData({ name: '', email: '', property_address: '' });
    } else {
      trackContactFormInteraction('error', source);
      toast({
        title: "We couldn't send your request",
        description: `Please email ${CONTACT_EMAIL} and we will pick it up right away.`,
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  const fieldClass =
    'w-full min-h-[48px] rounded border border-border bg-white px-3.5 text-base text-hhp-charcoal placeholder:text-hhp-charcoal/45 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${source}-website`}>Website</label>
        <input
          id={`${source}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${source}-name`} className="mb-1.5 block text-sm font-medium text-hhp-navy">
            Name
          </label>
          <input
            id={`${source}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            value={formData.name}
            onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor={`${source}-email`} className="mb-1.5 block text-sm font-medium text-hhp-navy">
            Email
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            value={formData.email}
            onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${source}-property`}
          className="mb-1.5 block text-sm font-medium text-hhp-navy"
        >
          Property address
        </label>
        <input
          id={`${source}-property`}
          name="property_address"
          type="text"
          autoComplete="street-address"
          placeholder="Street, city"
          className={fieldClass}
          value={formData.property_address}
          onChange={(e) => setFormData((s) => ({ ...s, property_address: e.target.value }))}
        />
      </div>

      <button type="submit" className="btn-hero w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Request a Proposal'}
      </button>
    </form>
  );
}
