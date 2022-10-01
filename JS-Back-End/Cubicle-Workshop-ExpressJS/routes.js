const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController')
const cubeController = require('./controllers/cubeController')
const accessoryController = require('./controllers/accessoryController')
const homeController = require('./controllers/homeController')

//Home route
router.use(homeController)
//Cube route
router.use('/cube', cubeController)
//Accessory routes
router.use('/accessory', accessoryController)
//Auth routes
router.use(authController)
//Error page
router.get('*', (req, res) => {
    res.render('404')
})



module.exports = router