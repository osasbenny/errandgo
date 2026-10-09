# ErrandGo

ErrandGo is a Lagos-first trusted local errands marketplace connecting customers with verified people who can complete real-world tasks.

## Current repository status

The repository currently contains an early Vite/React prototype. The approved engineering direction is documented under `docs/current/` and the implementation master prompt under `docs/MASTER_BUILD_PROMPT_3_PHASES.md`.

## Documentation

- `docs/original/` — original founder/product documentation supplied before engineering review.
- `docs/current/` — revised pre-engineering founder/MVP documents.
- `docs/AUDIT_2026-10-09.md` — repository audit and migration recommendations.
- `docs/MASTER_BUILD_PROMPT_3_PHASES.md` — single master build instruction covering:
  1. Web Platform / Public Website
  2. Admin Command Center
  3. React Native / Expo Mobile Application

## MVP objective

The first validation gate is 100 successfully completed paid errands through a controlled Lagos pilot.

## Engineering direction

Target architecture:
- Next.js / TypeScript / Tailwind / Vercel for web.
- Next.js / Vercel for Admin Command Center.
- React Native / Expo for mobile.
- Firebase Auth, Firestore, Storage, Cloud Functions and FCM.
- Paystack for payments.
- Dojah for KYC.
- Google Maps Platform for location services.

All unresolved founder/business decisions are tracked in `docs/current/DECISIONS.md`.

© 2026 ErrandGo. Working project name subject to final founder branding approval.
