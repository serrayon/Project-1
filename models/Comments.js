const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  name: {type: String},
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

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;