import React from "react";
import "../index.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Display({ image, name, author, price,onClick}) {

  const navigate = useNavigate();

 

const addToCart = () => {
  const newProduct = { name, price, image };
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (!storedCartItems.some((item) => item.name === newProduct.name)) {
    storedCartItems.push(newProduct);
    localStorage.setItem("cartItems", JSON.stringify(storedCartItems));

    // ✅ Success Alert
    Swal.fire({
      title: "Added to Cart!",
      text: "Book has been successfully added to your cart.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else {
    // ❌ Warning Alert
    Swal.fire({
      title: "Already in Cart!",
      text: "This book is already in your cart.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  }
};

  const addToFavorites = () => {
    const newFavBook = { name, price, image, author };
    const storedFavItems = JSON.parse(localStorage.getItem("favItems")) || [];

  
    if (!storedFavItems.some((item) => item.name === newFavBook.name)) {
      storedFavItems.push(newFavBook);
      localStorage.setItem("favItems", JSON.stringify(storedFavItems));
      alert("Book added to favorites!");
    } else {
      alert("This book is already in your favorites!");
    }
  };

  return (
    <div className="display-card">
      <img src={image} alt={name} className="display-image"  onClick={onClick}/>
      <div className="display-info">
        <h3 className="display-name" onClick={onClick}>{name}</h3>
        <h3 className="display-author" onClick={onClick}>{author}</h3>
        <p className="display-price" onClick={onClick}>Price: ₹{price}</p>
        <div className="d-btn">
          <button className="add-to-fav" onClick={addToFavorites}>
            <i>
              <FaRegHeart />
            </i>
          </button>
          <button className="add-to-cart" onClick={addToCart}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
