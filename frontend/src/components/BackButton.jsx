import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

/**
 * Consistent return navigation for detail and form screens.
 * The destination can be overridden when the most useful return location is
 * the record detail page rather than the catalogue.
 */
const BackButton = ({ destination = '/' }) => (
  <div className="flex">
    <Link
      to={destination}
      aria-label="Go back"
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      <BsArrowLeft aria-hidden="true" className="text-lg" />
      Back
    </Link>
  </div>
);

export default BackButton;
