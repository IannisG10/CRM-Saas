import { NextResponse } from "next/server";
import { getTenantContext } from "@/server/tenant";
import { billingService } from "@/server/services/billing.service";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const { organizationId } = await getTenantContext();

  const subscription = await prisma.subscription.findUnique({
    where: { organizationId },
  });

  if (!subscription) {
    return NextResponse.json({ error: "Aucun abonnement" }, { status: 404 });
  }

  const portal = await billingService.createPortalSession(subscription.stripeCustomerId);
  return NextResponse.json({ url: portal.url });
}
