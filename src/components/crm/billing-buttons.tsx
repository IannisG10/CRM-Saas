"use client";

import { useState } from "react";

export function BillingButtons({
  priceId,
  hasSubscription,
}: {
  priceId: string | undefined;
  hasSubscription: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function go(endpoint: string, body?: object) {
    setLoading(true);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
    setLoading(false);
  }

  if (hasSubscription) {
    return (
      <button
        onClick={() => go("/api/billing/portal")}
        disabled={loading}
        className="rounded-lg border px-4 py-2 text-sm font-medium disabled:opacity-50"
      >
        Gérer l&apos;abonnement
      </button>
    );
  }

  return (
    <button
      onClick={() => go("/api/billing/checkout", { priceId })}
      disabled={loading || !priceId}
      className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
    >
      {loading ? "Redirection…" : "Choisir ce plan"}
    </button>
  );
}
