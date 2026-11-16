# 🗂️ Project structure and responsibilities

This map covers first-party source and excludes generated npm package contents.

## Root files
| Path | Responsibility |
|---|---|
| `.editorconfig` | Editor formatting defaults |
| `.env.example` | Intended config names; not consumed by runtime yet |
| `.gitattributes` | Git text/binary handling |
| `.gitignore` | Ignores env files and generated output |
| `README.md` | Project entry point |
| `LICENSE` | MIT license |
| `CHANGELOG.md` | Repository milestones |
| `ROADMAP.md` | Planned improvements |
| `CITATION.cff` | Citation metadata |
| `CODEOWNERS` | Default code owner |
| `CONTRIBUTING.md` | Contributor workflow |
| `CODE_OF_CONDUCT.md` | Community expectations |
| `SECURITY.md` | Vulnerability reporting |
| `SUPPORT.md` | Support guidance |

## GitHub configuration
| Path | Responsibility |
|---|---|
| `.github/workflows/` | CI and maintenance automation |
| `.github/ISSUE_TEMPLATE/` | Issue forms |
| `.github/PULL_REQUEST_TEMPLATE.md` | Review checklist |

## Backend
| Path | Responsibility |
|---|---|
| `backend/index.js` | Express setup, middleware, router, DB connection, startup |
| `backend/config.js` | Current hard-coded settings; secret remediation required |
| `backend/routes/booksRoute.js` | CRUD handlers |
| `backend/models/bookModel.js` | Mongoose schema/model |
| `backend/package.json` | Scripts and dependencies |
| `backend/package-lock.json` | Locked dependencies |
| `backend/node_modules/` | Tracked generated dependencies; cleanup recommended |

## Frontend
| Path | Responsibility |
|---|---|
| `frontend/index.html` | Vite HTML entry |
| `frontend/vite.config.js` | Vite configuration |
| `frontend/tailwind.config.js` | Tailwind configuration |
| `frontend/postcss.config.js` | PostCSS plugins |
| `frontend/src/main.jsx` | React mount and providers |
| `frontend/src/App.jsx` | Route declarations |
| `frontend/src/pages/` | Catalogue, create, detail, edit, delete screens |
| `frontend/src/components/` | Shared UI and catalogue components |
| `frontend/src/styles/` | Page styles |
| `frontend/package.json` | Scripts and dependencies |
| `frontend/package-lock.json` | Locked dependencies |
| `frontend/node_modules/` | Tracked generated dependencies; cleanup recommended |

## Existing demonstration assets
`DEMO/D1.png` through `DEMO/D4.png` are existing screenshots and should be preserved.

## Potential future structure
Backend tests, a shared Axios client, validation modules, and an environment configuration module are sensible future additions. They are not current directories.
