const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
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