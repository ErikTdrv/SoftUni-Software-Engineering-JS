const Cube = require('../models/Cube');
const db = require('../config/db.json');

const createCube = (name, description, imageUrl, difficulty) => {
    const cube = new Cube(name, description, imageUrl, difficulty)
    console.log('db', cube)
    db.push(cube)
}

const getAllCubes = () => {
    return db.slice()
}

const getOneCube = (_id) => {
    const cube = db.find((cube) => cube._id == _id);
    return cube;
}

module.exports = {
    createCube,
    getAllCubes,
    getOneCube
}