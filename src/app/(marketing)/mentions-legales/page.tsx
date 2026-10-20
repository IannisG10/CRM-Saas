import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Mentions légales — TextoVibe",
  description:
    "Mentions légales du site TextoVibe, service édité par MAD SRL, conformément à la loi pour la confiance dans l'économie numérique (LCEN).",
};

const LAST_UPDATED = "20 octobre 2026";

export default function LegalNoticePage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm text-ink-3">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <div className="mt-6 rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-ink-2">
            Ce document est un modèle à faire relire par un conseil juridique
            avant mise en ligne. Les mentions entre crochets{" "}
            <span className="font-mono">[…]</span> doivent être complétées avec
            les informations réelles de MAD SRL et de l&apos;hébergeur.
          </div>

          <div className="mt-10 space-y-10 text-ink-2">
            <section>
              <h2 className="text-xl font-semibold text-ink">
                1. Éditeur du site
              </h2>
              <p className="mt-3 leading-relaxed">
                Le présent site et le service TextoVibe sont édités par{" "}
                <strong className="text-ink">MAD SRL</strong>, [forme juridique],
                au capital social de [montant] €.
              </p>
              <ul className="mt-3 space-y-1 leading-relaxed">
                <li>Siège social : [adresse complète]</li>
                <li>
                  Immatriculation : [RCS / numéro d&apos;entreprise], greffe de
                  [ville]
                </li>
                <li>N° de TVA intracommunautaire : [numéro de TVA]</li>
                <li>Téléphone : [numéro de téléphone]</li>
                <li>E-mail : [adresse e-mail de contact]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                2. Directeur de la publication
              </h2>
              <p className="mt-3 leading-relaxed">
                Le directeur de la publication est [nom et prénom], en qualité
                de [fonction, ex. gérant] de MAD SRL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">3. Hébergeur</h2>
              <p className="mt-3 leading-relaxed">
                Le site est hébergé par [dénomination sociale de
                l&apos;hébergeur], [forme juridique], dont le siège est situé
                [adresse complète de l&apos;hébergeur].
              </p>
              <p className="mt-3 leading-relaxed">
                Téléphone : [numéro de téléphone de l&apos;hébergeur].
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                4. Propriété intellectuelle
              </h2>
              <p className="mt-3 leading-relaxed">
                L&apos;ensemble des éléments du site (marque TextoVibe, logo,
                textes, interfaces, code) est protégé par le droit de la
                propriété intellectuelle et demeure la propriété exclusive de
                MAD SRL, sauf mention contraire. Toute reproduction ou
                représentation, totale ou partielle, sans autorisation
                préalable, est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                5. Données personnelles et cookies
              </h2>
              <p className="mt-3 leading-relaxed">
                Le traitement de vos données personnelles est décrit dans notre{" "}
                <a
                  href="/confidentialite"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  politique de confidentialité
                </a>{" "}
                et l&apos;usage des cookies dans notre{" "}
                <a
                  href="/cookies"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  politique relative aux cookies
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">6. Contact</h2>
              <p className="mt-3 leading-relaxed">
                Pour toute question relative au site ou à son contenu, vous
                pouvez écrire à [adresse e-mail de contact].
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
