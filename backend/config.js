/**
 * Runtime configuration for the Anime Book Store API.
 *
 * Local development values are read from the repository-root .env file when
 * present. Host-provided environment variables always take precedence. This
 * intentionally supports simple KEY=VALUE lines only; do not use it for shell
 * expansion or multiline secret values.
 */
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const localEnvPath = fileURLToPath(new URL('../.env', import.meta.url));

function loadLocalEnvironment() {
  if (!existsSync(localEnvPath)) return;

  const source = readFileSync(localEnvPath, 'utf8');
  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separator = line.indexOf('=');
    if (separator < 1) continue;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadLocalEnvironment();

const parsedPort = Number(process.env.PORT || 5555);
if (!Number.isInteger(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

export const PORT = parsedPort;
export const mongoDBURL = process.env.MONGODB_URI;
export const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

if (!mongoDBURL) {
  throw new Error(
    'MONGODB_URI is required. Add it to the root .env file or hosting environment.',
  );
}
