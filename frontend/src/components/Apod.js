import React, { useEffect, useState } from "react";


export default function Apod(){

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
    
        async function fetchPhoto() {
          const res = await fetch(
                   

            `https://api.nasa.gov/planetary/apod?api_key=cBZnE40AExhLVH2K4idIsdICatuoNmadeLRzxLCL`
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