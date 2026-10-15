# REFERENCES-STRATEGY — crm-saas

> Document consolidé de recherche de références UX/UI (reference-audit).
> **Ne contient aucun code, asset ou recopie de site.** Recommandations pour `ui-ux-pro-max`, `frontend-design`, 21st.dev.
> Date de consultation : **2026-10-14**.
> **Révision 2 (2026-10-14) — passe de validation visuelle Playwright effectuée.** Les lacunes « rendu navigateur » de la v1 sont désormais comblées pour Gem, Linear et Intercom (voir §0bis et §2bis). Les tokens annoncés par Refero ont été confrontés au DOM live.

---

## 0. Note de méthode et d'honnêteté (à lire avant tout)

> **Mise à jour rév. 2 :** le MCP Playwright est maintenant **connecté et opérationnel** (navigation, resize, screenshot, `evaluate` des styles calculés, mobile). Les lignes ci-dessous conservent l'historique de la v1 (audit statique) ; la colonne « rév. 2 » indique ce qui a été levé.

| Point | Réalité v1 (audit statique) | Rév. 2 (passe Playwright) |
|---|---|---|
| Playwright | **Indisponible** à la v1. | ✅ **Disponible et utilisé** le 2026-10-14. |
| Rendu navigateur / captures | **Non produits.** | ✅ **6 captures réelles** produites (desktop 1440×900 + mobile 390×844) — voir §0bis. |
| Tokens (couleur/typo/radius/grille) | Non mesurés ; déduits du texte ou issus de Refero. | ✅ **Mesurés sur le DOM live** via `getComputedStyle` pour Gem, Linear, Intercom. |
| Canal réseau | HTTP direct (HTML lu puis supprimé). | Navigateur réel (Chromium Playwright), rendu complet JS. |
| Ce qui reste **NON VÉRIFIÉ** | Tout le rendu visuel. | **Animations/motion** (easing/durée non mesurés), scroll profond, états focus clavier, pagination JS Landbook. |

Conséquence : l'audit est désormais fiable sur **l'architecture de page, le positionnement, ET les tokens de rendu mesurés** (couleurs, typographie, radius, grilles) pour les 3 références inspectées. Il ne couvre toujours **pas** le motion fin ni le rendu de toutes les sections scrollées. Les tokens Refero restent des **métadonnées de référence** — mais plusieurs ont pu être **confirmés ou corrigés** par la mesure DOM (voir §5).

---

## 0bis. Passe de validation visuelle Playwright — preuves (rév. 2)

