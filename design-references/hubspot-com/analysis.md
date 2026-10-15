# Reference Audit — HubSpot.com (homepage / design system)

> Statut : **partiel** — contenu et architecture OBSERVÉS via extraction texte ; rendu visuel, captures et interactions **NON VÉRIFIÉS** (aucun accès réseau navigateur sur la machine).

## 1. Contexte

| Champ | Valeur |
|---|---|
| Projet et marque | `crm-saas` — plateforme CRM SaaS (Next.js 16, React 19, Tailwind 4, Prisma, Stripe, NextAuth, lucide-react). Marque propre non encore définie. |
| Type de page / section | Homepage marketing complète + extraction du langage de design (tokens, composants, patterns de sections). |
| Cible et contexte utilisateur | *(hypothèse signalée)* décideurs et équipes sales/marketing/service de PME et mid-market cherchant un CRM tout-en-un. À confirmer. |
| Objectif UX / business | Convertir le visiteur vers « Get a demo » (sales-assisted) ou « Get started free » (PLG). Secondairement : établir crédibilité et compréhension du produit. |
| URL de la galerie, si applicable | Sans objet — site original. |
| URL du site original inspecté | https://www.hubspot.com/ |
| Date de consultation | 2026-10-14 |
| Mode | standard (dégradé — voir limites) |
| Outils réellement utilisés | WebFetch (extraction texte via canal harness) + WebSearch. **Playwright et Chrome indisponibles : DNS non résolu pour le navigateur et curl.** |
| Limites d'accès | Pas de rendu visuel, pas de capture, pas de mesure DOM, pas de hover/scroll/responsive/mobile observés. Tokens visuels issus de sources tierces documentant la marque HubSpot, **à valider**. |

## 2. Captures et états réellement obtenus

| Fichier / emplacement réel | Viewport | État / action | Ce que cela prouve |
|---|---|---|---|
| *non produit* | — | — | Aucune capture : le navigateur n'a aucun accès réseau sur cette machine (`net::ERR_NAME_NOT_RESOLVED`). Seule l'extraction texte via WebFetch a fonctionné. |

## 3. Analyse UX et contenu

**Proposition de valeur** — OBSERVÉ (WebFetch) : H1 « HubSpot Agentic Customer Platform », sous-titre « Build demand, win deals, and delight customers — all on one platform ». Positionnement « tout-en-un » (données + équipes + IA) martelé dès le hero et répété en section « What is HubSpot? » (« brings together your teams, tools, AI, and customer data »).

