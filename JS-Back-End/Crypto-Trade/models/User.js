const mongoose = require('mongoose');

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


userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) =>{
         this.password = hash
         return next()
    })
})

const User = new mongoose.model('User', userSchema)
module.exports = User;
// •	Username - string (required),
// •	Email - string (required),
// •	Password - string (required)
