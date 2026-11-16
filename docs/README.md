# 📚 Documentation index

This directory describes the current Anime Book Store application and highlights gaps without presenting planned work as shipped.

| Guide | Contents |
|---|---|
| [Project overview](./project-overview.md) | Purpose, scope, actors and boundaries |
| [Architecture](./architecture.md) | Components and request path |
| [Project structure](./project-structure.md) | Directory and file responsibilities |
| [Features](./features.md) | Current CRUD screen behavior |
| [Data model](./data-model.md) | Book schema and persistence |
| [Configuration](./configuration.md) | Runtime settings and secret handling |
| [API reference](./api/README.md) | Endpoint behavior and payload examples |
| [Development](./development.md) | Local setup and developer workflow |
| [Testing](./testing.md) | Existing checks and test gaps |
| [Deployment](./deployment.md) | Production readiness |
| [Troubleshooting](./troubleshooting.md) | Common local issues |

## Documentation maintenance
Update the API guide when routes or response contracts change, the data-model guide when schema changes, and architecture/testing/security docs when their corresponding behavior changes. Keep diagrams as reviewable Mermaid source. Never include live credentials, private records, or fabricated test results.
