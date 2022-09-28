const { calculateObjectSize } = require('bson')
const Cube = require('../models/Cube')

const createCube = async (cube) => {
    return await Cube.create(cube)
}

const getAllCubes = async () => {
    return await Cube.find({}).lean()
}

const getOneCube = async (_id) => {
    return await Cube.findById(_id).populate('accessories').lean()
}
const search = async (text, from, to) => {
    let cubes = await getAllCubes();
    if(text){
        cubes = cubes.filter(x => x.name.toLowerCase() == text.toLowerCase())
    }
    if(from){
        cubes = cubes.filter((cube) => cube.difficulty >= from);
    }
    if(to){
        cubes = cubes.filter((cube) => cube.difficulty <= to)
    }
    return cubes;
}

const editCube = async (id, body) => {
    let { name, description, imageUrl, difficultyLevel } = body;
    return Cube.findByIdAndUpdate(id, {name, description, imageUrl, 'difficulty': difficultyLevel})
}

module.exports = {
    editCube,
    search,
    createCube,
    getAllCubes,
    getOneCube
}