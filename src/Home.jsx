import React from 'react'
import Header from './Component/Header'
import Body from './Component/Body'
import './index.css'
import Content from './Component/Images/Content'
import Display from './Component/Display'
import Displayyt from './Component/Displayyt'
import Bestsellers from './Component/Images/Bestsellers'
import Preorder from './Component/Images/Preorder'
import Yteducators from './Component/Images/Yteducators'
import Most from './Component/Images/Most'
import Footer from './Component/Footer'
import { useState } from 'react'
import PopUp from './Component/PopUp'
import { Navigate ,useNavigate } from 'react-router-dom'
export default function Home() {
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
   const navigate=useNavigate();
   const homefooter=()=>{
    navigate('/offers')
  }

  return (
    <>
			<div className="homeHeader">
				<Header />
			</div>
			<div className="homeBody1">
				<Body/></div>
			<div className="homeBody">
			<img src="./assets/pre-order.jpg" alt="bestsellers" className="Bestimg" id="na"></img><br/>
			<h1 className='hfont'> <center>𝐍𝐞𝐰 𝐀𝐫𝐫𝐢𝐯𝐚𝐥 </center></h1><hr/><br/>
			<div className="home-content">
			{ Content.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
	  <h1 className='efont'>Books For All Academic Needs</h1><br/>
	  <div className="home-discount">
          <img src="./assets/homepageextraimg/50.jpg" alt="10-30" />
          <img src="./assets/homepageextraimg/45.jpg" alt="30-50" />
          <img src="./assets/homepageextraimg/40.jpg" alt="min 50" />
        </div>
		<br/><br/>
		<img id="tq" src="./assets/homepageextraimg/tq.jpg" alt="alt" /><br/><br/>
		<h1 className='efont'>Editor's Picks: Top Science Reads</h1>
		<br/>
		<div className="home-category">
			<img src="./assets/homepageextraimg/e1.jpg" alt="img1" />
			<img src="./assets/homepageextraimg/e2.jpg" alt="img2" />
			<img src="./assets/homepageextraimg/e3.jpg" alt="img3" />
			<img src="./assets/homepageextraimg/e4.jpg" alt="img4" />
		</div><br/><br/>
		<h1 className='efont'>Shop By Publishers
		</h1>
		<br/><br/>
		<div className="home-discount2">
          <img src="./assets/homepageextraimg/s1.jpg" alt="10-30" />
          <img src="./assets/homepageextraimg/s2.jpg" alt="30-50" />
          <img src="./assets/homepageextraimg/s3.jpg" alt="min 50" />
        </div>
	  <img src="./assets/bestsellers.png" alt="bestsellers" className="Bestimg" id="BestSellers"></img><br/><br/>
	  <h1 className='hfont'>𝐁𝐞𝐬𝐭 𝐒𝐞𝐥𝐥𝐞𝐫𝐬</h1><hr/><br/>
	  <div className="home-content">
			{ Bestsellers.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)} />
          ))
       }
      </div>
	  <img src="./assets/yt.jpg" alt="bestsellers" className="Bestimg" id="yt" ></img><br/><br/>
	  <h1 className='hfont'><center>𝐓𝐨𝐩 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐄𝐝𝐮𝐜𝐚𝐭𝐨𝐫𝐬</center></h1><hr/><br/>
	  <h3>𝐓𝐨𝐩 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐄𝐝𝐮𝐜𝐚𝐭𝐨𝐫𝐬</h3>
	  <div className="yt-content">
			{Yteducators.map((ele, idx) => (
            <Displayyt key={idx} image={ele.image} src={ele.src}/>
          ))
       }</div>
	   <br/><br/>
	   <h1 className='efont'>Short Reads For The Shortest Month</h1><br/><br/>
	   <div className="home-discount">
	   <img src="./assets/homepageextraimg/short1.jpg" alt="10-30" />
          <img src="./assets/homepageextraimg/short2.jpg" alt="30-50" />
          <img src="./assets/homepageextraimg/short3.jpg" alt="min 50" />
	   </div>
	  <img src="./assets/pre-order.jpg" alt="bestsellers" className="Bestimg" id="pre"  ></img><br/><br/>
	  <h1 className='hfont'>𝐏𝐫𝐞 𝐨𝐫𝐝𝐞𝐫</h1><hr/><br/>
	  <div className="home-content">
			{Preorder.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/>
	  <h1 className='efont'>Chapter Books Series For Kids</h1><br/><br/>
	  <div  style={{gap:10}}className="home-category">
			<img src="./assets/homepageextraimg/kids1.jpg" alt="img1" />
			<img src="./assets/homepageextraimg/kids2.jpg" alt="img2" />
			<img src="./assets/homepageextraimg/kids3.jpg" alt="img3" />
			<img src="./assets/homepageextraimg/kids4.jpg" alt="img4" />
		</div><br/><br/>
	  <img src="./assets/mst.jpg" alt="bestsellers" className="Bestimg" id="mst"  ></img><br/><br/>
	  <h1 className='hfont'>Most buyed</h1><hr/><br/>
	  <div className="home-content">
			{Most.map((ele, idx) => (
            <Display key={idx} image={ele.image} name={ele.name} author={ele.author} price={ele.price} onClick={()=>ItemClick(ele)}/>
          ))
       }
      </div><br/><br/>
	  <h1 className='efont'>Top Exam Prep</h1><br/>
	  <div className="home-category">
			<div><img src="./assets/homepageextraimg/ex1.jpg" alt="img1" /><p className='img-txt'>IIT JEE</p></div>
			<div><img src="./assets/homepageextraimg/ex2.jpg" alt="img2" /> <p className='img-txt'>CUET</p></div>
			<div><img src="./assets/homepageextraimg/ex3.jpg" alt="img3" /><p className='img-txt'>CBSC</p></div>
			<div><img src="./assets/homepageextraimg/ex4.jpg" alt="img4" /><p className='img-txt'>ICSE</p></div>
		</div><br/><br/>
	  <img id="homefooter" src="./assets/homepageextraimg/footer.jpg" onClick={homefooter}alt="footer" /></div>
	  {showPopup&&<PopUp ele={currentEle} onClose={closePopup}/>}
	 <Footer/>
	</>
  )
}
