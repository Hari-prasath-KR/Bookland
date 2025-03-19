import React, { useState,useEffect } from 'react';
import './Popup.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Navigate,useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
export default function Popup({ ele, onClose }) {
  const navigate = useNavigate(); 
  const rating=4;
  const [count, setCount] = useState(ele.quantity || 1);
  const [total, setTotal] = useState(ele.totalPrice || ele.price);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setTotal((prevTotal) => prevTotal + ele.price);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotal((prevTotal) => prevTotal - ele.price);
    }
  };

  const [user,setUser] = useState(null);
  
    useEffect(()=>{
      const store = localStorage.getItem("user");
      if(store){
          setUser(JSON.parse(store));
      }
    },[])
  
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
   
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

  const newCartItem = { 
    name: ele.name, 
    price: ele.price, 
    image: ele.image, 
    author: ele.author, 
    quantity: count 
  };

  // Check if the book is already in the cart
  if (cart.some((item) => item.name === newCartItem.name)) {
    Swal.fire({
      title: "Already in Cart!",
      text: "This book is already in your cart.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return; // Stop execution if item already exists
  }

  try {
    await axios.post("http://127.0.0.1:3001/cart", { 
      user: user.email, 
      newCartItem 
    });

    const updatedCart = [...cart, newCartItem]; // Append new item correctly
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
  
    const newFavBook = { 
      name: ele.name, 
      price: ele.price, 
      image: ele.image, 
      author: ele.author 
    };
  
    if (!favorites.some((item) => item.name === newFavBook.name)) {
      try {
        await axios.post('http://127.0.0.1:3001/favorites', { 
          user: user.email, 
          newFavBook 
        });
  
        const updatedFavorites = [...favorites, newFavBook]; // Append book correctly
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
  


    const totalPrice = (count, price) => {
    return count * price;
    };

    const addtobilling = () => {
      console.log("Navigating with count:", count);
    navigate('/order-now', { state: { totalPrice: totalPrice(count, ele.price) } });
    };
    return (
    <div className='pop-overlay'>
      <div className="pop-content">
        <button className='cls-btn' onClick={onClose}>
          <IoCloseCircleOutline />
        </button>

        <div className="pop-layout">
          <div className="pop-left">
            {ele.image && <img src={ele.image} alt={ele.name} />}
          </div>

          <div className="pop-center">
            <h2 className="book-title">{ele.name}</h2>
            <p className="author">by <span>{ele.author}</span></p>
            <div className="language-badge">{ele.language || "ENGLISH"}</div>
            
            <div className="features">
              <div className="feature">
                <img src="./assets/homepageextraimg/pop1.svg" alt="Piracy-free" />
                <p>Piracy-free</p>
              </div>
              <div className="feature">
                <img src="./assets/homepageextraimg/pop2.svg" alt="Assured Quality" />
                <p>Assured Quality</p>
              </div>
              <div className="feature">
                <img src="./assets/homepageextraimg/pop3.svg" alt="Secure Transactions" />
                <p>Secure Transactions</p>
              </div>
              <div className="feature">
                <img src="./assets/homepageextraimg/pop4.svg" alt="Fast Delivery" />
                <p>Fast Delivery</p>
              </div>
              <div className="feature">
                <img src="./assets/homepageextraimg/pop5.svg" alt="Sustainably Printed" />
                <p>Sustainably Printed</p>
              </div>
            </div>
            <p className="price">Price:₹{ele.price}</p>
            <div className="star-rating">
           <h3>{ele.rating.toFixed(1)}</h3>
  
           {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
    
            return (
              <span key={index}>
                {ele.rating >= starValue ? (
                  <FaStar className="star full" />
                ) : ele.rating >= starValue - 0.5 ? (
                  <FaStarHalfAlt className="star half" />
                ) : (
                  <FaRegStar className="star empty" />
                )}
              </span>
            );
          })}
        </div>

          </div>
          
          <div className="pop-right">
            <div className="quantity-box">
              <p>Quantity:</p>
              <div className="count-btn">
                <button onClick={decrement}><CiCircleMinus /></button>
                <span>{count}</span>
                <button onClick={increment}><CiCirclePlus /></button>
              </div>
            </div>

            <button className="confirm-btn" onClick={addToCart}>
              ADD TO CART
            </button>
            <button className="buy-btn"  onClick={addtobilling}>
              BUY NOW
            </button>
            <button className="confirm-btn" onClick={addToFavorites} >
             ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
