const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req?.cookies['token'];
    if (!token) {
        return next();
    }

    jwt.verify(token, 'SDJAPIJ32910JSAD', function (err, decodedToken) {
        if (err) {
            res.clearCookie('token')
            res.status(401).render('404')
        }
        req.user = decodedToken;
        res.locals.user = decodedToken;
        return next();
    });
}

function guestOnly(req, res, next){
    if(!req?.user){
        return next()
    }
    res.render('404')
}
function userOnly(req, res, next){
    if(req?.user){
        return next()
    }
    res.render('404')
}

module.exports = { 
    userOnly,
    guestOnly,
    authMiddleware };