Inspection le **2026-10-14**, Chromium via MCP Playwright, desktop **1440×900** et mobile **390×844**. Captures conservées dans `design-references/` (le dossier `.playwright-mcp/` contient les snapshots d'accessibilité bruts).

| Référence | URL finale visitée | Captures (chemins réels, vérifiés) |
|---|---|---|
| **Gem** | `https://www.gem.com/?i=1` | `design-references/gem-com/desktop-1440-hero.png` · `design-references/gem-com/mobile-390-home.png` |
| **Linear** | `https://linear.app/` | `design-references/linear-app/desktop-1440-hero.png` · `design-references/linear-app/mobile-390-home.png` |
| **Intercom** | `https://www.intercom.com/` | `design-references/intercom-com/desktop-1440-hero.png` · `design-references/intercom-com/mobile-390-home.png` |

**Méthode de mesure :** `getComputedStyle` sur `body`, `h1`, boutons visibles, sections, et histogramme de `border-radius` ; lecture des variables CSS `:root` quand exposées (Linear). Les valeurs ci-dessous sont **OBSERVÉES** (DOM live), sauf mention contraire.
**Limites restantes :** le full-page screenshot de Gem a dépassé le délai (page très longue/animée) → capture du premier écran uniquement ; le **motion** (durées, easing, ScrollTrigger) n'est pas mesuré ; la décomposition fine des sections basses n'a pas été rejouée écran par écran.

---

## 1. Brief projet (déduit du repo)

| Champ | Valeur |
|---|---|
| Projet | `crm-saas` — plateforme CRM SaaS. Stack : Next.js 16, React 19, Tailwind **v4**, Prisma, Stripe, NextAuth, `lucide-react`. |
| Marque | Non encore définie (pas de `DESIGN.md` / `BRIEF.md` dans le repo). |
| Cible *(hypothèse signalée)* | Équipes sales/ops de PME & mid-market cherchant un CRM simple, abordable, sans la lourdeur Salesforce. À confirmer. |
| Objectif de page | Landing marketing → conversion double **« Essai gratuit » (PLG)** + **« Demander une démo » (sales-assisted)**. |
| Antériorité | Un audit HubSpot existe (`design-references/hubspot-com/analysis.md`) : patron d'architecture validé, tokens visuels non mesurés. |

---

## 2. Galeries parcourues — ce qui a réellement été trouvé

| Galerie | URL interrogée | Résultat de l'extraction texte |
|---|---|---|
| **Lapa Ninja** | `lapa.ninja/category/saas/` | ✅ Listings exploitables. Catégorie « 691 B2B SaaS examples ». Marques listées : Gusto, Webflow, **Linear**, **Polar**, Mintlify, Outseta, Teamwork Graph, Subframe, Greptile, Granola, ReadMe, Cosmos… |
| **Awwwards** | `awwwards.com/websites/crm/` | ✅ Listings exploitables. Catégorie CRM : **Gem (Recruiting/Talent CRM)**, **Teamgate CRM**, **RAYNET CRM**, CRM Portal (ScienceSoft), Streamline, Media-Soft CRM/CLM. |
| **Landbook** | `land-book.com/design/website/saas` | ✅ **Visité (reprise connexion).** Le chemin `/design/website/saas` server-rend la 1ʳᵉ page de listings (la suite est paginée en JS). Front page SaaS actuelle dominée par **AI-agents + fintech** : Parloa (customer service AI), LeadCraft, Sunbeam (template B2B), ReadyLaunch, PayPath/Lightspark (fintech), Weave, Time.fyi, Navia. **Aucun CRM de vente pur** en page 1 — le plus proche est Parloa (relation/support client). |

### Candidats inspectés (sites réels, contenu OBSERVÉ via HTML)

| Candidat | Source galerie | Positionnement (H1/meta OBSERVÉS) | CTA OBSERVÉS |
|---|---|---|---|
| **Gem** · gem.com | Awwwards (CRM) | « Better recruiting. Built on Gem. » — CRM recrutement IA, *source → review → hire → report, all in one place*. Preuve pipeline + métriques. | **Get a demo** + **Contact Sales** + Pricing |
| **Linear** · linear.app | Lapa (SaaS) | « The product development system for teams and agents » — SaaS B2B IA-natif, `theme-color #08090a` (surface quasi-noire). | **Sign up** + **Get started** + Contact sales |
| Teamgate · teamgate.com | Awwwards (CRM) | « The CRM for Sales-Led Growth » / « CRM without the Salesforce Price Tag ». CRM de vente, positionné simplicité + prix. | Essai / démo (positionnement anti-Salesforce) |
| Polar · polar.sh | Lapa (SaaS) | « A billing platform for the intelligence era » — Merchant of Record, usage-based billing. | — |
| Parloa · parloa.com | **Landbook** (SaaS) | « AI agents that turn customer conversations into lasting loyalty » — plateforme CX agentique (voix/chat), enterprise. Cadre de confiance fort : « Trusted by leading brands », certif SAP, « Born in the EU. Secure by design ». | Démo / contact |

### §2bis. Tokens mesurés sur le DOM live (OBSERVÉ, rév. 2)

> Valeurs issues de `getComputedStyle` le 2026-10-14. rgb converti en hex. Ce sont des **mesures du rendu actuel**, pas des guides de marque officiels — à adapter, jamais copier.

**Gem — `gem.com`** *(canvas clair + hero sombre, accent bleu électrique)*
| Token | Valeur mesurée | Note |
|---|---|---|
| Canvas page (body) | `#fcfcfc` (rgb 252,252,252) | Off-white légèrement chaud, pas blanc pur |
| Texte principal | `#0b0b0b` (rgb 11,11,11) | Quasi-noir |
| Fond hero | image/vidéo **sombre** (body transparent, H1 en blanc `#fcfcfc`) | Hero contrasté sombre sous canvas clair |
| **Accent / CTA primaire** | **`#0040ff`** (rgb 0,64,255) — « Get a demo » | Bleu électrique, texte blanc, radius ~1px |
| CTA secondaire | `#e7e4e4` fond, texte `#0b0b0b` — « Contact Sales » | Gris chaud clair |
| Typo display (H1) | **« Society Book » (serif)**, 64px, weight 450, line-height 0.95, letter-spacing −2.98px | H1 serif inattendu — contrepoint éditorial fort |
| Typo body | **« Die Grotesk A » (grotesque sans)**, 16px | Pairing serif display / sans body |
| Radius | ~**1px** (boutons, nav) | Coins quasi nets |
| Bandes de section | `#e7e4e4`, `#f3f2f2` alternées | Gris chauds très clairs |
| Grille features | **3 colonnes** `415 / 465 / 415px`, gap **24px**, conteneur ~1425px | Colonne centrale plus large |
| Section-gap | jusqu'à **120–240px** | Respiration généreuse |

**Linear — `linear.app`** *(sombre produit — variables CSS exposées en clair)*
| Token (`:root`) | Valeur mesurée | Note |
|---|---|---|
| `--color-bg-primary` | **`#08090a`** | Confirme le `theme-color` de la v1 |
| `--color-bg-secondary` | `#1c1c1f` | Surface cartes/élévation |
| `--color-text-primary` | `#f7f8f8` | Blanc cassé |
| `--color-accent` | **`#7170ff`** | Périwinkle/violet-bleu |
| `--radius-8` | **8px** | Radius de base |
| `--page-max-width` | **1024px** | ⚠️ Plus étroit que les 1200px supposés en v1 |
| `--header-height` | 72px | Nav fixe |
| Typo | **« Inter Variable »** ; H1 64px, weight 510, line-height 1.0, letter-spacing −1.41px | Pas de serif ; densité maîtrisée |
| Boutons nav | **pilule** (radius 9999px) ; CTA primaire « Sign up » fond `#e5e5e6` clair sur sombre | Inversion clair-sur-sombre |

**Intercom — `intercom.com`** *(éditorial clair — confronté aux tokens Refero, voir §5)*
| Token | Valeur mesurée | vs Refero |
|---|---|---|
| Canvas / bandes section | **`#faf9f6`** (rgb 250,249,246) | ✅ **Confirme** « Canvas Cream #faf9f6 » |
| Texte principal | **`#111111`** (rgb 17,17,17) | ✅ **Confirme** « Ink #111111 » |
| CTA primaire « Start free trial » | fond **`#111111`**, texte blanc, **radius 4px** | ✅ radius 4px confirmé ; ⚠️ fond = Ink `#111`, **pas** `#000` pur |
| Radius dominants (histogramme) | **4px** (cards/CTA) puis **6px** (nav) | « 4px universel » ≈ vrai, mais nav en 6px |
| Typo | **« Saans »** ; H1 **80px, weight 400**, line-height 1.0, letter-spacing −2.4px ; body/para 15px weight **400** | ✅ Saans confirmé ; ⚠️ **poids 400, PAS 300** comme annoncé par Refero |
| Accent violet `#0007cb` | **non observé** dans le 1ᵉʳ écran ni les CTA | Conforme à la note Refero « emphase rare » — usage hors premier fold |
| CTA | triple : « Contact sales » + « View demo » + « Start free trial » | Sales-assisted + démo + self-serve |

---

## 3. Classement par pertinence UX et UI

> Pertinence pour **notre** projet (CRM PME/mid-market, pipeline + facturation Stripe), pas beauté absolue.

### Pertinence UX (domaine, narratif de conversion, structure)
1. **Gem** — arc narratif CRM complet *source → review → hire → report* + preuve pipeline + métriques ; double CTA sales/PLG. Mappe presque 1:1 nos modules (Contacts → Deals → Pipeline → Rapports).
2. **Teamgate** — positionnement ICP le plus net (« CRM sans le prix Salesforce ») : excellent pour le **messaging** d'une marque jeune, moins pour la richesse de page.
3. **Linear** — structure produit exemplaire (Intake → Planning → AI/automations → Build/ship) mais domaine = product dev, pas CRM.
4. **Polar** — pertinent uniquement pour le **module facturation/Stripe**, pas pour le cœur CRM.

### Pertinence UI (craft, transposabilité Tailwind v4 / lucide)
1. **Linear** — référence de craft B2B SaaS la plus imitée : surfaces sombres, restraint, densité maîtrisée, typographie nette. Haute transposabilité.
2. **Gem** — UI moderne et primée (Awwwards), orientée data/metrics, claire.
3. **Polar** — moderne, propre.
4. **Teamgate** — plus conventionnel / daté visuellement.

---

## 4. Sélection

### ✅ Modèle PRINCIPAL — **Gem** (gem.com)
**Pourquoi.** C'est le meilleur compromis UX+UI pour *ce* projet : un **CRM IA réel**, primé Awwwards, dont l'**architecture narrative** (tout-en-un → pipeline → preuve chiffrée → double CTA) correspond exactement à ce qu'une landing CRM doit faire, et dont le **craft UI** est au niveau d'un produit moderne. Il valide et enrichit le patron HubSpot déjà audité, avec une exécution plus jeune et plus transposable à notre stack.
**Confirmé à l'inspection (rév. 2).** Le craft est réel : canvas off-white `#fcfcfc` + **hero sombre contrasté**, **accent bleu électrique `#0040ff`** sur le CTA primaire, pairing typographique assumé **serif display (Society Book 64px) / grotesque body (Die Grotesk A)**, radius quasi net (~1px), grille features **3 colonnes / gap 24px** et section-gaps généreux (120–240px). ⚠️ Nuance utile : l'accent de Gem (`#0040ff`) est très proche du violet-bleu d'Intercom — à ne pas reprendre tel quel (voir §7).

### 💡 Modèle d'INSPIRATION — **Linear** (linear.app)
**Pourquoi.** Référence de **système visuel et de retenue**, pas de structure : surface sombre `#08090a`, hiérarchie typographique affirmée, découpage de features *Intake / Planning / AI & automations / Build & ship*, cadrage « agents IA ». À utiliser pour **élever le langage visuel** au-dessus d'un CRM générique — sans copier (Linear n'est pas un CRM).
**Confirmé à l'inspection (rév. 2).** Tokens lus directement dans les variables CSS `:root` : `--color-bg-primary #08090a`, `--color-bg-secondary #1c1c1f`, texte `#f7f8f8`, **accent `#7170ff`**, **radius de base 8px**, **conteneur 1024px** (plus étroit que supposé), header 72px, typo **Inter Variable** (H1 64px/weight 510), nav en **boutons pilule**. Registre « outil sérieux » cohérent.

