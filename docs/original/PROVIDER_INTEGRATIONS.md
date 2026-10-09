# ErrandGo Provider Integration Plan

## 1. Paystack — Primary Payments
Use Paystack for NGN checkout, transaction verification, subaccounts/splits where commercially and legally appropriate, and transfers/payout capabilities supported by the account configuration.

Paystack documents transaction splits using subaccounts and split groups. Confirm current fees, settlement behavior and eligibility before production. Source: https://paystack.com/docs/payments/split-payments/

## 2. Flutterwave — Secondary/Alternative
Flutterwave supports split payments for marketplace/aggregator scenarios and NGN bank transfers. It also documents responsibility for vetting marketplace merchants and handling disputes/chargebacks. Confirm current product availability and commercial terms before implementation.
Source: https://developer.flutterwave.com/docs/split-payments

## 3. Maps
Preferred options: Google Maps Platform or Mapbox. Required capabilities: geocoding, address search, distance calculation and map display. Do not expose API secrets in frontend code.

## 4. Notifications
Primary: push notifications. Optional: SMS/email providers. Keep provider abstraction so vendors can be changed without rewriting core business logic.

## 5. Storage
Use private object storage for verification documents. Signed, short-lived access URLs only.

## 6. Integration Rules
All providers must have:
- Sandbox/staging credentials.
- Server-side secret storage.
- Webhook verification.
- Idempotency.
- Retry policy.
- Reconciliation.
- Provider status monitoring.
- Documented fallback/manual procedure.

## 7. Important Payment Design Note
A marketplace should not assume that a payment split feature is identical to an escrow service. Legal/compliance review is required before representing customer funds as regulated escrow or holding funds beyond permitted settlement arrangements.
