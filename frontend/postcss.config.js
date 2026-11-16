/**
 * PostCSS pipeline used by Vite during development and production builds.
 * Tailwind expands utility directives from src/index.css; Autoprefixer adds
 * vendor prefixes based on the project's browser support targets.
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
