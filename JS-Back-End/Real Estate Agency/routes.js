const express = require('express');
const router = express.Router()
const authController = require('./controllers/authController')

router.get('/', (req, res) => {
    res.render('home')
})
router.use(authController)

module.exports = router;