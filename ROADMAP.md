# 🧭 Product and engineering roadmap

This roadmap is a prioritized plan, not a statement of features already shipped. Security and reliability work takes priority over product expansion.

## 🔴 P0: Security and repository hygiene

- [ ] Rotate/revoke the MongoDB credential previously committed to source.
- [ ] Review MongoDB access logs for unexpected use of the exposed credential.
- [ ] Decide whether coordinated Git-history cleanup is needed and communicate impact to collaborators.
- [ ] Run a current-tree and history-aware secret scan; review findings manually.
- [ ] Remove tracked `node_modules` from Git in a dedicated cleanup after verifying npm ci.
- [ ] Review dependency audit output and update vulnerable packages with lockfile changes.
- [ ] Confirm CORS origins match actual deployment environments.
- [ ] Add authentication and authorization before exposing write routes to untrusted users.

## 🟠 P1: API reliability

- [ ] Add HTTP integration tests against an isolated MongoDB database.
- [ ] Add tests for health state, CORS, malformed IDs, missing records, and database failures.
- [ ] Add request correlation IDs and structured redacted logs.
- [ ] Add bounded pagination and stable sorting for the catalogue.
- [ ] Add rate limiting and security headers appropriate to the deployment.
- [ ] Define operational health alerts and backup/restore procedures.

## 🟡 P2: Frontend quality

- [ ] Add component and browser end-to-end tests.
- [ ] Add focus trapping/restoration to the preview dialog.
- [ ] Add catalogue search, filters, sorting, and pagination with API support.
- [ ] Add stronger form-level field feedback and server error mapping.
- [ ] Complete automated accessibility checks and responsive visual regression review.

## 🟢 P3: Catalogue domain expansion

- [ ] Decide whether the product should support ISBN and publication metadata.
- [ ] Define genre and series taxonomy before implementing relationships.
- [ ] Define a safe cover-image URL and hosting policy.
- [ ] Add migration/backfill plans for any new persisted fields.

## 🔵 P4: Commerce decision

Only proceed if the project is intentionally becoming a store:
- [ ] Define user identity, roles, and ownership.
- [ ] Design inventory and stock reservation invariants.
- [ ] Design cart and order lifecycle.
- [ ] Select a trusted payment provider and define webhook verification/idempotency.
- [ ] Define shipping, cancellation, refund, privacy, and audit requirements.
- [ ] Threat-model the complete purchase flow.

## Definition of done

A roadmap item is complete only when implementation, validation, documentation, security review, and any deployment evidence are available. A UI mockup or a README claim alone is not completion.
