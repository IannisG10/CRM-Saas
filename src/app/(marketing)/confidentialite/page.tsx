import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — CRMine",
  description:
    "Comment CRMine, service édité par MAD SRL, collecte, utilise et protège vos données personnelles.",
};

const LAST_UPDATED = "15 octobre 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-ink-3">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <div className="mt-6 rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-ink-2">
            Ce document est un modèle à faire relire par un conseil juridique
            avant mise en ligne. Les mentions entre crochets{" "}
            <span className="font-mono">[…]</span> doivent être complétées avec
            les informations réelles de MAD SRL.
          </div>

          <div className="mt-10 space-y-10 text-ink-2">
            <section>
              <h2 className="text-xl font-semibold text-ink">
                1. Responsable du traitement
              </h2>
              <p className="mt-3 leading-relaxed">
                Le service CRMine est édité et fourni par{" "}
                <strong className="text-ink">MAD SRL</strong>, [forme juridique
                et capital social], dont le siège social est situé [adresse
                complète], immatriculée sous le numéro [numéro
                d&apos;entreprise / RCS] et le numéro de TVA [numéro de TVA].
              </p>
              <p className="mt-3 leading-relaxed">
                Pour toute question relative à vos données personnelles, vous
                pouvez contacter MAD SRL à l&apos;adresse [email de contact
                DPO / confidentialité].
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                2. Données que nous collectons
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  <strong className="text-ink">Données de compte</strong> : nom,
                  adresse e-mail, mot de passe (haché), organisation.
                </li>
                <li>
                  <strong className="text-ink">Données CRM</strong> : contacts,
                  entreprises, opportunités et toute donnée que vous importez ou
                  saisissez dans la plateforme.
                </li>
                <li>
                  <strong className="text-ink">Données de facturation</strong> :
                  gérées via notre prestataire de paiement Stripe ; nous ne
                  stockons pas vos coordonnées bancaires complètes.
                </li>
                <li>
                  <strong className="text-ink">Données techniques</strong> :
                  journaux de connexion, adresse IP, type de navigateur,
                  cookies nécessaires au fonctionnement du service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                3. Finalités et bases légales
              </h2>
              <p className="mt-3 leading-relaxed">
                Nous traitons vos données pour fournir et sécuriser le service
                (exécution du contrat), gérer la facturation (obligation
                légale et contrat), améliorer la plateforme (intérêt légitime)
                et, le cas échéant, vous adresser des communications (votre
                consentement, révocable à tout moment).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                4. Sous-traitants et transferts
              </h2>
              <p className="mt-3 leading-relaxed">
                Nous faisons appel à des sous-traitants pour l&apos;hébergement,
                le paiement (Stripe) et l&apos;envoi d&apos;e-mails. Ces
                prestataires n&apos;accèdent à vos données que pour exécuter les
                prestations confiées par MAD SRL. Les données sont hébergées au
                sein de l&apos;Union européenne ; tout transfert hors UE est
                encadré par des garanties appropriées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                5. Durée de conservation
              </h2>
              <p className="mt-3 leading-relaxed">
                Vos données sont conservées pendant la durée de votre
                abonnement, puis supprimées ou anonymisées dans un délai de
                [durée, ex. 90 jours] après la clôture du compte, sous réserve
                des obligations légales de conservation (notamment comptables).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">6. Vos droits</h2>
              <p className="mt-3 leading-relaxed">
                Conformément au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification, d&apos;effacement, de
                limitation, d&apos;opposition et de portabilité de vos données.
                Vous pouvez exercer ces droits en écrivant à [email de contact].
                Vous avez également le droit d&apos;introduire une réclamation
                auprès de l&apos;autorité de contrôle compétente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">7. Cookies</h2>
              <p className="mt-3 leading-relaxed">
                CRMine utilise des cookies strictement nécessaires au
                fonctionnement du service (authentification, sécurité). Les
                éventuels cookies de mesure d&apos;audience ne sont déposés
                qu&apos;avec votre consentement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                8. Modifications
              </h2>
              <p className="mt-3 leading-relaxed">
                MAD SRL peut mettre à jour la présente politique. En cas de
                modification substantielle, les utilisateurs seront informés par
                e-mail ou via la plateforme.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
