import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './Authors.css'
import {neville} from '../Images/AuhtorsBooks'
import Display from '../Display'
import Popup from '../PopUp'
export default function Neville() {
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
        <img className='authorbg' src="./assets/Authors/nevillebg.jpg" alt="Joseph Murphy" />
        <p className="about">Neville Goddard (1905–1972) was a prominent mystic and author known for his teachings on the power of imagination and the Law of Assumption.
             His philosophy centres on the idea that our thoughts and beliefs shape our reality, emphasizing that imagining desired outcomes with conviction can manifest one's goals. 
            Through works like The Power of Awareness and Feeling is the Secret, Goddard's insights have influenced the self-help and spiritual communities, advocating that inner transformation leads to external success.
            </p><hr style={{color:"black", borderRadius:"5px;"}}/>
         <br/>
         <h2 id="stateboard" style={{marginLeft:20}}>Neville Goddard</h2>
       <div className="home-content">

			{neville.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div>

      </div>
      {showPopup&&<Popup ele={currentEle} onClose={closePopup}/>}
      <div className="author-footer"><Footer/></div>
    </div>
  )
}

