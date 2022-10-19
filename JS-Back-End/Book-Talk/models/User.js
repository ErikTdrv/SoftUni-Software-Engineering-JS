const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [4, 'Username must have more than 4 characters!']
    },
    email: {
        type: String,
        required: true,
        minLength: [10, 'Email must have more than 10 characters!']
    }, 
    password: {
        type: String,
        required: true,
        minLength: [3, 'Password must be longer than 3 characters!']
    }
})

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then((hashedPassword) => {
        this.password = hashedPassword
        return next()
    })
    .catch(err => console.log(err))
})

const User = new mongoose.model('User', userSchema);
module.exports = User;