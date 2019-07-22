const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = ({
        name: { type: String, required: true },
        dob: { type: Date },
        gender: { type: String },
        location: { type: String },
        genre: { type: String },
        top_books: { type: [String] },
        notable_quotes: { type: String },
        img: { type: String, }

    });

    const Author = mongoose.model('Author', AuthorSchema);

    module.exports = Author;
