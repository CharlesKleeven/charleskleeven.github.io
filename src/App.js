import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Illustration from './components/Illustration';
import PixelArt from './components/PixelArt';
import CharacterDesign from './components/CharacterDesign';
import Concept from './components/Concept';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/pixel-art" element={<PixelArt />} />
          <Route path="/character-design" element={<CharacterDesign />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
