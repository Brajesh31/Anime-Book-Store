# 🧑‍💻 Development guide

## Prerequisites
- Git.
- Node.js compatible with the project toolchain (Node 20 is used by CI).
- npm.
- MongoDB local instance or an authorized development database.
- Editor with JavaScript/JSX support.

Do not use a database credential copied from repository history. The previously committed credential must be considered compromised.

## Clone and inspect
```bash
git clone https://github.com/Brajesh31/Anime-Book-Store.git
cd Anime-Book-Store
git status
```
The repository contains two separate npm applications. Install dependencies in each directory independently.

## Configure local environment
At the repository root:
```bash
cp .env.example .env
```
Edit `.env` and set a local MongoDB URI. The backend reads this file when present. Host environment values override file values. Keep `.env` untracked.

For hosted MongoDB, use a dedicated development user with the smallest required database permissions.

## Start the backend
Terminal one:
```bash
cd backend
npm ci
npm run dev
```
The backend defaults to port 5555 and waits for MongoDB before listening. Check:
```bash
curl http://localhost:5555/
curl http://localhost:5555/health
```
The health route should report a connected database. If startup fails, inspect configuration and network connectivity without printing the URI.

## Start the frontend
Terminal two:
```bash
cd frontend
npm ci
npm run dev
```
Vite normally prints `http://localhost:5173`. The browser client uses `VITE_API_BASE_URL`; restart Vite after changing it. Ensure the origin is listed in `CORS_ORIGIN`.

## Daily validation
Backend:
```bash
cd backend
npm test
```
Frontend:
```bash
cd frontend
npm run lint
npm run build
npm run preview
```
Backend unit tests cover request validation only. They do not provision MongoDB or execute HTTP integration tests.

## Typical change workflow
1. Identify the user-visible behavior or API contract being changed.
2. Inspect the page, component, route, validator, and model involved.
3. Make the smallest coherent change.
4. Add or update tests for normal and failure cases.
5. Update API, data-model, architecture, and feature docs where relevant.
6. Run lint, build, and tests.
7. Review the diff for secrets, generated files, unrelated changes, and broken links.
8. Open a pull request with screenshots or request/response examples when useful.

## Coding conventions
- Use descriptive names for non-trivial behavior.
- Keep HTTP calls in the shared API client.
- Validate all untrusted input on the server.
- Never pass arbitrary request bodies to database update methods.
- Use semantic HTML and explicit accessible names.
- Keep state local unless multiple routes genuinely need shared state.
- Avoid adding dependencies for functionality already provided by the platform.
- Keep examples synthetic and safe.

## Repository hygiene
Do not commit `.env`, database exports, `node_modules/`, `frontend/dist/`, logs containing credentials, or editor caches. The repository has historical tracked dependency folders. Their removal is a separate cleanup task because it changes a large part of the Git tree.

## Source ownership map

| Change | Files to review together |
|---|---|
| API input field | Validator, Mongoose model, route tests, API docs |
| API endpoint | Router, frontend client/page, API docs, integration tests |
| Form behavior | BookForm, create/edit page, validation tests |
| Catalogue layout | Home, table/card components, responsive styles |
| Environment variable | Config, .env.example, deployment docs, CI |
| Schema/index | Model, migration plan, data-model/database docs |
