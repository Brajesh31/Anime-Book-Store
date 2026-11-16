import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';
import BookForm from '../components/BookForm';
import Spinner from '../components/Spinner';
import { ErrorState } from '../components/FeedbackState';
import api, { getApiErrorMessage } from '../lib/api';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [values, setValues] = useState({ title: '', author: '', publishYear: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const loadBook = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get(`/books/${id}`);
      const book = response.data.data;
      setValues({
        title: book.title || '',
        author: book.author || '',
        publishYear: String(book.publishYear ?? ''),
      });
    } catch (requestError) {
      setError(getApiErrorMessage(requestError, 'The requested book could not be loaded.'));
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadBook();
  }, [loadBook]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      await api.put(`/books/${id}`, {
        ...values,
        publishYear: Number(values.publishYear),
      });
      enqueueSnackbar('Book updated successfully.', { variant: 'success' });
      navigate(`/books/details/${id}`);
    } catch (requestError) {
      enqueueSnackbar(getApiErrorMessage(requestError, 'The book could not be updated.'), {
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl p-4 sm:p-6 lg:p-8">
      <BackButton destination={`/books/details/${id}`} />
      <header className="my-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Catalogue management
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Edit book</h1>
        <p className="mt-2 text-slate-600">
          Update the editable details. The database identifier and timestamps are managed by the API.
        </p>
      </header>
      {loading && <Spinner label="Loading book details" />}
      {!loading && error && <ErrorState message={error} onRetry={loadBook} />}
      {!loading && !error && (
        <BookForm
          values={values}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          submitLabel="Save changes"
        />
      )}
    </main>
  );
};

export default EditBook;
