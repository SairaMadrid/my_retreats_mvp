import React from "react"

const HotelCard = ({ hotel }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        {" "}
        {/* Use h-100 to ensure equal card height */}
        <img
          src={hotel.image_URL}
          className="card-img-top rounded"
          alt={hotel.name} // Add an alt attribute for accessibility
        />
        <div className="card-body">
          <p className="card-title">{hotel.name}</p>
          <p className="card-text">Location: {hotel.location}</p>
          <p className="card-text">Price: {hotel.price_range}</p>
          <div className="container text-center">
            <div>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
