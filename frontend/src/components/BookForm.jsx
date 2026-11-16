/**
 * Shared, accessible form for creating and editing the current Book model.
 * Validation is repeated by the API; browser constraints are only a usability
 * layer and must never be treated as a security boundary.
 */
const BookForm = ({
  values,
  onChange,
  onSubmit,
  submitting = false,
  submitLabel = 'Save book',
}) => (

    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor="book-title" className="mb-2 block font-semibold text-slate-700">
          Book title <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <input
          id="book-title"
          name="title"
          type="text"
          required
          maxLength={180}
          autoComplete="off"
          value={values.title}
          onChange={onChange}
          placeholder="Enter the book title"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <p className="mt-1 text-right text-xs text-slate-500">
          {values.title.length}/180 characters
        </p>
      </div>

      <div>
        <label htmlFor="book-author" className="mb-2 block font-semibold text-slate-700">
          Author <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <input
          id="book-author"
          name="author"
          type="text"
          required
          maxLength={120}
          autoComplete="off"
          value={values.author}
          onChange={onChange}
          placeholder="Enter the author name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <p className="mt-1 text-right text-xs text-slate-500">
          {values.author.length}/120 characters
        </p>
      </div>

      <div>
        <label htmlFor="book-year" className="mb-2 block font-semibold text-slate-700">
          Publication year <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <input
          id="book-year"
          name="publishYear"
          type="number"
          required
          min="0"
          max="2100"
          step="1"
          inputMode="numeric"
          value={values.publishYear}
          onChange={onChange}
          placeholder="e.g. 2024"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <p className="mt-1 text-xs text-slate-500">
          Enter a whole year between 0 and 2100.
        </p>
      </div>

      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Saving…' : submitLabel}
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Fields marked with an asterisk are required. The server validates all
        submitted values again before storing them.
      </p>
    </form>
  );

export default BookForm;
