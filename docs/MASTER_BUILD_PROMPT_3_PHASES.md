# MASTER BUILD PROMPT — ERRANDGO / WORKING CODENAME
**Version:** 2.0  
**Date:** 9 October 2026  
**Purpose:** One end-to-end engineering instruction for building the full platform in three implementation phases.  
**Primary launch market:** Lagos, Nigeria  
**Product stage:** MVP V0.1 → Closed Lagos Pilot  
**Frontend deployment target:** Vercel  
**Mobile target:** React Native + Expo  
**Backend:** Firebase / Google Cloud  
**Payments:** Paystack  
**Identity verification:** Dojah  
**Maps:** Google Maps Platform  

---

# 0. MASTER EXECUTION MANDATE

You are the lead full-stack engineer responsible for building the complete product from start to production-ready MVP.

This is ONE system delivered in THREE coordinated implementation phases:

## Phase 1 — Web Platform / Public Website
Build the premium 2027-standard public website and responsive customer-facing web application.

## Phase 2 — Admin Command Center
Build the full operations, compliance, payments, KYC, support, analytics, and platform-control dashboard.

## Phase 3 — Mobile Application
Build the React Native / Expo customer-and-runner mobile application for Android and iOS.

All three phases must connect to the same backend, database, provider integrations, design language, business rules, and security model.

Do not build three disconnected products.

---

# 1. PRODUCT VISION

Build a Lagos-first trusted local execution marketplace connecting:

- Customers who need physical-world errands completed.
- Verified Runners who accept and complete paid errands.
- Admin / Operations who supervise trust, payments, verification, disputes, platform configuration, and marketplace health.

The product is broader than delivery.

Supported use cases include:
- pickup and delivery,
- shopping / market purchase,
- document collection and submission,
- food pickup,
- grocery errands,
- physical verification tasks,
- selected real-world service tasks approved for MVP.

The first validation target is:

**100 successfully completed paid Lagos errands.**

---

# 2. SHARED PLATFORM PRINCIPLES

All three phases must share:

- one authentication system,
- one user identity,
- one customer/runner account model,
- one backend,
- one database,
- one payment ledger,
- one KYC model,
- one notification model,
- one errand state machine,
- one permissions model,
- one design system,
- one audit model,
- one configuration layer.

No business rule should be duplicated inconsistently between web, admin, and mobile.

---

# 3. REQUIRED TECHNOLOGY STACK

## Shared Web Stack
- Next.js 15+
- React
- TypeScript strict mode
- App Router
- Tailwind CSS
- shadcn/ui or equivalent accessible primitives
- Framer Motion / Motion
- Lucide icons
- React Hook Form
- Zod
- TanStack Query where useful
- Zustand only where justified

## Web Hosting
- Vercel
- preview
- staging
- production
- environment variables via Vercel
- no secrets committed

## Mobile Stack
- React Native
- Expo
- TypeScript
- Expo Router
- React Hook Form
- Zod
- TanStack Query
- SecureStore for sensitive local storage
- Expo Notifications
- Expo Location
- image/document picker as needed
- camera integration where proof/KYC requires it

## Backend
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Cloud Functions
- Firebase Cloud Messaging
- Firebase Emulator Suite
- Google Cloud billing attached as required

## Payments
- Paystack

## KYC
- Dojah

## Maps
- Google Maps Platform

## Monitoring
- Sentry and/or equivalent
- Vercel observability
- structured Cloud Function logs
- Crashlytics where relevant

---

# 4. DESIGN STANDARD

The entire product must meet a premium 2027 consumer-tech quality bar.

Visual character:
- premium,
- trustworthy,
- urban,
- modern,
- clean,
- fast,
- local,
- sophisticated.

Use claymorphism selectively.

Good uses:
- wallet cards,
- stat cards,
- primary action cards,
- runner status,
- onboarding progress,
- floating map controls,
- select CTA surfaces.

Avoid excessive claymorphism in:
- large tables,
- long forms,
- dense admin screens,
- accessibility-sensitive navigation.

