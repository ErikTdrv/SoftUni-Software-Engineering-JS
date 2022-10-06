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
const getOneHouse = async (_id) => {
    const house = await House.findById(_id).lean()
    return house
}

module.exports = {
    getOneHouse,
    getLast3Houses, 
    createHouse
}