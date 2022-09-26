const User = require("../models/User")
const bcrypt = require('bcrypt');

const registerUser = async (username, password) => {
    await User.create({username, password})
}
const checkForUser = async (username, password) => {
    try {
        const user = await User.findOne({username});
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid){
            return user;
        }else {
            throw { message: 'Cannot find username of password'}
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    registerUser,
    checkForUser
}