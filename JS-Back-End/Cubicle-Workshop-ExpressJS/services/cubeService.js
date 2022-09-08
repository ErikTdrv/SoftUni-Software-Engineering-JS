const Cube = require('../models/Cube')

const createCube = async (cube) => {
    console.log(cube)
    return await Cube.create(cube)
}

const getAllCubes = async () => {
    return await Cube.find({}).lean()
}

const getOneCube = async (_id) => {
    return await Cube.findById(_id).lean()
}

module.exports = {
    createCube,
    getAllCubes,
    getOneCube
}