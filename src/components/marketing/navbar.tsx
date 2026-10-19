"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#modules", label: "Modules" },
  { href: "#workflow", label: "Automatisation" },
  { href: "#clients", label: "Clients" },
  { href: "/pricing", label: "Tarifs" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-[13px] font-semibold text-on-action">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">CRMine</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-ink-2 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-md px-3 py-2 text-sm font-normal text-ink-2 transition-colors hover:text-ink"
          >
            Connexion
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-action px-4 py-2 text-sm font-normal text-on-action transition-colors hover:bg-action-strong"
          >
            Essai gratuit
          </Link>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-canvas md:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-normal text-ink-2 hover:bg-surface hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-center text-sm font-normal text-ink-2 hover:bg-surface"
            >
              Connexion
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-action px-3 py-2 text-center text-sm font-normal text-on-action"
            >
              Essai gratuit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
