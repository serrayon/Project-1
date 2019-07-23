const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  author: {type: String},
  year_published: {type: Number},
  original_language: {type: String},
  genre: {type: String},
  awards: {type: String}
});

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;