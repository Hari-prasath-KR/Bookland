const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const Usermodel = require('./models/users')
const BookModel = require("./models/books");
const FavoriteModel = require("./models/fav");
const Razorpay = require("razorpay");
const bodyparser = require("body-parser")
require("dotenv").config();
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyparser.json());

mongoose.connect("mongodb://127.0.0.1:27017/Bookland")

app.post("/login",(req,res) =>{
  const{email,password}= req.body;
  Usermodel.findOne({email:email})
  .then(users=>{
    if(users){
    if(users.password==password){
      res.json({status:"Success",uname:users.uname});
    }
    else res.json("Incorrect password");
  }
  else res.json("no record exited");
})
.catch(err => console.log(err))
})

app.post("/Authentification",(req,res)=>{
  const {name,email,password} = req.body;
  Usermodel.findOne({email:email})
  .then(user=>{
    if(user){
      res.json("Mail already Exist");
    }
    else{
    Usermodel.create(req.body)
      .then(users => res.json(users))
      .catch(err => res.json(err))
    }
  })
})

app.post("/addBook", (req, res) => {
  const { name, author, img, image, price, rating, ownerKey } = req.body;

  if (ownerKey !== process.env.OWNER_SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  BookModel.create({ name, author, img, image, price, rating })
    .then((book) => res.json({ message: "Book added successfully", book }))
    .catch((err) => res.status(500).json(err));
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, 
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, 
      currency: "INR",
      receipt: "order_rcptid_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/favorites", async (req, res) => {
  try {
    const { user, newFavBook } = req.body;
     
    if (!user || !newFavBook || !newFavBook.name) {
      return res.status(400).json({ error: "Missing user or item name" });
    }

    const existingFavorite = await FavoriteModel.findOne({ user, name: newFavBook.name });
    if (existingFavorite) {
      return res.json({ message: "Item already in favorites" });
    }

    const newFavorite = await FavoriteModel.create({
      user: user,
      name: newFavBook.name,
      author:newFavBook.author,
      image: newFavBook.image,
      price: newFavBook.price,
    });

    res.json(newFavorite);
  } catch (err) {
    console.error("Error in /favorites:", err);
    res.status(500).json({ error: err.message });
  }
});

app.delete("/delfavorites", async (req, res) => {
  try {
    const { user, name } = req.body;
    await FavoriteModel.findOneAndDelete({ user:user, name:name });
    res.json("Item removed from favorites");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/getfavorites", async (req, res) => {
  try {
    const { user} = req.query;
    const favorites = await FavoriteModel.find({ user:user });
    res.json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.listen(3001,() =>{
    console.log("server run");
})                                                                                                            

