const jwt = require("jsonwebtoken");
const { getOneHouse } = require('../services/houseService')
const authMiddleware = (req, res, next) => {
    const token = req.cookies['token']
    if(!token){
        return next();
    }

    jwt.verify(token, 'ASDPI-93KLASJD02', function(err, decodedToken) {
        if (err) {
            res.status(401).redirect('/login')
        }
        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    });
}

const isGuest = (req, res, next) => {
    if(!req.user){
        return next();
    }
    res.redirect('/')
}
const isUser = (req, res, next) => {
    if(req.user){
        return next()
    }
    res.redirect('/')
}
const isOwner = async (req, res, next) => {
    const id = req.params.id;
    const house = await getOneHouse(id)
    if(req.user && house.owner == req.user?._id){
        return next()
    }
    res.redirect('/')
}
module.exports = { 
    isUser,
    isOwner,
    isGuest,
    authMiddleware,
};