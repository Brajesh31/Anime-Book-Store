# Architecture

The application is split into two packages:

```text
React/Vite frontend
  └── React Router pages and Axios calls
              │
              ▼
Express backend :5555
  └── /books routes and JSON middleware
              │
              ▼
MongoDB via Mongoose
  └── Book(title, author, publishYear, timestamps)
```

The frontend currently hard-codes the local API URL in some pages. Centralize it before deployment. The backend currently enables permissive CORS and has no authentication.
