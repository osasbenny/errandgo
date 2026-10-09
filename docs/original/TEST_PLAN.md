# ErrandGo Test Plan

## Test Levels
Unit tests; integration tests; API tests; database tests; end-to-end tests; security tests; performance tests; usability tests; UAT.

## Critical Test Scenarios
1. Customer registration/login.
2. Runner registration and failed/successful verification.
3. Customer creates errand with valid/invalid fields.
4. Runner filtering and acceptance.
5. Race condition: two Runners attempt acceptance; only one succeeds.
6. Every valid/invalid status transition.
7. Payment success, failure, timeout and duplicate webhook.
8. Refund and cancellation.
9. Payout success/failure and retry.
10. Chat authorization: users cannot access unrelated conversations.
11. Rating only after completion and only once.
12. Dispute creation and admin resolution.
13. Location privacy and authorization.
14. File upload security.
15. Admin RBAC.
16. Backup restoration.

## Acceptance Targets
Critical payment/security defects: zero before production.
No P0/P1 defects at pilot launch.
Core customer-to-Runner journey passes on supported browsers/devices.
Webhook reconciliation passes duplicate/out-of-order event tests.
