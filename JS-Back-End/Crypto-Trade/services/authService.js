const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = async (username, email, password) => {
    await User.create({username, email, password})
} 
const loginUser = async (email, password) => {
    const user = await getOneUser(email);
    if(!user){
        throw new Error('Invalid user or password!')
    }
    const isUser = await bcrypt.compare(password, user?.password)
    if(!isUser){
        throw new Error('Invalid user or password!')
    }
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    }
    const token = createToken(payload)
    return token;
}
const getOneUser = async (email) => {
    return await User.findOne({email})
}
const createToken = async (payload) => {
    const token = jwt.sign(payload, 'ASDHAOLDSA9P-UI2LK')
    return token
}


module.exports = {
    loginUser,
    getOneUser,
    registerUser
}