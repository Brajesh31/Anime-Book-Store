# 🔌 API quick reference

The Express service exposes the Book resource at `/books`. This page is a short index; the full request/response contract, validation rules, error examples, and cURL commands are maintained in [docs/api/README.md](./api/README.md).

## Local service
- Base URL: `http://localhost:5555`
- Health: `GET /health`
- Resource: `/books`
- Format: JSON
- Authentication: not implemented

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/` | Service welcome metadata |
| GET | `/health` | Database readiness |
| GET | `/books` | List records |
| GET | `/books/:id` | Read one record |
| POST | `/books` | Create record |
| PUT | `/books/:id` | Replace editable fields |
| DELETE | `/books/:id` | Permanently delete record |

## Accepted create/update payload

```json
{
  "title": "Example Volume",
  "author": "Example Author",
  "publishYear": 2024
}
```

The API trims text, requires a title and author, enforces maximum lengths, requires a whole-number year from 0 through 2100, and rejects additional properties. PUT requires all three editable fields.

## Status summary

| Status | Meaning |
|---:|---|
| 200 | Successful read/update/delete or healthy service |
| 201 | Created |
| 400 | Invalid ID or payload |
| 403 | Browser origin denied |
| 404 | Unknown route or missing record |
| 500 | Unexpected server failure |
| 503 | Database not ready |

## Security boundary
The API is currently unauthenticated. CORS only controls browser origins; it is not access control. Do not expose write operations to untrusted users without authentication, authorization, rate limiting, and operational monitoring.

For exact response shapes and examples, use the [complete API reference](./api/README.md).
