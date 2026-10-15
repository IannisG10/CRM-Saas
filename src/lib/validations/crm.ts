import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Prénom requis"),
  lastName: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  title: z.string().optional(),
  companyId: z.string().cuid().optional(),
});

export const companySchema = z.object({
  name: z.string().min(1, "Nom requis"),
  domain: z.string().optional(),
  industry: z.string().optional(),
});

export const dealSchema = z.object({
  title: z.string().min(1, "Titre requis"),
  value: z.coerce.number().min(0).default(0),
  currency: z.string().default("EUR"),
  stageId: z.string().cuid().optional(),
  companyId: z.string().cuid().optional(),
  contactId: z.string().cuid().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type CompanyInput = z.infer<typeof companySchema>;
export type DealInput = z.infer<typeof dealSchema>;
