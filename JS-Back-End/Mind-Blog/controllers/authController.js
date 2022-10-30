const { userOnly, guestOnly } = require('../middlewares/authMiddleware');
const { registerUser, createToken, loginUser } = require('../services/authService');

const router = require('express').Router();

//Register functionality
router.get('/register', guestOnly,(req, res) => {
    res.render('auth/register');
})
router.post('/register',guestOnly, async (req, res) => {
    const { email, username, password, rePass } = req.body;
    try {
        if(password != rePass){
            throw new Error('Passwords do not match!')
        }
        await registerUser(email, username, password);
        res.redirect('/')
    } catch (error) {
        res.render('auth/register', {error: error.message})
    }
})

//Login functionality
router.get('/login',guestOnly, (req, res) => {
    res.render('auth/login')
})
router.post('/login',guestOnly, async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password)
        res.cookie('token', token, {
            httpOnly: true,
        })
        res.redirect('/')
    } catch (error) {
        res.render('auth/login', {error: error.message})
    }
})

//Logout
router.get('/logout', userOnly, (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
})

module.exports = router;