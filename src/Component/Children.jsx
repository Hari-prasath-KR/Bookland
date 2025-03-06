import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Children.css'
import '../index.css'
import Displayyt from './Displayyt'
import Display from './Display';
import { bedtime , ibg2 , gift ,giftb} from './Images/childrenimg'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import PopUp from './PopUp'
export default function Children() {
   const [img,steImg]=useState("bg1");
    var images=['bg1','bg2','bg3'];
  useEffect(()=>{
      const interval=setInterval(()=>{
        steImg((previous)=>{
          const curridx=images.indexOf(previous);
          const nxtidx=(curridx+1)%images.length;
          return images[nxtidx];
        });
      },3000);
      return ()=>{
        clearInterval(interval);
      }
    },{images});


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
    <>
         <div className="child-header"><Header/></div>
         <div className='child-img'>
             <img src={`./assets/children/${img}.png`} alt="body" className='bimg' />
          </div>
         <div className="child-content">
         
          <h1 className='efont'>Shop By Age</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/children/03.png" alt="img1" />
			<img src="./assets/children/35.png" alt="img2" />
			<img src="./assets/children/68.png" alt="img3" />
			<img src="./assets/children/912.png" alt="img4" />
		</div>
    <img className='ibg' src="./assets/children/ibg1.jpg" alt="bg1" />
   <br/><br/><br/>
          <div style={{gap:20}} className="child-category">
			<div><img src="./assets/children/ibg1.1.jpg" alt="img1" />
      <h3 className='child-txt-img'>First word with peppas Books Sets</h3>
      </div>
			<div><img src="./assets/children/ibg1.2.jpg" alt="img2" />
      <h3 className='child-txt-img'>Outdoor Fum with Peppas &Friends</h3></div>
			<div><img src="./assets/children/ibg1.3.jpg" alt="img3" />
      <h3 className='child-txt-img'>Ready for an Adventure with peppas</h3></div>
			<div><img src="./assets/children/ibg1.4.jpg" alt="img4" />
      <h3 className='child-txt-img'>Get set to learn number with peppa</h3></div>
		</div><br/><br/>
    <h1 className='efont'>Bedtime Stories</h1>
      <div className="child-img-content">
			{ bedtime.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <img className='ibg' src="./assets/children/ibg2.jpg" alt="bg1" />
      <br/><br/>
      <div className="child-img-content">
			{ ibg2.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
      <h1 className='efont'>Books By Type</h1>
      <br/><br/>
      <div style={{gap:20}} className="child-category-3">
			<img src="./assets/children/bbt1.png" alt="img1" />
			<img src="./assets/children/bbt2.png" alt="img2" />
			<img src="./assets/children/bbt3.png" alt="img3" />
		</div>
    <img className='ibg' src="./assets/children/ibg4.jpg" alt="bg1" />
    <h1 className='efont'>Gift A Book</h1>
    <div className="child-img-content">
			{gift.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
    <img className='ibg' src="./assets/children/ibg5.jpg" alt="bg1" />
    <h1 className='efont'>Top Children's Series For 'Lil Ones</h1>
    <div className="child-img-content">
			{giftb.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
    <img className='ibg' src="./assets/children/ibg6.png" alt="bg1" />
    <br/><br/>
    <h1 className='efont'>Editor's Picks</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/children/edi1.png" alt="img1" />
			<img src="./assets/children/edi2.png" alt="img2" />
			<img src="./assets/children/edi3.png" alt="img3" />
			<img src="./assets/children/edi4.png" alt="img4" />
		</div><br/>
    <h1 className='efont'>Characters Kids Love</h1><br/>
    <div className="child-category-8">
    <img src="./assets/children/c1.png" alt="img1" />
			<img src="./assets/children/c2.png" alt="img2" />
			<img src="./assets/children/c3.png" alt="img3" />
      <img src="./assets/children/c4.png" alt="img1" />
			<img src="./assets/children/c5.png" alt="img2" />
			<img src="./assets/children/c6.png" alt="img3" />
      <img src="./assets/children/c7.png" alt="img2" />
			<img src="./assets/children/c8.png" alt="img3" />
    </div>
    <img className='ibg' src="./assets/children/ibg7.png" alt="bg1" />
    <br/><br/>
    <h1 className='efont'>Best Deals For You</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/children/20.png" alt="img1" />
			<img src="./assets/children/25.png" alt="img2" />
			<img src="./assets/children/30.png" alt="img3" />
			<img src="./assets/children/352.png" alt="img4" />
		</div><br/>
    <img className='ibg' src="./assets/children/ibinal.png" alt="bg1" />
         </div>
          {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
         <div className="child-footer"><Footer/></div>
       </>
  )
}
