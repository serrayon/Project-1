const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  year_published: {type: Number},
  awards: {type: String},
  author: {
        name: {type: String},
        location: { type: String },
        img: { type: String, }
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;