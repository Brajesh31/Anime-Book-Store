# Troubleshooting

## Backend cannot connect

Check MongoDB availability, the local `MONGODB_URI`, DNS/network access, credentials, and firewall rules. Do not paste connection strings into issues.

## Frontend shows an empty list

Confirm the backend is listening on port 5555, request `GET /books` directly, inspect the browser network tab, and verify the response contains the expected `data` property.

## Create or edit fails

Check JSON field names and types, required fields, MongoDB ID validity, server logs, and validation status codes.

## CORS error

Restrict and configure the backend origin for the actual frontend URL. Avoid permissive CORS as a production fix.
