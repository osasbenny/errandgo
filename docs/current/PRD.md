# ErrandGo Product Requirements Document
**Version:** 1.1  
**Status:** Founder Review / Pre-Engineering Freeze  
**Date:** 9 October 2026

## 1. Product Overview
ErrandGo is a Lagos-first two-sided marketplace connecting customers who need physical-world errands completed with verified nearby Runners. Customers create and fund tasks; eligible Runners discover or receive them; a Runner accepts and completes the task; completion is evidenced and confirmed; the platform records its commission and initiates the Runner payout workflow.

The public product name remains subject to final branding approval. `ErrandGo` may be used as the internal working name until the founders approve a replacement.

## 2. Problem
Customers often need trusted help with pickups, deliveries, shopping, document collection, price checks and other local tasks. Informal options can be unreliable, difficult to track, unclear on pricing and weak on accountability.

## 3. MVP Goal
Prove that customers in a controlled Lagos pilot will repeatedly pay verified independent Runners to complete defined errands safely, transparently and profitably.

The initial validation gate is the first **100 successfully completed paid errands** with acceptable dispute, completion and repeat-use metrics.

## 4. User Roles
### Customer
Creates errands, provides instructions and locations, funds jobs, communicates with the assigned Runner, confirms completion, rates the Runner and raises disputes where necessary.

### Runner
Completes KYC/verification, maintains availability, views eligible errands, accepts eligible jobs, updates job status, communicates with the Customer, submits proof where required, receives earnings and requests withdrawals/payouts.

### Admin / Operations
Reviews verification, manages users and errands, handles disputes, reviews payment/payout exceptions, configures categories/service areas/fees, views audit logs and platform metrics, and performs operational overrides with recorded reasons.

## 5. Account and Role Model
**Decision required before engineering freeze:**
- [ ] One account may switch between Customer and Runner modes.
- [ ] Customer and Runner accounts are separate.

**Recommended MVP default:** one account with a base user profile and an optional Runner profile. Runner functionality remains locked until verification is approved.

## 6. MVP Features
### Customer
- Sign up / sign in.
- Profile and saved contact details.
- Create an errand.
- Pickup and destination/service location.
- Category, description, deadline and proof requirements.
- View price/fee breakdown before payment.
- Fund/pay for the errand.
- View assigned Runner and job status.
- In-app messaging.
- Push notifications.
- Completion confirmation.
- Rating/review.
- Dispute/report flow.

### Runner
- Runner onboarding.
- KYC/identity verification.
- Bank/payout details.
- Availability status.
- Eligible errand feed.
- Job details and expected earnings.
- Accept job.
- Status updates.
- Navigation/map links.
- In-app messaging.
- Proof upload / OTP where required.
- Earnings ledger.
- Payout/withdrawal requests.
- Rating/reputation.

### Admin
- User and Runner management.
- KYC review/status visibility.
- Errand management.
- Payment and payout visibility.
- Dispute and refund tools.
- Service area/category configuration.
- Fee/commission configuration.
- Audit logs.
- Basic analytics and operational dashboard.

## 7. Errand Lifecycle
Default MVP lifecycle:

`Draft → Posted/Awaiting Payment → Funded → Accepted → Runner Arriving → Picked Up / Task Started → In Progress → Delivered / Evidence Submitted → Customer Confirmation → Completed`

Exception states:

`Cancelled`, `Expired`, `Disputed`, `Refund Pending`, `Refunded`, `Payout Held`, `Failed`.

All state transitions must be validated server-side and written to an immutable event/audit history.

## 8. Initial Categories
The controlled pilot should prioritize:
- Pickup & Delivery.
- Shopping / Market Purchase.
- Document Collection / Submission.
- Food Pickup.
- Grocery Shopping.

Defer broad "Home Services" until provider vetting, liability and scope are clearly defined.

## 9. Pricing Model — Founder Decision Required
The founders must choose one primary MVP pricing model before engineering freeze:

### Option A — Platform/Rule-Based Quote
The customer receives a calculated service fee based on category, distance, urgency and other configured factors.

### Option B — Customer Budget + Runner Acceptance
The customer proposes a service fee; eligible Runners accept or decline.

### Option C — Runner Bidding
Runners submit offers and the customer chooses one.

**Recommended MVP:** start with **Option B or a simple rule-based quote**. Full bidding adds marketplace complexity and should be introduced only if customer/Runner research supports it.

## 10. Commission and Fees
The current document assumption of 10% is **not yet final**.

Before launch, founders must approve:
- Platform commission: `TBD`.
- Whether the customer pays a separate convenience/service fee: `TBD`.
- Who economically bears payment-provider charges: `TBD`.
- Whether withdrawal/payout fees are absorbed by the company or Runner: `TBD`.
- Promotional/subsidy policy: `TBD`.

