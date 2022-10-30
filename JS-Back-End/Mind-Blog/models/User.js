const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [2, 'Username must be at least 2 characters long!']
    },
    email: {
        type: String,
        required: true,
        minLength: [10, 'Email must be at least 10 characters long!']
    }, 
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password must be at least 4 characters long!']
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
