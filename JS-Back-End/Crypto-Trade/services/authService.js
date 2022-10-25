const User = require("../models/User")

const registerUser = async (username, email, password) => {
    await User.create({username, email, password})
} 

module.exports = {
    registerUser
}