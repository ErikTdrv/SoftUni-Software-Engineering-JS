const express = require('express');
const router = express.Router();
const { getAllCubes } = require('../services/cubeService');

async function homeController(req, res){
    const cubes = await getAllCubes()
    res.render('index', { cubes })
}
function aboutController(req, res){
    res.render('about')
}


module.exports = {
    homeController, aboutController
}