The customer must see the full amount before payment. The Runner must see expected earnings before acceptance.

## 11. Payments, Ledger and Payouts
- Paystack is the proposed primary NGN payment provider, subject to account approval and production eligibility.
- Frontend payment callbacks are never treated as authoritative; payments must be verified server-side/webhook-side.
- The application must maintain an internal transaction/ledger record.
- A payment split feature must not be described as regulated escrow unless legal/compliance review confirms this.
- Runner earnings remain `pending` until the completion/dispute conditions are met.

**Founder decisions required:**
- Standard payout timing after completion: `TBD`.
- Dispute window before payout release: `TBD`.
- Cancellation/refund matrix: `TBD`.
- Maximum transaction/task value during pilot: `TBD`.

## 12. Verification and Trust
Runner verification is mandatory before Runner access is enabled.

Proposed provider: **Dojah**, subject to production onboarding and current terms.

Pilot verification should include, as supported and legally appropriate:
- Identity verification.
- Phone/email verification.
- Profile information.
- Bank/payout details.
- Manual admin approval.

Higher-risk categories may require additional checks later.

## 13. Location and Service Area
The MVP is Lagos-first and must launch in a **restricted service area**, not statewide by default.

Founder decision required:
- Initial pilot zone(s): `TBD`.

The system should support configurable zones so expansion does not require code changes.

Exact pickup/drop-off locations are sensitive data and must only be exposed to authorized parties when operationally necessary.

## 14. Messaging and Notifications
MVP:
- In-app messaging for Customer ↔ assigned Runner.
- Push notifications for critical task events.
- Transactional email where appropriate.

Optional after validation:
- SMS fallback.
- WhatsApp task intake/status automation.

## 15. Cancellation, Refund and Dispute Rules
These rules must be approved by founders before production testing.

At minimum define:
- Cancellation before Runner acceptance.
- Cancellation after Runner acceptance.
- Cancellation after task start/pickup.
- Runner no-show.
- Customer no-show/unreachable.
- Wrong/damaged/missing item claims.
- Proof requirements.
- Refund authority.
- Payout hold authority.
- Admin appeal/escalation process.

## 16. Prohibited / Restricted Errands
The platform must maintain a published prohibited-items/tasks policy. At minimum, the pilot must prohibit illegal goods/services, weapons, controlled drugs, unsafe tasks, financial-account access, impersonation, unlawful document handling and any task that exposes Runners or Customers to unreasonable safety/legal risk.

## 17. Lagos Pilot
Recommended controlled cohort:
- **10–20 verified Runners** initially.
- **25–50 invited/early Customers** initially.
- One or two tightly defined service zones.
- Initial milestone: **100 completed paid errands**.

Expand the cohort only after the workflow, support load, payments and disputes are functioning reliably.

## 18. Success Metrics
- Posted errands.
- Funded errands.
- Fill/match rate.
- Acceptance time.
- Accepted-to-completed rate.
- Cancellation rate.
- Dispute/refund rate.
- Customer repeat rate.
- Runner retention/utilization.
- Average service fee / transaction value.
- Gross transaction value.
- Platform gross revenue.
- Contribution margin per completed errand.
- Customer and Runner ratings.
- Payment/payout failure rate.

## 19. Out of Scope for MVP
- Fleet ownership.
- International payments.
- Multi-city operations.
- Advanced AI pricing.
- Fully autonomous dispatch.
- Corporate logistics contracts.
- Subscriptions.
- Complex route optimization.
- Broad home-services marketplace.
- Unrestricted high-value/high-risk tasks.

## 20. Acceptance Criteria
The MVP is accepted for closed pilot when:
1. A Customer can create and fund an eligible errand.
2. Only an approved Runner can accept it.
3. Both parties can communicate after assignment.
4. Job state transitions are enforced and audited server-side.
5. Required proof/confirmation can be submitted.
6. Completion correctly updates the internal ledger/payout eligibility.
7. Both parties can rate each other.
8. Admin can inspect and intervene in exceptional cases.
9. Payment, KYC and critical provider failures have documented manual/fallback procedures.
10. Security, permissions and production secrets pass a pre-pilot review.

## 21. Product Decisions Still Required Before Engineering Freeze
- Final public name.
- Equity/founder arrangement (handled in Founder Agreement, not the PRD).
- Customer/Runner account model.
- Pricing model.
- Commission and fee policy.
- Payout timing.
- Cancellation/refund/dispute rules.
- Initial Lagos service zones.
- Maximum pilot task value.
- Exact provider stack.

All approved choices should also be recorded in `DECISIONS.md`.
