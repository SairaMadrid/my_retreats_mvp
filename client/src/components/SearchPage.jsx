/* import React, { useState } from "react"
import HotelForm from "./HotelForm"
import SearchResults from "./SearchResults"

function SearchPage() {
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const searchHotel = async (location) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/hotels/location/${location}`
      )
      const data = await response.json()
      setSearchResults(data)
      setShowSearchResults(true)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="search-page-container">
      <div className="search-page-content text-center">
        <HotelForm searchHotel={searchHotel} />
        {showSearchResults && <SearchResults results={searchResults} />}
      </div>
    </div>
  )
}

export default SearchPage */

import React, { useState } from "react"
import HotelForm from "./HotelForm"
import SearchResults from "./SearchResults"

function SearchPage() {
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const searchHotel = async (location) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/hotels/location/${location}`
      )
      const data = await response.json()
      setSearchResults(data)
      setShowSearchResults(true)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  // Function to toggle the favourite status of a hotel
  const handleToggleFavourite = async (hotelId, isFavourite) => {
    // Make an API request to update the favourite status of the hotel
    try {
      const response = await fetch(
        `http://localhost:4000/api/hotels/favourites/${hotelId}`,
        {
          method: "POST", // Use PUT to update the favourite status
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavourite }), // Send the updated favourite status
        }
      )

      if (!response.ok) {
        throw new Error("Failed to update favourite status")
      }

      // Update the local state with the new favourite status
      const updatedResults = searchResults.map((hotel) => {
        if (hotel.id === hotelId) {
          return { ...hotel, isFavourite }
        }
        return hotel
      })

      setSearchResults(updatedResults)
    } catch (error) {
      console.error("Error updating favourite status:", error)
    }
  }

  return (
    <div className="search-page-container">
      <div className="search-page-content text-center">
        <HotelForm searchHotel={searchHotel} />
        {showSearchResults && (
          <SearchResults
            results={searchResults}
            onToggleFavourite={handleToggleFavourite} // Pass the function down
          />
        )}
      </div>
    </div>
  )
}

export default SearchPage
