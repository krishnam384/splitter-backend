const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 20
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User',userSchema);