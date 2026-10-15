# SOURCE — Intercom DESIGN.md (Refero Styles)

| Champ | Valeur |
|---|---|
| Marque | Intercom |
| URL fiche Refero | https://styles.refero.design/style/12255b63-e506-4bc1-a4cd-d05487de32f3 |
| URL site original | https://intercom.com |
| Date d'accès | 2026-10-14 |
| Variante | Onglet **DESIGN.md** (contenu unique, pas de bascule Compact/Extended proposée à cette date) |
| Méthode d'extraction | Lecture intégrale du bloc `<pre>` affiché dans la page via Playwright MCP (`browser_evaluate`), puis décodage JSON → Markdown. Aucun contournement d'auth ni de paywall. |
| Statut | **COMPLET** — 24 336 caractères, du titre `# Intercom — Style Reference` au bloc `@theme` Tailwind v4 fermé. Pas de troncature détectée. |
| Fichier | `design-references/refero/intercom/DESIGN.md` |

## Avertissement Refero (repris tel quel en tête du document)
> « Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components. »

→ Les tokens sont des **métadonnées normalisées/interprétées**, pas une capture du DOM de production.

## Écarts observés entre Refero et le site live (inspection DOM 2026-10-14)
- **Poids typographique display** : Refero affirme **300** (« the whisper-weight is the entire identity ») ; le DOM live de `intercom.com` déclare **font-weight 400** sur le H1 (80px). Écart réel à trancher — voir `REFERENCES-STRATEGY.md` §5.
- **Bouton primaire** : Refero documente un fill **`#000000`** ; le CTA « Start free trial » live mesure **`#111111`** (Ink). Nuance mineure.
- **Accent `#0007cb`** : non observé dans le premier écran live (cohérent avec « used sparingly »).
- Canvas `#faf9f6`, texte `#111111`, radius `4px` : **confirmés** au pixel sur le site live.

## Conditions d'usage
Document d'inspiration conservé pour référence. **Ne pas** copier palette/typo/tokens tels quels dans `DESIGN.md` du projet ni dans `tokens.css`. À adapter (accent propre, poids corrigé) lors de la passe UX/UI. Provenance conservée ; marque et assets non reproduits.
