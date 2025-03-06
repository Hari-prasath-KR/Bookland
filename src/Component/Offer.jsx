import React, { useState, useEffect } from "react";
import "./Offer.css";
import Header from "./Header";
import Bestsellers from "./Images/Bestsellers";
import Display from "./Display";
import Footer from "./Footer";
import Popup from "./PopUp";
export default function Offer() {
  const [showPopup, setShowPopup] = useState(false);
  const [offerCode, setOfferCode] = useState("");

  useEffect(() => {
    setShowPopup(true);
    generateOfferCode();
  }, []);

  const generateOfferCode=()=>{
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code="OFFER";
    for(let i=0;i<4;i++){
      code+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    setOfferCode(code);
  };
  
  const[showPopup2,setShowPopup2]=useState(false);
                   const[currentEle,setCurrentEle]=useState(null);
                   const ItemClick = (ele) => {
                    setShowPopup2(true);
                    setCurrentEle(ele);
                    console.log("Clicked",ele);
                };
                  
                   const closePopup2=()=>{
                  setShowPopup2(false);
                   }
  return (
    <>
      <div className="offer-header">
        <Header />
      </div>
      <div className="offer-content">
        <img id="obgimg" src="./assets/offer.jpg" alt="offer-image"></img>
        <img
          id="bestimg"
          src="./assets/bestsellers.png"
          alt="bestsellers"
          className="Bestimg"
        ></img>
        <br />
        <br />
        <h1 className="hfont">𝐁𝐞𝐬𝐭 𝐒𝐞𝐥𝐥𝐞𝐫𝐬</h1>
        <hr />
        <br />
        <div className="ohome-content">
          {Bestsellers.map((ele, idx) => (
            <Display
              key={idx}
              image={ele.image}
              name={ele.name}
              author={ele.author}
              price={ele.price}
              onClick={()=>ItemClick(ele)}
            />
          ))}
        </div>
        <img id="rom" src="./assets/lastbg.jpg" alt="romance" />
        <br/><br/>
        <img id="coupan-img" src="./assets/offers/4offer.jpg"></img>
        <br />
        <br />
        <h2>Shop By Category (Min 20% Off)</h2>
        <br /><br/>
        <div className="category">
          <div className="image-text">
            <img src="./assets/offers/catogary1.jpg" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="image-text">
            <img src="./assets/offers/catogory2.jpg" alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="image-text">
            <img src="./assets/offers/catogory3.jpg" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="image-text">
            <img src="./assets/offers/catogory4.jpg" alt="img4" />
            <p>Academics</p>
          </div>
        </div>
        <br />
        <h2>Shop By Discount</h2><br/><br/>
        <div className="shop-discount">
          <img src="./assets/offers/10-30.jpg" alt="10-30" />
          <img src="./assets/offers/30-50.jpg" alt="30-50" />
          <img src="./assets/offers/min50.jpg" alt="min 50" />
        </div>
        <br />
        <br />
        <h2>Publisher Value Picks</h2>
        <div className="offer-shop-discount">
          <img src="./assets/offers/pimg1.jpg" alt="10-30" />
          <img src="./assets/offers/pimg2.jpg" alt="30-50" />
          <img src="./assets/offers/pimg3.jpg" alt="min 50" />
          <img src="./assets/offers/pimg4.jpg" alt="10-30" />
          <img src="./assets/offers/pimg5.jpg" alt="30-50" />
          <img src="./assets/offers/pi,g6.jpg" alt="min 50" />
          <img src="./assets/offers/pimg7.jpg" alt="min 50" />
        </div>
        <br />
        <br />
        <div className="offer-lastimg">
          <img src="./assets/offers/offerlast.jpg" alt="offer-footer-image"></img>
        </div>
      </div>
        {showPopup2&&<Popup ele={currentEle} onClose={closePopup2}/>}
      <div className="offer-footer">
        <Footer />
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Special Offer!</h2>
            <p>
              Get 20% off on your next purchase! Use code:{" "}
              <strong>{offerCode}</strong>
            </p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}
