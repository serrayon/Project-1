const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const UserSchema = ({

        // comments: [Comment.schema],
        username: { type: String, required: true },
        password: { type: String, required: true },
        // comment: String

    });

    const User = mongoose.model('User', UserSchema);

    module.exports = User;
