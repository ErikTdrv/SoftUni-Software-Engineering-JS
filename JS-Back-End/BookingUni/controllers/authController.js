const { registerUser } = require('../services/authService');

const router = require('express').Router();

    router.get('/register', (req, res) => {
        res.render('auth/register')
    })
    router.post('/register', async (req, res) => {
        try {
            const { email, username, password, rePass } = req.body;
            registerUser(email, username, password, rePass)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    })
module.exports = router;