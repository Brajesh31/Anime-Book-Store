/**
 * Request validation for the current Book schema.
 *
 * The API accepts only title, author, and publishYear. This explicit
 * allow-list prevents clients from writing MongoDB-managed fields such as
 * _id, createdAt, updatedAt, or future internal properties.
 */

const ALLOWED_FIELDS = ['title', 'author', 'publishYear'];
const MAX_TITLE_LENGTH = 180;
const MAX_AUTHOR_LENGTH = 120;
const MIN_PUBLISH_YEAR = 0;
const MAX_PUBLISH_YEAR = 2100;

export function validateBookPayload(payload) {
  const errors = {};

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { errors: { body: 'Request body must be a JSON object.' } };
  }

  for (const key of Object.keys(payload)) {
    if (!ALLOWED_FIELDS.includes(key)) {
      errors[key] = 'This field is not accepted by the Book API.';
    }
  }

  const title = typeof payload.title === 'string' ? payload.title.trim() : '';
  const author = typeof payload.author === 'string' ? payload.author.trim() : '';
  const rawYear = payload.publishYear;
  const publishYear = typeof rawYear === 'number' ? rawYear : Number(rawYear);

  if (!title) errors.title = 'Title is required.';
  else if (title.length > MAX_TITLE_LENGTH) {
    errors.title = `Title must be ${MAX_TITLE_LENGTH} characters or fewer.`;
  }

  if (!author) errors.author = 'Author is required.';
  else if (author.length > MAX_AUTHOR_LENGTH) {
    errors.author = `Author must be ${MAX_AUTHOR_LENGTH} characters or fewer.`;
  }

  if (rawYear === '' || rawYear === null || rawYear === undefined) {
    errors.publishYear = 'Publication year is required.';
  } else if (
    !Number.isInteger(publishYear) ||
    publishYear < MIN_PUBLISH_YEAR ||
    publishYear > MAX_PUBLISH_YEAR
  ) {
    errors.publishYear = `Publication year must be a whole number from ${MIN_PUBLISH_YEAR} to ${MAX_PUBLISH_YEAR}.`;
  }

  if (Object.keys(errors).length) return { errors };

  return {
    errors: null,
    value: { title, author, publishYear },
  };
}

export const bookValidationLimits = Object.freeze({
  title: MAX_TITLE_LENGTH,
  author: MAX_AUTHOR_LENGTH,
  publishYear: { min: MIN_PUBLISH_YEAR, max: MAX_PUBLISH_YEAR },
});
