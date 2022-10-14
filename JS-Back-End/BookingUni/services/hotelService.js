const Hotel = require('../models/Hotel')
const addHotel = (name, city, freeRooms, imageUrl) => {
    return Hotel.create({name, city, freeRooms, imageUrl})
}
const getHotelsSort = () => {
    const hotels = Hotel.find({}).sort({freeRooms: -1}).lean()
    return hotels
}
module.exports = {
    getHotelsSort,
    addHotel
}