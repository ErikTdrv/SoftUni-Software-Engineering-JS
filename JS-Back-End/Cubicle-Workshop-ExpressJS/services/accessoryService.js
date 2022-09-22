const Accessory = require("../models/Accessory");

const createAccessory = async (accessory) => {
    return await Accessory.create(accessory)
}
const getAllAccessories = async () => {
    return await Accessory.find({}).lean()
}

module.exports = {
    createAccessory,
    getAllAccessories
}