# 🧭 Product scope and feature boundaries

## Product description

Anime Book Store is currently a book catalogue management application. The repository name should not be interpreted as proof that the product integrates anime services or provides a commercial bookstore checkout experience.

## Current user value

A user can maintain a catalogue of book records through a browser interface. The application supports listing, viewing, creating, editing, and deleting a record.

## Implemented scope

| Capability | Status | Notes |
|---|---|---|
| List catalogue | Implemented | Full collection returned |
| Table and card presentation | Implemented | User can switch layouts |
| Preview a record | Implemented | Read-only modal |
| View record details | Implemented | Includes timestamps |
| Create record | Implemented | Title, author, year |
| Edit record | Implemented | All editable fields required |
| Delete record | Implemented | Permanent deletion |
| API health/readiness | Implemented | Database readiness endpoint |
| Request validation | Implemented | Server-side allowlist and constraints |

## Explicitly not implemented

- Anime metadata or external catalogue integration.
- User registration, login, roles, or permissions.
- Shopping cart, checkout, payment, order history, shipping, or tax.
- Inventory management or stock reservations.
- Ratings, reviews, comments, or moderation.
- Cover upload or image storage.
- Search, filters, sorting controls, or pagination.
- Notifications beyond in-app operation feedback.
- Automated backups or production monitoring.

These features must not be presented as existing functionality in screenshots, marketing copy, or project descriptions.

## Suggested prioritisation

1. Security and dependency remediation.
2. Authentication/authorisation if public multi-user writes are required.
3. Integration and browser tests.
4. Pagination and catalogue search.
5. Cover image metadata and safe image delivery.
6. Genre/category metadata.
7. Reviews or community features only after moderation and abuse controls are designed.

## Feature request template

A useful feature proposal states:
- The user problem.
- The user group affected.
- The smallest useful workflow.
- Required data and privacy implications.
- Accessibility considerations.
- Security and abuse cases.
- Acceptance criteria.
- How success will be measured.

## Acceptance criteria quality

Avoid vague statements such as "make the app better" or "add AI". Use testable outcomes, for example: "A catalogue request can return at most 25 records and includes a stable next cursor; invalid cursors return a documented 400 response." A feature is not complete until implementation, tests, docs, and error states agree.
