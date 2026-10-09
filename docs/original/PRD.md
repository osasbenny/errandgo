# ErrandGo Product Requirements Document
**Version:** 1.0 | **Status:** Draft for Development

## 1. Product Overview
ErrandGo is a Nigerian marketplace connecting customers who need errands completed with verified nearby Runners. Customers post jobs; Runners accept, complete and get paid. ErrandGo earns a configurable commission, initially 10%.

## 2. Problem
Customers often need trusted help with pickups, deliveries, shopping and document collection. Existing informal options can be unreliable, opaque on price, and difficult to track.

## 3. Goals
- Make posting an errand simple.
- Match customers with nearby verified Runners.
- Provide transparent pricing and status tracking.
- Support secure NGN payments and Runner payouts.
- Build trust through verification, ratings and dispute handling.
- Pilot in Lagos before expanding.

## 4. Users
**Customer:** creates and pays for errands.
**Runner:** verified person who accepts and completes errands.
**Admin:** manages users, verification, disputes, payments and platform settings.

## 5. MVP Features
Authentication; profiles; Runner verification; errand creation; errand discovery; acceptance; job status workflow; chat; notifications; ratings; payments; Runner wallet/payouts; maps/location; admin dashboard; reports/disputes.

## 6. Core Workflow
Posted → Accepted → Runner Arriving → Picked Up → In Transit → Delivered → Completed.

## 7. Errand Categories
Pickup & Delivery, Shopping, Food Pickup, Document Collection, Pharmacy Pickup, Grocery Shopping, Home Services, Personal Errands, Other.

## 8. Payment Model
Customer pays at booking. Platform commission is recorded separately. Funds should not be considered earned by the Runner until completion/dispute rules are satisfied. Initial commercial assumption: 10% platform commission, subject to payment fees, refunds and regulatory review.

## 9. Success Metrics
Completed errands, fill rate, acceptance rate, median time to acceptance, completion rate, repeat customers, Runner retention, average order value, gross transaction volume, platform revenue, dispute rate, failed-payment rate and customer/Runner ratings.

## 10. Out of Scope for MVP
Fleet ownership, international payments, advanced AI pricing, corporate logistics contracts, subscriptions and multi-city automation.

## 11. Acceptance Criteria
A customer can create and pay for an errand; a verified Runner can find and accept it; both can communicate; status changes are recorded; completion triggers the payout workflow; both parties can rate each other; admin can intervene in disputes.
