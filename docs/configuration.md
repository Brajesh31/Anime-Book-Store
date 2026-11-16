# ⚙️ Configuration and secrets

## Current behavior
`backend/config.js` exports a hard-coded port and MongoDB URI. Backend code does not currently load dotenv or read `process.env`. Frontend pages call `http://localhost:5555` directly. The root `.env.example` is not wired into runtime code.

## Critical credential remediation
A credential-bearing MongoDB URI exists in tracked backend configuration. Treat it as compromised because the repository is public. Rotate the database password/user in the provider, revoke the old credential, inspect access logs, and remove the secret from active source in a dedicated change. Removing the current file value does not erase Git history. Never reproduce the old URI in docs, tickets, or messages.

## Intended environment contract
| Variable | Example | Intended consumer |
|---|---|---|
| `PORT` | `5555` | Backend listener |
| `MONGODB_URI` | `mongodb://localhost:27017/anime_book_store` | Backend database |
| `VITE_API_BASE_URL` | `http://localhost:5555` | Public browser API origin |

These names appear in `.env.example` but current code does not consume them.

## Recommended implementation
1. Rotate and revoke the exposed credential.
2. Implement backend environment loading using a supported Node mechanism or declared dotenv dependency.
3. Fail startup if required values are missing. Do not default to a production URI.
4. Centralize Axios setup and use `import.meta.env.VITE_API_BASE_URL` for the public API origin.
5. Keep local `.env` ignored and commit placeholders only.

Vite exposes `VITE_*` values to browser code. Never put database passwords, signing keys, or private API keys there.

- [ ] Rotate/revoke old credential.
- [ ] Remove secret-bearing source config.
- [ ] Implement environment loading and validation.
- [ ] Wire frontend API base URL.
- [ ] Verify env files remain ignored.
- [ ] Separate local, preview and production settings.
