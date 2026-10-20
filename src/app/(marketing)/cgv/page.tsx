import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Conditions générales de vente — TextoVibe",
  description:
    "Conditions générales de vente et d'utilisation du service TextoVibe, édité par MAD SRL.",
};

const LAST_UPDATED = "15 octobre 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl">
            Conditions générales de vente
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
              <h2 className="text-xl font-semibold text-ink">1. Éditeur</h2>
              <p className="mt-3 leading-relaxed">
                Le service TextoVibe (ci-après « le Service ») est édité et fourni
                par <strong className="text-ink">MAD SRL</strong>, [forme
                juridique et capital social], siège social [adresse complète],
                immatriculée sous le numéro [numéro d&apos;entreprise / RCS],
                TVA [numéro de TVA] (ci-après « le Prestataire »).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">2. Objet</h2>
              <p className="mt-3 leading-relaxed">
                Les présentes conditions régissent la souscription et
                l&apos;utilisation du Service, logiciel de gestion de la
                relation client (CRM) proposé en mode SaaS par abonnement. Toute
                souscription emporte acceptation sans réserve des présentes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                3. Abonnements et prix
              </h2>
              <p className="mt-3 leading-relaxed">
                Le Service est proposé selon différentes formules
                d&apos;abonnement décrites sur la page Tarifs. Les prix sont
                indiqués en euros, hors taxes éventuelles. Le Prestataire se
                réserve le droit de modifier ses tarifs, les nouveaux prix
                s&apos;appliquant au renouvellement suivant.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                4. Paiement et facturation
              </h2>
              <p className="mt-3 leading-relaxed">
                Les paiements sont traités par notre prestataire Stripe.
                L&apos;abonnement est facturé d&apos;avance, par période
                mensuelle, et renouvelé automatiquement par tacite reconduction
                jusqu&apos;à résiliation. Tout défaut de paiement peut entraîner
                la suspension du Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                5. Durée et résiliation
              </h2>
              <p className="mt-3 leading-relaxed">
                L&apos;abonnement est conclu sans engagement de durée minimale
                sauf stipulation contraire. Le Client peut résilier à tout
                moment depuis son espace de facturation ; la résiliation prend
                effet à la fin de la période en cours, sans remboursement de la
                période entamée.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                6. Obligations du Client
              </h2>
              <p className="mt-3 leading-relaxed">
                Le Client s&apos;engage à utiliser le Service conformément à la
                loi, à ne pas porter atteinte aux droits de tiers et à garantir
                la licéité des données qu&apos;il importe. Il est responsable de
                la confidentialité de ses identifiants.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                7. Disponibilité et support
              </h2>
              <p className="mt-3 leading-relaxed">
                Le Prestataire met en œuvre les moyens raisonnables pour assurer
                la disponibilité du Service. Des interruptions pour maintenance
                peuvent survenir. Le support est accessible à [email / canal de
                support].
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                8. Responsabilité
              </h2>
              <p className="mt-3 leading-relaxed">
                La responsabilité du Prestataire est limitée aux dommages
                directs et plafonnée au montant des sommes versées par le Client
                au cours des [12] derniers mois. Le Prestataire ne saurait être
                tenu responsable des pertes de données imputables au Client ni
                des dommages indirects.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                9. Données personnelles
              </h2>
              <p className="mt-3 leading-relaxed">
                Le traitement des données personnelles est décrit dans notre{" "}
                <a
                  href="/confidentialite"
                  className="font-medium text-accent underline underline-offset-4"
                >
                  Politique de confidentialité
                </a>
                , qui fait partie intégrante des présentes conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                10. Droit applicable et juridiction
              </h2>
              <p className="mt-3 leading-relaxed">
                Les présentes conditions sont régies par le droit [pays
                applicable]. Tout litige relève, à défaut de résolution
                amiable, des tribunaux compétents de [ville / ressort].
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
