const express = require('express');
const User = require('../models/User');
const { registerUser, checkForUser, createToken } = require('../services/authService');
const { isGuest } = require('../middlewares/authMiddleware')
const router = express.Router();

//Register routes
router.get('/register', isGuest, (req, res) => {
    res.render('auth/register')
})
router.post('/register', async (req, res) => {
    try {
        const { name, username, password, rePass } = req.body;
        if (password != rePass) {
            throw new Error('Passwords must match!')
        }
        const user = await User.find({username: username})
        if(user.length > 0){
            throw new Error('User already registered!')
        }
        await registerUser(name, username, password)
        res.redirect('/login')
    } catch (err) {
        res.status(400).render('auth/register', { error: err.message })
    }
})

//Login routes
router.get('/login', isGuest, (req, res) => {
    res.render('auth/login')
})
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await checkForUser(username, password);
        if (user) {
            const token = await createToken(user)
            console.log(token)
            res.cookie('token', token, {
                httpOnly: true,
            })
            res.redirect('/')
        } else {
            throw new Error('Invalid username or password!')
        }
    } catch (err) {
        return res.status(400).render('auth/login', { error: err.message })
    }
})

//Logout routes
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
})


module.exports = router;