### Références secondaires (notées, non principales)
- **Teamgate** → banque de **formules de positionnement** (« CRM sans le prix Salesforce ») pour le copywriting ICP.
- **Polar** → à ressortir plus tard pour la **section pricing/facturation Stripe** uniquement.
- **Parloa** (Landbook) → référence de **cadre de confiance enterprise** (« trusted by leading brands », certifications, « secure by design / EU ») : utile si l'ICP monte en gamme, mais domaine = support/CX, pas vente. Ne remplace pas Gem.
- *Écartées :* RAYNET / CRM Portal / Media-Soft (plus datés, faible apport UI) ; templates Landbook (Sunbeam/ReadyLaunch) = génériques, non retenus.

---

## 5. Volet Refero Styles — marque alignée + DESIGN.md

**Galerie consultée :** `styles.refero.design` (2 000+ design systems lisibles par IA). Marques B2B/SaaS/fintech présentes : Intercom, Ramp, Brex, Mercury, Notion, Vercel, Figma, Resend, Raycast, Perplexity, ElevenLabs… *(Aucun CRM pur — Attio/Linear/HubSpot/Salesforce absents du catalogue à cette date.)*

> **Rév. 2 — DESIGN.md Refero désormais RÉCUPÉRÉ.** La fiche Intercom (`/style/12255b63-e506-4bc1-a4cd-d05487de32f3`) a été ouverte dans Playwright et son **DESIGN.md complet (24 336 car.)** extrait sans paraphrase → `design-references/refero/intercom/DESIGN.md` (+ `SOURCE.md`, statut COMPLET). Il contient palette complète (13 couleurs nommées), échelle typo, composants, do/don't, surfaces, et les blocs CSS vars + `@theme` Tailwind v4.

