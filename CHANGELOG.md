# 📜 Changelog

This file records notable repository changes. It is not intended to repeat every commit message. Dates refer to repository work and should be updated when a release is tagged.

## Unreleased

### Security and backend
- Removed the hard-coded MongoDB connection URI from active backend configuration.
- Added root environment-file loading with host environment precedence.
- Added port validation and explicit database URI requirement.
- Added configurable CORS origins, request body size limit, health endpoint, generic public errors, and graceful shutdown.
- Added Book request validation, ObjectId validation, strict schema constraints, and explicit update allow-list.
- Added Node built-in unit tests for request validation.
- Added a compound title/author index.

### Frontend
- Centralized Axios configuration and API error extraction.
- Added a shared create/edit form with browser-side constraints.
- Added visible loading, empty, retryable error, and not-found states.
- Improved detail and delete confirmation screens.
- Added accessible names, semantic table markup, keyboard dismissal for the preview modal, and reduced-motion support.

### Documentation and repository operations
- Expanded the README and engineering guides.
- Added project overview, API contract, data model, database, configuration, installation, development, testing, deployment, and troubleshooting guidance.
- Added Mermaid diagrams for architecture, request flow, record lifecycle, and deployment.
- Added GitHub issue forms, PR template, CI, dependency audit, and repository hygiene checks.
- Documented the previously exposed credential and the tracked dependency directory cleanup requirement.

## Existing baseline

The project began as a React/Vite frontend backed by an Express/Mongoose books API with catalogue, create, details, edit, and delete pages. Earlier implementation details remain available in Git history.
