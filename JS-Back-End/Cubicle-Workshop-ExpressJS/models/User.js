const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: true,
    },
    'password': {
        type: String,
        required: true,
    }
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) =>{
         this.password = hash
         next()
    })
})

const User = new mongoose.model('User', userSchema)
module.exports = User;