**Marque retenue comme la plus alignée : Intercom** — c'est la catégorie la plus proche d'un CRM (plateforme de relation client / support IA), avec un design system sophistiqué et « confiant ».
- **Site réel inspecté :** `intercom.com` — en v1 en HTML direct, **et en rév. 2 au navigateur Playwright** (desktop + mobile, captures §0bis). H1 : *« A complete system for AI and human customer service »* ; structure : *Two products → helpdesk → Fin (AI agent) → better support → integrations → transparent pricing*. Double logique produit + pricing transparent.
- ✅ **Rendu désormais vérifié** (rév. 2) : voir la confrontation tokens Refero ↔ DOM ci-dessous.

### DESIGN.md Intercom — tokens récupérés sur Refero *(métadonnées de référence, à valider)*

**Concept.** « Magazine éditorial imprimé sur papier crème chaud » : canvas crème au lieu du gris SaaS froid, type en **poids 300** (display *et* body) pour une autorité par la retenue, **un seul violet vif** faisant tout le travail chromatique en micro-doses, **coins nets 4px** partout, mono à tracking large comme système d'étiquettes, serif 300 comme contrepoint éditorial.

| Rôle | Valeur | Usage documenté |
|---|---|---|
| Accent (unique) | **Electric Violet `#0007cb`** | Emphase rare — max 1–2 fois/écran, jamais en couleur de bouton primaire |
| Bouton primaire | **Carbon `#000000`** (fond noir) | Ancre sans poids ; jamais le violet |
| Texte principal | Ink `#111111` | Plus doux que le noir pur, lisible sur crème |
| Texte secondaire/tertiaire | Iron `#414141` / Graphite `#585858` | Hiérarchie de gris |
| Canvas page | **Canvas Cream `#faf9f6`** | Fond par défaut (pas de blanc/gris froid) — « non négociable » |
| Surface alt / cartes | Linen `#f1eee9` / Pure White `#ffffff` | Bandes alternées, cartes |
| Bordures | Hairline `#dedbd6` (stone chaud) | Filets, dividers, inputs — pas d'ombres décoratives |
| Logos clients | Ash/Smoke `#a0a0a0`/`#888888` | Rendus en grayscale (discipline chromatique) |

