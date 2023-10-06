import React, { useState } from "react"

function HotelForm({ searchHotel }) {
  const [location, setLocation] = useState("")

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleSearch = () => {
    if (location) {
      searchHotel(location)
    }
  }

  return (
    <div>
      <h2>Hotel Search</h2>
      <label className="text-start mx-1 form-label">Select a location:</label>
      <select id="location" name="location" onChange={handleLocationChange}>
        <option value="select">Select...</option>
        <option value="Alicante">Alicante</option>
        <option value="Madrid">Madrid</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Berlin">Berlin</option>
      </select>
      <button
        id="buttonLocation"
        className="btn btn-outline-primary mt-1"
        onClick={handleSearch}
      >
        Go!
      </button>
    </div>
  )
}

export default HotelForm
