# 🎯 Project overview

## Purpose
Anime Book Store is a React and Express application backed by MongoDB. It demonstrates book catalogue CRUD workflows. The current schema stores generic book metadata: title, author and publication year. Despite the repository name, cart, checkout, payments, inventory, customer accounts and anime metadata integrations are not implemented.

## Objectives
- Browse persisted book records.
- Switch between table and card layouts.
- Create, inspect, edit and delete records.
- Demonstrate separation of browser UI, JSON API and database persistence.
- Provide maintainable project documentation.

## Current scope
The source includes a Vite/React client, React Router, Axios, Notistack, an Express server, a Mongoose Book model and MongoDB persistence. Four existing demonstration images are in `DEMO/`.

## Use cases
| Actor | Action | Outcome |
|---|---|---|
| Visitor | Open catalogue | View records |
| Catalogue editor | Create | Store a book |
| Catalogue editor | Inspect | View fields and timestamps |
| Catalogue editor | Edit | Update stored details |
| Catalogue editor | Delete | Remove a record |

These are workflow descriptions, not enforced authorization roles. The code does not implement an authenticated user identity.

## Constraints
MongoDB must be reachable before the backend listens. The API defaults to port 5555. Frontend pages currently hard-code `http://localhost:5555`. The root `.env.example` is not yet connected to runtime configuration. This is a development-oriented CRUD project, not production-hardened.
