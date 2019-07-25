

const db = require('../models');

const bookList = require('./book.json');


db.Book.remove({}, () => {
	bookList.forEach(book => {
		db.Book.create(book, (error, createdBook) => {
			if (error) return console.log(error);
			console.log(createdBook);
		});
	});
});
