import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Fiction.css';
import '../index.css';
import Displayyt from './Displayyt'
import Display from './Display';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import{cls,award,fromance,fclass,indianwrite,fsff,action,crime} from './Images/fictionimg';
import { HiArrowCircleRight } from "react-icons/hi";
import PopUp from './PopUp'
export default function Fiction() {
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
    <>
      <div className="fiction-header"><Header/></div>
      <div className="fiction-header2">
        <img src="./assets/fiction/bg1.png" alt="Fiction background" />
        <nav className="fic-nav">
      <ul className="fic-list">
       <li ><a style={{color:"Black", textDecoration:"none"}} href="#romid">Romance</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#clsid">Classics</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#aaid">Action&Adventure</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#cmid">Crime,Mystery</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#sfid">Science,Fiction&Fantasy</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#iwid">Indian Writing</a></li>
      </ul>
    </nav>
      </div>
      <div className="fiction-content">
        <br/><br/>
       <h1 className='efont'>Explore Classics Authors By Country</h1>
     <br/>
      <div style={{gap:20}} className="fic-category-3">
			<div><img src="./assets/fiction/l1.png" alt="img1" />
      <h3 className='img-txt-fic'>Indian <HiArrowCircleRight /></h3></div>
			<div><img src="./assets/fiction/l2.png" alt="img1" />
      <h3 className='img-txt-fic'>Russian <HiArrowCircleRight /></h3></div>
			<div><img src="./assets/fiction/l3.png" alt="img1" />
      <h3 className='img-txt-fic'>Grrek <HiArrowCircleRight /></h3></div>
      <div><img src="./assets/fiction/l4.png" alt="img1" />
      <h3 className='img-txt-fic'>English <HiArrowCircleRight /></h3></div>
      <div><img src="./assets/fiction/l5.png" alt="img1" />
      <h3 className='img-txt-fic'>American <HiArrowCircleRight /></h3></div>
      <div><img src="./assets/fiction/l6.png" alt="img1" />
      <h3 className='img-txt-fic'>Japanese <HiArrowCircleRight /></h3></div>
		</div><br/><br/>
    <h1 id="romid" className='efont'>Romance</h1>
    <div className="home-content">
			{fromance.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
    <h1 className='efont'>Select Classics By Genre</h1><br/>
    <div style={{gap:20}} className="fic-category-3">
    <div><img src="./assets/fiction/sc1.png" alt="img1" />
      <h3 className='img-txt-fic'>Detective Fiction</h3></div>
			<div><img src="./assets/fiction/sc2.png" alt="img1" />
      <h3 className='img-txt-fic'>Romantic Novels</h3></div>
			<div><img src="./assets/fiction/sc3.png" alt="img1" />
      <h3 className='img-txt-fic'>Science Fiction</h3></div>
		</div><br/><br/>
    <h1 id="clsid"className='efont'>Classics</h1>
    <div className="home-content">
			{fclass.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
    <h1 className='efont'>Bookland Recommendations</h1><br/>
    <div style={{gap:20}} className="fic-category-3">
     <img src="./assets/fiction/trend1.png" alt="img1" />
     <img src="./assets/fiction/trend2.png" alt="img1" />
     <img src="./assets/fiction/trend3.png" alt="img1" />
     
		</div><br/><br/>
    <img className="fimg"src="./assets/fiction/clsbg.png" alt="" />
    <br/><br/>
 <div className="home-content">
			{ cls.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
      <h1 id="aaid"className='efont'>Action&Adventure</h1>
    <div className="home-content">
			{action.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
      <h1 id="cmid"className='efont'>Crime&Mystery</h1>
    <div className="home-content">
			{crime.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <img className='fimg' src="./assets/fiction/awdbg.png" alt="" />
      <h1 className='efont'>Award Winners</h1><br/>
 <div className="home-content">
			{award.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <h1 className='efont'>Editor's Picks</h1>
		<br/>
		<div className="fict-category">
			<img src="./assets/fiction/e1.png" alt="img1" />
			<img src="./assets/fiction/e2.png" alt="img2" />
			<img src="./assets/fiction/e3.png" alt="img3" />
			<img src="./assets/fiction/e4.png" alt="img4" />
		</div><br/><br/>
    <img className="fimg"src="./assets/fiction/ibg1.png" alt="" />

    <div style={{gap:20}} className="fic-category-3"><br/><br/>
			<div><img src="./assets/fiction/inter1.png" alt="img1" />
      <h3 className='img-txt-fic'>International Clasics Authors of Yesteryear <HiArrowCircleRight /></h3></div>
			<div><img src="./assets/fiction/inter2.png" alt="img1" />
      <h3 className='img-txt-fic'>Top Contemporary Classics Writes <HiArrowCircleRight /></h3></div>
			<div><img src="./assets/fiction/inter3.png" alt="img1" />
      <h3 className='img-txt-fic'>The Finest Classical Fiction Authors <HiArrowCircleRight /></h3></div>
      </div><br/><br/>
      <h1 className='efont'>Regional Language Adaptations</h1><br/>
      <div style={{gap:20}} className="fict-category">
			<div><img src="./assets/fiction/ilang1.png" alt="img1" />
      <h3 className='img-txt-fic'>Hindi</h3></div>
			<div><img src="./assets/fiction/ilang2.png" alt="img1" />
      <h3 className='img-txt-fic'>Malayalam</h3></div>
			<div><img src="./assets/fiction/ilang3.png" alt="img1" />
      <h3 className='img-txt-fic'>Gujarati</h3></div>
      <div><img src="./assets/fiction/ilang4.png" alt="img1" />
      <h3 className='img-txt-fic'>Tamil</h3></div></div><br/><br/>
      <h1 id="iwid" className='efont'>Indian Writing</h1>
    <div className="home-content">
			{indianwrite.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)} />
          ))
       }
      </div>
      <br/> <h1 className='efont'>Editor's Picks</h1>
		<br/>
    <div style={{gap:20}} className="fict-category">
			<div><img src="./assets/fiction/e21.png" alt="img1" />
      <h3 className='img-txt-fic'>Top 100 Must Read Classics</h3></div>
			<div><img src="./assets/fiction/e22.png" alt="img1" />
      <h3 className='img-txt-fic'>Modern Love Stories</h3></div>
			<div><img src="./assets/fiction/e23.png" alt="img1" />
      <h3 className='img-txt-fic'>Myths,Legends&Sagas</h3></div>
      <div><img src="./assets/fiction/e24.png" alt="img1" />
      <h3 className='img-txt-fic'>Racy Read For Lazy Days</h3></div></div><br/><br/>
      


      <h1 id="sfid"className='efont'>Science&Fantasy</h1>
    <div className="home-content">
			{fsff.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price}  onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>


      <h1 className='efont'>Best Deals For You</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/children/20.png" alt="img1" />
			<img src="./assets/children/25.png" alt="img2" />
			<img src="./assets/children/30.png" alt="img3" />
			<img src="./assets/children/352.png" alt="img4" />
		</div><br/><br/>
      <img className='fimg' src="./assets/fiction/ficfoot.png" alt="footer" />
    </div>
      {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
      <div className="fiction-footer"><Footer/></div>
    </>
  );
}
