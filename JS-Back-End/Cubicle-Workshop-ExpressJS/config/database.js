const mongoose = require('mongoose');

function initDatabase() {
    return mongoose.connect('mongodb://0.0.0.0:27017/cubes');
} 


module.exports = initDatabase;