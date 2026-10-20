"use client";

export const OPEN_COOKIE_PREFERENCES = "open-cookie-preferences";

export function CookiePreferencesButton({
  label = "Gérer les cookies",
  className = "font-medium text-accent underline underline-offset-4",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES))
      }
      className={className}
    >
      {label}
    </button>
  );
}
