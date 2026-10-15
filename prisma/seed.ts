import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 12);

  const user = await prisma.user.upsert({
    where: { email: "demo@crm.test" },
    update: {},
    create: { name: "Demo User", email: "demo@crm.test", passwordHash },
  });

  const org = await prisma.organization.upsert({
    where: { slug: "demo-org" },
    update: {},
    create: { name: "Demo Org", slug: "demo-org" },
  });

  await prisma.membership.upsert({
    where: { userId_organizationId: { userId: user.id, organizationId: org.id } },
    update: {},
    create: { userId: user.id, organizationId: org.id, role: "OWNER" },
  });

  const pipeline = await prisma.pipeline.create({
    data: {
      organizationId: org.id,
      name: "Pipeline de vente",
      stages: {
        create: [
          { name: "Nouveau", order: 0 },
          { name: "Qualifié", order: 1 },
          { name: "Proposition", order: 2 },
          { name: "Gagné", order: 3 },
        ],
      },
    },
    include: { stages: true },
  });

  const company = await prisma.company.create({
    data: { organizationId: org.id, name: "Acme Inc", domain: "acme.com", industry: "SaaS" },
  });

  const contact = await prisma.contact.create({
    data: {
      organizationId: org.id,
      firstName: "Jeanne",
      lastName: "Dupont",
      email: "jeanne@acme.com",
      title: "CEO",
      companyId: company.id,
    },
  });

  await prisma.deal.create({
    data: {
      organizationId: org.id,
      title: "Contrat annuel Acme",
      value: 12000,
      stageId: pipeline.stages[1].id,
      companyId: company.id,
      contactId: contact.id,
      ownerId: user.id,
    },
  });

  console.log("✅ Seed terminé — connexion : demo@crm.test / password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
