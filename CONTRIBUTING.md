# 🤝 Contributing

Anime Book Store is currently a React/Vite frontend and Express/Mongoose API for book CRUD workflows.

## Before starting
- Read the [README](./README.md) and [documentation index](./docs/README.md).
- Search existing issues before opening a duplicate.
- For larger work, describe the user problem and acceptance criteria in an issue.
- Keep each change focused.

## Setup
Follow [docs/development.md](./docs/development.md). Install dependencies separately in `frontend/` and `backend/`, and use a disposable MongoDB database.

## Engineering conventions
- Keep screen behavior in React pages and shared behavior in reusable components.
- Document API changes in `docs/api/README.md` and schema changes in `docs/data-model.md`.
- Validate all untrusted values on the server.
- Use an allow-list for update fields rather than forwarding arbitrary request bodies to Mongoose.
- Preserve accessible labels, keyboard use, and visible pending/error states.
- Update relevant docs and diagrams when behavior changes.

## Security
Never commit `.env`, database URLs, passwords, tokens, dumps, private records, secret-bearing logs, `node_modules`, or build output. A credential-bearing URI was previously committed; assume it is compromised and do not reuse it. See [SECURITY.md](./SECURITY.md).

## Validation
```bash
cd frontend
npm ci
npm run lint
npm run build
```
Backend currently has no automated test command. Exercise changed routes using disposable records and document actual outcomes.

## Pull requests
Use the PR template. Explain behavior, affected modules, API/schema changes, migration needs, actual validation output, screenshots where relevant, and known limitations. Changes require review before acceptance.
