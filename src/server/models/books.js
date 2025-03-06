const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  img: { type: String, required: true }, 
  image: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
