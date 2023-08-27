import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Splash from "./components/Splash"
//import HotelsList from "./components/HotelsList"
//import HotelCard from "./components/HotelCard"
import NavBar from "./components/NavBar"
import SearchPage from "./components/SearchPage"

const App = () => {
  return (
    <div className="container mt-2">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Splash />}></Route>
        <Route path="/home" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
