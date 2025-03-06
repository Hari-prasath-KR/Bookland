import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './Authors.css'
import {oshaa} from '../Images/AuhtorsBooks'
import Display from '../Display'
import Popup from '../PopUp'
export default function Joseph() {
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
      <div className="author-header"><Header/></div>
      <div className="author-body"> <Body/></div>
      <div className="author-content">
        <img className='authorbg' src="./assets/Authors/obg.jpg" alt="osha" />
        <p className="about">Osho, née Rajneesh Chandra Mohan, was a visionary Indian spiritual teacher and philosopher known for his revolutionary ideas on meditation, love and personal
             freedom. His teachings blend Eastern mysticism with contemporary thought, challenging conventional norms. He advocated for a life of mindfulness, self-discovery and openness,
              encouraging individuals to transcend conventional boundaries. Osho's books and discourses like Tantric Transformation- When Love Meets Meditation, Sex Matters: From Sex to
               Superconsciousness, Tao Upanishad and Krishna: The Man and His Philosophy have inspired millions globally, exploring profound themes such as consciousness and personal transformation. 
               Osho's legacy continues to inspire and fascinate, making him a prominent figure in modern spirituality.</p><hr style={{color:"black", borderRadius:"5px;"}}/>
         <br/>
         <h2 id="stateboard" style={{marginLeft:20}}>Books By Osha</h2>
       <div className="home-content">

			{oshaa.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div>

      </div>
      {showPopup&&<Popup ele={currentEle} onClose={closePopup}/>}
      <div className="author-footer"><Footer/></div>
    </div>
  )
}

