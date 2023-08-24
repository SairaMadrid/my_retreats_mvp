import React, { useState } from "react"
import HotelCard from "./HotelCard"

const SearchResults = ({ results }) => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Search Results</h2>
      <div className="row">
        {results.length > 0 ? (
          results.map((hotel) => (
            <div key={hotel.id} className="col-md-4 mb-3">
              <HotelCard hotel={hotel} />
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
