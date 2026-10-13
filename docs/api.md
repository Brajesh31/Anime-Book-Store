# API

The Express server mounts book routes at `/books`.

| Method | Path | Body | Purpose |
| --- | --- | --- | --- |
| GET | `/books` | - | List books |
| GET | `/books/:id` | - | Get a book |
| POST | `/books` | `title`, `author`, `publishYear` | Create |
| PUT | `/books/:id` | Editable book fields | Update |
| DELETE | `/books/:id` | - | Delete |

Responses should use JSON with clear success/error status codes. Validate MongoDB ObjectIds and field types server-side. The API is currently unauthenticated and must be treated as a development service.
