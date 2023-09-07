/* import React, { useState, useEffect } from "react"

const HotelCard = ({ hotel, onToggleFavourite }) => {
  const [isFavourite, setIsFavourite] = useState(hotel.isFavorite)

  useEffect(() => {
    // Update the component state when the hotel's favourite status changes
    setIsFavourite(hotel.isFavourite)
  }, [hotel.isFavourite])

  const toggleFavourite = () => {
    // Update the state immediately to provide feedback to the user
    setIsFavourite((prevState) => !prevState)
  }

  // Notify the parent component that the favourite status has changed
  onToggleFavourite(hotel.id, !isFavourite)

  // Make an API request to add/remove the hotel from favorites
  const apiUrl = `/api/favourites/${hotel.id}` // Adjust the API endpoint
  fetch(apiUrl, {
    method: "POST", // Use POST or PUT based on your API design
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to toggle favourite")
      }
      // Handle the API response as needed, e.g., you can parse JSON response
      return response.json()
    })
    .then((data) => {
      // Handle the data if needed
      console.log("API Response Data:", data)
    })
    .catch((error) => {
      console.error("Error:", error)
      // Revert the state if there is an error
      setIsFavourite((prevState) => !prevState)
    })

  return (
    <div className="card h-100 hotel-card">
      <div style={{ position: "relative" }}>
        <img
          src={hotel["image URL"]}
          className="card-img-top rounded"
          alt={hotel.name}
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
            className={`heart-icon ${isFavourite ? "favourite" : ""}`}
            onClick={toggleFavourite}
          >
            <i
              className="fa-solid fa-heart"
              style={{ color: isFavourite ? "red" : "white" }}
            ></i>
          </div>
        </div>
        <div className="card-body">
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
        </div>
      </div>
    </div>
  )
}

export default HotelCard */

import React, { useState, useEffect } from "react"

const HotelCard = ({ hotel, onToggleFavourite }) => {
  const [isFavourite, setIsFavourite] = useState(hotel.isFavourite)

  useEffect(() => {
    // Update the component state when the hotel's favourite status changes
    setIsFavourite(hotel.isFavourite)
  }, [hotel.isFavourite])

  const toggleFavourite = () => {
    // Update the state immediately to provide feedback to the user
    setIsFavourite((prevState) => !prevState)

    const apiUrl = `/api/favourites/${hotel.id}`
    fetch(apiUrl, {
      method: "PUT", // Use POST or PUT based on your API design
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to toggle favourite")
        }
        // Handle the API response as needed, e.g., you can parse JSON response
        return response.json()
      })
      .then((data) => {
        // Handle the data if needed
        console.log("API Response Data:", data)
        // Notify the parent component that the favourite status has changed
        onToggleFavourite(hotel.id, !isFavourite)
      })
      .catch((error) => {
        console.error("Error:", error)
        // Revert the state if there is an error
        setIsFavourite((prevState) => !prevState)
      })
  }

  return (
    <div className="card h-100 hotel-card">
      <div style={{ position: "relative" }}>
        <img
          src={hotel["image URL"]}
          className="card-img-top rounded"
          alt={hotel.name}
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
            className={`heart-icon ${isFavourite ? "favourite" : ""}`}
            onClick={toggleFavourite}
          >
            <i
              className="fa-solid fa-heart"
              style={{ color: isFavourite ? "red" : "white" }}
            ></i>
          </div>
        </div>
        <div className="card-body">
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
        </div>
      </div>
    </div>
  )
}

export default HotelCard
