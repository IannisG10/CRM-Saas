import type { Role } from "@prisma/client";

export function Topbar({
  organizationName,
  role,
}: {
  organizationName: string;
  role: Role;
}) {
  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <span className="font-medium">{organizationName}</span>
      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs uppercase text-neutral-600">
        {role}
      </span>
    </header>
  );
}
