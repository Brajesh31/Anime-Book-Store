/**
 * Accessible loading indicator shared by catalogue and record screens.
 * A visible label accompanies the animation so the state is not communicated
 * through motion or color alone.
 */
const Spinner = ({ label = 'Loading' }) => (
  <div
    className="flex items-center justify-center gap-3 py-12 text-slate-600"
    role="status"
    aria-live="polite"
  >
    <span
      aria-hidden="true"
      className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-sky-700"
    />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Spinner;
