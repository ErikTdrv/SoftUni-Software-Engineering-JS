const House = require("../models/House")
const User = require("../models/User")

const getLast3Houses = () => {
    User.find({}).sort()
}
const createHouse = async (name, type, year, city, imageUrl, description, pieces, owner) => {
    await House.create({name, type, year, city, imageUrl, description, pieces, owner})
}

module.exports = {
    getLast3Houses, 
    createHouse
}