import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CookiePreferencesButton } from "@/components/cookie-preferences-button";

export const metadata: Metadata = {
  title: "Politique relative aux cookies — TextoVibe",
  description:
    "Quels cookies TextoVibe utilise, pourquoi, leur durée de conservation et comment gérer votre consentement.",
};

const LAST_UPDATED = "20 octobre 2026";

const COOKIES = [
  {
    category: "Strictement nécessaires",
    purpose:
      "Authentification, sécurité et mémorisation de votre choix de consentement. Indispensables au fonctionnement du site.",
    consent: "Exemptés de consentement",
    duration: "Session à 12 mois",
  },
  {
    category: "Mesure d'audience",
    purpose:
      "Comprendre l'usage du site de façon agrégée pour l'améliorer. Déposés uniquement après votre accord.",
    consent: "Soumis à consentement",
    duration: "Jusqu'à 13 mois",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl">
            Politique relative aux cookies
          </h1>
          <p className="mt-4 text-sm text-ink-3">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <div className="mt-6 rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-ink-2">
            Ce document est un modèle à faire relire par un conseil juridique et
            à compléter avec la liste exacte des cookies réellement déposés par
            le service.
          </div>

          <div className="mt-10 space-y-10 text-ink-2">
            <section>
              <h2 className="text-xl font-semibold text-ink">
                1. Qu&apos;est-ce qu&apos;un cookie ?
              </h2>
              <p className="mt-3 leading-relaxed">
                Un cookie est un petit fichier déposé sur votre terminal lors de
                la visite d&apos;un site. Il permet notamment de maintenir votre
                session, de sécuriser votre connexion ou de mesurer
                l&apos;audience du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                2. Cookies que nous utilisons
              </h2>
              <div className="mt-4 overflow-hidden rounded-md border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-surface text-ink">
                    <tr>
                      <th className="p-3 font-semibold">Catégorie</th>
                      <th className="p-3 font-semibold">Finalité</th>
                      <th className="p-3 font-semibold">Base</th>
                      <th className="p-3 font-semibold">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIES.map((c) => (
                      <tr key={c.category} className="border-t border-border">
                        <td className="p-3 font-medium text-ink">
                          {c.category}
                        </td>
                        <td className="p-3 leading-relaxed">{c.purpose}</td>
                        <td className="p-3">{c.consent}</td>
                        <td className="p-3 whitespace-nowrap">{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                Les cookies de mesure d&apos;audience ne sont déposés
                qu&apos;après recueil de votre consentement via le bandeau prévu
                à cet effet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                3. Gérer votre consentement
              </h2>
              <p className="mt-3 leading-relaxed">
                Vous pouvez à tout moment accepter ou refuser les cookies non
                essentiels, et modifier votre choix :
              </p>
              <p className="mt-4">
                <CookiePreferencesButton label="Modifier mes préférences cookies" />
              </p>
              <p className="mt-4 leading-relaxed">
                Vous pouvez également configurer votre navigateur pour bloquer ou
                supprimer les cookies. Le blocage des cookies strictement
                nécessaires peut toutefois dégrader le fonctionnement du service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">4. Contact</h2>
              <p className="mt-3 leading-relaxed">
                Pour toute question relative aux cookies, écrivez à [adresse
                e-mail de contact]. Pour en savoir plus sur le traitement de vos
                données, consultez notre{" "}
                <a
                  href="/confidentialite"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
