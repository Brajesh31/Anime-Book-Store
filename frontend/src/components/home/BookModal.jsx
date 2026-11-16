import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

/**
 * Lightweight read-only preview. The full details page remains available for
 * timestamps and record operations; this dialog is deliberately limited to
 * the fields present in the current Book schema.
 */
const BookModal = ({ book, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-preview-title"
        className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close book preview"
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <AiOutlineClose aria-hidden="true" className="text-xl" />
        </button>

        <p className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800">
          Published {book.publishYear}
        </p>
        <h2 id="book-preview-title" className="mt-4 pr-10 text-2xl font-bold text-slate-950">
          {book.title}
        </h2>
        <div className="mt-5 flex items-center gap-3 text-slate-700">
          <PiBookOpenTextLight aria-hidden="true" className="text-2xl text-sky-700" />
          <span>{book.title}</span>
        </div>
        <div className="mt-3 flex items-center gap-3 text-slate-700">
          <BiUserCircle aria-hidden="true" className="text-2xl text-sky-700" />
          <span>{book.author}</span>
        </div>
        <div className="mt-6 rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Database record ID
          </p>
          <p className="mt-2 break-all font-mono text-xs text-slate-700">{book._id}</p>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">
          This preview shows the book fields currently stored by the application.
          Open the full record to review timestamps or make changes.
        </p>
      </section>
    </div>
  );
};

export default BookModal;
