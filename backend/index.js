/**
 * Express application entry point.
 *
 * Startup is deliberately blocked until MongoDB connects. The API does not
 * expose database connection strings or raw exception messages to clients.
 */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, allowedOrigins, mongoDBURL } from './config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));
app.use(
  cors({
    origin(origin, callback) {
      // Requests without Origin are commonly CLI/health-check requests.
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Origin is not allowed by CORS policy.'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 204,
  }),
);

app.get('/', (_request, response) => {
  return response.status(200).json({
    success: true,
    name: 'Anime Book Store API',
    message: 'Book catalogue API is running.',
    health: '/health',
    books: '/books',
  });
});

app.get('/health', (_request, response) => {
  const databaseReady = mongoose.connection.readyState === 1;
  return response.status(databaseReady ? 200 : 503).json({
    success: databaseReady,
    service: 'anime-book-store-api',
    database: databaseReady ? 'connected' : 'unavailable',
    timestamp: new Date().toISOString(),
  });
});

app.use('/books', booksRoute);

app.use((_request, response) => {
  return response.status(404).json({
    success: false,
    message: 'The requested API route does not exist.',
  });
});

app.use((error, _request, response, _next) => {
  console.error('[api] Unhandled request error:', error);
  const status = error.message === 'Origin is not allowed by CORS policy.' ? 403 : 500;
  return response.status(status).json({
    success: false,
    message: status === 403 ? 'This origin is not permitted.' : 'An unexpected server error occurred.',
  });
});

let server;

async function startServer() {
  if (!mongoDBURL) {
    throw new Error('MONGODB_URI is missing. Configure it before starting the API.');
  }

  await mongoose.connect(mongoDBURL, {
    serverSelectionTimeoutMS: 10000,
  });

  console.info('[startup] MongoDB connection established.');
  server = app.listen(PORT, () => {
    console.info(`[startup] Anime Book Store API listening on port ${PORT}.`);
  });
}

async function shutdown(signal) {
  console.info(`[shutdown] Received ${signal}; closing services.`);
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
  await mongoose.disconnect();
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

startServer().catch((error) => {
  console.error('[startup] API could not start:', error.message);
  process.exitCode = 1;
});

export { app };
