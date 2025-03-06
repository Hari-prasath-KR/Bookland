import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Academics.css';
import '../index.css'
import Displayyt from './Displayyt'
import Display from './Display';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {acadamic,scltxt,examprep,higheredu,icsc,cbsc,state,olypaid,sample, mock , QB} from './Images/Academicimg';
import PopUp from './PopUp'
export default function Academics() {
  const location = useLocation();
  const[showPopup,setShowPopup]=useState(false);
  const[currentEle,setCurrentEle]=useState(null);
  
    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    
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
      <div className="acad-header">
        <Header/>
      </div>
      <div className="acad-content">
        <img id="abg" src="./assets/Academics/bgacad.jpeg" alt="A to Z" /><br/><br/><br/><br/>
        <div className="a3-bg">
       <div className="aimage-text">
            <img src="./assets/Academics/a1bg3.jpg" alt="img1" />
            <p>School Books</p>
          </div>
          <div className="aimage-text">
            <img src="./assets/Academics/a1bg3.jpg "alt="img2" />
            <p>Government Exams</p>
          </div>
          <div className="aimage-text">
            <img src="./assets/Academics/a1bg3.jpg" alt="img3" />
            <p>Exam prep</p>
          </div>
          <div className="aimage-text">
            <img src="./assets/Academics/a1bg3.jpg" alt="img4" />
            <p>Higher Education</p>
          </div>
       </div>
       
       <div className="books-by-cato">
          <h3 id="subh3">Books By Subjects</h3>
          <div className="yt-content">
			{acadamic.map((ele, idx) => (
            <Displayyt key={idx} image={ele.image}/>
          ))
       }</div>
       </div>
       <div className="cls1012">
        <img src="./assets/Academics/cls1012.jpg" alt="class 10 12" />
        <img src="./assets/Academics/cl10122.jpg" alt="class 10 12" />
        <img src="./assets/Academics/cl10123.jpg" alt="class 10 12" />
       </div>
       <img id="top-search" src="./assets/Academics/topscl.jpg" alt="class 10 12" /><br/><br/>
       <h2 id="icsc" style={{marginLeft:20}}>ICSE Books</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{ icsc.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div><br/><br/>
     <h2  id="cbsc"style={{marginLeft:20}}>CBSC Books</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{ cbsc.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div><br/><br/>
       <h2 id="stateboard" style={{marginLeft:20}}>State Board Books</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{state.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div><br/><br/>
       <h2 id="olympaid" style={{marginLeft:20}}>Olympiad Books</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{olypaid.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div>
        <img id="abg" src="./assets/Academics/studyaids.jpg" alt="Study Aids" /><br/><br/>
        <h2  style={{marginLeft:20}}>Sample Paper</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{sample.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div><br/><br/>
        <h2  style={{marginLeft:20}}>Question Banks</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{QB.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div><br/><br/>
        <h2  style={{marginLeft:20}}>Mock Test Papers</h2>
       <div className="home-content">
        {/* <div className="home-contenta"> */}
			{mock.map((ele, idx) => (
            <Display id="aimg" key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }</div><br/><br/>
       <div className="final3">
       <img src="./assets/Academics/final31.jpg" alt="class 10 12" />
        <img src="./assets/Academics/final32.jpg" alt="class 10 12" />
        <img src="./assets/Academics/final33.jpg" alt="class 10 12" />
        <img src="./assets/Academics/final34.jpg" alt="class 10 12" />
        <img src="./assets/Academics/final35.jpg" alt="class 10 12" />
        <img src="./assets/Academics/final36.jpg" alt="class 10 12" />
       </div>
       <br/><br/>
       <img id="abg" src="./assets/Academics/favmen.jpg" alt="" />
       <br/><br/>
       <div className="content-summary">
        <h2><center>Bookland Gurukul</center></h2>
        <br/>
        <h2 style={{marginLeft:20}}>School Text Books</h2>
      
        <div className="yt-content">
			{scltxt.map((ele, idx) => (
            <Displayyt key={idx} image={ele.image}/>
          ))
       }</div>
       <br/><br/>
        <h2 style={{marginLeft:20}}>Exam Preparation</h2>
      
      <div className="yt-content">
    {examprep.map((ele, idx) => (
          <Displayyt key={idx} image={ele.image}/>
        ))
     }</div>
     <br/><br/>
      <h2 style={{marginLeft:20}}>Higher Education</h2>
      
      <div className="yt-content">
    {higheredu.map((ele, idx) => (
          <Displayyt key={idx} image={ele.image}/>
        ))
     }</div>
     <br/><br/>
       </div>
      </div>
       {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
      <div className="acad-footer">
        <Footer/>
      </div>
    </div>
  )
}
