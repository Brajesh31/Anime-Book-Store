# ⚙️ Configuration and secrets management

## 1. Configuration sources

The backend reads values from the process environment and, for local development, the root `.env` file. Values already present in the hosting environment take precedence over local file values.

| Variable | Required | Example | Consumer | Secret? |
|---|---|---|---|---|
| `PORT` | No | `5555` | Express listener | No |
| `MONGODB_URI` | Yes | `mongodb://127.0.0.1:27017/anime_book_store` | Mongoose | **Yes** when credentials are embedded |
| `CORS_ORIGIN` | No | `http://localhost:5173` | CORS allow-list | No |
| `VITE_API_BASE_URL` | No | `http://localhost:5555` | Browser Axios client | No |

## 2. Local setup

At the repository root:
```bash
cp .env.example .env
```
Edit `.env` and set `MONGODB_URI` to a database you own and are authorized to use. The example is intentionally a local MongoDB URI. Keep `.env` untracked.

Start the backend from its directory:
```bash
cd backend
npm ci
npm run dev
```

Start the frontend in another terminal:
```bash
cd frontend
npm ci
npm run dev
```

The frontend reads `VITE_API_BASE_URL` at build/dev-server startup. Restart Vite after changing it.

## 3. Parsing behavior

The backend loader supports:
- Blank lines.
- Lines beginning with `#`.
- Simple `KEY=VALUE` assignments.
- Single- or double-quoted values.
- Host-provided environment values taking precedence.

It does not implement shell interpolation, variable expansion, escaped multiline secrets, or command substitution. Use your deployment platform's secret manager for production values.

## 4. Port validation

`PORT` must be an integer from 1 to 65535. If the value is malformed, startup fails with a clear configuration error. The default local port is 5555.

## 5. CORS configuration

`CORS_ORIGIN` is a comma-separated allow-list of browser origins, including scheme and port when relevant. Example:
```text
CORS_ORIGIN=http://localhost:5173,https://catalogue.example.com
```
Do not use `*` for a production API that accepts writes. CORS does not replace authentication.

## 6. Vite environment safety

Vite exposes variables prefixed with `VITE_` in browser code. They are public by design. Safe examples include an API base URL or a public analytics identifier. Never use this prefix for:
- MongoDB credentials.
- Private API tokens.
- Session signing secrets.
- Service-account keys.
- Payment provider secret keys.

## 7. Credential incident handling

A MongoDB URI containing a username/password was previously committed in the backend configuration. Removing it from the current file does not invalidate the credential and does not erase earlier Git commits.

Required response:
1. Change the database password or create a new least-privilege database user.
2. Revoke the old user/credential.
3. Review database provider access logs for unexpected activity.
4. Remove the secret from active source and verify the current branch contains no credential.
5. Review Git history and coordinate history rewriting only if appropriate for collaborators and open PRs.
6. Update local and hosted environment variables with the new credential.
7. Run a secret scanner and review the result.
8. Never paste the old or new URI into public issues, logs, chat, screenshots, or documentation.

## 8. Environment separation

| Environment | Database | Credentials | CORS |
|---|---|---|---|
| Local | Disposable local DB | Local-only user | Local Vite origin |
| Preview | Isolated preview DB | Preview secret store | Preview frontend origin |
| Production | Production DB | Host-managed secret store | Production frontend origin |

Use least-privilege database users and separate backups. Do not point local experiments at production data.

## 9. Troubleshooting

- Missing `MONGODB_URI`: add it to root `.env` or host environment.
- Invalid `PORT`: use an integer from 1 to 65535.
- Browser CORS error: check exact scheme/host/port in `CORS_ORIGIN`.
- Frontend still calls old API: restart Vite after changing `VITE_API_BASE_URL`.
- MongoDB timeout: verify cluster state, network allow-list, DNS, user privileges, and URI encoding without printing the URI.

## 10. Change checklist

- [ ] Update `.env.example` with placeholders only.
- [ ] Keep real `.env` ignored.
- [ ] Never place secrets in Vite variables.
- [ ] Update this document when a new setting is introduced.
- [ ] Validate required settings at startup.
- [ ] Keep separate settings for local, preview, and production.
