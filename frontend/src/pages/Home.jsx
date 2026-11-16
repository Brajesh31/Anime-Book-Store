import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import { EmptyState, ErrorState } from '../components/FeedbackState';
import api, { getApiErrorMessage } from '../lib/api';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showType, setShowType] = useState('table');

  const loadBooks = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const response = await api.get('/books');
      setBooks(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (requestError) {
      setError(getApiErrorMessage(requestError, 'Unable to retrieve the catalogue.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl p-4 sm:p-6 lg:p-8">
      <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Anime Book Store
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Your book catalogue
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Browse the collection, inspect individual records, and keep book
            details up to date.
          </p>
        </div>
        <Link
          to="/books/create"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          <MdOutlineAddBox aria-hidden="true" className="text-xl" />
          Add a book
        </Link>
      </header>

      <section className="mt-6" aria-label="Catalogue controls">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Collection</h2>
            <p className="mt-1 text-sm text-slate-500" aria-live="polite">
              {loading ? 'Loading catalogue…' : error ? 'Catalogue unavailable' : `${books.length} ${books.length === 1 ? 'book' : 'books'}`}
            </p>
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1" role="group" aria-label="Choose catalogue layout">
            <button
              type="button"
              aria-pressed={showType === 'table'}
              onClick={() => setShowType('table')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${showType === 'table' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Table view
            </button>
            <button
              type="button"
              aria-pressed={showType === 'card'}
              onClick={() => setShowType('card')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${showType === 'card' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Card view
            </button>
          </div>
        </div>

        {loading && <Spinner label="Loading books" />}
        {!loading && error && <ErrorState message={error} onRetry={loadBooks} />}
        {!loading && !error && books.length === 0 && (
          <EmptyState onCreate={() => { window.location.href = '/books/create'; }} />
        )}
        {!loading && !error && books.length > 0 && (
          <div className="mt-4">
            {showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
