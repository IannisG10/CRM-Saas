import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "8 caractères minimum"),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Nom requis"),
  organizationName: z.string().min(2, "Nom de l'organisation requis"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
