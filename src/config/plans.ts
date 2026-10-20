/** Définition des plans tarifaires du SaaS (alignés sur les prix Stripe). */
export type Plan = {
  id: "starter" | "pro" | "enterprise";
  name: string;
  priceId: string | undefined;
  price: number;
  /** SMS inclus chaque mois dans l'abonnement. */
  smsIncluded: number;
  /** Prix d'un SMS supplémentaire au-delà du forfait, en euros. */
  smsOverage: number;
  /** Type d'expéditeur affiché au destinataire. */
  sender: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceId: process.env.STRIPE_PRICE_STARTER,
    price: 19,
    smsIncluded: 500,
    smsOverage: 0.05,
    sender: "Expéditeur partagé",
    features: [
      "1 000 contacts",
      "3 campagnes par mois",
      "Relances manuelles",
      "Tracking des clics",
      "Support email",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceId: process.env.STRIPE_PRICE_PRO,
    price: 49,
    smsIncluded: 2000,
    smsOverage: 0.04,
    sender: "Expéditeur personnalisé",
    features: [
      "50 000 contacts",
      "Campagnes illimitées",
      "Automatisations & relances programmées",
      "Tracking des clics & conversions",
      "API REST",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceId: process.env.STRIPE_PRICE_ENTERPRISE,
    price: 199,
    smsIncluded: 10000,
    smsOverage: 0.03,
    sender: "Expéditeur dédié",
    features: [
      "Contacts illimités",
      "Campagnes illimitées",
      "Scénarios d'automatisation avancés",
      "Tracking avancé & attribution",
      "API, webhooks & SSO/SAML",
      "Account manager & SLA dédié",
    ],
  },
];

/** Informations SMS communes à tous les plans (à confirmer selon l'opérateur). */
export const SMS_INFO = {
  topUp: "Recharge de crédits SMS à tout moment depuis votre tableau de bord.",
  countries:
    "France, Belgique, Suisse, Luxembourg et plus de 40 pays couverts.",
} as const;

/** Formate un prix de SMS supplémentaire, ex. 0.05 → « 0,05 € ». */
export function formatSmsOverage(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`;
}

/** Réduction appliquée en paiement annuel (0.2 = −20 %). */
export const ANNUAL_DISCOUNT = 0.2;

/** Prix mensuel équivalent en paiement annuel, arrondi à l'euro. */
export function annualMonthly(price: number): number {
  return Math.round(price * (1 - ANNUAL_DISCOUNT));
}
