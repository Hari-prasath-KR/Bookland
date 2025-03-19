import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaTrash, FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import Allheader from "./Allheader";
import "./Cart.css";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getcart", {
          params: { user: user.email },
        });

        console.log("Fetched Cart Items from DB:", res.data);
        setCartItems(res.data);
        localStorage.setItem("cartItems", JSON.stringify(res.data));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [user]);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const removeFromCart = async (itemName) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCart);

    try {
      await axios.delete("http://localhost:3001/delcart", {
        data: { user: user.email, name: itemName },
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const addMoreItem = (itemName) => {
    const updatedCart = cartItems.map((item) =>
      item.name === itemName ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCartStorage(updatedCart);
  };

  const reduceQuantity = (itemName) => {
    const updatedCart = cartItems.map((item) =>
      item.name === itemName ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) } : item
    );
    updateCartStorage(updatedCart);
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + (parseFloat(item.price) || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  const ordernow = () => {
    navigate("/order-now", { state: { totalPrice } });
  };

  return (
    <>
      <header className="fixed-header">
        <Allheader />
      </header>
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <button className="back-btn" onClick={() => navigate("/")}> <FaArrowLeft /> Continue Shopping </button>
            <h1><FaShoppingCart /> Your Cart</h1>
          </div>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <img src="./assets/homepageextraimg/empty-cart.png" alt="EmptyCart" />
              <p>Your cart is empty. Add items to continue.</p>
              <button className="shop-btn" onClick={() => navigate("/")}>Shop Now</button>
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
