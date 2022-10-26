const Crypto = require('../models/Crypto');
const getAll = async () => {
    return await Crypto.find({}).lean()
}
const createCrypto = async (crypto) => {
    await Crypto.create(crypto)
}

module.exports = {
    getAll,
    createCrypto
}