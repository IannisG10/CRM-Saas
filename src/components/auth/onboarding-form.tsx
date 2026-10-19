"use client";

import { useActionState } from "react";
import {
  createOrganizationAction,
  type CreateOrganizationActionState,
} from "@/server/actions/organization.actions";

const initialState: CreateOrganizationActionState = {};

export function OnboardingForm() {
  const [state, formAction, pending] = useActionState(
    createOrganizationAction,
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input
        name="organizationName"
        placeholder="Nom de l'organisation"
        required
        minLength={2}
        aria-invalid={Boolean(state.error)}
        aria-describedby={state.error ? "organization-error" : undefined}
        className="rounded-lg border px-3 py-2"
      />
      {state.error && (
        <p id="organization-error" role="alert" className="text-sm text-red-600">
          {state.error}
        </p>
      )}
      <button
        disabled={pending}
        className="rounded-lg bg-black px-4 py-2 font-medium text-white disabled:opacity-60"
      >
        {pending ? "Création en cours…" : "Créer mon organisation"}
      </button>
    </form>
  );
}
