# FAQ

## Is authentication included?

No. The current CRUD API is unauthenticated and intended for learning/development.

## What does a book contain?

The current model stores title, author, publication year, and timestamps.

## Can I use the remote MongoDB configuration?

Only with explicit authorization and local secret storage. Prefer a separate development database and never commit credentials.

## Why are frontend and backend installed separately?

They are independent npm packages with separate runtime processes and dependency trees.
