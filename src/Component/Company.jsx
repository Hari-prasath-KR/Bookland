import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

export default function Company() {
  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  };

  return (
    <div className="bookland-about-us-container">
      <div className="bookland-about-us-content">
        <a href='#log' className='logo' onClick={home}><img src="./assets/logofinal.jpg.png" alt="Bookland Logo" /></a>
        
        <h1>Welcome to Bookland – Your Online Book Haven</h1>
        
        <p>
          At Bookland, we bring the joy of reading to your fingertips. Whether you're a passionate book lover,
          an academic seeker, or a casual reader, our online bookstore is designed to offer a seamless, 
          immersive, and enriching experience.
        </p>
        <br/>
        <p>
          We curate a diverse collection of books from bestselling authors, timeless classics, and emerging 
          voices across various genres. From fiction and non-fiction to educational resources and rare 
          finds, Bookland is your go-to destination for every reading need.
        </p>
        <br/>
        <p>
          More than just a bookstore, we are a community. Explore, discover, and indulge in the world of words,
          all from the comfort of your home. With ethically sourced books, great deals, and a passion for 
          literature, we ensure every book you pick is a journey worth taking.
        </p>
        <br/>
        <p>
          Start your literary adventure with Bookland today—because every story matters. 📚✨
        </p><br/><br/>
        
        <h2 id="whyus">Why Us?</h2><br/>
        <p>
          At Bookland, we believe in delivering not just books but a delightful reading experience. Here's what makes us stand out:
        </p>
        <ul>
          <li><strong>Dynamic Catalogue:</strong> Our ever-expanding collection ensures that you find the latest releases, timeless classics, and hidden gems.</li> <br/>
          <li><strong>Genuine Book Guarantee:</strong> We provide only authentic and high-quality books, ensuring a trusted shopping experience.</li> <br/>
          <li><strong>Fast and Free Delivery:</strong> Enjoy quick and reliable shipping at no additional cost, bringing your favorite books right to your doorstep.</li> <br/>
          <li><strong>Competitive Pricing:</strong> Get the best deals and discounts, making reading affordable for everyone.</li> <br/>
        </ul>
        <br/><br/>
        <h2 id="our-technology">Our Technology</h2>
        <br/>
        <p>
          Our platform is built with advanced technology to provide a seamless and personalized book-buying experience:
        </p>
        <ul>
          <li><strong>Powerful Search:</strong> Easily find the books you love with our intelligent and intuitive search engine.</li> <br/>
          <li><strong>Rich Previews:</strong> Get a sneak peek into books before purchasing with detailed previews and summaries.</li> <br/>
          <li><strong>Your Bookshelf:</strong> Save and organize your favorite books in a personalized virtual bookshelf for easy access.</li> <br/>
          <li><strong>Personalization:</strong> Enjoy tailored book recommendations based on your reading preferences and past purchases.</li> <br/>
        </ul>
      </div>
    </div>
  );
}