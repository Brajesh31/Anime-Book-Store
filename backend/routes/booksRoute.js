/**
 * REST endpoints for the Book resource.
 *
 * Route handlers return a stable JSON envelope for errors. The model is
 * intentionally small; new fields must be added to the model, validator,
 * API documentation, and tests together.
 */
import express from 'express';
import mongoose from 'mongoose';
import { Book } from '../models/bookModel.js';
import { validateBookPayload } from '../utils/bookValidation.js';

const router = express.Router();

function sendValidationError(response, errors) {
  return response.status(400).json({
    success: false,
    message: 'The submitted book data is invalid.',
    errors,
  });
}

function sendServerError(response, error) {
  // Detailed errors belong in protected server logs, never in public responses.
  console.error('[books-api] Request failed:', error);
  return response.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
  });
}

function validateId(id) {
  return mongoose.isValidObjectId(id);
}

/**
 * GET /books
 * Returns every book. Pagination is intentionally not silently implied:
 * callers receive the full current collection and a count.
 */
router.get('/', async (_request, response) => {
  try {
    const books = await Book.find({}).sort({ createdAt: -1 }).lean();
    return response.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    return sendServerError(response, error);
  }
});

/** GET /books/:id returns one record or a precise 400/404 response. */
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    if (!validateId(id)) {
      return response.status(400).json({
        success: false,
        message: 'The supplied book ID is invalid.',
      });
    }

    const book = await Book.findById(id).lean();
    if (!book) {
      return response.status(404).json({
        success: false,
        message: 'Book not found.',
      });
    }

    return response.status(200).json({ success: true, data: book });
  } catch (error) {
    return sendServerError(response, error);
  }
});

/** POST /books creates a record after allow-list validation. */
router.post('/', async (request, response) => {
  try {
    const validation = validateBookPayload(request.body);
    if (validation.errors) return sendValidationError(response, validation.errors);

    const book = await Book.create(validation.value);
    return response.status(201).json({
      success: true,
      message: 'Book created successfully.',
      data: book,
    });
  } catch (error) {
    return sendServerError(response, error);
  }
});

/** PUT /books/:id replaces the editable fields of an existing record. */
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    if (!validateId(id)) {
      return response.status(400).json({
        success: false,
        message: 'The supplied book ID is invalid.',
      });
    }

    const validation = validateBookPayload(request.body);
    if (validation.errors) return sendValidationError(response, validation.errors);

    const book = await Book.findByIdAndUpdate(id, validation.value, {
      new: true,
      runValidators: true,
      context: 'query',
    });

    if (!book) {
      return response.status(404).json({
        success: false,
        message: 'Book not found.',
      });
    }

    return response.status(200).json({
      success: true,
      message: 'Book updated successfully.',
      data: book,
    });
  } catch (error) {
    return sendServerError(response, error);
  }
});

/** DELETE /books/:id removes one record after validating its identifier. */
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    if (!validateId(id)) {
      return response.status(400).json({
        success: false,
        message: 'The supplied book ID is invalid.',
      });
    }

    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return response.status(404).json({
        success: false,
        message: 'Book not found.',
      });
    }

    return response.status(200).json({
      success: true,
      message: 'Book deleted successfully.',
      data: { id: book._id },
    });
  } catch (error) {
    return sendServerError(response, error);
  }
});

export default router;
