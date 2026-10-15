import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import type { Role } from "@prisma/client";

/**
 * Contexte tenant : récupère l'utilisateur courant et son organisation active.
 * À appeler en tête de chaque Server Action / page protégée.
 */
export async function getTenantContext() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const membership = await prisma.membership.findFirst({
    where: { userId: session.user.id },
    include: { organization: true },
    orderBy: { createdAt: "asc" },
  });

  if (!membership) redirect("/onboarding");

  return {
    userId: session.user.id,
    organizationId: membership.organizationId,
    organization: membership.organization,
    role: membership.role,
  };
}

/** Garde : lève une erreur si le rôle est insuffisant. */
export function assertRole(current: Role, allowed: Role[]) {
  if (!allowed.includes(current)) {
    throw new Error("Accès refusé : permissions insuffisantes");
  }
}
