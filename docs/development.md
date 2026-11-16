# 🧑‍💻 Development guide

## Prerequisites
- Git.
- Node.js and npm compatible with checked-in package dependencies.
- A reachable MongoDB instance.
- Terminal and editor.

## Clone
```bash
git clone https://github.com/Brajesh31/Anime-Book-Store.git
cd Anime-Book-Store
```

## Backend
Rotate the credential previously committed in backend configuration before using any shared database. Configure a safe local URI after environment-based config is implemented.
```bash
cd backend
npm ci
npm run dev
```
The checked-in backend defines `start` and `dev` scripts. The server listens on port 5555 after MongoDB connects.

## Frontend
In another terminal:
```bash
cd frontend
npm ci
npm run dev
```
Vite prints a local URL, typically `http://localhost:5173`. Current pages call the API at localhost port 5555 directly.

## Production build and lint
```bash
cd frontend
npm run lint
npm run build
npm run preview
```
Build output is `frontend/dist` and should not be committed.

## Source map
| Area | Path |
|---|---|
| React entry | `frontend/src/main.jsx` |
| Route declarations | `frontend/src/App.jsx` |
| Screens | `frontend/src/pages/` |
| Shared UI | `frontend/src/components/` |
| Express startup | `backend/index.js` |
| API handlers | `backend/routes/booksRoute.js` |
| Mongoose schema | `backend/models/bookModel.js` |

## Working conventions
Keep UI and persistence concerns separate. Document endpoint changes in `docs/api/README.md` and schema changes in `docs/data-model.md`. Validate all untrusted input server-side. Never commit .env files, credentials, database dumps, logs, `node_modules`, or build output. Use disposable data and test CRUD flows. Backend currently has no automated test command; record actual manual validation results.
