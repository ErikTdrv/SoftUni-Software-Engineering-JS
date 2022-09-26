const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.model({
    'username': {
        type: String,
        required: true,
    },
    'password': {
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

const User = new mongoose.Schema('User', userSchema)