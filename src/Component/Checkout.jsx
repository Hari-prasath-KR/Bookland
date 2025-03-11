import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Checkout.css';
import Header from './Header'
import Payment from "./Payment";
const Checkout=({}) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const total = parseFloat(location.state?.totalPrice) || 0;  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData((prev) => ({
        ...prev,
        firstName: storedUser.uname || "",
         email: storedUser.email || "", 
      }));
    }
    setLoad(false);
  }, []);

  useEffect(() => {
    if (!load && !user) {
      alert("Login to continue");
      navigate("/login", { state: { from: location.pathname } });
    }
  }, [load, navigate, user, location.pathname]);
  const calculategst=(amount) => {
    return (amount/100)*12;
  };
  const calculatefee=(amount)=>{
    return (amount/250)*10;
  }
  const calculatedis=(amount)=>{
    return (amount/1000)*81.50;
  }
  const [formData, setFormData] = useState({
    firstName: "",
    email:"", 
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    
  });
  const orderDetails = {
    product: "Total Price",
    price:total, 
    handlingFee: calculatefee(total),     
    gst: calculategst(total),
    discount:calculatedis(total),
    finaltotal: total + calculategst(total) +calculatefee(total)-calculatedis(total),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Billing details submitted successfully!");
  };
  const payment=()=>{
    navigate('/payment',{state:{user,finaltotal}})
  }
  return (
    <>
    <div className="billing-header"><Header/></div>
    <div className="checkout-main-container">
    <div className="billing-container">
      <h2>Billing Details</h2>
      <p>
        Bookland collects and uses personal data in accordance with our{" "}
        <a href="#">Privacy Policy</a>. By creating an account, you agree to our{" "}
        <a href="#">Terms and Conditions</a>.
      </p>

      <form onSubmit={handleSubmit} className="billing-form">
        <div className="form-group2">
          <label>First Name *</label>
          <input type="text" name="firstName" defaultValue={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group2">
          <label>Email</label>
          <input type="email" name="Email" defaultValue={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group2">
          <label>Country *</label>
          <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Russia">Russia</option>
          <option value="South Korea">South Korea</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="Singapore">Singapore</option>
          <option value="South Africa">South Africa</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Switzerland">Switzerland</option>
         
        </select>
        </div>

        <div className="form-group2">
          <label>Address Line 1 *</label>
          <input type="text" name="address1" defaultValue={formData.address1} onChange={handleChange} required />
        </div>

        <div className="form-group2">
          <label>Address Line 2</label>
          <input type="text" name="address2" defaultValue={formData.address2} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group2">
            <label>City *</label>
            <input type="text" name="city" defaultValue={formData.city} onChange={handleChange} required />
          </div>

          <div className="form-group2">
            <label>State / Province *</label>
            <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
           <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
           <option value="Sikkim">Sikkim</option>
           <option value="Tamil Nadu">Tamil Nadu</option>
           <option value="Telangana">Telangana</option>
           <option value="Tripura">Tripura</option>
           <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Chandigarh">Chandigarh</option> 
          <option value="Delhi">Delhi</option>
         <option value="Puducherry">Puducherry</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Ladakh">Ladakh</option>
         </select>
          </div>

          <div className="form-group2">
            <label>Zip / Postal Code</label>
            <input type="text" name="zip" defaultValue={formData.zip} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">Save and Continue</button>
      </form>
      <br/><br/>
      
    </div>
    <div className="order-summary">
      <h3 id="order">Order Summary</h3>
      <div className="order-item">
        <span>{orderDetails.product}</span>
        <span>₹{orderDetails.price.toFixed(2)}</span>
      </div>
      <div className="order-item">
        <span>Handling Fee:</span>
        <span>₹{orderDetails.handlingFee.toFixed(2)}</span>
      </div>
      <div className="order-item">
        <span>GST:</span>
        <span>₹{orderDetails.gst.toFixed(2)}</span>
      </div>
      <div className="order-item">
        <span>Discount:</span>
        <span style={{color:"green"}}>-₹{orderDetails.discount.toFixed(2)}</span>
      </div>
      <hr />
      <div className="order-total">
        <strong>Total:</strong>
        <strong>₹ {orderDetails.finaltotal.toFixed(2)}</strong>
      </div>
      <div className="coupon">Congrats! ₹{orderDetails.discount.toFixed(0)} saved on this order</div>
    <hr/><hr/>
   <div className="payment-details">
   <form onSubmit={(e)=>{
        e.preventDefault()
        payment()
      }}>
      <h2><center>Payment Details</center></h2>
      <button  type="submit" >Proceed</button>
      </form></div> </div></div>
    </>
  );
};

export default Checkout;
