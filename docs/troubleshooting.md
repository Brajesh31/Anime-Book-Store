# 🧰 Troubleshooting and diagnostics

Use these steps to isolate a problem before changing dependencies or rewriting configuration. Redact credentials and personal data before sharing logs.

## Backend exits immediately
Likely causes are missing/invalid configuration or MongoDB connection failure. Check that root `.env` exists, `MONGODB_URI` points to an authorized database, `PORT` is valid, MongoDB is reachable, the hosted cluster permits the network address, and the database user has appropriate permissions. Never print the full URI. The previously committed credential is compromised and must not be reused.

## API does not listen on port 5555
The application listens only after Mongoose connects. Check startup output for the connection failure. Verify another process is not using the port. Set a different valid `PORT` if required.

## Health endpoint returns 503
```bash
curl -i http://localhost:5555/health
```
A 503 means the API process responds but Mongoose does not report a ready connection. Inspect database connectivity, URI validity, network allow-list, and provider status.

## Frontend shows API connection error
- Confirm the backend is listening.
- Confirm `VITE_API_BASE_URL` points to the correct API origin.
- Restart Vite after changing environment values.
- Inspect the browser Network tab for request URL, status, and response body.
- Check that HTTPS pages are not calling an insecure HTTP API.

## CORS blocks a request
The API compares browser Origin against comma-separated `CORS_ORIGIN`. Match scheme, hostname, and port exactly. For local Vite, the default is `http://localhost:5173`. If Vite chooses another port, add that origin to local `.env`.

CORS does not authenticate a request and does not prevent command-line clients from calling the API.

## Invalid ObjectId or missing book
- Malformed ID: 400.
- Well-formed ID with no record: 404.
- Existing record: 200.

Check that the ID is complete and that the selected database contains the record.

## Create/update returns 400
The API requires a non-empty title (maximum 180 characters), non-empty author (maximum 120 characters), and whole-number publishYear from 0 through 2100. Unknown request properties are rejected. Read the response's `errors` object for field-level details.

## npm install or npm ci fails
Run commands from the correct package directory. Use `npm ci` when a lockfile exists. Check Node/npm versions and registry/network access. If package.json changes, regenerate the lockfile with npm and commit both together. Do not delete a lockfile as the first troubleshooting step.

## Frontend lint fails
```bash
cd frontend
npm run lint
```
Resolve the first ESLint error and rerun. Avoid disabling rules globally to silence a local issue.

## Deep route returns 404 after hosting
BrowserRouter requires the static host to return `index.html` for client-side paths such as `/books/edit/:id`, while leaving actual assets untouched.

## API returns 500
The client receives a generic message by design. Inspect protected backend logs for internal details. Never return stack traces or raw MongoDB exceptions to browsers.

## Where to investigate

| Symptom | First file |
|---|---|
| Missing environment | `backend/config.js` |
| Server startup/CORS/health | `backend/index.js` |
| CRUD status or response | `backend/routes/booksRoute.js` |
| Field constraint | `backend/utils/bookValidation.js` and `backend/models/bookModel.js` |
| Browser API URL | `frontend/src/lib/api.js` |
| Catalogue rendering | `frontend/src/pages/Home.jsx` |
| Form submission | `frontend/src/pages/CreateBooks.jsx` or `EditBook.jsx` |
| Browser navigation | `frontend/src/App.jsx` |
| Build and lint | `frontend/package.json`, `.eslintrc.cjs` |

## Safe diagnostic bundle
When asking for help, provide OS and Node/npm versions, command and working directory, redacted terminal output, sanitized browser error, request method/path/status, and whether MongoDB is local or hosted. Never provide database passwords, complete connection strings, access tokens, or private database exports.
