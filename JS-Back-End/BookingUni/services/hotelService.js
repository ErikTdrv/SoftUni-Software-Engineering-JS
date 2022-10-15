const Hotel = require('../models/Hotel')
const User = require('../models/User')

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
const updateHotel = async (id, body) => {
    return Hotel.findByIdAndUpdate(id, {...body})
}
const deleteHotel = async (id) => {
    await Hotel.findByIdAndDelete(id)
}
const book = async (hotelId, userId) => {
    const hotel = await Hotel.findById(hotelId);
    hotel?.bookedUsers.push(userId)
    hotel.freeRooms--
    await hotel.save()
    const user = await User.findById(userId)
    let array = user.bookedHotels
    // user?.bookedHotels.push(hotel.name)
    // await user.save()
    array.push(hotel.name)
    console.log(array)
    await User.findByIdAndUpdate(userId, {bookedHotels: array})
}
const getBookedHotels = async (userId) => {
    const user = await User.findById(userId)
    return user.bookedHotels
}
const getOneUser = async (userId) => {
    return await User.findById(userId).lean()
}
const errorValidation = (error) => {
    if (error.name == 'ValidationError'){
        return Object.values(error.errors).map((x) => x.message)
    }else {
        return error.message.split('\n')
    }
}
module.exports = {
    errorValidation,
    getOneUser,
    getBookedHotels,
    book,
    deleteHotel,
    updateHotel,
    getOneHotel,
    getHotelsSort,
    addHotel
}