import React, { useState } from "react"

const HotelCard = ({ hotel }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState)
  }

  const toggleDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  return (
    <div className="card h-100 hotel-card">
      <div style={{ position: "relative" }}>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100"> */}
        <img
          src={hotel.image_URL}
          className="card-img-top rounded"
          alt={hotel.name} // Add an alt attribute for accessibility
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
          }}
        >
          <div
            className={`heart-icon ${isFavorite ? "favorite" : ""}`}
            onClick={toggleFavorite}
          >
            <i
              className="fa-solid fa-heart"
              style={{ color: isFavorite ? "red" : "white" }}
            ></i>
          </div>
        </div>
        <div className="card-body">
          {/* <p className="card-title">{hotel.name}</p> */}
          <p className="card-text">Location: {hotel.location}</p>
          <p className="card-text">Price: {hotel.price_range}</p>
          <p className="card-text">
            Yoga:{" "}
            {hotel.yoga ? (
              <i className="fas fa-check-circle text-success"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </p>
          <p className="card-text">
            Spa:{" "}
            {hotel.spa ? (
              <i className="fas fa-check-circle text-success"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </p>
          {/* <a
            href="#!"
            className="read-more"
            onClick={(e) => {
              e.preventDefault() // Prevent default link behavior
              // Handle read more logic here if needed
            }}
          >
            Read More
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default HotelCard
