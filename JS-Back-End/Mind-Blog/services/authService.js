const User = require("../models/User") 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (email, username, password) => {
    const isValid = await User.findOne({email});
    console.log(isValid)
    if (isValid){
        throw new Error('Invalid email or password!')
    }else {
        await User.create({email, username, password});
    }
}
const createToken = (user) => {
    const payload = {
        _id: user._id,
        username: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, 'SDJAPIJ32910JSAD')
    return token
}
const loginUser = async (email, password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Invalid email or password!')
    }
    const isValid = await bcrypt.compare(password, user?.password);
    if(!isValid){
        throw new Error('Invalid email or password!')
    }
    const token = await createToken(user)
    return token;
    
}
module.exports = {
    loginUser,
    createToken,
    registerUser,
}