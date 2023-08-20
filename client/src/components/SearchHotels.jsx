import { useState } from "react";
import SearchInput from "./SearchInput"; // Import the SearchInput component
import HotelList from "./HotelList"; // Import the HotelList component

export default function SearchHotels({ hotels }) {
  const [searchText, setSearchText] = useState("");
  const foundHotels = filterHotels(hotels, searchLocationText); // Corrected variable name

  return (
    <div>
      <SearchInput
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />

      <HotelList
        hotels={foundHotels}
        emptyHeading={`No matches for “${searchText}”`}
      />
    </div>
  );
}
