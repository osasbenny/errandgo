# ErrandGo Functional & Non-Functional Requirements

## Functional Requirements
FR-01 Users can register/login and manage profiles.
FR-02 Users can select Customer, Runner or both.
FR-03 Runners must pass verification before accepting jobs.
FR-04 Customers can create, edit before acceptance, cancel and view errands.
FR-05 Runners can search/filter nearby available errands.
FR-06 Only one Runner can accept a given errand.
FR-07 The system enforces valid errand state transitions.
FR-08 Customers and assigned Runners can chat.
FR-09 The system sends in-app/push/email/SMS notifications as configured.
FR-10 Customers can pay in NGN.
FR-11 The system records platform fees, provider fees, refunds and payout states.
FR-12 Runners can add bank details and request payouts.
FR-13 Customers confirm completion.
FR-14 Both parties can rate each other once per completed errand.
FR-15 Users can report/block and open disputes.
FR-16 Admins can manage users, verification, errands, transactions, disputes and settings.
FR-17 All sensitive actions are audit logged.

## Non-Functional Requirements
NFR-01 Responsive on current mobile and desktop browsers.
NFR-02 API p95 response target below 500ms for normal reads under expected pilot load.
NFR-03 Payment and payout operations must be idempotent.
NFR-04 Encrypt data in transit and sensitive data at rest.
NFR-05 Daily backups with tested restoration.
NFR-06 Role-based authorization on every protected backend route.
NFR-07 No secrets in client code.
NFR-08 Production monitoring and alerting.
NFR-09 Privacy-by-design and data minimization.
NFR-10 Architecture must support future multi-city expansion.
