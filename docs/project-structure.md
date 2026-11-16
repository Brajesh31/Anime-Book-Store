# 🗂️ Project structure and file responsibilities

This guide maps first-party files. Generated dependency trees, lockfile contents, IDE metadata, and image binaries are not expanded into source documentation.

## Repository map

```text
Anime-Book-Store/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   ├── dependabot.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── backend/
│   ├── models/bookModel.js
│   ├── routes/booksRoute.js
│   ├── tests/bookValidation.test.js
│   ├── utils/bookValidation.js
│   ├── config.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/book-store.svg
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
├── DEMO/
├── docs/
├── .env.example
├── .eslintrc.cjs
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CITATION.cff
├── CODEOWNERS
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── ROADMAP.md
├── SECURITY.md
└── SUPPORT.md
```

## Root configuration and governance

| File | Responsibility | Update when |
|---|---|---|
| `.env.example` | Safe variable names and local placeholders | Runtime configuration changes |
| `.editorconfig` | Editor whitespace and line-ending rules | Team conventions change |
| `.gitattributes` | Git text/binary handling | New file types are introduced |
| `.gitignore` | Excludes local secrets and generated output | Build tools add output paths |
| `.eslintrc.cjs` | Frontend static analysis rules | React/tooling rules change |
| `CITATION.cff` | Citation metadata | Project metadata changes |
| `CODEOWNERS` | Default review ownership | Maintainers change |
| `LICENSE` | Repository license | Legal ownership/license changes |
| `CONTRIBUTING.md` | Contribution process | Review workflow changes |
| `SECURITY.md` | Private vulnerability reporting | Security process changes |\n| `docs/accessibility.md` | Accessibility requirements and manual review | Interactive UI changes |\n| `docs/performance.md` | Performance measurement and scaling guidance | Query, bundle, or rendering changes |\n| `docs/privacy-data-handling.md` | Data inventory and retention practices | New data fields or integrations |\n| `docs/threat-model.md` | Threat register and trust boundaries | New endpoints or trust boundaries |\n| `docs/operations.md` | Incident and recovery runbook | Hosting and operational changes |\n| `docs/release-process.md` | Release gates and rollback process | CI/CD or deployment changes |\n| `docs/product-scope.md` | Implemented scope and non-goals | Feature additions or removals |

## Backend modules

| File | Responsibility | Contract |
|---|---|---|
| `backend/config.js` | Loads environment and validates port/database URI | Never contains a real URI |
| `backend/index.js` | Middleware, health route, error handling, startup/shutdown | Listener starts after DB connection |
| `backend/routes/booksRoute.js` | REST handlers | Status codes and JSON envelope |
| `backend/models/bookModel.js` | Mongoose schema | Persisted field constraints |
| `backend/utils/bookValidation.js` | Request allow-list and normalization | Only title/author/year accepted |
| `backend/tests/bookValidation.test.js` | Pure validation tests | No production DB access |
| `backend/package.json` | Scripts and dependencies | Keep lockfile synchronized |
| `backend/package-lock.json` | Exact npm dependency resolution | Regenerate with npm when dependencies change |

## Frontend modules

| File/folder | Responsibility |
|---|---|
| `frontend/index.html` | Document metadata and root mount |
| `frontend/src/main.jsx` | React root, StrictMode, BrowserRouter, notifications |
| `frontend/src/App.jsx` | Browser route map |
| `frontend/src/lib/api.js` | Shared Axios configuration and error extraction |
| `frontend/src/pages/Home.jsx` | Catalogue loading, view selection and page states |
| `frontend/src/pages/CreateBooks.jsx` | Create workflow |
| `frontend/src/pages/ShowBook.jsx` | Record detail workflow |
| `frontend/src/pages/EditBook.jsx` | Record edit workflow |
| `frontend/src/pages/DeleteBook.jsx` | Delete confirmation and mutation |
| `frontend/src/pages/NotFound.jsx` | Unknown browser route |
| `frontend/src/components/BookForm.jsx` | Shared accessible create/edit fields |
| `frontend/src/components/FeedbackState.jsx` | Empty and error states |
| `frontend/src/components/Spinner.jsx` | Accessible loading status |
| `frontend/src/components/BackButton.jsx` | Consistent return navigation |
| `frontend/src/components/home/BooksTable.jsx` | Semantic table layout |
| `frontend/src/components/home/BooksCard.jsx` | Responsive card grid |
| `frontend/src/components/home/BookSingleCard.jsx` | One card and its actions |
| `frontend/src/components/home/BookModal.jsx` | Read-only preview dialog |
| `frontend/src/index.css` | Global styles and accessibility foundations |
| `frontend/src/styles/Home.css` | Scoped legacy catalogue styles |

## Documentation map
See [docs/README.md](./README.md) for the full guide index. The API guide, data model, configuration guide, and test plan should be updated whenever their corresponding code contracts change.

## Generated and binary content
The repository currently contains tracked `node_modules` directories and package lockfiles. Dependency package contents are third-party generated artifacts, not application documentation. Existing PNG screenshots, SVG assets, and the MIT license should not be expanded with artificial prose. Remove tracked dependencies only through a deliberate cleanup after confirming lockfiles install correctly.
