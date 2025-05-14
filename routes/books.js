const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET all books or filtered by genre
router.get('/', async (req, res) => {
  try {
    const { genre } = req.query;
    const query = genre && genre !== 'All' ? { genre } : {};
    const books = await Book.find(query).sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new book
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;