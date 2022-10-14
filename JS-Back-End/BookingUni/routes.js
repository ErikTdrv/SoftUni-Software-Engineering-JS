const router = require('express').Router();
const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const hotelController = require('./controllers/hotelController')

router.use(homeController)
router.use(authController)
router.use(hotelController)
module.exports = router;