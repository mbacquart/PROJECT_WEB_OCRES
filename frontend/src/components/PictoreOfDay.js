import React, { useEffect, useState } from "react";
import { API_URL } from './API/api-nasa';



export default function PictureOfDay(){

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
    
        async function fetchPhoto() {
          const res = await fetch(
            API_URL
          );
          const data = await res.json();
          setPhotoData(data);
        }
      }, []);


      if (!photoData) return <div />;    


    return(
        <div className="photo-nasa">
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
     
      </div>
    </div>

    );
}