# Project overview

## Purpose
Anime Book Store is a React and Express web application backed by MongoDB. It demonstrates book catalogue CRUD workflows. The current schema stores generic book metadata: title, author, and publication year. Despite the repository name, no shopping cart, checkout, payment, stock system, customer account, or anime metadata integration is present in the inspected source.

## Objectives
- Browse persisted book records.
- Switch between table and card views.
- Create, inspect, edit, and delete a record.
- Demonstrate separation of browser UI, JSON API, and database persistence.
- Provide maintainable documentation for contributors.

## Scope today
The app includes a Vite/React client, React Router routes, Axios requests, Notistack notifications, an Express server, a Mongoose Book model, and MongoDB persistence. Existing demo images live in `DEMO/`.

## Actors and use cases
| Actor | Use case | Outcome |
|---|---|---|
| Visitor | Open catalogue | View the list of books |
| Catalogue editor | Create a record | Store a new book |
| Catalogue editor | Inspect a record | View fields and timestamps |
| Catalogue editor | Edit a record | Update stored details |
| Catalogue editor | Delete a record | Remove a record |

These describe interaction patterns only. There is no authenticated identity or role enforcement in the current implementation.

## Non-goals in current code
Payments, orders, carts, customer accounts, authorization, recommendation engines, reviews, and external anime catalogue integrations are not implemented.

## Constraints
- MongoDB must be reachable before the backend listens.
- The API defaults to port 5555 in `backend/config.js`.
- Frontend page modules currently hard-code `http://localhost:5555`.
- `.env.example` is not yet connected to runtime configuration.
- The repository is a development-oriented CRUD project, not production-hardened.
