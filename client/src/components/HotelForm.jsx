import React, { useState } from "react"

/* const initialHotelState = {
    location: "",
    price_range: "",
    yoga: false,
    spa: false,
  }
  const [newHotel, setNewHotel] = useState(initialHotelState)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const newValue = type === "checkbox" ? checked : value
    setNewHotel((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchHotel(newHotel) // Call the searchHotel function with the newHotel state
  } */
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
      {/* <form className="mt-5" onSubmit={handleSubmit}>
        <div className="row mt-5">
          <div className="col"> */}
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

      <div className="col">
        {/* <label className="text-start mx-1 form-label">Price range:</label>
              <select
                className="form-select mt-1"
                name="price_range"
                value={newHotel.price_range}
                onChange={handleChange}
              >
                <option value="select">Select...</option>
                <option value="budget">Budget</option>
                <option value="mid range">Mid range</option>
                <option value="luxury">Luxury</option>
              </select> */}
        <div className="col">
          {/* <label className="text-start mx-1">Yoga onsite?</label>
                <input
                  type="checkbox"
                  className="mt-3"
                  name="yoga"
                  checked={newHotel.yoga}
                  onChange={handleChange}
                /> */}
          <div className="col">
            {/* <label className="text-start mx-1">Spa?</label>
                  <input
                    type="checkbox"
                    className="mt-3"
                    name="spa"
                    checked={newHotel.spa}
                    onChange={handleChange}
                  /> */}
          </div>
        </div>
      </div>
      {/* <button type="submit" className="btn btn-outline-primary mt-1">
              Find hotels
            </button> */}
      <br />
    </div>
    /* </div>
      </form>
    </div> */
  )
}

export default HotelForm
