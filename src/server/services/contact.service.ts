import { prisma } from "@/lib/prisma";
import type { ContactInput } from "@/lib/validations/crm";

/**
 * Service Contact — toutes les requêtes sont scopées par organizationId
 * pour garantir l'isolation multi-tenant.
 */
export const contactService = {
  list(organizationId: string) {
    return prisma.contact.findMany({
      where: { organizationId },
      include: { company: true },
      orderBy: { createdAt: "desc" },
    });
  },

  get(organizationId: string, id: string) {
    return prisma.contact.findFirst({
      where: { id, organizationId },
      include: { company: true, deals: true, activities: true },
    });
  },

  create(organizationId: string, data: ContactInput) {
    return prisma.contact.create({
      data: { ...data, email: data.email || null, organizationId },
    });
  },

  update(organizationId: string, id: string, data: Partial<ContactInput>) {
    return prisma.contact.updateMany({
      where: { id, organizationId },
      data,
    });
  },

  remove(organizationId: string, id: string) {
    return prisma.contact.deleteMany({ where: { id, organizationId } });
  },
};
