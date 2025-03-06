import React from 'react';
import './Register.css';
import Allheader from './Allheader';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
export default function Register() {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login'); 
  };
  const[uname, setUname] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
const  handleregister = (e)=>{
 e.preventDefault();
 axios.post('http://localhost:3001/Authentification',{uname,email,password})
 .then(result=>{console.log(result)
     if(result.data == "Mail already Exist"){
         alert("Mail already Exist");
     }
     else
    navigate('/login');
 }
)
 .catch(err=>console.log(err));
} 


  return (
    <>
      <Allheader />
      <div className="register-container">
        <div className="register-form-container">
          <h2>𝙲𝚛𝚎𝚊𝚝𝚎 𝚈𝚘𝚞𝚛 𝙰𝚌𝚌𝚘𝚞𝚗𝚝</h2>
          <form onSubmit={handleregister}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" value={uname}
              onChange={(e)=>setUname(e.target.value)} required></input>
              </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" value={email}  
              onChange={(e) => setEmail(e.target.value)} required autoComplete="email"></input>
               </div>

            <div className="form-group">
              <label>Password</label>
              
              <input type="password" placeholder="Enter your password" value={password} minLength={8} 
               onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password"></input>

            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" />
            </div>

            <button type="submit" className="register-button">Register</button>
            <div className="login">
              <p>
                Already have an account? <a href="#" onClick={login}>Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
