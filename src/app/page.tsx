import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Check,
  MessageSquare,
  MousePointerClick,
  Target,
  Upload,
  Workflow,
} from "lucide-react";
import { PLANS } from "@/config/plans";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { HeroBadge } from "@/components/marketing/hero-badge";
import { SonarGrid } from "@/components/ui/sonar-grid";

/* ------------------------------------------------------------------ */
/*  Hero — canvas crème, texte à gauche, aperçu produit à droite       */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="bg-canvas">
      <SonarGrid
        color="#0a0a0a"
        baseOpacity={0.1}
        dotRadius={1.2}
        spacing={30}
        ringWidth={80}
        amplitude={2}
        pingEvery={5}
        seedPing
        className="cursor-default"
      >
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:pb-28">
        <div className="animate-fade-up">
          <HeroBadge label="Nouveau · automatisations IA" />

          <h1 className="mt-6 max-w-[12ch] text-[40px] font-light leading-[0.90] tracking-[-0.03em] text-[#111111] md:text-[54px] lg:text-[78px]">
            Transformer des contacts en opportunités.
          </h1>

          <p className="mt-6 max-w-xl font-serif text-base font-light leading-[1.4] text-ink-2">
      

            Centralisez vos contacts, lancez des campagnes SMS, et automatisez vos relances 
            dans une seule plateforme. Du premier clic à la conversion.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-md bg-action px-6 py-3 text-center font-normal text-on-action transition-colors hover:bg-action-strong"
            >
              Essai gratuit
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-ink/20 px-6 py-3 text-center font-normal text-ink transition-colors hover:bg-surface"
            >
              Demander une démo
            </Link>
          </div>

          <p className="mt-5 text-sm text-ink-3">
            Import CSV · Campagne SMS · annulable à tout moment
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="overflow-hidden rounded-md border border-border bg-surface p-2">
            <Image
              src="/hero-preview.png"
              alt="Pipeline commercial de CRMine : progression des contacts par étape du cycle de vie"
              width={1907}
              height={911}
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full rounded-sm"
            />
          </div>
        </div>
      </div>
      </SonarGrid>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Preuve sociale — marquee de wordmarks en grayscale (CSS pur)       */
