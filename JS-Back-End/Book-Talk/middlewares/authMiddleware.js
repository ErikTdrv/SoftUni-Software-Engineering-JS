const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req?.cookies['token'];
    if (!token) {
        return next();
    }
    jwt.verify(token, 'ASDHO5-0SALJSD', function (err, decodedToken) {
        if (err) {
            res.clearCookie('token')
            res.status(401).redirect('auth/login')
        }
        req.user = decodedToken;
        res.locals.user = decodedToken;
        // res.locals.name = decodedToken.username;
        return next();
    });
}

function isGuest(req, res, next){
    if(!req?.user){
        return next()
    }
    res.render('404')
}
function isUser(req, res, next){
    if(req?.user){
        return next()
    }
    res.render('404')
}

module.exports = { 
    isUser,
    isGuest,
    authMiddleware };