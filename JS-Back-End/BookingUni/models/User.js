const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    'email': {
        type: String,
        required: true,
        unique: true,
        validate: [/^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/, 'Email should be with only English letters and digits!']
    }, 
    'username': {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'You should have at least 5 characters in the username!'],
    },
    'password': {
        type: String,
        required: true,
        minLength: [5, 'You should have at least 5 characters in the password!'],
        validate: [/^[A-Za-z0-9]+$/, 'Password should be with only English letters and digits!'],
    },
    'bookedHotels': [],
    'offeredHotels': []
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) =>{
         this.password = hash
         return next()
    })
})

const User = mongoose.model('User', userSchema);
module.exports = User;