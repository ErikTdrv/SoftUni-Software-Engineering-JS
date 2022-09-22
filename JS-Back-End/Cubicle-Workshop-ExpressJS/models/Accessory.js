const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 100,
        min: 5, 
    }
})

const Accessory = new mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;