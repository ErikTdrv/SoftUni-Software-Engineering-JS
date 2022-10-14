const User = require('../models/User');
const { registerUser, loginUser, createToken } = require('../services/authService');

const router = require('express').Router();

    router.get('/register', (req, res) => {
        res.render('auth/register')
    })
    router.post('/register', async (req, res) => {
        try {
            const { email, username, password, rePass } = req.body;
            const user = await registerUser(email, username, password, rePass)
            const token = await createToken(user)
            res.cookie('token', token, {
                httpOnly: true,
            })
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    })
module.exports = router;