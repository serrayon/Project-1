console.log('hello');
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/worldOfLiterature';
mongoose.connect(MONGO_URL, { useNewUrlParser: true });

module.exports = {
	User: require('./Users'),
	Book: require('./Book'),
	Comment: require('./Comment')
};