**Typographie.** Primaire **Saans** (fallback Inter/Söhne). Mono **SaansMono** (12–14px, tracking +1.2px) = système d'étiquettes/tags. Serif **Serrif** 300 (16px) = contrepoint éditorial dans le corps. Échelle *Minor Third (1.2)* base 16px.
**Forme & espacement.** Base 4px · max-width **1200px** · section gap **64–96px** · card padding 24–32px · **border-radius 4px universel** (nav/tags/cards/inputs/buttons). Densité « comfortable ».

### Confrontation Refero ↔ DOM live (rév. 2) — ce que l'inspection a confirmé ou corrigé

| Affirmation Refero | Mesure DOM (2026-10-14) | Statut |
|---|---|---|
| Canvas Cream `#faf9f6` | Sections en `rgb(250,249,246)` = `#faf9f6` | ✅ **Confirmé** |
| Texte Ink `#111111` | H1 & body en `rgb(17,17,17)` = `#111111` | ✅ **Confirmé** |
| Bouton primaire noir `#000000` | « Start free trial » en `#111111` (Ink) | ⚠️ **Corrigé** : Ink, pas noir pur |
| Radius 4px universel | Histogramme : **4px** dominant (cards/CTA), **6px** sur la nav | ✅ **Confirmé** (avec exception nav 6px) |
| Police **Saans** | `font-family: Saans` sur H1 et body | ✅ **Confirmé** |
| Display & body en **poids 300** | H1 mesuré **weight 400** (80px, lh 1.0, ls −2.4px) ; body **400** | ⚠️ **Corrigé** : poids réel **400**, pas 300 |
| Accent Electric Violet `#0007cb`, « rare » | **Non observé** dans le 1ᵉʳ écran ni dans les CTA | ⓘ Cohérent avec « emphase rare » — à chercher plus bas dans la page |
| max-width 1200px | Sections mesurées ~1425px de large (bandes full-bleed, contenu interne non isolé à la mesure) | ⚠️ **À re-mesurer** sur le conteneur de contenu |

