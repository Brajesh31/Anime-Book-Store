import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookModal from './BookModal';

/**
 * Card representation of one Book document.
 * Keep actions explicit and keyboard accessible. The modal preview is
 * supplemental; details, edit, and delete remain dedicated routes.
 */
const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
          {book.publishYear}
        </span>
        <span className="max-w-[55%] truncate font-mono text-xs text-slate-400" title={book._id}>
          {book._id}
        </span>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <PiBookOpenTextLight aria-hidden="true" className="mt-1 shrink-0 text-2xl text-sky-700" />
        <h2 className="break-words text-lg font-bold text-slate-950">{book.title}</h2>
      </div>
      <div className="mt-3 flex items-center gap-3 text-slate-600">
        <BiUserCircle aria-hidden="true" className="shrink-0 text-xl text-slate-400" />
        <p className="break-words text-sm">{book.author}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          aria-label={`Preview ${book.title}`}
          className="rounded-lg p-2 text-sky-800 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <BiShow aria-hidden="true" className="text-xl" />
        </button>
        <Link
          to={`/books/details/${book._id}`}
          aria-label={`View details for ${book.title}`}
          className="rounded-lg p-2 text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <BsInfoCircle aria-hidden="true" className="text-xl" />
        </Link>
        <Link
          to={`/books/edit/${book._id}`}
          aria-label={`Edit ${book.title}`}
          className="rounded-lg p-2 text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <AiOutlineEdit aria-hidden="true" className="text-xl" />
        </Link>
        <Link
          to={`/books/delete/${book._id}`}
          aria-label={`Delete ${book.title}`}
          className="rounded-lg p-2 text-rose-700 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
          <MdOutlineDelete aria-hidden="true" className="text-xl" />
        </Link>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </article>
  );
};

export default BookSingleCard;
