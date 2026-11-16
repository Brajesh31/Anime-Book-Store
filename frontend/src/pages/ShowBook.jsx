import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { ErrorState } from '../components/FeedbackState';
import api, { getApiErrorMessage } from '../lib/api';

function formatDate(value) {
  if (!value) return 'Not available';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Not available' : date.toLocaleString();
}

const ShowBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadBook = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data.data);
    } catch (requestError) {
      setError(getApiErrorMessage(requestError, 'The requested book could not be loaded.'));
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadBook();
  }, [loadBook]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl p-4 sm:p-6 lg:p-8">
      <BackButton />
      <header className="my-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Catalogue record
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Book details</h1>
        <p className="mt-2 text-slate-600">
          Record information returned by the Anime Book Store API.
        </p>
      </header>
      {loading && <Spinner label="Loading book details" />}
      {!loading && error && <ErrorState message={error} onRetry={loadBook} />}
      {!loading && !error && book && (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-sky-300">
              Published {book.publishYear}
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{book.title}</h2>
            <p className="mt-2 text-slate-300">by {book.author}</p>
          </div>
          <dl className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Author</dt>
              <dd className="mt-1 text-slate-900">{book.author}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Publication year</dt>
              <dd className="mt-1 text-slate-900">{book.publishYear}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Created</dt>
              <dd className="mt-1 text-slate-900">{formatDate(book.createdAt)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Last updated</dt>
              <dd className="mt-1 text-slate-900">{formatDate(book.updatedAt)}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Database record ID</dt>
              <dd className="mt-1 break-all font-mono text-xs text-slate-700">{book._id}</dd>
            </div>
          </dl>
          <div className="flex flex-col gap-3 border-t border-slate-100 p-6 sm:flex-row sm:justify-end">
            <Link
              to={`/books/edit/${id}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400"
            >
              <AiOutlineEdit aria-hidden="true" /> Edit record
            </Link>
            <Link
              to={`/books/delete/${id}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-700 px-5 py-3 font-semibold text-white hover:bg-rose-800"
            >
              <MdOutlineDelete aria-hidden="true" /> Delete record
            </Link>
          </div>
        </article>
      )}
    </main>
  );
};

export default ShowBook;
