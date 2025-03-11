import React, { useEffect, useState } from "react";
import "../index.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Bookshelf from "./Bookshelf";


export default function Display({ image, name, author, price,onClick}) {

  const navigate = useNavigate();

  const [user,setUser] = useState(null);

  useEffect(()=>{
    const store = localStorage.getItem("user");
    if(store){
        setUser(JSON.parse(store));
    }
  },[])

  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    if (!user) return;
  
    const fetchFavorites = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getfavorites", {
          params: { user: user.email },
        });
  
        console.log("Fetched Favorites from DB:", res.data);
  
        setFavorites(res.data); // Update state
        localStorage.setItem("favItems", JSON.stringify(res.data)); // Store in local storage
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };
  
    fetchFavorites();
  }, [user]); // Fetch whenever 'user' changes


const addToCart = () => {
  const newProduct = { name, price, image };
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (!storedCartItems.some((item) => item.name === newProduct.name)) {
    storedCartItems.push(newProduct);
    localStorage.setItem("cartItems", JSON.stringify(storedCartItems));

    Swal.fire({
      title: "Added to Cart!",
      text: "Book has been successfully added to your cart.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else {
    
    Swal.fire({
      title: "Already in Cart!",
      text: "This book is already in your cart.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  }
};



const addToFavorites = async () => {
  if (!user) {
    Swal.fire({
      title: "Login Required!",
      text: "You need to log in to add books to favorites.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  const newFavBook = { name, price, image, author };

  if (!favorites.some((item) => item.name === newFavBook.name)) {
    try {
      const response = await axios.post('http://127.0.0.1:3001/favorites', { 
        user: user.email, 
        newFavBook: newFavBook 
      });

      const updatedFavorites = [...favorites, response.data]; // Corrected: Define updatedFavorites here
      setFavorites(updatedFavorites);
      localStorage.setItem("favItems", JSON.stringify(updatedFavorites)); // Move inside try block

      Swal.fire({
        title: "Added to Favorites!",
        text: "Book has been successfully added to your favorites.",
        icon: "success",
        confirmButtonText: "OK",
      });

    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  } else {
    Swal.fire({
      title: "Already in Favorites!",
      text: "This book is already in your favorites.",
      icon: "warning",
      confirmButtonText: "OK",
    });
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
