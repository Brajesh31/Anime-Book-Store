# ❓ Frequently asked questions

## What is Anime Book Store?
It is a React/Vite frontend and Express/Mongoose API for managing a small book catalogue. The implemented scope is create, read, update, and delete for book records.

## Is this a complete online store?
No. The repository name is Anime Book Store, but the current code does not implement cart, checkout, orders, payment, shipping, stock, customer accounts, or admin roles. Do not advertise those capabilities until they are built and tested.

## What fields does a book contain?
The current Book model stores title, author, publication year, MongoDB ID, and Mongoose timestamps. The API accepts only title, author, and publication year from clients.

## Why are there separate frontend and backend folders?
They are independent npm applications. The frontend builds a browser bundle with Vite. The backend runs as a Node.js process and exposes JSON endpoints. Each has its own package manifest and lockfile.

## Which ports are used locally?
The API defaults to port 5555. Vite commonly uses port 5173. The browser origin must be allowed by the backend's CORS_ORIGIN configuration.

## Where do I set the MongoDB URI?
Set MONGODB_URI in the root .env file for local development or in the hosting platform's environment/secret settings. Never commit the real URI.

## Can I reuse the MongoDB URI that was previously in the repository?
No. A credential-bearing URI was committed publicly and must be treated as compromised. Rotate/revoke it with the provider. Do not use the old credential even if it still connects.

## Is authentication included?
No. The API does not currently authenticate callers or enforce user roles. CORS is not authentication. Production write access requires an identity and authorization layer.

## Is search or pagination available?
No. The list endpoint returns the current collection. Search, filters, sorting controls, and pagination are future work.

## Does the API return errors consistently?
The current API uses a JSON success/message envelope and field-level validation errors for invalid payloads. Invalid IDs return 400, missing records return 404, and unexpected failures return generic 500 responses.

## Why does the backend wait before opening its port?
It starts listening only after Mongoose establishes the MongoDB connection. This avoids reporting the API as ready when persistence is unavailable. The /health endpoint checks the connection state.

## Why does a deep frontend route fail after deployment?
The application uses BrowserRouter. The static host must serve index.html for application paths while still returning real assets normally.

## Does the project have automated tests?
The backend has Node built-in unit tests for payload validation. The frontend has ESLint and a Vite build check. Full API integration tests and browser end-to-end tests are not currently configured.

## Can I add ISBN, genre, or cover art?
Those are plausible catalogue extensions, but they require a schema definition, API validation, UI changes, tests, and documentation updates. Cover URLs also require an allowed-scheme and trusted-host policy.

## Can I add cart and payments?
That is a separate product scope. Design identity, inventory, order lifecycle, payment provider integration, verified webhooks, idempotency, and security before implementing commerce.

## Why should node_modules not be committed?
It is generated dependency content. It increases repository size, creates noisy diffs, and can vary by platform. Use package-lock.json and npm ci to recreate dependencies. This repository currently has historical tracked dependency directories; remove them through a separate reviewed cleanup.

## How do I report a bug?
Use the GitHub bug report form. Include steps to reproduce, expected/actual behavior, environment details, and redacted logs. Never include credentials or private database records.

## How do I report a security issue?
Follow SECURITY.md and report privately. Do not publish secrets, exploit details, or real data in public issues.