**H1 et sous-titre** — OBSERVÉ : un H1 court orienté plateforme, un sous-titre en bénéfices (verbes d'action : build / win / delight). Le hero porte en plus un carrousel de 3 messages (données clients, alignement des équipes, « AI you control. Results you can trust »).

**CTA principal** — OBSERVÉ : double CTA systématique **« Get a demo »** (sales) + **« Get started free »** (PLG), présent dans le header, le hero et la section finale. Stratégie de double parcours (self-serve vs. assisté) répétée aux 3 points de conversion de la page.

**Hiérarchie de l'information** — OBSERVÉ, ordre des sections :
1. Header (nav + double CTA)
2. Hero (H1 + sous-titre + carrousel 3 slides + double CTA)
3. « What is HubSpot? » + preuve sociale (« Trusted by 306,000+ customers », logos eBay/DoorDash/Reddit/TripAdvisor/Eventbrite)
4. Grille produits « Growing a business is hard » (6 Hubs + 3 cartes Smart CRM/Agent Hub/Bundle + carte AEO Beta)
5. Showcase Agent Hub (IA) — carrousel 3 agents
6. Intégrations « 2,000+ integrations » (logos partenaires)
7. Études de cas « Remarkable results » (onglets Enterprise / Mid-Sized / Small Business, 3 métriques par cas)
8. Reconnaissance G2 « Voted #1 in 526 G2 Reports » (6 badges)
9. CTA final « Make impossible growth feel impossibly easy »
10. Footer riche (6 groupes de liens, réseaux sociaux, badges stores, légal)

Logique narrative : **promesse → crédibilité → quoi (produits) → différenciateur (IA) → écosystème → preuve chiffrée → validation tierce → conversion**. C'est un patron de landing B2B SaaS classique et éprouvé.

**Preuves / rassurance / objections** — OBSERVÉ : empilement dense de preuves (nombre de clients, logos, 2000+ intégrations, études de cas segmentées par taille d'entreprise avec métriques, badges G2). Répond aux objections « est-ce crédible / est-ce pour ma taille d'entreprise / ça s'intègre à mon stack ».

**Frictions possibles** — INFÉRÉ : hero chargé (H1 + sous-titre + carrousel 3 messages + double CTA + badge IA) pouvant diluer l'attention ; double CTA systématique = choix récurrent imposé au visiteur. Transposable, mais à hiérarchiser pour une marque plus jeune.

## 4. Analyse visuelle

> ⚠️ Tous les constats « identité visuelle » ci-dessous sont **INFÉRÉS de sources tierces** documentant la marque HubSpot (palette logo, benchmarks de design system), **non mesurés sur le DOM live**. À valider avant adoption.

| Dimension | Observation étayée | Intérêt / limite pour notre projet |
|---|---|---|
| Grille et composition | INFÉRÉ : structure en sections pleine largeur empilées, alternance de fonds, grilles de cartes (6 Hubs) et carrousels. | Patron directement réutilisable : sections full-bleed + grille de cartes produit. |
| Espacements et rythme | NON VÉRIFIÉ (pas de mesure DOM). | À définir nous-mêmes via l'échelle Tailwind 4. |
| Typographie | INFÉRÉ : marque historique = **sans-serif** ; rebrand « Canvas » récent documenté avec paire **serif (titres) + sans (corps)**, titres légers jusqu'à ~80px. | Décision à prendre (voir §7). Une paire serif-titres / sans-corps donnerait une personnalité distincte. |
| Palette et surfaces | INFÉRÉ (sources tierces) : orange « Lorax » **#FF7A59** (primaire/CTA), navy « Atomic » **#33475B**, bleu « Calypso » **#00A4BD**, foncé « Obsidian » **#2D3E50**. Rebrand Canvas évoque un orange plus saturé (~#FF4800) + fonds crème. | Palette CRM crédible : un accent orange chaud + navy texte/surfaces sombres. **Ne pas copier la couleur de marque telle quelle** (risque d'identité calquée). |
| Images et cadrages | NON VÉRIFIÉ : WebFetch signale vidéos/placeholders dans le hero et logos clients, sans rendu. | À traiter par `asset-scout` plus tard. |
| Icônes | OBSERVÉ (présence) : chaque Hub a une icône ; projet a déjà `lucide-react`. | Un jeu d'icônes par Hub/feature — cohérent avec lucide. |
| Cartes, composants, Bento | OBSERVÉ (présence) : cartes produit à icône + titre + description + lien « Learn more » ; onglets d'études de cas ; carrousels ; badges de preuve. | Composants cœur à construire (voir handoff §8). |

## 5. États interactifs et animations

| Déclencheur | Élément | Avant → après observé | Capture / preuve | Limites |
|---|---|---|---|---|
| auto / scroll | Carrousel hero (3 slides) | NON VÉRIFIÉ | aucune | Présence de 3 messages détectée dans le texte ; rotation/durée/easing non observés. |
| auto / clic | Carrousel Agent Hub (3 agents, « pause control ») | NON VÉRIFIÉ | aucune | Contrôle pause mentionné dans le contenu ; comportement non observé. |
| clic | Onglets études de cas (Enterprise/Mid/Small) | NON VÉRIFIÉ | aucune | Structure à onglets détectée ; transition non observée. |
| hover | CTA, cartes, nav | NON VÉRIFIÉ | aucune | Aucun état hover inspectable sans rendu. |

Aucune animation ne doit être attribuée à GSAP/Motion : non observable ici. Handoff motion → `motion-craft` après inspection réelle.

## 6. Responsive et accessibilité apparente

- **Desktop :** NON VÉRIFIÉ (pas de rendu). Structure logique full-width déduite du contenu seulement.
- **Mobile :** NON VÉRIFIÉ — aucune inspection à 390×844 possible.
- **Clavier / focus :** NON VÉRIFIÉ.
- **Lisibilité / contrastes apparents :** NON VÉRIFIÉ. Note : orange #FF7A59 sur blanc a un contraste de texte insuffisant (AA) pour du petit texte — à surveiller si réutilisé comme couleur d'accent.
- **Réduction du mouvement :** NON VÉRIFIÉ.
- **Points de vigilance :** header propose un toggle d'accessibilité et un sélecteur de langue (OBSERVÉ dans le contenu) — signal d'attention i18n/a11y, mais non testé.

## 7. Décisions pour notre projet

### À reprendre (principes, pas copie)

1. **Double parcours de conversion répété** — Pourquoi : adresse à la fois le self-serve (PLG) et le sales-assisted ; preuve : « Get a demo » + « Get started free » présents au header, hero et CTA final (OBSERVÉ). Application : prévoir dans notre landing deux CTA cohérents (« Essai gratuit » + « Demander une démo ») répétés en haut et en bas.
2. **Narration promesse → preuve → produit → preuve chiffrée** — Pourquoi : structure B2B éprouvée qui lève les objections dans l'ordre ; preuve : ordre des 10 sections (OBSERVÉ). Application : reprendre cet enchaînement pour notre page d'accueil.
3. **Preuve sociale segmentée par taille d'entreprise** — Pourquoi : chaque ICP se reconnaît ; preuve : onglets Enterprise/Mid/Small avec 3 métriques chacun (OBSERVÉ). Application : études de cas en onglets avec métriques chiffrées.
4. **Grille de cartes produit à icône + titre + description + lien** — Pourquoi : rend scannable une offre multi-modules ; preuve : grille des 6 Hubs (OBSERVÉ). Application : présenter nos modules CRM (Contacts, Deals, Pipeline, Facturation Stripe, Rapports…) en cartes `lucide-react`.
5. **Accent chaud + navy comme couleur de confiance** — Pourquoi : un accent orange sur base navy/sombre lit « CRM sérieux mais accessible » ; preuve : palette de marque HubSpot (INFÉRÉ, sources tierces). Application : définir UN accent (pas forcément orange) + une famille navy pour texte/surfaces.

### À adapter

- **Couleur de marque** : ne pas réutiliser l'orange HubSpot (#FF7A59) tel quel → choisir un accent propre pour éviter une identité calquée. HubSpot sert de *patron de système*, pas de palette à copier.
- **Densité du hero** : HubSpot empile H1 + sous-titre + carrousel 3 messages + double CTA + badge IA. Pour une marque jeune, simplifier : un seul message fort, un visuel, deux CTA.
- **Typographie** : décider entre sans-serif sobre (sécurité) ou paire serif-titres/sans-corps (personnalité, direction « Canvas »). À trancher dans `DESIGN.md`.

### À éviter

- **Copier le carrousel hero auto-rotatif** — risque UX (le mouvement automatique nuit à la lecture et à l'a11y) et non vérifié ici.
- **Surcharge de preuves** — HubSpot peut se permettre 306k clients + 526 rapports G2 ; un CRM jeune doit rester crédible (ne pas gonfler les chiffres).
- **Reproduire les assets, logos clients, icônes ou code** de HubSpot — interdit.

## 8. Handoff pour UI UX Pro Max / frontend-design / 21st.dev

- **Sections et ordre suggérés :** Header (nav + 2 CTA) → Hero (1 message + 2 CTA + visuel) → Bandeau preuve/logos → Grille modules CRM (cartes) → Section différenciateur (IA/automatisation si pertinent) → Intégrations → Études de cas en onglets → Validation tierce/notes → CTA final → Footer.
- **Layout :** sections full-bleed empilées, conteneur centré max ~1200–1280px ; grille de cartes 3 colonnes desktop → 1 colonne mobile ; alternance de fonds clair/sombre pour rythmer.
- **Responsive :** mobile-first à **valider par inspection réelle** (non fait ici) ; priorité mobile = H1 + CTA primaire visibles sans scroll ; grilles → colonne unique ; onglets études de cas → accordéon ou scroll horizontal.
- **Typographie / palette candidates (À VALIDER dans `DESIGN.md`, non mesurées) :**
  - *Option A (sobre)* : Inter/Geist en titres et corps.
  - *Option B (personnalité, dir. HubSpot Canvas)* : serif en titres (ex. une serif variable) + sans en corps.
  - Accent : à choisir (éviter #FF7A59) ; base texte/surfaces sombres type navy `#33475B`/`#2D3E50`.
  - Format Tailwind 4 `@theme` (le projet est en Tailwind v4 — tokens via CSS variables).
- **Composants à rechercher (21st.dev) ou créer :** carte-module (icône+titre+desc+lien), bandeau logos clients, onglets d'études de cas avec métriques, grille de pricing (→ Stripe), double-CTA réutilisable, navbar avec méga-menu produits, footer multi-colonnes.
- **Interactions à implémenter / valider :** survols de cartes et CTA, onglets d'études de cas, transitions de sections au scroll — toutes **à concevoir/inspecter ensuite** (non observées ici) ; confier le motion à `motion-craft`.
- **Assets à rechercher séparément :** captures produit / illustrations de dashboard CRM, icônes de modules (lucide déjà présent) — via `asset-scout`, sans téléchargement non autorisé.
- **Risques et coûts de complexité :** carrousels (a11y + JS), méga-menu (complexité nav), densité de preuves (contenu à produire), contraste de l'accent orange (AA).

## 9. Incertitudes et limites

- NON VÉRIFIÉ — **aucun rendu visuel** : layout exact, espacements, typographie réelle, couleurs du DOM, images, mobile, hover, scroll, animations. Cause : navigateur sans accès DNS (`net::ERR_NAME_NOT_RESOLVED`) ; `curl` échoue aussi.
- INFÉRÉ — tokens de couleur/typo issus de **sources tierces** (palettes de marque, benchmarks de design system), potentiellement partiellement générées ; à confirmer sur la source officielle HubSpot avant toute adoption.
- OBSERVÉ — uniquement le **contenu textuel et l'architecture** des sections, via extraction markdown (WebFetch) le 2026-10-14.
- Divergence notée : palette historique (#FF7A59 / #33475B) vs. rebrand « Canvas » (~#FF4800, serif, fonds crème) — HubSpot semble en transition d'identité.

## 10. Conclusion

**Verdict :** HubSpot est une **excellente référence de *structure et de système* pour un CRM SaaS** — son architecture de page (promesse → preuve → produit → preuve chiffrée → double conversion) et sa bibliothèque de composants (cartes-modules, onglets d'études de cas, bandeaux de preuve, double CTA) sont directement transposables et adaptées à votre ICP et à votre stack Tailwind 4 / lucide.

**En revanche, cet audit ne peut PAS servir de base de *design system visuel fiable*** en l'état : sans rendu navigateur, les couleurs, la typographie, les espacements et le responsive ne sont pas mesurés — seulement inférés de sources tierces. Reprendre le *patron* de HubSpot : oui. En dériver des tokens exacts : non, pas sans une inspection visuelle réelle.

**Prochaine décision :** (1) rejouer l'inspection visuelle quand un navigateur aura accès réseau (ou fournir des captures) pour mesurer tokens/responsive ; (2) en parallèle, trancher dans `DESIGN.md` l'accent de marque et la paire typographique parmi les candidats ci-dessus ; (3) lancer `ui-ux-pro-max` / `frontend-design` sur le patron de sections validé.
