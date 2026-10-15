# Références de design — crm-saas

Index des audits de références visuelles/UX. Chaque fiche documente ce qui a été réellement observé, ce qui est inféré, et ce qui reste non vérifié.

| Référence | Type | Objet de l'audit | Statut | Fiche |
|---|---|---|---|---|
| HubSpot.com | Site original (CRM SaaS leader) | Patron d'architecture de page + langage de composants ; tokens visuels inférés | Partiel (contenu OBSERVÉ, visuel NON VÉRIFIÉ) | [design-references/hubspot-com/analysis.md](../../design-references/hubspot-com/analysis.md) |
| Stratégie de références (Gem · Linear · Intercom/Refero) | Synthèse multi-galeries (Lapa, Awwwards, Refero Styles) | Sélection modèle principal + inspiration + DESIGN.md Intercom ; classement UX/UI | Partiel (contenu/structure OBSERVÉS, visuel NON VÉRIFIÉ — pas de Playwright) | [REFERENCES-STRATEGY.md](../../REFERENCES-STRATEGY.md) |

Synthèse 2026-10-14 : **modèle principal = Gem (gem.com)**, **inspiration = Linear (linear.app)**, **design system aligné = Intercom via Refero Styles**. Détails et handoff dans [REFERENCES-STRATEGY.md](../../REFERENCES-STRATEGY.md).

## Note de méthode

- Audit du 2026-10-14 réalisé **sans rendu navigateur** (pas d'accès réseau pour Chrome/Playwright/curl sur la machine) : seule l'extraction texte via WebFetch a fonctionné.
- Les tokens de couleur/typographie attribués à HubSpot proviennent de **sources tierces** et sont des **candidats à valider**, non des mesures du DOM live.
- À rejouer avec inspection visuelle réelle (ou captures fournies) pour établir des tokens fiables dans `DESIGN.md`.
