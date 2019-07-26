const express = require('express');
const router = express.Router();

// Databse
const db = require('../models');
function getTime() {
    return new Date().toLocaleString();
  };


// Books Index fetch
router.get('/', (req, res) => {
    db.Book.find({}, (err, allBooks) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });

      res.status(200).json({
        status: 200,
        numberOfResults: allBooks.length,
        data: allBooks,
        requestedAt: getTime(),
      });
    });
  });

  // Book Show
  router.get('/:book_id', (req, res) => {
    db.Book.findById(req.params.book_id, (err, foundBook) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });

      res.status(200).json({
        status: 200,
        data: foundBook,
        requestedAt: getTime(),
      });
    });
  });

  // Book Create
  router.post('/', (req ,res) => {
    const newBook = req.body;


    db.Book.create(newBook, (err, createdBook) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'});

      res.status(201).json({
        status: 201,
        data: createdBook,
        requestedAt: getTime(),
      });
    });
  });

  // Book Update
  router.put('/:book_id', (req, res) => {
    console.log(req.body);
    db.Book.findByIdAndUpdate(req.params.book_id, req.body, { new: true }, (err, updatedBook) => {
      console.log(updatedBook)
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });

      res.status(202).json({
        status: 202,
        data: updatedBook,
        requestedAt: getTime(),
      });
    });
  })

  // Book Destroy
  router.delete('/:book_id', (req, res) => {
    db.Book.findByIdAndDelete(req.params.book_id, (err, deletedBook) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });

      console.log(deletedBook);
      res.status(200).json({
        status: 200,
        message: 'Success',
      });
    });
  });

  module.exports = router;
