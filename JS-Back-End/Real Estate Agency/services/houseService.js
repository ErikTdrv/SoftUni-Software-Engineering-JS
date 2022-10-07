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
const getOneHouse = async (_id, name) => {
    if(_id){
        const house = await House.findById(_id).lean()
        return house
    }else if(name){
        let apartments = await House.find({}).lean()
        apartments = apartments.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
        return apartments
    }
}
const getAllHouses = async () => {
    return await House.find({}).lean();
}
const deleteHouse = async (id) => {
    await House.findByIdAndDelete(id)
}
const editHouse = async (id, body) => {
    let {name, type, year, city, imageUrl, description, pieces} = body;
    return await House.findByIdAndUpdate(id, {name, type, year, city, imageUrl, description, pieces}, {
        runValidators: true,
    })
}
module.exports = {
    editHouse,
    deleteHouse,
    getAllHouses,
    getOneHouse,
    getLast3Houses, 
    createHouse
}