/**
 * Tailwind scans the HTML entry and React source for utility class names.
 * Keep paths aligned with the actual source tree or production builds may
 * omit classes that are only used by a component.
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Project-specific design tokens can be added here when a shared
      // component needs a value that is not already in Tailwind's palette.
    },
  },
  plugins: [],
};
