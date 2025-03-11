const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uname: String,
    email: String,
    password: String,
    cart: [
        {
            bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
            quantity: { type: Number, default: 1 }
        }
    ],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }]
});

const Usermodel = mongoose.model("users", UserSchema);
module.exports = Usermodel;