**Conclusion §5 :** le **langage chaud-éditorial d'Intercom est bien réel** (crème `#faf9f6` + Ink `#111` + radius 4px confirmés au pixel). Seules deux métadonnées Refero sont à corriger : le **poids typographique (400, pas 300)** et le **bouton primaire (Ink `#111`, pas `#000`)**. Ces corrections priment sur les valeurs Refero pour notre transposition.

> Refero expose aussi un onglet **Tailwind v4 CSS Variables** pour cette fiche — directement pertinent vu notre stack Tailwind v4, à transcrire **en adaptant l'accent** (ne pas réutiliser `#0007cb` tel quel : risque d'identité calquée) **et en corrigeant le poids typo à 400**.

---

## 6. Matrice de transposition (handoff implémentation)

| Besoin projet | Source | Principe OBSERVÉ | Adaptation | Risque / statut |
|---|---|---|---|---|
| Hero / H1 | Gem | H1 bénéfice court (serif 64px) sur **hero sombre** + double CTA | H1 orienté bénéfice CRM + 2 CTA (Essai / Démo) | ✅ Layout OBSERVÉ (desktop+mobile) |
| Double conversion | Gem + Intercom + HubSpot (audit) | Sales-assisted + self-serve répétés | « Essai gratuit » + « Demander une démo » en header, hero, CTA final | ✅ OK (triple CTA Intercom confirmé en rendu) |
| Preuve / métriques | Gem | « The numbers speak for themselves » + « proof is in the pipeline » | Bandeau métriques + logos clients en **grayscale** (cf. Intercom) | Chiffres à produire honnêtement |
| Découpage features | Linear + Gem | Intake → Planning → AI/automations → Build/ship | Contacts → Deals → Pipeline → Facturation → Rapports (cartes `lucide`) | ✅ Grille Gem OBSERVÉE : **3 col / gap 24px** |
| Système visuel | Intercom (Refero + DOM) | Canvas crème `#faf9f6`, **poids 400**, accent unique, radius **4px**, filets sans ombre | **Option claire-éditoriale** : crème + 1 accent propre (≠ violet) + radius 4px + Tailwind v4 `@theme` | ✅ Tokens mesurés (crème/Ink/4px confirmés ; poids corrigé 400) |
| Système visuel (alt) | Linear | Surface sombre `#08090a`, radius 8px, conteneur 1024px, densité, Inter | **Option sombre-produit** pour un dashboard-feel | ✅ Tokens `:root` OBSERVÉS |
| Pricing / Stripe | Polar + Intercom | « Transparent pricing », billing usage-based | Section pricing claire, 3 paliers, lien Stripe | — |
| Positionnement | Teamgate | « CRM sans le prix Salesforce » | Hook ICP anti-complexité pour le copy | — |

**Deux directions à trancher dans `DESIGN.md` :**
- **A — Éditorial clair (Intercom-like)** : crème `#faf9f6`, type 300, 1 accent propre, radius 4px, filets. Chaleureux, premium, différenciant.
- **B — Produit sombre (Linear-like)** : surface `#08090a`, densité, restraint. « Outil sérieux ».
Recommandation : **A** pour une landing CRM PME (chaleur + confiance + lisibilité), en gardant B comme registre possible pour l'app/dashboard.

---

## 7. À reprendre / adapter / éviter

**Reprendre :** double CTA répété (Gem/Intercom) ; narratif tout-en-un → pipeline → preuve → conversion (Gem) ; logos clients grayscale (Intercom) ; radius unique + filets sans ombre + un accent discipliné (Intercom) ; découpage features scannable par cartes (Linear/Gem).
**Adapter :** choisir un **accent propre** (≠ violet Intercom, ≠ orange HubSpot) ; transcrire les tokens Refero en `@theme` Tailwind v4 **après validation** ; calibrer le registre (clair éditorial vs sombre produit).
**Éviter :** copier palette/typo d'une marque (identité calquée) ; recopier assets/logos/code ; sur-promettre des chiffres ; présumer des animations non observées.

---

