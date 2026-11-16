/**
 * Vite configuration for the React single-page application.
 *
 * The default development and preview servers are intentionally retained.
 * Production hosting must separately provide an SPA fallback for BrowserRouter
 * paths; Vite's local dev fallback does not configure the deployment host.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Vite may select the next available port if 5173 is already occupied.
    // Keep CORS_ORIGIN aligned with the actual origin shown by the dev server.
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
