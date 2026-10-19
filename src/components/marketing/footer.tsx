import Link from "next/link";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { href: "#modules", label: "Modules" },
      { href: "#workflow", label: "Automatisation" },
      { href: "/pricing", label: "Tarifs" },
      { href: "#clients", label: "Études de cas" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "#", label: "À propos" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Carrières" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "Centre d'aide" },
      { href: "#", label: "API" },
      { href: "#", label: "Statut" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cgv", label: "Conditions" },
      { href: "/confidentialite", label: "RGPD" },
      { href: "/confidentialite", label: "Cookies" },
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
                C
              </span>
              <span className="text-lg font-semibold tracking-tight">
                CRMine
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-3">
              Le CRM qui fait avancer vos ventes. Contacts, pipelines et
              facturation, réunis sur une seule plateforme.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-3 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-ink-3 sm:flex-row">
          <p>© {new Date().getFullYear()} CRMine. Tous droits réservés.</p>
          <p>Powered by <span className="font-medium text-ink">MAD SRL</span></p>
        </div>
      </div>
    </footer>
  );
}