Use:
- strong hierarchy,
- soft elevation,
- clean rounded geometry,
- subtle gradients,
- restrained glass effects,
- premium typography,
- responsive transitions,
- modern spacing,
- excellent contrast.

All design tokens must be shared across phases where possible.

---

# 5. SHARED USER ROLES

## Customer
Can:
- register/login,
- manage profile,
- create an errand,
- select category,
- add location,
- set task details,
- see price breakdown,
- pay,
- track status,
- chat with Runner,
- view proof,
- confirm completion,
- rate/review,
- raise dispute.

## Runner
Can:
- register/login,
- create Runner profile,
- complete KYC,
- add payout details,
- toggle availability,
- browse eligible errands,
- accept jobs,
- follow task status,
- navigate,
- upload proof,
- receive earnings,
- request withdrawal,
- view ratings.

## Admin
Can:
- manage users,
- manage Runners,
- review KYC,
- manage errands,
- manage disputes,
- inspect transactions,
- control payouts,
- manage zones,
- manage categories,
- configure commission/fees,
- review audit logs,
- view analytics.

---

# 6. SHARED ERRAND STATE MACHINE

Server-controlled only.

Default:

```text
Draft
→ Posted / Awaiting Payment
→ Funded
→ Accepted
→ Runner Arriving
→ Picked Up / Task Started
→ In Progress
→ Delivered / Evidence Submitted
→ Customer Confirmation
→ Completed
```

Exception states:

```text
Cancelled
Expired
Disputed
Refund Pending
Refunded
Payout Held
Failed
```

Every transition records:
- actor,
- timestamp,
- previous state,
- next state,
- reason,
- metadata.

Frontend clients must never be authoritative for state changes.

---

# 7. SHARED DATA MODEL

Create typed schemas for:

- users
- runnerProfiles
- verificationRequests
- serviceZones
- errandCategories
- errands
- errandEvents
- errandAssignments
- conversations
- messages
- transactions
- wallets
- walletTransactions
- withdrawals
- ratings
- reviews
- disputes
- notifications
- reports
- auditLogs
- platformSettings

Money must use integer minor units.

No floating point for financial calculations.

---

# 8. SHARED BUSINESS CONFIGURATION

Centralize configuration for:

- public brand name,
- service zones,
- categories,
- commission,
- service fee,
- minimum task value,
- maximum task value,
- payout timing,
- dispute window,
- cancellation rules,
- role switching,
- bidding,
- notification channels,
- KYC requirement,
- maintenance mode.

Any unresolved founder decision must be represented as:
- configurable,
- documented,
- marked `TBD`,
- never silently hardcoded.

---

# 9. PHASE 1 — WEB PLATFORM / PUBLIC WEBSITE

## Objective
Build the premium public-facing website and customer web application first.

This phase must establish:
- product visual identity,
- shared design system,
- responsive web architecture,
- route structure,
- service abstractions,
- mock flows,
- Vercel deployment.

## 9.1 Public Marketing Website

Required sections:
1. Hero.
2. How it works.
3. Popular errands.
4. Trust and verification.
5. Customer benefits.
6. Runner opportunity.
7. Lagos service area context.
8. Safety section.
9. Testimonials/social proof placeholders.
10. FAQ.
11. Final CTA.
12. Footer.

Primary CTAs:
- Create an Errand.
- Become a Runner.

Hero message should communicate:
**Trusted help for real-world tasks around Lagos.**

## 9.2 Web Authentication

Routes:
```text
/auth/login
/auth/register
/auth/forgot-password
/auth/verify
```

Build full:
- loading states,
- errors,
- password visibility,
- verification status,
- reset flows,
- responsive mobile experience.

## 9.3 Customer Web App

Routes:
```text
/app/home
/app/errands
/app/errands/new
/app/errands/[id]
/app/messages
/app/wallet
/app/notifications
/app/profile
/app/support
```

### Customer Dashboard
Include:
- greeting,
- service location,
- create errand CTA,
- active errands,
- recent errands,
- categories,
- wallet/payment summary,
- support shortcut.

