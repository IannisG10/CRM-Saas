"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Palette façon Notion : point plein + fond teinté doux + texte dans la teinte foncée. */
const PALETTE = [
  { dot: "#6b2c5f", bg: "#f0e8ef", text: "#5a2550" }, // prune (marque)
  { dot: "#1f9d6b", bg: "#e3f3ec", text: "#10603f" }, // émeraude
  { dot: "#2563eb", bg: "#e7edfd", text: "#1b3c87" }, // bleu
  { dot: "#d97706", bg: "#fbeedb", text: "#7c4208" }, // ambre
] as const;

/**
 * Pastille du hero : cycle de couleurs toutes les 3 s avec un léger pop de scale.
 * Respecte prefers-reduced-motion (le scale est neutralisé via CSS).
 */
export function HeroBadge({ label }: { label: string }) {
  const [index, setIndex] = useState(0);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % PALETTE.length);
      setPop(true);
      window.setTimeout(() => setPop(false), 450);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const c = PALETTE[index];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-500 ease-out",
        pop && "animate-badge-pop",
      )}
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      <span
        className="h-2 w-2 rounded-full transition-colors duration-500 ease-out"
        style={{ backgroundColor: c.dot }}
        aria-hidden
      />
      {label}
    </span>
  );
}
