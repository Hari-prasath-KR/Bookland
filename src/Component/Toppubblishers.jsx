import React from 'react';
import Allheader from './Allheader';
import Header from './Header';
import '../index.css';
import './Toppublishers.css';
import topimg from './Images/Topimg';
import Displayyt from './Displayyt';

export default function Home() {
  return (
    <div className="thome-container">
      <div className="tnavbar">
        <Header/>
      </div>

      <div className="top-content">
        <h1 className="hfont">Top Publishers</h1>

        <div className="thome-content">
          {topimg.map((ele, idx) => (
            <div className="publisher-card" key={idx}>
              <Displayyt image={ele.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
