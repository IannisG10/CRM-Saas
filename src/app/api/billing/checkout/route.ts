import { NextRequest, NextResponse } from "next/server";
import { getTenantContext } from "@/server/tenant";
import { billingService } from "@/server/services/billing.service";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { organizationId, organization } = await getTenantContext();
  const session = await auth();
  const { priceId } = await req.json();

  if (!priceId) {
    return NextResponse.json({ error: "priceId requis" }, { status: 400 });
  }

  const customerId = await billingService.getOrCreateCustomer(
    organizationId,
    session!.user!.email!,
    organization.name,
  );

  const checkout = await billingService.createCheckoutSession(customerId, priceId);
  return NextResponse.json({ url: checkout.url });
}
