"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_COOKIE_PREFERENCES } from "@/components/cookie-preferences-button";

const STORAGE_KEY = "textovibe-cookie-consent";

type Choice = "accepted" | "refused";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // stockage indisponible : on affiche quand même la bannière
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES, reopen);
  }, []);

  function record(choice: Choice) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() }),
      );
    } catch {
      // on masque la bannière même si le stockage a échoué
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4"
    >
      <div className="mx-auto max-w-[1200px] rounded-md border border-border bg-card p-5 shadow-lg sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-ink-2">
          Nous utilisons des cookies strictement nécessaires au fonctionnement
          du site. Avec votre accord, nous pourrons aussi en mesurer
          l&apos;audience.{" "}
          <Link
            href="/cookies"
            className="font-medium text-accent underline underline-offset-4"
          >
            En savoir plus
          </Link>
        </p>
        <div className="mt-4 flex flex-none gap-3 sm:mt-0">
          <button
            type="button"
            onClick={() => record("refused")}
            className="flex-1 rounded-md border border-ink/20 px-4 py-2 text-sm font-normal text-ink transition-colors hover:bg-surface sm:flex-none"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={() => record("accepted")}
            className="flex-1 rounded-md bg-action px-4 py-2 text-sm font-normal text-on-action transition-colors hover:bg-action-strong sm:flex-none"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
