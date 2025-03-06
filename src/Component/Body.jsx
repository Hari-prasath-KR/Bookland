import React, { useState,useEffect } from 'react'
import './Body.css'
import {useNavigate } from 'react-router-dom';
export default function Body() {
  const navigate=useNavigate();
  const top=()=>{
    navigate('/toppublishers');
  }
  const offer=()=>{
    navigate('/offers');
  }
  const languages=()=>{
    navigate('/languages');
  }
  const academic=()=>{
    navigate('/academic');
  }
  const nonfiction=()=>{
    navigate('/non-fiction');
  }
  const fiction=()=>{
    navigate('/fiction');
  }
  const children=()=>{
    navigate('/children');
  }
  const youngadult=()=>{
    navigate('/youngadult');
  }
  const romance=()=>{
    navigate('/fiction#romid')
  }
  const action=()=>{
    navigate('/fiction#aaid')
  }
  const classics=()=>{
    navigate('/fiction#clsid')
  }
  const science=()=>{
    navigate('/fiction#sfid')
  }
  const crime=()=>{
    navigate('/fiction#cmid')
  }
  const yfiction=()=>{
    navigate('/youngadult#youndsdult-fiction')
  }
  const ysf=()=>{
    navigate('/youngadult#sciencefiction')
  } 
  const ytech=()=>{
    navigate('/youngadult#tech')
  }
  const yart=()=>{
    navigate('/youngadult#art')
  }
  const ycrime=()=>{
    navigate('/youngadult#crime')
  }
  var images=['dis','body','love','bg2','bg3'];

  const [img,steImg]=useState(images[0]);
  
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
  },[images]);
  return (
    <>
      <nav className='bnavbar'>
  <ul>
    <li className="dropdown">
      <h3 className="dropbtn" onClick={academic}>Academics</h3>
      <div className="dropdown-content">
        <h5><b>School Books</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="/academic#cbsc">CBSC</a>
        <a href="/academic#icsc">CISCE</a>
        <a href="#">International Boards</a>
        <a href="#">Open Schooling</a>
        <a href="/academic#olympaid">Olympiads & Scholarship</a>
        <a href="/academic#stateboard">State Board</a>
        <h5><b>Government Exams</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Upsc Civil Services Mains</a>
        <a href="#">Upsc Civil Services Prelims</a>
        <a href="#">Indian Engineering Services</a>
        <a href="#">SSC</a>
        <a href="#">Teacher Recruitment Exams</a>
        <a href="#">UGC</a>
        <a href="#">Indian Railway Recruitment</a>
        <a href="#">Police Exams</a>
        <a href="#">PSU Recruitment</a><a></a><a></a><a></a>
        <h5><b>Medical Entrance Exam</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">NEET&AIIMS</a>
        <a href="#">B.Pharm</a>
        <a href="#">Dental</a>
        <a href="#">Nursing</a>
        <a href="#">PGMEE</a><a></a>
        <h5><b>Higher Education</b></h5>
        <a/><a></a><a></a><a></a><a></a>
        <a href="#">Computer Science</a>
        <a href="#">Information Technology</a>
        <a href="#">Mechanical</a>
        <a href="#">Civil</a>
        <a href="#">Aerospace</a>
        <a href="#">Aeronautics</a>
        <a href="#">Bio Technology</a>
        <a href="#">Marine</a>
        <a href="#">Industrial</a><a></a><a></a><a></a>
        <h5>Computer Sciece</h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Programming languages</a>
        <a href="#">Aritificial Intelligence</a>
        <a href="#">Machine Learning</a>
        <a href="#">Databases&Big data</a>
        <a href="#">Operating Systems</a>
        <a href="#">Web development</a>
        <a href="#">Networking</a>
        <a href="#">Algorithms</a>
        <a href="#">Software Design</a>
        <a href="#">Data Structure</a>
        <a href="#">Computer Modeling</a><a></a>
        <h5>Business and Finance</h5>
        <a></a><a></a><a></a><a></a><a></a>
         <a href="#">Accounting</a>
        <a href="#">Managment</a>
        <a href="#">Economics</a>
        <a href="#">Marketing</a>
        <a href="#">Sales</a>
        <a href="#">Banking</a>
        <a href="#">Real Estate</a>
        <a href="#">Business Communication</a>
        <a></a><a></a><a></a><a></a>
        <h5>Linguistics</h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Dictionaries</a>
        <a href="#">Journalism</a>
        <a href="#">Grammer</a>
    </div>
    </li>
      <li className="dropdown">
      <h3 className="dropbtn"  onClick={nonfiction}>NonFiction</h3>
      <div className="dropdown-content">
      <h5><b>Sports</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Cricket</a>
        <a href="#">BasketBall</a>
        <a href="#">Football</a>
        <a href="#">Badmiton</a>
        <a href="#">BodyBuilding</a>
        <a href="#">Cycling</a>
        <a href="#">Golf</a>
        <a href="#">Hockey</a>
        <a href="#">Marathon&Running</a>
        <a href="#">Table Tennis</a>
        <a href="#">Tennis</a>
        <a href="#">Triathion</a>
        <a href="#">American Footbal</a>
        <a href="#">Juggling</a>
        <a href="#">Winter Sports</a>
        <a href="#">NetBall</a>
        <a href="#">Baseball</a>
        <a href="#">Skofball</a>
        <h5><b>Economics</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Commerce</a>
        <a href="#">Econometrics&Statistics</a>
        <a href="#">Economic Policy &Development</a>
        <a href="#">Development & Growth</a>
        <a href="#">Economic Conditions</a>
        <a href="#">Economic History</a>
        <a href="#">Banks&Banking</a>
        <a href="#">Commercial policy</a>
        <a href="#">Comparative Economics</a>
        <a href="#">Inflation</a>
        <a href="#">Free Enterprise</a>
        <a href="#">Microeconomics</a>
        <a href="#">Unemployment</a>
        <a href="#">Urban & Regional Economics</a><a></a><a></a><a></a><a></a>
        <h5><b>Business Development</b></h5>
        <h5><b>& Enterpreneur</b></h5><a></a><a></a><a></a><a></a>
        <a href="#">Commerce</a>
        <a href="#">Econometrics&Statistics</a>
        <a href="#">Economic Policy &Development</a>
        <a href="#">Development & Growth</a>
        <a href="#">Economic Conditions</a>
        </div></li>
        <li className="dropdown">
      <h3 className="dropbtn" onClick={fiction}>Fiction</h3>
      <div className="dropdown-content">
        <h5 onClick={romance}><b>Romance</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Anthologies</a>
        <a href="#">Contemporary</a>
        <a href="#">Fantasy</a>
        <a href="#">Historical</a>
        <a href="#">Comedy</a>
        <a href="#">Suspense</a>
        <h5  onClick={classics}><b>Classics</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">American</a>
        <a href="#">Ancient</a>
        <a href="#">Indian</a>
        <a href="#">Asian</a>
        <a href="#">English,Irish</a>
        <a href="#">Scottish</a>
        <h5 onClick={action}><b>Action & Advanture</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Historical Adventure</a>
        <a href="#">War & Combat</a>
        <a></a><a></a><a></a><a></a>
        <h5  onClick={crime} ><b>Crime,Mystery</b></h5>
        <h5><b>& Thrillers</b></h5><a></a><a></a><a></a><a></a>
        <a href="#">Mystery</a>
        <a href="#">Crime</a>
        <a href="#">Thrillers &Suspense</a>
        <a></a><a></a><a></a>
        <h5 onClick={science}><b>Science,Fiction</b></h5>
       <h5><b>&Fantasy</b></h5><a></a><a></a><a></a><a></a>
        <a href="#">Science Fiction</a>
        <a href="#">Fantasy</a>
        <a href="#">Horror</a>
        <a href="#">Dystopian</a>
        </div></li>
    <li className="dropdown">
      <h3 className="dropbtn" onClick={children}>Childrens</h3>
      <div className="dropdown-content">
        <h5><b>Early Learning</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Alphabets</a>
        <a href="#">Body</a>
        <a href="#">Numbers&Counting</a>
        <a href="#">colours</a>
        <a href="#">Animals &Pets</a><a></a>
        <h5><b>Picture Books</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Pictures</a>
        <a href="#">PopUp</a>
        <a href="#">Lift-the-flag</a><a></a><a></a><a></a>
        <h5><b>Activity Books</b></h5>
        <a></a><a></a><a></a><a></a><a></a>
        <a href="#">Painting</a>
        <a href="#">Colouring</a>
        <a href="#">Games&Needlecraft</a>
        <a href="#">Quisses</a>
    </div></li>
    <li className="dropdownl">
      <h3 className="dropbtnl" onClick={youngadult}>YoungAdult</h3>
      <div className="dropdown-contentl">
      <h5  onClick={yfiction}><b>Fiction</b></h5>
        <a></a><a></a><a></a><a></a>
        <a href="#">Classics</a>
        <a href="#">Action&Adventure</a>
        <a href="#">Short Stories</a>
        <a href="#">Light Novels</a>
        <a href="#">Historical</a>
        <a href="#">Humour</a>
        <a href="#">Religious</a>
        <a href="#">Poetry</a>
        <a href="#">Drama</a>
        <a href="#">Literary</a>
        <a href="#">Travel</a>
        <a></a><a></a><a></a><a></a>
        <h5 onClick={ysf}><b> Science Fiction&</b></h5>
        <h5 onClick={ysf}><b>Fantasy</b></h5><a></a><a></a><a></a>
        <a href="#">Science fiction</a>
        <a href="#">Fantasy</a>
        <a href="#">Horror</a>
        <a href="#">Dystopian</a><a/>
        <h5 onClick={ytech}><b>Technology,Nature</b></h5>
        <h5 onClick={ytech}><b>&Science</b></h5><a></a><a></a><a></a>
        <a href="#">Technology</a>
        <a href="#">Health Sciences</a>
        <a href="#">Discoveries</a>
        <a href="#">History ofScience</a>
        <a href="#">Biology</a>
        <a href="#">Astronomy</a>
        <a href="#">Physics</a>
        <a href="#">Chemistry</a>
        <a href="#">Zoolagy</a>
        <a href="#">Earth science</a>
        <h5 onClick={yart}><b>Arts&Photography</b></h5>
      <a/><a></a><a></a><a></a>
        <a href="#">Drawing</a>
        <a href="#">Paiting</a>
        <a href="#">Musics</a>
        <a href="#">Performing Arts</a>
        <a href="#">Fashion</a>
        <a href="#">Architecture</a>
        <a href="#">Photography</a>
       <a/><a/><a/>
       <h5 onClick={ycrime}><b>Hobbies&Games</b></h5>
      <a/><a></a><a></a><a></a>
        <a href="#">Games&Activities</a>
        <a href="#">Craft&Hobbies</a>
        <a href="#">Cooking</a>
        </div></li>
      <li className="dropdownl">
      <h3 className="dropbtnl" onClick={languages}>Language</h3>
      <div className="dropdown-contentl">
         <a href="/languages#hindiimg">Hindi</a>
        <a href="/languages#maraimg">Marathi</a>
        <a href="/languages#benimg">Bengali</a>
        <a href="/languages#gujimg">Gujarati</a>
        <a href="/languages#malaimg">Malayalam</a>
        <a href="/languages#tamilimg">Tamil</a>
        <a href="/languages#punimg">Punjabi</a>
        <a href="/languages#others">French</a>
        <a href="/languages#others">German</a>
        <a href="/languages#others">Italian</a>
        <a href="/languages#others">Spanish</a>
        <a href="/languages#others">Chinese</a>
        <a href="/languages#others">Latin</a>
        <a href="/languages#others">Vietnamese</a>
        <a href="/languages#others">Portuguese</a>
        <a href="/languages#others">Dutch</a>
        <a href="/languages#others">Flemish</a>
        </div></li>
      <li className="dropdownl">
      <h3 className="dropbtnl"> <div className="boffer" style={{marginLeft:20}} onClick={offer}>OFFERS</div></h3>
      <div className="dropdown-contentl"></div></li>
   
  </ul>
</nav>

    <div>
      <img src={`./assets/${img}.png`} alt="body" className='bimg' />
    </div>
    <nav className='bnavbar' >
      <ul>
        <li>New Arrival</li>
        <li className='scroll'><a style={{color:"Black", textDecoration:"none"}} href="#BestSellers">BestSellers</a></li>
        <li className='scroll'><a style={{color:"Black", textDecoration:"none"}} href="#yt">YT Educators</a></li>
        <li className='scroll'><a style={{color:"Black", textDecoration:"none"}} href="#mst">Most buyed</a></li>
        <li className='scroll'><a style={{color:"Black", textDecoration:"none"}} href="#pre">Preorder</a></li>
        <li onClick={top} className="top"><a style={{color:"Black", textDecoration:"none"}}  >TopPublisers</a></li>
      </ul>
    </nav>
    </>
  )
}
