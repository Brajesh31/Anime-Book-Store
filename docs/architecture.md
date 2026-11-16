# 🏗️ Architecture and system design

## Architecture
The current application is composed of a React browser client, an Express JSON API, and MongoDB persistence accessed through Mongoose. No separate microservice, queue, cache, identity provider, or payment service is present in the inspected source.

```mermaid
flowchart LR
 U[User] --> R[React Router]
 R --> P[React pages and components]
 P -->|Axios HTTP| E[Express app]
 E --> M[JSON parser and CORS]
 M --> B[Books router]
 B --> O[Mongoose Book model]
 O --> D[(MongoDB)]
 D --> O --> B -->|JSON response| P
```

## Frontend responsibilities
`main.jsx` mounts React with BrowserRouter and SnackbarProvider. `App.jsx` maps browser paths to page components. `pages/` contains catalogue, create, detail, edit and delete screens. `components/` contains reusable UI. Axios requests currently use a hard-coded localhost API origin.

## Backend responsibilities
`index.js` initializes Express, JSON parsing and CORS, mounts `/books`, connects MongoDB, then starts listening. `routes/booksRoute.js` implements CRUD handlers. `models/bookModel.js` defines required title, author, publishYear and timestamps. `config.js` contains hard-coded settings and a credential-bearing MongoDB URI. Treat that credential as compromised.

## Request sequence
```mermaid
sequenceDiagram
 actor User
 participant UI as React page
 participant HTTP as Axios
 participant API as Express
 participant Route as Books router
 participant ODM as Mongoose
 participant DB as MongoDB
 User->>UI: Open or submit screen
 UI->>HTTP: CRUD request
 HTTP->>API: HTTP request
 API->>Route: Dispatch
 Route->>ODM: CRUD operation
 ODM->>DB: Database command
 DB-->>ODM: Result
 ODM-->>Route: Document/result
 Route-->>HTTP: JSON response
 HTTP-->>UI: Resolve/reject
 UI-->>User: Render or feedback
```

## Module relationships
```mermaid
flowchart TD
 Main[main.jsx] --> App[App.jsx]
 App --> Home[Home.jsx]
 App --> Create[CreateBooks.jsx]
 App --> Show[ShowBook.jsx]
 App --> Edit[EditBook.jsx]
 App --> Delete[DeleteBook.jsx]
 Home --> Table[BooksTable.jsx]
 Home --> Cards[BooksCard.jsx]
 Home --> Modal[BookModal.jsx]
 Server[backend/index.js] --> Routes[booksRoute.js]
 Routes --> Model[bookModel.js]
 Model --> DB[(MongoDB)]
```

## Boundaries
| Boundary | Data | Concern |
|---|---|---|
| Browser to API | Untrusted JSON and IDs | Validate on server |
| Router to model | Fields and identifiers | Allow-list and validate |
| Model to database | Mongoose operations | Connectivity/schema errors |
| API to browser | JSON and errors | Avoid leaking internals |

## Decisions and trade-offs
| Concern | Current choice | Trade-off |
|---|---|---|
| UI | React SPA | Simple; requires API availability |
| Build | Vite | Fast local feedback |
| Navigation | BrowserRouter | Static host needs index.html fallback |
| HTTP | Axios | Promise-based requests |
| API | Express | Direct route handlers |
| Persistence | MongoDB/Mongoose | Document store with schema layer |

The next engineering priorities are secret remediation, environment config, input validation, consistent errors, automated tests, and health checks. Distributed infrastructure is not justified by the current scope.
