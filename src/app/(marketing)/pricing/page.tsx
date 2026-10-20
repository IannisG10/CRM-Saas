import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { PricingPlans } from "@/components/marketing/pricing-plans";
import { PLANS, SMS_INFO, formatSmsOverage } from "@/config/plans";

export const metadata: Metadata = {
  title: "Tarifs — TextoVibe",
  description:
    "Des forfaits SMS clairs, sans engagement, avec −20 % en paiement annuel. Comparatif détaillé des plans et réponses aux questions fréquentes.",
};

const COMPARISON: { label: string; values: string[] }[] = [
  {
    label: "SMS inclus / mois",
    values: PLANS.map((p) => p.smsIncluded.toLocaleString("fr-FR")),
  },
  {
    label: "SMS supplémentaire",
    values: PLANS.map((p) => formatSmsOverage(p.smsOverage)),
  },
  { label: "Expéditeur", values: PLANS.map((p) => p.sender) },
  { label: "Contacts", values: ["1 000", "50 000", "Illimités"] },
  { label: "Campagnes", values: ["3 / mois", "Illimitées", "Illimitées"] },
  {
    label: "Automatisations & relances",
    values: ["Manuelles", "Programmées", "Scénarios avancés"],
  },
  {
    label: "Tracking des clics",
    values: ["Clics", "Clics & conversions", "Avancé & attribution"],
  },
  { label: "API & webhooks", values: ["—", "API REST", "API + webhooks"] },
  { label: "SSO / SAML", values: ["—", "—", "Inclus"] },
  {
    label: "Support",
    values: ["Email", "Email prioritaire", "Account manager & SLA"],
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Y a-t-il un engagement ?",
    a: "Non. Les abonnements mensuels sont sans engagement et résiliables à tout moment. L'offre annuelle couvre 12 mois et vous fait bénéficier de −20 %.",
  },
  {
    q: "Comment sont facturés les SMS ?",
    a: "Chaque plan inclut un volume de SMS mensuel. Au-delà, les SMS sont facturés à l'unité, de 0,05 € à 0,03 € selon le plan. Vous pouvez recharger des crédits à tout moment depuis votre tableau de bord.",
  },
  {
    q: "Vos données sont-elles conformes au RGPD ?",
    a: "Oui. Les données sont hébergées dans l'Union européenne et traitées conformément au RGPD. Les détails figurent dans notre politique de confidentialité.",
  },
  {
    q: "Puis-je résilier à tout moment ?",
    a: "Oui. La résiliation se fait depuis votre tableau de bord. L'abonnement reste actif jusqu'à la fin de la période déjà réglée, sans reconduction automatique au-delà.",
  },
];

export default function PricingPage() {
  const planNames = PLANS.map((p) => p.name);

  return (
    <>
      <Navbar />
      <main className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl">
              Un tarif simple, qui grandit avec vous
            </h1>
            <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
              Payez au mois sans engagement, ou passez à l&apos;année pour
              −20 %. Changez de plan ou arrêtez quand vous voulez.
            </p>
          </div>

          <div className="mt-12">
            <PricingPlans />
          </div>

          <p className="mt-8 text-center text-sm text-ink-3">
            {SMS_INFO.topUp} {SMS_INFO.countries}
          </p>

          {/* Comparatif détaillé */}
          <section className="mt-24">
            <h2 className="text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
              Comparatif détaillé
            </h2>
            <div className="mt-8 overflow-x-auto rounded-md border border-border">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th className="p-4 font-semibold">Fonctionnalité</th>
                    {planNames.map((name) => (
                      <th key={name} className="p-4 font-semibold">
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <th
                        scope="row"
                        className="p-4 font-medium text-ink-2"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, i) => (
                        <td key={planNames[i]} className="p-4 text-ink-2">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-24">
            <h2 className="text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
              Questions fréquentes
            </h2>
            <div className="mt-8 divide-y divide-border rounded-md border border-border">
              {FAQ.map((item) => (
                <details key={item.q} className="group p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-ink marker:content-['']">
                    {item.q}
                    <span className="text-ink-3 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
