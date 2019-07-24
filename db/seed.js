

const db = require('../models');

const pokemonList = require('./book.json');

// removes all pokemon and
db.Book.remove({}, () => {
	bookList.forEach(book => {
		db.Book.create(book, (error, createdBook) => {
			if (error) return console.log(error);
			console.log(createdBook);
		});
	});
});
