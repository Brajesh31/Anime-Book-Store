# Database

Mongoose connects to MongoDB using the backend connection string. The `Book` model currently requires `title`, `author`, and numeric `publishYear`, with automatic `createdAt` and `updatedAt` timestamps.

Use separate databases for development, test, and production. Document indexes, retention, backups, migrations, and access roles before expanding the schema. Never commit database dumps or connection strings.
