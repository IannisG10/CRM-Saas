import Link from "next/link";
import { Users, Building2, Handshake, LayoutDashboard, Settings } from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/companies", label: "Entreprises", icon: Building2 },
  { href: "/deals", label: "Deals", icon: Handshake },
  { href: "/settings/billing", label: "Paramètres", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r p-4">
      <div className="mb-6 px-2 text-lg font-bold">CRM SaaS</div>
      <nav className="flex flex-col gap-1">
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100"
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
