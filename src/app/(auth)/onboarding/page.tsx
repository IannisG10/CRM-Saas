import { OnboardingForm } from "@/components/auth/onboarding-form";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const membership = await prisma.membership.findFirst({
    where: { userId: session.user.id },
  });
  if (membership) redirect("/dashboard");

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-6">
      <h1 className="text-2xl font-semibold">Créer votre organisation</h1>
      <p className="text-sm text-neutral-600">
        Votre compte est prêt. Créez une organisation pour commencer à utiliser
        votre CRM.
      </p>
      <OnboardingForm />
    </main>
  );
}
