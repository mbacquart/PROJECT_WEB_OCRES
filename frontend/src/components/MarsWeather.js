import React, { useEffect, useState } from "react";
import { API_URL } from './API/api-mars';



export default function WhereTheIss(){

    const [issData, setIssData] = useState(null);

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
        <h1>Mars Weather</h1>
        <p>Dernière mise à jour : {issData.terrestrial_date}</p>
        <p>Sunrise: {issData.sunrise}</p>
        <p>Sunset: {issData.sunset}</p>
        <p>Index des rayons UV: {issData.local_uv_irradiance_index}</p>
        <p>Temperature min: {issData.min_temp} {issData.unitOfMeasure} </p>
        <p>Temperature max: {issData.max_temp}  {issData.unitOfMeasure}</p>
        <p>Pression {issData.pressure}</p>
      </div>

    </div>

    );
}