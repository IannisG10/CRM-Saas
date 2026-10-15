import { getTenantContext } from "@/server/tenant";
import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";

export default async function DealsPage() {
  const { organizationId } = await getTenantContext();

  // Vue pipeline : deals regroupés par étape (stage)
  const stages = await prisma.stage.findMany({
    where: { pipeline: { organizationId } },
    orderBy: { order: "asc" },
    include: {
      deals: { where: { organizationId }, orderBy: { createdAt: "desc" } },
    },
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Pipeline</h1>
      <div className="flex gap-4 overflow-x-auto">
        {stages.map((stage) => (
          <div key={stage.id} className="w-72 shrink-0 rounded-xl bg-neutral-50 p-3">
            <h2 className="mb-3 text-sm font-medium">{stage.name}</h2>
            <div className="flex flex-col gap-2">
              {stage.deals.map((deal) => (
                <div key={deal.id} className="rounded-lg border bg-white p-3">
                  <p className="font-medium">{deal.title}</p>
                  <p className="text-sm text-neutral-500">
                    {formatCurrency(Number(deal.value), deal.currency)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
