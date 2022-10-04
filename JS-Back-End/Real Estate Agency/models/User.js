const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true,
    }, 
    'username': {
        type: String,
        required: true,
        minlength: [5, 'You should have at least 5 characters in the username!'],
    },
    'password': {
        type: String,
        required: true,
        minlength: [4, 'You should have at least 4 characters in the password!'],
    }
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) =>{
         this.password = hash
         next()
    })
})

const User = mongoose.model('User', userSchema);
module.exports = User;