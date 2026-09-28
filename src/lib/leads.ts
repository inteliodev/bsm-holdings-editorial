/**
 * Inbound lead delivery.
 *
 * Two independent sinks, attempted concurrently. The webhook drives notification
 * and automation; the Supabase insert is the durable record. A lead is only lost
 * if BOTH fail, so an n8n outage does not drop inbound business on the floor.
 *
 * This lives here rather than inside a page because three surfaces now submit
 * leads — including the contact form — so each form uses the same delivery path.
 */
export const CONTACT_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_WEBHOOK_URL ||
  'https://n8n.capitalaiadvisors.com/webhook/hhp-contact';

export type Lead = {
  name: string;
  email: string;
  phone?: string | null;
  /** Routed into the existing `inquiry_type` column. */
  inquiry_type?: string | null;
  property_address?: string | null;
  message: string;
};

export type LeadResult = {
  delivered: boolean;
  webhookError?: string;
  databaseError?: string;
};

export async function submitLead(lead: Lead): Promise<LeadResult> {
  const payload = { ...lead, submitted_at: new Date().toISOString() };

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
      }),
    });
    if (!res.ok) throw new Error(`Webhook ${res.status} ${res.statusText}`);
  };

  // Dynamic import keeps the Supabase client out of the eager bundle — it is
  // only fetched when someone actually submits.
  const saveToDatabase = async () => {
    const { supabase } = await import('@/integrations/supabase/client');
    const { error } = await supabase.from('contacts').insert([
      {
        name: lead.name,
        email: lead.email,
        phone: lead.phone ?? null,
        inquiry_type: lead.inquiry_type ?? null,
        property_address: lead.property_address ?? null,
        message: lead.message,
      },
    ]);
    if (error) throw new Error(error.message);
  };

  const [webhookResult, dbResult] = await Promise.allSettled([sendWebhook(), saveToDatabase()]);

  return {
    delivered: webhookResult.status === 'fulfilled' || dbResult.status === 'fulfilled',
    webhookError: webhookResult.status === 'rejected' ? webhookResult.reason?.message : undefined,
    databaseError: dbResult.status === 'rejected' ? dbResult.reason?.message : undefined,
  };
}
