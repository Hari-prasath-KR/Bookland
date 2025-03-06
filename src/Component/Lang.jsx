import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './lang.css';
import '../index.css';
import langimg from './Images/langimg';
import Display from './Display'
import { HiArrowCircleRight } from "react-icons/hi";
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import PopUp  from './PopUp';
export default function Lang() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

   const[showPopup,setShowPopup]=useState(false);
                 const[currentEle,setCurrentEle]=useState(null);
                 const ItemClick = (ele) => {
                  setShowPopup(true);
                  setCurrentEle(ele);
                  console.log("Clicked", ele);
              };
                
                 const closePopup=()=>{
                setShowPopup(false);
                 }
  return (
    <div>
      <div className="lang-header"><Header/></div>
       <div className="lang-content">
        <img id="lbgimg" src="./assets/languages/langbg1.png" alt="altbg" /><br/><br/>
       <div className="sirukavithai">
       <nav className="lang-nav">
      <ul className="lang-list">
       <li ><a style={{color:"Black", textDecoration:"none"}} href="#tamilimg">Tamil</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#hindiimg">Hindi</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#malaimg">Malayalam</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#punimg">Punjabi</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#gujimg">Gujarati</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#maraimg">Marathi</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#benimg">Bengali</a></li>
      </ul>
    </nav>
       <img src="./assets/languages/siru.jpeg" alt="Sirukavithaikal" />
       <br/><br/>
       <h2>Sirukathaigal Short Stories In Tamil</h2>
       <div className="home-content">
			{langimg.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
       </div></div>
       <br/>
       <img id="hindiimg" src="./assets/languages/hindi.png" alt="Hindi" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/hindi1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/hindi2.png" alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/hindi3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/hindi4.png" alt="img4" />
            <p>Academics</p>
          </div>
       </div>
       <img id="gujimg" src="./assets/languages/gujarati.png" alt="Gujarati" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/guj1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/guj2.png "alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/guj3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/guj4.png" alt="img4" />
            <p>Academics</p>
          </div>
       </div>
       <img id="tamilimg" src="./assets/languages/tamil.png" alt="Tamil" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/hindi1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/hindi2.png "alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/hindi3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/hindi4.png" alt="img4" />
            <p>Young Adult</p>
          </div>
       </div>
       <br/><br/>
       <img className="lang-bgimg" src="./assets/languages/bg1.png" alt="Sirukavithaikal" /><br/><br/>
       <img id="malaimg" src="./assets/languages/malaya.png" alt="Malayalam" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/mala1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/mala2.png "alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/mala3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/mala4.png" alt="img4" />
            <p>Young Adult</p>
          </div>
       </div>
       <img id="maraimg" src="./assets/languages/marathi.png" alt="Marathi" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/marathi1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/marathi2.png "alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/marathi3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/marathi4.png" alt="img4" />
            <p>Young Adult</p>
          </div>
       </div><br/><br/>
       <img className="lang-bgimg" src="./assets/languages/bg2.png" alt="Sirukavithaikal" />
       <br/>
       <img id="benimg" src="./assets/languages/bengali.png" alt="Marathi" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/beng1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/beng2.png "alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/beng3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/beng4.png" alt="img4" />
            <p>Young Adult</p>
          </div>
       </div>
       <img id="gujimg" src="./assets/languages/gujarati.png" alt="Marathi" />
       <br/><br/>
       <div className="lang-hindi-content">
       <div className="limage-text">
            <img src="./assets/languages/guj1.png" alt="img1" />
            <p>Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/guj2.png "alt="img2" />
            <p>Non Fiction</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/guj3.png" alt="img3" />
            <p>Childrens</p>
          </div>
          <div className="limage-text">
            <img src="./assets/languages/guj4.png" alt="img4" />
            <p>Young Adult</p>
          </div>
       </div>
       <br/><br/>
       <h1 className='txt-lang' id="others">Other Languages</h1>
       <br/><br/>
       <div className="lang-category">
          <div className="lang-image-text">
            <img src="./assets/languages/italian.png" alt="img1" />
            <p>Italian <HiArrowCircleRight /></p>
          </div>
          <div className="lang-image-text">
            <img src="./assets/languages/chinese.png" alt="img2" />
            <p>Chinese <HiArrowCircleRight /></p>
          </div>
          <div className="lang-image-text">
            <img src="./assets/languages/portuguese.png" alt="img3" />
            <p>Portuguese <HiArrowCircleRight /></p>
          </div>
          <div className="lang-image-text">
            <img src="./assets/languages/dutch.png" alt="img4" />
            <p>Dutch <HiArrowCircleRight /></p>
          </div>
          <div className="lang-image-text">
            <img src="./assets/languages/latin.jpg" alt="img3" />
            <p>Latin <HiArrowCircleRight /></p>
          </div>
          <div className="lang-image-text">
            <img src="./assets/languages/vietnamese.png" alt="img4" />
            <p>Vietuamese <HiArrowCircleRight /></p>
          </div>
        </div>
       </div>
    {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
      <div className="lang-footer"><Footer/></div>
    </div>
  )
}
