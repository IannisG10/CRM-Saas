import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-6">
      <h1 className="text-2xl font-semibold">Connexion</h1>

      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/dashboard",
          });
        }}
        className="flex flex-col gap-3"
      >
        <input name="email" type="email" placeholder="Email" required className="rounded-lg border px-3 py-2" />
        <input name="password" type="password" placeholder="Mot de passe" required className="rounded-lg border px-3 py-2" />
        <button className="rounded-lg bg-black px-4 py-2 font-medium text-white">Se connecter</button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <button className="w-full rounded-lg border px-4 py-2 font-medium">Continuer avec Google</button>
      </form>
    </main>
  );
}
