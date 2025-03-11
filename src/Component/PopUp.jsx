import React, { useState } from 'react';
import './Popup.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Navigate,useNavigate } from 'react-router-dom';
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

  const addToCart = () => {
    const newProduct = {
      name: ele.name,
      price: ele.price,
      image: ele.image,
      quantity: count,
      totalPrice: total,
    };
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
  const addToFavorites = () => {
    const newFavBook = { name: ele.name, price: ele.price, image:ele.image, author:ele.author };
    const storedFavItems = JSON.parse(localStorage.getItem("favItems")) || [];

  
     if (!storedFavItems.some((item) => item.name === newFavBook.name)) {
          storedFavItems.push(newFavBook);
          localStorage.setItem("favItems", JSON.stringify(storedFavItems));
  
          Swal.fire({
            title: "Added to Favorites!",
            text: "Book has been successfully added to your favorites.",
            icon: "success",
            confirmButtonText: "OK",
          });
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
