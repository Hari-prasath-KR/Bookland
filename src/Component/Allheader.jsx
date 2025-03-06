import React from 'react';
import './Allheader.css';
import { useNavigate } from 'react-router-dom';

export default function Allheader() {
  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  };

  return (
    <div className="anavbar">
      <div className="aheader">
      <img src="/assets/logofinal.jpg.png" alt="BookLand Logo" id="logo" onClick={home} />
        <p className="header-text" >
          <b>𝔹𝕠𝕠𝕜𝕃𝕒𝕟𝕕</b>
         
        </p>
      </div>
    </div>
  );
}
