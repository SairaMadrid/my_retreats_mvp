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
    <div>
      <HotelForm searchHotel={searchHotel} />
      {showSearchResults && <SearchResults results={searchResults} />}
    </div>
  )
}

export default SearchPage
