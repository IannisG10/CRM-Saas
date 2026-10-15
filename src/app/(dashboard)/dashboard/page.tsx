import { getTenantContext } from "@/server/tenant";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const { organizationId } = await getTenantContext();

  const [contacts, companies, openDeals] = await Promise.all([
    prisma.contact.count({ where: { organizationId } }),
    prisma.company.count({ where: { organizationId } }),
    prisma.deal.count({ where: { organizationId, closedAt: null } }),
  ]);

  const stats = [
    { label: "Contacts", value: contacts },
    { label: "Entreprises", value: companies },
    { label: "Deals en cours", value: openDeals },
  ];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Tableau de bord</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border p-6">
            <p className="text-sm text-neutral-500">{s.label}</p>
            <p className="mt-2 text-3xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
