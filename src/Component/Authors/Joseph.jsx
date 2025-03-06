import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './Authors.css'
import {josephimages} from '../Images/AuhtorsBooks'
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
        <img className='authorbg' src="./assets/Authors/josephbg.jpg" alt="Joseph Murphy" />
        <p className="about">Joseph Murphy (1898–1981) was a renowned author and New Thought minister celebrated for his teachings on the power of the subconscious mind. His most influential work, The Power of Your Subconscious Mind, emphasizes how positive thinking and belief can transform one's life.
         Murphy's practical and inspirational approach to harnessing mental power for personal success, healing, and spiritual growth has had a profound impact on self-help and motivational literature.
         Murphy is considered one of the front runners of affirmative-thinking philosophy.</p><hr style={{color:"black", borderRadius:"5px;"}}/>
         <br/>
         <h2 id="stateboard" style={{marginLeft:20}}>Books By Joseph Murphy</h2>
       <div className="home-content">

			{josephimages.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div>

      </div>
      {showPopup&&<Popup ele={currentEle} onClose={closePopup}/>}
      <div className="author-footer"><Footer/></div>
    </div>
  )
}

