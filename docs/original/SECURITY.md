# ErrandGo Security Plan

## Identity & Access
Use secure password hashing, MFA for admins, verified email/phone where appropriate, session expiry, refresh-token rotation and RBAC.

## Payments
Never store card details. Verify payment provider webhooks server-side. Use signed/webhook verification, transaction references, idempotency and reconciliation. Never release payouts based solely on client-side status.

## Personal Data
Minimize collection. Encrypt sensitive records. Restrict ID documents to verification staff. Use least-privilege access and defined retention/deletion policies.

## Location Privacy
Exact addresses and live location must only be available to authorized participants in an active job. Avoid unnecessary historical tracking.

## Application Security
Validate all input; prevent SQL injection, XSS, CSRF and IDOR; rate-limit authentication and messaging; secure file uploads; scan uploaded files; use secure headers; log suspicious activity.

## Admin Security
Separate admin accounts, MFA, role permissions, audit logs and alerts for unusual payout/refund actions.

## Incident Response
Detect → contain → investigate → eradicate → recover → notify affected parties/regulators where required → document lessons learned.

## Compliance
Design for the Nigeria Data Protection Act 2023 and applicable NDPC requirements. Obtain legal advice on licensing, payment handling, consumer protection, courier/logistics obligations and tax before launch.
