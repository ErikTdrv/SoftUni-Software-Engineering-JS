const User = require("../models/User");

const registerUser = async (name, username, password) => {
    await User.create({name: name, username: username, password: password})
}

module.exports = {
    registerUser
}