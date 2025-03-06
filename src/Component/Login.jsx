import React from 'react';
import './Login.css';
import Allheader from './Allheader';
import { Link, useNavigate ,useLocation} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Login() {
 const navigate=useNavigate();
  const register=()=>{
    navigate('/register');
  }
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const handlelogin=(e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result.data);

       if(result.data.status == "Success"){
           alert(result.data.status);
           localStorage.setItem("user",JSON.stringify({email,uname:result.data.uname}))
       navigate(frompage);
   window.location.reload();
   }

   else {
       alert(result.data);
   }})
    .catch(err => console.log(err));
}


const frompage = location.state?.from||"/";

  return (
    <>
 <Allheader/>
    <div className="lbody">
   {/* <img src="./assets/loginbg.jpg"alt="body" className='loginimg' /> */}
    <div className="loginhead">
      <form action="">
        <h1><b>𝙻𝚘𝚐𝚒𝚗</b></h1>
        <div className="inputbx">
        <input type="email" placeholder="Username / E-mail" value={email} 
        onChange={(e) => setEmail(e.target.value)} required autoComplete="email"></input>
        </div>
        <div className="inputbx">
        <input type={showPassword ? "text" : "password"} placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password"/>
        <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
        </div>
        <div className="forgotpass">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button className="login-button"onClick={handlelogin} type="submit">Login</button>
        <div className="register">
          <p>
            Don't have an account? <a href="#" onClick={(register)}>Register</a>
          </p>
        </div>
      </form>
    </div></div>
    </>
  );
}
