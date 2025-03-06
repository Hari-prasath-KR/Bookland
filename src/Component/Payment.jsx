import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const {user,total} = location.state || {}


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay SDK Loaded");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/create-order", { amount: total||500 });
      const options = {
        key: "rzp_test_FQu2cafqnWhiPC", 
        amount: data.amount,
        currency: "INR",
        name: "Star rentals Rental Service",
        description: "Payment for Rental",
        order_id: data.id,
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: user.uname,
          email: user.email,
          contact: "9876543210",
        },
        theme: {
          color: "#6a11cb",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in payment:", error);
    }
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;