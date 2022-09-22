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
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v){
                return /^https*/.test(v) 
            }, 
            message: props => `${props.value} it's not a valid URL`
        },
        // validate: [/^https*/, 'Invalid URL!'] // Might work
    }
})

const Accessory = new mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;