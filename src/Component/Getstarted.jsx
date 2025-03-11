import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Getstarted.css";

const Getstarted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="./assets/homepageextraimg/bgvedio.mp4" type="video/mp4" />
      </video>
      <div className="get-started-bg">
        <div className="overlay">
          <h1 className="get-started-title">Welcome to Bookland 📚</h1>
        
        </div>
      </div>
    </>
  );
};

export default Getstarted;
