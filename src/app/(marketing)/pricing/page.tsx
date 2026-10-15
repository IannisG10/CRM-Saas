import Link from "next/link";
import { PLANS } from "@/config/plans";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold">Tarifs simples</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div key={plan.id} className="flex flex-col rounded-2xl border p-8">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="my-3 text-4xl font-bold">
              {plan.price}€<span className="text-base font-normal">/mois</span>
            </p>
            <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-600">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white"
            >
              Démarrer
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
