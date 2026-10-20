# Anime Book Store

Anime Book Store is a small MERN-style CRUD application for cataloging books. It has a Vite/React frontend and an Express/Mongoose backend backed by MongoDB. The name reflects the visual/demo context; the current schema stores general book records with title, author, publication year, and timestamps.

## Features

- List books as a table or responsive cards.
- Create, inspect, edit, and delete books.
- React Router pages for CRUD flows.
- Express JSON API under `/books`.
- Mongoose validation and timestamp fields.
- Tailwind-based frontend styling and loading states.

## Structure

```text
frontend/  Vite React client, pages, components, and assets
backend/   Express server, routes, MongoDB model, and configuration
DEMO/      Screenshots or demonstration assets
```

## Local setup

### Backend

```bash
cd backend
npm ci
```

Set a local MongoDB connection string and port through a configuration mechanism before starting the server. The committed `config.js` is a tutorial-era configuration file; never replace its placeholder with a real credential in Git.

```bash
npm start
# development:
npm run dev
```

The API listens on port `5555` by default.

### Frontend

```bash
cd frontend
npm ci
npm run dev
```

The current pages request `http://localhost:5555/books`. If the API host changes, centralize and update the client base URL rather than scattering environment-specific URLs.

## API

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/books` | List books |
| GET | `/books/:id` | Read one book |
| POST | `/books` | Create a book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

Validate request bodies and IDs server-side. Add authentication and authorization before exposing the service beyond a trusted development environment.

## Validation

```bash
cd frontend
npm run lint
npm run build
```

Run the backend against a disposable MongoDB database and exercise each CRUD endpoint. Do not use production data for development.

## License

Original code and documentation are released under the MIT License. Third-party dependencies and demo assets may have separate terms.

Last updated: 2026-10-20 22:05 UTC
