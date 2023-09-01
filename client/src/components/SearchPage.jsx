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

  return (
    <div className="search-page-container">
      <div className="search-page-content text-center">
        <HotelForm searchHotel={searchHotel} />
        {showSearchResults && <SearchResults results={searchResults} />}
      </div>
    </div>
  )
}

export default SearchPage
