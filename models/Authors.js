const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorData = ({
        name: { type: String, required: true },
        dob: { Date, required: true },
        gender: { type: String },
        location: { type: String },
        genre: { type: String },
        top_books: { type: [String] },
        notable_quotes: { type: String },
        img: { type: String, }

    });

    const Author = mongoose.model('Author', AuthorSchema);

    module.exports = Author;
