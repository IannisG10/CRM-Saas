import { registerAction } from "@/server/actions/auth.actions";

export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-6">
      <h1 className="text-2xl font-semibold">Créer un compte</h1>
      <form action={registerAction} className="flex flex-col gap-3">
        <input name="organizationName" placeholder="Nom de l'organisation" required className="rounded-lg border px-3 py-2" />
        <input name="name" placeholder="Votre nom" required className="rounded-lg border px-3 py-2" />
        <input name="email" type="email" placeholder="Email" required className="rounded-lg border px-3 py-2" />
        <input name="password" type="password" placeholder="Mot de passe (8 car. min)" required className="rounded-lg border px-3 py-2" />
        <button className="rounded-lg bg-black px-4 py-2 font-medium text-white">Créer mon compte</button>
      </form>
    </main>
  );
}