### Create Errand Flow
Guided flow:
1. Category.
2. Pickup/service location.
3. Destination where needed.
4. Description.
5. Deadline/urgency.
6. Proof requirement.
7. Item/task value.
8. Budget/service fee.
9. Review.
10. Payment.

### Errand Detail
Show:
- status,
- timeline,
- assigned Runner,
- route/location summary,
- instructions,
- chat,
- payment breakdown,
- proof,
- dispute/support,
- completion/rating.

## 9.4 Web Responsive Standard
Support:
- 320px,
- 375px,
- 390px,
- tablet,
- laptop,
- desktop,
- large desktop.

No accidental horizontal overflow.

## 9.5 Web Design System
Create:
- colors,
- typography,
- spacing,
- radius,
- shadows,
- clay surfaces,
- glass surfaces,
- buttons,
- inputs,
- cards,
- badges,
- chips,
- dialogs,
- drawers,
- bottom sheets,
- tables,
- empty states,
- loaders,
- timelines,
- metric cards.

## 9.6 Phase 1 Deliverables

Phase 1 is done only when:
- website is live on Vercel,
- customer web app is responsive,
- auth UI is complete,
- all primary flows exist,
- realistic mock data exists,
- API abstractions exist,
- design system exists,
- visual QA is complete,
- accessibility checks pass,
- Lighthouse is acceptable.

---

# 10. PHASE 2 — ADMIN COMMAND CENTER

## Objective
Build a serious production-grade operations system.

This is not a generic dashboard template.

The admin must give operators full visibility and control over marketplace operations.

## 10.1 Admin Routes

```text
/admin/dashboard
/admin/users
/admin/runners
/admin/verification
/admin/errands
/admin/payments
/admin/payouts
/admin/disputes
/admin/zones
/admin/categories
/admin/fees
/admin/analytics
/admin/audit-logs
/admin/settings
```

## 10.2 Admin Dashboard

Show:
- total users,
- active users,
- active Runners,
- verified Runners,
- pending KYC,
- live errands,
- completed today,
- GTV,
- revenue,
- failed payments,
- disputes,
- payout holds,
- payout queue,
- system alerts.

## 10.3 User Management
Admin can:
- search/filter users,
- view profile,
- suspend/reactivate,
- inspect activity,
- inspect linked Runner profile,
- view support/dispute history.

## 10.4 Runner Management
Admin can:
- review verification,
- approve/reject,
- suspend,
- inspect jobs,
- inspect ratings,
- inspect payout data,
- inspect KYC audit trail.

## 10.5 KYC Review
States:
```text
not_started
in_progress
submitted
under_review
approved
rejected
needs_resubmission
```

Provide:
- queue,
- filters,
- detail review,
- provider status,
- internal notes,
- approval/rejection,
- audit logging.

## 10.6 Errand Operations
Admin can:
- inspect all errands,
- filter by state,
- inspect timeline,
- inspect payment,
- inspect Runner,
- inspect Customer,
- hold/release payout,
- cancel where allowed,
- intervene with documented reason.

## 10.7 Financial Operations
Admin needs:
- payment ledger,
- transaction detail,
- refund status,
- payout eligibility,
- withdrawal requests,
- payout holds,
- commission,
- platform fee,
- failed transaction monitoring.

All privileged financial actions must be audited.

## 10.8 Disputes
Admin must handle:
- Runner no-show,
- Customer unavailable,
- wrong item,
- damaged item,
- missing item,
- incomplete task,
- payment issue,
- safety issue,
- other.

Each dispute stores:
- case ID,
- errand,
- opened by,
- reason,
- evidence,
- timeline,
- notes,
- status,
- resolution,
- refund amount,
- payout state.

## 10.9 Platform Configuration
Admin can manage:
- categories,
- zones,
- commission,
- service fees,
- limits,
- feature flags,
- payout timing,
- dispute window,
- maintenance mode.

