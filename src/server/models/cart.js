const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: { type: String, required: true },
    name: { type: String, required: true },
    author : { type: String, required: true},
    quantity : { type: Number, required: true},
    image: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', CartSchema);