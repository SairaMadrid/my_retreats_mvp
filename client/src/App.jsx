import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Splash from "./components/Splash"
import HotelForm from "./components/HotelForm"
//import HotelsList from "./components/HotelsList"
//import HotelCard from "./components/HotelCard"
import NavBar from "./components/NavBar"
import SearchResults from "./components/SearchResults"

const App = () => {
  const [searchResults, setSearchResults] = useState([])

  const searchHotel = async (location) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/hotels/location/${location}`
      )
      const data = await response.json()
      setSearchResults(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="container mt-2">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Splash />}></Route>
        <Route path="/home" element={<HotelForm searchHotel={searchHotel} />} />
      </Routes>
      <SearchResults results={searchResults} />
    </div>
  )
}

export default App
