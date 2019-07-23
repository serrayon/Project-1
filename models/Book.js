const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: {type: String},
  year_published: {type: Number},
  original_language: {type: String},
  genre: {type: String},
  awards: {type: String},
  author: {
    name: {type: String},
        gender: { type: String },
        location: { type: String },
        img: { type: String, }
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;