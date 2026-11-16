# 🧰 Troubleshooting

## Catalogue does not load
Confirm the backend is running on port 5555, MongoDB connected, then inspect the browser Network tab. Current page modules hard-code `http://localhost:5555`.

## Backend startup fails
Run `npm ci` in `backend/`; check Node/npm compatibility, database availability, network allow-list and user privileges. Rotate any credential previously committed publicly. Never reuse it.

## MongoDB connection failure
Check cluster status, DNS/network access, URI encoding, database permissions and credential status. Never paste a full connection URI into a public issue or log.

## Frontend lint/build issue
From `frontend/` run:
```bash
npm ci
npm run lint
npm run build
```
Use the checked-in lockfile and fix the first actionable error before changing multiple dependencies.

## Deep route returns 404 after hosting
BrowserRouter requires the host to rewrite application paths to `index.html`, without rewriting real static assets.

## CORS error
The backend currently uses broad CORS. A deployed service should use an explicit allow-list matching frontend scheme, hostname and port.

## Invalid or missing book
The current read handler does not explicitly normalize missing records to 404. Invalid IDs may surface as generic server errors. This is a known API hardening gap.

## Where to inspect
| Concern | Path |
|---|---|
| Browser routes | `frontend/src/App.jsx` |
| Frontend request | Relevant page in `frontend/src/pages/` |
| Server startup | `backend/index.js` |
| DB config | `backend/config.js` |
| CRUD handlers | `backend/routes/booksRoute.js` |
| Schema | `backend/models/bookModel.js` |

Redact credentials, tokens, local paths and personal data before sharing logs.
