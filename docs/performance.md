# ⚡ Performance and scalability guide

## Current application profile

The current system is a small React catalogue backed by an Express API and MongoDB. The catalogue endpoint returns the full collection. There is no pagination, server-side search, caching layer, image delivery pipeline, or performance monitoring service in the current implementation.

Do not describe the current application as horizontally scalable or performance-tested at production load without measurements.

## Performance objectives

Performance work should preserve correctness and accessibility. Establish a baseline before optimising.

| Area | What to measure | Why it matters |
|---|---|---|
| Frontend build | Bundle size and build duration | Detect dependency and bundle growth |
| Initial page | LCP, FCP, CLS | Understand first-load experience |
| Interaction | INP and task duration | Detect slow user actions |
| API | p50, p95, p99 latency | Expose tail latency |
| Database | Query duration and documents examined | Find inefficient access patterns |
| Reliability | Error rate and timeout rate | Distinguish speed from failed requests |

## Frontend guidance

1. Keep route-level components focused and avoid unnecessary global state.
2. Use production builds for measurements. Vite development mode is not a production benchmark.
3. Avoid adding large libraries for small interface needs.
4. Lazy-load genuinely heavy routes or optional UI only when measurements justify it.
5. Reserve layout space for asynchronous content to reduce layout shifts.
6. Keep images appropriately sized and compressed. Prefer modern formats when a real image pipeline is added.
7. Avoid rendering duplicate catalogue layouts when only one view is visible.
8. Use stable keys for list items and avoid expensive work inside repeated render paths.
9. Preserve keyboard and screen-reader behavior when optimising dialogs or dynamic content.

## API guidance

- Set explicit request timeouts in the shared HTTP client.
- Keep JSON payload size limits conservative.
- Validate and reject malformed requests before database operations.
- Return only fields needed by the client when the data model grows.
- Add pagination before the collection becomes large.
- Avoid expensive synchronous work in request handlers.
- Keep health checks lightweight and separate liveness from readiness if deployment orchestration requires both.

## Database guidance

The current model indexes title and author. Validate index usefulness with actual query patterns and explain plans. An index adds write and storage cost, so do not add indexes speculatively.

Before introducing pagination:
- Choose a deterministic sort order.
- Define stable cursor fields.
- Validate cursor input.
- Set a maximum page size.
- Return pagination metadata.
- Test concurrent insert/update behavior.
- Keep the API contract and UI state synchronized.

For large datasets, consider cursor-based pagination rather than unbounded `find()` results or large offset scans.

## Measurement workflow

1. Record the commit, Node version, browser, hardware, database location, and dataset size.
2. Run the production build.
3. Measure cold and warm page loads separately.
4. Run representative read and write requests.
5. Record percentile latency, not only average latency.
6. Inspect database query plans.
7. Change one performance variable at a time.
8. Repeat measurements with the same conditions.
9. Publish the method and results with the change.

## Load testing safeguards

Only load-test systems and databases you own or are explicitly authorised to test. Start with a small request rate, define a stop condition, and avoid sending destructive traffic to production. Use synthetic records and a disposable database.

## Future work

- Add pagination and server-side filtering.
- Add route and component-level performance budgets.
- Add repeatable API load tests.
- Add database query profiling in a non-production environment.
- Add real-user monitoring only after a privacy review.
- Add image optimisation if cover images become a supported feature.

## Acceptance criteria

Performance claims must include a repeatable measurement method, environment, dataset size, and before/after results. A smaller bundle or lower local average latency alone is not proof of a better user experience.
