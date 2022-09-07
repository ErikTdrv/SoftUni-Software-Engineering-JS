const express = require('express');
const router = express.Router();
const { getAllCubes } = require('../services/cubeService');

function homeController(req, res){
    const cubes = getAllCubes()
    res.render('index', { cubes })
}
function aboutController(req, res){
    res.render('about')
}


router.get('/', homeController)
router.get('/about', aboutController)



module.exports = router