import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Youngadult.css'
import '../index.css'
import Displayyt from './Displayyt'
import Display from './Display';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react'
import PopUp  from './PopUp';
import { sf,fictiony ,disney,dy,young,footer,art,tech,family,romance,cm,scf} from './Images/youngadult'
export default function Youngadult() {
   const [img,steImg]=useState("ybg1");
    var images=['ybg1','ybg2','ybg3','ybg4'];
  
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
         <div className="youngadult-header"><Header/></div>
        <div className="youngadult-header2">
        <div>
         <img src={`./assets/youngadult/${img}.jpg`} alt="body" id="bgimg" />
       </div>
        
         <nav className="young-nav">
      <ul className="young-list">
       <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Fiction</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Science Fiction</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Crime&Mystery</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Romance</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Family&Social</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Tech&Sci</a></li>
      <li ><a style={{color:"Black", textDecoration:"none"}} href="#">Art</a></li>
      </ul>
    </nav>
        </div>
    <div className="youngadult-content">
 <img src="./assets/youngadult/yibg1.jpg" alt="youngadult1" className='yimg'/><br/><br/>
 <h1 className='efont'>Popular Sci-Fi Books You'll Want To Read Right</h1><br/>
 <div className="home-content">
			{ sf.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)} />
          ))
       }
      </div><br/><br/>
      <h1 className='efont' id="youndsdult-fiction">Fiction</h1><br/>
 <div className="home-content">
			{ fictiony.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <h1 className='efont' id="sciencefiction"> Science Fiction</h1><br/>
 <div className="home-content">
			{ scf.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <img src="./assets/youngadult/yibg2.jpg" alt="Disney" className='yimg'/>
      <div className="home-content">
			{disney.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <br/><br/>
      <h1 className='efont' id="crime">Crime&Mystery</h1><br/>
 <div className="home-content">
			{ cm.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <div style={{gap:20}} className="child-category-3">
			<img src="./assets/youngadult/31.png" alt="img1" />
			<img src="./assets/youngadult/32.png" alt="img2" />
			<img src="./assets/youngadult/33.png" alt="img3" />
		</div><br/><br/>
    <h1 className='efont' id="art">Art Photography</h1><br/>
 <div className="home-content">
			{ art.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
    <img src="./assets/youngadult/yibg3.jpg" alt="Disney" className='yimg'/>
    <br/>
    <div className="home-content">
			{ dy.map((ele, idx) => ( 
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
      <h1 className='efont' id="tech">Tech Science</h1>
 <div className="home-content">
			{ tech.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <br/><br/><br/>
          <div style={{gap:20}} className="child-category">
			<div><img src="./assets/youngadult/ye1.png" alt="img1" />
      <h3 className='child-txt-img'>Political Engagement for Teens</h3>
      </div>
			<div><img src="./assets/youngadult/ye2.png" alt="img2" />
      <h3 className='child-txt-img'>Fantastical&Magical Fiction Reads</h3></div>
			<div><img src="./assets/youngadult/ye3.png" alt="img3" />
      <h3 className='child-txt-img'>Navigating Relationship</h3></div>
			<div><img src="./assets/youngadult/ye4.png" alt="img4" />
      <h3 className='child-txt-img'>Carrier Planning </h3></div>
		</div><br/><br/>
      <img src="./assets/youngadult/yibg4.jpg" alt="Disney" className='yimg'/>
    <br/>
    <div className="home-content">
			{ young.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
      <h1 className='efont'>Romance</h1><br/>
 <div className="home-content">
			{ romance.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <h1 className='efont'>Family&Social</h1><br/>
 <div className="home-content">
			{ family.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div>
      <h1 className='efont'>Browse By Themes</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/youngadult/b1.png" alt="img1" />
			<img src="./assets/youngadult/b2.png" alt="img2" />
			<img src="./assets/youngadult/b3.png" alt="img3" />
			<img src="./assets/youngadult/b4.png" alt="img4" />
		</div>
    <br/><br/>
    <h1 className='efont'>Best Deals For You</h1><br/>
          <div style={{gap:20}} className="child-category">
			<img src="./assets/children/20.png" alt="img1" />
			<img src="./assets/children/25.png" alt="img2" />
			<img src="./assets/children/30.png" alt="img3" />
			<img src="./assets/children/352.png" alt="img4" />
		</div><br/><br/>
    <h1 className='efont'>Popular Authors To Try</h1>
    <div className="yt-content">
			{footer.map((ele, idx) => (
            <Displayyt key={idx} image={ele.image}/>
          ))
       }</div>
	   <br/><br/>

         </div>
          {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
          <div className="youngadult-footer"><Footer/></div>
       </>
  )
}
