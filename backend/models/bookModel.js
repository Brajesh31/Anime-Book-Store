/**
 * Persistent Book document.
 *
 * Keep this schema aligned with backend/utils/bookValidation.js and
 * docs/data-model.md. Mongoose timestamps add createdAt and updatedAt
 * automatically; clients must not be allowed to set those fields.
 */
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A book title is required.'],
      trim: true,
      minlength: [1, 'A book title cannot be empty.'],
      maxlength: [180, 'A book title cannot exceed 180 characters.'],
    },
    author: {
      type: String,
      required: [true, 'An author name is required.'],
      trim: true,
      minlength: [1, 'An author name cannot be empty.'],
      maxlength: [120, 'An author name cannot exceed 120 characters.'],
    },
    publishYear: {
      type: Number,
      required: [true, 'A publication year is required.'],
      min: [0, 'Publication year cannot be negative.'],
      max: [2100, 'Publication year cannot exceed 2100.'],
      validate: {
        validator: Number.isInteger,
        message: 'Publication year must be a whole number.',
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: 'throw',
  },
);

bookSchema.index({ title: 1, author: 1 });

export const Book = mongoose.model('Book', bookSchema);
