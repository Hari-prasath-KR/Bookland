import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate=useNavigate();
  const joseph=()=>{
    navigate('/joseph-murphy');
  }
  const neville=()=>{
    navigate('/neville-goddard');
  }
  const sudha=()=>{
    navigate('/sudha-murty');
  }
  const ruskin=()=>{
    navigate('/ruskin-bond');
  }
  const osha=()=>{
    navigate('/osha');
  }
  const company=()=>{
    navigate('/company-about');
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Top genres</h3>
          <ul>
            <li>Academics</li>
            <li>Fiction</li>
            <li>Non Fiction</li>
            <li>Children</li>
            <li>Young Adults</li>
            <li>Languages</li>
            <li>OFFERS</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a  style={{color:"white", textDecoration:"none"}} href="#BestSellers">Bestsellers</a></li>
            <li><a style={{color:"white", textDecoration:"none"}}  href="#na">New Arrivals</a></li>
            <li><a style={{color:"white", textDecoration:"none"}} href="#yt">YT Educators</a></li>
            <li><a style={{color:"white", textDecoration:"none"}} href="#pre">Pre order</a></li>
            <li><a style={{color:"white", textDecoration:"none"}} >TopPublisers</a></li>
            <li><a style={{color:"white", textDecoration:"none"}} href="#mst">MostBuyed</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 >Company</h3>
          <ul>
            <li onClick={company}>About us</li>
            <li onClick={company}> Who we are</li>
            <li onClick={company}>Our Technology</li>
            <li onClick={company}>Our Catalogue</li>
          </ul>
        </div>
       
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Guest Order Tracking</li>
            <li>Track Orders</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return & Refund</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Top Authors</h3>
          <ul>
            <li onClick={joseph}>Joseph Murphy</li>
            <li  onClick={osha}>Osha</li>
            <li onClick={neville}>Neville Goddard</li>
            <li onClick={sudha}>Sudha Murty</li>
            <li onClick={ruskin}>Ruskin Bond</li>
           
          </ul>
        </div>
        <div className="footer-section">
          <h3>Experience The Bookland App</h3>
          <div className="app-buttons">
            <img src="./assets/gpay.svg" alt="Google Play" />
            <img src="./assets/gplay.svg" alt="App Store" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect with us</h3>
          <p>Email: hari@bookland.com</p>
          <p>Phone: +91 87785 26856 (11am to 7pm, Mon-Fri)</p>
         
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-icons">
          <div>
            <img src="./assets/mbooks.svg" alt="Books" />
            <p>Millions of books</p>
          </div>
          <div>
            <img src="./assets/gbooks.svg" alt="Genuine books" />
            <p>Genuine books</p>
          </div>
          <div>
            <img src="./assets/gpricing.svg" alt="Great pricing" />
            <p>Great pricing</p>
          </div>
          <div>
            <img src="./assets/delivery.svg" alt="Faster delivery" />
            <p>Faster delivery</p>
          </div>
        </div>
        
        <div className="follow">
         <center> <h5>Follow Us</h5>
          <div className="social-icons">
           <a style={{color:"Blue", textDecoration:"none"}} href="https://facebook.com" target="_blank" rel="noopener noreferer"><FaFacebook /></a>
           <a style={{color:"purple", textDecoration:"none"}} href="https://instagram.com" target="_blank" rel="noopener noreferer"><FaInstagram /></a>
           <a style={{color:"Blue", textDecoration:"none"}} href="https://twitter.com" target="_blank" rel="noopener noreferer"><FaTwitter /></a>  
          </div>
          </center>
        </div>
        <div className="copyright">
          <p>Copyright © 2025 by Bookland India</p>
        </div>
      </div>
    </footer>
  );
}
