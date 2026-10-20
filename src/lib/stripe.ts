import Stripe from "stripe";

let stripe: Stripe | undefined;

export function getStripe() {
  if (stripe) return stripe;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY est manquante dans l'environnement");
  }

  stripe = new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
    appInfo: {
      name: "CRM SaaS",
      version: "0.1.0",
    },
  });

  return stripe;
}
