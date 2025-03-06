import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './Authors.css'
import {ruskin} from '../Images/AuhtorsBooks'
import Display from '../Display'
import Popup from '../PopUp'
export default function Ruskin() {
 
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
        <img className='authorbg' src="./assets/Authors/ruskinbg.png" alt="Ruskin Bond" />
        <p className="about">Ruskin Bond's first novel, The Room on the Roof, written when he was seventeen, won the John Llewellyn Rhys Memorial Prize in 1957. 
            Since then he has written several novels (including Vagrants in the Valley, A Flight of Pigeons and Delhi Is Not Far), essays, poems and children's 
            books, many of which have been published by Penguin India. He has also written over 500 short stories and articles that have appeared in a number of 
            magazines and anthologies. He received the Sahitya Akademi Award in 1993 and the Padma Shri in 1999.</p><hr style={{color:"black", borderRadius:"5px;"}}/>
         <br/>
         <h2 id="stateboard" style={{marginLeft:20}}>Books By Ruskin Bond</h2>
       <div className="home-content">

			{ruskin.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div>

      </div>
      {showPopup&&<Popup ele={currentEle} onClose={closePopup}/>}
      <div className="author-footer"><Footer/></div>
    </div>
  )
}

