import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z.string().email("A valid email is required."),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, "Tell us a bit more so we can prepare (10+ chars).")
    .max(4000),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please accept the privacy policy."),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const invoiceSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  services: z.array(z.string()).default([]),
  plan: z.enum(["monthly", "annual"]).default("monthly"),
  budget: z.string().optional(),
  description: z.string().min(10).max(4000),
});
export type InvoiceInput = z.infer<typeof invoiceSchema>;

export const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  goals: z.array(z.string()).default([]),
  preferredDate: z.string().optional(),
  message: z.string().max(2000).optional(),
});
export type ConsultationInput = z.infer<typeof consultationSchema>;

export const newsletterSchema = z.object({
  email: z.string().email(),
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;
