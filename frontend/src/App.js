import React from 'react';
import './App.css';

import WhatPlanet from './components/WhatPlanet'
import PictureDay from './components/PictureDay';
import WhereIss from './components/WhereIss';
import PeopleSpace from './components/PeopleSpace';
import Chart from './components/Chart';
import Uvi from './components/Uvi';

function App() {
  return (
    <div className="App">
    <Chart />
  <Uvi />
  <PeopleSpace />
    <WhereIss />
    <PictureDay />

    
    
    </div>
  );
}

export default App;
