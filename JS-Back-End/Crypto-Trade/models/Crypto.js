const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-catd', 'paypal'],
        required: true,
    },
    buyers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
})

const Crypto = new mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;

// •	Name - String (required),
// •	Image: String (required),
// •	Price: Number (required),
// •	Crypto Description: String (required),
// •	Payment Method: String (crypto-wallet, credit-card, debit-card, paypal) required,
// •	Buy a crypto - a collection of Users (a reference to the User model)
// •	Owner - object Id (a reference to the User model)
// Note:  When a user buys crypto, their id is added to that collection (Buy a crypto)
// Implement the entities with the correct data types.
