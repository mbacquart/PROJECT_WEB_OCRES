import React from 'react';
import logo from './logo.svg';
import './App.css';

import MarsWeather from './components/MarsWeather';

import WhatPlanet from './components/WhatPlanet'
import PictureDay from './components/PictureDay';
import WhereIss from './components/WhereIss';
import PeopleSpace from './components/PeopleSpace';


function App() {
  return (
    <div className="App">
  <PeopleSpace />
    <WhereIss />
    <PictureDay />

      <MarsWeather />
    
      <WhatPlanet />
    </div>
  );
}

export default App;
