import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';
import BookForm from '../components/BookForm';
import api, { getApiErrorMessage } from '../lib/api';

const initialValues = { title: '', author: '', publishYear: '' };

const CreateBooks = () => {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      await api.post('/books', {
        ...values,
        publishYear: Number(values.publishYear),
      });
      enqueueSnackbar('Book created successfully.', { variant: 'success' });
      navigate('/');
    } catch (error) {
      enqueueSnackbar(getApiErrorMessage(error, 'The book could not be created.'), {
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl p-4 sm:p-6 lg:p-8">
      <BackButton />
      <header className="my-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Catalogue management
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Add a new book</h1>
        <p className="mt-2 text-slate-600">
          Enter the book details below. All three fields are required.
        </p>
      </header>
      <BookForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitting={submitting}
        submitLabel="Create book"
      />
    </main>
  );
};

export default CreateBooks;
