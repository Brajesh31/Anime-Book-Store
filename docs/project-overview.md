# 🎯 Project overview and product scope

## Product summary
Anime Book Store is a full-stack JavaScript application for maintaining a small book catalogue. The current code demonstrates CRUD operations rather than a complete e-commerce store. A visitor can browse records in table or card layout, create a record, inspect it, edit it, and permanently delete it.

The current Book record stores title, author, publication year, and database timestamps. The repository name is retained as project identity; it is not evidence that anime metadata, shopping, or payment workflows are implemented.

## Problem statement
A catalogue maintained manually in separate notes or spreadsheets can become inconsistent. This application demonstrates a central source of truth and a browser interface for managing records. The API validates incoming values before they reach MongoDB.

## Product objectives
- Provide one browser interface for catalogue CRUD.
- Persist records in MongoDB.
- Separate UI, API, validation, and persistence responsibilities.
- Provide loading, empty, success, and error states.
- Keep the repository understandable through detailed documentation and diagrams.
- Establish repeatable lint, build, and unit-test checks.

## User groups and access model
The screens describe visitor/editor workflows, but the code does not authenticate users or enforce roles. Any client able to reach the API can call its mutation routes, subject to network and CORS behavior. CORS is not authorization. Production use requires an identity and authorization design.

| Conceptual actor | Task | Current enforcement |
|---|---|---|
| Visitor | Browse catalogue | No sign-in |
| Catalogue editor | Create a book | No role check |
| Catalogue editor | Edit a book | No ownership check |
| Catalogue editor | Delete a book | No role check |

## Current scope

### Included
- React 18 and Vite frontend.
- Browser routes for catalogue, create, details, edit, delete, and not-found.
- Shared Axios API client.
- Shared create/edit form.
- Table and card catalogue layouts.
- Express JSON API.
- MongoDB/Mongoose Book persistence.
- Input validation and ObjectId checks.
- Health endpoint and CORS allow-list.
- Documentation, GitHub templates, CI, and validation tests.

### Not included
- User accounts, login, sessions, roles, or access control.
- Shopping cart, checkout, order processing, or payment.
- Inventory, stock reservations, shipping, or returns.
- Reviews, ratings, comments, or recommendations.
- External anime/book metadata or image search.
- Search, filters, sorting controls, or pagination.
- Admin analytics or reporting dashboard.

## Success criteria
A developer should be able to clone the repository, configure a private local database URI, start both applications, complete each CRUD journey, and run the documented checks. A production release requires the security and operational gates in [deployment.md](./deployment.md).

## Constraints and assumptions
- MongoDB must be reachable before the API starts listening.
- Backend defaults to port 5555.
- Vite defaults to port 5173, but the actual origin must match CORS configuration.
- The browser API URL is public build-time configuration.
- The project uses two independent npm packages and lockfiles.
- Existing demo images are maintained under `DEMO/`.

## Product evolution
A richer catalogue could introduce ISBN, cover URL, genre, series, and language. Each field requires definitions and validation. Commerce features require separate domain and security design; adding a price field alone does not create a safe store.
