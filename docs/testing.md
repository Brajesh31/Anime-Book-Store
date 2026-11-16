# 🧪 Testing strategy and quality gates

## 1. Current automated coverage

The backend now uses Node's built-in test runner for the pure request-validation utility. These tests do not connect to MongoDB and do not prove that the full Express/database integration works.

The frontend has ESLint and Vite production build commands. There is no browser component test framework or end-to-end browser suite currently configured.

## 2. Run available checks

Backend:
```bash
cd backend
npm ci
npm test
node --check index.js
node --check routes/booksRoute.js
```

Frontend:
```bash
cd frontend
npm ci
npm run lint
npm run build
```

## 3. Backend validation test coverage

The current Node test file checks:
- A valid payload is accepted and text values are trimmed.
- Missing required fields are rejected.
- Whitespace-only title/author values are rejected.
- Fractional, negative, out-of-range, and non-numeric years are rejected.
- Unknown properties are rejected.
- Title maximum length is enforced.
- Arrays and null are rejected as request bodies.

These are unit tests for the validator. They do not test Mongoose persistence, route status codes, CORS, connection behavior, or real HTTP requests.

## 4. API integration test plan

Use a dedicated disposable test database and never run destructive tests against production.

| Area | Cases |
|---|---|
| Health | Connected returns 200; unavailable returns 503 |
| Collection | Empty collection, multiple records, newest-first ordering |
| Create | Valid record, missing fields, whitespace, invalid year, extra key |
| Read | Existing ID, valid unknown ID, malformed ID |
| Update | Valid update, missing field, unknown key, missing record |
| Delete | Existing record, valid unknown ID, malformed ID |
| Middleware | JSON parsing, request size, CORS allow/deny |
| Failure | Database unavailable, sanitized 500 response |

## 5. Frontend verification plan

| Screen | Scenarios |
|---|---|
| Home | Loading, success, empty, network failure, retry |
| Home layout | Switch table/card; selection announced |
| Create | Required fields, max length, invalid year, success, server error |
| Details | Existing ID, malformed ID, missing record, date fallback |
| Edit | Initial load, route ID changes, validation, update success/failure |
| Delete | Record summary, cancel, confirm, API failure, missing record |
| Modal | Open, close button, backdrop, Escape key |
| Navigation | Known routes and unknown route fallback |
| Accessibility | Labels, keyboard, focus visibility, reduced motion |

## 6. CI behavior

The CI workflow installs from lockfiles, runs frontend lint/build, runs backend install and syntax/unit tests, and checks relative Markdown links. The dependency workflow runs npm audit and warns if dependency directories are tracked.

CI cannot prove production deployment, database permissions, secret rotation, restore readiness, or browser behavior that is not covered by automated tests.

## 7. Quality gate for a release

- [ ] Unit tests pass.
- [ ] Frontend lint passes without warnings treated as errors.
- [ ] Frontend production build succeeds.
- [ ] API integration tests pass against disposable MongoDB.
- [ ] Manual CRUD workflows are verified.
- [ ] Invalid IDs and missing records have expected status codes.
- [ ] No credentials are present in current source.
- [ ] Credential rotation has been completed at the provider.
- [ ] Dependency audit findings are reviewed.
- [ ] Browser route fallback works in the target host.
- [ ] Accessibility and responsive behavior reviewed.
- [ ] Backup/restore and rollback procedures are documented.

## 8. Test data policy

Use clearly synthetic titles and authors. Do not use real customer records, private reading histories, production database exports, or actual credentials in tests, fixtures, screenshots, or logs.
