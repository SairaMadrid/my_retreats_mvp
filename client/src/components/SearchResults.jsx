import React, { useState } from "react"
import HotelCard from "./HotelCard"

const SearchResults = ({ results }) => {
  const [selectedHotel, setSelectedHotel] = useState(null)

  const toggleDescription = (hotel) => {
    setSelectedHotel(selectedHotel === hotel ? null : hotel)
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Search Results</h2>
      <div className="row">
        {results.length > 0 ? (
          results.map((hotel) => (
            <div key={hotel.id} className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <h5
                  className="hotel-name-link"
                  onClick={() => toggleDescription(hotel)}
                >
                  <a href="#!">{hotel.name}</a>
                </h5>
                <HotelCard hotel={hotel} />
                {selectedHotel === hotel && (
                  <div className="description-overlay">
                    <div className="modal-container">
                      <div className="hotel-description">
                        {hotel.description}
                        <button
                          className="close-button"
                          onClick={() => toggleDescription(hotel)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="col">No hotels found for the selected location.</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults

/* return (
    <div className="container">
      <h2 className="mt-4 mb-3">Search Results</h2>
      <div className="row">
        {results.length > 0 ? (
          <div className="card-container">
            {results.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <p>No hotels found for the selected location.</p>
        )}
      </div>
    </div>
  )
} */

{
  /* <div>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((hotel) => (
            <li key={hotel.id}>
              {hotel.name} - {hotel.location}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hotels found for the selected location.</p>
      )}
    </div>
  ) */
}
