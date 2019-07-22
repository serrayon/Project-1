const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api', { useNewUrlParser: true });

module.exports = {
	Authors: require('./authors'),
	Users: require('./users'),
	Comments: require('./comments'),
};