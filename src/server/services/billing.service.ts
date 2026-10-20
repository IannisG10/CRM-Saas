import { prisma } from "@/lib/prisma";
import { getStripe } from "@/lib/stripe";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const billingService = {
  /** Retourne (ou crée) le client Stripe lié à une organisation. */
  async getOrCreateCustomer(organizationId: string, email: string, name: string) {
    const existing = await prisma.subscription.findUnique({
      where: { organizationId },
    });
    if (existing) return existing.stripeCustomerId;

    const customer = await getStripe().customers.create({
      email,
      name,
      metadata: { organizationId },
    });

    await prisma.subscription.create({
      data: { organizationId, stripeCustomerId: customer.id },
    });

    return customer.id;
  },

  /** Crée une session Stripe Checkout pour un abonnement. */
  async createCheckoutSession(customerId: string, priceId: string) {
    return getStripe().checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${APP_URL}/settings/billing?success=1`,
      cancel_url: `${APP_URL}/settings/billing?canceled=1`,
      subscription_data: { trial_period_days: 14 },
    });
  },

  /** Crée une session du portail client Stripe (gestion de l'abonnement). */
  async createPortalSession(customerId: string) {
    return getStripe().billingPortal.sessions.create({
      customer: customerId,
      return_url: `${APP_URL}/settings/billing`,
    });
  },
};