## 8. Handoff `ui-ux-pro-max` / `frontend-design` / 21st.dev
- **Ordre de sections suggéré :** Header (nav + 2 CTA) → Hero (1 message + 2 CTA + visuel) → bandeau logos grayscale → grille modules CRM (cartes `lucide`) → section différenciateur IA/automatisation (cadrage Linear) → preuve chiffrée/pipeline (Gem) → intégrations → pricing transparent (3 paliers, Stripe) → CTA final → footer.
- **Grille (OBSERVÉE rév. 2) :** cartes **3 colonnes desktop, gap 24px** (mesuré sur Gem) → 1 col mobile ; section-gap généreux **~120px** (Gem va jusqu'à 240px). Conteneur : viser **~1024–1200px** — Linear mesuré à **1024px**, Intercom à re-mesurer (sections full-bleed ~1425px). Choisir 1120–1200px pour une landing CRM.
- **Composants à construire / chercher sur 21st.dev :** carte-module (icône+titre+desc+lien), bandeau logos grayscale, double-CTA réutilisable, tableau de pricing, bloc métriques/preuve, navbar produit, footer multi-colonnes.
- **Tokens candidats (mesurés sur Intercom, À VALIDER avant adoption) :** dir. A — canvas `#faf9f6`, texte `#111111`, bandes alt `#f1eee9`/`#fff`, radius **4px** (nav 6px), **type poids 400** (corrigé depuis Refero), **accent propre à définir** (≠ violet `#0007cb`, ≠ bleu Gem `#0040ff`, ≠ orange HubSpot). Format Tailwind v4 `@theme`.
- **Tokens candidats dir. B (mesurés sur Linear) :** bg `#08090a`, surface `#1c1c1f`, texte `#f7f8f8`, radius **8px**, conteneur 1024px, Inter Variable. Réservé à l'app/dashboard.
- **Motion :** ✅ captures statiques faites, mais **durées/easing toujours NON MESURÉS** → confier à `motion-craft` pour une passe multi-états (le protocole exige ≥2 états par animation).
- **Assets :** captures dashboard CRM / illustrations → `asset-scout` (sans téléchargement non autorisé).
- **Validation visuelle :** ✅ **effectuée en rév. 2** (Gem, Linear, Intercom, desktop+mobile, tokens mesurés — §0bis/§2bis). Reste pour `visual-qa` : re-mesurer le conteneur de contenu Intercom, les sections basses scrollées et les états focus/hover.

---

## 9. Incertitudes et limites

**Levé en rév. 2 (passe Playwright) :**
- ✅ Rendu visuel desktop **et mobile** de Gem, Linear, Intercom — 6 captures réelles (§0bis).
- ✅ Tokens Intercom **mesurés sur le DOM live** et confrontés à Refero (crème/Ink/radius 4px confirmés ; poids 400 et bouton Ink corrigés).
- ✅ Grille Gem (3 col / gap 24px), tokens Linear (`:root`), triple CTA Intercom — tous OBSERVÉS.

**Reste NON VÉRIFIÉ :**
- **Motion** : durées, easing, bibliothèque d'animation — non mesurés (capture statique ≠ animation ; nécessite ≥2 états → `motion-craft`).
- **Conteneur de contenu Intercom** : sections mesurées full-bleed (~1425px) ; le max-width réel du contenu interne reste à isoler.
- **Sections basses scrollées** et **états focus clavier / hover** : non rejoués systématiquement.
- **Full-page Gem** : timeout sur la capture pleine page (page très longue) → premier écran seulement.
- **Landbook** : toujours limité à la **1ʳᵉ page server-rendered** ; pagination JS profonde non explorée. Aucun CRM de vente pur en page 1.

## 10. Verdict
**Gem** reste la meilleure référence *principale* pour un CRM SaaS : domaine exact, arc de conversion complet, et un **craft désormais vérifié** (canvas `#fcfcfc` + hero sombre, accent `#0040ff`, pairing serif/grotesque, grille 3 col/24px). **Linear** élève le système visuel et fournit des **tokens sombres réels** (`#08090a`, radius 8px, 1024px, Inter). **Intercom** confirme au pixel un **langage chaud-éditorial** transposable en Tailwind v4 (crème `#faf9f6`, Ink `#111`, radius 4px) — à condition de **corriger le poids typo à 400**, de choisir un **bouton primaire Ink** et de **substituer un accent propre** (ni le violet Intercom, ni le bleu Gem, ni l'orange HubSpot). Contre-argument assumé : la passe visuelle couvre désormais les tokens statiques, mais **le motion et le responsive fin des sections basses restent à valider** avant figer le `DESIGN.md`.
