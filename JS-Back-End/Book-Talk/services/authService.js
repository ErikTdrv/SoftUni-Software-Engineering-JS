const User = require("../models/User")
const jwt = require('jsonwebtoken');

const registerUser = (email, username, password) => {
    const user = User.create({email, username, password});
    return user
}
const createToken = (user) => {
    const payload = {
        _id: user._id,
        username: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, 'ASDHO5-0SALJSD')
    return token
}
module.exports = {
    createToken,
    registerUser,
}