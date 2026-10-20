import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Mentions légales — TextoVibe",
  description:
    "Mentions légales du site crm-saas.getkonekt.fr, service TextoVibe édité par MADAFRICA DISTRIBUTION SRL (M.A.D), conformément à la loi pour la confiance dans l'économie numérique (LCEN).",
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

          <div className="mt-10 space-y-10 text-ink-2">
            <section>
              <h2 className="text-xl font-semibold text-ink">
                1. Éditeur du site
              </h2>
              <p className="mt-3 leading-relaxed">
                Le site{" "}
                <span className="font-medium text-ink">
                  crm-saas.getkonekt.fr
                </span>{" "}
                et le service TextoVibe sont édités par{" "}
                <strong className="text-ink">
                  MADAFRICA DISTRIBUTION SRL
                </strong>{" "}
                (en abrégé « M.A.D »), société à responsabilité limitée de droit
                belge.
              </p>
              <ul className="mt-3 space-y-1 leading-relaxed">
                <li>
                  Siège social : rue des Deux Églises 38, 1000 Bruxelles,
                  Belgique
                </li>
                <li>
                  Numéro d&apos;entreprise (BCE) : 0477.160.915 — RPM Bruxelles
                </li>
                <li>N° de TVA : BE0477.160.915</li>
                <li>
                  E-mail :{" "}
                  <a
                    href="mailto:contact@madafrica.online"
                    className="font-medium text-accent underline underline-offset-4"
                  >
                    contact@madafrica.online
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                2. Directeur de la publication
              </h2>
              <p className="mt-3 leading-relaxed">
                Le responsable de la publication est Domohina Ramandimbinirina,
                administratrice de MADAFRICA DISTRIBUTION SRL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">3. Hébergeur</h2>
              <p className="mt-3 leading-relaxed">
                Le site est hébergé par{" "}
                <strong className="text-ink">Scaleway SAS</strong>, 8 rue de la
                Ville-l&apos;Évêque, 75008 Paris, France — RCS Paris 433 115
                904 —{" "}
                <a
                  href="https://www.scaleway.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  www.scaleway.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                4. Propriété intellectuelle
              </h2>
              <p className="mt-3 leading-relaxed">
                L&apos;ensemble des contenus de ce site (textes, visuels, logo,
                interface) est la propriété de MADAFRICA DISTRIBUTION SRL, sauf
                mention contraire. Toute reproduction sans autorisation écrite
                est interdite.
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
                . Pour exercer vos droits, écrivez à{" "}
                <a
                  href="mailto:contact@madafrica.online"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  contact@madafrica.online
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">6. Contact</h2>
              <p className="mt-3 leading-relaxed">
                Pour toute question relative au site ou à son contenu, vous
                pouvez écrire à{" "}
                <a
                  href="mailto:contact@madafrica.online"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  contact@madafrica.online
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
