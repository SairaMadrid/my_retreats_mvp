import React from "react";

export default function HotelsList({
  hotels,
  deleteHotels,
  showHotels,
}) {
  return (
    <div className="container mt-5">
      <ul>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <ul>
              <span onClick={() => showHotels(hotel.id)}>
                {hotel.location} {hotel.description} {hotel.price_range}
              </span>
            </ul>

            <div className="container text-center">
              <div onClick={() => deleteHotels(hotel.id)}>
                <i className="fa-solid fa-heart-circle-minus fa-xl"></i>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}