# PAGE-SKELETON — Landing crm-saas (ossature annotée)

> Handoff pour `ui-ux-pro-max` / `frontend-design` / 21st.dev. **Pas de code.**
> Dérivé de `REFERENCES-STRATEGY.md` (rév. 2, tokens mesurés Playwright) + `design-references/refero/intercom/DESIGN.md`.
> Date : 2026-10-14.

## Principes directeurs (à ne pas perdre)
1. **Structure = Gem** (arc de conversion CRM), **re-narrée vers la VENTE** (pas le recrutement) : Contacts → Deals → Pipeline → Facturation → Rapports.
2. **Peau = direction A éditoriale-claire (Intercom)** : canvas crème, radius 4px, filets sans ombre, logos grayscale — **plus chaleureux et rapide** que le hero sombre de Gem.
3. **Conversion = PLG-first** : CTA primaire **« Essai gratuit »** (self-serve), secondaire **« Demander une démo »**. Inversion assumée vs Gem (démo-first).
4. **Contre le prix perçu** : hook simplicité/prix (copy Teamgate) tôt + pricing transparent remonté.
5. **Corrections vs Refero** : poids typo **400** (pas 300), bouton primaire **Ink `#111`** (pas `#000`), **accent propre à définir** (≠ violet `#0007cb`, ≠ bleu Gem `#0040ff`, ≠ orange HubSpot).

---

## Ossature desktop (≈1120–1200px conteneur, sections full-bleed, fond crème)

```
┌───────────────────────────────────────────────────────────────────────┐
│ [0] ANNOUNCEMENT BAR  (optionnel, dismissible)                          │
│     Fond #f1eee9 · SaansMono-like 12px · 1 lien souligné · ×            │
├───────────────────────────────────────────────────────────────────────┤
│ [1] HEADER / NAV            source: Gem+Intercom · nav height ~72px      │
│  ◆ Logo     Produit  Solutions  Tarifs  Ressources     [Démo] [Essai]   │
│                                            ghost ↑       ↑ fill Ink      │
│  ⓘ radius 4px · Essai gratuit = CTA primaire (fill #111, texte blanc)    │
│  ⓘ Démo = ghost text button · nav non sticky au départ (cf. Intercom)   │
├───────────────────────────────────────────────────────────────────────┤
│ [2] HERO                    source: Gem (arc) + Intercom (skin)         │
│  ┌─────────────────────────────┐   ┌───────────────────────────────┐   │
│  │ H1 (≤2 lignes, bénéfice)    │   │  Visuel produit : capture      │   │
│  │ ~56–64px, poids 400, ls tight│   │  pipeline/board CRM dans un    │   │
│  │ #111 sur crème              │   │  panel radius 4px, fond #f1eee9│   │
│  │                             │   │  (screenshot embarqué, pas     │   │
│  │ Sous-titre 16–20px #414141  │   │  flottant, pas d'ombre)        │   │
│  │ colonne ~420px              │   └───────────────────────────────┘   │
│  │ [Essai gratuit] [Voir démo] │   ⓘ PAS de hero sombre (on écarte      │
│  │  fill Ink ↑    ghost ↑      │      le registre premium de Gem)       │
│  └─────────────────────────────┘                                       │
│  ⓘ H1 orienté bénéfice vente (ex. « Votre pipeline, de la 1ʳᵉ prise de  │
│     contact au paiement »). Micro-preuve sous les CTA (note carte).     │
├───────────────────────────────────────────────────────────────────────┤
│ [3] BANDEAU LOGOS CLIENTS   source: Intercom                            │
│  grid 6 col · wordmarks GRAYSCALE (#888/#b8b8b8) · pas de couleurs      │
│  ⓘ discipline chromatique ; social proof discret, pas centerpiece       │
├───────────────────────────────────────────────────────────────────────┤
│ [4] HOOK PRIX / SIMPLICITÉ  source: Teamgate (copy)                     │
│  Bande #f1eee9 · 1 phrase forte « Toute la puissance CRM, sans le prix  │
│  ni la lourdeur de Salesforce » + 1 sous-ligne · (optionnel mini-CTA)   │
│  ⓘ placé TÔT pour neutraliser le prix perçu de l'esthétique premium     │
├───────────────────────────────────────────────────────────────────────┤
│ [5] GRILLE MODULES CRM      source: Gem (grille 3col/gap 24px) + Linear │
│  3 colonnes desktop · gap 24px · cartes radius 4px · filet #dedbd6      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                                 │
│  │ ⬡ Contacts│ │ ⬡ Deals   │ │ ⬡ Pipeline│   icônes lucide 1.5px #111    │
│  │ titre+desc│ │ titre+desc│ │ titre+desc│   titre 20–24px / body #414141 │
│  │ → lien    │ │ → lien    │ │ → lien    │                                │
│  └──────────┘ └──────────┘ └──────────┘                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                                 │
│  │ ⬡ Facturat│ │ ⬡ Rapports│ │ ⬡ Automat.│   (lucide: users, handshake,  │
│  │  (Stripe) │ │           │ │   (IA)    │    git-branch, credit-card,   │
│  └──────────┘ └──────────┘ └──────────┘    bar-chart, workflow)         │
├───────────────────────────────────────────────────────────────────────┤
│ [6] DIFFÉRENCIATEUR IA / AUTOMATISATION   source: Linear (cadrage)      │
│  Section 2 colonnes 50/50 · texte 300→400 + visuel produit             │
│  ⓘ cadrage « automatisez la saisie, priorisez les deals » — registre    │
│     'outil sérieux' sans copier le dark de Linear                       │
├───────────────────────────────────────────────────────────────────────┤
│ [7] PREUVE CHIFFRÉE / PIPELINE   source: Gem (re-narré vente)           │
│  Bandeau métriques (3–4 chiffres) + éventuel témoignage                 │
│  ⚠️ chiffres VENTE/revenu honnêtes (pas de métriques d'embauche Gem,    │
│     pas de chiffres inventés)                                           │
├───────────────────────────────────────────────────────────────────────┤
│ [8] INTÉGRATIONS           source: Gem/Intercom                         │
│  grille de logos d'intégrations (Stripe mis en avant) · grayscale       │
├───────────────────────────────────────────────────────────────────────┤
│ [9] PRICING TRANSPARENT    source: Polar + Intercom (remonté)           │
│  3 paliers · cartes radius 4px · 1 palier mis en avant (filet accent)   │
│  CTA par palier = « Essai gratuit » · mention Stripe · FAQ courte       │
│  ⓘ transparence prix = levier SMB prioritaire → ne pas enterrer         │
├───────────────────────────────────────────────────────────────────────┤
│ [10] CTA FINAL             source: Gem/Intercom (double CTA répété)     │
│  Bande contrastée · [Essai gratuit] primaire + [Demander une démo]      │
├───────────────────────────────────────────────────────────────────────┤
│ [11] FOOTER multi-colonnes  · liens produit/ressources/légal · #f1eee9  │
└───────────────────────────────────────────────────────────────────────┘
```

