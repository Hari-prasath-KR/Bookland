import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './Authors.css'
import {sudha} from '../Images/AuhtorsBooks'
import Display from '../Display'
import Popup from '../PopUp'
export default function Sudha() {
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
        <img className='authorbg' src="./assets/Authors/sudha.png" alt="Sudha Murty" />
        <p className="about">Sudha Murty was born in 1950 in Shiggaon in north Karnataka. 
            She did her MTech in computer science and is now the chairperson of the Infosys Foundation. 
            A prolific writer in English and Kannada, she has written novels, technical books, travelogues, 
            collections of short stories and non-fictional pieces and four books for children. Her books have been translated 
            into all the major Indian languages. Sudha Murty was the recipient of the R.K. Narayan Award for Literature and the 
            Padma Shri in 2006 and the Attimabbe Award from the government of Karnataka for excellence in Kannada literature in 2011.
            </p><hr style={{color:"black", borderRadius:"5px;"}}/>
         <br/>
         <h2 id="stateboard" style={{marginLeft:20}}>Best Sellers</h2>
       <div className="home-content">

			{sudha.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div>

      </div>
      {showPopup&&<Popup ele={currentEle} onClose={closePopup}/>}
      <div className="author-footer"><Footer/></div>
    </div>
  )
}

