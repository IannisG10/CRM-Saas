"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export type CreateOrganizationActionState = {
  error?: string;
};

export async function createOrganizationAction(
  _previousState: CreateOrganizationActionState,
  formData: FormData,
): Promise<CreateOrganizationActionState> {
  const userId = (await auth())?.user?.id;
  if (!userId) redirect("/login");

  const existingMembership = await prisma.membership.findFirst({
    where: { userId },
  });
  if (existingMembership) redirect("/dashboard");

  const name = String(formData.get("organizationName") ?? "").trim();
  if (name.length < 2) {
    return { error: "Le nom de l'organisation doit contenir au moins 2 caractères." };
  }

  await prisma.$transaction(async (tx) => {
    const organization = await tx.organization.create({
      data: {
        name,
        slug: `${slugify(name)}-${userId.slice(0, 6)}`,
      },
    });

    await tx.membership.create({
      data: {
        userId,
        organizationId: organization.id,
        role: "OWNER",
      },
    });

    await tx.pipeline.create({
      data: {
        organizationId: organization.id,
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

  redirect("/dashboard");
}
