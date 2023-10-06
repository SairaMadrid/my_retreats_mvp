import React, { Component } from "react"

class Favourites extends Component {
  constructor() {
    super()
    this.state = {
      hotels: [], // Store favourite hotels here
    }
  }

  async addToFavorites(hotelId) {
    const apiUrl = `/favourites/${hotelId}`

    try {
      // Make a POST request to the API endpoint
      const response = await fetch(apiUrl, {
        method: "POST", // Assuming you use POST to add a favorite
        headers: {
          "Content-Type": "application/json", // Adjust the content type as needed
        },

        body: JSON.stringify({ hotelId }),
      })

      if (!response.ok) {
        throw new Error("Failed to add to favorites")
      }

      // Handle the response data, e.g., update the state
      const data = await response.json()
      const updatedHotels = [...this.state.hotels, data.favouriteHotel]
      this.setState({ hotels: updatedHotels })
    } catch (error) {
      console.error("Error:", error)
    }
  }

  render() {
    return (
      <div>
        {/* <h1>Favourite Hotels</h1> */}
        <ul>
          {this.state.hotels.map((hotel) => (
            <li key={hotel.id}>
              <img src={hotel["image URL"]} alt={hotel.name} />
              <h2>{hotel.name}</h2>
              <p>{hotel.location}</p>
              <button onClick={() => this.addToFavourites(hotel.id)}>
                Add to Favourites
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Favourites
