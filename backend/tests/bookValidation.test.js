import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBookPayload, bookValidationLimits } from '../utils/bookValidation.js';

test('accepts and normalizes a valid book payload', () => {
  const result = validateBookPayload({
    title: '  A Sample Volume  ',
    author: '  A. Writer  ',
    publishYear: '2024',
  });

  assert.equal(result.errors, null);
  assert.deepEqual(result.value, {
    title: 'A Sample Volume',
    author: 'A. Writer',
    publishYear: 2024,
  });
});

test('rejects missing required fields', () => {
  const result = validateBookPayload({});
  assert.ok(result.errors.title);
  assert.ok(result.errors.author);
  assert.ok(result.errors.publishYear);
});

test('rejects whitespace-only text fields', () => {
  const result = validateBookPayload({
    title: '   ',
    author: '\t',
    publishYear: 2024,
  });
  assert.ok(result.errors.title);
  assert.ok(result.errors.author);
});

test('rejects non-integer and out-of-range publication years', () => {
  for (const publishYear of [2024.5, -1, 2101, 'not-a-year']) {
    const result = validateBookPayload({
      title: 'Volume',
      author: 'Writer',
      publishYear,
    });
    assert.ok(result.errors.publishYear, `Expected ${publishYear} to be rejected`);
  }
});

test('rejects properties outside the public Book contract', () => {
  const result = validateBookPayload({
    title: 'Volume',
    author: 'Writer',
    publishYear: 2024,
    isAdmin: true,
    createdAt: '2000-01-01',
  });
  assert.ok(result.errors.isAdmin);
  assert.ok(result.errors.createdAt);
});

test('enforces documented text limits', () => {
  const result = validateBookPayload({
    title: 'T'.repeat(bookValidationLimits.title + 1),
    author: 'Writer',
    publishYear: 2024,
  });
  assert.ok(result.errors.title);
});

test('rejects arrays and non-object request bodies', () => {
  assert.ok(validateBookPayload([]).errors.body);
  assert.ok(validateBookPayload(null).errors.body);
});
