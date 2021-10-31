import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureOfDay from './components/PictoreOfDay';
import MarsWeather from './components/MarsWeather';
import WhereTheIss from './components/WhereTheIss'

function App() {
  return (
    <div className="App">
      <PictureOfDay />
      <MarsWeather />
      <WhereTheIss />
    </div>
  );
}

export default App;
