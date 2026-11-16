/**
 * Consistent feedback surfaces for loading failures and empty collections.
 * Each state is textual as well as visual so assistive technology users
 * receive the same information as sighted users.
 */
export const ErrorState = ({ message, onRetry }) => (
  <section
    role="alert"
    className="mx-auto my-8 max-w-2xl rounded-xl border border-rose-200 bg-rose-50 p-6 text-rose-900"
  >
    <h2 className="text-lg font-semibold">We could not load your books</h2>
    <p className="mt-2 text-sm">{message}</p>
    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg bg-rose-700 px-4 py-2 font-semibold text-white hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        Try again
      </button>
    )}
  </section>
);

export const EmptyState = ({ onCreate }) => (
  <section className="mx-auto my-10 max-w-2xl rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
    <div className="text-4xl" aria-hidden="true">📚</div>
    <h2 className="mt-4 text-xl font-semibold text-slate-900">Your catalogue is empty</h2>
    <p className="mt-2 text-slate-600">
      Add the first book to start building your collection. Your records will
      appear here after the API confirms they have been saved.
    </p>
    <button
      type="button"
      onClick={onCreate}
      className="mt-6 rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      Add your first book
    </button>
  </section>
);
