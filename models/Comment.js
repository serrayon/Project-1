const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  message: {type: String},
  book:
    {
        type: Schema.Types.ObjectId,
        ref: 'Books'
    },
  user:
    {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
