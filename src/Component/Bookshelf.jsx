import React, { useState, useEffect } from "react";
import Allheader from "./Allheader";
import "./Bookshelf.css";

export default function Bookshelf() {
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    const storedFavItems = JSON.parse(localStorage.getItem("favItems")) || [];
    setFavBooks(storedFavItems);
  }, []);

  const removeFromFavorites = (indexToRemove) => {
    const updatedFavBooks = favBooks.filter((_, index) => index !== indexToRemove);
    setFavBooks(updatedFavBooks);
    localStorage.setItem("favItems", JSON.stringify(updatedFavBooks));
  };

  return (
    <div>
      <div className="bshelf-header">
        <Allheader />
      </div>
     
      <div className="fav-books-list">
      <div className="fav-content"><h2>
        <center>𝐅𝐚𝐯𝐨𝐫𝐢𝐭𝐞𝐬</center>
      </h2><br/></div>
       {favBooks.length > 0 ? (
          favBooks.map((book, index) => (
            <div key={index} className="fav-book-card">
              <img src={book.image} alt={book.name} className="fav-book-image" />
              <h3>{book.name}</h3>
              <h4>{book.author}</h4>
              <button className="remove-btn" onClick={() => removeFromFavorites(index)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No favorite books added yet.</p>
        )}
      </div>
    </div>
  );
}
