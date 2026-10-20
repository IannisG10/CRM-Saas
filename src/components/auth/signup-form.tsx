"use client";

import { useActionState } from "react";
import {
  registerAction,
  type RegisterActionState,
} from "@/server/actions/auth.actions";

const initialState: RegisterActionState = {};

const FIELDS = [
  { name: "organizationName", label: "Nom de l'organisation", type: "text" },
  { name: "name", label: "Votre nom", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Mot de passe (8 car. min)", type: "password" },
] as const;

export function SignupForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-3">
      {FIELDS.map(({ name, label, type }) => (
        <div key={name}>
          <input
            name={name}
            type={type}
            placeholder={label}
            required
            aria-invalid={Boolean(state.error?.[name])}
            aria-describedby={state.error?.[name] ? `${name}-error` : undefined}
            className="w-full rounded-lg border px-3 py-2"
          />
          {state.error?.[name]?.map((error) => (
            <p
              key={error}
              id={`${name}-error`}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      ))}
      <button
        disabled={pending}
        className="rounded-lg bg-black px-4 py-2 font-medium text-white disabled:opacity-60"
      >
        {pending ? "Création en cours…" : "Créer mon compte"}
      </button>
    </form>
  );
}
