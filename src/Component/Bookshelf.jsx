import React, { useState, useEffect } from "react";
import Allheader from "./Allheader";
import "./Bookshelf.css";
import axios from "axios";

export default function Bookshelf() {
  const [favBooks, setFavBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchFavorites = async () => {
      try {
        const res = await axios.get("http://localhost:3001/getfavorites", {
          params: { user: user.email },
        });

        console.log("Fetched Favorites from DB:", res.data);

        setFavBooks(res.data);
        localStorage.setItem("favItems", JSON.stringify(res.data)); 
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [user]);

  const removeFromFavorites = async (name) => {
    const updatedFavBooks = favBooks.filter((book) => book.name !== name);
    setFavBooks(updatedFavBooks);

    try {
      await axios.delete("http://localhost:3001/delfavorites", {
        data: { user: user.email, name },
      });

      localStorage.setItem("favItems", JSON.stringify(updatedFavBooks));
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
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
              <h3 className="display-name">{book.name}</h3>
              <h4 className="display-author">{book.author}</h4>
              <button className="remove-btn" onClick={() => removeFromFavorites(book.name)}>
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
