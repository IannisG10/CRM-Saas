import { getTenantContext } from "@/server/tenant";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protège l'ensemble du groupe de routes (dashboard) et charge le tenant.
  const { organization, role } = await getTenantContext();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar organizationName={organization.name} role={role} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
