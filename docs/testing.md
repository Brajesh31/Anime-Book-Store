# 🧪 Testing and quality strategy

## Current state
Frontend scripts include ESLint and Vite build. Backend has no test script and no dedicated automated suite was found. CI validates the existing frontend commands and backend installation/syntax, not end-to-end CRUD integration.

## Existing commands
```bash
cd frontend
npm ci
npm run lint
npm run build
```
Backend startup can be checked after safe database configuration:
```bash
cd backend
npm ci
npm start
```
A successful frontend build does not prove database operations work.

## Manual verification matrix
| Scenario | Expected |
|---|---|
| Backend with reachable MongoDB | Server listens |
| GET `/books` | `{count,data}` |
| POST all fields | 201 and document |
| POST missing field | 400 |
| GET valid ID | Document |
| GET malformed/missing ID | Current behavior needs normalization to 400/404 |
| PUT existing ID | Record updated |
| PUT missing ID | 404 |
| DELETE existing ID | Record removed |
| DELETE missing ID | 404 |
| UI table/card switch | Selected view rendered |
| API unavailable | Visible error and spinner ends (known UI gap) |

## Backend tests to add
Cover required fields, whitespace, types/ranges, unknown fields, malformed IDs, missing records, CRUD success, database outages, CORS, request size limits and sanitized errors. Use an isolated test database.

## Frontend tests to add
Cover routes, loading/empty/error states, form validation, success navigation, mutation failures, keyboard use, labels, responsive layout and destructive confirmation.

## CI limits
CI does not provision MongoDB or run browser tests. Do not claim coverage it does not execute.

## Release gate
- [ ] Frontend lint/build pass.
- [ ] Backend route tests exist and pass.
- [ ] CRUD UI cases tested.
- [ ] Invalid IDs and missing records covered.
- [ ] Secret scan clean.
- [ ] Generated dependency directories are not tracked.
- [ ] Security hardening complete.
