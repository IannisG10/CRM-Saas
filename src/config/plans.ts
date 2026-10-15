/** Définition des plans tarifaires du SaaS (alignés sur les prix Stripe). */
export type Plan = {
  id: "starter" | "pro" | "enterprise";
  name: string;
  priceId: string | undefined;
  price: number;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceId: process.env.STRIPE_PRICE_STARTER,
    price: 19,
    features: ["Jusqu'à 3 membres", "1 000 contacts", "1 pipeline", "Support email"],
  },
  {
    id: "pro",
    name: "Pro",
    priceId: process.env.STRIPE_PRICE_PRO,
    price: 49,
    features: ["Membres illimités", "50 000 contacts", "Pipelines illimités", "Automatisations"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceId: process.env.STRIPE_PRICE_ENTERPRISE,
    price: 199,
    features: ["Contacts illimités", "SSO / SAML", "SLA dédié", "Account manager"],
  },
];
