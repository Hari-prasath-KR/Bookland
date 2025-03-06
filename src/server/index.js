const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const Usermodel = require('./models/users')
const BookModel = require("./models/books");
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

app.listen(3001,() =>{
    console.log("server run");
})                                                                                                            

