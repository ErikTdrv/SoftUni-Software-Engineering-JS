const express = require('express');
const User = require('../models/User');
const { registerUser, checkForUser, createToken } = require('../services/authService');
const router = express.Router()

//Register routes
router.get('/register', (req, res) => {
    res.render('auth/registerPage')
})
router.post('/register', async (req, res) => {
    try{
        const {username, password, rePass} = req.body;
        await registerUser(username, password)
    }catch(err){
        return res.status(400).send(err)
    }
    res.redirect('/login');
})

//Login routes
router.get('/login', (req, res) => {
    res.render('auth/loginPage')
})
router.post('/login', async (req, res) => {
        const { username, password } = req.body;
        const user = await checkForUser(username, password);
        if(user){
            const token = await createToken(user)
            res.cookie('app_token', token, {
                httpOnly: true,
            })
            res.redirect('/')
        }else {
            res.status(400).send('Invalid username or password')
        }
})



module.exports = router;