# Deployment

Deploy the frontend as a static Vite build and the backend to a Node.js HTTPS service. Set `MONGODB_URI` and `PORT` through the platform secret manager, configure a least-privilege database user, and restrict CORS to the deployed frontend origin.

Before release, run frontend lint/build, backend route tests, schema validation, backup checks, health checks, and dependency/security review. Add authentication and authorization before exposing create/update/delete endpoints to untrusted users.
