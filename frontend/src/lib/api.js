/**
 * Shared HTTP client for all browser-to-API communication.
 *
 * Vite variables are public build-time configuration, not a place for
 * credentials. The fallback keeps the existing local development workflow
 * usable while allowing deployed environments to set VITE_API_BASE_URL.
 */
import axios from 'axios';

const baseURL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5555')
  .replace(/\/+$/, '');

const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function getApiErrorMessage(error, fallback = 'The request could not be completed.') {
  if (error?.response?.data?.errors) {
    const firstError = Object.values(error.response.data.errors)[0];
    if (firstError) return String(firstError);
  }

  return (
    error?.response?.data?.message ||
    (error?.code === 'ECONNABORTED'
      ? 'The server took too long to respond. Please try again.'
      : error?.message === 'Network Error'
        ? 'The API could not be reached. Check that the backend is running.'
        : fallback)
  );
}

export default api;
