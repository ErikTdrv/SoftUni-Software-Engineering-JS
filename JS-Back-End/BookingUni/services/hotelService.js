const Hotel = require('../models/Hotel')
const addHotel = (name, city, freeRooms, imageUrl, ownerId) => {
    return Hotel.create({name, city, freeRooms, imageUrl, owner: ownerId})
}
const getHotelsSort = () => {
    const hotels = Hotel.find({}).sort({freeRooms: -1}).lean()
    return hotels
}
const getOneHotel = (id) => {
    return Hotel.findById(id).lean()
}
module.exports = {
    getOneHotel,
    getHotelsSort,
    addHotel
}