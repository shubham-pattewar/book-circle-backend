const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  coverImage: String,
  genre: { 
    type: String, 
    required: true,
    enum: [
      'All',
      'Fiction', 
      'Non-Fiction', 
      'Science Fiction', 
      'Fantasy',
      'Mystery',
      'Romance',
      'Thriller',
      'Biography'
    ],
    default: 'Fiction'
  },
  buyLink: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);