"use server";

import {
  contactSchema,
  invoiceSchema,
  consultationSchema,
  newsletterSchema,
  type ContactInput,
  type InvoiceInput,
  type ConsultationInput,
  type NewsletterInput,
} from "@/schemas";

export type ActionResult = { ok: boolean; message: string };

async function fakeSend(_data: unknown) {
  // Simulated latency for the future integration with Resend / Postmark.
  await new Promise((r) => setTimeout(r, 700));
}

export async function submitContact(
  data: ContactInput,
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, message: "Please fix the errors in the form." };
  }
  await fakeSend(parsed.data);
  return {
    ok: true,
    message:
      "Thanks — we received your message and will respond within one business day.",
  };
}

export async function submitInvoiceRequest(
  data: InvoiceInput,
): Promise<ActionResult> {
  const parsed = invoiceSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, message: "Please fix the errors in the form." };
  }
  await fakeSend(parsed.data);
  return {
    ok: true,
    message:
      "Invoice request received. You'll get a formal PDF invoice in your inbox within 2 business hours.",
  };
}

export async function submitConsultation(
  data: ConsultationInput,
): Promise<ActionResult> {
  const parsed = consultationSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, message: "Please fix the errors in the form." };
  }
  await fakeSend(parsed.data);
  return {
    ok: true,
    message:
      "Booked! Check your inbox for the calendar invite and a short pre-call brief.",
  };
}

export async function subscribeNewsletter(
  data: NewsletterInput,
): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, message: "Please enter a valid email." };
  }
  await fakeSend(parsed.data);
  return { ok: true, message: "You're in. See you next month." };
}
