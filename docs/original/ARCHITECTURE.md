# ErrandGo Technical Architecture
**Version:** 1.0

## 1. Recommended Architecture
Use a modular web/mobile-ready architecture:
- Frontend: responsive React/Next.js or equivalent.
- Backend: Node.js/TypeScript API or equivalent.
- Database: PostgreSQL.
- Cache/queues: Redis-compatible service.
- Object storage: S3-compatible storage for ID documents and images.
- Realtime: WebSockets/SSE or managed realtime service.
- Maps: Google Maps Platform or Mapbox.
- Payments: Paystack primary; Flutterwave as optional fallback.
- Hosting: managed cloud with separate staging and production environments.

## 2. Core Services
Auth & identity; user profiles; Runner verification; errand service; matching/location; messaging; payment ledger; payout service; notifications; ratings; disputes; admin.

## 3. Data Model
Users, RunnerProfiles, VerificationRequests, Errands, ErrandCategories, ErrandEvents, Transactions, Wallets, WalletTransactions, Withdrawals, Messages, Notifications, Ratings, Reviews, Disputes, Reports, AuditLogs.

## 4. State Management
Errand state transitions must be validated server-side. Every state change creates an immutable ErrandEvent/AuditLog record.

## 5. Payment Architecture
Do not rely on frontend payment success callbacks. Verify provider webhooks server-side, reconcile transaction references, maintain an internal ledger, and make payout actions idempotent.

## 6. Location
Store approximate/current location only when necessary. Protect exact pickup/drop-off data and expose it only to authorized parties.

## 7. Environments
Development → Staging → Production. Production secrets must never be committed to source control.

## 8. Reliability
Use idempotency keys, retries with backoff, dead-letter handling for failed jobs, database backups, monitoring and structured logs.
