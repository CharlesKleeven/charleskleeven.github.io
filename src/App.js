import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Illustration from './components/Illustration';
import PixelArt from './components/PixelArt';
import CharacterDesign from './components/CharacterDesign';
import Concept from './components/Concept';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route ath='/' component={<Home/>} />
          <Route path="/illustration" component={Illustration} />
          <Route path="/pixel-art" component={PixelArt} />
          <Route path="/character-design" component={CharacterDesign} />
          <Route path="/concept" component={Concept} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
