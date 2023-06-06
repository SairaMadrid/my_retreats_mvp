import React, { useEffect, useState } from "react";

function HotelsList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/hotels");
      const jsonData = await response.json();
      setHotels(jsonData);
    } catch (error) {
      console.error(err.message);
    }
  };

  return (
    <div className="container mt-5">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="card me-3 mb-3"
          style={{ width: "30%", display: "inline-block" }}
        >
          <img
            src={hotel.image_URL}
            className="card-img-top rounded"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
          <div className="card-body">
            <p className="card-title">{hotel.name}</p>
            <p className="card-text">{hotel.location}</p>

            <div className="container text-center">
              <div>
                <i className="fa-solid fa-heart"></i>
              </div>
              <div onClick={() => deleteHotels(hotel.id)}>
                <div>
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelsList;