## 10.10 Audit Logs
Every privileged action records:
- actor,
- timestamp,
- resource,
- action,
- previous value,
- new value,
- reason,
- metadata.

## 10.11 Admin Security
Use:
- server-side authorization,
- admin role verification,
- least privilege,
- optional super-admin tier,
- no trust in client-side checks.

## 10.12 Phase 2 Deliverables

Phase 2 is done only when:
- Admin Command Center is deployed,
- KYC queue works,
- errand operations work,
- disputes work,
- transaction visibility works,
- payout controls work,
- configuration works,
- audit logs work,
- analytics work,
- admin security passes.

---

# 11. PHASE 3 — MOBILE APPLICATION

## Objective
Build the complete native-feeling React Native / Expo application for Customers and Runners.

This is not a web wrapper.

It must feel like a premium mobile product.

## 11.1 Mobile Architecture

Use:
- React Native,
- Expo,
- Expo Router,
- TypeScript,
- shared API/domain models,
- secure local token storage,
- push notifications,
- native maps integration,
- camera/photo access,
- location permissions,
- deep links where useful.

## 11.2 Mobile Authentication
Build:
- login,
- registration,
- password reset,
- verification,
- onboarding,
- role setup.

## 11.3 One Account / Two Modes
Architect for:
- Customer mode,
- Runner mode,
- shared account,
- role switching when enabled.

Do not duplicate identity.

## 11.4 Customer Mobile App

Tabs:
- Home
- Errands
- Messages
- Wallet
- Profile

Customer screens:
- Home.
- Create errand.
- Errand details.
- active errand.
- tracking.
- chat.
- payment.
- wallet/history.
- notifications.
- rating.
- dispute.
- support.

## 11.5 Runner Mobile App

Tabs:
- Home
- Jobs
- Active
- Earnings
- Profile

Runner screens:
- onboarding,
- KYC,
- availability,
- job feed,
- job detail,
- active job,
- navigation,
- proof upload,
- earnings,
- wallet,
- withdrawal,
- rating/profile.

## 11.6 Mobile Runner Dashboard

Must include:
- availability toggle,
- verification state,
- earnings today,
- earnings week,
- available jobs,
- active job,
- rating,
- wallet.

## 11.7 Job Feed

Allow filter/sort by:
- distance,
- category,
- expected earnings,
- urgency.

Before assignment:
- only show approximate location where appropriate.

## 11.8 Active Job Flow

Use native operational stepper:

```text
Accepted
→ Arriving
→ Picked Up / Started
→ In Progress
→ Delivered / Evidence Submitted
→ Customer Confirmation
→ Completed
```

## 11.9 Mobile Maps
Use:
- native map,
- pickup/drop markers,
- route preview,
- open native navigation,
- location permission handling,
- denied-permission fallback.

Do not implement continuous background tracking unless explicitly approved and justified.

## 11.10 Mobile Proof
Support:
- camera,
- gallery upload,
- receipt/photo proof,
- optional document upload,
- optional OTP completion.

## 11.11 Push Notifications
Critical events:
- payment confirmed,
- job accepted,
- Runner arriving,
- task started,
- proof submitted,
- completion request,
- completion,
- dispute,
- payout update,
- KYC status.

## 11.12 Offline / Poor Network
Mobile must handle:
- slow Lagos mobile network,
- retries,
- optimistic non-financial updates only,
- clear failed-request states,
- offline indicators,
- resumable proof upload where feasible.

## 11.13 Mobile Build/Release
Prepare:
- Android package ID,
- iOS bundle ID,
- EAS configuration,
- signing documentation,
- environment profiles,
- internal testing builds,
- production build checklist.

## 11.14 Phase 3 Deliverables

Phase 3 is done only when:
- Android app works end-to-end,
- iOS app is build-ready,
- Customer flow works,
- Runner flow works,
- push works,
- maps work,
- proof upload works,
- KYC works,
- Paystack works,
- responsive/native QA passes,
- release configuration is documented.

---

# 12. BACKEND FOUNDATION

Backend work supports all phases.

Implement:

