# 🧰 Operations and incident runbook

## Operating model

The application has two deployable processes:
- A Vite-built static frontend served by a static host or web server.
- An Express API process connected to MongoDB.

The repository does not include a production hosting provider, container orchestration definition, managed monitoring service, or automated backup service. Operators must supply and verify those pieces.

## Routine checks

### Before a release

- [ ] Confirm the intended commit and reviewed changes.
- [ ] Install dependencies with `npm ci` in both application directories.
- [ ] Run backend unit tests.
- [ ] Run frontend lint and production build.
- [ ] Review npm audit output and dependency changes.
- [ ] Confirm environment variables are configured in the hosting environment.
- [ ] Confirm database backup and restore readiness.
- [ ] Confirm the frontend API URL and backend CORS allowlist match.
- [ ] Confirm the old exposed database credential has been revoked.

### After a release

- [ ] Check the API root endpoint.
- [ ] Check `/health` and confirm database readiness.
- [ ] Load the frontend from its public URL.
- [ ] Exercise a read-only catalogue request.
- [ ] Exercise create/update/delete only in an approved test environment.
- [ ] Inspect application logs for startup errors and repeated failures.
- [ ] Record the deployed commit and release time.

## Health endpoints

| Endpoint | Meaning | Important limitation |
|---|---|---|
| `GET /` | API process responds | Does not prove database readiness |
| `GET /health` | Reports database readiness | Does not prove every CRUD workflow works |

Use the readiness endpoint for deployment checks. Do not use destructive CRUD calls as a health probe.

## Incident: API unavailable

1. Check whether the process is running.
2. Inspect the most recent startup and runtime logs.
3. Check the configured port and host firewall.
4. Check MongoDB reachability and authentication.
5. Verify environment variable names and deployment configuration.
6. Confirm the process is using the intended commit.
7. Restart only after capturing enough diagnostic context.
8. Verify readiness after recovery.

Never paste raw environment dumps or database URIs into public issues.

## Incident: frontend cannot reach API

1. Inspect the browser network panel for the failing request.
2. Confirm `VITE_API_BASE_URL` was set at build time.
3. Confirm the API is reachable from the browser's network.
4. Confirm the exact frontend origin appears in `CORS_ORIGIN`.
5. Restart/redeploy the backend after CORS changes.
6. Rebuild the frontend after Vite environment changes.
7. Check mixed-content restrictions when HTTPS frontend calls an HTTP API.

## Incident: database unavailable

1. Check provider status and network restrictions.
2. Confirm credentials have not expired or been revoked.
3. Check connection limits and database availability.
4. Avoid repeated aggressive reconnect loops.
5. Keep the API in a not-ready state while the database is unavailable.
6. Restore from backup only under an approved recovery decision.

## Incident: suspected credential exposure

1. Revoke or rotate the credential immediately at the provider.
2. Create a replacement least-privilege credential.
3. Update the runtime secret store.
4. Restart/redeploy affected processes.
5. Review provider access logs and repository history.
6. Check for unexpected database access or data changes.
7. Record the incident and remediation.

Do not wait for a code change or secret scanner result before rotating a known exposed credential.

## Backup and restore

Backups are an operator responsibility and are not automatically created by this repository. Define backup frequency, retention, encryption, access control, recovery point objective, and recovery time objective before production use.

A backup is not proven until a restore has been tested against an isolated environment. Record the restore date, backup source, database version, duration, and validation results.

## Observability recommendations

At minimum, production operations should capture:
- Process start/stop and unhandled failure events.
- Request method, route template, status code, duration, and request ID.
- Database connection state.
- Error counts and latency percentiles.
- Deployment commit and environment.

Do not log passwords, authorization headers, database URIs, complete request bodies, or unnecessary user-entered content.

## Escalation

Escalate immediately for credential exposure, unexpected data deletion/modification, repeated database authentication failures, public write abuse, or sustained service unavailability. Include timestamps, affected environment, commit SHA, request IDs, and redacted evidence.
