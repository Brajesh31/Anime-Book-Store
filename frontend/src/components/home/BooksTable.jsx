import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

/**
 * Semantic table layout for scanning the catalogue.
 * Author and publication year remain visible on narrow screens through
 * wrapping rather than being silently hidden from mobile users.
 */
const BooksTable = ({ books = [] }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
    <table className="w-full min-w-[680px] border-collapse text-left">
      <caption className="sr-only">Book catalogue with record actions</caption>
      <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
        <tr>
          <th scope="col" className="px-5 py-4">#</th>
          <th scope="col" className="px-5 py-4">Title</th>
          <th scope="col" className="px-5 py-4">Author</th>
          <th scope="col" className="px-5 py-4">Published</th>
          <th scope="col" className="px-5 py-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {books.map((book, index) => (
          <tr key={book._id} className="transition hover:bg-slate-50">
            <td className="px-5 py-4 text-sm text-slate-400">{index + 1}</td>
            <th scope="row" className="max-w-xs px-5 py-4 font-semibold text-slate-900">
              <span className="block break-words">{book.title}</span>
              <span className="mt-1 block max-w-[220px] truncate font-mono text-xs font-normal text-slate-400" title={book._id}>
                {book._id}
              </span>
            </th>
            <td className="px-5 py-4 text-sm text-slate-600">{book.author}</td>
            <td className="px-5 py-4 text-sm text-slate-600">{book.publishYear}</td>
            <td className="px-5 py-4">
              <div className="flex justify-end gap-2">
                <Link
                  to={`/books/details/${book._id}`}
                  aria-label={`View ${book.title}`}
                  className="rounded-md p-2 text-emerald-700 hover:bg-emerald-50"
                >
                  <BsInfoCircle aria-hidden="true" className="text-lg" />
                </Link>
                <Link
                  to={`/books/edit/${book._id}`}
                  aria-label={`Edit ${book.title}`}
                  className="rounded-md p-2 text-amber-700 hover:bg-amber-50"
                >
                  <AiOutlineEdit aria-hidden="true" className="text-lg" />
                </Link>
                <Link
                  to={`/books/delete/${book._id}`}
                  aria-label={`Delete ${book.title}`}
                  className="rounded-md p-2 text-rose-700 hover:bg-rose-50"
                >
                  <MdOutlineDelete aria-hidden="true" className="text-lg" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default BooksTable;
