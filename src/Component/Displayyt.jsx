import React from 'react';

import './Body.css';
export default function Displayyt({ image,src }) {
 
  return (
    <div className="yt-box">
 <a href={src} target="_blank" rel="noopener noreferrer">
  <img src={image}/>
</a>
</div>
  );
}