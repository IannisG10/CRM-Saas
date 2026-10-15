import { getTenantContext } from "@/server/tenant";
import { prisma } from "@/lib/prisma";
import { PLANS } from "@/config/plans";
import { BillingButtons } from "@/components/crm/billing-buttons";

export default async function BillingPage() {
  const { organizationId } = await getTenantContext();
  const subscription = await prisma.subscription.findUnique({
    where: { organizationId },
  });

  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold">Facturation</h1>
      <p className="mb-6 text-sm text-neutral-500">
        Statut :{" "}
        <span className="font-medium">{subscription?.status ?? "Aucun abonnement"}</span>
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div key={plan.id} className="flex flex-col rounded-xl border p-6">
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="my-2 text-3xl font-bold">
              {plan.price}€<span className="text-sm font-normal">/mois</span>
            </p>
            <ul className="mb-4 flex-1 space-y-1 text-sm text-neutral-600">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <BillingButtons priceId={plan.priceId} hasSubscription={!!subscription?.stripeSubscriptionId} />
          </div>
        ))}
      </div>
    </div>
  );
}
