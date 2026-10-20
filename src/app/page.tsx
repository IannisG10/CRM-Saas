import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Building2,
  Check,
  Clock,
  CreditCard,
  GitBranch,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { PLANS, SMS_INFO, formatSmsOverage } from "@/config/plans";
import { DEMO_URL } from "@/config/site";
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

          <h1 className="mt-6 max-w-[18ch] text-[34px] font-light leading-[0.98] tracking-[-0.03em] text-[#111111] md:text-[46px] lg:text-[60px]">
            Le CRM qui transforme vos fichiers de contacts en ventes, par SMS.
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
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-ink/20 px-6 py-3 text-center font-normal text-ink transition-colors hover:bg-surface"
            >
              Demander une démo
            </a>
          </div>

          <p className="mt-5 text-sm text-ink-3">
            Sans carte bancaire · Mise en route en 5 min · Sans engagement
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="overflow-hidden rounded-md border border-border bg-surface p-2">
            <Image
              src="/hero-preview.png"
              alt="Pipeline commercial de TextoVibe : progression des contacts par étape du cycle de vie"
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
/*  Bandeau de lancement — honnête, sans faux clients ni faux chiffres */
/* ------------------------------------------------------------------ */
function LaunchStrip() {
  return (
    <section className="border-y border-border bg-canvas py-14">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-3">
          Tout juste lancé
        </p>
        <p className="mt-4 text-balance text-lg font-light leading-snug text-ink-2">
          TextoVibe démarre avec ses toutes premières équipes. Rejoignez-les dès
          maintenant et aidez-nous à façonner le produit.
        </p>
        <div className="mt-6">
          <Link
            href="/signup"
            className="inline-flex rounded-md border border-ink/20 px-5 py-2.5 text-sm font-normal text-ink transition-colors hover:bg-surface"
          >
            Devenir early adopter
          </Link>
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
      icon: Users,
      title: "Import",
      desc: "Importez votre base de contacts en CSV ou Excel ou ajouter les manuellement.",
    },
    {
      icon: Building2,
      title: "Organisation",
      desc: "Organisez vos contacts pour cibler les bonnes personnes avec les bons messages.",
    },
    {
      icon: GitBranch,
      title: "Campagnes",
      desc: "Créer et programmez vos campagnes SMS, Intégrer des liens vers vos LP pour inciter à l'action.",
    },
    {
      icon: CreditCard,
      title: "Suivi",
      desc: "Identifiez toutes les interactions (visites, clics, conversion) et adapter votre stratégie.",
    },
    {
      icon: BarChart3,
      title: "Automatisation",
      desc: "Déclenchez des séquences de relances automatiquement, et réengager les personnes.",
    },
    {
      icon: Workflow,
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
              <h3 className="mt-5 text-lg  leading-[0.95] tracking-[-0.03em] text-ink">{m.title}</h3>
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
  const points = [
    "Relances automatiques d'un prospect",
    "Configuration de la stratégie et des regles marketing",
    "Facture Stripe générée dès qu'une affaire est gagnée",
    "Synchronisation en temps réel entre toutes vos équipes",
  ];

  const steps = [
    { label: "Affaire gagnée · exemple", icon: Check },
    { label: "Facture Stripe générée", icon: CreditCard },
    { label: "Relance planifiée à J+3", icon: Workflow },
    { label: "Équipe notifiée", icon: Users },
  ];

  return (
    <section id="workflow" className="bg-surface py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
            Laissez le CRM travailler à votre place
          </h2>
          <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
            Réglez vos automatisations une fois, gagnez des heures chaque
            semaine. Vos commerciaux vendent, le CRM s&apos;occupe du reste.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="text-ink-2">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-border bg-card p-6">
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li
                key={step.label}
                className="flex items-center gap-4 rounded-md border border-border bg-canvas p-4"
              >
                <span className="font-mono text-xs font-normal text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-surface text-ink">
                  <step.icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="text-sm font-normal text-ink">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Automatisations IA — explique le badge du hero                     */
/* ------------------------------------------------------------------ */
function AiAutomations() {
  const features = [
    {
      icon: Sparkles,
      title: "Rédaction des SMS",
      desc: "L'IA rédige et optimise vos messages — accroche, appel à l'action, longueur — à partir de votre objectif et de votre audience.",
    },
    {
      icon: Clock,
      title: "Meilleur moment d'envoi",
      desc: "Chaque SMS part à l'heure où le contact est le plus susceptible d'ouvrir et de cliquer, d'après son historique d'engagement.",
    },
    {
      icon: Target,
      title: "Scoring des leads",
      desc: "Vos contacts sont classés par probabilité de conversion pour concentrer vos relances sur les prospects les plus chauds.",
    },
  ];

  return (
    <section id="ia" className="bg-canvas py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-md bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            Automatisations IA
          </span>
          <h2 className="mt-5 text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
            L&apos;IA qui fait vendre vos SMS
          </h2>
          <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
            Trois automatisations intelligentes pour écrire de meilleurs
            messages, les envoyer au bon moment et prioriser les bons contacts.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-md border border-border bg-card p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft text-accent">
                <f.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg leading-[0.95] tracking-[-0.03em] text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Offre early adopter + note de l'équipe (remplace faux chiffres)    */
/* ------------------------------------------------------------------ */
function EarlyAdopter() {
  const perks = [
    "Tarif de lancement conservé à vie",
    "Accès direct à l'équipe et à la roadmap",
    "Sans engagement, annulable à tout moment",
  ];

  return (
    <section id="clients" className="bg-canvas py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-md bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            Offre early adopter
          </span>
          <h2 className="mt-5 text-3xl font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl">
            Construisez TextoVibe avec nous
          </h2>
          <p className="mt-4 font-serif text-base font-light leading-[1.4] text-ink-2">
            Nous venons de lancer. En rejoignant les premières équipes, vous
            bénéficiez d&apos;un tarif de lancement et pesez directement sur ce
            que nous construisons ensuite.
          </p>
          <ul className="mt-8 space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="text-ink-2">{perk}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex rounded-md bg-action px-6 py-3 font-normal text-on-action transition-colors hover:bg-action-strong"
            >
              Rejoindre les early adopters
            </Link>
          </div>
        </div>

        <figure className="rounded-md border border-border bg-card p-8">
          <blockquote className="text-xl font-light leading-relaxed tracking-tight text-ink sm:text-2xl">
            « TextoVibe en est à ses débuts. Plutôt que d&apos;afficher des
            chiffres que nous n&apos;avons pas encore, nous préférons être
            honnêtes : rejoignez-nous tôt, et construisons ensemble un CRM dont
            les résultats parleront d&apos;eux-mêmes. »
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ink font-normal text-on-action">
              T
            </span>
            <span className="text-sm">
              <span className="block font-semibold text-ink">
                L&apos;équipe TextoVibe
              </span>
              <span className="block text-ink-3">MAD SRL</span>
            </span>
          </figcaption>
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
                <div className="mb-6 rounded-md bg-surface p-4">
                  <p className="text-sm font-medium text-ink">
                    {plan.smsIncluded.toLocaleString("fr-FR")} SMS/mois inclus
                  </p>
                  <p className="mt-1 text-xs text-ink-3">
                    SMS supplémentaire : {formatSmsOverage(plan.smsOverage)} ·{" "}
                    {plan.sender}
                  </p>
                </div>
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
                {plan.id === "enterprise" ? (
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-ink/20 px-4 py-2.5 text-center text-sm font-normal text-ink transition-colors hover:bg-surface"
                  >
                    Nous contacter
                  </a>
                ) : (
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
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink-3">
          {SMS_INFO.topUp} {SMS_INFO.countries}
        </p>

        <p className="mt-4 text-sm text-ink-3">
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
      <div className="mx-auto max-w-[1200px] px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-light leading-[0.95] tracking-[-0.03em] text-on-action sm:text-4xl">
          Prêt à faire avancer vos ventes ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-serif text-base font-light leading-[1.4] text-white/70">
          Lancez votre essai aujourd&apos;hui. Mise en route en quelques minutes,
          sans carte bancaire.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="rounded-md bg-card px-6 py-3 font-normal text-ink transition-colors hover:bg-canvas"
          >
            Essai gratuit
          </Link>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/25 px-6 py-3 font-normal text-on-action transition-colors hover:bg-white/10"
          >
            Demander une démo
          </a>
        </div>
      </div>
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
        <LaunchStrip />
        <PositioningBand />
        <Modules />
        <Workflows />
        <AiAutomations />
        <EarlyAdopter />
        <PricingTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
