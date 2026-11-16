# 🧭 Roadmap

Planned work only. Security and reliability precede product expansion.

## 🔴 P0: Security and hygiene
- [ ] Rotate/revoke the database credential previously committed to source.
- [ ] Remove secret-bearing config from code and add validated runtime environment loading.
- [ ] Restrict CORS to trusted origins.
- [ ] Validate IDs, field types, lengths and year bounds.
- [ ] Allow-list update properties and enable Mongoose update validators.
- [ ] Normalize malformed-ID, missing-record and unexpected-error responses.
- [ ] Remove tracked `node_modules` from Git in a separately reviewed cleanup.

## 🟠 P1: Reliability
- [ ] Add backend integration tests using a disposable database.
- [ ] Add frontend tests for CRUD screens and states.
- [ ] Centralize Axios setup and API error handling.
- [ ] Add visible empty, error and not-found states.
- [ ] Add health/readiness checks and structured redacted logs.

## 🟡 P2: Catalogue experience
- [ ] Add search, sorting, pagination, responsive and accessibility improvements.
- [ ] Improve form validation and destructive-action confirmation.
- [ ] Consider ISBN, genre and cover metadata after schema design.

## 🟢 P3: Product direction
- [ ] Decide whether this remains a catalogue or evolves into commerce.
- [ ] Before commerce work, design identity, ownership, inventory, cart, order and payment boundaries with appropriate security controls.

Do not describe a roadmap item as shipped until code, tests, docs and deployed behavior demonstrate it.
