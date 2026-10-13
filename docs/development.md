# Development

Run the backend with `npm run dev` and the frontend with `npm run dev`. Keep API route behavior and response shapes documented in [`api.md`](./api.md).

For new fields, update the Mongoose model, create a migration/backfill plan if data already exists, update create/edit forms, and test malformed input. Use explicit loading, empty, and error states in the UI.

Do not use production data locally and do not commit generated dependencies or database artifacts.
