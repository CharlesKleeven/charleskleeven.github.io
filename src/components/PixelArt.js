import React from 'react';
import './Gallery.css'; 
import templeImage from '../images/temple.png'; 


function PixelArt() {
  return (
    <div className="gallery-banner">
      <img src={templeImage} alt="Pixel Art"/>
    </div>
  );
}

export default PixelArt;
