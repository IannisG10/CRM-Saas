"use server";

import { revalidatePath } from "next/cache";
import { getTenantContext } from "@/server/tenant";
import { contactService } from "@/server/services/contact.service";
import { contactSchema } from "@/lib/validations/crm";

export async function createContactAction(formData: FormData) {
  const { organizationId } = await getTenantContext();

  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  await contactService.create(organizationId, parsed.data);
  revalidatePath("/contacts");
  return { success: true };
}

export async function deleteContactAction(id: string) {
  const { organizationId } = await getTenantContext();
  await contactService.remove(organizationId, id);
  revalidatePath("/contacts");
  return { success: true };
}
