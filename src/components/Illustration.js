import React, { useState } from 'react';
import './Gallery.css';

// Images
import leafboyImage from '../images/leafboy.png';
import rhondaImage from '../images/rhonda.png';
import shhhImage from '../images/shhh.png';
import yukyoStationImage from '../images/yukyoStation.png';
import paperImage from '../images/paper.png';


function Illustration() {

    
    // Personal Work
    const [personalWorkData] = useState([
        {
            imageSrc: leafboyImage,
            // potentially add titles and descriptions here
        },
        {
            imageSrc: paperImage,
        },
      ]);

      // Fan illustration
      const [fanIllustrationData] = useState([
        {
            imageSrc: rhondaImage,
        },
        {
            imageSrc: shhhImage,
        },
        {
            imageSrc: yukyoStationImage,
        },
      ]);

    return (
    <div> {/* Updated class name here */}
        <div className="gallery-banner">
            <img src={rhondaImage} alt="Illustration Banner"/>
        </div>

        <div className="gallery-header">Personal Works</div>

        <div className="gallery-container">
            {personalWorkData.map((item, index) => (
                <div className="gallery-item" key={index}>
                    <img src={item.imageSrc} alt="missing"/>
                </div>
            ))}
        </div>

        <div className="gallery-header">Fan Illustration</div>

        <div className="gallery-container">
            {fanIllustrationData.map((item, index) => (
                <div className="gallery-item" key={index}>
                    <img src={item.imageSrc} alt="missing" />
                </div>
            ))}
        </div>

    </div>
    );
    
}

export default Illustration;
