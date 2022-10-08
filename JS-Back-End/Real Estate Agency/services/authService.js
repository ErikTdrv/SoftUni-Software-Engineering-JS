const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const registerUser = async (name, username, password) => {
    await User.create({name: name, username: username, password: password})
}
const checkForUser = async (username, password) => {
    try {
        const user = await User.findOne({username});
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid){
            return user;
        }else {
            throw new Error('Cannot find username of password')
        }
    }catch(err){
        throw new Error(err.message)
    }
}
const createToken = (user) => {
    const payload = {
        _id: user._id,
        name: user.name,
        username: user.username,
    }
    const token = jwt.sign(payload, 'ASDPI-93KLASJD02')
    return token
    // return new Promise((resolve, reject) => {
    //     jwt.sign(payload, 'ASDPI-93KLASJD02', function(err, token){
    //         if(err){
    //             reject(err)
    //         }else {
    //             resolve(token)
    //         }
    //     })
    // })
}
const getUser = async (id) => {
    const user = await User.find({_id: id}).lean()
    return user.name
}
module.exports = {
    getUser,
    createToken,
    checkForUser,
    registerUser
}