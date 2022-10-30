const mongoose = require('mongoose');

function initDatabase(){

    //Edit db name!!!
    return mongoose.connect('mongodb://127.0.0.1:27017/mindblog')
}
module.exports = initDatabase;