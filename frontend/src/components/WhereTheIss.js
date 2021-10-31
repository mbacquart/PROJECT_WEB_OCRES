import React, { useEffect, useState } from "react";
import { API_URL } from './API/api-iss';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule
} from "react-simple-maps";


export default function WhereTheIss(){

    const [issData, setIssData] = useState(null);


    const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  return (
    <div></div>

  );
};
    useEffect(() => {
        fetchPhoto();
    
        async function fetchPhoto() {
          const res = await fetch(
            API_URL
          );
          const data = await res.json();
          setIssData(data);
        }
      }, []);


      if (!issData) return <div />;    


    return(
        <div className="photo-nasa">
        <img
          src={issData.url}
          alt={issData.title}
          className="photo"
        />
      <div>
        <h1>International Space Station</h1>
        <p>Visibilité : {issData.visibility}</p>
        <p>Latitude : {issData.latitude}</p>
        <p>Longitude : {issData.longitude}</p>
        <p>Altitude : {issData.altitude}</p>
        <p>Vitesse : {issData.velocity} km/h</p>
        <p className="date">{issData.visibility}</p>
      
        <ComposableMap projectionConfig={{ scale: 147 }}>
    <Graticule stroke="#F53" />
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>
    <Marker coordinates={[issData.longitude, issData.latitude]}>
      <circle r={4} fill="#F53" />
    </Marker>
  </ComposableMap>
  < MapChart />
      </div>

    </div>

    );
}


