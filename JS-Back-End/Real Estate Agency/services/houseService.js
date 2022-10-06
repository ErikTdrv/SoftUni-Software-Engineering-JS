const House = require("../models/House")
const User = require("../models/User")

const getLast3Houses = async () => {
    const houses = await House.find({}).lean();
    const last3Houses = houses.slice(-3)
    return last3Houses
}
const createHouse = async (name, type, year, city, imageUrl, description, pieces, owner) => {
    await House.create({name, type, year, city, imageUrl, description, pieces, owner})
}

module.exports = {
    getLast3Houses, 
    createHouse
}