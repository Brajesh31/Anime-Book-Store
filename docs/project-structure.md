# Project structure

This map covers first-party files and excludes generated package content.

| Path | Responsibility |
|---|---|
| `.editorconfig` | Editor formatting defaults |
| `.env.example` | Intended config names; not consumed by runtime yet |
| `.gitattributes` | Git text/binary behavior |
| `.gitignore` | Ignores environment files and generated outputs |
| `README.md` | Project entry point |
| `LICENSE` | MIT license |
| `CHANGELOG.md` | Milestones |
| `ROADMAP.md` | Planned improvements |
| `CITATION.cff` | Citation metadata |
| `CODEOWNERS` | Default code owner |
| `.github/workflows/` | CI and maintenance workflows |
| `.github/ISSUE_TEMPLATE/` | Issue forms |
| `.github/PULL_REQUEST_TEMPLATE.md` | Review checklist |
| `backend/index.js` | Express setup, middleware, router, DB connection, startup |
| `backend/config.js` | Current hard-coded settings; credential remediation required |
| `backend/routes/booksRoute.js` | CRUD HTTP handlers |
| `backend/models/bookModel.js` | Mongoose schema/model |
| `backend/package.json` | Backend scripts and dependencies |
| `backend/package-lock.json` | Locked dependency graph |
| `frontend/index.html` | Vite HTML entry |
| `frontend/vite.config.js` | Vite config |
| `frontend/tailwind.config.js` | Tailwind config |
| `frontend/src/main.jsx` | React mount/providers |
| `frontend/src/App.jsx` | Route declarations |
| `frontend/src/pages/` | Catalogue/create/detail/edit/delete screens |
| `frontend/src/components/` | Shared UI and catalogue components |
| `frontend/src/styles/` | Page styles |
| `frontend/package.json` | Frontend scripts/dependencies |
| `frontend/package-lock.json` | Locked frontend dependencies |
| `DEMO/D1.png`–`DEMO/D4.png` | Existing demo images |

Both `node_modules` trees are currently tracked. These are generated npm dependencies, not source, and should be removed in a separately reviewed cleanup. Suggested future tests, API client and validation modules are not current folders.
