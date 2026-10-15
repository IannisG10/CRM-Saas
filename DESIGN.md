# DESIGN.md — crm-saas

> Direction UX/UI de la landing page. Produit par `ui-ux-pro-max` à partir de
> `REFERENCES-STRATEGY.md` (rév. 2, tokens mesurés Playwright), des captures `design-references/`,
> et de `design-references/refero/intercom/DESIGN.md` (métadonnées de référence, à adapter — pas copier).
> **Stack :** Next.js 16 · React 19 · Tailwind **v4** (`@theme`) · lucide-react.
> **Statut :** direction validée, **pas encore implémentée** (ne pas coder tant que ce fichier n'est pas confirmé).
> Date : 2026-10-14.

## Légende de statut
- 🔒 **Verrouillé** — choix déjà validé en amont (stratégie/ossature). Ne pas revenir dessus sans décision explicite.
- 🆕 **Décidé ici** — proposé par cette passe UX/UI, modifiable.
- ❓ **À confirmer** — levier de marque laissé ouvert, en attente de ton go.

---

## 0. Intention de marque
CRM SaaS pour **PME / mid-market**, cœur **pipeline de vente + facturation Stripe**. Registre **éditorial-clair, chaud et confiant** (direction A) — l'inverse du SaaS froid bleu/gris. Objectif : paraître **simple, abordable et premium** sans signaler « enterprise cher ». 🔒
Personnalité : *calme, précis, humain*. On gagne la confiance par la **retenue** (espaces, filets fins, pas d'ombres tape-à-l'œil), pas par le volume.

---

## 1. Hiérarchie de page (ordre + priorité visuelle) 🔒
Reprend `PAGE-SKELETON.md`. Priorité de lecture décroissante :

1. **Header** — nav + double CTA (Essai primaire, Démo secondaire).
2. **Hero** — 1 message bénéfice (H1) + sous-titre + double CTA + visuel produit (board pipeline). Micro-preuve sous les CTA.
3. **Bandeau logos clients** (grayscale).
4. **Hook prix/simplicité** (« sans le prix ni la lourdeur de Salesforce »).
5. **Grille modules CRM** — Contacts · Deals · Pipeline · Facturation (Stripe) · Rapports · Automatisation (IA).
6. **Différenciateur IA / automatisation** (2 colonnes).
7. **Preuve chiffrée / pipeline** (métriques vente honnêtes).
8. **Intégrations** (Stripe mis en avant).
9. **Pricing transparent** — 3 paliers, 1 mis en avant.
10. **CTA final** (double CTA répété).
11. **Footer** multi-colonnes.

**Narratif = Gem re-narré vers la vente** (pas le recrutement). **Peau = Intercom** (éditorial-clair). 🔒

---

## 2. Grille & layout 🆕
| Paramètre | Valeur | Note |
|---|---|---|
| Conteneur max | **1200px** 🔒 | Contenu centré ; bandes de section full-bleed, contenu contraint. |
| Colonnes | **12 colonnes**, gutter **24px** | Desktop. |
| Padding latéral | 24px (mobile) · 48px (tablette) · 80px (desktop) | |
| Grille modules | **3 col desktop**, gap **24px** → 2 col tablette → **1 col mobile** 🔒 | Mesuré sur Gem. |
| Sections 2 colonnes | **50/50**. Gauche : **titre display Inter 300 (40–54px)** + texte courant (serif 16/300 ou Inter 400) + **paire de boutons**. Droite : **illustration éditoriale**. Marges verticales 64–96px. 🔒 | Appliqué à « Laissez le CRM travailler à votre place ». |
| Section-gap vertical | **64–96px** 🔒 | Volontairement plus serré que Gem ; marge interne cartes **24–32px**, écart entre éléments **8–16px**. |
| Séparation sections | **INVISIBLE** — ni lignes, ni dégradés 🔒 | Uniquement bascule de tons (`#faf9f6 → #f1eee9`) + espacement vertical. Renforce le flux éditorial (aucun `border-y` entre sections). |
| Élévation | **pas d'ombres** — profondeur par tons de fond + espace 🔒 | |

---

## 3. Typographie 🆕 (lean sans validé + label mono + serif optionnel)
| Rôle | Police | Poids | Taille (desktop) | Interlignage | Tracking |
|---|---|---|---|---|---|
| Hero / display | **Inter** | **300** | **40 / 54 (tab) / 80px** · `#111111` | **0.95** | **−0.03em** |
| H2 section (primary) | Inter | **300** | 36px (30→36) | **0.95** | **−0.03em** |
| Grand titre positionnement | Inter | **300** | 24→30px | **0.95** | **−0.03em** |
| H3 / titre carte | Inter | **300** | 18px | **0.95** | **−0.03em** |

> **Unité des titres (MàJ 2026-10-15, demande utilisateur) :** tous les titres (display + primary + cartes) partagent le **même style que le headline Hero** — `weight 300`, `letter-spacing −0.03em`, `line-height 0.95`, Inter. **Seule la taille varie** selon la section. Le `−0.03em` (em) garde le tracking proportionnel à chaque taille.
| **Sous-titres** (Hero + sections) | **Source Serif 4** (serif, substitut « Serrif ») | **300** | **16px** | **1.4** | 0 |
| **Corps / paragraphes** | **Inter** | **400** | 16px | 1.5 | −0.01em |
| **Texte d'accompagnement** (helper, captions, micro-copy) | **Inter** | **400** | 14px | 1.4 | 0 |
| Boutons / nav (UI) | Inter | 400 | 14–16px | — | 0 |
| **Label / eyebrow** | **IBM Plex Mono** | 500 | 12–13px **UPPERCASE** | 1.2 | **+0.08em** |
| Caption | **Helvetica** | 400 | 12px | 1.4 | 0 |

**Décisions clés :**
- **Système à 3 familles** (MàJ 2026-10-15, demande utilisateur) :
  - **Inter** → **titres & display en 300** (H1/H2/H3, letter-spacing −0.03em, lh 0.95) **ET corps + texte d'accompagnement + UI/boutons en 400** (là où la lisibilité prime). Une seule famille sans, deux rôles distingués par le poids (300 titres / 400 lecture). 🔒
  - **Source Serif 4** (serif) → **sous-titres** du Hero et des sections : **16px / lh 1.4 / weight 300**. Substitut libre de la « Serrif » d'Intercom (contrepoint éditorial). 🆕
  - **IBM Plex Mono** → labels/eyebrows (signature SaansMono d'Intercom), uppercase, tracking large. 🔒
  - *Helvetica retirée : le corps est repassé en Inter 400 pour une lisibilité et une cohérence cross-plateforme supérieures (Inter chargé via `next/font`, plus d'écart Windows→Arial).*
- **Inter** reste le *fallback officiel de Saans* chez Intercom et la police de Linear → fidèle au monde de référence pour les titres.
- **Graisses Helvetica allégées (MàJ 2026-10-14)** : UI/boutons/nav en **400** (plus de 500), grands chiffres en **500** (plus de 600). Encre **assombrie** (`ink #0a0a0a`, `ink-2 #242424`, `ink-3 #3a3a3a`) pour un texte beaucoup plus noir. ⚠️ Sous Windows (Arial), pas de graisse < 400 ; le corps 400 ne peut pas être aminci davantage sans changer de police.
- **Display Hero = Inter 300 (Light), spec Intercom exacte** 🔒 (MàJ 2026-10-15, demande utilisateur) : **80px desktop / 54px tablette / 40px mobile**, line-height **0.95**, letter-spacing **−0.03em** (= −2.4px @80px, −1.62px @54px), couleur **#111111**, aligné à gauche, multi-lignes — la « whisper-weight » d'Intercom (poids 300 à grande taille). Les H2/H3 restent en **600**. *(Historique : avait été passé en 500 puis 700 ; retour au 300 d'origine Refero sur demande.)*
- **Base 16px, interligne body 1.5** (règle d'accessibilité). 🔒
- La signature éditoriale est portée par **labels mono + canvas crème + filets chauds**, pas par un serif.

**Import (référence) :**
`next/font` → `Inter:wght@300;400;500;600;700` + `Source_Serif_4:wght@300;400` + `IBM+Plex+Mono:wght@500`. (Inter = titres 300 + corps/UI 400 ; plus de Helvetica.)

---

## 4. Couleurs 🆕 (adapté du DESIGN.md Refero + accent propre + sémantique)
> Palette neutre chaude **reprise d'Intercom** (confirmée au pixel : crème `#faf9f6`, Ink `#111`). **Accent remplacé** par une couleur propre (règle anti-identité-calquée 🔒).

### Neutres & surfaces (🔒 repris d'Intercom, confirmés DOM)
| Rôle | Hex | Token Tailwind v4 |
|---|---|---|
| Canvas page | `#faf9f6` | `--color-canvas` |
| Surface alt (bandes) | `#f1eee9` | `--color-surface` |
| Surface chaude accent (rare) | `#d3cec6` | `--color-surface-strong` |
| Carte / inversé | `#ffffff` | `--color-card` |
| Texte principal (Ink) | `#0a0a0a` | `--color-ink` |
| Texte secondaire | `#242424` | `--color-ink-2` |
| Texte tertiaire | `#3a3a3a` | `--color-ink-3` |
| Texte désactivé / muted | `#6b6b6b` | `--color-ink-muted` |
| Filet / bordure (hairline chaud) | `#dedbd6` | `--color-border` |
| Logos clients (grayscale) | `#b8b8b8` | `--color-logo` |

### Accent de marque 🔒 — **Prune profond** (validé 2026-10-14)
| Rôle | Hex | Token | Usage |
|---|---|---|---|
| **Accent** | **`#6B2C5F`** | `--color-accent` | **Emphase rare** (1–2×/écran) : liens d'emphase, strokes d'icônes sélectionnées, bordure du palier pricing « populaire », ring de focus, ponctuation de tags. **Jamais** en fond de bouton primaire. 🔒 |
| Accent hover/foncé | `#561F4D` | `--color-accent-strong` | États hover sur éléments accentués. |
| Accent tint (fond doux) | `#F0E8EF` | `--color-accent-soft` | Fond de badge/ring léger sur crème. |

**Pourquoi prune :** registre **premium/éditorial**, chaud et confiant, **sémantiquement neutre** (n'entre pas en conflit avec le vert de succès ni le rouge d'erreur), et **très distinctif** sur le marché CRM — à l'écart de toutes les contraintes (≠ violet `#0007cb` Intercom, ≠ bleu `#0040ff` Gem, ≠ orange HubSpot, ≠ vert sémantique). Contraste mesuré **≈ 9.1:1 sur crème** (texte AAA ✅), **≈ 9.7:1 en blanc sur accent** (si fill ponctuel).

### Actions & sémantique 🆕
| Rôle | Hex | Token | Note |
|---|---|---|---|
| **Bouton primaire (fill)** | `#111111` / texte `#ffffff` | `--color-action` / `--color-on-action` | **Ink, pas l'accent.** 🔒 Fort contraste sur crème. |
| Bouton primaire hover | `#000000` | `--color-action-strong` | Assombrissement, pas d'ombre. |
| Succès / deal gagné | `#1F9D6B` | `--color-success` | Vert — aucune collision avec l'accent prune. |
| Avertissement | `#B45309` | `--color-warning` | Amber. |
| Erreur / destructif | `#B42318` | `--color-danger` | Rouge profond. |
| Ring de focus | `#6B2C5F` | `--color-ring` | 2px, offset 2px — **focus toujours visible** (a11y 🔒). |

---

## 5. Espacements & formes 🆕
- **Base 4px.** Échelle : `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 112px`. 🔒
- **Padding carte :** 24–32px. **Gap d'éléments :** 8–16px.
- **Border-radius : 4px universel** (nav, cartes, inputs, tags, boutons). Pas de pilules, pas de 12px+. 🔒
- **Pas d'ombres** ; densité « comfortable ». 🔒

---

## 6. CTA & conversion 🔒🆕
| CTA | Style | Où |
|---|---|---|
| **Primaire — « Essai gratuit »** (PLG) 🔒 | Fill **Ink `#111`**, texte blanc, radius 4px, padding 14×20px, poids 500 ; hover → `#000` | Header · Hero · chaque carte pricing · CTA final |
| **Secondaire — « Demander une démo »** | Ghost/outline : fond transparent, bordure 1px `#111` (ou texte + soulignement au hover), texte Ink | Header · Hero · CTA final |

- **Priorité PLG-first** assumée (inversion vs Gem démo-first). 🔒
- Double CTA **répété** (Gem/Intercom) ; cible tactile **≥ 44×44px**, espacement ≥ 8px. 🔒 (a11y)
- Micro-preuve sous le CTA hero (ex. « sans carte bancaire · 14 jours »).
- Pricing : CTA par palier = « Essai gratuit » ; palier « populaire » souligné par **bordure accent émeraude**.
- Formulaire démo : **low-friction** (champs minimaux, label visible, erreur près du champ, helper text). 🔒

---

## 7. Responsive 🔒🆕
Mobile-first. Breakpoints : **390 (mobile) · 768 (tablette) · 1024 · 1280px**.

| Bloc | Mobile (390) | Tablette (768) | Desktop (≥1024) |
|---|---|---|---|
| Nav | Burger ; CTA « Essai » épinglé visible | Burger ou nav condensée | Nav complète + 2 CTA |
| Hero | 1 col : H1 → sous-titre → CTA empilés pleine largeur → visuel dessous | 1 col large | 2 col (texte / visuel) |
| Logos | 2–3 col | 4 col | 6 col |
| Modules | **1 col** (gap 16px) | 2 col | **3 col** (gap 24px) |
| 2 colonnes | empilé, visuel après texte | empilé/50-50 | 50/50 alterné |
| Pricing | empilé, palier populaire **en premier** | 2+1 ou empilé | 3 col |

Règles 🔒 : viewport meta, **zoom autorisé**, **pas de scroll horizontal**, pas de largeurs fixes en px sur les conteneurs, images `next/image` + lazy, réserver l'espace média (CLS < 0.1).

---

## 8. Motion 🆕 (subtil — dial 3/10)
- **Scroll reveal** : fade + translation **8–16px**, **300–400ms**, `power1.out`, `toggleActions: play none none reverse`.
- **Hover** : transition couleur/opacité **150–200ms** (cartes, liens, boutons).
- **Interdits** : animer `width`/`height` ; une seule durée pour tout ; autoplay sous reduced-motion.
- **`prefers-reduced-motion`** : rendre l'état final immédiatement, désactiver les reveals. 🔒
- Détail fin (easing/durées des références) **non mesuré** → à affiner avec `motion-craft`.

---

## 9. Icônes & imagerie 🆕

### Langage visuel de CRMine 🔒 (MàJ 2026-10-15)
Reposer sur un **mélange à parts égales** de trois registres :
1. **Photographie éditoriale** — plans **humains chaleureux**, cadrés **façon art de vivre (lifestyle)**, **étalonnage naturel**. **Jamais** l'aspect clinique/froid des banques d'images stock.
2. **Illustration dessinée à la main** — trait fin, organique, noir & blanc, qui fait écho à la chaleur de la serif.
3. **Captures d'écran produit** — **toujours présentées sur des fonds crème chauds** (`#f1eee9`), radius 4px, **jamais flottantes sur du blanc**, pour rester intégrées dans le ton du système.

L'imagerie **ponctue** la page (texture, atmosphère), elle n'est pas le héros.

### Sourcing des assets (WebSearch 2026-10-15)
> `asset-scout` n'existe pas dans l'environnement ; sourcing manuel. Ne rien télécharger sous copyright sans accord ; vérifier la licence à chaque fois.

**Photographie** (chaude, humaine, lifestyle, lumière naturelle) :
- **Unsplash** (`unsplash.com`) et **Pexels** (`pexels.com`) — licence type **CC0**, usage commercial sans attribution. Requêtes conseillées : « candid team meeting natural light », « small business owner warm », « founder portrait daylight ». Éviter les visuels corporate froids/clinique.

**Illustration dessinée à la main** (trait fin, N&B) :
- ⭐ **Open Peeps** (`openpeeps.com`) — **hand-drawn, contours noirs sans remplissage** = correspond exactement à notre registre. **CC0**, modulaire (Pablo Stanley).
- Alternatives : **Humaaans** (modulaire mais coloré, CC0), **DrawKit** (orienté SaaS — licence propre : commercial OK, **pas** de redistribution/templates/AI-training), **Blush** (scènes d'artistes, tier gratuit avec crédit).

**Placement par registre** : photo → témoignage (✅ fait) + éventuelle bande « humaine/confiance » ; illustration Open Peeps N&B → colonne droite de la section Automatisation (remplacer le mock) + spots d'états vides ; captures produit → hero (✅) + sections features. Toujours **sur surround crème**, jamais sur blanc.

**En place (assets réels)** : capture produit (hero, surround crème) · **portrait CEO** au témoignage (`public/ceo-portrait.avif`) · **photo équipe** chaleureuse (Pexels CC0) dans la section 2 colonnes « Laissez le CRM… » (`public/team-meeting.jpg`, cadre crème, `next/image` lazy, alt descriptif). SonarGrid (trame de points) sur le **hero** ET la bande CTA finale « Prêt à faire avancer vos ventes ».
**`Corporate background.png`** : ⚠️ **hors direction** (gratte-ciel froid/clinique) → non utilisé.

### Règles d'implémentation
- **lucide-react**, stroke **1.5px**, monochrome `#111` (ou `#b8b8b8` au repos). Jamais d'emoji comme icône. 🔒
- Icônes modules suggérées : `users` (Contacts), `handshake`/`briefcase` (Deals), `git-branch`/`kanban` (Pipeline), `credit-card` (Facturation), `bar-chart-3` (Rapports), `workflow`/`sparkles` (Automatisation IA), `plug` (Intégrations).
- **Captures produit sur fond crème** (`#f1eee9`), radius 4px, **jamais flottantes sur blanc pur** (surround `bg-surface`, pas `bg-card` blanc isolé).
- **Logos clients & intégrations en grayscale** (discipline chromatique). 🔒
- Alt text systématique ; icônes décoratives `aria-hidden`. 🔒 (a11y)

---

## 10. Accessibilité (garde-fous) 🔒
- Contraste texte **≥ 4.5:1** (accent émeraude validé à 5.9:1 sur crème).
- Focus visible partout (ring accent 2px/offset 2px).
- Navigation clavier complète ; hiérarchie de titres **h1→h2→h3** sans saut.
- Cibles tactiles ≥ 44×44px ; pas d'info portée par la couleur seule.
- Respect `prefers-reduced-motion`.

---

## 11. Bloc de tokens `@theme` (spécification — à implémenter plus tard, NE PAS câbler maintenant)
> Illustratif : nomme les tokens à poser dans `app/globals.css`. L'implémentation viendra après validation.

```css
@theme {
  /* Surfaces & neutres (repris d'Intercom, confirmés DOM) */
  --color-canvas: #faf9f6;
  --color-surface: #f1eee9;
  --color-surface-strong: #d3cec6;
  --color-card: #ffffff;
  --color-ink: #0a0a0a;
  --color-ink-2: #242424;
  --color-ink-3: #3a3a3a;
  --color-ink-muted: #6b6b6b;
  --color-border: #dedbd6;
  --color-logo: #b8b8b8;

  /* Accent de marque (émeraude) + actions + sémantique */
  --color-accent: #6b2c5f;
  --color-accent-strong: #561f4d;
  --color-accent-soft: #f0e8ef;
  --color-action: #111111;
  --color-on-action: #ffffff;
  --color-action-strong: #000000;
  --color-success: #1f9d6b;
  --color-warning: #b45309;
  --color-danger: #b42318;
  --color-ring: #6b2c5f;

  /* Typo (3 familles) : Inter = titres 300 + corps/UI 400, Source Serif 4 = sous-titres, IBM Plex Mono = labels */
  --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Source Serif 4', ui-serif, Georgia, 'Times New Roman', serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  /* h1,h2,h3 → font-sans @300 ; body → font-body @400 ; sous-titres → font-serif (16px/1.4/300) ; labels → font-mono */

  /* Espacement (base 4px) */
  --spacing-4: 4px;  --spacing-8: 8px;  --spacing-12: 12px; --spacing-16: 16px;
  --spacing-24: 24px; --spacing-32: 32px; --spacing-48: 48px; --spacing-64: 64px;
  --spacing-96: 96px; --spacing-112: 112px;

  /* Forme */
  --radius-md: 4px;

  /* Layout */
  --container-max: 1200px;
}
```

---

## 12. Décisions tranchées (2026-10-14) ✅
1. **Accent = prune profond `#6B2C5F`** — validé (voir §4).
2. **Typo = 100 % Inter + IBM Plex Mono**, pas de serif de contrepoint — validé (voir §3).

Plus aucune décision de marque en suspens : la direction est prête pour l'implémentation.

## 13. Ce qui reste à faire après validation
- Poser les tokens `@theme` dans `app/globals.css` + charger les polices (`next/font`). *(implémentation — hors de cette passe)*
- `visual-qa` : contraste accent, focus clavier, LCP mobile, responsive 390/768/1200.
- `motion-craft` : durées/easing fins (non mesurés sur les références).
- `asset-scout` : captures produit sur crème, logos grayscale.
