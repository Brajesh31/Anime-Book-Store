# 📦 Installation and first-run setup

This guide takes a developer from a clean clone to a running local frontend and API. Complete the backend configuration before starting the UI.

## 1. Requirements

| Tool | Purpose | Verification |
|---|---|---|
| Git | Clone and inspect source | `git --version` |
| Node.js | Run Vite and Express | `node --version` |
| npm | Install locked dependencies | `npm --version` |
| MongoDB | Persist Book records | Provider/local service status |
| Browser | Use the React interface | Current Chromium, Firefox, or Safari |

CI currently uses Node 20. Use a supported Node release compatible with the checked-in package versions.

## 2. Clone the project

```bash
git clone https://github.com/Brajesh31/Anime-Book-Store.git
cd Anime-Book-Store
```

Check the working tree:
```bash
git status --short
```

## 3. Configure MongoDB safely

Create a local MongoDB database or an isolated development database in a provider account you control. Use a dedicated database user with only the permissions required by the application.

A credential-bearing URI was previously committed to repository history. Treat that old credential as compromised. Rotate/revoke it with the provider and do not reuse it.

Copy the example file:
```bash
cp .env.example .env
```

Set `MONGODB_URI` in the root `.env`. The example URI points to a local MongoDB instance. Keep `.env` untracked. Do not paste its contents into chat, issue reports, screenshots, or logs.

## 4. Install backend dependencies

```bash
cd backend
npm ci
```

Use `npm ci` to install exactly from the lockfile. Do not install from the repository root because frontend and backend are separate packages.

## 5. Start the API

```bash
npm run dev
```

The server defaults to port 5555 and waits for MongoDB to connect before listening. Check both service routes:
```bash
curl http://localhost:5555/
curl http://localhost:5555/health
```
The health endpoint should return HTTP 200 with database status connected. If it returns 503 or the server exits, follow [troubleshooting](./troubleshooting.md).

## 6. Install frontend dependencies

Open a second terminal from the repository root:
```bash
cd frontend
npm ci
```

## 7. Start Vite

```bash
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`. The API's `CORS_ORIGIN` must contain the exact origin. If Vite selects a different port, add that origin to the root `.env` and restart the backend.

## 8. Verify the application

- [ ] API welcome route responds.
- [ ] API health route reports database connected.
- [ ] Catalogue page loads without a network error.
- [ ] Table/card layout switch works.
- [ ] Create a synthetic book record.
- [ ] Open the new record's detail page.
- [ ] Edit the record and confirm the new value.
- [ ] Delete the disposable record.
- [ ] Confirm the catalogue reflects the deletion.

## 9. Development checks

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
```

These checks do not constitute a complete browser-to-database integration suite. See [testing.md](./testing.md).

## 10. Common setup errors

| Error | Likely cause | Action |
|---|---|---|
| Missing MONGODB_URI | Root .env absent or variable unset | Add a valid local URI |
| MongoDB timeout | Service/network unavailable | Check DB status and network rules |
| CORS blocked | Origin mismatch | Match exact scheme/host/port |
| Connection refused | API not listening | Check backend startup logs |
| Deep route 404 in production | No SPA fallback | Configure index.html fallback |
| npm ci fails | Node/lockfile mismatch | Check runtime and package directory |

## 11. Cleanup

Stop local processes with Ctrl+C. Keep the local database disposable. Never commit local environment files, node_modules, build output, database exports, or real credentials.
