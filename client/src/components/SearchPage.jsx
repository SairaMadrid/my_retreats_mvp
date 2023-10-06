import React, { useState, useEffect } from "react"
import HotelForm from "./HotelForm"
import SearchResults from "./SearchResults"

function SearchPage() {
  // State for storing search results and showing/hiding them
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  // Function to fetch hotel data based on location
  const searchHotel = async (location) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/hotels/location/${location}`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      setSearchResults(data)
      setShowSearchResults(true)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  // Function to toggle the favourite status of a hotel
  const handleToggleFavourite = async (hotelId, isFavourite) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/hotels/favourites/${hotelId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavourite }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to update favourite status")
      }

      // Update the local state with the new favourite status
      const updatedResults = searchResults.map((hotel) =>
        hotel.id === hotelId ? { ...hotel, isFavourite } : hotel
      )

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
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </div>
    </div>
  )
}

export default SearchPage
