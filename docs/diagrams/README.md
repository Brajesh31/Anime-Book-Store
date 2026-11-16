# 🧩 Editable architecture diagrams

The diagrams in this directory are Mermaid source files. They are intentionally stored as text so contributors can review and diff changes in pull requests.

## Diagram catalogue

| File | Purpose | Update when |
|---|---|---|
| [architecture.mmd](./architecture.mmd) | Browser, API, validation, model, and database boundaries | A service or module boundary changes |
| [crud-lifecycle.mmd](./crud-lifecycle.mmd) | Create/read/update/delete decision flow | Endpoint behavior or validation changes |

## Editing rules

1. Keep labels aligned with actual source names and endpoint paths.
2. Do not draw proposed features as though they are implemented.
3. Use Mermaid syntax supported by GitHub's Markdown renderer.
4. Update the relevant architecture or API guide when behavior changes.
5. Keep diagrams focused. A diagram should explain a workflow, not duplicate every source-code line.

## Validation

GitHub renders Mermaid in supported Markdown contexts. For local validation, use a Mermaid CLI or editor only if it is already part of the contributor's toolchain. Do not add a runtime dependency to the application solely to render documentation diagrams.
