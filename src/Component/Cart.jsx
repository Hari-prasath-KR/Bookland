import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import {  FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import Allheader from './Allheader';
import './Cart.css';

export default function Cart() {

  const ordernow = () => {
    navigate('/order-now', { state: { totalPrice } });
  };


  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemName) => {
    const updatedCart = cartItems.filter(item => item.name !== itemName);
    updateCartStorage(updatedCart);
  };

  const addMoreItem = (itemName) => {
    const updatedCart = cartItems.map(item =>
      item.name === itemName ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCartStorage(updatedCart);
  };

  const reduceQuantity = (itemName) => {
    const updatedCart = cartItems.map(item =>
      item.name === itemName ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) } : item
    );
    updateCartStorage(updatedCart);
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + (parseFloat(item.price) || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <>
      <header className='fixed-header'>
        <Allheader />
      </header>
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <button className="back-btn" onClick={() => navigate('/')}> <FaArrowLeft /> Continue Shopping </button>
            <h1><FaShoppingCart /> Your Cart</h1>
          </div>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <img src="./assets/homepageextraimg/empty-cart.png" alt="EmptyCart" />
              <p>Your cart is empty. Add items to continue.</p>
              <button className="shop-btn" onClick={() => navigate('/')}>Shop Now</button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.name} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-img" />
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <p>Price: ₹{parseFloat(item.price || 0).toFixed(2)}</p>
                      <div className="quantity-control">
                        <button onClick={() => reduceQuantity(item.name)}><CiCircleMinus /></button>
                        <span>{item.quantity || 1}</span>
                        <button onClick={() => addMoreItem(item.name)}><CiCirclePlus /></button>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.name)}><FaTrash /></button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h2>Order Summary</h2>
                <p>Total Items: {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}</p>
                <p>Total Price: <strong>₹{totalPrice}</strong></p>
                <button className="checkout-btn" onClick={ordernow}>Order Now</button>
              </div>
            </>
          )}
        </div>
      </div>
  
    </>
  );
}