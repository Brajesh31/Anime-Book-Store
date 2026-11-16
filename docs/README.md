# 📚 Documentation index

This directory is the engineering handbook for Anime Book Store. Each guide describes the current implementation, records known gaps, and separates shipped behavior from proposed work.

## Start here

| If you need to… | Read |
|---|---|
| Understand what the project does and does not do | [Project overview](./project-overview.md) |
| Install and run the application for the first time | [Installation](./installation.md) |
| Work on the code day to day | [Development guide](./development.md) |
| Understand module boundaries and request flow | [Architecture](./architecture.md) |
| Find the responsibility of a source file | [Project structure](./project-structure.md) |
| Understand the actual user journeys | [Feature specifications](./features.md) |

## Engineering references

| Guide | Coverage |
|---|---|
| [API quick reference](./api.md) | Endpoint index and status summary |
| [Full API contract](./api/README.md) | Payloads, response examples, validation and cURL |
| [Data model](./data-model.md) | Book schema, field constraints and lifecycle |
| [Database operations](./database.md) | Connection, access, backups, indexes and stewardship |
| [Configuration and secrets](./configuration.md) | Environment variables, precedence and credential handling |
| [Testing strategy](./testing.md) | Existing automated checks and integration test plan |
| [Deployment and operations](./deployment.md) | Hosting topology, release, monitoring and rollback |
| [Troubleshooting](./troubleshooting.md) | Failure diagnosis and safe diagnostic bundle |
| [FAQ](./faq.md) | Common setup and scope questions |

## Documentation standards

1. Describe observed source behavior as current, not planned behavior.
2. Mark future work explicitly as proposed or not implemented.
3. Keep commands runnable from the stated working directory.
4. Use synthetic data in examples.
5. Never commit real database URIs, tokens, logs containing secrets, or private records.
6. Update API and data-model docs in the same pull request as their implementation changes.
7. Keep Mermaid diagrams as source so reviewers can inspect changes.
8. Do not claim tests, security controls, deployments, or integrations that have not been verified.

## Change impact map

| Change | Documents to review |
|---|---|
| Add/modify endpoint | API, architecture, features, testing, troubleshooting |
| Add/modify Book field | Data model, database, API, features, testing |
| Add environment variable | Configuration, installation, development, deployment |
| Change browser route | Features, architecture, project structure, troubleshooting |
| Change CI/build | Testing, development, contributing |
| Change security behavior | Security policy, configuration, database, deployment |
