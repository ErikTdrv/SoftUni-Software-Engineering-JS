const express = require('express');
const router = express.Router()
const authController = require('./controllers/authController')
const homeController = require('./controllers/homeController')

router.get('/', (req, res) => {
    res.render('home')
})
router.use(authController)
router.use(homeController)

module.exports = router;