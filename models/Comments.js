const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  name: {type: String},
  message: {type: String}
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;