/* ------------------------------------------------------------------ */
function LogoCloud() {
  const logos = [
    "Acme",
    "Globex",
    "Initech",
    "Umbrella",
    "Stark",
    "Wayne",
    "Soylent",
    "Hooli",
  ];
  const track = [...logos, ...logos];

  return (
    <section className="bg-canvas py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-sm text-ink-3">
          Plus de 200 entreprises démarchent leurs prospect avec CRMine
        </p>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-16 pr-16">
            {track.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="text-xl font-semibold tracking-tight text-logo"
                aria-hidden={i >= logos.length}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Hook prix / simplicité                                             */
/* ------------------------------------------------------------------ */
function PositioningBand() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-balance font-sans text-2xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-3xl">
          Le CRM qui transforme votre base de contacts
          en opportunités de conversion.
        </p>
        <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
          Pensé pour les PME et les startups qui veulent vendre et
          présenter leurs offres à des contacts ciblés.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Grille des modules                                                 */
/* ------------------------------------------------------------------ */
function Modules() {
  const modules = [
    {
      icon: Upload,
      title: "Import",
      desc: "Importez votre base de contacts en CSV ou Excel ou ajouter les manuellement.",
    },
    {
      icon: Target,
      title: "Organisation",
      desc: "Organisez vos contacts pour cibler les bonnes personnes avec les bons messages.",
    },
    {
      icon: MessageSquare,
      title: "Campagnes",
      desc: "Créer et programmez vos campagnes SMS, Intégrer des liens vers vos LP pour inciter à l'action.",
    },
    {
      icon: MousePointerClick,
      title: "Suivi",
      desc: "Identifiez toutes les interactions (visites, clics, conversion) et adapter votre stratégie.",
    },
    {
      icon: Workflow,
      title: "Automatisation",
      desc: "Déclenchez des séquences de relances automatiquement, et réengager les personnes.",
    },
    {
      icon: BarChart3,
      title: "Analyse",
      desc: "Suivez les résulats de vos campagnes dans un tableau de bord centraliser.",
    },
  ];

  return (
    <section id="modules" className="bg-canvas py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
            Tout le cycle de vente, réuni
          </h2>
          <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
            Fini les onglets éparpillés. Gérez vos relations clients du premier
            contact à la facture, dans un seul espace de travail.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.title}
              className="rounded-md border border-border bg-card p-7 transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-ink">
                <m.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg   leading-[0.95] tracking-[-0.03em] text-ink">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Différenciateur — automatisation (séquence réelle → numérotée)     */
/* ------------------------------------------------------------------ */
function Workflows() {
  return (
    <section id="workflow" className="bg-surface py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-[40px] font-light leading-[0.95] tracking-[-0.03em] text-ink lg:text-[54px]">
            Laissez le CRM travailler à votre place
          </h2>
          <p className="mt-5 max-w-md font-serif text-base font-light leading-[1.4] text-ink-2">
            Réglez vos automatisations une fois, gagnez des heures chaque
            semaine. Vos commerciaux vendent, le CRM s&apos;occupe du reste.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-md bg-action px-6 py-3 text-center font-normal text-on-action transition-colors hover:bg-action-strong"
            >
              Essai gratuit
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-ink/20 px-6 py-3 text-center font-normal text-ink transition-colors hover:bg-surface"
            >
              Demander une démo
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-border bg-canvas p-2">
          <Image
            src="/team-meeting.jpg"
            alt="Une équipe commerciale en réunion de travail autour d'ordinateurs portables"
            width={5473}
            height={3654}
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Résultats chiffrés + témoignage                                    */
/* ------------------------------------------------------------------ */
function Results() {
  const stats = [
    { value: "+38 %", label: "de taux de conversion en moyenne" },
    { value: "6 h", label: "gagnées par commercial chaque semaine" },
    { value: "2 000+", label: "équipes nous font confiance" },
    { value: "99,9 %", label: "de disponibilité garantie" },
  ];

  return (
    <section id="clients" className="bg-canvas py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-2">{s.label}</p>
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-16 grid max-w-4xl items-center gap-8 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-12">
          <div className="overflow-hidden rounded-md border border-border bg-surface p-2">
            <Image
              src="/ceo-portrait.avif"
              alt="Portrait de Camille Moreau, CEO de Globex"
              width={740}
              height={436}
              loading="lazy"
              sizes="(min-width: 640px) 38vw, 100vw"
              className="h-auto w-full rounded-sm"
            />
          </div>
          <div>
            <blockquote className="text-2xl font-normal leading-relaxed tracking-tight text-ink sm:text-[1.75rem]">
              « Nous avons remplacé trois outils par CRMine. Les commerciaux ont
              enfin une vue claire du pipeline, et la facturation est
              automatique. Adopté en une semaine. »
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="block font-semibold text-ink">Camille Moreau</span>
              <span className="block text-ink-3">CEO, Globex</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Aperçu tarifs                                                      */
/* ------------------------------------------------------------------ */
function PricingTeaser() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
            Un tarif simple, qui grandit avec vous
          </h2>
          <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
            Pas de frais cachés. Changez de plan ou arrêtez quand vous voulez.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => {
            const featured = plan.id === "pro";
            return (
              <div
                key={plan.id}
                className={
                  featured
                    ? "relative flex flex-col rounded-md border border-accent bg-card p-8"
                    : "flex flex-col rounded-md border border-border bg-card p-8"
                }
              >
                {featured && (
                  <span className="absolute -top-2.5 left-8 rounded-md bg-accent px-2.5 py-1 text-xs font-normal text-on-action">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-lg font-light leading-[0.95] tracking-[-0.03em] text-ink">{plan.name}</h3>
                <p className="my-3 text-4xl font-medium tracking-tight text-ink">
                  {plan.price}€
                  <span className="text-base font-normal text-ink-3">
                    {" "}
                    /mois
                  </span>
                </p>
                <ul className="mb-8 flex-1 space-y-3 text-sm text-ink-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-none text-accent"
                        strokeWidth={2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={
                    featured
                      ? "rounded-md bg-action px-4 py-2.5 text-center text-sm font-normal text-on-action transition-colors hover:bg-action-strong"
                      : "rounded-md border border-ink/20 px-4 py-2.5 text-center text-sm font-normal text-ink transition-colors hover:bg-surface"
                  }
                >
                  Essai gratuit
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-ink-3">
          Besoin d&apos;un plan sur mesure ?{" "}
          <Link
            href="/pricing"
            className="font-normal text-accent underline underline-offset-4"
          >
            Voir tous les tarifs
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA final — unique moment sombre (bande Ink), boutons inversés     */
/* ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <section className="bg-ink">
      <SonarGrid
        color="#ffffff"
        baseOpacity={0.22}
        dotRadius={1.3}
        spacing={28}
        ringWidth={80}
        amplitude={2}
        pingEvery={4}
        seedPing
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-light leading-[0.95] tracking-[-0.03em] text-on-action sm:text-4xl">
            Prêt à faire avancer vos ventes ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-serif text-base font-light leading-[1.4] text-white/70">
            Lancez votre essai aujourd&apos;hui. Mise en route en quelques
            minutes, sans carte bancaire.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-md bg-card px-6 py-3 font-normal text-ink transition-colors hover:bg-canvas"
            >
              Essai gratuit
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-white/25 px-6 py-3 font-normal text-on-action transition-colors hover:bg-white/10"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </SonarGrid>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <PositioningBand />
        <Modules />
        <Workflows />
        <Results />
        <PricingTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
