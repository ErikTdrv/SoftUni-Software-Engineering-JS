const Accessory = require("../models/Accessory");

const createAccessory = async (accessory) => {
    console.log(accessory)
    return await Accessory.create(accessory)
}

module.exports = {
    createAccessory,
}