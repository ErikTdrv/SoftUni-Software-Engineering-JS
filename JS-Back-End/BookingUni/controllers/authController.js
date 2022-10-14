const User = require('../models/User');
const { registerUser, loginUser, createToken } = require('../services/authService');

const router = require('express').Router();

    //Register
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
            res.render('auth/login', { error })
        }
    })
    //Login
    router.get('/login', (req, res) => {
        res.render('auth/login')
    })
    router.post('/login', async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await loginUser(username, password)
            const token = await createToken(user)
            res.cookie('token', token, {
                httpOnly: true,
            })
            res.redirect('/')
        } catch (error) {
            res.render('auth/login', { error })
        }
    })
    //Logout
    router.get('/logout', (req, res) => {
        res.clearCookie('token');
        res.redirect('/')
    })
module.exports = router;