## Firebase Auth
- email/password,
- email verification,
- password reset,
- optional phone verification later.

## Firestore
- strict typed collections,
- indexes,
- server timestamps,
- least-privilege rules.

## Storage
- user uploads,
- Runner KYC references,
- errand proof,
- profile media.

## Cloud Functions
Use for:
- trusted state transitions,
- payment initialization,
- payment verification,
- Paystack webhooks,
- Dojah callbacks,
- payout logic,
- admin actions,
- notifications,
- dispute/refund logic.

---

# 13. PAYSTACK ARCHITECTURE

Implement:
- server-side payment initialization,
- provider reference,
- payment verification,
- webhook signature validation,
- idempotency,
- internal transaction ledger,
- refund state,
- payout eligibility,
- withdrawal requests,
- payout hold/release.

Never trust frontend payment success alone.

Do not label the system “escrow” without legal review.

---

# 14. DOJAH ARCHITECTURE

Implement:
- provider abstraction,
- initiation,
- normalized status,
- webhook/callback processing,
- admin review,
- failure/retry state,
- audit trail.

Never expose provider secret keys to clients.

Store minimum required identity data.

---

# 15. GOOGLE MAPS ARCHITECTURE

Use:
- Places Autocomplete,
- Geocoding,
- Distance Matrix / routing where needed,
- route preview,
- zone validation.

Never expose exact private address data unnecessarily.

---

# 16. MESSAGING

One conversation per assigned errand.

Allow:
- Customer ↔ assigned Runner.
- text.
- optional image/evidence.
- unread count.
- timestamps.
- report conversation.

No unrestricted pre-assignment messaging unless founder-approved.

---

# 17. NOTIFICATIONS

Create one notification abstraction supporting:
- in-app,
- push,
- email,
- optional SMS,
- optional WhatsApp.

---

# 18. SECURITY

Implement:
- least privilege,
- server authority,
- strict validation,
- secure headers,
- CSP where practical,
- Firestore Security Rules,
- rate limiting,
- webhook validation,
- file restrictions,
- admin audit logs,
- financial audit logs,
- environment separation,
- no secrets in client bundles.

Never:
- store passwords manually,
- log raw KYC documents,
- log full financial credentials.

---

# 19. ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Require:
- semantic structure,
- labels,
- keyboard navigation,
- focus states,
- high contrast,
- reduced motion,
- 44px touch targets,
- accessible status messages,
- no color-only status communication.

---

# 20. PERFORMANCE

Web:
- Lighthouse 90+ on public pages where realistic.
- Accessibility 95+.
- SEO 95+.
- lazy-load maps.
- optimized media.
- minimal client JS.

Mobile:
- smooth 60fps interactions where practical.
- efficient lists.
- careful image handling.
- low memory usage.
- no unnecessary re-renders.

---

# 21. REPOSITORY STRATEGY

Preferred monorepo:

```text
/
├── apps/
│   ├── web/
│   ├── admin/
│   └── mobile/
├── packages/
│   ├── ui/
│   ├── domain/
│   ├── config/
│   ├── validation/
│   ├── providers/
│   └── types/
├── functions/
├── docs/
├── scripts/
├── RULES.md
├── TASKS.md
├── DECISIONS.md
├── CHANGELOG.md
├── README.md
└── .env.example
```

Web and Admin may share Next.js foundations while remaining cleanly separated as applications/routes.

---

# 22. DOCUMENTATION TO MAINTAIN

Keep current:
- README.md
- PRD.md
- ARCHITECTURE.md
- DESIGN.md
- SECURITY.md
- REQUIREMENTS.md
- MVP_SCOPE.md
- PROVIDER_INTEGRATIONS.md
- TEST_PLAN.md
- OPERATIONS.md
- DECISIONS.md
- TASKS.md
- CHANGELOG.md
- .env.example

Do not modify legal/founder equity documents unless explicitly instructed.

---

# 23. TESTING

