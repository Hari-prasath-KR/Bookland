import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Nonfiction.css'
import '../index.css'
import Displayyt from './Displayyt'
import Display from './Display';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import PopUp from './PopUp'
import {religion,computer,development,self,bio,economics,naward} from './Images/nonfiction'
export default function Nonfiction() {
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
      <div className="non-fiction-header"><Header/></div>
      <div className="non-fiction-header2">
        <img id="mainbg"src="./assets/nonfiction/bgmain.png" alt="nonfiction section" />
       
       
        <nav className="nfic-nav">
      <ul className="nfic-list">
       <li ><a style={{color:"Black", textDecoration:"none"}} href="#self">Self Help&Wellness</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#csit">Computers&IT</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#auto">Autobiographies</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#economics">Economics</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#bussdev">Business Development</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#rel">Religion</a></li>
      </ul>
    </nav>
         
        </div>
      <div className="non-fiction-content">
        <br/>
        <img className="nonimg"src="./assets/nonfiction/bgsub.png" alt="bg" />
        <br/><br/>
        <h1 className='efont' id="self">Self Help&Welleness</h1>
    <div className="home-content">
			{self.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
      <h1 className='efont' id="auto">AutoBiography</h1>
    <div className="home-content">
			{bio.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
        <h1 className='efont' id="trend">Trending Categories</h1><br/>
    <div style={{gap:20}} className="fic-category-3">
     <img src="./assets/nonfiction/first1.png" alt="img1" />
     <img src="./assets/nonfiction/first2.png" alt="img1" />
     <img src="./assets/nonfiction/first3.png" alt="img1" />
     </div>
     <br/><br/>
     <h1 className='efont'>Other Categories For You</h1>
  <div className="fict-category">
			<img src="./assets/nonfiction/sec1.png" alt="img1" />
			<img src="./assets/nonfiction/sec2.png" alt="img2" />
			<img src="./assets/nonfiction/sec3.png" alt="img3" />
			<img src="./assets/nonfiction/sec4.png" alt="img4" />
		</div><br/><br/>
    <h1 className='efont' id="csit">Computer&IT</h1>
    <div className="home-content">
			{computer.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
    <br/> <h1 className='efont'>Editor's Picks</h1>
		<br/>
    <div style={{gap:20}} className="fict-category">
			<div><img src="./assets/nonfiction/e1.jpg" alt="img1" />
      <h3 className='img-txt-fic'>Skill Up for The Workplace</h3></div>
			<div><img src="./assets/nonfiction/e2.jpg" alt="img1" />
      <h3 className='img-txt-fic'>Enterprenurial Success</h3></div>
			<div><img src="./assets/nonfiction/e3.jpg" alt="img1" />
      <h3 className='img-txt-fic'>How To Live and Think Better</h3></div>
      <div><img src="./assets/nonfiction/e4.jpg" alt="img1" />
      <h3 className='img-txt-fic'>Thrive Like a Champion</h3></div></div><br/><br/>
      <img className="nonimg"src="./assets/nonfiction/ibg2.png" alt="bg" /><br></br><br/>

      <h1 className='efont' id="economics">Economics</h1>
    <div className="home-content">
			{economics.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
     
      <h1 className='efont' id="bussdev">Business Development</h1>
    <div className="home-content">
			{development.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
      <h1 className='efont'>Best Deals For You</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/children/20.png" alt="img1" />
			<img src="./assets/children/25.png" alt="img2" />
			<img src="./assets/children/30.png" alt="img3" />
			<img src="./assets/children/352.png" alt="img4" />
		</div><br/><br/>
      <img className="nonimg"src="./assets/nonfiction/ibg3.jpg" alt="bg" />
      <br/><br/>
      <div className="home-content">
			{naward.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
      <div style={{gap:20}} className="fic-category-3">
     <img src="./assets/nonfiction/three1.png" alt="img1" />
     <img src="./assets/nonfiction/three2.png" alt="img1" />
     <img src="./assets/nonfiction/three3.png" alt="img1" />
     </div>
     <br/><br/>
     <h1 className='efont' id="rel">Religion</h1>
    <div className="home-content">
			{religion.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
     <h1 className='efont'>Non-Fiction Books In Other Languages</h1><br/><br/>
      <div style={{gap:20}} className="fic-category-3">
      <div><img src="./assets/nonfiction/four1.png" alt="img1" />
      <h3 className='img-txt-fic'>Hindi <HiArrowCircleRight /></h3></div>
			<div><img src="./assets/nonfiction/four2.png" alt="img1" />
      <h3 className='img-txt-fic'>Bengali <HiArrowCircleRight /></h3></div>
			<div><img src="./assets/nonfiction/four3.png" alt="img1" />
      <h3 className='img-txt-fic'>Tamil <HiArrowCircleRight /></h3></div>
     </div>
      </div>
        {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
    <div className="non-fiction-footer"><Footer/></div>
    </>
  )
}
