"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import {
  PLANS,
  ANNUAL_DISCOUNT,
  annualMonthly,
  formatSmsOverage,
} from "@/config/plans";
import { DEMO_URL } from "@/config/site";

export function PricingPlans() {
  const [annual, setAnnual] = useState(false);
  const discountLabel = `−${Math.round(ANNUAL_DISCOUNT * 100)} %`;

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div
          role="group"
          aria-label="Périodicité de facturation"
          className="inline-flex rounded-md border border-border bg-card p-1 text-sm"
        >
          <button
            type="button"
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={
              annual
                ? "rounded px-4 py-1.5 font-normal text-ink-2"
                : "rounded bg-ink px-4 py-1.5 font-normal text-on-action"
            }
          >
            Mensuel
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={
              annual
                ? "rounded bg-ink px-4 py-1.5 font-normal text-on-action"
                : "rounded px-4 py-1.5 font-normal text-ink-2"
            }
          >
            Annuel{" "}
            <span className={annual ? "text-accent-soft" : "text-accent"}>
              {discountLabel}
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {PLANS.map((plan) => {
          const featured = plan.id === "pro";
          const isEnterprise = plan.id === "enterprise";
          const monthly = annual ? annualMonthly(plan.price) : plan.price;

          return (
            <div
              key={plan.id}
              className={
                featured
                  ? "relative flex flex-col rounded-md border border-accent bg-card p-8"
                  : "flex flex-col rounded-md border border-border bg-card p-8"
              }
            >
              {featured && (
                <span className="absolute -top-2.5 left-8 rounded-md bg-accent px-2.5 py-1 text-xs font-normal text-on-action">
                  Le plus populaire
                </span>
              )}
              <h3 className="text-lg font-light leading-[0.95] tracking-[-0.03em] text-ink">
                {plan.name}
              </h3>
              <p className="my-3 text-4xl font-medium tracking-tight text-ink">
                {monthly}€
                <span className="text-base font-normal text-ink-3"> /mois</span>
              </p>
              <p className="-mt-2 mb-3 text-xs text-ink-3">
                {annual
                  ? `soit ${monthly * 12} € facturés par an`
                  : "facturation mensuelle, sans engagement"}
              </p>

              <div className="mb-6 rounded-md bg-surface p-4">
                <p className="text-sm font-medium text-ink">
                  {plan.smsIncluded.toLocaleString("fr-FR")} SMS/mois inclus
                </p>
                <p className="mt-1 text-xs text-ink-3">
                  SMS supplémentaire : {formatSmsOverage(plan.smsOverage)} ·{" "}
                  {plan.sender}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3 text-sm text-ink-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-none text-accent"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {isEnterprise ? (
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-ink/20 px-4 py-2.5 text-center text-sm font-normal text-ink transition-colors hover:bg-surface"
                >
                  Nous contacter
                </a>
              ) : (
                <Link
                  href="/signup"
                  className={
                    featured
                      ? "rounded-md bg-action px-4 py-2.5 text-center text-sm font-normal text-on-action transition-colors hover:bg-action-strong"
                      : "rounded-md border border-ink/20 px-4 py-2.5 text-center text-sm font-normal text-ink transition-colors hover:bg-surface"
                  }
                >
                  Essai gratuit
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
