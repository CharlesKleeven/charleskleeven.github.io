import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

/*
>> set logo to link back to home
Illustration: polished illustrative works
Pixel: characters, object, background/scene, animation
Character design: including turn around and other important work
Concept: environment, props, characters
About: perhaps switch to contact
*/

function Navbar() {
    const textStyle = {
        fontFamily: 'Exo 2, sans-serif', 
        textTransform: 'uppercase', 
        fontWeight: 300,
        letterSpacing: '0.5px', 
        lineHeight: '1.5',
      };

    const logoStyle = {
      fontFamily: 'Dancing Script',
      fontWeight: 600,
      fontSize: "30px",
      letterSpacing: '0.2px',
      lineHeight: '0.8',
    };

    return (
      <div className="navbar">
        <Link to="/" className="logo" style={logoStyle}>Charles Kleeven</Link>

        <ul className="nav-links" style={textStyle}>
          <li><NavLink to="/illustration" className="nav-link">Illustration</NavLink></li>

          <li className="dropdown">
            <NavLink exact to="/pixel-art" className="nav-link dropdown-link">Pixel Art</NavLink>
            <div className="dropdown-content">
                <NavLink to="/pixel-art/characters">Characters</NavLink>
                <NavLink to="/pixel-art/items">Items</NavLink>
                <NavLink to="/pixel-art/backgrounds">Scenes</NavLink>
                <NavLink to="/pixel-art/animations">Animations</NavLink>
            </div>
         </li>

            <li><NavLink to="/character-design" className="nav-link">Character Design</NavLink></li>

            <li className="dropdown">
              <NavLink to="/concept" className="nav-link">Concept</NavLink>
              <div className="dropdown-content">
                <NavLink to="/concept/environments">Environments</NavLink>
                <NavLink to="/concept/props">Props</NavLink>
                <NavLink to="/concept/characters">Characters</NavLink>
            </div>
          </li>

            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </div>
    );
}

export default Navbar;