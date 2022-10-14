const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = async (email, username, password, rePass) => {
    if(password != rePass){
        throw new Error('Passwords must match!')
    }
    const user = await User.create({email, username, password})
    return user
}
const loginUser = async (username, password) => {
        const user = await User.findOne({username});
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid){
            return user;
        }else {
            throw new Error('Cannot find username of password')
        }
}
const createToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    }
    const token = jwt.sign(payload, 'ASDPI-93KLASJD02')
    return token
}
module.exports = {
    loginUser,
    createToken,
    registerUser,
}