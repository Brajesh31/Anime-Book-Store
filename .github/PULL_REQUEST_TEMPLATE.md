## 📋 Summary

Describe the problem, the change, and the expected user or maintainer outcome. Link related issues.

## 🧭 Change category

- [ ] Bug fix
- [ ] User-facing feature
- [ ] API or data-model change
- [ ] Security improvement
- [ ] Accessibility improvement
- [ ] Documentation
- [ ] Build / CI
- [ ] Refactor

## 🔍 Implementation details

List the important files/modules changed and explain why the approach was selected. Call out any intentional behavior changes.

## 🧪 Validation performed

- [ ] Backend unit tests: `cd backend && npm test`
- [ ] Backend syntax checks
- [ ] Frontend lint: `cd frontend && npm run lint`
- [ ] Frontend build: `cd frontend && npm run build`
- [ ] Manual CRUD workflow tested with disposable data
- [ ] API integration checks performed where relevant
- [ ] Screenshots added for material UI changes

**Commands and actual results:**

<!-- Do not claim checks that were not run. -->

## 🔌 API and data impact

- [ ] No API contract change
- [ ] API endpoint or response changed
- [ ] Book schema or validation changed
- [ ] Migration/backfill required
- [ ] Environment variable/configuration changed

Describe payloads, status codes, compatibility, and migration/rollback steps. Write None if not applicable.

## 🔐 Security and privacy

- [ ] No credentials, database URLs, tokens, or private data added.
- [ ] Input validation and mass-assignment implications reviewed.
- [ ] Authorization implications reviewed.
- [ ] Public error responses do not expose stack traces or database internals.
- [ ] CORS and browser exposure reviewed.
- [ ] Dependencies and workflow permissions reviewed.

## ♿ Accessibility and responsive behavior

- [ ] Labels and accessible names are present.
- [ ] Keyboard interaction is supported.
- [ ] Focus behavior is visible and logical.
- [ ] Reduced-motion behavior considered.
- [ ] Narrow-screen layout reviewed.
- [ ] Not applicable (explain why).

## 📚 Documentation

- [ ] README updated if project behavior/scope changed.
- [ ] API docs updated for endpoint changes.
- [ ] Data-model/database docs updated for schema changes.
- [ ] Architecture/features docs updated where relevant.
- [ ] Mermaid diagrams and relative links checked.
- [ ] Roadmap/changelog updated where appropriate.

## ⚠️ Risks and follow-up work

Describe known limitations, rollout risks, required secrets, deployment settings, or follow-up issues.

## ✅ Reviewer checklist

- [ ] Scope is focused and reviewable.
- [ ] Existing data and assets are preserved.
- [ ] No generated dependency folders or build artifacts were added.
- [ ] Tests cover normal and failure cases.
- [ ] Documentation matches the implementation.
