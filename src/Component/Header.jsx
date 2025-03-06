import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RiBookShelfLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?searchterm=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className='navbar'>
      <div className="header">
        <img src="./assets/logofinal.jpg.png" alt="logo" id="img" onClick={() => navigate("/")} />
        <p id="txt" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><b>𝔹𝕠𝕠𝕜𝕃𝕒𝕟𝕕</b></p>
      </div>

      <div className="search-container">
        <input type="search" className="search-input" placeholder="Search Books, Authors..." value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          <img src="./assets/searchIcon.png" alt="Search" className="search-icon" />
        </button>
      </div>

      <div className="navsign">
        <a href="#"><IoMdNotificationsOutline style={{ fontSize: '30px' }} /></a>
        <a onClick={() => navigate('/bookshelffav')}><RiBookShelfLine style={{ fontSize: '30px' }} /></a>
        <a onClick={() => navigate('/cart')}><PiShoppingCartSimpleFill style={{ fontSize: '30px' }} /></a>

        {user ? (
          <div className="user-profile">
            <CgProfile style={{ fontSize: '30px' }} />
            <div className="user-drop">
              <p>Welcome, <br /><b>{user.uname}</b></p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <a onClick={() => navigate('/login')}><CgProfile style={{ fontSize: '30px' }} /></a>
        )}
      </div>
    </div>
  );
}
