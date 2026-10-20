import Link from "next/link";
import { CookiePreferencesButton } from "@/components/cookie-preferences-button";
import { CONTACT_EMAIL } from "@/config/site";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { href: "#modules", label: "Modules" },
      { href: "#workflow", label: "Automatisation" },
      { href: "#ia", label: "Automatisations IA" },
      { href: "/pricing", label: "Tarifs" },
    ],
  },
  {
    title: "Contact",
    links: [{ href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL }],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cgv", label: "Conditions" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-surface text-ink-2">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-[13px] font-semibold text-on-action">
                T
              </span>
              <span className="text-lg font-semibold tracking-tight">
                TextoVibe
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-3">
              Le CRM qui transforme vos fichiers de contacts en ventes.
              Campagnes SMS, relances automatiques et suivi des conversions,
              réunis sur une seule plateforme.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-sm text-ink-3 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-3 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 border-t border-border pt-8 text-sm text-ink-3">
          <p className="leading-relaxed">
            TextoVibe est édité par{" "}
            <span className="font-medium text-ink">MAD SRL</span> — [forme
            juridique], capital [montant] €, siège social [adresse], immatriculée
            sous le numéro [RCS / numéro d&apos;entreprise]. Directeur de la
            publication : [nom]. Hébergeur : [hébergeur]. Détail sur la page{" "}
            <Link
              href="/mentions-legales"
              className="font-medium text-ink underline underline-offset-4"
            >
              Mentions légales
            </Link>
            .
          </p>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} MAD SRL. Tous droits réservés.
            </p>
            <CookiePreferencesButton className="transition-colors hover:text-ink" />
          </div>
        </div>
      </div>
    </footer>
  );
}
