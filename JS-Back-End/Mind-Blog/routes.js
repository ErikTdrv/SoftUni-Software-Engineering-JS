const router = require('express').Router();
const authController = require('./controllers/authController')
const homeController = require('./controllers/homeController');
    router.use(homeController)
    router.use(authController)
    router.get('*', (req, res) => {
        res.render('404')
    })
module.exports = router;
