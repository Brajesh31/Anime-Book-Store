import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { ErrorState } from '../components/FeedbackState';
import api, { getApiErrorMessage } from '../lib/api';

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');

  const loadBook = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data.data);
    } catch (requestError) {
      setError(getApiErrorMessage(requestError, 'The selected book could not be loaded.'));
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadBook();
  }, [loadBook]);

  const handleDeleteBook = async () => {
    if (deleting || !book) return;

    setDeleting(true);
    try {
      await api.delete(`/books/${id}`);
      enqueueSnackbar('Book deleted successfully.', { variant: 'success' });
      navigate('/');
    } catch (requestError) {
      enqueueSnackbar(getApiErrorMessage(requestError, 'The book could not be deleted.'), {
        variant: 'error',
      });
      setDeleting(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl p-4 sm:p-6 lg:p-8">
      <BackButton destination={book ? `/books/details/${id}` : '/'} />
      <header className="my-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
          Destructive action
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Delete book</h1>
        <p className="mt-2 text-slate-600">
          Review the selected record before permanently removing it from the catalogue.
        </p>
      </header>
      {loading && <Spinner label="Loading selected book" />}
      {!loading && error && <ErrorState message={error} onRetry={loadBook} />}
      {!loading && !error && book && (
        <section className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-rose-50 p-5">
            <h2 className="text-lg font-semibold text-rose-900">
              You are about to delete “{book.title}”
            </h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-slate-500">Author</dt>
                <dd className="mt-1 text-slate-900">{book.author}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Publication year</dt>
                <dd className="mt-1 text-slate-900">{book.publishYear}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-slate-500">Record ID</dt>
                <dd className="mt-1 break-all font-mono text-xs text-slate-700">{book._id}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            This action cannot be undone from the application. The current API
            permanently deletes the selected document and does not provide a recycle bin.
          </p>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              disabled={deleting}
              onClick={() => navigate(`/books/details/${id}`)}
              className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={deleting}
              onClick={handleDeleteBook}
              className="rounded-lg bg-rose-700 px-5 py-3 font-semibold text-white hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {deleting ? 'Deleting…' : 'Yes, permanently delete'}
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default DeleteBook;