Use:
- unit tests,
- integration tests,
- Playwright for web/admin,
- mobile component/integration tests,
- Firebase Emulator Suite,
- provider webhook tests.

Critical E2E flow:

1. Customer registers.
2. Customer creates errand.
3. Customer pays.
4. payment verified.
5. approved Runner sees job.
6. Runner accepts.
7. job progresses.
8. chat works.
9. proof submitted.
10. Customer confirms.
11. ledger updates.
12. payout becomes eligible.
13. rating works.
14. dispute path works.
15. Admin can intervene and audit.

Also test:
- duplicate webhook,
- rejected KYC,
- unauthorized Runner,
- invalid state transition,
- failed payment,
- refund,
- payout hold,
- poor connection,
- mobile layout,
- admin privilege failure.

---

# 24. CI/CD

Set up:
- GitHub,
- protected main,
- lint,
- typecheck,
- tests,
- build check,
- Vercel preview deploys,
- staging,
- production approval.

Mobile:
- EAS build profiles,
- development,
- preview,
- production.

---

# 25. PHASE GATES

## Gate 1 — Web Approval
Do not move to serious backend wiring until:
- web design system is approved,
- marketing site is approved,
- customer web flow is approved,
- route model is stable.

## Gate 2 — Admin Approval
Do not declare operations-ready until:
- KYC,
- disputes,
- payments,
- payouts,
- audit logs,
- platform settings work.

## Gate 3 — Mobile Approval
Do not declare pilot-ready until:
- customer mobile flow works,
- Runner mobile flow works,
- notifications work,
- maps work,
- proof works,
- payment/KYC work.

---

# 26. PILOT ASSUMPTIONS

Closed Lagos pilot:
- 10–20 verified Runners,
- 25–50 early Customers,
- one or two service zones,
- 100 completed paid errands as first validation gate.

---

# 27. UNRESOLVED FOUNDER DECISIONS

Do not silently decide:
- final public name,
- final equity,
- exact commission,
- pricing/bidding model,
- payout timing,
- dispute window,
- cancellation matrix,
- maximum task value,
- initial Lagos zones,
- convenience fee,
- payment fee treatment,
- live provider credentials.

Use safe configurable placeholders and document all assumptions.

---

# 28. FIRST EXECUTION ORDER

Start in this exact order:

## Phase 1
1. Monorepo setup.
2. Web app.
3. Shared design system.
4. Public website.
5. Web auth.
6. Customer web app.
7. Vercel deployment.
8. QA.

## Phase 2
9. Admin app.
10. Admin dashboard.
11. KYC operations.
12. Errand operations.
13. payments/payouts.
14. disputes.
15. analytics.
16. audit logs.
17. platform settings.
18. Vercel deployment.
19. QA.

## Phase 3
20. React Native / Expo mobile app.
21. Customer mode.
22. Runner mode.
23. maps.
24. camera/proof.
25. push notifications.
26. mobile payment/KYC integration.
27. EAS setup.
28. Android/iOS QA.

Then:
29. production backend hardening.
30. end-to-end acceptance.
31. pilot preparation.
32. closed Lagos launch.

---

# 29. DEFINITION OF DONE

The MVP is not done until:

- public web is live,
- customer web works,
- Admin Command Center works,
- Android mobile works,
- iOS build is ready,
- customer/Runner account model works,
- KYC is enforced,
- payments are verified server-side,
- state transitions are server-controlled,
- chat works,
- proof works,
- disputes work,
- payout logic works,
- Admin can intervene,
- audit logs exist,
- monitoring is active,
- no secrets are committed,
- responsive/mobile QA passes,
- documentation is current.

---

# 30. FINAL PRODUCT PRINCIPLE

This is not simply an errand application.

Build a trusted local execution platform for Lagos with:
- verified people,
- real-world task completion,
- transparent payments,
- operational control,
- premium design,
- strong safety,
- scalable architecture,
- excellent customer and Runner experience.

The first goal is not national scale.

The first goal is to reliably complete **100 real paid Lagos errands** with a product that is secure, polished, trustworthy, and operationally manageable.
