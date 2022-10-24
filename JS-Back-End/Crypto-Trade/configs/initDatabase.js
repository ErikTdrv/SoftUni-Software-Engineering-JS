const mongoose = require('mongoose');

function initDatabase(){

    return mongoose.connect('mongodb://127.0.0.1:27017/crypto')
}
module.exports = initDatabase;