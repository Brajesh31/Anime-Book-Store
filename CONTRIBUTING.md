# 🤝 Contributing to Anime Book Store

Thank you for considering a contribution. This repository is a React/Vite frontend and Express/Mongoose API for book catalogue CRUD workflows. Keep changes focused, testable, and aligned with the current product scope.

## 1. Before opening a change
- Read the [README](./README.md) and [documentation index](./docs/README.md).
- Search existing issues and pull requests for related work.
- For a substantial feature, open an issue describing the user problem and acceptance criteria.
- Do not begin with a broad rewrite when a small targeted change will solve the problem.

## 2. Local setup
Follow [docs/installation.md](./docs/installation.md). Install frontend and backend dependencies separately with `npm ci`. Use a disposable MongoDB database and synthetic records.

## 3. Engineering expectations
- Keep UI behavior in React pages and reusable components.
- Keep API requests in the shared Axios client.
- Validate all untrusted request data on the server.
- Allow-list database update properties.
- Keep model constraints and API validation aligned.
- Use semantic HTML, accessible labels, keyboard interactions, and visible state feedback.
- Avoid unnecessary dependencies and generated artifacts.
- Do not introduce product capabilities that are only represented by placeholder UI.

## 4. Documentation expectations
Update the corresponding guides in the same pull request:
- Endpoint changes: `docs/api/README.md`.
- Schema changes: `docs/data-model.md` and `docs/database.md`.
- Browser behavior: `docs/features.md`.
- Environment variables: `docs/configuration.md`.
- Build/test changes: `docs/testing.md`.
- Deployment changes: `docs/deployment.md`.

Keep diagrams consistent with the actual code. Use synthetic examples only.

## 5. Security and privacy
Never commit `.env`, database URLs, passwords, tokens, dumps, private records, secret-bearing logs, `node_modules`, or build output. A credential-bearing URI was previously committed; assume it is compromised and never reuse it. Follow [SECURITY.md](./SECURITY.md) for vulnerability reporting.

## 6. Validation commands

Backend:
```bash
cd backend
npm ci
npm test
```

Frontend:
```bash
cd frontend
npm ci
npm run lint
npm run build
```

If a change requires a MongoDB service, run it against a dedicated disposable database and state the actual result in the pull request. Do not claim tests that were not run.

## 7. Commit and pull request
- Use a descriptive commit message.
- Keep unrelated formatting or generated file changes out of the diff.
- Explain the problem, approach, and user-visible impact.
- Include API/schema compatibility notes.
- Include screenshots for material UI changes.
- List commands and actual validation results.
- Call out known limitations and follow-up work.

## 8. Review process
A maintainer reviews correctness, security, accessibility, documentation, and scope. Passing CI is necessary but does not guarantee merge approval. Changes may require revision before acceptance.
