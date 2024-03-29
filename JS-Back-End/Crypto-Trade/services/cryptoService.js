const Crypto = require('../models/Crypto');
const getAll = async () => {
    return await Crypto.find({}).lean()
}
const createCrypto = async (crypto) => {
    await Crypto.create(crypto)
}
const getOne = async (_id) => {
    return await Crypto.findById(_id);
}
const updateCrypto = async (_id, body) => {
    await Crypto.findByIdAndUpdate(_id, body)
}
const deleteCrypto = async (_id) => {
    await Crypto.findByIdAndDelete(_id)
}
const buyCrypto = async (_id, userId) => {
    const crypto = await Crypto.findById(_id);
    crypto?.buyers.push(userId)
    crypto.save()
}
module.exports = {
    buyCrypto,
    deleteCrypto,
    updateCrypto,
    getOne,
    getAll,
    createCrypto
}