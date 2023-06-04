
 import { useState } from 'react';

export default function SearchHotels() {
const [searchLocationText, setSearchText] = useState('');
const foundHotels = filterHotels(hotels, searchText);
  
return (
    <div>
    <SearchInput
        value={searchLocationText}
        onChange={newText => setSearchText(newText)} />
    
    <HotelList
        hotels={foundHotels}
        emptyHeading={`No matches for “${searchText}”`} />
        </div>
  ) 

}