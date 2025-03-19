import React, { useEffect, useState } from "react";
import "../index.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Bookshelf from "./Bookshelf";

export default function Display({ image, name, author, price, onClick }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("user");
    if (store) {
      setUser(JSON.parse(store));
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchFavorites = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getfavorites", {
          params: { user: user.email },
        });
        console.log("Fetched Favorites from DB:", res.data);
        setFavorites(res.data);
        localStorage.setItem("favItems", JSON.stringify(res.data));
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };

    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getcart", {
          params: { user: user.email },
        });
        console.log("Fetched Cart from DB:", res.data);
        setCart(res.data);
        localStorage.setItem("cartItems", JSON.stringify(res.data));
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchFavorites();
    fetchCart();
  }, [user]);

  const addToCart = async () => {
    if (!user) {
      Swal.fire({
        title: "Login Required!",
        text: "You need to log in to add books to cart.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    const newCartItem = { name, price, image, author, quantity: 1 };
    if (cart.some((item) => item.name === newCartItem.name)) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This book is already in your cart.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; 
    }
    try {
      const response = await axios.post("http://127.0.0.1:3001/cart", {
        user: user.email,
        newCartItem,
      });
      const updatedCart = [...cart, response.data];
      setCart(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  
      Swal.fire({
        title: "Added to Cart!",
        text: "Book has been successfully added to your cart.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
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
        const response = await axios.post("http://127.0.0.1:3001/favorites", {
          user: user.email,
          newFavBook: newFavBook,
        });
        const updatedFavorites = [...favorites, response.data];
        setFavorites(updatedFavorites);
        localStorage.setItem("favItems", JSON.stringify(updatedFavorites));
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
      <img src={image} alt={name} className="display-image" onClick={onClick} />
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