**Rythme vertical** : section-gap **64–96px** (⚠️ volontairement plus serré que les 120–240px de Gem, pour une page plus courte et scannable). Séparation des sections par **bascule de tons chauds** (`#faf9f6 → #f1eee9`), **pas** de filets durs (principe Intercom).

---

## Reflow mobile (390px) — annoté

- **Nav** → burger ; les 2 CTA restent visibles (Essai en fill, Démo en lien) ou passés dans le menu avec Essai épinglé.
- **Hero** → 1 colonne : H1 (clamp ~32–40px) → sous-titre → CTA empilés pleine largeur → visuel sous le texte.
- **Logos [3]** → 2–3 col.
- **Grille modules [5]** → **1 colonne** (cartes empilées, gap 16px).
- **2 colonnes [6]/[7]** → empilées, visuel après texte.
- **Pricing [9]** → cartes empilées, palier mis en avant en premier.
- ⚠️ Budget **LCP** : visuels lazy, hero image optimisée (next/image), éviter animations lourdes au-dessus de la ligne de flottaison.

---

## Tokens de travail — Direction A (corrigés, À VALIDER dans `DESIGN.md`)

```
Couleurs (base Intercom live + Refero)
  canvas          #faf9f6   (fond page — jamais blanc pur ni gris froid)
  surface alt     #f1eee9   (bandes/sections alternées)
  surface carte   #ffffff
  texte principal #111111   (Ink)
  texte secondaire#414141 / #585858
  filet/bordure   #dedbd6   (chaud, pas d'ombre)
  logos clients   #888888 / #b8b8b8  (grayscale)
  ACCENT          ⚠️ À DÉFINIR — propre à la marque, ≠ #0007cb ≠ #0040ff ≠ orange HubSpot
                   usage rare (1–2×/écran), jamais en fond de bouton primaire

Typographie (poids CORRIGÉ 400, cf. §5 strategy)
  famille         sans propre (candidats fallback : Inter / Söhne / Untitled Sans)
  display/H1      ~56–64px, poids 400, line-height ~1.0, letter-spacing négatif serré
  H2/H3           24–32px
  body            16px / lh 1.5
  mono (labels)   style SaansMono — tags/étiquettes, tracking large

Forme & espace
  base 4px · radius 4px universel (nav ok en 4–6px) · conteneur ~1120–1200px
  section-gap 64–96px · card-padding 24–32px · pas d'ombres
  bouton primaire : fill Ink #111, texte blanc, radius 4px (PAS le violet, PAS #000 pur)
```

> Format cible : `@theme` Tailwind v4. Le DESIGN.md Refero complet (CSS vars + `@theme`) est dans `design-references/refero/intercom/DESIGN.md` — **à adapter, pas copier** (substituer l'accent, corriger le poids 400).

---

## Handoff par skill
- **`ui-ux-pro-max`** : composer les sections dans l'ordre ci-dessus ; trancher l'accent propre + contraste AA sur crème ; valider la hiérarchie typo (poids 400).
- **`frontend-design` / 21st.dev** : composants à chercher/construire — carte-module (icône lucide + titre + desc + lien), bandeau logos grayscale, double-CTA réutilisable, tableau pricing 3 paliers, bloc métriques, navbar produit, footer multi-colonnes.
- **`motion-craft`** : définir micro-interactions (hover cartes, reveal au scroll) — **non mesurées** sur les références, à concevoir sobrement (cohérent avec le registre éditorial, pas d'excès).
- **`visual-qa`** : vérifier responsive 390/768/1200, états focus clavier, contraste accent, LCP mobile.
- **`asset-scout`** : captures produit (board pipeline, vue deal) sur fond crème, logos clients/intégrations (sans téléchargement non autorisé).

## Contre-argument (à garder en tête)
Le registre éditorial-clair peut paraître **moins « logiciel/technique »** qu'attendu pour un CRM ; si les tests montrent un déficit de crédibilité « outil », basculer certaines sections (grille modules, différenciateur IA) vers le registre B sombre de Linear pour un *dashboard-feel*, sans abandonner le canvas crème en hero.
