import { getTenantContext } from "@/server/tenant";
import { contactService } from "@/server/services/contact.service";

export default async function ContactsPage() {
  const { organizationId } = await getTenantContext();
  const contacts = await contactService.list(organizationId);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Contacts</h1>
      <table className="w-full text-sm">
        <thead className="text-left text-neutral-500">
          <tr>
            <th className="py-2">Nom</th>
            <th>Email</th>
            <th>Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="py-2">
                {c.firstName} {c.lastName}
              </td>
              <td>{c.email ?? "—"}</td>
              <td>{c.company?.name ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
