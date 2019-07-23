const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = ({
        name: { type: String, required: true },
        comment: String

    });

    const User = mongoose.model('User', UserSchema);

    module.exports = User;
