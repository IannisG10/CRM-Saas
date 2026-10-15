import { getTenantContext } from "@/server/tenant";
import { prisma } from "@/lib/prisma";

export default async function CompaniesPage() {
  const { organizationId } = await getTenantContext();
  const companies = await prisma.company.findMany({
    where: { organizationId },
    include: { _count: { select: { contacts: true, deals: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Entreprises</h1>
      <ul className="divide-y">
        {companies.map((c) => (
          <li key={c.id} className="flex justify-between py-3">
            <span className="font-medium">{c.name}</span>
            <span className="text-sm text-neutral-500">
              {c._count.contacts} contacts · {c._count.deals} deals
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
