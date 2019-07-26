const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author_name: { type: String },
  title: { type: String },
  year_published: { type: Number },
  author_photo: { type: String },
  author_location: { type: String }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
