const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comments = require('./Comments');

const UserSchema = ({

        // comments: [Comments.schema],
        name: { type: String, required: true },
        // comment: String

    });

    const User = mongoose.model('User', UserSchema);

    module.exports = User;
