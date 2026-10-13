# Security Policy

Do not commit MongoDB connection strings, credentials, dumps, `.env` files, production logs, or personal data. Restrict CORS in deployed environments, validate all request bodies and ObjectIds, limit payload sizes, and add authentication before exposing mutation routes publicly.

Review error responses so they do not disclose connection details. Use HTTPS, least-privilege database users, backups, dependency updates, and separate development data.

Report vulnerabilities privately to Brajesh Kumar (`@brajesh31`) with the affected route/file, impact, reproduction steps, and redacted evidence.
