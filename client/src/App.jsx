import { useEffect, useState } from "react"
//import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Splash from "./components/Splash"
import HotelForm from "./components/HotelForm"
import HotelsList from "./components/HotelsList"
//import HotelCard from "./components/HotelCard";
import NavBar from "./components/NavBar"

function App() {
  useEffect(() => {
    getHotels()
  }, [])

  const getHotels = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/hotels")
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const jsonData = await response.json()
      getHotels(jsonData)
    } catch (error) {
      console.error("Error fetching hotels:", error.message)
    }
  }

  return (
    <div className="container mt-2">
      <Splash />
      {/* <NavBar /> */}

      <div>
        {/* Pass the searchHotel function to the HotelForm component */}
        <HotelForm />
        {/* Pass the searchResult to the HotelsList component */}
        <HotelsList />
      </div>
    </div>
  )
}

export default App
