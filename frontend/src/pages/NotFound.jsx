import { Link } from 'react-router-dom';

/**
 * Reusable not-found screen for unknown application routes.
 * API record-not-found errors are handled by the page that requested them;
 * this component handles only unmatched browser paths.
 */
const NotFound = () => (
  <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
      404 · Page not found
    </p>
    <h1 className="mt-3 text-4xl font-bold text-slate-950">
      This page is not in the catalogue.
    </h1>
    <p className="mt-3 max-w-lg text-slate-600">
      The address may be incorrect, or the page may have moved. Return to the
      catalogue to continue browsing.
    </p>
    <Link
      to="/"
      className="mt-6 rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white hover:bg-sky-800"
    >
      Back to catalogue
    </Link>
  </main>
)
;
export default NotFound;
