import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { acadamic, scltxt, examprep, higheredu, icsc, cbsc, state, olypaid, sample, mock, QB } from './Images/Academicimg';
import bestseller from './Images/Bestsellers';
import { bedtime, ibg2, gift, giftb } from './Images/childrenimg';
import newArrival from './Images/Content';
import { cls, award, fromance, fclass, indianwrite, fsff, action, crime } from './Images/fictionimg';
import langimg from './Images/langimg';
import Most from './Images/Most';
import { religion, computer, development, self, bio, economics, naward } from './Images/nonfiction';
import preorder from './Images/Preorder';
import { sf, fictiony, disney, dy, young, footer, art, tech, family, romance, cm, scf } from './Images/youngadult';
import {josephimages,oshaa,neville,sudha,ruskin} from './Images/AuhtorsBooks';
import Header from "./Header";
import Footer from "./Footer";
import Display from "./Display"; 
import "../index.css";
import './Booklist.css'
import Popup from "./PopUp";
const fallbackImage = "/assets/fallback.jpg"; 
const getImagePath = (book) => {
  if (!book.img || !book.folder) return fallbackImage; 
  return `/assets/${book.folder}/${book.img}`; 
};

const Booklist = () => {
  const allBooks = [
    ...state, ...acadamic, ...scltxt, ...examprep, ...newArrival, ...langimg, ...Most,
    ...higheredu, ...icsc, ...cbsc, ...olypaid, ...sample, ...mock, ...QB, ...bestseller,
    ...bedtime, ...ibg2, ...gift, ...giftb, ...preorder,...josephimages,...oshaa,...neville,...sudha,...ruskin,
    ...cls, ...award, ...fromance, ...fclass, ...indianwrite, ...fsff, ...action, ...crime,
    ...religion, ...computer, ...development, ...self, ...bio, ...economics, ...naward,
    ...sf, ...fictiony, ...disney, ...dy, ...young, ...footer, ...art, ...tech, ...family, ...romance, ...cm, ...scf,
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("searchterm")?.toLowerCase() || "";

  const availbook = allBooks.filter(
    (book) =>
      book.name?.toLowerCase().includes(searchQuery) ||
      book.author?.toLowerCase().includes(searchQuery)
  );
  
  
    const[showPopup,setShowPopup]=useState(false);
                 const[currentEle,setCurrentEle]=useState(null);
                 const ItemClick = (book) => {
                  setShowPopup(true);
                  setCurrentEle(book);
                  console.log("Clicked", book);
              };
                
                 const closePopup=()=>{
                setShowPopup(false);
                 }

  return (
    <div>
      <div className="search-header">
        <Header />
      </div>
      <div className="search-content">
        <h1 className="heading-primary">Book List</h1>
        {searchQuery && (
          <h2 className="heading-secondary">Showing results for: "{searchQuery}"</h2>
        )}

        <div className="home-content">
          {availbook.length > 0 ? (
            availbook.map((book, idx) => (
              <Display 
                key={idx} 
                image={getImagePath(book)} 
                name={book.name || "Unknown Title"} 
                author={book.author || "Unknown"} 
                price={book.price || "N/A"} 
                onClick={()=>ItemClick(book)}
              />
            ))
          ) : (
            <div className="no-rec-content">
            <img src="./assets/homepageextraimg/NoResults.png" alt="No Record Found" id ="no-rec-img"/>
           
            <p className="text">No books found for "{searchQuery}"</p></div>
          )}
        </div>
      </div>
         {showPopup&&<Popup ele={currentEle} onClose={closePopup}/>}
      <div className="search-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Booklist;
