import React, { useEffect, useState } from "react";

function HotelsList(){
  
const [hotels, setHotels] = useState([]);

useEffect(() => {
  getHotels();
}, []);

const getHotels = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/hotels");
    const jsonData = await response.json();
setHotels(jsonData);
  }
catch (error) {
    console.error(err.message);
  }
};

  return (
    <div className="container mt-5">
      <ul>
          {hotels.map((hotel) => (
            <div key={hotel.id}>
              <ul>
              <li onClick={() => handleClick(hotel.image_URL)}>
                </li>
              </ul>
        <div className="card" style={{ width: "18rem" }}>
            <img src={hotel.image_URL} className="card-img-top rounded" />
            <div className="card-body">
              <p className="card-text">{hotel.name}</p>
              <p className="card-text">{hotel.location}</p>
              
              <div className="container text-center">
              <div><i class="fa-solid fa-heart"></i></div>
              <div onClick={() => deleteHotels(hotel.id)}>
              <div><i class="fa-solid fa-trash"></i></div> 
              </div>
            </div>
           </div>
            </div>
          </div>
          
        ))}
      </ul>
    </div>
   
  );
} 

export default HotelsList;