"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/validations/auth";
import { slugify } from "@/lib/utils";
import { signIn } from "@/lib/auth";
import type { SignupInput } from "@/lib/validations/auth";

export type RegisterActionState = {
  error?: Partial<Record<keyof SignupInput, string[]>>;
};

/**
 * Inscription : crée l'utilisateur, son organisation (tenant),
 * son adhésion en tant qu'OWNER, puis le connecte.
 */
export async function registerAction(
  _previousState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const parsed = signupSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const { name, email, password, organizationName } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { error: { email: ["Email déjà utilisé"] } };

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: { name, email, passwordHash },
    });

    const org = await tx.organization.create({
      data: {
        name: organizationName,
        slug: `${slugify(organizationName)}-${user.id.slice(0, 6)}`,
      },
    });

    await tx.membership.create({
      data: { userId: user.id, organizationId: org.id, role: "OWNER" },
    });

    // Pipeline par défaut
    await tx.pipeline.create({
      data: {
        organizationId: org.id,
        name: "Pipeline de vente",
        stages: {
          create: [
            { name: "Nouveau", order: 0 },
            { name: "Qualifié", order: 1 },
            { name: "Proposition", order: 2 },
            { name: "Gagné", order: 3 },
          ],
        },
      },
    });
  });

  await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  redirect("/dashboard");
}
