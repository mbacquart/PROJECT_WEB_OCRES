import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureOfDay from './components/PictoreOfDay';
import MarsWeather from './components/MarsWeather';
import WhereTheIss from './components/WhereTheIss';
import WhatPlanet from './components/WhatPlanet'

function App() {
  return (
    <div className="App">
      <PictureOfDay />
      <MarsWeather />
      <WhereTheIss />
      <WhatPlanet />
    </div>
  );
}

export default App;
