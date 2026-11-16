import BookSingleCard from './BookSingleCard';

/**
 * Responsive catalogue grid. Stable MongoDB IDs are used as React keys so
 * inserting or deleting a record does not scramble component identity.
 */
const BooksCard = ({ books = [] }) => (
  <div
    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    aria-label="Books displayed as cards"
  >
    {books.map((book) => (
      <BookSingleCard key={book._id} book={book} />
    ))}
  </div>
);

export default BooksCard;
