const User = require("../models/User")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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
const loginUser = async (email, password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Cannot find email or password!')
    }
    const isValid = await bcrypt.compare(password, user?.password);
    if(!isValid){
        throw new Error('Cannot find email or password!')
    }
    const token = await createToken(user)
    return token;
    
}
module.exports = {
    loginUser,
    createToken,
    registerUser,
}