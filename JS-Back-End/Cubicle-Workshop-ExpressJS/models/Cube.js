    const mongoose = require('mongoose');

    const cubeSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxlength: 100,
            minlength: 5,
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
        },
        difficulty: {
            type: Number,
            required: true,
            min: 1,
            max: 6,
        },
        accessories: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Accessory',
            }
        ]
        
    })

    const Cube = new mongoose.model('Cube', cubeSchema)

    module.exports = Cube;