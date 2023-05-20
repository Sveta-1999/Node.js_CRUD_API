const mongoose = require('mongoose');


//User Schema
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: false
    },
    livingCountry: {
        type: String,
        required: false
    }
});


module.exports = { User }