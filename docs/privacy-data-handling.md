# 🔒 Privacy and data-handling guide

## Scope

The current application stores a small catalogue record containing a book title, author, and publication year. Mongoose also manages record identifiers and timestamps. The current codebase does not implement user profiles, authentication, customer accounts, payments, orders, or analytics consent.

This document describes safe engineering practices. It is not a legal privacy notice and does not establish compliance with any particular privacy law.

## Data inventory

| Data | Current purpose | Storage/location | Sensitivity |
|---|---|---|---|
| Book title | Catalogue display and search in future | MongoDB | Usually low, but user-entered text can contain personal data |
| Author | Catalogue display | MongoDB | Usually low |
| Publication year | Catalogue display | MongoDB | Low |
| MongoDB URI | Backend database access | Runtime environment | Secret, must never be exposed |
| API and application logs | Operational diagnosis | Hosting platform, if configured | May contain identifiers or request metadata |

Do not assume free-text fields are harmless. Users can accidentally paste personal information into a title or author field.

## Data minimisation

- Collect only fields required by the catalogue workflow.
- Do not add user identity, email, location, payment, or behavioural tracking without a documented requirement.
- Avoid logging complete request bodies.
- Do not place database credentials in frontend variables or browser storage.
- Use synthetic data in screenshots, tests, and issue reports.
- Remove personal data from diagnostic bundles before sharing them.

## Data access and transport

The backend requires a MongoDB connection string supplied through environment configuration. Use a dedicated database user with only the permissions required by the application. Prefer encrypted database connections when supported by the hosting provider. Restrict network access to trusted application hosts where possible.

The current API does not implement authentication or authorisation. CORS only controls which browser origins may read responses through browser JavaScript. It does not prevent direct HTTP clients from calling public API endpoints. Do not expose write endpoints publicly until an access-control model is implemented.

## Retention and deletion

The application supports permanent deletion of a book record through its delete endpoint. No retention schedule, automated expiry, backup retention policy, or deletion propagation workflow is currently implemented in the application.

Operators must define:
- How long database backups are retained.
- Who can access backups.
- How deleted records age out of backups.
- How operational logs are retained and purged.
- How restoration is tested.
- Who approves exceptional data exports.

A record deleted from the live collection may still exist in backups until those backups expire.

## Incident response

If a credential or dataset is exposed:
1. Revoke or rotate the credential at its provider immediately.
2. Restrict access while investigating.
3. Identify the affected systems and time window.
4. Preserve relevant audit evidence without copying secrets into tickets.
5. Review database and hosting access logs.
6. Restore only from a trusted backup if required.
7. Record remediation and prevention actions.

A source-code edit does not invalidate a credential that was previously exposed.

## Future features requiring review

| Proposed capability | Additional considerations |
|---|---|
| User accounts | Identity, password handling, account deletion, authorisation |
| Reviews/comments | Abuse, moderation, free-text personal data |
| Analytics | Purpose, consent where required, retention, third-party processors |
| Cover image uploads | File metadata, malware scanning, storage access, deletion |
| Payments/orders | Payment provider responsibilities and strict security boundaries |

## Review checklist

- [ ] Is every collected field necessary?
- [ ] Are secrets stored only in server-side environment configuration?
- [ ] Are logs free of credentials and unnecessary personal data?
- [ ] Are database permissions least-privilege?
- [ ] Are backups protected and retention documented?
- [ ] Can operators identify and respond to a data exposure?
- [ ] Have legal/privacy requirements been reviewed before adding tracking or accounts?
