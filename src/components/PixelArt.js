import React from 'react';
import './PixelArt.css'; 
import templeImage from '../images/temple.png';


function PixelArt() {
  return (
    <div className="pixel-art-banner">
      <img src={templeImage} alt="Pixel Art"/>
    </div>
  );
}

export default PixelArt;
