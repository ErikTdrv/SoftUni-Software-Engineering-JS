const User = require("../models/User")
const bcrypt = require('bcrypt');
const registerUser = async (username, email, password) => {
    await User.create({username, email, password})
} 
const loginUser = async (email, password) => {
    const user = await getOneUser(email);
    if(!user){
        throw new Error('Invalid user or password!')
    }
    const isUser = await bcrypt.compare(password, user?.password)
    
}
const getOneUser = async (email) => {
    return await User.findOne({email})
}
const createToken = async (payload) => {
    
}

module.exports = {
    loginUser,
    getOneUser,
    registerUser
}