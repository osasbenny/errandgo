# CODEX HANDOFF — ErrandGo Production Architecture Merge
**Date:** 9 October 2026  
**Repository:** osasbenny/errandgo  
**Branch:** main  
**Status:** Ready for phased engineering after founder/kickoff gates

## Mission
Continue ErrandGo from the existing frontend prototype into the approved production architecture **without destroying or visually rewriting the current Vite/React/Tailwind design**.

The existing frontend is not disposable. It is the approved visual baseline for Phase 1.

## Non-Negotiable Architecture

```text
/
├── src/                 → Existing Vite 5 / React 18 / TypeScript / Tailwind CSS 3 web
├── public/
├── apps/
│   ├── admin/           → Next.js / Vercel
│   └── mobile/          → React Native / Expo
├── packages/
│   ├── domain/
│   ├── types/
│   ├── validation/
│   ├── config/
│   └── providers/
├── functions/           → Firebase Cloud Functions
├── docs/
└── scripts/
```

Shared production services:

```text
Firebase Auth
Firestore
Cloud Functions
Firebase Storage
Firebase Cloud Messaging
Paystack
Dojah
Google Maps
Shared packages/domain logic
```

**Supabase is not part of the production architecture and has been removed from the root dependency set.**

## Current Frontend Rule
Preserve:
- visual hierarchy,
- layout,
- typography direction,
- green/neutral premium palette,
- responsive behavior,
- claymorphism/premium surface treatment,
- marketing/customer/admin concepts already present.

Do not:
- replace the current web UI with a new template,
- perform a framework migration just for preference,
- rewrite styling wholesale,
- remove working responsive states,
- add backend logic directly into giant UI components.

Refactor incrementally.

## Phase 1 — Web Platform
1. Audit `src/App.tsx` and `src/index.css`.
2. Split the current UI into reusable components/features while maintaining pixel-level visual parity.
3. Add proper routing for public/auth/customer routes.
4. Create typed domain models and mock service interfaces.
5. Add loading/empty/error states.
6. Add form validation with Zod/React Hook Form.
7. Introduce Firebase Auth/Firestore client adapters only after environment setup is available.
8. Deploy to Vercel.
9. Run responsive/accessibility/visual regression checks.

### Phase 1 acceptance
The site must look like the current approved design, but be structurally maintainable and ready for real backend wiring.

## Phase 2 — Admin Command Center
Create `apps/admin` as a separate Next.js/Vercel application.

Implement:
- dashboard,
- users,
- runners,
- KYC review,
- errands,
- payments,
- payouts,
- disputes,
- service zones,
- categories,
- fees/config,
- analytics,
- audit logs,
- settings.

Use Firebase server-side authorization and audit every privileged mutation.

Do not rely on the current embedded admin preview as production architecture; use it as a design/product reference.

## Phase 3 — Mobile Application
Create `apps/mobile` using React Native + Expo.

Implement a shared identity with:
- Customer mode,
- Runner mode,
- KYC-gated Runner access,
- errands,
- maps,
- messaging,
- proof/camera uploads,
- wallet/earnings,
- push notifications,
- Paystack,
- Dojah,
- Firebase backend.

## Backend Rules
- Firebase is authoritative.
- Financial and errand-state transitions must be server-controlled.
- Paystack webhooks must be verified and idempotent.
- KYC secrets stay server-side.
- Firestore Security Rules use least privilege.
- No production secrets in git.
- Do not use frontend callbacks as payment truth.
- Keep an append-oriented transaction/audit trail.

## Open Founder Decisions
Do not invent:
- final public name,
- equity,
- exact commission,
- pricing/bidding model,
- payout timing,
- dispute window,
- cancellation/refund matrix,
- maximum task value,
- initial Lagos zones,
- payment-fee treatment.

Read `docs/current/DECISIONS.md`, `docs/current/PRD.md`, and `docs/current/MVP_SCOPE.md`.

Where a decision is open:
- use a configuration placeholder,
- mark `TBD`,
- do not hardcode a permanent rule.

## Required Reading Before Coding
1. `docs/MASTER_BUILD_PROMPT_3_PHASES.md`
2. `docs/AUDIT_2026-10-09.md`
3. `docs/current/PRD.md`
4. `docs/current/MVP_SCOPE.md`
5. `docs/current/DECISIONS.md`
6. `docs/original/DESIGN.md`
7. `docs/original/SECURITY.md`
8. `docs/original/TEST_PLAN.md`

## First Codex Task
Do **not** start by rebuilding the UI.

Start by:
1. running/installing the current root app,
2. confirming lint/typecheck/build,
3. documenting the current screen/component inventory,
4. creating a safe refactor plan,
5. extracting components without visual regression,
6. preserving the current Vercel-compatible Vite build,
7. creating shared domain/config package scaffolding,
8. preparing Firebase integration boundaries.

Commit changes in small, auditable steps.
